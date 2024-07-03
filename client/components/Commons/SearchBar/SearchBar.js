import React, { useEffect, useState } from 'react';
import { Select, Space } from 'antd';
import styles from "./SearchBar.module.css";
import { ButtonComp } from '../ButtonComp/ButtonComp';
import axios from 'axios';
import { useRouter } from 'next/router';

const SearchBar = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [makesArray, setMakesArray] = useState([]);
    const [modelsArray, setModelsArray] = useState([]);
    const [partsArray, setPartsArray] = useState([]);
    const [partAccessoriesArray, setPartAccessoriesArray] = useState([]);

    const [selectedMake, setSelectedMake] = useState(null);
    const [selectedModel, setSelectedModel] = useState(null);
    const [selectedPart, setSelectedPart] = useState(null);
    const [selectedAccessory, setSelectedAccessory] = useState(null);

    const getAllMakes = async () => {
        setLoading(true);
        await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/makes`).then((res) => {
            setLoading(false);
            if (res.status === 200) {
                setMakesArray(res.data?.map(f => ({ value: f, label: f })));
            }
            else {
                console.error(res.data.errorMessage);
            }
        }).catch(err => {
            setLoading(false);
            console.log(err);
        });
    }

    const getAllModelsByMake = async (make) => {
        setLoading(true);
        await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/models/make`, { make }).then((res) => {
            setLoading(false);
            if (res.status === 200) {
                setModelsArray(res.data?.map(f => ({ value: f, label: f })));
            }
            else {
                console.error(res.data.errorMessage);
            }
        }).catch(err => {
            setLoading(false);
            console.log(err);
        });
    }

    const getAllPartByModel = async (model) => {
        setLoading(true);
        await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/parts/model`, { model }).then((res) => {
            setLoading(false);
            if (res.status === 200) {
                setPartsArray(res.data?.map(f => ({ value: f, label: f })));
            }
            else {
                console.error(res.data.errorMessage);
            }
        }).catch(err => {
            setLoading(false);
            console.log(err);
        });
    }

    const getAllPartAccessoriesByPart = async (part) => {
        setLoading(true);
        await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/partaccessories/part`, { part }).then((res) => {
            setLoading(false);
            if (res.status === 200) {
                setPartAccessoriesArray(res.data?.map(f => ({ value: f, label: f })));
            }
            else {
                console.error(res.data.errorMessage);
            }
        }).catch(err => {
            setLoading(false);
            console.log(err);
        });
    }

    useEffect(() => {
        getAllMakes();
    }, []);

    const handleSearch = () => {
        if (selectedMake) {
            const query = new URLSearchParams();

            if (selectedMake) query.append('make', selectedMake);
            if (selectedModel) query.append('model', selectedModel);
            if (selectedPart) query.append('part', selectedPart);
            if (selectedAccessory) query.append('accessory', selectedAccessory);

            router.push(`/shop?${query.toString()}`);
        }
    };

    return (
        <div className={styles.SearchBar}>
            <div className='flex gap-6 justify-center flex-wrap w-full'>
                {/* <label>Make</label> */}
                <Select
                    className={styles.select}
                    loading={loading}
                    placeholder="Make"
                    onChange={(val) => {
                        setSelectedMake(val);
                        getAllModelsByMake(val);
                    }}
                    options={makesArray}
                />
                {/* <label>Model</label> */}
                <Select
                    className={styles.select}
                    loading={loading}
                    placeholder="Model"
                    onChange={(val) => {
                        setSelectedModel(val);
                        getAllPartByModel(val);
                    }}
                    options={modelsArray}
                />
                {/* <label>Part</label> */}
                <Select
                    className={styles.select}
                    loading={loading}
                    placeholder="Part"
                    onChange={(val) => {
                        setSelectedPart(val);
                        getAllPartAccessoriesByPart(val);
                    }}
                    options={partsArray}
                />
                {/* <label>Accessories</label> */}
                <Select
                    className={styles.select}
                    loading={loading}
                    placeholder="Accessories"
                    onChange={(val) => setSelectedAccessory(val)}
                    options={partAccessoriesArray}
                />
                <ButtonComp text="Search" onClick={handleSearch} />
            </div>
        </div>
    );
};

export default SearchBar;
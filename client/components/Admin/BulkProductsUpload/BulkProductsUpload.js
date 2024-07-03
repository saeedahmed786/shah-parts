import { useState } from 'react';
import axios from 'axios';
import { ErrorAlert, SuccessAlert } from '@/components/Commons/Messages/Messages';
import styles from "./BulkProductsUpload.module.css"
import { ButtonComp } from '@/components/Commons/ButtonComp/ButtonComp';

export const BulkProductsUpload = ({ updateParentData }) => {
    const [file, setFile] = useState(null);
    const [fileLoading, setFileLoading] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };


    const transformImages = (product) => {
        const imageKeys = Object.keys(product).filter(key => key.startsWith('image'));
        const pictures = imageKeys.map(key => product[key]).filter(link => link);

        return { pictures };
    };

    const transformKeysToLowerCase = (obj) => {
        return Object.keys(obj)?.reduce((acc, key) => {
            acc[key?.toLowerCase()] = obj[key];
            return acc;
        }, {});
    };


    const handleUpload = async () => {
        if (!file) return;

        setFileLoading(true);
        const reader = new FileReader();
        reader.onload = async (e) => {
            setFileLoading(false);
            const data = JSON.parse(e.target.result);
            const products = await data.map(product => {
                let categories = product?.categories?.split(' > ');
                if (categories && categories?.length > 0) {
                    return ({
                        ...product,
                        part: categories[2],
                        partaccessorries: categories[3],
                        ...transformImages(product)
                    })
                }
            });
            setLoading(true);
            const finalProducts = products?.map(product => transformKeysToLowerCase(product));
            await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/bulk-upload`, { products: finalProducts }, {
                headers: {
                    authorization: 'Bearer ' + localStorage.getItem('token')
                }
            }).then(res => {
                setLoading(false);
                if (res.statusText === "OK") {
                    SuccessAlert(res.data.successMessage);
                    updateParentData();
                }
                else {
                    ErrorAlert(res.data.errorMessage);
                }
            }).catch(err => {
                setLoading(false);
                console.log(err)
                ErrorAlert(err?.message);
            })
        };

        reader.readAsText(file);
    };

    return (
        <div className={styles.BulkProductsUpload}>
            <div>
                <h1>Bulk Upload JSON File</h1>
            </div>
            <div>
                <input type="file" accept=".json" onChange={handleFileChange} />
            </div>
            <div>
                <ButtonComp text="Upload" loading={loading || fileLoading} disabled={loading || fileLoading} onClick={handleUpload} />
            </div>
        </div>
    );
}

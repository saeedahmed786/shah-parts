import { Input, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { RightOutlined } from '@ant-design/icons';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import AdminLayout from '@/components/Layouts/Admin/AdminLayout';
import { ErrorAlert, SuccessAlert } from '@/components/Commons/Messages/Messages';
import Link from 'next/link';
import DragUpload from '@/components/Commons/DragUpload/DragUpload';
import { useRouter } from 'next/router';
import { ButtonComp } from '@/components/Commons/ButtonComp/ButtonComp';
import Loading from '@/components/Commons/Loading/Loading';

const UpdateProduct = () => {
    const router = useRouter();
    let productId = router?.query?.id;
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        pictures: '',
        description: '',
        featured: '',
        make: '',
        model: '',
        part: '',
        partaccessorries: '',
        location: '',
        condition: '',
        modelCode: '',
        regyearmonth: '',
        mileage: '',
        missiontype: '',
        enginemodel: '',
        enginesize: '',
        fuel: '',
        drive: '',
        autopartsmaker: '',
        genuinepartsno: '',
        chassisno: '',
        refno: '',
        geartype: ''
    });

    /*********************************************** onChange *******************************************/
    const handleChange = (key, value) => {
        setFormData({
            ...formData,
            [key]: value
        });
    }

    /************************************************ Submit **********************************************/

    const submitHandler = (e) => {
        e.preventDefault();
        setLoading(true);
        axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/update/${productId}`, formData, {
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then(res => {
            setLoading(false);
            if (res.status === 200) {
                SuccessAlert(res.data.successMessage);
                router.push("/admin/products");
            } else {
                ErrorAlert(res.data.errorMessage);
            }
        }).catch(err => {
            setLoading(false);
            console.log(err);
            ErrorAlert(err?.message);
        });
    }

    const getProductById = async (prId) => {
        setLoading(true);
        await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/product/${prId}`).then(res => {
            setLoading(false);
            if (res.statusText === "OK") {
                setFormData(res.data);
            } else {
                ErrorAlert(res.data.errorMessage);
            }
        }).catch(err => {
            setLoading(false);
            console.log(err);
            ErrorAlert(err?.message);
        });
    }

    useEffect(() => {
        productId !== undefined && getProductById(productId);

        return () => {

        }
    }, [productId]);

    return (
        <AdminLayout sidebar>
            <div className='Pages pt-6 md:max-w-[60vw]'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 justify-center items-center py-4'>
                        <span>Admin</span> <RightOutlined /> <button className='text-[#0094DA]'>Update product</button>
                    </div>
                </div>
                {
                    loading ?
                        <Loading />
                        :
                        <form onSubmit={submitHandler}>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <h1 className='text-[33px] font-bold'>Update a Product</h1>
                                </div>
                                <div>
                                    <Link href='/admin/products' type="button" className="btn-close" aria-label="Close"></Link>
                                </div>
                            </div>
                            <div className="form-group mt-4">
                                <label>Title</label> <br />
                                <Input value={formData?.title} required type="text" className="form-control mb-2" placeholder="Enter Your Product Title" onChange={(e) => handleChange("title", e.target.value)} />
                            </div>
                            <div className="form-group mt-4">
                                <label>Price</label> <br />
                                <Input value={formData?.price} required type="number" className="form-control mb-2" placeholder="Enter Product's Price" onChange={(e) => handleChange("price", e.target.value)} />
                            </div>
                            <div className="form-group mt-4">
                                <label>Description</label> <br />
                                <Input value={formData?.description} type="text" className="form-control mb-2" placeholder="Enter Product's Description" onChange={(e) => handleChange("description", e.target.value)} />
                            </div>
                            <div className="form-group mt-4">
                                <label>Featured</label> <br />
                                <Select className='w-full' value={formData.featured} placeholder="Featured" onChange={(value) => handleChange("featured", value)} options={[
                                    { value: "yes", label: "Yes" },
                                    { value: "no", label: "No" }
                                ]} />
                            </div>
                            <div className="form-group mt-4">
                                <label>Make</label> <br />
                                <Input value={formData?.make} type="text" className="form-control mb-2" placeholder="Enter Product's Make" onChange={(e) => handleChange("make", e.target.value)} />
                            </div>
                            <div className="form-group mt-4">
                                <label>Model</label> <br />
                                <Input value={formData?.model} type="text" className="form-control mb-2" placeholder="Enter Product's Model" onChange={(e) => handleChange("model", e.target.value)} />
                            </div>
                            <div className="form-group mt-4">
                                <label>Part</label> <br />
                                <Input value={formData?.part} type="text" className="form-control mb-2" placeholder="Enter Product's Part" onChange={(e) => handleChange("part", e.target.value)} />
                            </div>
                            <div className="form-group mt-4">
                                <label>Part Accessories</label> <br />
                                <Input value={formData?.partaccessorries} type="text" className="form-control mb-2" placeholder="Enter Product's Part Accessories" onChange={(e) => handleChange("partaccessorries", e.target.value)} />
                            </div>
                            <div className="form-group mt-4">
                                <label>Location</label> <br />
                                <Input value={formData?.location} type="text" className="form-control mb-2" placeholder="Enter Product's Location" onChange={(e) => handleChange("location", e.target.value)} />
                            </div>
                            <div className="form-group mt-4">
                                <label>Condition</label> <br />
                                <Input value={formData?.condition} type="text" className="form-control mb-2" placeholder="Enter Product's Condition" onChange={(e) => handleChange("condition", e.target.value)} />
                            </div>
                            <div className="form-group mt-4">
                                <label>Model Code</label> <br />
                                <Input value={formData?.modelCode} type="text" className="form-control mb-2" placeholder="Enter Product's Model Code" onChange={(e) => handleChange("modelCode", e.target.value)} />
                            </div>
                            <div className="form-group mt-4">
                                <label>Registration Year/Month</label> <br />
                                <Input value={formData?.regyearmonth} type="text" className="form-control mb-2" placeholder="Enter Product's Registration Year/Month" onChange={(e) => handleChange("regyearmonth", e.target.value)} />
                            </div>
                            <div className="form-group mt-4">
                                <label>Mileage</label> <br />
                                <Input value={formData?.mileage} type="text" className="form-control mb-2" placeholder="Enter Product's Mileage" onChange={(e) => handleChange("mileage", e.target.value)} />
                            </div>
                            <div className="form-group mt-4">
                                <label>Mission Type</label> <br />
                                <Input value={formData?.missiontype} type="text" className="form-control mb-2" placeholder="Enter Product's Mission Type" onChange={(e) => handleChange("missiontype", e.target.value)} />
                            </div>
                            <div className="form-group mt-4">
                                <label>Engine Model</label> < br />
                                <Input value={formData?.enginemodel} type="text" className="form-control mb-2" placeholder="Enter Product's Engine Model" onChange={(e) => handleChange("enginemodel", e.target.value)} />
                            </div>
                            <div className="form-group mt-4">
                                <label>Engine Size</label> <br />
                                <Input value={formData?.enginesize} type="text" className="form-control mb-2" placeholder="Enter Product's Engine Size" onChange={(e) => handleChange("enginesize", e.target.value)} />
                            </div>
                            <div className="form-group mt-4">
                                <label>Fuel</label> <br />
                                <Input value={formData?.fuel} type="text" className="form-control mb-2" placeholder="Enter Product's Fuel" onChange={(e) => handleChange("fuel", e.target.value)} />
                            </div>
                            <div className="form-group mt-4">
                                <label>Drive</label> <br />
                                <Input value={formData?.drive} type="text" className="form-control mb-2" placeholder="Enter Product's Drive" onChange={(e) => handleChange("drive", e.target.value)} />
                            </div>
                            <div className="form-group mt-4">
                                <label>Auto Parts Maker</label> <br />
                                <Input value={formData?.autopartsmaker} type="text" className="form-control mb-2" placeholder="Enter Product's Auto Parts Maker" onChange={(e) => handleChange("autopartsmaker", e.target.value)} />
                            </div>
                            <div className="form-group mt-4">
                                <label>Genuine Parts Number</label> <br />
                                <Input value={formData?.genuinepartsno} type="text" className="form-control mb-2" placeholder="Enter Product's Genuine Parts Number" onChange={(e) => handleChange("genuinepartsno", e.target.value)} />
                            </div>
                            <div className="form-group mt-4">
                                <label>Chassis Number</label> <br />
                                <Input value={formData?.chassisno} type="text" className="form-control mb-2" placeholder="Enter Product's Chassis Number" onChange={(e) => handleChange("chassisno", e.target.value)} />
                            </div>
                            <div className="form-group mt-4">
                                <label>Reference Number</label> <br />
                                <Input value={formData?.refno} type="text" className="form-control mb-2" placeholder="Enter Product's Reference Number" onChange={(e) => handleChange("refno", e.target.value)} />
                            </div>
                            <div className="form-group mt-4">
                                <label>Gear Type</label> < br />
                                <Input value={formData?.geartype} type="text" className="form-control mb-2" placeholder="Enter Product's Gear Type" onChange={(e) => handleChange("geartype", e.target.value)} />
                            </div>
                            <div className='my-3'>
                                <label>Pictures</label> < br />
                                <DragUpload value={formData?.pictures} updateFiles={(val) => handleChange("pictures", val)} />
                            </div>
                            <div className='mt-5'>
                                <ButtonComp type='primary' htmlType="submit" loading={loading} disabled={loading} text="Submit" />
                            </div>
                        </form>
                }
            </div>
        </AdminLayout>
    );
}

export default UpdateProduct;

import { Pagination, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { DeleteOutlined, EditOutlined, EyeOutlined, RightOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
import axios from 'axios'
import moment from 'moment'
import Link from 'next/link'
import { ErrorAlert, SuccessAlert } from '@/components/Commons/Messages/Messages'
import AdminLayout from '@/components/Layouts/Admin/AdminLayout';
import Image from 'next/image'
import { ButtonComp } from '@/components/Commons/ButtonComp/ButtonComp'
import DeleteModal from '@/components/Commons/DeleteModal/DeleteModal'
import { BulkProductsUpload } from '@/components/Admin/BulkProductsUpload/BulkProductsUpload'

const Products = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [current, setCurrent] = useState(1);
    const [totalCount, setTotalCount] = useState();

    const getAllData = async () => {
        setLoading(true);
        await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/get`, { page: current - 1, pageSize: "20" }).then(res => {
            setLoading(false);
            if (res.status === 200) {
                setProducts(res.data?.products);
                setTotalCount(res.data.count)
            }
            else {
                ErrorAlert(res.data.errorMessage);
            }
        }).catch(err => {
            setLoading(false);
            console.log(err)
        });
    }

    useEffect(() => {
        getAllData()

        return () => {

        }
    }, [current])



    const deleteHandler = async (id) => {
        await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/delete/${id}`, {
            headers: {
                authorization: 'Bearer ' + localStorage.getItem("token")
            }
        }).then(res => {
            if (res.statusText === "OK") {
                SuccessAlert(res.data.successMessage)
                getAllData();
            } else {
                ErrorAlert(res.data.errorMessage)
            }
        }).catch(err => {
            console.log(err);
            ErrorAlert(err?.message);
        })
    }

    const columns = [
        {
            title: '#',
            key: 'index',
            render: (_, __, index) => (
                <div>{(current - 1) * 20 + index + 1}</div>
            ),
        },
        {
            title: 'ID',
            dataIndex: '_id',
            key: '_id',
            sorter: (a, b) => a?._id > b?._id,
            render: (_, { _id }) => (
                <>
                    <div className='text-[#0094DA] text-[12px] font-[500]'>{_id}</div>
                </>
            ),
        },
        {
            title: "Title",
            dataIndex: 'title',
            key: 'title',
            sorter: (a, b) => a?.title?.localeCompare(b?.title),
            render: (_, { title }) => (
                <p className='textElipsisTwoLines'>
                    {title}
                </p>
            ),
        },
        {
            title: "Price",
            dataIndex: 'price',
            key: 'price',
            sorter: (a, b) => a?.price - b?.price,
        },
        {
            title: "Description",
            dataIndex: 'description',
            key: 'description',
            sorter: (a, b) => a?.description?.localeCompare(b?.description),
            render: (_, { description }) => (
                <p className='textElipsisTwoLines'>
                    {description}
                </p>
            ),
        },
        {
            title: "Make",
            dataIndex: 'make',
            key: 'make',
            sorter: (a, b) => a?.make?.localeCompare(b?.make),
        },
        {
            title: "Model",
            dataIndex: 'model',
            key: 'model',
            sorter: (a, b) => a?.model?.localeCompare(b?.model),
        },
        {
            title: "Part",
            dataIndex: 'part',
            key: 'part',
            sorter: (a, b) => a?.part?.localeCompare(b?.part),
        },
        {
            title: "Part Accessorries",
            dataIndex: 'partaccessorries',
            key: 'partaccessorries',
            sorter: (a, b) => a?.partaccessorries?.localeCompare(b?.partaccessorries),
        },
        {
            title: "Location",
            dataIndex: 'location',
            key: 'location',
            sorter: (a, b) => a?.location?.localeCompare(b?.location),
        },
        {
            title: "Condition",
            dataIndex: 'condition',
            key: 'condition',
            sorter: (a, b) => a?.condition?.localeCompare(b?.condition),
        },
        {
            title: "Model Code",
            dataIndex: 'modelCode',
            key: 'modelCode',
            sorter: (a, b) => a?.modelCode?.localeCompare(b?.modelCode),
        },
        {
            title: "Reg Year/Month",
            dataIndex: 'regyearmonth',
            key: 'regyearmonth',
            sorter: (a, b) => a?.regyearmonth?.localeCompare(b?.regyearmonth),
        },
        {
            title: "Mileage",
            dataIndex: 'mileage',
            key: 'mileage',
            sorter: (a, b) => a?.mileage?.localeCompare(b?.mileage),
        },
        {
            title: "Mission Type",
            dataIndex: 'missiontype',
            key: 'missiontype',
            sorter: (a, b) => a?.missiontype?.localeCompare(b?.missiontype),
        },
        {
            title: "Engine Model",
            dataIndex: 'enginemodel',
            key: 'enginemodel',
            sorter: (a, b) => a?.enginemodel?.localeCompare(b?.enginemodel),
        },
        {
            title: "Engine Size",
            dataIndex: 'enginesize',
            key: 'enginesize',
            sorter: (a, b) => a?.enginesize?.localeCompare(b?.enginesize),
        },
        {
            title: "Fuel",
            dataIndex: 'fuel',
            key: 'fuel',
            sorter: (a, b) => a?.fuel?.localeCompare(b?.fuel),
        },
        {
            title: "Drive",
            dataIndex: 'drive',
            key: 'drive',
            sorter: (a, b) => a?.drive?.localeCompare(b?.drive),
        },
        {
            title: "Auto Parts Maker",
            dataIndex: 'autopartsmaker',
            key: 'autopartsmaker',
            sorter: (a, b) => a?.autopartsmaker?.localeCompare(b?.autopartsmaker),
        },
        {
            title: "Genuine Parts No.",
            dataIndex: 'genuinepartsno',
            key: 'genuinepartsno',
            sorter: (a, b) => a?.genuinepartsno?.localeCompare(b?.genuinepartsno),
        },
        {
            title: "Chassis No.",
            dataIndex: 'chassisno',
            key: 'chassisno',
            sorter: (a, b) => a?.chassisno?.localeCompare(b?.chassisno),
        },
        {
            title: "Ref No.",
            dataIndex: 'refno',
            key: 'refno',
            sorter: (a, b) => a?.refno?.localeCompare(b?.refno),
        },
        {
            title: "Gear Type",
            dataIndex: 'geartype',
            key: 'geartype',
            sorter: (a, b) => a?.geartype?.localeCompare(b?.geartype),
        },
        {
            title: "Pictures",
            dataIndex: 'pictures',
            key: 'pictures',
            render: (_, { pictures }) => (
                <div className='flex gap-2 flex-wrap items-center w-[130px]'>
                    {
                        pictures?.length > 0 &&
                        pictures?.map(pic => {
                            return (
                                <Image src={pic} width={32} height={32} style={{ width: "32px", height: "32px" }} />
                            )
                        })
                    }
                </div>
            ),
        },
        {
            title: "Actions",
            render: (_, product) => (
                <>
                    <div className='flex items-center gap-4'>
                        <Link href={"/product/" + product._id}><EyeOutlined /></Link>
                        <EditOutlined onClick={() => router.push(`/admin/update-product/${product._id}`)} />
                        <DeleteModal id={product?._id} deleteFun={deleteHandler} deleteBtn={<DeleteOutlined style={{ verticalAlign: "middle" }} />} />
                    </div>
                </>
            ),
        },
    ];



    return (
        <AdminLayout sidebar>
            <div className='Pages pt-6'>
                <div className='md:flex justify-between flex-wrap items-start pb-8'>
                    <div>
                        <div className='flex gap-2 justify-start items-center pb-4'>
                            <span>Admin</span> <RightOutlined /> <div className='text-[#0094DA] bg-transparent'>Products</div>
                        </div>
                        <h1 className='text-[33px] font-bold'>Products</h1>
                    </div>
                    <div className='mt-8 md:mt-0'>
                        <ButtonComp type='primary' onClick={() => router.push("/admin/create-product")} htmlType="submit" loading={loading} disabled={loading} text="Add Product" />
                    </div>
                </div>
                <BulkProductsUpload updateParentData={getAllData} />
                <div className='hidden md:block bg-white'>
                    <h3 className='p-4 text-[28px]'>Total Results: {totalCount}</h3>
                    <Table loading={loading} showSorterTooltip columns={columns} pagination={false} dataSource={products} />
                </div>
                <div className='flex justify-center my-10'>
                    <Pagination current={current} defaultPageSize={20} showSizeChanger={false} onChange={(page) => setCurrent(page)} total={totalCount} />
                </div>
            </div>
        </AdminLayout>
    )
}

export default Products

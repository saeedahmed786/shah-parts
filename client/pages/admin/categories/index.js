import { BulkCategoriesUpload } from '@/components/Admin/BulkCategoriesUpload/BulkCategoriesUpload';
import { ButtonComp } from '@/components/Commons/ButtonComp/ButtonComp';
import { ErrorAlert } from '@/components/Commons/Messages/Messages';
import AdminLayout from '@/components/Layouts/Admin/AdminLayout';
import { Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from "./categories.module.css"

const Categories = () => {
  const [categories, setCategories] = useState([]);
  // const [categoriesOptions, setCategoriesOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllCategories = async () => {
    setLoading(true);
    await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/categories/get`).then(res => {
      setLoading(false);
      if (res.statusText === "OK") {
        setCategories(res.data);
      } else {
        ErrorAlert(res.data.errorMessage);
      }
    }).catch(err => {
      setLoading(false);
      console.log(err)
      ErrorAlert(err?.message);
    })
  }

  useEffect(() => {
    getAllCategories();
    return () => {
    }
  }, []);


  const downloadFile = () => {
    // Convert JSON data to a Blob
    const blob = new Blob([JSON.stringify(categories)], { type: 'application/json' });

    // Create a URL for the Blob
    const url = window.URL.createObjectURL(blob);

    // Create a temporary anchor element
    const a = document.createElement('a');
    a.href = url;
    a.download = 'categories.json'; // Set the file name

    // Programmatically trigger a click event on the anchor element
    a.click();

    // Release the URL object
    window.URL.revokeObjectURL(url);
  };


  const columns = [
    {
      title: '#',
      key: 'index',
      render: (_, __, index) => (
        <div>{index + 1}</div>
      ),
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      sorter: (a, b) => a?.title?.localeCompare(b?.title),
    },
  ];

  return (
    <AdminLayout sidebar>
      <div className={styles.categories}>
        {/* Create categories */}
        <div className='flex justify-between items-center gap-4 my-4'>
          <h1 className='text-[33px] font-bold'>Categories</h1>
          <div className={styles.manageCategories}>
            <ButtonComp text="Download Categories JSON" onClick={downloadFile} />
          </div>
        </div>
        <BulkCategoriesUpload updateParentData={getAllCategories} />
        {/* Show categories */}
        <Table loading={loading} expandable={false} columns={columns} pagination={false} dataSource={categories} />
      </div>
    </AdminLayout>
  )
}


export default Categories;
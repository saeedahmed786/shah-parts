import AdminLayout from '@/components/Layouts/Admin/AdminLayout';
import React from 'react'
import styles from "./brands.module.css";

const Brands = () => {

  return (
    <AdminLayout sidebar>
      <div className={styles.brands}>
        Brands
      </div>
    </AdminLayout>
  )
}


export default Brands;
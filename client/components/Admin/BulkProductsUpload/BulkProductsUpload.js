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

    const handleUpload = async () => {
        if (!file) return;

        setFileLoading(true);
        const reader = new FileReader();
        reader.onload = async (e) => {
            setFileLoading(false);
            const products = JSON.parse(e.target.result);
            setLoading(true);
            axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/bulk-upload`, { products }, {
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

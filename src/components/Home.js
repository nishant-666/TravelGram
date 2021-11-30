import React, { useState } from 'react'
import { Input, Button } from 'antd';
import { CloudUploadOutlined } from '@ant-design/icons';
import { database } from '../firebase-config'
import { addDoc, collection } from 'firebase/firestore';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
export default function Home() {
    const storage = getStorage();
    const databaseCollection = collection(database, 'photos')
    const [uploader, setUploader] = useState('');
    const [location, setLocation] = useState('');
    const [fileLink, setFileLink] = useState('');
    const [photoName, setPhotoName] = useState('')
    const [isUploading, setIsUploading] = useState(false);
    const getPhoto = (e) => {
        const storageRef = ref(storage, e.target.files[0].name);
        setPhotoName(e.target.files[0].name)
        const uploadTask = uploadBytesResumable(storageRef, e.target.files[0]);
        setIsUploading(true)
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            () => {

            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setFileLink(downloadURL);
                    setIsUploading(false);
                });
            }
        );
    }

    const submitData = () => {
        addDoc(databaseCollection, {
            uploader: uploader,
            location: location,
            photoLink: fileLink,
            timeStamp: moment().format('ll')
        })
            .then(() => {
                toast.success("Photo Added");
            })
            .catch(() => {
                toast.error("Photo Upload Failed");
            })
    }
    return (
        <div className="home-main">
            <ToastContainer />
            <div className="form-field">
                <label className="input-label">Uploader</label>
                <Input
                    className="input-field"
                    placeholder="Enter the Uploader"
                    prefix={<CloudUploadOutlined />}
                    onChange={(e) => setUploader(e.target.value)}
                />
            </div>

            <div className="form-field">
                <label>Photo</label>
                <input
                    type="file"
                    id="actual-btn"
                    hidden
                    onChange={(e) => getPhoto(e)}
                />
                <div className="flex-inline">
                    <label for="actual-btn" className="file-label">
                        {photoName ? photoName : 'Choose Photo'}
                    </label>
                </div>
            </div>

            <div>
                <label className="input-label">Location</label>
                <Input
                    className="input-field"
                    placeholder="Enter the Location"
                    onChange={(e) => setLocation(e.target.value)}
                />
            </div>

            <Button
                type="primary"
                loading={isUploading ? true : false}
                onClick={submitData}>
                {isUploading ? 'Uploading Image' : 'Submit'}
            </Button>
        </div>
    )
}

import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Modal, Spin, Button } from 'antd';
import { getDocs, collection, doc, deleteDoc } from 'firebase/firestore';
import { database } from '../firebase-config';
import { DeleteOutlined } from '@ant-design/icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Photos() {
    const databaseCollection = collection(database, 'photos')
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [photoData, setPhotoData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [photoDesc, setPhotoDescription] = useState({})
    const showModal = (data) => {
        setPhotoDescription(data)
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    useEffect(() => {
        setLoading(true)
        getData();
    }, [])

    const getData = async () => {
        const data = await getDocs(databaseCollection)
        setPhotoData(data.docs.map((item) => ({ ...item.data(), id: item.id })))
        setLoading(false)
    }

    const handleDelete = (id) => {
        const docRef = doc(database, "photos", id);
        deleteDoc(docRef)
            .then(() => {
                setIsModalVisible(false);
                toast.success("Photo Deleted");
                getData()
            })
    }
    return (
        <div className="site-card-wrapper photos-main">
             <ToastContainer />
            <Row gutter={16}>
                {loading ? (
                    <div className="loader-container">
                        <Spin size="large" />
                    </div>
                ) : (
                    photoData.map((data) => {
                        return (
                            <Col span={12}>
                                <Card
                                    bordered={false}
                                    onClick={() => showModal(data)}
                                    style={{ width: '100%', textAlign: "center" }}
                                    cover={
                                        <img alt="example"
                                            src={data.photoLink} />}
                                >
                                </Card>
                            </Col>
                        )
                    })

                )}

            </Row>

            <Modal
                centered
                title={null}
                closable={false}
                visible={isModalVisible}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Close
                    </Button>
                ]}
            >
                <div className="delete-icon">
                    <DeleteOutlined
                        className="delete"
                        onClick={() => handleDelete(photoDesc.id)} />
                </div>
                <img alt="example"
                    className="modal-image"
                    src={photoDesc.photoLink}
                />
                <div className="modal-data">
                    <p>Uploader: {photoDesc.uploader}</p>
                    <p>Location: {photoDesc.location}</p>
                </div>
                <p>Time: {photoDesc.timeStamp}</p>
            </Modal>
        </div>
    )
}

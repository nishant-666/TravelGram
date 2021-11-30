import React, { useState } from 'react';
import { Row, Col, Card, Modal } from 'antd';
const { Meta } = Card;
export default function Photos() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div className="site-card-wrapper photos-main">
            <Row gutter={16}>
                <Col span={12}>
                    <Card
                        bordered={false}
                        onClick={showModal}
                        style={{ width: '100%', textAlign: "center" }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                    </Card>
                </Col>
                <Col span={12}>
                    <Card
                        bordered={false}
                        onClick={showModal}
                        style={{ width: '100%', textAlign: "center" }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                    </Card>
                </Col>
                <Col span={12}>
                    <Card
                        bordered={false}
                        onClick={showModal}
                        style={{ width: '100%', textAlign: "center" }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                    </Card>
                </Col>
            </Row>

            <Modal centered title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <img alt="example" className="modal-image" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                <div className="modal-data">
                    <p>Uploader</p>
                    <p>Location</p>
                </div>
            </Modal>
        </div>
    )
}

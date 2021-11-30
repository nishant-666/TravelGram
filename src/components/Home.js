import React from 'react'
import { Input } from 'antd';
import { CloudUploadOutlined } from '@ant-design/icons';
export default function Home() {
    return (
        <div className="home-main">
            <div className="form-field">
                <label className="input-label">Uploader</label>
                <Input className="input-field" placeholder="Enter the Uploader" prefix={<CloudUploadOutlined />} />
            </div>

            <div className="form-field">
                <label>Photo</label>
                <input type="file" id="actual-btn" hidden />
                <div className="flex-inline">
                    <label for="actual-btn" className="file-label">
                        Choose Photo
                    </label>
                </div>
            </div>

            <div>
                <label className="input-label">Location</label>
                <Input className="input-field" placeholder="Enter the Location" />
            </div>
        </div>
    )
}

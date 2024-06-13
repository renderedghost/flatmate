import React from 'react';
import { uploadFile } from '../services/files';

const FileUpload: React.FC = () => {
    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            await uploadFile(file);
            // Handle file upload success
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileUpload} />
        </div>
    );
};

export default FileUpload;
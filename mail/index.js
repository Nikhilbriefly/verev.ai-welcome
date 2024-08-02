



import React, { useState } from 'react';
import AWS from 'aws-sdk';

const S3FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!selectedFile) return;

    const s3 = new AWS.S3({
      accessKeyId: 'YOUR_ACCESS_KEY_ID',
      secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
      region: 'YOUR_REGION',
    });

    const params = {
      Bucket: 'YOUR_BUCKET_NAME',
      Key: selectedFile.name,
      Body: selectedFile,
    };

    try {
      const upload = s3.upload(params);
      upload.on('httpUploadProgress', (evt) => {
        setUploadProgress(Math.round((evt.loaded / evt.total) * 100));
      });
      await upload.promise();
      console.log('File uploaded successfully!');
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload} disabled={!selectedFile}>
        Upload
      </button>
      {uploadProgress > 0 && (
        <p>Upload progress is: {uploadProgress}%</p>
      )} 

    </div>
  );
};

export default S3FileUpload;


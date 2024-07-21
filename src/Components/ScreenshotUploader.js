import React, { useState } from 'react';
import axios from 'axios';
import './ScreenshotUploader.css'; 

const ScreenshotUploader = ({ onUploadComplete }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [extractedData, setExtractedData] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://127.0.0.1:6060/process_image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setExtractedData(response.data);
      setError('');


      if (typeof onUploadComplete === 'function') {
        onUploadComplete(); 
      }
    } catch (error) {
      setError('Error uploading image or processing data.');
      console.error(error);
    }
  };

  return (
    <div className="upload-container">
      <label className="upload-label">
        Upload Image
        <input type="file" className="upload-input" onChange={handleFileChange} />
      </label><br/><br/>
      <button className="upload-button" onClick={handleUpload}>Submit</button>
      {error && <p className="error-message">{error}</p>}
      {extractedData && (
        <div className="extracted-data">
          <h2>Extracted Data:</h2>
          <ul className="extracted-list">
            {extractedData.amounts && (
              <li className="extracted-item">
                <span className="extracted-item-heading">Amounts:</span> {extractedData.amounts.join(', ')}
              </li>
            )}
            {extractedData.dates && (
              <li className="extracted-item">
                <span className="extracted-item-heading">Dates:</span> {extractedData.dates.join(', ')}
              </li>
            )}
            {extractedData.names && (
              <li className="extracted-item">
                <span className="extracted-item-heading">Names:</span> {extractedData.names.join(', ')}
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ScreenshotUploader;

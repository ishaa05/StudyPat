import React, { useState } from 'react';

function PostureDetector() {
  const [status, setStatus] = useState('');

  const startDetection = async () => {
    setStatus('Starting posture detection...');
    try {
      const response = await fetch('http://127.0.0.1:5000/start-detection');
      const data = await response.json();
      if (data.error) {
        setStatus(`Error: ${data.error}`);
      } else {
        setStatus(data.status);
      }
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  };

  return (
    <div>
        <nav className="bg-blue-500 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">StudyPat</h1>
        </div>
        </nav>
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
    
      <h1>Posture Detector</h1>
      <button
        onClick={startDetection}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Start Detection
      </button>
      <p>{status}</p>
    </div>
    </div>
  );
}

export default PostureDetector;

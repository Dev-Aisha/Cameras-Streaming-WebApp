import React, { useEffect, useState } from 'react';
import MapComponent from './components/Map';

function App() {
  const [cameras, setCameras] = useState([]);
  const [selectedCamera, setSelectedCamera] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/cameras')
      .then((res) => res.json())
      .then((data) => setCameras(data))
      .catch((err) => console.error('Failed to fetch cameras:', err));
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: selectedCamera ? 1 : '100%' }}>
        <MapComponent cameras={cameras} onMarkerClick={setSelectedCamera} />
      </div>

      {selectedCamera && (
        <div style={{ width: 400, padding: 20, backgroundColor: '#161616', position: 'relative' }}>
                    <button
            onClick={() => setSelectedCamera(null)}
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
              backgroundColor: '#ff4d4d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              padding: '5px 10px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            X
          </button>
          <h2 style={{ color: 'white' }}>{selectedCamera.name}</h2>
          <video width="100%" controls autoPlay>
            <source src={selectedCamera.videoUrl} type="application/x-mpegURL" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}

export default App;
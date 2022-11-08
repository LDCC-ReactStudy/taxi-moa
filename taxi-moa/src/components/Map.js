import React, { useEffect } from 'react';
import KakaoMapScript from './KakaoMapScript';
import { Card } from 'react-bootstrap';

export default function Map() {
  useEffect(() => {
    KakaoMapScript();
  }, []);

  return (
    <Card>
      <div
        style={{
          height: '50%',
          display: 'flex',
          paddingTop: '300px',
          // marginLeft: '10px',
          // marginRight: '10px',
          alignItems: 'center',
        }}
      >
        <div id="map" style={{ width: '100%', height: '300px' }}></div>
      </div>
    </Card>
  );
}

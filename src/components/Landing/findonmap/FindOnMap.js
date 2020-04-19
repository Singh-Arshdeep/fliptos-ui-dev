import React from 'react';
import GoogleMapReact from 'google-map-react';

const defaultProps = {
  center: {
    lat: 59.95,
    lng: 30.33,
  },
  zoom: 11,
};

const FindOnMap = () => (
  <div style={{ height: '40vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys=""
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    />
  </div>
);

export default FindOnMap;

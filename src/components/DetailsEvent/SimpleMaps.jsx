import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({text}) => <div>{text}</div>;

function SimpleMaps(maps) {
  console.log(maps.maps[0])
    const defaultProps = {
        center: {
          lat: -3.03586,
          lng: -60.05131
        }
    };
    return (
        <div style={{ height: '270px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC1_u-sGTAyUcfEVwf5XxX6h4YIdaDE4kw' }}
          defaultCenter={defaultProps.center}
          defaultZoom={4}
        >
          <AnyReactComponent
            lat={'-' + maps.maps[0]}
            lng={'-' + maps.maps[1]}
            text="Maps"
          />
        </GoogleMapReact>
      </div>
    )
}

export default SimpleMaps;
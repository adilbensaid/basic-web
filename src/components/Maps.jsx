import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Maps extends Component {
  static defaultProps = {
    center: {
      lat: 40.47844252540278,
      lng: -3.9162531939313037
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '70vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCM0RjtVfLV-NG7crWDnhfZp8t847Tpe3E'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={40.47844252540278}
            lng={-3.9162531939313037}
            
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Maps;
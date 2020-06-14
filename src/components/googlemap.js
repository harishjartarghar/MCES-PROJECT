import React,{Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
class MapContainer extends Component {
  


  
  
  render() {
    return (
      <Map  google={this.props.google}
             zoom={16}
             initialCenter={{
              lat: this.props.latitude,
              lng: this.props.longitude
            }}
             center={{
              lat: this.props.latitude,
              lng: this.props.longitude
            }}
             >
          
           
        <Marker onClick={this.onMarkerClick}
                position={{lat: this.props.latitude, lng: this.props.longitude}} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1></h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyBbkyU3NIHJV2HiMQXAh40FeO0XFsRkAZM')
})(MapContainer);
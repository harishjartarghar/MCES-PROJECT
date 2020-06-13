import React,{Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
class MapContainer extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      selectedPlace: {}
    }
  }
 ;
  render() {
    return (
      <Map  google={this.props.google}
             zoom={10}
             initialCenter={{
                lat: 15.381214726571551,
                lng: 75.13893660968124
              }}
             >
           
           
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyBbkyU3NIHJV2HiMQXAh40FeO0XFsRkAZM')
})(MapContainer);
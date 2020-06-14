import React, { Component } from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MapContainer from "./googlemap";
import $ from "jquery";
import firebase from '../firebase';

import { Modal } from "reactstrap";
import { render } from "@testing-library/react";

var hideModal = hideModalInfo => {
  $("#myModal").modal("hide");
};



const modalMapStyles = [
  {
    featureType: "landscape.natural",
    elementType: "geometry.fill",
    stylers: [
      {
        visibility: "on"
      },
      {
        color: "#e0efef"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "geometry.fill",
    stylers: [
      {
        visibility: "on"
      },
      {
        hue: "#1900ff"
      },
      {
        color: "#c0e8e8"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        lightness: 100
      },
      {
        visibility: "simplified"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [
      {
        visibility: "on"
      },
      {
        lightness: 700
      }
    ]
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        color: "#7dcdcd"
      }
    ]
  }
];




class Modall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 15.381214726571551,
      longitude: 75.13893660968124,
    };
  }

  getDataFromServer=()=> {
   
    let x=0;
    const interval=setInterval(()=>
    {
      const animal=firebase.database().ref('animal1');
      animal.on('value',(snapshot)=>{
        var info=[{
          "heart_rate":snapshot.child('heart_rate').val(),
          "body_temperature":snapshot.child('temperature').val(),
          "rumination":snapshot.child('rumination').val()
        }]
       
        this.setState({
          latitude:snapshot.child('latitude').val(),
          longitude:snapshot.child('longitude').val()
        });
      })
      
    
      
    x++;
    if(x>1000)
    {
      clearInterval(interval);
    }
    
  },1000);
  }

  render()
  {
    return (
      <div className="">
        <div className="container py-2 d-flex flex-column mvh-100 text-center">
         
          <div className="row">
            <div className="col-auto mx-auto">
              <button
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#myModal"
                onClick={() => {this.getDataFromServer()}}
              >
                Show Location
              </button>
            </div>
          </div>
        </div>
        <div className="modal" tabIndex="-1" role="dialog" id="myModal">
          <div
            className="modal-dialog modal-lg mvh-90 w-100 d-flex flex-column"
            role="document"
          >
            <div className="modal-content flex-grow-1">
              <div className="modal-header">
                <h5 className="modal-title">Live Location</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body p-0 h-100">
                <div className="h-100 w-100 position-absolute">
                  {/*modal map is defined here- custom styles and zoom are passed in*/}
                <MapContainer latitude={this.state.latitude} longitude={this.state.longitude} />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="mx-auto btn btn-secondary"
                  onClick={hideModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}



export default Modall;

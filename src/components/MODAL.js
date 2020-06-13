import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MapContainer from "./googlemap";
import $ from "jquery";


import { Modal } from "reactstrap";

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

function Modall() {
  return (
    <div className="">
      <div className="container py-2 d-flex flex-column mvh-100 text-center">
       
        <div className="row">
          <div className="col-auto mx-auto">
            <button
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#myModal"
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
              <MapContainer/>
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

export default Modall;

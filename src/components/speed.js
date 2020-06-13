import React, { Component } from "react"


// DEVELOPMENT
import ReactSpeedometer from "react-d3-speedometer"
// PRODUCTION: switch to dist for checking production version
// import ReactSpeedometer from "../../dist/index"







class CustomSegmentLabels extends Component{

    render()
    { var min = 700;
        var max = 1000;
        var rand =  min + (Math.random() * (max-min));
        return(
            <div>
                <h4><u><b>Animal Health Analysis</b></u></h4>
                <br></br>
            <div className="speed">
              <ReactSpeedometer
              
                width={338}
                needleHeightRatio={0.9}
                value={rand}
                
                currentValueText="ANIMAL CONDITION"
                customSegmentLabels={[
                  {
                    text: "Very Bad",
                    position: "INSIDE",
                    color: "#555",
                  },
                  {
                    text: "Bad",
                    position: "INSIDE",
                    color: "#555",
                  },
                  {
                    text: "Ok",
                    position: "INSIDE",
                    color: "#555",
                    fontSize: "19px",
                  },
                  {
                    text: "Good",
                    position: "INSIDE",
                    color: "#555",
                  },
                  {
                    text: "Very Good",
                    position: "INSIDE",
                    color: "#555",
                  },
                ]}
                ringWidth={47}
                needleTransitionDuration={3333}
                needleTransition="easeElastic"
                needleColor={"#90f2ff"}
                textColor={"#000"}
              />
            </div>
            <div>
              
            </div>
          </div>
        );
    }
}

    
export default CustomSegmentLabels;
  
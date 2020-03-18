import React, { Component } from "react";
import BarChart from "./BarChart";
import Bar from "./Bar";
import LineChart from "./LineChart";
import CricleChart from "./CricleChart";

class GraphicLayout extends Component {
  render() {
    const divStyle = {
      border: "5px solid pink"
    };

    return (
      <div className="container-fluid ">
        <div className="row">
          <div className="col-sm" style={divStyle}>
            <center>
              <BarChart />
            </center>
          </div>
          <div className="col-sm" style={divStyle}>
            <center>
              <LineChart />
            </center>
          </div>

          <div className="col-sm" style={divStyle}>
            <center>
              <CricleChart />
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default GraphicLayout;

import React, { Component } from "react";
//import "./App.css";
import "../../../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  VerticalBarSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis
} from "react-vis";

class CricleChart extends Component {
  render() {
    const data1 = [{ apple: 25 }, { banana: 10 }, { orange: 60 }, { mango: 5 }];
    const data = [
      { x: 0, y: 10 },
      { x: 1, y: 5 },
      { x: 2, y: 4 },
      { x: 3, y: 9 },
      { x: 4, y: 1 },
      { x: 5, y: 7 },
      { x: 6, y: 6 },
      { x: 7, y: 3 },
      { x: 8, y: 2 },
      { x: 9, y: 0 }
    ];
    return (
      <div>
        <XYPlot height={300} width={600} xType="ordinal" yDomain={[0, 15]}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <VerticalBarSeries data={data} stroke="red" color="gray" />
        </XYPlot>
      </div>
    );
  }
}

export default CricleChart;

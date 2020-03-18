import React from "react";
import GraphicLayout from "./vis/GraphicLayout";
function HelloPage() {
  return (
    <>
      <div className="jumbotron">
        <h1>ABC Adminstration</h1>
        <p>React, Flux and React Router for ultra -responsive web apps. </p>
      </div>
      <div>
        <GraphicLayout />
      </div>
    </>
  );
}

export default HelloPage;

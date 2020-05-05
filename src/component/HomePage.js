import React from "react";
import GraphicLayout from "./vis/GraphicLayout";
import Banner from "./Banner";
function HelloPage() {
  return (
    <>
      <Banner />
      <div>
        <GraphicLayout />
      </div>
    </>
  );
}

export default HelloPage;

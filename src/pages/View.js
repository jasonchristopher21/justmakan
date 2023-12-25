import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import CameraScanner from "../components/CameraScanner";
import Navbar from "../components/Navbar";

const View = (props) => {
    
  // State for whether camera is open or not
  const [cameraOpen, setCameraOpen] = useState(false);

  const handleClick = () => {
    setCameraOpen((prev) => !prev);
  };

  return (
    <>
      <Outlet />
      <CameraScanner cameraOpen={cameraOpen} handleClick={handleClick} />
      <Navbar handleCameraClick={handleClick} cameraOpen={cameraOpen} isTourist={props.isTourist} />
    </>
  );
};

export default View;

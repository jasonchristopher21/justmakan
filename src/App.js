import React, { useState } from "react"
import CameraScanner from "./components/CameraScanner";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Login from "./pages/Login"

function App() {
  
  return (
    <>
    <Login />
      {/* <Outlet />
      <CameraScanner cameraOpen={cameraOpen} handleClick={handleClick} />
      <Navbar handleCameraClick={handleClick} cameraOpen={cameraOpen} /> */}
    </>
  );
}

export default App;

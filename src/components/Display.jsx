import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import DisplayAlbum from "./DisplayAlbum";

const Display = () => {
  return (
    <div className="w-full m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/album/:id" element={<DisplayAlbum/>}></Route>
      </Routes>
    </div>
  );
};

export default Display;

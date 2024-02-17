import { useState } from "react";
import "./App.css";
import { Header } from "./Component/Header/Header";
import { Sidebar } from "./Component/Sildebar/Sidebar";
import { PageHome } from "./page/PageHome/PageHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// bg-[#14181F] rounded-tl-[30em]
function App() {
  
  return (
    <div className="h-[100vh]">
      <Header moreStyle={"relative z-50 h-[100px]"} />
      <div className="relative  flex  justify-center w-[100%] ">
        <Sidebar moreStyle={"relative "} />
        
        <div className="w-full flex justify-center shadow-box-header bg-[#14181F] rounded-tl-[32px] pt-[42px] pb-[42px] h-[756px]">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<PageHome />} />
            </Routes>
          </BrowserRouter>
        </div>
        
      </div>
    </div>
  );
}

export default App;

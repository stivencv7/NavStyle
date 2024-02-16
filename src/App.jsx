import { useState } from "react";
import "./App.css";
import { Header } from "./Component/Header/Header";
import { Sidebar } from "./Component/Sildebar/Sidebar";
import { PageHome } from "./page/PageHome/PageHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// bg-[#14181F] rounded-tl-[30em]
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-[100vh]">
      <Header moreStyle={"relative z-50 h-[10%]"} />
      <div className="relative  flex  h-[90%]  justify-center w-[100%]">
        <Sidebar moreStyle={"absolute left-0 h-[100%]"} />
        <div className="bg-red-600 w-[120px]"></div>
        <div className="w-full flex justify-center p-2 shadow-box-header bg-[#14181F] rounded-tl-[36px]">
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

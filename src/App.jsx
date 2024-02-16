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
    <>
    <Header moreStyle={"relative z-50 h-[100px]"} />
      <div className="flex">
        <Sidebar moreStyle={"relative left-0  -top-20 bottom-0 z-0"} />
        <div className="py-5 bg-[#14181F] w-full flex  justify-center rounded-tl-[50px] shadow-box-header">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<PageHome />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;

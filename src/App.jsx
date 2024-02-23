import "./App.css";
import { Header } from "./share/layout/Header/Header";
import { PageHome } from "./page/PageHome/PageHome";
import { Routes, Route } from "react-router-dom";
import { ListLinkSidebar } from "./share/layout/Sildebar/ListLinkSidebar";

function App() {
  return (
    <div className="h-[100vh]  ">
      <Header moreStyle="relative z-50 h-[100px]  max-desktop:h-[10%] max-laptop:h-[10%]" />
      <div className="relative  flex  justify-center  max-desktop:h-[90%] max-desktop:w-[100%]  overflow-hidden">
        <div className="w-[120px] absolute left-0  z-1 bg-transparent group">
          <ListLinkSidebar className={"relative z-50"} />
        </div>
        <div className="w-[130px] bg-black"></div>
        <div className="w-full flex justify-center relative shadow-box-header z-5 ite bg-[#14181F] rounded-tl-[32px] pt-[42px] pb-[42px] h-[756px] items-center  max-desktop:h-[100%]  overflow-hidden max-laptop:pb-[30px] max-laptop:pt-[30px] ">
          <Routes>
            <Route path="/" element={<PageHome />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

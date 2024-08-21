import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import "./App.css";
import SlideBar from "./components/SlideBar";
export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-lime-50">
        <Header />
        <div className="flex   ">
          <div className="w-[20%]">
            <SlideBar />
          </div>
          <div className=" w-[100%-20%] h-full p-4 min-h-screen bg-lime-50  ">
            <Routes>
              <Route path="/" element={<Dashboard />} exact={true} />
              <Route path="/dashboard" exact={true} element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

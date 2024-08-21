import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import "./App.css";
import SlideBar from "./components/SlideBar";
import { createContext, useState } from "react";

export const Mycontext = createContext();

export default function App() {
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);

  const value = {
    isToggleSidebar,
    setIsToggleSidebar,
  };

  return (
    <BrowserRouter>
      <Mycontext.Provider value={value}>
        <div className="bg-lime-50 min-h-screen">
          <Header />
          <div className="flex">
            {/* Sidebar transition */}
            <div
              className={`${
                isToggleSidebar ? "w-0" : "w-1/5"
              } transition-all ease-in-out duration-300`}
            >
              <SlideBar />
            </div>
            {/* Main content transition */}
            <div
              className={`${
                isToggleSidebar ? "w-full" : "w-4/5"
              } flex-grow h-full transition-all ease-in-out duration-300`}
            >
              <Routes>
                <Route path="/" element={<Dashboard />} exact />
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </div>
          </div>
        </div>
      </Mycontext.Provider>
    </BrowserRouter>
  );
}

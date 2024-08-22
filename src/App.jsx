import { BrowserRouter, Route, Routes, redirect } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import "./App.css";
import SlideBar from "./components/SlideBar";
import { createContext, useEffect, useState } from "react";
import Login from "./pages/Login";

export const Mycontext = createContext();

export default function App() {
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isHiddenSidebarAndHeader, setIsHiddenSidebarAndHeader] =
    useState(false);

  const value = {
    isToggleSidebar,
    setIsToggleSidebar,
    isLogin,
    setIsLogin,
    isHiddenSidebarAndHeader,
    setIsHiddenSidebarAndHeader,
  };

  // useEffect(() => {
  //   if (isLogin) {
  //     redirect("/dashboard");
  //   } else {
  //     redirect("/login");
  //   }
  //   return () => redirect("/login");
  // }, [isLogin]);

  return (
    <BrowserRouter>
      <Mycontext.Provider value={value}>
        <div className="bg-lime-50 min-h-screen">
          {!isHiddenSidebarAndHeader && <Header />}
          <div className="flex">
            {/* Sidebar transition */}
            {!isHiddenSidebarAndHeader && (
              <div
                className={`${
                  isToggleSidebar ? "w-0" : "w-1/5"
                } transition-all ease-in-out duration-300`}
              >
                <SlideBar />
              </div>
            )}
            {/* Main content transition */}
            <div
              className={`${
                isToggleSidebar ? "w-full" : "w-4/5"
              } flex-grow h-full transition-all ease-in-out duration-300`}
            >
              <Routes>
                <Route path="/" element={<Dashboard />} exact />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
          </div>
        </div>
      </Mycontext.Provider>
    </BrowserRouter>
  );
}

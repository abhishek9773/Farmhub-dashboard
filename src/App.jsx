import {
  BrowserRouter,
  Route,
  Routes,
  redirect,
  useLocation,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import "./App.css";
import SlideBar from "./components/SlideBar";
import { createContext, useEffect, useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register/Register";
import Custom404 from "./pages/404";
import { CgDarkMode } from "react-icons/cg";
import ProductDetails from "./pages/ProductDetails";
import ProductUpload from "./pages/ProductUpload";

export const Mycontext = createContext();

export default function App() {
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isHiddenSidebarAndHeader, setIsHiddenSidebarAndHeader] =
    useState(false);
  const [themeMode, setThemeMode] = useState(true);

  useEffect(() => {
    if (themeMode === true) {
      document.body.classList.remove("dark");

      document.body.classList.add("light");
      localStorage.setItem("themeMode", "light");
    } else {
      document.body.classList.remove("light");

      document.body.classList.add("dark");
      localStorage.setItem("themeMode", "dark");
    }
  }, [themeMode]);

  const value = {
    isToggleSidebar,
    setIsToggleSidebar,
    isLogin,
    setIsLogin,
    isHiddenSidebarAndHeader,
    setIsHiddenSidebarAndHeader,
    themeMode,
    setThemeMode,
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
                className={`w-0 ${
                  isToggleSidebar ? "lg:w-0" : "lg:w-1/5"
                } transition-all ease-in-out duration-300`}
              >
                <SlideBar />
              </div>
            )}
            {/* Main content transition */}
            <div
              className={`w-full ${
                isToggleSidebar ? "lg:w-full" : "lg:w-4/5"
              } flex-grow h-full transition-all ease-in-out duration-300`}
            >
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route path="/product/details" element={<ProductDetails />} />
                <Route path="/product/upload" element={<ProductUpload />} />
                <Route path="/*" element={<Custom404 />} />
              </Routes>
            </div>
          </div>
        </div>
      </Mycontext.Provider>
    </BrowserRouter>
  );
}

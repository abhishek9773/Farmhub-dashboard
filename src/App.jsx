import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dasgboard";
import Header from "./components/Header";
import "./App.css";
import SlideBar from "./components/SlideBar";
export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-lime-50">
        <Header />
        <SlideBar />
        <Routes>
          <Route path="/" element={<Dashboard />} exact={true} />
          <Route path="/dashboard" exact={true} element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

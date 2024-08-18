import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dasgboard";
import Header from "./components/Header";
import "./App.css";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} exact={true} />
        <Route path="/dashboard" exact={true} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

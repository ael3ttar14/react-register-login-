import { Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import Header from "./components/Header";
import Login from "./Login";
import Home from "./Home";
import About from "./About";
export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

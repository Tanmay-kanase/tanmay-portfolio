import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Internships from "./pages/Internships";
import Projects from "./pages/Projects";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/internship" element={<Internships />}></Route>
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

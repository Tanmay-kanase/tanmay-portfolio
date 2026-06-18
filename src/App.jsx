import { Route, Routes } from "react-router-dom";
import "./App.css";
import Internships from "./pages/Internships";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProjectWalkthrough from "./pages/ProjectWalkThrough";
import Achievements from "./pages/Achievements";
import Certifications from "./pages/Certifications";
import Skills from "./pages/Skills";
import Education from "./pages/Education";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/internship" element={<Internships />}></Route>
        <Route path="/projects" element={<ProjectWalkthrough />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

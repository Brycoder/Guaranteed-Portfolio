import React, { useState, useEffect, lazy, Suspense } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useParams
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// This automatically loads any writeup file by name from the Writeups folder
// No need to manually import each one — just make sure the writeupLink in
// Projects.js matches the exact filename in src/components/Projects/Writeups/
function WriteupLoader() {
  const { name } = useParams();
  const Component = lazy(() =>
    import(`./components/Projects/Writeups/${name}`).catch(() => ({
      default: () => <div style={{ color: "white", padding: "100px 40px" }}>Writeup not found.</div>
    }))
  );
  return (
    <Suspense fallback={<div style={{ color: "white", padding: "100px 40px" }}>Loading...</div>}>
      <Component />
    </Suspense>
  );
}

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/writeup/:name" element={<WriteupLoader />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

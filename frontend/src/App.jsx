// System
import { useLayoutEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Styles
import "./shared/styles/GlobaleStyle.css";

// Pages
import { Home } from "./pages/home/Home";
import { Error404 } from "./pages/error/Error404";

// Components
import { Header } from "./shared/components/header/Header";

function App() {
  useLayoutEffect(() => {
    if (!localStorage.getItem("theme")) {
      document.querySelector("body").setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, []);

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authentication" element={<div>Authentication</div>} />
          <Route path="/note-area" element={<div>Note Area</div>} />
          <Route path="/profile" element={<div>Profile</div>} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}

export { App };

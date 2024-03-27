import "./App.css";

import code from "./icon/code.svg";
import github from "./icon/github.svg";
import linkden from "./icon/linkeden.svg";
import twitter from "./icon/twitter.svg";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
// import Contact from "./components/Contact";

const Navbar = () => {
  return (
    <header>
      <nav className="menu">
        <ul>
          <li className="title">
            <h4>🖥️ VINSON DEV ⌨️</h4>
          </li>
          <li className="github">
            <a href="https://github.com/vinson-han" target="_blank">
              <img src={github} className="filter_white" alt="github icon" />
            </a>
          </li>
          <li className="linkden">
            <a href="https://www.linkedin.com/in/vinson-han/" target="_blank">
              <img
                src={linkden}
                className="filter_white"
                alt="linkden icon"
                aria-hidden="true"
              />
            </a>
          </li>
          <li className="twitter">
            <a href="https://twitter.com/Vinson__Han/" target="_blank">
              <img
                src={twitter}
                className="filter_white"
                alt="twitter icon"
                aria-hidden="true"
              />
            </a>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About Me</a>
          </li>
          <li className="Contact">
            <a href="mailto:Vinson.han21@gmail.com">Contact Me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const Footer = () => {
  const date = new Date().getFullYear();
  const footer = `\u00A9 ${date} VinsonDev. All Rights Reserved`;
  return (
    <footer>
      <ul>
        <li id="footerId">{footer}</li>
      </ul>
    </footer>
  );
};

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact phone={"###-###-###"} />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

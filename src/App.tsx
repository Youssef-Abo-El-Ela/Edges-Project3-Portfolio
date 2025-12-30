import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./features/HomePage/HomePage";
import NavBar from "./layouts/NavBar";
import ThemeProviderWrapper from "./context/ThemeProvider";
import AboutPage from "./features/AboutPage/AboutPage";

function App() {
  return (
    <ThemeProviderWrapper>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<div>Projects Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
          <Route path="/blog" element={<div>Blog Page</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProviderWrapper>
  );
}

export default App;

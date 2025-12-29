import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./features/HomePage/HomePage";
import NavBar from "./layouts/NavBar";
import ThemeProviderWrapper from "./context/ThemeProvider";

function App() {
  return (
    <ThemeProviderWrapper>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProviderWrapper>
  );
}

export default App;

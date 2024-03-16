import logo from "./logo.svg";
import "./App.css";
import NavBar from "./common/Navbar";
import Footer from "./common/Footer";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

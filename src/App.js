import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Form from "./components/work/Form";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;

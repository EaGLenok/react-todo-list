import Home from "./pages/Home";
import "./styles/all.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Home />
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Details from "./routes/Details";

function App() {
  // ":" should be included to indicate 'dynamic indicator'
  // Router > Routes > Route
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;

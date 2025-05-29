
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./homepage"
import Training from "./training";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/training" element={<Training />} />
      </Routes>
    </Router>
  );
}

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";

import Homepage from "./homepage"
import Tips from "./tips"
import PledgeForm from "./pledgeform";
import PlasticCalculator from "./PlasticCalculator";

import Login from "./login";
import Logout from "./logOut";
import SignUp from "./signup";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-green-700 text-white p-4 flex justify-center gap-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/tips" className="hover:underline">Tips</Link>
          <Link to="/pledge" className="hover:underline">Pledge</Link>
          <Link to="/calculator" className="hover:underline">Calculator</Link>
          {!loggedIn ? (
            <>
              <Link to="/login" className="hover:underline">Login</Link>
              <Link to="/signup" className="hover:underline">Sign Up</Link>
            </>
          ) : (
            <Logout onLogout={() => setLoggedIn(false)} />
          )}
        </nav>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/pledge" element={<PledgeForm />} />
          <Route path="/calculator" element={<PlasticCalculator />} />
           <Route path="/login" element={<Login onLogin={() => setLoggedIn(true)} />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

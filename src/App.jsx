import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

import ResponsiveAppBar from './components/ResponsiveAppBar';

function App() {
  return (
    <>

    <Router>

    <ResponsiveAppBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

    </Router>

    </>
  );
}

export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import ViewPets from "./pages/ViewPets"

import ResponsiveAppBar from './components/ResponsiveAppBar';

function App() {
  return (
    <>

    <Router>

      <ResponsiveAppBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/viewpets" element={<ViewPets />} />
      </Routes>

    </Router>
    </>
  );
}

export default App

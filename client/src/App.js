import NavBar from "./Navbar";
import UserOnboarding from "./UserOnboarding";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mood from "./Mood";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<UserOnboarding />} exact />
          <Route path="/mood" element={<Mood />} />
          {/* <Route path="/meditation" component={Meditation} /> */}
          {/* <Route path="/journal" component={Journal} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route path="/login" element={<Login />}>
        </Route>
        <Route path="/profile/:username" element={<Profile />}>
        </Route>
        <Route path="/register" element={<Register />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

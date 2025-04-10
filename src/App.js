import './styles/navigation.css';
import Home from "./pages";
import Navigation from "./components/navigation";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
      <Router>
        <Navigation />
        <Routes>
            <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
  );
}

export default App;

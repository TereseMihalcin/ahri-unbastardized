import './styles/navigation.css';
import './styles/homepage.css';
import './styles/rsvp.css';
import './styles/location.css';
import './styles/footer.css';
import Home from "./pages";
import Rsvp from "./pages/rsvp";
import Location from "./pages/location";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/rsvp" element={<Rsvp />} />
            <Route exact path="/location" element={<Location />} />
        </Routes>
      </Router>

      <Footer />
      </>
  );
}

export default App;

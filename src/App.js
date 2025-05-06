import './styles/navigation.css';
import './styles/homepage.css';
import './styles/rsvp.css';
import './styles/footer.css';
import Home from "./pages";
import Rsvp from "./pages/rsvp";
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
        </Routes>
      </Router>

      <Footer />
      </>
  );
}

export default App;

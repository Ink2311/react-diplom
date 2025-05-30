import Home from "../components/Home";
import About from "../components/About";
import Services from "../components/Services";
import Tours from "../components/Tours";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const AppRouter = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/about">О нас</Link>
        <Link to="/services">Услуги</Link>
        <Link to="/tours">Туры</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/tours" element={<Tours />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

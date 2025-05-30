import "../App.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home-container">
      <h1>SIDETRAILS</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <Link to="/tours">
        <button>EXPLORE TOURS</button>
      </Link>
    </div>
    
  );
};

export default Home;

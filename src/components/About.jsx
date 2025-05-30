import "../App.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="About-container">
      <h1> ABOUT US </h1>
      <div className="About-textdiv">
        <h2>Explore the World</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
          delectus incidunt minus. Suscipit necessitatibus provident, in
          exercitationem quidem modi magnam, vitae blanditiis repudiandae libero
          praesentium.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos,
          molestiae harum voluptates minus dolorem quis sint totam, deleniti
          quia sunt excepturi ad magni, error dignissimos!
        </p>
      </div>
      <Link to="/tours">
        <button>SHOW AVIABLE TOURS</button>
      </Link>
          <img src="https://res.cloudinary.com/dig1ctfor/image/upload/v1748437108/2_t4fidr.jpg" alt="Beach Tours" className="About-img" />
    </div>
  );
};

export default About;

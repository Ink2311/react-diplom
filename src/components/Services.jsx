import "../App.css";

function ServicesPage() {
  return (
    <div className="Service-container">
      <h1> OUR SERVICES </h1>
      <div className="Services-textdiv">
        <div className="Services-text">
          <h2>
            <i className="fas fa-map-marked-alt"></i>TRAVEL PLANNING
          </h2>
          <p>
            We help you plan the perfect trip tailored to your preferences and
            budget.
          </p>
        </div>
        <div className="Services-text">
          <h2>
            <i class="fa-solid fa-car-side"></i>TRANSFERS
          </h2>
          <p>We provide comfortable and safe transfers to your destinations.</p>
        </div>
        <div className="Services-text">
          <h2>
            <i class="fa-solid fa-people-group"></i>GROUP TOURS
          </h2>
          <p>
            Join our groups and explore new destinations with like-minded
            travelers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;

import "../App.css";

const tours = [
  {
    title: 'Arctic Expedition',
    description: 'Experience the majestic icy wilderness and witness the Northern Lights.',
    country: 'Norway',
    days: '7 Days',
    price: 'From $4800',
    date: 'January 10th, 2025',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYLFjKAEjcG1J350AYZ2l5JG0FuxZvbTDeOg&s',
  },
  {
    title: 'Sahara Escape',
    description: 'Ride camels and sleep under the stars in the vast golden desert.',
    country: 'Morocco',
    days: '5 Days',
    price: 'From $2700',
    date: 'March 22nd, 2025',
    img: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?fit=crop&w=600&q=80',
  },
  {
    title: 'Amazon Adventure',
    description: 'Explore the heart of the jungle and discover its unique wildlife.',
    country: 'Brazil',
    days: '10 Days',
    price: 'From $3500',
    date: 'April 18th, 2025',
    img: 'https://www.southamerica.travel/wp-content/uploads/2019/08/amazon-adventure-scaled.jpg',
  },
  {
    title: 'Alpine Escape',
    description: 'Ski down world-class slopes and enjoy cozy evenings by the fire.',
    country: 'Switzerland',
    days: '6 Days',
    price: 'From $5200',
    date: 'February 2nd, 2025',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR13YNcqS69dfKBCllZuYj1inYBc6mBOnfnnw&s',
  },
  {
    title: 'Bali Bliss',
    description: 'Relax on pristine beaches and immerse yourself in island culture.',
    country: 'Indonesia',
    days: '8 Days',
    price: 'From $3100',
    date: 'May 14th, 2025',
    img: 'https://www.imusafir.pk/wp-content/uploads/2025/05/pura-ulun-danu-bratan-temple-bali-indonesia-guitar-photographer-scaled.webp',
  },
];

const ToursPage = () => {
  return (
    <section className="tours-container">
      <h2 className="tours-title">FEATURED <span>TOURS</span></h2>
      <div className="tours-grid">
        {tours.map((tour, index) => (
          <div className="tour-card" key={index}>
            <img src={tour.img} alt={tour.title} className="tour-img" />
            <div className="tour-info">
              <h4>{tour.title}</h4>
              <p>{tour.description}</p>
              <div className="tour-footer">
                <span>{tour.country}</span>
                <span>{tour.days}</span>
                <span>{tour.price}</span>
              </div>
              <div className="tour-date">{tour.date}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default ToursPage;
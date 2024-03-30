import React from 'react';
import './DestinationsSection.css';

function DestinationsSection() {
  const destinations = [
    {
      id: 1,
      name: 'Paris',
      image: 'https://source.unsplash.com/random/800x600',
      description: 'Experience the romance and cultural richness of the City of Love.',
    },
    {
      id: 2,
      name: 'Tokyo',
      image: 'https://source.unsplash.com/random/800x600',
      description: 'Immerse yourself in the unique blend of tradition and modernity.',
    },
    {
      id: 3,
      name: 'Sydney',
      image: 'https://source.unsplash.com/random/800x600',
      description: 'Explore the iconic landmarks and vibrant lifestyle of this coastal city.',
    },
  ];

  return (
    <section className="destinations-section">
      <h2>Popular Destinations</h2>
      <div className="destinations-grid">
        {destinations.map((destination) => (
          <div key={destination.id} className="destination-card">
            <img src={destination.image} alt={destination.name} />
            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DestinationsSection;
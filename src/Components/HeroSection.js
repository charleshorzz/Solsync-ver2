import React from 'react';
import '../Styles/HeroSection.css';
import heroImage from '../assets/books.avif'; // Add the correct path to your image here

function HeroSection() {
  return (
    <section className="hero">
      <div className="content">
        <h1>Best courses are waiting to enrich your skill</h1>
        <p>Provides you with the latest online learning system and material that help your knowledge growing.</p>
        <div className="search-box">
          <input type="text" placeholder="Want to learn?" />
          <button>Explore</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Learn and Grow" /> {/* Add an alt text that describes the image */}
      </div>
    </section>
  );
}

export default HeroSection;

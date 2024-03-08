import React from 'react';
import '../Styles/HeroSection.css';



function HeroSection() {
  return (
    <section className="hero" >
      <h1>Best courses are waiting to enrich your skill</h1>
      <p>Provides you with the latest online learning system and material that help your knowledge growing.</p>
      <div className="search-box">
        <input type="text" placeholder="Want to learn?" />
        <button>Explore</button>
      </div>
    </section>
  );
}

export default HeroSection;

import React, { useState, useEffect } from 'react';

const slidesData = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop",
    title: "MERN Stack & Software Engineering",
    description: "Building scalable, high-performance web applications with MongoDB, Express, React, and Node.js."
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
    title: "Algorithmic Mastery & Problem Solving",
    description: "Targeting engineering excellence at Google through Data Structures, Machine Learning, and Cloud Systems."
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
    title: "Advanced Computer Science Research",
    description: "Exploring Quantum Computing, Automata Theory, Information Theory, and Linear Block Codes at VIT-AP."
  }
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % slidesData.length);
    }, 4000); // Automatically fade/slide every 4 seconds

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? slidesData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % slidesData.length);
  };

  return (
    <header class="global-slideshow">
      <div class="slideshow-wrapper">
        {slidesData.map((slide, idx) => (
          <div 
            key={slide.id} 
            class={`slide-item ${idx === currentIndex ? 'active' : ''}`}
          >
            <img class="slide-img" src={slide.imageUrl} alt={slide.title} />
            <div class="slide-overlay">
              <div class="slide-caption">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div class="slideshow-controls">
        <button class="ctrl-btn" onClick={prevSlide} aria-label="Previous Slide">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button class="ctrl-btn" onClick={nextSlide} aria-label="Next Slide">
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>

      <div class="slideshow-dots">
        {slidesData.map((_, idx) => (
          <div 
            key={idx}
            class={`dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(idx)}
          />
        ))}
      </div>
    </header>
  );
};

export default Slideshow;

import './card.css';
import { useEffect, useRef } from 'react';

function Card({ text, icon, title }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    
    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--x', x + 'px');
      card.style.setProperty('--y', y + 'px');
    };

    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div 
      className="card" 
      ref={cardRef}
      style={{ '--clr': '#0f0' }}
    >
      {icon}
      <div className='text'>
        <h1>{title}</h1>
        <span>{text}</span>
      </div>
    </div>
  );
}

export default Card;
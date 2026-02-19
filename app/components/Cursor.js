'use client';

import { useEffect, useState } from 'react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const interactiveElements = document.querySelectorAll('a, button, [data-hover]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot - INSTANT */}
      <div
        className="fixed pointer-events-none z-[9999] hidden md:block"
        style={{
          left: position.x - 6,
          top: position.y - 6,
          transform: isHovering ? 'scale(1.5)' : 'scale(1)',
          transition: 'transform 0.15s ease',
        }}
      >
        <div 
          className="w-3 h-3 rounded-full"
          style={{ 
            backgroundColor: '#00ff9d',
            boxShadow: '0 0 10px rgba(0, 255, 157, 0.8), 0 0 20px rgba(0, 255, 157, 0.4)'
          }}
        />
      </div>

      {/* Outer ring - INSTANT */}
      <div
        className="fixed pointer-events-none z-[9998] hidden md:block"
        style={{
          left: position.x - 20,
          top: position.y - 20,
          opacity: 0.5,
          transform: isHovering ? 'scale(1.5)' : 'scale(1)',
          transition: 'transform 0.15s ease',
        }}
      >
        <div 
          className="w-10 h-10 rounded-full border"
          style={{ borderColor: '#00ff9d' }}
        />
      </div>
    </>
  );
}
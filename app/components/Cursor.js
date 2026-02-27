'use client';

import { useEffect, useState, useRef } from 'react';

export default function Cursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const isVisibleRef = useRef(false);
  const isHoveringRef = useRef(false);

  useEffect(() => {
    let animationFrameId;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      currentX = e.clientX;
      currentY = e.clientY;
      
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }
      
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(updatePosition);
      }
    };

    const updatePosition = () => {
      if (cursorDotRef.current && cursorRingRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${currentX - 6}px, ${currentY - 6}px, 0)`;
        cursorRingRef.current.style.transform = `translate3d(${currentX - 20}px, ${currentY - 20}px, 0)`;
      }
      animationFrameId = null;
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };
    const handleMouseEnter = () => {
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, [data-hover]')) {
        if (!isHoveringRef.current) {
          isHoveringRef.current = true;
          setIsHovering(true);
        }
      }
    };
    const handleMouseOut = (e) => {
      if (e.target.closest('a, button, [data-hover]')) {
        if (isHoveringRef.current) {
          isHoveringRef.current = false;
          setIsHovering(false);
        }
      }
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot - INSTANT */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        style={{
          transition: 'none', // Remove transition for position to avoid visual lag
        }}
      >
        <div 
          className="w-3 h-3 rounded-full"
          style={{ 
            backgroundColor: '#00ff9d',
            boxShadow: '0 0 10px rgba(0, 255, 157, 0.8), 0 0 20px rgba(0, 255, 157, 0.4)',
            transform: isHovering ? 'scale(1.5)' : 'scale(1)',
            transition: 'transform 0.15s ease',
          }}
        />
      </div>

      {/* Outer ring - INSTANT */}
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] hidden md:block"
        style={{
          opacity: 0.5,
          transition: 'none', // Remove transition for position
        }}
      >
        <div 
          className="w-10 h-10 rounded-full border"
          style={{ 
            borderColor: '#00ff9d',
            transform: isHovering ? 'scale(1.5)' : 'scale(1)',
            transition: 'transform 0.15s ease',
          }}
        />
      </div>
    </>
  );
}
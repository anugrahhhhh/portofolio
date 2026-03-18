'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const curRef = useRef<HTMLDivElement>(null);
  const curRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cur = curRef.current;
    const ring = curRingRef.current;
    if (!cur || !ring) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cur.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;
    const loop = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      ring.style.transform = `translate3d(${rx - 20}px, ${ry - 20}px, 0)`;
      animationFrameId = requestAnimationFrame(loop);
    };
    loop();

    const handleMouseEnter = () => {
      ring.style.width = '80px';
      ring.style.height = '80px';
      ring.style.transform = `translate3d(${rx - 40}px, ${ry - 40}px, 0)`;
      ring.style.backgroundColor = 'var(--gold-glow)';
      ring.style.borderColor = 'var(--gold)';
    };
    const handleMouseLeave = () => {
      ring.style.width = '40px';
      ring.style.height = '40px';
      ring.style.backgroundColor = 'transparent';
      ring.style.borderColor = 'var(--gold)';
    };

    const interactiveEls = document.querySelectorAll('a, button');
    interactiveEls.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      interactiveEls.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={curRef}></div>
      <div className="cursor-ring" ref={curRingRef}></div>
    </>
  );
}

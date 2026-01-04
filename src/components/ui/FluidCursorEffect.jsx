// src/components/ui/FluidCursorEffect.jsx

import React, { useRef, useEffect, useCallback } from 'react';

// === Logika Efek Fluida (Sederhana) ===
// Ini adalah versi yang disederhanakan dari simulasi fluida.
// Untuk efek WebGL penuh, kode akan jauh lebih kompleks.
// Kita akan menggunakan konteks 2D untuk contoh ini.

const FluidCursorEffect = ({
  width = '100%',
  height = '100%',
  zIndex = 0,
  speed = 0.05,
  decay = 0.95,
  blur = 10,
  particleColor = 'rgba(255, 255, 255, 0.8)', // Warna partikel default
  trailSize = 20, // Ukuran jejak
}) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const particles = useRef([]); // Menyimpan partikel/jejak

  // Fungsi inisialisasi Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      contextRef.current = canvas.getContext('2d');

      // Loop animasi
      const animate = () => {
        const ctx = contextRef.current;
        if (!ctx) return;

        // Bersihkan canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update dan gambar partikel
        particles.current = particles.current.filter(p => {
          p.opacity *= decay; // Memudar
          p.x += p.vx;
          p.y += p.vy;

          if (p.opacity > 0.1) { // Hanya gambar yang terlihat
            ctx.fillStyle = p.color.replace(')', `, ${p.opacity})`);
            ctx.filter = `blur(${blur}px)`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
            return true;
          }
          return false;
        });

        rafId.current = requestAnimationFrame(animate);
      };

      const rafId = useRef(null);
      rafId.current = requestAnimationFrame(animate);

      // Cleanup
      return () => {
        cancelAnimationFrame(rafId.current);
      };
    }
  }, [decay, blur]);

  // Fungsi untuk menambahkan partikel baru saat mouse bergerak
  const handleMouseMove = useCallback((e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const currentX = e.clientX - rect.left;
    const currentY = e.clientY - rect.top;

    const dx = currentX - lastMousePos.current.x;
    const dy = currentY - lastMousePos.current.y;

    if (Math.abs(dx) > 1 || Math.abs(dy) > 1) { // Hanya tambahkan partikel jika mouse bergerak cukup jauh
      particles.current.push({
        x: currentX,
        y: currentY,
        vx: dx * speed, // Kecepatan berdasarkan gerakan mouse
        vy: dy * speed,
        size: trailSize * (1 + Math.random()),
        opacity: 1,
        color: particleColor,
      });
    }

    lastMousePos.current = { x: currentX, y: currentY };
  }, [speed, trailSize, particleColor]);

  // Pasang dan lepas event listener mouse
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.addEventListener('mousemove', handleMouseMove);
      return () => {
        canvas.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [handleMouseMove]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: width,
        height: height,
        zIndex: zIndex,
        pointerEvents: 'none', // Penting: Agar tidak memblokir interaksi elemen di bawahnya
      }}
    />
  );
};

export default FluidCursorEffect;
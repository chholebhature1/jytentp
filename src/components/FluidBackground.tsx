import { useEffect, useRef } from "react";

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
  hue: number;
}

export const FluidBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ripplesRef = useRef<Ripple[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, prevX: 0, prevY: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { x: prevX, y: prevY } = mouseRef.current;
      
      // Calculate velocity
      const dx = clientX - prevX;
      const dy = clientY - prevY;
      const velocity = Math.sqrt(dx * dx + dy * dy);

      mouseRef.current = {
        x: clientX,
        y: clientY,
        prevX: clientX,
        prevY: clientY,
      };

      // Create ripples based on movement speed
      if (velocity > 5) {
        const numRipples = Math.min(Math.floor(velocity / 15), 3);
        for (let i = 0; i < numRipples; i++) {
          ripplesRef.current.push({
            x: clientX + (Math.random() - 0.5) * 20,
            y: clientY + (Math.random() - 0.5) * 20,
            radius: 0,
            maxRadius: 80 + Math.random() * 60,
            opacity: 0.6,
            hue: 25 + Math.random() * 15, // Orange hue range
          });
        }
      }

      // Limit ripples
      if (ripplesRef.current.length > 30) {
        ripplesRef.current = ripplesRef.current.slice(-30);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Particle system for fluid effect
    const particles: { x: number; y: number; vx: number; vy: number; life: number; hue: number }[] = [];
    
    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const { x: mouseX, y: mouseY } = mouseRef.current;

      // Draw and update ripples
      ripplesRef.current = ripplesRef.current.filter((ripple) => {
        ripple.radius += 3;
        ripple.opacity -= 0.015;

        if (ripple.opacity <= 0) return false;

        // Draw ripple with gradient
        const gradient = ctx.createRadialGradient(
          ripple.x,
          ripple.y,
          ripple.radius * 0.8,
          ripple.x,
          ripple.y,
          ripple.radius
        );
        gradient.addColorStop(0, `hsla(${ripple.hue}, 100%, 50%, 0)`);
        gradient.addColorStop(0.5, `hsla(${ripple.hue}, 100%, 55%, ${ripple.opacity * 0.5})`);
        gradient.addColorStop(1, `hsla(${ripple.hue}, 100%, 50%, 0)`);

        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Inner glow
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${ripple.hue}, 100%, 60%, ${ripple.opacity * 0.3})`;
        ctx.fill();

        return true;
      });

      // Add trailing particles near cursor
      if (Math.random() > 0.7) {
        particles.push({
          x: mouseX + (Math.random() - 0.5) * 40,
          y: mouseY + (Math.random() - 0.5) * 40,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 1,
          hue: 25 + Math.random() * 20,
        });
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.02;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        // Draw particle with glow
        const size = p.life * 4;
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size);
        gradient.addColorStop(0, `hsla(${p.hue}, 100%, 60%, ${p.life * 0.8})`);
        gradient.addColorStop(1, `hsla(${p.hue}, 100%, 50%, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      // Draw cursor glow
      const cursorGlow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 100);
      cursorGlow.addColorStop(0, "hsla(25, 100%, 55%, 0.15)");
      cursorGlow.addColorStop(0.5, "hsla(25, 100%, 50%, 0.05)");
      cursorGlow.addColorStop(1, "hsla(25, 100%, 50%, 0)");

      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 100, 0, Math.PI * 2);
      ctx.fillStyle = cursorGlow;
      ctx.fill();

      // Limit particles
      if (particles.length > 50) {
        particles.splice(0, particles.length - 50);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Hide on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9998]"
      style={{ mixBlendMode: "screen" }}
    />
  );
};

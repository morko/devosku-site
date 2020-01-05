import React, { useRef, useEffect, useState } from 'react';
import colors from '../../scss/_colors.scss';
import './index.scss';

function sub(v1, v2) {
  return {
    x: v1.x - v2.x,
    y: v1.y - v2.y
  };
}

function mag(v) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
}

function setMag(v, newMag) {
  let oldMag = mag(v);
  return {
    x: v.x * (newMag / oldMag),
    y: v.y * (newMag / oldMag)
  };
}

function limit(v, max) {
  const m = mag(v);
  if (m > max) {
    return setMag(v, max);
  }
  return v;
}

function createParticles(amount, width, height) {
  let ps = [];
  for (let i = 0; i < amount; i++) {
    ps.push(
      new Vehicle({ x: Math.random() * width, y: Math.random() * height })
    );
  }
  return ps;
}

class Vehicle {
  constructor(position) {
    this.spawnPosition = position;
    this.position = { ...this.spawnPosition };
    this.velocity = { x: 1, y: 1 };
    this.maxSpeed = 10;
    this.maxForce = 0.5;
    this.acceleration = { x: 0, y: 0 };
    this.respawnDist = 10;
  }

  applyForce(force) {
    this.acceleration.x = force.x;
    this.acceleration.y = force.y;
  }

  update(mousePos) {
    this.seek(mousePos);
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.velocity.x += this.acceleration.x;
    this.velocity.y += this.acceleration.y;
    this.acceleration.x = 0;
    this.acceleration.y = 0;
    if (mag(sub(mousePos, this.position)) < this.respawnDist) {
      this.position = { ...this.spawnPosition };
      this.velocity.x = 0;
      this.velocity.y = 0;
      return;
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, 5, 0, Math.PI * 2);
    ctx.fillStyle = colors.brandSecondaryColor;
    ctx.fill();
  }

  seek = function(target) {
    let desired = sub(target, this.position);
    let d = mag(desired);
    let speed = this.maxSpeed;
    desired = setMag(desired, speed);
    let steer = limit(sub(desired, this.velocity), this.maxForce);
    this.applyForce(steer);
  };
}

export default function HeroAnimation() {
  const canvasRef = useRef(null);
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    canvasRef.current.width = window.innerWidth;
    canvasRef.current.height = window.innerHeight;
    function resizeCanvas() {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas, false);

    return () => {
      window.removeEventListener('resize', resizeCanvas, false);
    };
  }, [canvasRef]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const particles = createParticles(20, canvas.width, canvas.height);
    const ctx = canvas.getContext('2d');
    let mousePosition = { x: canvas.width / 2, y: canvas.height / 2 };
    function animationLoop(ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update(mousePosition);
        p.draw(ctx);
      });
      if (animating) {
        requestAnimationFrame(() => animationLoop(ctx));
      }
    }
    function setMousePosition(e) {
      const rect = canvas.getBoundingClientRect();
      if (
        e.clientX < rect.left ||
        e.clientX > rect.left + rect.width ||
        e.clientY < rect.top ||
        e.clientY > rect.top + rect.height
      ) {
        mousePosition = { x: canvas.width / 2, y: canvas.height / 2 };
      } else {
        mousePosition = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        };
      }
    }
    requestAnimationFrame(() => animationLoop(ctx));
    window.addEventListener('mousemove', setMousePosition);

    return () => {
      setAnimating(false);
      window.removeEventListener('mousemove', setMousePosition);
    };
  }, [canvasRef, animating]);

  return (
    <canvas
      id="HeroAnimation"
      style={{ background: colors.darkColor }}
      ref={canvasRef}
    ></canvas>
  );
}

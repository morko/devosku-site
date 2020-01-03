import React, { useRef, useEffect, useState } from "react";
import colors from '../../scss/_colors.scss';
import "./index.scss";

function mag(v) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
}

function setMag(v, newMag) {
  let oldMag = mag(v);
  return {
    x: (v.x * newMag) / oldMag,
    y: (v.y * newMag) / oldMag
  };
}

class Seeker {
  constructor(position) {
    this.position = position;
    this.velocity = { x: 1, y: 1 };
    this.maxSpeed = 3;
  }
  update(mousePos) {
    let steer = {
      x: mousePos.x - this.position.x,
      y: mousePos.y - this.position.y
    };
    steer = setMag(steer, 0.5);
    this.velocity.x += steer.x;
    this.velocity.y += steer.y;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, 5, 0, Math.PI * 2);
    ctx.fillStyle = colors.brandPrimaryColor;
    ctx.fill();
  }
}

export default function HeroAnimation() {
  const canvasRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const particles = [new Seeker({ x: 10, y: 10 })];
    const ctx = canvasRef.current.getContext("2d");
    function animationLoop(ctx) {
      let canvas = canvasRef.current;
      particles.forEach(p => {
        p.update({ x: 100, y: 200 });
        p.draw(ctx);
      });
      if (start) {
        requestAnimationFrame(() => animationLoop(ctx));
      }
    }
    setStart(true);
    requestAnimationFrame(() => animationLoop(ctx));

    return () => {
      setStart(false);
    };
  }, [canvasRef]);

  useEffect(() => {
    canvasRef.current.width = window.innerWidth;
    canvasRef.current.height = window.innerHeight;
    function resizeCanvas() {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    }

    window.addEventListener("resize", resizeCanvas, false);

    return () => {
      window.removeEventListener("resize", resizeCanvas, false);
    };
  }, [canvasRef]);

  return (
    <canvas
      id="HeroAnimation"
      style={{ background: colors.darkColor }}
      ref={canvasRef}
    ></canvas>
  );
}

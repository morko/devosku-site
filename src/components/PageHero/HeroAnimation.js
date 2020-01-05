import React, { useRef, useEffect, useState } from "react";
import colors from "../../scss/_colors.scss";
import "./index.scss";

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
    x: (v.x * newMag) / oldMag,
    y: (v.y * newMag) / oldMag
  };
}

function constrain(n, low, high) {
  return Math.max(Math.min(n, high), low);
};

function map(n, start1, stop1, start2, stop2, withinBounds) {
  const newval = ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
  if (!withinBounds) {
    return newval;
  }
  if (start2 < stop2) {
    return constrain(newval, start2, stop2);
  } else {
    return constrain(newval, stop2, start2);
  }
}

function limit(v, max) {
  const mSq = magSq(v);
  if (mSq > max * max) {
    div(v, Math.sqrt(mSq))
      .mult(max);
  }
  return this;
};

class Vehicle {
  constructor(position) {
    this.spawnPosition = position;
    this.position = this.spawnPosition;
    this.velocity = { x: 1, y: 1 };
    this.maxSpeed = 10;
  }

  update(mousePos) {
    // let steer = {
    //   x: mousePos.x - this.position.x,
    //   y: mousePos.y - this.position.y
    // };
    // steer = setMag(steer, 0.5);
    // this.velocity.x += steer.x;
    // this.velocity.y += steer.y;
    let steer = this.arrive(mousePos);
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

  arrive = function(target) {
    let desired = sub(target, this.position);
    let d = mag(desired);
    let speed = this.maxSpeed;
    if (d < 100) {
      speed = map(d, 0, 100, 0, this.maxSpeed);
    }
    desired = setMag(desired, speed);
    let steer = sub(desired, this.velocity);
    return steer;
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

    window.addEventListener("resize", resizeCanvas, false);

    return () => {
      window.removeEventListener("resize", resizeCanvas, false);
    };
  }, [canvasRef]);

  useEffect(() => {
    const particles = [new Vehicle({ x: 10, y: 10 })];
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let mousePosition = { x: canvas.width / 2, y: canvas.height / 2 };
    function animationLoop(ctx) {
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
      console.log(mousePosition);
    }
    requestAnimationFrame(() => animationLoop(ctx));
    window.addEventListener("mousemove", setMousePosition);

    return () => {
      setAnimating(false);
      window.removeEventListener("mousemove", setMousePosition);
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

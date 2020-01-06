import React, { useRef, useEffect } from 'react';
import colors from '../../scss/_colors.scss';
import './index.scss';

export default function Blurbs() {

  return (
    <canvas
      id="HeroAnimation"
      style={{ background: colors.darkColor }}
      ref={canvasRef}
    ></canvas>
  );
}

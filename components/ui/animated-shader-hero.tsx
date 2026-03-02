"use client";

import React, { useRef, useEffect } from "react";

interface HeroProps {
  trustBadge?: {
    text: string;
    icons?: string[];
  };
  headline: {
    line1: string;
    line2: string;
  };
  subtitle: string;
  buttons?: {
    primary?: {
      text: string;
      onClick?: () => void;
    };
    secondary?: {
      text: string;
      onClick?: () => void;
    };
  };
}

const Hero: React.FC<HeroProps> = ({
  trustBadge,
  headline,
  subtitle,
  buttons,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl2");
    if (!gl) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, canvas.width, canvas.height);

    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 text-center px-4">
        {trustBadge && (
          <div className="mb-6 px-4 py-2 bg-orange-500/10 border border-orange-400/30 rounded-full text-sm">
            {trustBadge.text}
          </div>
        )}

        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
          {headline.line1}
        </h1>

        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
          {headline.line2}
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-orange-100">
          {subtitle}
        </p>

        {buttons && (
          <div className="flex gap-4 mt-8">
            {buttons.primary && (
              <button className="px-6 py-3 bg-orange-500 text-black rounded-full font-semibold">
                {buttons.primary.text}
              </button>
            )}
            {buttons.secondary && (
              <button className="px-6 py-3 border border-orange-400 rounded-full">
                {buttons.secondary.text}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;

import React, { useEffect, useState, useRef } from 'react';
import { MoveHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';
interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  description?: string;
  className?: string;
}
export function BeforeAfter({
  beforeImage,
  afterImage,
  title,
  description,
  className = ''
}: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const clientX =
    'touches' in event ?
    event.touches[0].clientX :
    (event as React.MouseEvent).clientX;
    let position = (clientX - containerRect.left) / containerRect.width * 100;
    position = Math.max(0, Math.min(100, position));
    setSliderPosition(position);
  };
  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  // Global mouse up handler to catch drags that leave the container
  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('touchend', handleGlobalMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, []);
  return (
    <div className={`w-full max-w-6xl mx-auto my-16 ${className}`}>
      <div className="mb-6 text-center md:text-left">
        <h3 className="text-2xl md:text-3xl font-display font-semibold text-white mb-2">
          {title}
        </h3>
        {description &&
        <p className="text-cinema-muted font-sans">{description}</p>
        }
      </div>

      <div
        ref={containerRef}
        className="relative w-full aspect-video overflow-hidden rounded-lg shadow-2xl border border-cinema-gray select-none cursor-ew-resize group"
        onMouseMove={isDragging ? (e) => handleMove(e) : undefined}
        onTouchMove={isDragging ? (e) => handleMove(e) : undefined}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        onClick={handleMove} // Allow clicking to jump
      >
        {/* After Image (Background - Full) */}
        <img
          src={afterImage}
          alt="After color grading"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none" />

        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold tracking-widest text-cinema-cyan uppercase pointer-events-none">
          Graded
        </div>

        {/* Before Image (Foreground - Clipped) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
          }}>

          <img
            src={beforeImage}
            alt="Before color grading"
            className="absolute inset-0 w-full h-full object-cover" />

          {/* Filter to simulate "raw" footage if the image is the same,
             though ideally different images are passed.
             Adding a slight sepia/desat filter to 'before' just in case images are similar */}
          <div className="absolute inset-0 bg-gray-900/10 mix-blend-multiply pointer-events-none"></div>

          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold tracking-widest text-cinema-amber uppercase pointer-events-none">
            Raw / Log
          </div>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
          style={{
            left: `${sliderPosition}%`
          }}>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
            <MoveHorizontal className="w-6 h-6 text-cinema-dark" />
          </div>
        </div>
      </div>
    </div>);

}
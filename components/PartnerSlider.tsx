'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function PartnerSlider() {
  const [position, setPosition] = useState(0);
  const images = [1, 2, 3, 4, 5, 6].map(num => `/images/slider/${num}.png`);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % images.length);
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full overflow-hidden py-8 bg-white">
      <h2 className="text-3xl font-bold text-center mb-2">OUR PARTNER</h2>
      <div className="w-16 h-1 bg-yellow-400 mx-auto mb-8"></div>
      
      <div className="relative flex items-center justify-center">
        <div className="flex gap-8 items-center transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${position * 200}px)` }}>
          {images.concat(images).map((src, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0"
            >
              <Image
                src={src}
                alt={`Partner ${index + 1}`}
                width={150}
                height={60}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 
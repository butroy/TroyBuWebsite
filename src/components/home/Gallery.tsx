'use client';

import { useState } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { gallery } from '@/data/gallery';

export default function Gallery() {
  const [current, setCurrent] = useState(0);

  if (gallery.length === 0) return null;

  const prev = () => setCurrent((i) => (i === 0 ? gallery.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === gallery.length - 1 ? 0 : i + 1));

  const image = gallery[current];

  return (
    <section className="bg-gray-50/60 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading>Gallery</SectionHeading>

        <div className="flex items-center gap-6">
          {/* Left arrow */}
          <button
            onClick={prev}
            aria-label="Previous image"
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/80 text-black shadow-md transition-colors hover:bg-white"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <div className="flex h-[300px] sm:h-[400px] md:h-[500px] flex-1 items-center justify-center overflow-hidden rounded-lg">
            <img
              src={image.src}
              alt={image.alt}
              className="max-h-full w-auto max-w-full rounded-lg object-contain"
            />
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            aria-label="Next image"
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/80 text-black shadow-md transition-colors hover:bg-white"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Caption + Year */}
        <p className="mt-4 text-center text-sm text-black">
          {image.caption || image.alt}
          {image.year && <span className="ml-2 text-gray-400">({image.year})</span>}
        </p>

        {/* Dots */}
        <div className="mt-3 flex justify-center gap-2">
          {gallery.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to image ${idx + 1}`}
              className={`h-2 w-2 rounded-full transition-colors ${
                idx === current ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

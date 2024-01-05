"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  MaterialSymbolsChevronLeft,
  MaterialSymbolsChevronRight,
} from "../icons";
import { isEmpty } from "lodash";

export type Testimonial = {
  text: string;
  author: string;
};

const PREV_SLIDE_INDEX = 0;
const NEXT_SLIDE_INDEX = 2;

export const TestimonialCarousel = ({
  testimonials,
  duration = 1000,
  autoPlay = false,
}: {
  testimonials: Testimonial[];
  duration?: number;
  autoPlay?: boolean;
}) => {
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [containerHeight, setContainerHeight] = useState<string>("0");
  const carouselRef = useRef<HTMLDivElement>(null);
  const slidesRefs = useRef<HTMLDivElement[]>([]);
  const secDuration = duration / 1000;

  useEffect(() => {
    if (!testimonials || testimonials.length < 2) return;
    updateContainerHeight(1);
  }, [testimonials]);

  // Auto-play
  useEffect(() => {
    if (!autoPlay || !testimonials || testimonials.length < 2) return;

    const interval = setInterval(() => {
      handleNext();
    }, 10000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay]);

  useEffect(() => {
    if (carouselRef.current) {
      // Reset the carousel to the middle of the three slides
      carouselRef.current.style.transition = "none";
      carouselRef.current.style.transform = "translateX(-100%)";
      // Slides left and right of the center slide are invisible (they become opaque at the end of the animation)
      slidesRefs.current.forEach((slideRef, index) => {
        slideRef.style.transition = "none";
        slideRef.style.opacity = index === 1 ? "1" : "0";
      });
    }
  }, [currentTestimonial]);

  if (!testimonials || testimonials.length === 0) return null;

  if (testimonials.length === 1) {
    // No carousel for one item, just display the single testimonial
    return (
      <div className="relative w-[1240px] max-w-full mx-auto container-bg rounded-3xl p-10 py-12 overflow-hidden">
        <div className="w-full flex flex-col justify-center items-start gap-4 pointer-events-none">
          <p className="text-3xl md:text-4xl lg:text-5xl font-medium before:content-['“'] before:relative before:-ml-[0.5em] before:text-gray-400 after:content-['”'] after:text-gray-400">
            {testimonials[0].text}
          </p>
          <span className="text-white/50 text-xl md:text-2xl">
            {testimonials[0].author}
          </span>
        </div>
      </div>
    );
  }

  const getTestimonialIndex = (index: number) => {
    const totalTestimonials = testimonials.length;
    return (index + totalTestimonials) % totalTestimonials;
  };

  const updateContainerHeight = (slideIndex: 0 | 1 | 2) => {
    if (!isEmpty(slidesRefs.current)) {
      const height = slidesRefs.current[slideIndex]?.offsetHeight;
      setContainerHeight(height ? `${height}px` : "fit-content");
    }
  };

  const animateCarousel = (translateX: string, callback: () => void) => {
    if (carouselRef.current) {
      setIsAnimating(true);
      carouselRef.current.style.transition = `transform ${secDuration}s ease-in-out`;
      carouselRef.current.style.transform = translateX;
      slidesRefs.current.forEach((slideRef, index) => {
        slideRef.style.transition = `opacity ${secDuration}s ease-in-out`;
        // Fade out middle slide, fade in left and right (one of them is sliding into view)
        slideRef.style.opacity = index === 1 ? "0" : "1";
      });
    }

    setTimeout(() => {
      setIsAnimating(false);
      callback();
    }, duration);
  };

  const handlePrev = () => {
    if (!isAnimating && carouselRef.current) {
      updateContainerHeight(PREV_SLIDE_INDEX);
      animateCarousel("translateX(0%)", () => {
        setCurrentTestimonial((prev) => getTestimonialIndex(prev - 1));
      });
    }
  };

  const handleNext = () => {
    if (!isAnimating && carouselRef.current) {
      updateContainerHeight(NEXT_SLIDE_INDEX);
      animateCarousel("translateX(-200%)", () => {
        setCurrentTestimonial((prev) => getTestimonialIndex(prev + 1));
      });
    }
  };

  return (
    <div
      className="relative w-[1240px] max-w-full mx-auto container-bg rounded-3xl text-4xl font-medium overflow-hidden"
      style={{
        height: containerHeight,
        transition: `height ${duration}ms ease-in-out`,
      }}
    >
      <div className="absolute right-0 bottom-0 flex gap-2 p-4">
        <button
          id="prev"
          className="w-14 h-14 md:w-20 md:h-20 bg-transparent hover:bg-white hover:text-black transition-colors duration-300 rounded-full flex justify-center items-center"
          onClick={handlePrev}
        >
          <MaterialSymbolsChevronLeft />
        </button>
        <button
          id="next"
          className="w-14 h-14 md:w-20 md:h-20 bg-transparent hover:bg-white hover:text-black transition-colors duration-300 rounded-full flex justify-center items-center"
          onClick={handleNext}
        >
          <MaterialSymbolsChevronRight />
        </button>
      </div>

      <div
        ref={carouselRef}
        className="flex pointer-events-none"
        style={{ transform: "translateX(-100%)" }}
      >
        {[-1, 0, 1].map((offset, index) => (
          <div
            key={`testimonial-${offset + 1}`}
            className="w-full flex-shrink-0"
          >
            <div
              className="mx-auto w-full h-fit flex px-8 md:px-10 py-12 pb-24 flex-col justify-center items-start gap-6 pointer-events-none text-3xl md:text-4xl lg:text-5xl"
              style={{ transform: `translate-x-${offset * 100}%` }}
              ref={(el) => el && (slidesRefs.current[index] = el)}
            >
              <p className="text-3xl md:text-4xl lg:text-5xl font-medium before:content-['“'] before:relative before:-ml-[0.4em] before:text-gray-400 after:content-['”'] after:text-gray-400">
                {
                  testimonials[getTestimonialIndex(currentTestimonial + offset)]
                    .text
                }
              </p>
              <span className="text-white/50 text-xl md:text-2xl">
                {
                  testimonials[getTestimonialIndex(currentTestimonial + offset)]
                    .author
                }
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

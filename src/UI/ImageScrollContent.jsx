import React, { useState, useEffect, useRef } from "react";

const ImageScrollContent = ({ steps }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = imageRefs.current.findIndex(
            (ref) => ref === entry.target
          );
          if (index !== -1) {
            setActiveIndex(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      imageRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [steps]);

  return (
    <div ref={containerRef} className="relative flex items-start">
      <div className="w-1/2">
        {steps.map((step, index) => (
          <div
            key={index}
            ref={(el) => (imageRefs.current[index] = el)}
            className="h-[30rem] xxl:h-[50rem]  flex items-center justify-center p-8"
          >
            <img
              src={step.src}
              alt={step.title}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>
      <div className="sticky h-[30rem] xxl:h-[50rem] top-0 left-1/2 w-1/2">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex flex-col justify-center p-8 transition-opacity duration-300 ${
              activeIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-3xl xxl:text-5xl font-bold mb-4">
              {step.title}
            </h2>
            <p className="text-lg xxl:text-2xl">{step.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageScrollContent;

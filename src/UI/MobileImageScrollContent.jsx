import React, { useState, useEffect, useRef } from "react";

const MobileImageScrollContent = ({ steps }) => {
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
    <div ref={containerRef} className="flex flex-col gap-4 mb-10">
      {steps.map((step, index) => (
        <div
          key={index}
          ref={(el) => (imageRefs.current[index] = el)}
          className="flex flex-col items-center justify-center p-4 w-full"
        >
          <img
            src={step.src}
            alt={step.title}
            className="h-20 w-20 object-contain"
          />
          <h2 className="text-xl text-white bg-blue_text p-1 my-5  font-bold ">
            {step.title}
          </h2>
          <p className="text-sm md:text-base xxl:text-lg">{step.content}</p>
        </div>
      ))}
    </div>
  );
};

export default MobileImageScrollContent;

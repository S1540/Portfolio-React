import React from "react";
import { useEffect, useRef, useState } from "react";

const AnimatedCounter = ({ endValue }) => {
  const sectionRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setCount(0);
          let strat = 0;
          const interval = setInterval(() => {
            strat++;
            setCount(strat);
            if (strat === endValue) clearInterval(interval);
          }, 40);
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [endValue]);

  return (
    <div ref={sectionRef} className="text-center">
      <h1 className="text-3xl font-bold">{count}</h1>
    </div>
  );
};

export default AnimatedCounter;

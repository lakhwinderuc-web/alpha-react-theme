import { useEffect, useState, useRef } from "react";

function Counter({ value, sign, showSign, signPosition, duration = 1000 }) {
  const [count, setCount] = useState(0);
  const [startCount, setStartCount] = useState(false);
  const counterRef = useRef(null);

  // IntersectionObserver inside the component
  useEffect(() => {
    if (!counterRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setStartCount(true);  // trigger counting
          observer.disconnect(); // stop observing
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(counterRef.current);

    return () => observer.disconnect();
  }, []);

  // Log startCount whenever it changes
  useEffect(() => {
    console.log("startCount:", startCount);
  }, [startCount]);

  // Counting logic
  useEffect(() => {
    if (!startCount) return;

    const end = parseInt(value || "0", 10);
    if (end <= 0) {
      setCount(end);
      return;
    }

    const stepCount = Math.min(end, 100); // max 100 steps
    const stepValue = end / stepCount;
    const stepTime = duration / stepCount;

    let currentStep = 0;

    const updateCount = () => {
      currentStep += 1;
      setCount(Math.round(stepValue * currentStep));
      if (currentStep < stepCount) {
        setTimeout(updateCount, stepTime);
      }
    };

    updateCount();
  }, [value, duration, startCount]);

  let finalNumber = count;
  if (showSign) {
    finalNumber =
      signPosition === "sign-text" ? `${sign}${count}` : `${count}${sign}`;
  }

  return <span ref={counterRef}>{finalNumber}</span>;
}

export default Counter;

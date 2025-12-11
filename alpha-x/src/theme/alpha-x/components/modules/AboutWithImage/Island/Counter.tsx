import { useEffect, useState } from "react";

function Counter({ value,sign,showSign,signPosition, duration = 1000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  let finalNumber = count;

    if (showSign) {
    finalNumber =
      signPosition === "sign-text"
        ? `${sign}${count}`
        : `${count}${sign}`;
  }

  return <span>{finalNumber}</span>;
}

export default Counter;

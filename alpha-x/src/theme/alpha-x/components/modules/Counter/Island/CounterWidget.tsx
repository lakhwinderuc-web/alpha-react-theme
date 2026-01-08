import { useEffect, useState, useRef } from "react";

// 1. Individual Counter Item Component
const CounterItem = ({ item ,heading }) => {
  const [count, setCount] = useState(0);
  const [startCount, setStartCount] = useState(false);
  const itemRef = useRef(null);

  // Trigger when THIS specific item enters view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (itemRef.current) observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, []);

  // Animation logic for THIS item's specific number
  useEffect(() => {
    if (!startCount) return;

    const end = parseInt(item.add_number || 0, 10);
    const duration = parseInt(item.speed_duration || 1000, 10);
    
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [startCount, item.add_number, item.speed_duration]);

  return (
    <div className="counter-widget__text" ref={itemRef}>
      <div className={`counter-widget__animate ${heading}`}>
        {item.add_symbol && <span className="counter-widget__plus">{item.add_symbol}</span>}
        
        <span className="counter-widget__count count">
          {count}
        </span>
       
        <span className="counter-sign sign">{item.add_sign}</span>
          </div>
        <div 
          className="counter-widget__des-content" 
          dangerouslySetInnerHTML={{ __html: item.add_content }} 
        />
     
    </div>
  );
};

// 2. Main Parent Component
function CounterWidget({ items = [] ,heading }) {
  if (!items.length) return null;

  return (
    <div className="counter-widget__content"  >
      {items.map((item, index) => (
        <CounterItem key={index} item={item} heading={heading} />
      ))}
    </div>
  );
}

export default CounterWidget;
import { useEffect, useState } from "react";

const animation = {
  timestamp: null,
  duration: 2000,
};

function easeOutCubic(x) {
  return 1 - Math.pow(1 - x, 3);
}

export default function AwardHistory(props) {
  const [count, setCount] = useState(0);
  const number = Number(props.number.replace(/\D/g, ""));
  const string = props.number.replace(/\d/g, "");

  useEffect(() => {
    const step = (timestamp) => {
      if (!animation.timestamp) {
        animation.timestamp = timestamp;
      }
      const progress = easeOutCubic(
        (timestamp - animation.timestamp) / animation.duration
      );
      setCount(Math.floor(progress * number));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [number]);

  return <strong>{count + string}</strong>;
}

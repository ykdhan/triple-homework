import { useState, useEffect } from "react";

import "../styles/animate.scss";

export default function FadeIn(props) {
  const [fade, setFade] = useState("fade");

  useEffect(() => {
    setTimeout(() => setFade("fade animate"), 0);
  }, []);

  return <div className={`${props.className} ${fade}`}>{props.children}</div>;
}

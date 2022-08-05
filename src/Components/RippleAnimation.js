import {useEffect, useRef} from "react";
import lottie from "lottie-web";
import rippleAnimation from "../Animations/Ripple.json";

const Ripple = () => {
    const anime = useRef(null);
    useEffect(() => {
      lottie.loadAnimation({
        container: anime.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: rippleAnimation,
      });
      return () => lottie.stop();
    }, []);
    return <div style={{ height: 250, width: 300 }} ref={anime}></div>;
  };

export default Ripple;

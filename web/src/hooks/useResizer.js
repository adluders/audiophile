import { useState, useEffect } from "react";

const useResizer = () => {
  const [windowWidth, setWindowWith] = useState();

  const updateWidth = () => setWindowWith(window.innerWidth);

  useEffect(() => {
    setWindowWith(window.innerWidth);
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return windowWidth;
};

export default useResizer;

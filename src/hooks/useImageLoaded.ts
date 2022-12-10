import { useEffect, useRef, useState } from "react";

const useImageLoaded = () => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null); // imgRef becomes a readonly property by initializing its value with null

  const onLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    if (
      imgRef.current &&
      imgRef.current.complete &&
      imgRef.current.naturalWidth !== 0
    ) {
      onLoad();
    }
  });

  return { imgRef, loaded, onLoad };
};

export default useImageLoaded;

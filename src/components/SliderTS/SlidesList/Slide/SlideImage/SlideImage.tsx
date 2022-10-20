import React from "react";

import "../../../styles.scss";

interface SlideImageProps {
  src: string,
  alt: string
}

export default function SlideImage({ src, alt }: SlideImageProps) {
  return <img src={src} alt={alt} className="slide-image" />;
}
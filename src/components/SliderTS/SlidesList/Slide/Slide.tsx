import React from "react";
import SlideTitle from "./SlideTitle/SlideTitle";
import SlideImage from "./SlideImage/SlideImage";

import "../../styles.scss";

interface SlideProps {
  data: any
}

export default function Slide({ data }: SlideProps) {
  return (
    <div className="slide">
      <SlideImage src={data.urls.regular} alt={'title'} />
      <SlideTitle title={data.links.download} />
    </div>
  );
}
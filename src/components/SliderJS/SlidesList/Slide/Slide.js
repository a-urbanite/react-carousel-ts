import React from "react";
import SlideTitle from "./SlideTitle/SlideTitle";
import SlideImage from "./SlideImage/SlideImage";

import "../../styles.scss";

export default function Slide({ data }) {
  // data: { url, title }
  // console.log(data)
  return (
    <div className="slide">
      <SlideImage src={data.urls.regular} alt={'title'} />
      <SlideTitle title={data.links.download} />
    </div>
  );
}
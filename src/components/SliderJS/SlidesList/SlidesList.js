import React, { useContext } from "react";
import Slide from "./Slide/Slide";
import { SliderContext } from "../Slider";

import "../styles.scss";

export default function SlidesList() {
  const { slideNumber, items } = useContext(SliderContext);
  console.log(items)

  return (
    <div
      className="slide-list"
      style={{ transform: `translateX(-${slideNumber * 100}%)` }}
    >
      {items.map((slide, index) => (
        // console.log(slide)
        <Slide key={index} data={slide} />
      ))}
    </div>
  );
}
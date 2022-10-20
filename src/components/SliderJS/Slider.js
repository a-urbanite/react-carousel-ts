import { createContext, useState, useEffect } from 'react'
import fetchImages from "../../API/imagesApi";
import Arrows from "./Arrows/Arrows";
import Dots from "./Dots/Dots";
import SlidesList from "./SlidesList/SlidesList";
import './styles.scss'

export const SliderContext = createContext();

const Slider = ({autoPlay = true, autoPlayTime = 500, width = '100%', height = '100%'}) => {
  const [items, setItems] = useState([]);
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null)

  //fetch images
  useEffect(() => {
    const loadData = async () => {
      const images = await fetchImages();
      // console.log(images)
      setItems(images);
    };
    loadData();
  }, []);

  const changeSlide = (direction = 1) => {
    let slideNumber = 0;

    // console.log("slide in changeSlide func", slide, "direction if given", direction)

    if (slide + direction < 0) {
      slideNumber = items.length - 1;
    } else {
      slideNumber = (slide + direction) % items.length;
    }

    setSlide(slideNumber);
    
  };

  const goToSlide = (number) => {
    // console.log("gotToSlide triggered, number", number, " items.length", items.length, " , func result: ", number % items.length)
    setSlide(number);
  };

  // handle touch gestures
  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    // console.log("touchstart: ", touchDown)

    setTouchPosition(touchDown);
  }

  const handleTouchMove = (e) => {
    if (touchPosition === null) {
      return;
    }

    const currentPosition = e.touches[0].clientX;
    // console.log("currentPos: ", currentPosition)
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      changeSlide(1);
    }

    if (direction < -10) {
      changeSlide(-1);
    }

    setTouchPosition(null);
  }

  // handle autoplay
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      changeSlide(1);
    }, autoPlayTime);

    return () => {
      clearInterval(interval);
    };
  }, [items.length, slide]); 

  return (
    <div
      style={{ width, height }}
      className="slider"
      onTouchStart={(e) => handleTouchStart(e)}
      onTouchMove={(e) => handleTouchMove(e)}
    >
      <SliderContext.Provider
        value={{
          goToSlide,
          changeSlide,
          slidesCount: items.length,
          slideNumber: slide,
          items,
        }}
      >
        <SlidesList />
        <Dots />
        <Arrows />
      </SliderContext.Provider>
    </div>
  );
};

export default Slider
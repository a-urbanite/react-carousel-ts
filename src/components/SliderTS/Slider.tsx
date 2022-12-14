import { createContext, useState, useEffect } from 'react'
import fetchImages from "../../API/imagesApi";
import Arrows from "./Arrows/Arrows";
import Dots from "./Dots/Dots";
import SlidesList from "./SlidesList/SlidesList";
import './styles.scss'

interface SliderProps {
  autoPlay: boolean,
  autoPlayTime: number,
  width: string,
  height: string,
}

export type SliderContextType = {
  goToSlide: (arg0: number) => void,
  changeSlide: (arg0: number) => void,
  slidesCount: number,
  slideNumber: number,
  items: any[],
} 

export const SliderContext = createContext({} as SliderContextType);

const Slider = ({autoPlay = true, autoPlayTime = 500, width = '100%', height = '100%'}: SliderProps) => {
  const [items, setItems] = useState([]);
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null)

  useEffect(() => {
    const loadData = async () => {
      const images = await fetchImages();
      console.log(images)
      setItems(images);
    };
    loadData();
  }, []);

  const changeSlide = (direction = 1) => {
    let slideNumber = 0;

    if (slide + direction < 0) {
      slideNumber = items.length - 1;
    } else {
      slideNumber = (slide + direction) % items.length;
    }

    setSlide(slideNumber);
    
  };

  const goToSlide = (number: number) => {
    setSlide(number % items.length);
  };

  const handleTouchStart = (e: any) => {
    const touchDown = e.touches[0].clientX;

    setTouchPosition(touchDown);
  }

  const handleTouchMove = (e: any) => {
    if (touchPosition === null) {
      return;
    }

    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      changeSlide(1);
    }

    if (direction < -10) {
      changeSlide(-1);
    }

    setTouchPosition(null);
  }

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      changeSlide(1);
    }, autoPlayTime);

    return () => {
      clearInterval(interval);
    };
  }, [items.length, slide]); 

  const contextContent: SliderContextType = {
    goToSlide,
    changeSlide,
    slidesCount: items.length,
    slideNumber: slide,
    items,
  }

  return (
    <div
      style={{ width, height }}
      className='slider'
      onTouchStart={(e) => handleTouchStart(e)}
      onTouchMove={(e) => handleTouchMove(e)}
    >
      <SliderContext.Provider
        value={contextContent}
      >
        <Arrows />
        <SlidesList />
        <Dots />
      </SliderContext.Provider>
    </div>
  );
};

export default Slider
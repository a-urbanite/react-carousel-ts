import { createContext, useState, useEffect } from 'react'
import fetchImages from "../../API/imagesApi";

interface SliderProps {
  autoPlay: boolean,
  autoPlayTime: number,
  width: '%' | 'px',
  height:  '%' | 'px',
}

export const SliderContext = createContext(1);

const Slider = ({autoPlay, autoPlayTime, width, height}: SliderProps) => {
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

  return (
    <div>Slider</div>
  )
}

export default Slider
import "../../../styles.scss";

interface SlideTitleProps {
  title: string
}

export default function SlideTitle({ title }:SlideTitleProps) {
  return <div className="slide-title">{title}</div>;
}
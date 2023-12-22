import React from "react";
import Draggable from "react-draggable";
import { useSpring } from "react-spring";
// Styles
import S from "./style";

const images = [
  "https://placekitten.com/640/400",
  "https://placekitten.com/640/640",
  "https://placekitten.com/1000/800",
];

const Slider = () => {
  const [index, setIndex] = React.useState(0);
  const [dragging, setDragging] = React.useState(false);
  const handleDrag = (e, ui) => {
    console.log("📢[index.tsx:16]: ui.deltaX: ", ui.deltaX);
    console.log("📢[index.tsx:17]: index: ", index);

    if (ui.deltaX > 50) {
      setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    } else if (ui.deltaX < -50) {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  const { x } = useSpring({
    x: index * -100,
    config: {
      tension: 300,
      friction: 20,
    },
  });
  return (
    <Draggable
      axis="x"
      onDrag={handleDrag}
      onStart={() => setDragging(true)}
      onStop={() => setDragging(false)}
    >
      <S.Container dragging={dragging}
        style={{
          transform: x.to((value) => `translateX(${value}%)`),
        }}
      >
        {images.map((url, i) => (
          <S.Cover src={url} key={i}   />
        ))}
      </S.Container>
    </Draggable>
  );
};

export default Slider;

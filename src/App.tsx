import { MouseEvent, useState } from "react";

import Constants from "./constants";
import { getValidFirstImageX } from "./utils";
// Components
import { Typography } from "@mui/material";
import Slider from "./components/slider";
// Styles
import S from "./style";

const images = [
  "https://placekitten.com/640/400",
  "https://placekitten.com/300/300",
  "https://placekitten.com/1000/800",
];

const leftMargin = window.innerWidth / 2 - Constants.CONTENT_WIDTH / 2;
const rightMargin = leftMargin + Constants.CONTENT_WIDTH;

function App() {
  const [isDragging, setIsDragging] = useState(false);
  const [restingX, setRestingX] = useState(0);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDeltaX, setDragDeltaX] = useState(0);
  const [currentMouseX, setCurrentMouseX] = useState(0);

  const canStartDragging = (clientX: number) => {
    if (clientX < leftMargin || clientX > rightMargin) return false;
    return true;
  };

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!canStartDragging(e.clientX)) return;
    setIsDragging(true);
    setDragStartX(e.clientX);
  };

  const handleMouseUp = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setIsDragging(false);
    setRestingX((prev) =>
      getValidFirstImageX(prev + e.clientX - dragStartX, images.length)
    );
    setDragDeltaX(0);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setCurrentMouseX(e.clientX);
    if (isDragging) {
      const delta = e.clientX - dragStartX;
      setDragDeltaX(delta);
    }
  };

  return (
    <S.Container>
      <S.Content
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        data-testid="content"
        data-test-resting-x={restingX}
      >
        <Slider
          isDragging={isDragging}
          drawX={restingX + dragDeltaX}
          images={images}
        />
      </S.Content>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        component={"div"}
      >
        Drag to change image
      </Typography>
      <Typography
        variant="caption"
        color="text.secondary"
        align="center"
        component={"div"}
      >
        {`x: ${currentMouseX} down: ${dragStartX} deltaX: ${dragDeltaX} restingX: ${restingX}`}
      </Typography>
    </S.Container>
  );
}

export default App;

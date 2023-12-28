import { useEffect, useRef } from "react";

import Constants from "../../constants";
import { getValidFirstImageX } from "../../utils";
// Styles
import S from "./style";

interface SliderProps {
  isDragging: boolean;
  drawX: number;
  images: string[];
}

function Slider({ isDragging, drawX, images }: SliderProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const x = getValidFirstImageX(drawX, images.length);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    images.forEach((image, index) => {
      const img = new Image();
      img.src = image;
      img.onload = function () {
        const scaledWidth = Math.min(Constants.CONTENT_WIDTH, img.width);
        const scaledHeight = Math.min(Constants.CONTENT_HEIGHT, img.height);

        const centerX = (Constants.CONTENT_WIDTH - scaledWidth) / 2;
        const centerY = (Constants.CONTENT_HEIGHT - scaledHeight) / 2;

        context.fillStyle = "#F2F2F2";
        context.fillRect(
          x + index * Constants.CONTENT_WIDTH,
          0,
          Constants.CONTENT_WIDTH,
          Constants.CONTENT_HEIGHT
        );

        context.drawImage(
          img,
          x + index * Constants.CONTENT_WIDTH + centerX,
          centerY,
          scaledWidth,
          scaledHeight
        );
      };
    });
  }, [canvasRef, images, x]);

  return (
    <S.Canvas
      data-testid="canvas"
      id="canvas"
      ref={canvasRef}
      $dragging={isDragging}
      width={Constants.CONTENT_WIDTH}
      height={Constants.CONTENT_HEIGHT}
    ></S.Canvas>
  );
}

export default Slider;

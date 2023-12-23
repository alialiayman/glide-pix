import { useRef, useState } from "react";

import Draggable from "react-draggable";
// Styles
import Constants from "../../constants";
import S from "./style";

const images = [
  `https://placekitten.com/${Constants.MAX_WIDTH}/${Constants.MAX_HEIGHT}`,
  `https://placekitten.com/${Constants.MAX_WIDTH}/${
    Constants.MAX_HEIGHT - 150
  }`,
  `https://placekitten.com/${Constants.MAX_WIDTH - 40}/${Constants.MAX_HEIGHT}`,
  `https://placekitten.com/${Constants.MAX_WIDTH - 300}/${
    Constants.MAX_HEIGHT
  }`,
];

const Slider = () => {
  const [dragging, setDragging] = useState(false);
  const ref = useRef();

  return (
    <Draggable
      nodeRef={ref}
      axis="x"
      onStart={() => setDragging(true)}
      onStop={() => setDragging(false)}
      bounds={{
        top: 0,
        left: -(images.length - 1) * Constants.MAX_WIDTH,
        right: 0,
        bottom: 0,
      }}
    >
      <S.Container $dragging={dragging.toString()} ref={ref}>
        {images.map((url, i) => (
          <S.Cover src={url} key={i} />
        ))}
      </S.Container>
    </Draggable>
  );
};

export default Slider;

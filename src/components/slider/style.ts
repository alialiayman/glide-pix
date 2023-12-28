import styled from "styled-components";

interface CanvasProps {
  $dragging: boolean;
}

const Canvas = styled.canvas<CanvasProps>`
  cursor: ${(props) => (props.$dragging ? "grabbing" : "grab")};
  border: 1px solid #ccc;
`;

const S = {
  Canvas,
};

export default S;

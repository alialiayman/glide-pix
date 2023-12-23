import styled from "styled-components";
import Constants from "../../constants";

const S = {};

S.Container = styled.div`
  display: flex;
  cursor: ${(props) => (props.dragging ? "grabbing" : "grab")};
`;

S.Cover = styled.div`
  width: ${Constants.MAX_WIDTH}px;
  flex-shrink: 0;
  background-image: url("${(props) => props.src}");
  background-size: auto;
  background-position: center;
  background-repeat: no-repeat;
  height: ${Constants.MAX_HEIGHT}px;
`;

export default S;

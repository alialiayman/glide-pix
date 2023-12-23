import styled from "styled-components";
import Constants from "./constants";

const S = {};

S.Container = styled.div``;

S.Content = styled.div`
  max-width: ${Constants.MAX_WIDTH}px;
  height: ${Constants.MAX_HEIGHT}px;
  margin: 2rem auto 0 auto;
  overflow: hidden;
  background-color: #ccc;
  margin-bottom: 1rem;
  outline: 1px solid #ccc;
`;

export default S;

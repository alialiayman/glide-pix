import styled from "styled-components";
import Constants from "./constants";

const S = {};

S.Container = styled.div`
  width: 100vw;
  padding-top: 2rem;
`;

S.Content = styled.div`
  width: 100%;
  height: ${Constants.CONTENT_HEIGHT}px;
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
`;

export default S;

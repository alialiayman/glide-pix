import Constants from "./constants";
export function getValidFirstImageX(x, length) {
  if (x > 0) {
    return 0;
  }
  if (x < -Constants.CONTENT_WIDTH * (length - 1)) {
    return -Constants.CONTENT_WIDTH * (length - 1);
  }
  return x;
}

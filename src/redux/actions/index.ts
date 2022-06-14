import { DECREMENT, INCREMENT } from "../types/index";

const increaseCounter = (payload) => {
  return { type: INCREMENT, payload };
};
const decreaseCounter = (payload) => {
  return { type: DECREMENT, payload };
};

export { increaseCounter, decreaseCounter };

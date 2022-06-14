import { IState, IType } from "../../../interfaces";
import { INCREMENT, DECREMENT } from "../../types";

const initialState: IState = { count: 0 };

const counterReducer = (state: IState = initialState, action: IType) => {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT:
      return { ...state, count: state.count + payload };
    case DECREMENT:
      return { ...state, count: state.count - payload };
    default:
      return state;
  }
};

export default counterReducer;

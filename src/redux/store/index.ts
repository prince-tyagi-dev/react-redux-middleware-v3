import { createStore, applyMiddleware } from "redux";
import loggerMiddleware from "../../middlewares/loggerMiddleware";
import rootReducer from "../reducers/rootReducer";

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

export default store;

import { createStore, applyMiddleware } from "redux";

// Types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// Reducer
const reducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;
    case DECREMENT:
      return state - action.payload;
    default:
      return state;
  }
};

// Middleware Logger
const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
  console.info("store=", store);
  console.info("next=", next);
  console.info("action=", action);
  next(action);
};

// Middleware
const middleware = applyMiddleware(loggerMiddleware);

// Store
const store = createStore(reducer, middleware);

// Subscribe the store
store.subscribe(() => {
  console.info("CurrentState", store.getState());
});

// Call multiple dispatch to increment & decerment the count
store.dispatch({ type: INCREMENT, payload: 1 });
store.dispatch({ type: INCREMENT, payload: 5 });
store.dispatch({ type: DECREMENT, payload: 2 });

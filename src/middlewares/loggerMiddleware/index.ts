const loggerMiddleware = (store) => (next) => (action) => {
  console.info(store);
  console.info(next);
  console.info(action);
  next(action);
};

export default loggerMiddleware;

const loggerMiddleware = (store) => (next) => (action) => {
  console.info("store=", store);
  console.info("next=", next);
  console.info("action=", action);
  next(action);
};

export default loggerMiddleware;

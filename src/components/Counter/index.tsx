import { useEffect, useMemo } from "react";
import { connect } from "react-redux";
import { decreaseCounter, increaseCounter } from "../../redux/actions";
import useTotoList from "../../CustomHooks/useTodoList";

const Counter = (props) => {
  const incrementHandler = () => {
    props.increaseCounter(1);
  };
  const decrementHandler = () => {
    props.decreaseCounter(1);
  };
  const data = useTotoList("https://jsonplaceholder.typicode.com/todos");

  useEffect(() => {
    console.info("todoList data: ", data);
    debugger;
  }, [data]);

  const componentWillMount = () => {
    // componentWillMount events
    console.info("componentWillMount");
    debugger;
  };
  const componentWillunmount = () => {
    // componentWillUnmount events
    console.info("componentWillunmount");
    debugger;
  };
  const componentDidMount = () => {
    // componentDidMount events
    console.info("componentDidMount");
    debugger;
    return componentWillunmount;
  };

  useMemo(componentWillMount, []);
  useEffect(componentDidMount, []);
  useEffect(() => {
    // componentDidMUpdate events
    console.info("componentDidMUpdate");
    debugger;
  }, [props.count]);

  return (
    <>
      <h4>
        Here is an example of the counter module
        <br /> to increase and decrease the counter
        <br /> using the Functional component.
      </h4>
      <button style={{ marginTop: "5px" }} onClick={incrementHandler}>
        Increase by 1
      </button>
      <button style={{ marginLeft: "5px" }} onClick={decrementHandler}>
        Decrease by 1
      </button>
      <br />
      <br />
      Count: {props.count}
    </>
  );
};

const mapStateToProps = (state) => {
  return { count: state.counter.count };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: (payload) => dispatch(increaseCounter(payload)),
    decreaseCounter: (payload) => dispatch(decreaseCounter(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

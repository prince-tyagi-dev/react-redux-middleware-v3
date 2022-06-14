import { connect } from "react-redux";
import { decreaseCounter, increaseCounter } from "../../redux/actions";

const Counter = (props) => {
  const incrementHandler = () => {
    props.increaseCounter(1);
  };
  const decrementHandler = () => {
    props.decreaseCounter(1);
  };

  return (
    <>
      <h4>
        Here is an example of the counter module, to increase and decrease the
        counter.
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

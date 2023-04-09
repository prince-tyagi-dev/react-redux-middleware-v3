import React from "react";

interface IClassRoomState {
  studentsCount: number;
}

class ClassRoom extends React.Component {
  state: IClassRoomState;

  constructor(props: any) {
    super(props);
    this.state = { studentsCount: 0 };
    //this.addStudents = this.addStudents.bind(this);
    this.removeStudents = this.removeStudents.bind(this);
    // Commented the below line, to show if a function not bind,
    // with the 'this' keyword, and the function is declared as
    // an arrow function, then the 'this' keyword will be
    // automatically binded
    // this.handleOnChange = this.handleOnChange.bind(this);
  }

  // Use the arrow function to use the this keyword.
  addStudents = () => {
    this.setState({
      ...this.state,
      studentsCount: this.state.studentsCount + 1
    });
  };

  // Pass a function to the setState function to show how its used,
  // the prevState to update te state.
  removeStudents() {
    this.setState((prevState: IClassRoomState) => {
      return { ...prevState, studentsCount: prevState.studentsCount - 1 };
    });
  }

  handleOnChange = (e: any) => {
    this.setState((prevState) => {
      return { ...prevState, studentsCount: Number(e.target.value) };
    });
  };

  render() {
    return (
      <>
        <h4>
          Here is an example of the Students module to
          <br /> increase and decrease the students count
          <br /> using the Class component.
        </h4>
        <label>Students Count: </label>
        <input
          type="number"
          placeholder="Enter any number..."
          value={this.state.studentsCount}
          onChange={this.handleOnChange}
          maxLength={10}
        />
        <br />
        <br />
        Current Students Count: {this.state.studentsCount}
        <br />
        <br />
        <button onClick={this.addStudents} style={{ marginLeft: "5px" }}>
          Increase by 1
        </button>
        <button onClick={this.removeStudents} style={{ marginLeft: "5px" }}>
          Decrease by 1
        </button>
      </>
    );
  }
}
export default ClassRoom;

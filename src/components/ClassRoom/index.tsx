import React from "react";

interface IClassRoomState {
  studentsCount: number;
}

class ClassRoom extends React.Component {
  state: IClassRoomState;

  constructor(props: any) {
    super(props);
    this.state = { studentsCount: 0 };
    this.addStudents = this.addStudents.bind(this);
    this.removeStudents = this.removeStudents.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  addStudents() {
    this.setState((prevState: IClassRoomState) => {
      return { studentsCount: prevState.studentsCount + 1 };
    });
  }
  removeStudents() {
    this.setState((prevState: IClassRoomState) => {
      return { ...prevState, studentsCount: prevState.studentsCount - 1 };
    });
  }

  handleOnChange(e) {
    this.setState((prevState) => {
      return { ...prevState, studentsCount: e.target.value };
    });
  }

  render() {
    return (
      <>
        <label>Students Count: </label>
        <input
          type="number"
          placeholder="Enter any number..."
          onChange={this.handleOnChange}
        />
        <br />
        <br />
        <button onClick={this.addStudents}>Increase by 1 </button>
        <br />
        <br />
        <button onClick={this.removeStudents}>Decrease by 1 </button>
        <br />
        <span>Students Count: {this.state.studentsCount}</span>
      </>
    );
  }
}
export default ClassRoom;

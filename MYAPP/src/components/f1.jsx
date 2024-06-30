import React from "react";

class DidMountComponent extends React.Component {
  state = { course: "React", counter: 0 };
  componentDidMount() {
    console.log("after render");
    this.intervalId = setInterval(() => {
      //this.setState({ course: "Vue", counter: this.state.counter + 1 });
      this.setState((state) => {
        return {
          course: "Vue",
          counter: state.counter + 1,
        };
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    console.log("before render");
    return (
      <div>
        <h1>{this.state.course}</h1>
        <h1>{this.state.counter}</h1>
      </div>
    );
  }
}
export default DidMountComponent;

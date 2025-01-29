import React, { Ref } from "react";
import ChildComponent from "../components/ChildComponent";

class About extends React.Component<any, { count: number; another: number }> {
  inputRef: any;
  childRef: any;

  constructor(props: any) {
    super(props);

    this.inputRef = React.createRef();
    this.childRef = React.createRef();

    this.state = {
      count: 1,
      another: 1,
    };

    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(): void {
    console.log("Mounted...");
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    console.log("Props", prevProps, this.props);
    console.log("State", prevState, this.state);
  }

  static getDerriveStateFromProps() {
    return {
      count: 44,
    };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  whatsRefValue = () => {
    console.log(this.inputRef.current?.value);
  };

  handleAccessChildMethod = () => {
    this.childRef.current.helloWorld();
  };

  render() {
    return (
      <>
        Couter {this.state.count}
        <button onClick={this.handleClick}> Click </button>
        <ChildComponent count={this.state.count} ref={this.childRef as any} />
        <input type="text" ref={this.inputRef as any} />
        <button onClick={this.whatsRefValue}> Click </button>
        <button onClick={this.handleAccessChildMethod}>
          {" "}
          Say hello from child{" "}
        </button>
      </>
    );
  }
}

export default About;

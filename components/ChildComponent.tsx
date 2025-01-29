import React, { Component, PureComponent } from "react";

type Props = {
  count: number;
};

type State = {
  count: number;
};

class ChildComponent extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: props.count,
    };
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    if (nextProps.count !== prevState.count) {
      return {
        count: nextProps.count,
      };
    }

    // No state change
    return null;
  }

  helloWorld = () => {
    console.log("Hello World From child component");
  };

  render() {
    return <div>{this.state.count} - Count from child</div>;
  }
}

export default ChildComponent;

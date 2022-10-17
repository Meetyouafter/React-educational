import React from "react";

class ClassCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      }
    }

    increment = () => {
      this.setState({ count: this.state.count + 1 });
    }
    decrement = () => {
      this.setState({ count: this.state.count - 1 });
    }

    render() {
      return (
        <div className="class-counter">
          <h3>{this.state.count}</h3>
          <button className="btn" onClick={this.increment}>Increment</button>
          <button className="btn" onClick={this.decrement}>Decrement</button>
        </div>
      )
    }
}


export default ClassCounter;
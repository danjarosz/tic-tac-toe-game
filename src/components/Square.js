import React from "react";

class Square extends React.Component {
  render() {
    const { value, onClick } = this.props;

    return (
      <button className="square" onClick={onClick}>
        {value}
      </button>
    );
  }
}

export default Square;

import React from "react";
import Square from "./Square";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick = (i) => {
    const squares = [...this.state.squares];
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState((prevState) => ({
      squares,
      xIsNext: !prevState.xIsNext,
    }));
  };

  renderSquare(i) {
    const value = this.state.squares[i];
    return <Square value={value} onClick={() => this.handleClick(i)} />;
  }

  render() {
    const { xIsNext } = this.state;
    const status = `Next player: ${xIsNext ? "X" : "O"}`;

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;

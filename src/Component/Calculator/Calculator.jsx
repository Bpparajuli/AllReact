import React from "react";
import "./calculator.css";

class Calculator extends React.Component {
  state = {
    displayValue: "0",
    operator: null,
    previousValue: null,
  };

  handleNumberClick = (value) => {
    const { displayValue } = this.state;
    const newValue = displayValue === "0" ? value : displayValue + value;
    this.setState({
      displayValue: newValue,
    });
  };

  handleOperatorClick = (operator) => {
    const {
      displayValue,
      operator: previousOperator,
      previousValue,
    } = this.state;

    if (previousOperator) {
      const result = this.calculate(
        previousValue,
        displayValue,
        previousOperator
      );
      this.setState({
        displayValue: String(result),
        operator,
        previousValue: result,
      });
    } else {
      this.setState({
        operator,
        previousValue: displayValue,
      });
    }

    this.setState({
      displayValue: "0",
    });
  };

  handleClearClick = () => {
    this.setState({
      displayValue: "0",
      operator: null,
      previousValue: null,
    });
  };
  handleOffClick = () => {
    this.setState({
      displayValue: " ",
      operator: null,
      previousValue: null,
    });
  };
  handleOnClick = () => {
    this.setState({
      displayValue: "0",
      operator: null,
      previousValue: null,
    });
  };
  handleEqualsClick = () => {
    const { displayValue, operator, previousValue } = this.state;

    if (operator) {
      const result = this.calculate(previousValue, displayValue, operator);
      this.setState({
        displayValue: String(result),
        operator: null,
        previousValue: null,
      });
    }
  };

  calculate = (value1, value2, operator) => {
    const a = parseFloat(value1);
    const b = parseFloat(value2);

    switch (operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
      default:
        return null;
    }
  };

  render() {
    return (
      <div className="container-fluid d-flex justify-content-center  vh-100">
        <div className="calculator">
          <div className="display">{this.state.displayValue}</div>
          <div className="keypad">
            <button onClick={() => this.handleClearClick()}>Clear</button>
            <button onClick={() => this.handleOffClick()}>Off</button>
            <button onClick={() => this.handleOnClick()}>On</button>
            <button onClick={() => this.handleOperatorClick("/")}>/</button>

            <button onClick={() => this.handleNumberClick("7")}>7</button>
            <button onClick={() => this.handleNumberClick("8")}>8</button>
            <button onClick={() => this.handleNumberClick("9")}>9</button>
            <button onClick={() => this.handleOperatorClick("*")}>*</button>

            <button onClick={() => this.handleNumberClick("4")}>4</button>
            <button onClick={() => this.handleNumberClick("5")}>5</button>
            <button onClick={() => this.handleNumberClick("6")}>6</button>
            <button onClick={() => this.handleOperatorClick("-")}>-</button>

            <button onClick={() => this.handleNumberClick("1")}>1</button>
            <button onClick={() => this.handleNumberClick("2")}>2</button>
            <button onClick={() => this.handleNumberClick("3")}>3</button>
            <button onClick={() => this.handleNumberClick("0")}>0</button>
            <button onClick={() => this.handleNumberClick(".")}>.</button>
            <button onClick={() => this.handleEqualsClick()}>=</button>
            <button onClick={() => this.handleOperatorClick("+")}>+</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;

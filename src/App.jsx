import * as math from "mathjs";
import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";

const App = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const addToValue = (val) => {
    setValue((value) => [...value, val]);
  };

const calculateResult = () => {
  const input = value.join("") //Remove all commas

  setResult(math.evaluate(input))
}

  const clearInput = () => {
    setValue("");
    setResult("");
  };
  const buttonColor = "red";

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input value={value} result={result} />
        <div className="row">
          <Button symbol="7" handleClick={addToValue} />
          <Button symbol="8" handleClick={addToValue} />
          <Button symbol="9" handleClick={addToValue} />
          <Button symbol="*" color={buttonColor} handleClick={addToValue} />
        </div>

        <div className="row">
          <Button symbol="4" handleClick={addToValue} />
          <Button symbol="5" handleClick={addToValue} />
          <Button symbol="6" handleClick={addToValue} />
          <Button symbol="-" color={buttonColor} handleClick={addToValue} />
        </div>

        <div className="row">
          <Button symbol="1" handleClick={addToValue} />
          <Button symbol="2" handleClick={addToValue} />
          <Button symbol="3" handleClick={addToValue} />
          <Button symbol="+" color={buttonColor} handleClick={addToValue} />
        </div>

        <div className="row">
          <Button symbol="0" handleClick={addToValue} />
          <Button symbol="." handleClick={addToValue} />
          <Button symbol="=" handleClick={calculateResult} />
          <Button symbol="/" color={buttonColor} handleClick={addToValue} />
        </div>
        <Button symbol="Clear" color="black" handleClick={clearInput} />
      </div>
    </div>
  );
};

export default App;


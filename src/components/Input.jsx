import "./Input.css";

const Input = ({value, result}) => {
  return (
    <div className="input-wrapper">
      <div className="result">
        <h1>{result}</h1>
      </div>
      <div className="value">
        <h3>{value}</h3>
      </div>
    </div>
  );
};

export default Input;

import "./../../assets/styles/global.css";

function Button({ onClick, className = "", buttonText, children }) {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {children}
      <div>{buttonText}</div>
    </button>
  );
}

export default Button;

import "./../../assets/styles/global.css";

function Button({
  onClick,
  className = "",
  buttonText,
  children,
  isLoading = false, // New prop to indicate loading state
  disabled = false, // Option to disable the button
  style,
}) {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      disabled={isLoading || disabled}
      style={style}
    >
      {isLoading ? (
        <div className="button-loader">
          <span className="spinner"></span> Saving...
        </div>
      ) : (
        <>
          {children}
          <div>{buttonText}</div>
        </>
      )}
    </button>
  );
}

export default Button;

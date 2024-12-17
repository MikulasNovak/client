import "./../../assets/styles/global.css";

function Button({
  onClick,
  className = "",
  buttonText,
  children,
  isLoading = false, // New prop to indicate loading state
  disabled = false, // Option to disable the button
}) {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      disabled={isLoading || disabled} // Disable the button when loading or explicitly disabled
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

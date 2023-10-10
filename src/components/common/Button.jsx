function Button({ onClick = null, type = "primary", text }) {
  return (
    <button
      onClick={onClick}
      className={`${type === "primary" ? "primary" : "secondary"} button`}
    >
      {text}
    </button>
  );
}

export default Button;

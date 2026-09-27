
function Card({
  children,
  className = "",
  padding = "default",
  hover = false,
  interactive = false,
}) {
  const paddingStyles = {
    none: "",
    small: "p-4",
    default: "p-6",
    large: "p-8",
  };

  const interactiveStyles =
    hover || interactive
      ? "transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md"
      : "";

  return (
    <div
      className={[
        "rounded-2xl border border-gray-200 bg-white shadow-sm",
        paddingStyles[padding] || paddingStyles.default,
        interactiveStyles,
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export default Card;


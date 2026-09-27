function Button({
  children,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
  ...props
}) {
  const variants = {
    primary:
      "bg-gray-900 text-white hover:bg-gray-800",

    secondary:
      "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50",

    ghost:
      "text-gray-700 hover:bg-gray-100",

    danger:
      "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={[
        "inline-flex items-center justify-center rounded-xl px-5 py-2.5",
        "text-sm font-semibold",
        "transition-colors duration-200",
        "focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        variants[variant],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
function Button({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  className = "",
  ...props
}) {
  const baseStyles =
    "group inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 ease-out focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:opacity-50 active:scale-[0.98]";

  const variants = {
    primary:
      "bg-gray-950 text-white shadow-sm hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-md focus:ring-gray-950/10",

    secondary:
      "border border-gray-200 bg-white text-gray-700 shadow-sm hover:-translate-y-0.5 hover:border-gray-300 hover:bg-gray-50 hover:shadow-md focus:ring-gray-950/10",

    ghost:
      "bg-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-950 focus:ring-gray-950/10",

    danger:
      "bg-red-600 text-white shadow-sm hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-md focus:ring-red-500/10",

    outlineDanger:
      "border border-red-200 bg-white text-red-600 hover:-translate-y-0.5 hover:border-red-300 hover:bg-red-50 focus:ring-red-500/10",

    success:
      "bg-emerald-600 text-white shadow-sm hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-md focus:ring-emerald-500/10",
  };

  const sizes = {
    xs: "px-2.5 py-1.5 text-xs",
    sm: "px-3 py-2 text-xs",
    md: "px-4 py-2.5 text-sm",
    lg: "px-5 py-3 text-sm",
    xl: "px-6 py-3.5 text-sm",
  };

  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={[
        baseStyles,
        variants[variant] || variants.primary,
        sizes[size] || sizes.md,
        className,
      ].join(" ")}
      {...props}
    >
      {loading && (
        <span
          aria-hidden="true"
          className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
        />
      )}

      <span>{children}</span>
    </button>
  );
}

export default Button;


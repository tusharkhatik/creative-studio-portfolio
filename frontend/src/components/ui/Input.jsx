
function Input({
  label,
  error,
  helperText,
  id,
  required = false,
  className = "",
  ...props
}) {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="mb-2 block text-sm font-medium text-gray-800"
        >
          {label}

          {required && (
            <span className="ml-1 text-red-500" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}

      <input
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error ? `${id}-error` : helperText ? `${id}-helper` : undefined
        }
        className={[
          "w-full rounded-xl border bg-white px-4 py-3",
          "text-sm text-gray-900",
          "placeholder:text-gray-400",
          "outline-none transition-all duration-200",
          "hover:border-gray-400",
          "focus:ring-4",
          error
            ? "border-red-300 focus:border-red-500 focus:ring-red-500/10"
            : "border-gray-200 focus:border-gray-950 focus:ring-gray-950/5",
          "disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500",
          className,
        ].join(" ")}
        {...props}
      />

      {error ? (
        <p
          id={`${id}-error`}
          className="mt-2 text-xs font-medium text-red-600"
        >
          {error}
        </p>
      ) : helperText ? (
        <p
          id={`${id}-helper`}
          className="mt-2 text-xs text-gray-500"
        >
          {helperText}
        </p>
      ) : null}
    </div>
  );
}

export default Input;


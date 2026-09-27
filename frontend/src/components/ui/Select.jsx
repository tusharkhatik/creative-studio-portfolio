
function Select({
  label,
  options = [],
  placeholder = "Select an option",
  error,
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

      <select
        id={id}
        aria-invalid={Boolean(error)}
        className={[
          "w-full rounded-xl border bg-white px-4 py-3",
          "text-sm text-gray-900 outline-none",
          "transition-all duration-200",
          "hover:border-gray-400",
          "focus:ring-4",
          error
            ? "border-red-300 focus:border-red-500 focus:ring-red-500/10"
            : "border-gray-200 focus:border-gray-950 focus:ring-gray-950/5",
          "disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500",
          className,
        ].join(" ")}
        {...props}
      >
        <option value="">
          {placeholder}
        </option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && (
        <p className="mt-2 text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export default Select;


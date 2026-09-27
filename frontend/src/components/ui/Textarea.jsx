function Textarea({
  label,
  error,
  helperText,
  id,
  className = "",
  rows = 5,
  ...props
}) {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}

      <textarea
        id={id}
        rows={rows}
        className={[
          "w-full resize-y rounded-xl border bg-white px-4 py-3",
          "text-sm text-gray-900",
          "placeholder:text-gray-400",
          "outline-none transition",
          "focus:ring-2 focus:ring-gray-900/10",
          error
            ? "border-red-500 focus:border-red-500"
            : "border-gray-300 focus:border-gray-900",
          className,
        ].join(" ")}
        {...props}
      />

      {error ? (
        <p className="mt-2 text-sm text-red-600">
          {error}
        </p>
      ) : helperText ? (
        <p className="mt-2 text-sm text-gray-500">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}

export default Textarea;
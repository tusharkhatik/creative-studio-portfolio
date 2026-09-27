function FormField({
  label,
  htmlFor,
  required = false,
  description,
  error,
  children,
}) {
  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={htmlFor}
          className="block text-sm font-medium"
        >
          {label}

          {required && (
            <span className="ml-1" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}

      {description && (
        <p className="text-sm text-gray-500">
          {description}
        </p>
      )}

      {children}

      {error && (
        <p
          className="text-sm text-red-600"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}

export default FormField;
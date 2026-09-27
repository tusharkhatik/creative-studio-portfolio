import { AlertCircle } from "lucide-react";

function ErrorState({
  title = "Something went wrong",
  description = "We couldn't load this information. Please try again.",
  action = null,
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-red-100 bg-red-50 px-6 py-16 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
        <AlertCircle
          size={22}
          className="text-red-600"
        />
      </div>

      <h3 className="mt-4 text-lg font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-2 max-w-md text-sm text-gray-600">
        {description}
      </p>

      {action && (
        <div className="mt-6">
          {action}
        </div>
      )}
    </div>
  );
}

export default ErrorState;
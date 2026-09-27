import { FolderOpen } from "lucide-react";

function EmptyState({
  title = "Nothing here yet",
  description = "There is no data to display.",
  action = null,
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
        <FolderOpen
          size={22}
          className="text-gray-500"
        />
      </div>

      <h3 className="mt-4 text-lg font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-2 max-w-md text-sm text-gray-500">
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

export default EmptyState;
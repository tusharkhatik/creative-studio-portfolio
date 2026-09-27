function Loading({
  message = "Loading...",
  fullScreen = false,
}) {
  return (
    <div
      className={[
        "flex items-center justify-center gap-3",
        fullScreen ? "min-h-[50vh]" : "py-10",
      ].join(" ")}
    >
      <span
        className="h-5 w-5 animate-spin rounded-full border-2 border-gray-200 border-t-gray-900"
        aria-hidden="true"
      />

      <span className="text-sm text-gray-500">
        {message}
      </span>
    </div>
  );
}

export default Loading;
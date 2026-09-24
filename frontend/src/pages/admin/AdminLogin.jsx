import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#080a12] px-6 text-white">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-white/40">404</p>
        <h1 className="mt-4 text-4xl font-bold">Page not found</h1>
        <Link to="/" className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black">
          Go Home
        </Link>
      </div>
    </main>
  );
}

export default NotFoundPage;

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../../app/providers/AuthProvider";

function AdminLogin() {
  const { login, isAuthenticated, loading } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const from = location.state?.from?.pathname || "/admin/dashboard";

  if (isAuthenticated) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");

    if (!username.trim()) {
      setError("Please enter your username or email.");
      return;
    }

    if (!password.trim()) {
      setError("Please enter your password.");
      return;
    }

    try {
      await login({
        username: username.trim(),
        role: "ADMIN",
        rememberMe,
      });

      navigate(from, { replace: true });
    } catch (loginError) {
      setError(
        loginError?.message ||
          "Unable to sign in. Please check your credentials and try again."
      );
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* LEFT SIDE */}
        <section className="relative hidden overflow-hidden bg-gray-950 lg:flex">
          <div className="absolute inset-0">
            <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
          </div>

          <div className="relative z-10 flex w-full flex-col justify-between p-10 xl:p-14">

            {/* Brand */}
            <div>
              <Link
                to="/"
                className="inline-flex items-center gap-3 text-white"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10">
                  <span className="text-sm font-bold">CS</span>
                </div>

                <div>
                  <p className="text-sm font-semibold tracking-wide">
                    Creative Studio
                  </p>

                  <p className="text-xs text-white/40">
                    Creative Management Platform
                  </p>
                </div>
              </Link>
            </div>

            {/* Content */}
            <div className="max-w-xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                Studio Workspace
              </p>

              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white xl:text-5xl">
                Everything you need to manage your creative business.
              </h1>

              <p className="mt-6 max-w-lg text-base leading-7 text-white/50">
                Manage projects, services, testimonials, client leads,
                media and website content from one centralized workspace.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <ShieldCheck className="h-5 w-5 text-white/70" />

                  <h2 className="mt-4 text-sm font-semibold text-white">
                    Secure workspace
                  </h2>

                  <p className="mt-2 text-xs leading-5 text-white/40">
                    Administrative tools are protected behind authenticated
                    access.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <LockKeyhole className="h-5 w-5 text-white/70" />

                  <h2 className="mt-4 text-sm font-semibold text-white">
                    Private management
                  </h2>

                  <p className="mt-2 text-xs leading-5 text-white/40">
                    Keep your studio operations separate from your public
                    website.
                  </p>
                </div>

              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between text-xs text-white/30">
              <span>© {new Date().getFullYear()} Creative Studio</span>
              <span>Admin Portal</span>
            </div>
          </div>
        </section>

        {/* RIGHT SIDE */}
        <section className="flex min-h-screen flex-col">

          {/* Mobile Header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-5 lg:hidden">
            <Link
              to="/"
              className="flex items-center gap-2 text-sm font-semibold text-gray-900"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-950 text-xs font-bold text-white">
                CS
              </div>

              Creative Studio
            </Link>

            <Link
              to="/"
              className="text-xs font-medium text-gray-500"
            >
              Website
            </Link>
          </div>

          {/* Form Container */}
          <div className="flex flex-1 items-center justify-center px-5 py-12 sm:px-8 lg:px-16 xl:px-24">
            <div className="w-full max-w-md">

              {/* Back */}
              <Link
                to="/"
                className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-gray-900"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to website
              </Link>

              {/* Heading */}
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Welcome back
                </p>

                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
                  Sign in to your workspace
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Enter your credentials to access the Creative Studio
                  administration panel.
                </p>
              </div>

              {/* Error */}
              {error && (
                <div
                  role="alert"
                  className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3"
                >
                  <p className="text-sm font-medium text-red-700">
                    {error}
                  </p>
                </div>
              )}

              {/* Login Form */}
              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >

                {/* Username */}
                <div>
                  <label
                    htmlFor="username"
                    className="mb-2 block text-sm font-medium text-gray-800"
                  >
                    Username or email
                  </label>

                  <input
                    id="username"
                    name="username"
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    placeholder="Enter your username or email"
                    autoComplete="username"
                    autoFocus
                    disabled={loading}
                    className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-400 focus:border-gray-950 focus:ring-4 focus:ring-gray-950/5 disabled:cursor-not-allowed disabled:bg-gray-50"
                  />
                </div>

                {/* Password */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-800"
                    >
                      Password
                    </label>

                    <button
                      type="button"
                      className="text-xs font-medium text-gray-500 transition hover:text-gray-900"
                      onClick={() =>
                        setError(
                          "Password recovery will be connected when backend authentication is implemented."
                        )
                      }
                    >
                      Forgot password?
                    </button>
                  </div>

                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      disabled={loading}
                      className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 pr-12 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-400 focus:border-gray-950 focus:ring-4 focus:ring-gray-950/5 disabled:cursor-not-allowed disabled:bg-gray-50"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword((current) => !current)
                      }
                      disabled={loading}
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                      className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100 hover:text-gray-700 disabled:cursor-not-allowed"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember */}
                <div className="flex items-center">
                  <label className="flex cursor-pointer items-center gap-3">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(event) =>
                        setRememberMe(event.target.checked)
                      }
                      disabled={loading}
                      className="h-4 w-4 rounded border-gray-300 text-gray-950 focus:ring-gray-950"
                    />

                    <span className="text-sm text-gray-600">
                      Keep me signed in
                    </span>
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gray-950 px-5 text-sm font-semibold text-white transition hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-950/10 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Signing in...
                    </>
                  ) : (
                    <>
                      Sign in
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </form>

              {/* Security */}
              <div className="mt-8 flex gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gray-500" />

                <p className="text-xs leading-5 text-gray-500">
                  This is a restricted administration area. Only authorized
                  studio administrators should sign in.
                </p>
              </div>

              {/* Footer Links */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-gray-400">
                <Link
                  to="/privacy"
                  className="transition hover:text-gray-700"
                >
                  Privacy
                </Link>

                <Link
                  to="/terms"
                  className="transition hover:text-gray-700"
                >
                  Terms
                </Link>

                <span>•</span>

                <span>Creative Studio Admin</span>
              </div>

            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default AdminLogin;


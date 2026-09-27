function AdminDashboard() {
  return (
    <section className="min-h-screen bg-gray-50 p-8">
      <div className="mb-8">
        <p className="text-sm font-medium text-gray-500">
          Admin Panel
        </p>

        <h1 className="mt-1 text-3xl font-bold text-gray-900">
          Dashboard
        </h1>

        <p className="mt-2 text-gray-600">
          Welcome back. Here's an overview of your creative studio.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">Projects</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">24</p>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">Services</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">8</p>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">New Leads</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">12</p>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">Testimonials</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">18</p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900">
          Recent Activity
        </h2>

        <p className="mt-2 text-gray-500">
          Recent projects, leads, and other admin activity will appear here.
        </p>
      </div>
    </section>
  );
}

export default AdminDashboard;
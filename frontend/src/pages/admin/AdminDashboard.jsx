import { useMemo } from "react";
import { Link } from "react-router-dom";
import { BarChart3, FolderKanban, LayoutDashboard, PencilLine, Plus, Sparkles, TableProperties } from "lucide-react";

import { adminStats, latestProjects } from "../../data/adminData";

function AdminDashboard() {
  const stats = useMemo(() => adminStats, []);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-violet-300">Overview</p>
          <h2 className="mt-2 text-3xl font-bold text-white">Dashboard</h2>
        </div>

        <Link to="/admin/projects/create" className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-400">
          <Plus size={16} />
          New project
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, value, change, icon: Icon, accent }) => (
          <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center justify-between">
              <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${accent}`}>
                <Icon size={18} />
              </span>
              <span className="text-xs font-medium text-emerald-300">{change}</span>
            </div>
            <p className="mt-6 text-3xl font-bold text-white">{value}</p>
            <p className="mt-2 text-sm text-white/50">{label}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.3fr_.7fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Recent work</h3>
            <Link to="/admin/projects" className="text-sm text-violet-300">View all</Link>
          </div>

          <div className="space-y-4">
            {latestProjects.map((project) => (
              <div key={project.id} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <div>
                  <p className="font-medium text-white">{project.title}</p>
                  <p className="mt-1 text-sm text-white/45">{project.category} • {project.year}</p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.15em] text-emerald-200">
                    {project.status}
                  </span>
                  <Link to={`/admin/projects/${project.id}/edit`} className="inline-flex items-center gap-1 rounded-full border border-white/10 px-2 py-1 text-xs text-white/70">
                    <PencilLine size={12} />
                    Edit
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-500/20 text-violet-200">
              <Sparkles size={18} />
            </span>
            <h3 className="text-lg font-semibold text-white">Quick notes</h3>
          </div>

          <ul className="space-y-3 text-sm text-white/65">
            <li className="rounded-2xl border border-white/10 bg-slate-900/60 p-3">Brand identity refresh for a premium interiors studio is in review.</li>
            <li className="rounded-2xl border border-white/10 bg-slate-900/60 p-3">Three new leads are waiting for pricing follow-up.</li>
            <li className="rounded-2xl border border-white/10 bg-slate-900/60 p-3">Two testimonial approvals are pending client confirmation.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;

import { NavLink } from "react-router-dom";
import { BriefcaseBusiness, CircleHelp, FileImage, LayoutDashboard, MessageSquareText, NotebookText, ShieldCheck, Sparkles, Users, Wrench } from "lucide-react";

const items = [
  { to: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/projects", label: "Projects", icon: BriefcaseBusiness },
  { to: "/admin/services", label: "Services", icon: Wrench },
  { to: "/admin/testimonials", label: "Testimonials", icon: MessageSquareText },
  { to: "/admin/faqs", label: "FAQs", icon: CircleHelp },
  { to: "/admin/leads", label: "Leads", icon: Users },
  { to: "/admin/media", label: "Media", icon: FileImage },
  { to: "/admin/settings", label: "Settings", icon: ShieldCheck },
];

function AdminSidebar() {
  return (
    <aside className="w-full max-w-[260px] border-r border-white/10 bg-slate-950/95 p-5">
      <div className="flex items-center gap-3 px-2 py-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20 text-violet-200">
          <Sparkles size={18} />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">Studio</p>
          <h2 className="text-lg font-bold text-white">Creative</h2>
        </div>
      </div>

      <nav className="mt-8 space-y-2">
        {items.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition ${
                isActive
                  ? "bg-violet-500/15 text-violet-200 ring-1 ring-violet-500/30"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`
            }
          >
            <Icon size={16} />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default AdminSidebar;

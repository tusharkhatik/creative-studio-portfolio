import { Bell, LogOut, Sparkles } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

function AdminHeader() {
  const { user, logout } = useAuth();

  return (
    <header className="flex items-center justify-between border-b border-white/10 bg-slate-900/80 px-6 py-4 backdrop-blur">
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-violet-300">Studio dashboard</p>
        <h1 className="mt-2 text-xl font-semibold text-white">Creative Operations</h1>
      </div>

      <div className="flex items-center gap-4">
        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10">
          <Bell size={16} />
        </button>

        <div className="hidden items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 sm:flex">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/20 text-sm font-semibold text-violet-200">
            {user?.name?.[0] || "A"}
          </span>
          <div className="text-left">
            <p className="text-sm font-medium text-white">{user?.name || "Admin"}</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">Online</p>
          </div>
        </div>

        <button
          onClick={logout}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition hover:bg-white/10"
        >
          <LogOut size={15} />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </header>
  );
}

export default AdminHeader;

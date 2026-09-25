import { leads } from "../../data/adminData";

function Leads() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-violet-300">CRM</p>
        <h2 className="mt-2 text-3xl font-bold text-white">Leads</h2>
      </div>

      <div className="space-y-3">
        {leads.map((lead) => (
          <div key={lead.id} className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold text-white">{lead.name}</p>
              <p className="text-sm text-white/50">{lead.email}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-violet-200">{lead.status}</span>
              <span className="text-sm text-white/45">{lead.projectType}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leads;

import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Plus, Trash2 } from "lucide-react";

import { projects } from "../../data/adminData";

function Projects() {
  const [items, setItems] = useState(projects);

  const handleDelete = (id) => {
    setItems((current) => current.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-violet-300">Portfolio</p>
          <h2 className="mt-2 text-3xl font-bold text-white">Projects</h2>
        </div>

        <Link to="/admin/projects/create" className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-400">
          <Plus size={16} />
          Add project
        </Link>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        {items.map((project) => (
          <div key={project.id} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <img src={project.image} alt={project.title} className="h-52 w-full object-cover" />
            <div className="p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-violet-300">{project.category}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-200">{project.status}</span>
              </div>

              <p className="mt-4 text-sm leading-6 text-white/60">{project.description}</p>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm text-white/40">{project.year}</span>
                <div className="flex items-center gap-2">
                  <Link to={`/admin/projects/${project.id}/edit`} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80 transition hover:bg-white/10">
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(project.id)} className="rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1.5 text-sm text-rose-200 transition hover:bg-rose-500/20">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

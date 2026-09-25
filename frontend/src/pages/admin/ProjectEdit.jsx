import { useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";

import { projects } from "../../data/adminData";

function ProjectEdit() {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const project = useMemo(() => projects.find((item) => String(item.id) === String(projectId)) || projects[0], [projectId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Edit project", projectId, project);
    navigate("/admin/projects");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Link to="/admin/projects" className="rounded-full border border-white/10 bg-white/5 p-2 text-white/70">
          <ArrowLeft size={16} />
        </Link>
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-violet-300">Portfolio</p>
          <h2 className="mt-2 text-3xl font-bold text-white">Edit project</h2>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="space-y-2 text-sm text-white/70">
            <span>Project name</span>
            <input defaultValue={project.title} className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white focus:border-violet-400 outline-none" />
          </label>

          <label className="space-y-2 text-sm text-white/70">
            <span>Category</span>
            <input defaultValue={project.category} className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white focus:border-violet-400 outline-none" />
          </label>

          <label className="space-y-2 text-sm text-white/70">
            <span>Year</span>
            <input defaultValue={project.year} className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white focus:border-violet-400 outline-none" />
          </label>

          <label className="space-y-2 text-sm text-white/70">
            <span>Status</span>
            <input defaultValue={project.status} className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white focus:border-violet-400 outline-none" />
          </label>
        </div>

        <label className="block space-y-2 text-sm text-white/70">
          <span>Image URL</span>
          <input defaultValue={project.image} className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white focus:border-violet-400 outline-none" />
        </label>

        <label className="block space-y-2 text-sm text-white/70">
          <span>Description</span>
          <textarea rows={5} defaultValue={project.description} className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white focus:border-violet-400 outline-none" />
        </label>

        <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-violet-400">
          <Save size={16} />
          Update project
        </button>
      </form>
    </div>
  );
}

export default ProjectEdit;

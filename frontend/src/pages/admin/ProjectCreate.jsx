import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";

function ProjectCreate() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    category: "Branding",
    year: "2026",
    status: "In review",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Create project", form);
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
          <h2 className="mt-2 text-3xl font-bold text-white">Create project</h2>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="space-y-2 text-sm text-white/70">
            <span>Project name</span>
            <input name="title" value={form.title} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white focus:border-violet-400 outline-none" placeholder="Project title" required />
          </label>

          <label className="space-y-2 text-sm text-white/70">
            <span>Category</span>
            <select name="category" value={form.category} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white focus:border-violet-400 outline-none">
              <option>Branding</option>
              <option>Motion</option>
              <option>Video</option>
              <option>Photography</option>
              <option>Strategy</option>
            </select>
          </label>

          <label className="space-y-2 text-sm text-white/70">
            <span>Year</span>
            <input name="year" value={form.year} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white focus:border-violet-400 outline-none" />
          </label>

          <label className="space-y-2 text-sm text-white/70">
            <span>Status</span>
            <select name="status" value={form.status} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white focus:border-violet-400 outline-none">
              <option>In review</option>
              <option>Published</option>
              <option>Draft</option>
            </select>
          </label>
        </div>

        <label className="block space-y-2 text-sm text-white/70">
          <span>Image URL</span>
          <input name="image" value={form.image} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white focus:border-violet-400 outline-none" />
        </label>

        <label className="block space-y-2 text-sm text-white/70">
          <span>Description</span>
          <textarea name="description" value={form.description} onChange={handleChange} rows={5} className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white focus:border-violet-400 outline-none" placeholder="Project summary" required />
        </label>

        <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-violet-400">
          <Save size={16} />
          Save project
        </button>
      </form>
    </div>
  );
}

export default ProjectCreate;

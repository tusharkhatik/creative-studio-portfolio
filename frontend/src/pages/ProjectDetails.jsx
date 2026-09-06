import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
} from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { projects } from "../data/projects";

function ProjectDetails() {
  const { projectId } = useParams();

  const project = projects.find(
    (item) => String(item.id) === String(projectId)
  );

  if (!project) {
    return (
      <>
        <Navbar />

        <main className="flex min-h-screen items-center justify-center bg-[#080a12] px-6 text-white">
          <div className="text-center">
            <p className="text-sm text-white/40">
              Project not found
            </p>

            <Link
              to="/portfolio"
              className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
            >
              Back to Portfolio
            </Link>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-[#080a12] text-white">
      <Navbar />

      <main className="relative overflow-hidden pt-20">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-10%] top-0 h-[600px] w-[600px] rounded-full bg-violet-500/[0.12] blur-[160px]" />

          <div className="absolute right-[-10%] top-[30%] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.08] blur-[150px]" />
        </div>

        <div className="relative mx-auto max-w-[1500px] px-6 py-20 lg:px-10 lg:py-32">

          {/* Back */}
          <Link
            to="/portfolio"
            className="group mb-16 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/40 transition hover:text-white"
          >
            <ArrowLeft
              size={14}
              className="transition-transform group-hover:-translate-x-1"
            />

            Back to selected work
          </Link>

          {/* Heading */}
          <div className="grid gap-12 lg:grid-cols-[1fr_.4fr] lg:items-end">
            <div>
              <p className="mb-5 text-[9px] uppercase tracking-[0.3em] text-cyan-300/60">
                {project.category} / {project.year}
              </p>

              <h1 className="text-[clamp(4rem,9vw,9rem)] font-bold leading-[0.8] tracking-[-0.08em]">
                {project.title}
              </h1>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/40 lg:ml-auto">
              {project.description}
            </p>
          </div>

          {/* Main visual */}
          <div className="mt-20 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
            {project.video ? (
              <video
                src={project.video}
                poster={project.image}
                controls
                autoPlay
                muted
                playsInline
                className="aspect-video w-full object-cover"
              />
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="max-h-[800px] w-full object-cover"
              />
            )}
          </div>

          {/* Information */}
          <div className="mt-16 grid gap-12 border-t border-white/10 pt-10 md:grid-cols-3">

            <div>
              <p className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                Client
              </p>

              <p className="mt-3 text-sm text-white/70">
                {project.client || "Independent"}
              </p>
            </div>

            <div>
              <p className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                Services
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {(project.services || []).map(
                  (service) => (
                    <span
                      key={service}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/50"
                    >
                      {service}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="md:text-right">
              <p className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                Year
              </p>

              <p className="mt-3 text-sm text-white/70">
                {project.year}
              </p>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-20 flex flex-col justify-between gap-8 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
            <div>
              <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                Next step
              </p>

              <h2 className="mt-2 text-2xl font-medium">
                Have a project like this?
              </h2>
            </div>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black"
            >
              Start a project

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white transition-transform duration-500 group-hover:rotate-45">
                <ArrowUpRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      </main>

      
    </div>
  );
}

export default ProjectDetails;
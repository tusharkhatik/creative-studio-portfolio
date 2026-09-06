import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Play,
  Plus,
} from "lucide-react";
import { useState } from "react";
import { projects } from "../data/projects";

const categories = [
  "All",
  "Video",
  "Photo",
  "Logo",
  "Branding",
  "Motion",
];

const categoryStyles = {
  Video: {
    glow: "bg-fuchsia-500/20",
    badge:
      "border-fuchsia-400/20 bg-fuchsia-500/10 text-fuchsia-200",
    dot: "bg-fuchsia-400",
  },

  Photo: {
    glow: "bg-orange-500/20",
    badge:
      "border-orange-400/20 bg-orange-500/10 text-orange-200",
    dot: "bg-orange-400",
  },

  Logo: {
    glow: "bg-cyan-500/20",
    badge:
      "border-cyan-400/20 bg-cyan-500/10 text-cyan-200",
    dot: "bg-cyan-400",
  },

  Branding: {
    glow: "bg-violet-500/20",
    badge:
      "border-violet-400/20 bg-violet-500/10 text-violet-200",
    dot: "bg-violet-400",
  },

  Motion: {
    glow: "bg-blue-500/20",
    badge:
      "border-blue-400/20 bg-blue-500/10 text-blue-200",
    dot: "bg-blue-400",
  },
};

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [playingId, setPlayingId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  const handleVideoEnter = (projectId, video) => {
    setPlayingId(projectId);

    if (!video) return;

    video.currentTime = 0;

    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  };

  const handleVideoLeave = (video) => {
    setPlayingId(null);

    if (!video) return;

    video.pause();
    video.currentTime = 0;
  };

  const getCategoryStyle = (category) => {
    return (
      categoryStyles[category] || {
        glow: "bg-white/10",
        badge:
          "border-white/10 bg-white/5 text-white/60",
        dot: "bg-white",
      }
    );
  };

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#080808] px-6 py-20 sm:py-24 lg:px-10 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[5%] top-[12%] h-80 w-80 rounded-full bg-violet-500/[0.035] blur-[140px]" />

        <div className="absolute right-[8%] top-[35%] h-96 w-96 rounded-full bg-cyan-500/[0.025] blur-[150px]" />

        <div className="absolute bottom-[5%] left-[35%] h-96 w-96 rounded-full bg-fuchsia-500/[0.025] blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1500px]">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.55fr] lg:items-end">
          <div>
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-12 bg-gradient-to-r from-violet-400 to-cyan-400" />

              <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-white/40">
                Selected Work
              </span>
            </motion.div>

            <motion.h2
              initial={{
                opacity: 0,
                y: 45,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
              className="max-w-5xl text-[clamp(3.3rem,8vw,8rem)] font-bold leading-[0.82] tracking-[-0.07em] text-white"
            >
              IDEAS
              <br />

              <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                MADE
              </span>

              <br />

              VISIBLE.
            </motion.h2>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="max-w-md lg:ml-auto"
          >
            <p className="text-base leading-7 text-white/45 md:text-lg">
              A collection of visual stories, identities,
              campaigns, experiments, and digital experiences
              crafted to make an impression.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400/40" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300/80" />
              </span>

              <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                Creative archive · 2026
              </span>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            CATEGORY FILTERS
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className="mt-12 border-y border-white/10 py-4 lg:mt-14"
        >
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((category) => {
              const active =
                activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    setActiveCategory(category)
                  }
                  className={`relative rounded-full px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.16em] transition-all duration-300 ${
                    active
                      ? "bg-white text-black"
                      : "border border-transparent text-white/35 hover:border-white/10 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  {category}

                  {active && (
                    <motion.span
                      layoutId="activeCategory"
                      className="absolute inset-0 -z-10 rounded-full bg-white"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}

            <div className="ml-auto hidden items-center gap-3 sm:flex">
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/20">
                Showing
              </span>

              <span className="text-xs font-medium text-white/50">
                {filteredProjects.length
                  .toString()
                  .padStart(2, "0")}
              </span>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            GRID INFO
        ====================================================== */}

        <div className="mt-7 flex items-center justify-between">
          <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
            {activeCategory === "All"
              ? "Selected projects"
              : `${activeCategory} projects`}
          </p>

          <p className="text-[9px] uppercase tracking-[0.25em] text-white/20">
            Hover to explore
          </p>
        </div>

        {/* =====================================================
            PROJECT GRID
        ====================================================== */}

        <motion.div
          layout
          className="mt-7 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(
              (project, index) => {
                const style = getCategoryStyle(
                  project.category
                );

                const isPlaying =
                  playingId === project.id;

                const isHovered =
                  hoveredId === project.id;

                return (
                  <motion.article
                    layout
                    key={project.id}
                    initial={{
                      opacity: 0,
                      y: 35,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.96,
                    }}
                    transition={{
                      duration: 0.55,
                      delay:
                        (index % 3) * 0.06,
                    }}
                    onMouseEnter={() =>
                      setHoveredId(project.id)
                    }
                    onMouseLeave={() =>
                      setHoveredId(null)
                    }
                    className="group"
                  >
                    {/* MEDIA CARD */}

                    <div className="relative">
                      <motion.div
                        animate={{
                          opacity: isHovered
                            ? 0.8
                            : 0,
                        }}
                        transition={{
                          duration: 0.5,
                        }}
                        className={`pointer-events-none absolute -inset-3 rounded-[2rem] ${style.glow} blur-2xl`}
                      />

                      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#111111]">

                        {/* MEDIA */}

                        {project.type ===
                          "video" &&
                        project.video ? (
                          <video
                            src={project.video}
                            poster={project.image}
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            onMouseEnter={(event) =>
                              handleVideoEnter(
                                project.id,
                                event.currentTarget
                              )
                            }
                            onMouseLeave={(event) =>
                              handleVideoLeave(
                                event.currentTarget
                              )
                            }
                            className={`h-full w-full object-cover transition-transform duration-700 ${
                              isPlaying
                                ? "scale-[1.06]"
                                : "scale-100"
                            }`}
                          />
                        ) : (
                          <motion.img
                            src={project.image}
                            alt={project.title}
                            loading={
                              index < 3
                                ? "eager"
                                : "lazy"
                            }
                            draggable={false}
                            animate={{
                              scale:
                                isHovered
                                  ? 1.07
                                  : 1,
                            }}
                            transition={{
                              duration: 0.8,
                              ease: [
                                0.22,
                                1,
                                0.36,
                                1,
                              ],
                            }}
                            className="h-full w-full object-cover"
                          />
                        )}

                        {/* Color overlay */}

                        <motion.div
                          animate={{
                            opacity: isHovered
                              ? 0.12
                              : 0,
                          }}
                          className={`pointer-events-none absolute inset-0 ${style.glow} mix-blend-screen`}
                        />

                        {/* Dark gradient */}

                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                        {/* Number */}

                        <div className="absolute left-5 top-5">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-medium tracking-[0.25em] text-white/60">
                              {String(
                                project.id
                              ).padStart(
                                2,
                                "0"
                              )}
                            </span>

                            <span className="h-px w-5 bg-white/20" />
                          </div>
                        </div>

                        {/* Category */}

                        <div className="absolute right-5 top-5">
                          <span
                            className={`rounded-full border px-3 py-1.5 text-[8px] font-medium uppercase tracking-[0.18em] backdrop-blur-xl ${style.badge}`}
                          >
                            {project.category}
                          </span>
                        </div>

                        {/* Video preview */}

                        {project.type ===
                          "video" && (
                          <div className="absolute left-5 top-14">
                            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 backdrop-blur-xl">
                              <span
                                className={`flex h-5 w-5 items-center justify-center rounded-full transition-colors ${
                                  isPlaying
                                    ? "bg-white text-black"
                                    : "bg-white/10 text-white"
                                }`}
                              >
                                <Play
                                  size={8}
                                  fill={
                                    isPlaying
                                      ? "currentColor"
                                      : "none"
                                  }
                                />
                              </span>

                              <span className="text-[8px] uppercase tracking-[0.18em] text-white/60">
                                {isPlaying
                                  ? "Playing"
                                  : "Preview"}
                              </span>
                            </div>
                          </div>
                        )}

                        {/* Project title */}

                        <div className="absolute bottom-5 left-5 right-20">
                          <p className="mb-1.5 text-[8px] uppercase tracking-[0.25em] text-white/45">
                            {project.year}
                          </p>

                          <motion.h3
                            animate={{
                              y: isHovered
                                ? -4
                                : 0,
                            }}
                            transition={{
                              duration: 0.35,
                            }}
                            className="text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl"
                          >
                            {project.title}
                          </motion.h3>
                        </div>

                        {/* Explore button */}

                        <motion.div
                          animate={{
                            scale: isHovered
                              ? 1
                              : 0.85,
                            opacity: isHovered
                              ? 1
                              : 0,
                          }}
                          transition={{
                            duration: 0.35,
                          }}
                          className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black"
                        >
                          <ArrowUpRight
                            size={17}
                          />
                        </motion.div>

                        {/* Border */}

                        <div
                          className={`pointer-events-none absolute inset-0 rounded-[1.4rem] border transition-colors duration-500 ${
                            isHovered
                              ? "border-white/25"
                              : "border-transparent"
                          }`}
                        />
                      </div>
                    </div>

                    {/* PROJECT INFORMATION */}

                    <div className="mt-4 px-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${style.dot}`}
                          />

                          <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/30">
                            {project.category}
                          </span>

                          <span className="h-px w-5 bg-white/10" />

                          <span className="text-[9px] uppercase tracking-[0.2em] text-white/20">
                            {project.year}
                          </span>
                        </div>

                        <ArrowUpRight
                          size={15}
                          className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                        />
                      </div>

                      <p className="mt-2 max-w-md text-sm leading-6 text-white/30 transition-colors duration-300 group-hover:text-white/50">
                        {project.description}
                      </p>
                    </div>
                  </motion.article>
                );
              }
            )}
          </AnimatePresence>
        </motion.div>

        {/* =====================================================
            EMPTY STATE
        ====================================================== */}

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            className="flex min-h-[300px] flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-white/10 bg-white/[0.015]"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10">
              <Plus
                size={20}
                className="text-white/30"
              />
            </div>

            <p className="mt-5 text-sm text-white/40">
              No projects here yet.
            </p>

            <button
              type="button"
              onClick={() =>
                setActiveCategory("All")
              }
              className="mt-3 text-xs uppercase tracking-[0.2em] text-white/30 transition-colors hover:text-white"
            >
              View all projects
            </button>
          </motion.div>
        )}

        {/* =====================================================
            ARCHIVE CTA
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-16 lg:mt-20"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]">

            {/* CTA glow */}

            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet-500/10 blur-[100px]" />

            <div className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-cyan-500/[0.07] blur-[100px]" />

            <div className="relative flex flex-col justify-between gap-8 p-8 sm:p-10 lg:flex-row lg:items-center lg:p-12">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-gradient-to-r from-violet-400 to-cyan-400" />

                  <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                    The archive
                  </span>
                </div>

                <h3 className="max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                  More work.
                  <br />

                  <span className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">
                    More ideas.
                  </span>
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-6 text-white/35">
                  Explore the complete collection of projects,
                  visual experiments, identities, campaigns,
                  and creative work.
                </p>
              </div>

              <a
                href="/portfolio"
                className="group flex w-fit shrink-0 items-center gap-4 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition-transform duration-300 hover:scale-105"
              >
                View all work

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight size={15} />
                </span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-12 border-t border-white/10 pt-7"
        >
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-cyan-300/80 shadow-[0_0_10px_rgba(103,232,249,0.6)]" />

              <span className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                Have an idea?
              </span>
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 text-sm font-medium text-white/50 transition-colors hover:text-white"
            >
              Let's make it real

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-white/30 group-hover:bg-white group-hover:text-black">
                <ArrowUpRight size={14} />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Portfolio;

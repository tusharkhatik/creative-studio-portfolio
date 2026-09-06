import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { services } from "../data/services";

const serviceVisuals = {
  "Video Editing":
    "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1400&q=90",

  "Photo Editing":
    "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1400&q=90",

  "Logo Design":
    "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1400&q=90",

  "Brand Identity":
    "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=1400&q=90",

  "Social Media Design":
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1400&q=90",

  "Thumbnail Design":
    "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=1400&q=90",
};

const serviceColors = {
  "Video Editing": {
    glow: "bg-fuchsia-500/20",
    text: "text-fuchsia-300",
    dot: "bg-fuchsia-400",
    border: "border-fuchsia-400/20",
  },

  "Photo Editing": {
    glow: "bg-orange-500/20",
    text: "text-orange-300",
    dot: "bg-orange-400",
    border: "border-orange-400/20",
  },

  "Logo Design": {
    glow: "bg-cyan-500/20",
    text: "text-cyan-300",
    dot: "bg-cyan-400",
    border: "border-cyan-400/20",
  },

  "Brand Identity": {
    glow: "bg-violet-500/20",
    text: "text-violet-300",
    dot: "bg-violet-400",
    border: "border-violet-400/20",
  },

  "Social Media Design": {
    glow: "bg-pink-500/20",
    text: "text-pink-300",
    dot: "bg-pink-400",
    border: "border-pink-400/20",
  },

  "Thumbnail Design": {
    glow: "bg-blue-500/20",
    text: "text-blue-300",
    dot: "bg-blue-400",
    border: "border-blue-400/20",
  },
};

function Services() {
  const [activeService, setActiveService] = useState(services[0]);

  const activeColor =
    serviceColors[activeService.title] || {
      glow: "bg-white/10",
      text: "text-white",
      dot: "bg-white",
      border: "border-white/10",
    };

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#08080b] px-6 py-20 sm:py-24 lg:px-10 lg:py-28"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-[450px] w-[450px] rounded-full bg-violet-600/[0.07] blur-[140px]" />

        <div className="absolute right-[-150px] top-[35%] h-[450px] w-[450px] rounded-full bg-cyan-500/[0.055] blur-[150px]" />

        <div className="absolute bottom-[-150px] left-[35%] h-[400px] w-[400px] rounded-full bg-fuchsia-500/[0.045] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1500px]">

        {/* =======================================================
            HEADER
        ======================================================== */}

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.7fr] lg:items-end">
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
              <span className="h-px w-10 bg-gradient-to-r from-cyan-400 to-violet-500" />

              <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/40">
                What we create
              </span>

              <Sparkles
                size={14}
                className="text-violet-300/60"
              />
            </motion.div>

            <motion.h2
              initial={{
                opacity: 0,
                y: 35,
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
              className="max-w-4xl text-[clamp(3.2rem,7vw,7.5rem)] font-bold leading-[0.85] tracking-[-0.07em] text-white"
            >
              WE CREATE
              <br />

              <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                VISUAL IMPACT.
              </span>
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
              From a single visual to a complete brand identity,
              we turn ideas into creative work designed to be
              noticed, remembered, and experienced.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />

              <span className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                Creative services · 06
              </span>
            </div>
          </motion.div>
        </div>

        {/* =======================================================
            INTERACTIVE AREA
        ======================================================== */}

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
          {/* =====================================================
              SERVICES LIST
          ====================================================== */}

          <div className="border-t border-white/10">
            {services.map((service, index) => {
              const isActive =
                activeService.id === service.id;

              const color =
                serviceColors[service.title] ||
                serviceColors["Logo Design"];

              return (
                <motion.button
                  key={service.id}
                  type="button"
                  onMouseEnter={() =>
                    setActiveService(service)
                  }
                  onClick={() =>
                    setActiveService(service)
                  }
                  initial={{
                    opacity: 0,
                    x: -25,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  className="group relative flex w-full items-center overflow-hidden border-b border-white/10 py-6 text-left sm:py-7"
                >
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                    }}
                    className={`absolute inset-0 -z-10 ${color.glow} blur-3xl`}
                  />

                  <span
                    className={`w-12 text-xs transition-colors duration-300 ${
                      isActive
                        ? color.text
                        : "text-white/20"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <motion.span
                    animate={{
                      width: isActive ? 24 : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className={`mr-3 h-px ${color.dot}`}
                  />

                  <span
                    className={`text-2xl font-medium tracking-tight transition-all duration-300 sm:text-3xl lg:text-4xl ${
                      isActive
                        ? "translate-x-1 text-white"
                        : "text-white/35 group-hover:text-white/75"
                    }`}
                  >
                    {service.title}
                  </span>

                  <ArrowUpRight
                    size={22}
                    className={`ml-auto transition-all duration-300 ${
                      isActive
                        ? `-translate-y-1 translate-x-0 ${color.text}`
                        : "text-white/15 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white/60"
                    }`}
                  />
                </motion.button>
              );
            })}
          </div>

          {/* =====================================================
              DESKTOP VISUAL
          ====================================================== */}

          <div
            className={`relative hidden min-h-[500px] overflow-hidden rounded-[2rem] border ${activeColor.border} bg-[#101014] shadow-2xl lg:block`}
          >
            <motion.div
              key={activeService.id}
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 0.8,
                scale: 1,
              }}
              transition={{
                duration: 0.7,
              }}
              className={`pointer-events-none absolute -right-20 -top-20 z-10 h-72 w-72 rounded-full ${activeColor.glow} blur-[100px]`}
            />

            <AnimatePresence mode="wait">
              <motion.img
                key={activeService.id}
                src={serviceVisuals[activeService.title]}
                alt={activeService.title}
                initial={{
                  opacity: 0,
                  scale: 1.1,
                  x: 20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 1.03,
                  x: -20,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>

            <motion.div
              key={`color-${activeService.id}`}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              className={`absolute inset-0 ${activeColor.glow} mix-blend-screen`}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            <div className="absolute left-6 right-6 top-6 flex items-center justify-between">
              <div className="rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-xl">
                <span
                  className={`text-[8px] uppercase tracking-[0.2em] ${activeColor.text}`}
                >
                  Creative Service
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-xl">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${activeColor.dot} shadow-[0_0_10px_currentColor]`}
                />

                <span className="text-[8px] uppercase tracking-[0.2em] text-white/50">
                  0{activeService.id} / 06
                </span>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -15,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${activeColor.dot}`}
                    />

                    <p
                      className={`text-[9px] uppercase tracking-[0.25em] ${activeColor.text}`}
                    >
                      Service 0{activeService.id}
                    </p>
                  </div>

                  <h3 className="text-4xl font-semibold tracking-[-0.04em] text-white">
                    {activeService.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-white/55">
                    {activeService.description}
                  </p>

                  <a
                    href="#work"
                    className="group mt-6 inline-flex items-center gap-3 text-sm font-medium text-white"
                  >
                    See related work

                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-white/30 group-hover:bg-white group-hover:text-black">
                      <ArrowUpRight size={14} />
                    </span>
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* =======================================================
            MOBILE PREVIEW
        ======================================================== */}

        <div
          className={`mt-7 overflow-hidden rounded-[1.5rem] border ${activeColor.border} bg-[#101014] lg:hidden`}
        >
          <div className="relative aspect-[4/3]">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeService.id}
                src={serviceVisuals[activeService.title]}
                alt={activeService.title}
                initial={{
                  opacity: 0,
                  scale: 1.08,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="h-full w-full object-cover"
              />
            </AnimatePresence>

            <div
              className={`absolute inset-0 ${activeColor.glow} mix-blend-screen`}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute left-5 top-5">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 backdrop-blur-xl">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${activeColor.dot}`}
                />

                <span className="text-[8px] uppercase tracking-[0.18em] text-white/60">
                  0{activeService.id} / 06
                </span>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p
                className={`text-[9px] uppercase tracking-[0.22em] ${activeColor.text}`}
              >
                Creative Service
              </p>

              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                {activeService.title}
              </h3>

              <p className="mt-2 max-w-md text-xs leading-5 text-white/50">
                {activeService.description}
              </p>
            </div>
          </div>
        </div>

        {/* =======================================================
            BOTTOM STATEMENT
        ======================================================== */}

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
            duration: 0.7,
          }}
          className="mt-14 border-t border-white/10 pt-7 lg:mt-16"
        >
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <p className="max-w-xl text-sm leading-6 text-white/35">
                Don't see exactly what you need? Tell us what
                you're trying to create and we'll find the right
                creative direction.
              </p>

              <div className="mt-3 flex items-center gap-3">
                <span className="h-px w-6 bg-gradient-to-r from-violet-400 to-cyan-400" />

                <span className="text-[8px] uppercase tracking-[0.22em] text-white/20">
                  Built around your idea
                </span>
              </div>
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 text-sm font-semibold text-white"
            >
              Let's talk

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-white/30 group-hover:bg-white group-hover:text-black">
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;


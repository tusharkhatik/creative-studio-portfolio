import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Layers3,
  Lightbulb,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Creative Thinking",
    description:
      "Every project starts with an idea. We focus on finding the concept, direction, and visual language before adding decoration.",
    icon: Lightbulb,
    color: {
      text: "text-violet-300",
      bg: "bg-violet-500/10",
      border: "border-violet-400/15",
      glow: "bg-violet-500/20",
      dot: "bg-violet-400",
    },
  },
  {
    number: "02",
    title: "Attention to Detail",
    description:
      "Typography, color, composition, pacing, and the smallest visual details all work together to make the final result feel intentional.",
    icon: Target,
    color: {
      text: "text-cyan-300",
      bg: "bg-cyan-500/10",
      border: "border-cyan-400/15",
      glow: "bg-cyan-500/20",
      dot: "bg-cyan-400",
    },
  },
  {
    number: "03",
    title: "Built for Impact",
    description:
      "Beautiful is only the beginning. We create visuals that are designed to communicate, connect with people, and leave an impression.",
    icon: Zap,
    color: {
      text: "text-orange-300",
      bg: "bg-orange-500/10",
      border: "border-orange-400/15",
      glow: "bg-orange-500/20",
      dot: "bg-orange-400",
    },
  },
  {
    number: "04",
    title: "One Clear Direction",
    description:
      "From the first concept to the final export, every element follows one strong creative direction so the work feels cohesive.",
    icon: Layers3,
    color: {
      text: "text-fuchsia-300",
      bg: "bg-fuchsia-500/10",
      border: "border-fuchsia-400/15",
      glow: "bg-fuchsia-500/20",
      dot: "bg-fuchsia-400",
    },
  },
];

const stats = [
  {
    value: "06",
    label: "Creative Services",
  },
  {
    value: "01",
    label: "Creative Direction",
  },
  {
    value: "∞",
    label: "Ideas Explored",
  },
  {
    value: "100%",
    label: "Focus on the Work",
  },
];

function About() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 70,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 70,
    damping: 20,
  });

  const visualX = useTransform(
    smoothX,
    [-500, 500],
    [-12, 12]
  );

  const visualY = useTransform(
    smoothY,
    [-500, 500],
    [-12, 12]
  );

  const handleMouseMove = (event) => {
    const rect =
      event.currentTarget.getBoundingClientRect();

    const x =
      event.clientX -
      rect.left -
      rect.width / 2;

    const y =
      event.clientY -
      rect.top -
      rect.height / 2;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="about"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden bg-[#07070a] px-6 py-20 sm:py-24 lg:px-10 lg:py-28"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-120px] top-[10%] h-[420px] w-[420px] rounded-full bg-violet-600/[0.07] blur-[140px]"
        />

        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-150px] top-[40%] h-[450px] w-[450px] rounded-full bg-cyan-500/[0.055] blur-[150px]"
        />

        <div className="absolute bottom-[-150px] left-[35%] h-[400px] w-[400px] rounded-full bg-fuchsia-500/[0.04] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#07070a_90%)]" />
      </div>

      <div className="relative mx-auto max-w-[1500px]">

        {/* =========================================================
            INTRO
        ========================================================== */}

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.6fr] lg:items-end">
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
              <span className="h-px w-10 bg-gradient-to-r from-violet-400 to-cyan-400" />

              <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/40">
                Why choose us
              </span>

              <Sparkles
                size={14}
                className="text-violet-300/60"
              />
            </motion.div>

            <motion.h2
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.85,
              }}
              className="max-w-6xl text-[clamp(3.4rem,7.5vw,8rem)] font-bold leading-[0.84] tracking-[-0.07em] text-white"
            >
              GOOD DESIGN
              <br />

              <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                GETS ATTENTION.
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
              Great design goes further. It creates a feeling,
              communicates an idea, and gives people a reason to
              remember your brand.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.8)]" />

              <span className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                Designed with intention
              </span>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            BIG STATEMENT
        ========================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
          }}
          className="relative mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] lg:mt-18"
        >
          <div className="pointer-events-none absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-violet-500/[0.08] blur-[120px]" />

          <div className="pointer-events-none absolute -bottom-40 left-[30%] h-[400px] w-[400px] rounded-full bg-cyan-500/[0.06] blur-[120px]" />

          <div className="relative grid gap-8 p-7 sm:p-9 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 lg:p-12">
            
            {/* Statement */}

            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/25">
                Our philosophy
              </p>

              <h3 className="mt-5 max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
                GREAT DESIGN
                <br />

                <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                  GETS REMEMBERED.
                </span>
              </h3>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/40 md:text-base">
                We don't believe creative work should simply
                fill a space. Every frame, shape, color, and
                interaction should have a reason to exist.
              </p>

              <a
                href="#process"
                className="group mt-6 inline-flex items-center gap-3 text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                See how we work

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-white/25 group-hover:bg-white group-hover:text-black">
                  <ArrowDownRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  />
                </span>
              </a>
            </div>

            {/* Interactive visual */}

            <div className="relative flex min-h-[310px] items-center justify-center sm:min-h-[350px] lg:min-h-[390px]">
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[250px] w-[250px] rounded-full border border-white/10 sm:h-[300px] sm:w-[300px]"
              >
                <span className="absolute left-1/2 top-[-4px] h-2 w-2 -translate-x-1/2 rounded-full bg-violet-400 shadow-[0_0_15px_rgba(167,139,250,0.9)]" />

                <span className="absolute bottom-[15%] right-[2%] h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
              </motion.div>

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 24,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[185px] w-[185px] rounded-full border border-dashed border-white/10 sm:h-[225px] sm:w-[225px]"
              />

              <motion.div
                animate={{
                  scale: [1, 1.12, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute h-32 w-32 rounded-full bg-gradient-to-br from-violet-500/30 via-fuchsia-500/20 to-cyan-400/30 blur-3xl"
              />

              <motion.div
                style={{
                  x: visualX,
                  y: visualY,
                }}
                className="relative z-10 flex h-32 w-32 rotate-6 items-center justify-center rounded-[1.7rem] border border-white/15 bg-gradient-to-br from-white/[0.12] to-white/[0.02] shadow-[0_30px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:h-40 sm:w-40"
              >
                <div className="absolute inset-3 rounded-[1.2rem] border border-white/10" />

                <div className="text-center">
                  <p className="text-[8px] uppercase tracking-[0.25em] text-white/30">
                    Create
                  </p>

                  <p className="mt-1.5 bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-3xl font-bold tracking-[-0.06em] text-transparent sm:text-4xl">
                    IMPACT
                  </p>
                </div>
              </motion.div>

              <span className="absolute left-[8%] top-[20%] text-white/20">
                +
              </span>

              <span className="absolute bottom-[20%] right-[10%] text-white/20">
                +
              </span>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            STATS
        ========================================================== */}

        <div className="mt-14 grid grid-cols-2 border-y border-white/10 lg:mt-16 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
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
                duration: 0.5,
                delay: index * 0.08,
              }}
              className={`group relative px-5 py-7 sm:px-8 sm:py-8 ${
                index < 2
                  ? "border-b border-white/10 lg:border-b-0"
                  : ""
              } ${
                index % 2 === 0
                  ? "border-r border-white/10"
                  : ""
              } lg:border-r lg:border-white/10 ${
                index === 3
                  ? "lg:border-r-0"
                  : ""
              }`}
            >
              <div className="flex items-end justify-between gap-4">
                <span className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                  {stat.value}
                </span>

                <ArrowUpRight
                  size={16}
                  className="mb-2 text-white/15 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white/50"
                />
              </div>

              <p className="mt-3 text-[9px] uppercase tracking-[0.2em] text-white/25">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* =========================================================
            PRINCIPLES
        ========================================================== */}

        <div className="mt-16 lg:mt-20">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <motion.p
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                className="mb-3 text-[9px] uppercase tracking-[0.3em] text-white/25"
              >
                What drives the work
              </motion.p>

              <motion.h3
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
                className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl"
              >
                Built around four principles.
              </motion.h3>
            </div>

            <p className="max-w-sm text-sm leading-6 text-white/30">
              A simple approach keeps the creative process
              focused, flexible, and intentional.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {principles.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <motion.article
                  key={principle.number}
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
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className={`group relative overflow-hidden rounded-[1.5rem] border ${principle.color.border} bg-white/[0.025] p-6 transition-colors duration-500 hover:bg-white/[0.045] sm:p-7`}
                >
                  <div
                    className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full ${principle.color.glow} opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  <div className="relative flex items-center justify-between">
                    <span
                      className={`text-[10px] tracking-[0.25em] ${principle.color.text}`}
                    >
                      {principle.number}
                    </span>

                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl border ${principle.color.border} ${principle.color.bg}`}
                    >
                      <Icon
                        size={17}
                        className={principle.color.text}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  <div className="relative mt-7">
                    <h4 className="text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                      {principle.title}
                    </h4>

                    <p className="mt-3 max-w-lg text-sm leading-6 text-white/35">
                      {principle.description}
                    </p>
                  </div>

                  <div className="relative mt-6 flex items-center gap-3">
                    <span
                      className={`h-px w-8 ${principle.color.dot}`}
                    />

                    <span className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                      Principle {principle.number}
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            FINAL CTA
        ========================================================== */}

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
          className="mt-16 border-t border-white/10 pt-7 lg:mt-20"
        >
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-[9px] uppercase tracking-[0.25em] text-white/20">
                Next chapter
              </p>

              <p className="mt-2 text-sm text-white/35">
                Great work starts with a clear process.
              </p>
            </div>

            <a
              href="#process"
              className="group inline-flex items-center gap-3 text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              Explore our process

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-white/30 group-hover:bg-white group-hover:text-black">
                <ArrowUpRight
                  size={15}
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

export default About;
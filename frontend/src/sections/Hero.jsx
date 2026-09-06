import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Plus,
  Sparkles,
} from "lucide-react";

function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  });

  const rotateX = useTransform(smoothY, [-300, 300], [6, -6]);
  const rotateY = useTransform(smoothX, [-300, 300], [-6, 6]);

  const imageX = useTransform(smoothX, [-500, 500], [-14, 14]);
  const imageY = useTransform(smoothY, [-500, 500], [-14, 14]);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    mouseX.set(clientX - centerX);
    mouseY.set(clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] overflow-hidden bg-[#07070a] pt-20 lg:min-h-screen"
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
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[5%] top-[12%] h-[420px] w-[420px] rounded-full bg-violet-600/[0.12] blur-[130px]"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[5%] top-[20%] h-[430px] w-[430px] rounded-full bg-cyan-500/[0.10] blur-[140px]"
        />

        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-10%] left-[40%] h-[420px] w-[420px] rounded-full bg-fuchsia-600/[0.07] blur-[150px]"
        />

        <div className="absolute bottom-[10%] right-[20%] h-[250px] w-[250px] rounded-full bg-orange-500/[0.05] blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,#07070a_90%)]" />
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}

      <div className="relative mx-auto flex min-h-[calc(92vh-80px)] max-w-[1500px] items-center px-6 py-10 lg:min-h-[calc(100vh-80px)] lg:px-10 lg:py-12">
        <div className="grid w-full gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">

          {/* =====================================================
              LEFT SIDE
          ====================================================== */}

          <div className="relative z-10">

            {/* Eyebrow */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-gradient-to-r from-cyan-400 to-violet-500" />

              <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
                Independent Creative Studio
              </span>

              <Sparkles
                size={14}
                className="text-cyan-300/70"
              />
            </motion.div>

            {/* Main Heading */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.1,
              }}
              className="max-w-5xl text-[clamp(3.7rem,8.5vw,9.5rem)] font-bold leading-[0.82] tracking-[-0.07em] text-white"
            >
              WE MAKE

              <br />

              <span className="ml-[8vw] bg-gradient-to-r from-violet-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
                IDEAS
              </span>

              <br />

              <span className="relative">
                VISIBLE
                <sup className="ml-3 align-top text-xl font-normal tracking-normal text-cyan-300/60 md:text-3xl">
                  ®
                </sup>
              </span>
            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.35,
              }}
              className="mt-8 max-w-lg text-base leading-7 text-white/50 md:text-lg"
            >
              We create bold visual experiences through video,
              photography, branding, motion, and digital design.
            </motion.p>

            {/* Actions */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.5,
              }}
              className="mt-7 flex flex-wrap items-center gap-4"
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black shadow-[0_0_35px_rgba(255,255,255,0.08)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_45px_rgba(255,255,255,0.15)]"
              >
                Explore our work

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#services"
                className="group inline-flex items-center gap-2 px-4 py-4 text-sm font-medium text-white/50 transition-colors hover:text-white"
              >
                What we do

                <span className="h-px w-0 bg-cyan-300 transition-all duration-300 group-hover:w-5" />
              </a>
            </motion.div>

            {/* Trust indicators */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.8,
              }}
              className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3"
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

                <span className="text-[9px] uppercase tracking-[0.22em] text-white/30">
                  Visual Design
                </span>
              </div>

              <div className="h-3 w-px bg-white/10" />

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_10px_rgba(232,121,249,0.8)]" />

                <span className="text-[9px] uppercase tracking-[0.22em] text-white/30">
                  Creative Direction
                </span>
              </div>

              <div className="h-3 w-px bg-white/10" />

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-400 shadow-[0_0_10px_rgba(251,146,60,0.8)]" />

                <span className="text-[9px] uppercase tracking-[0.22em] text-white/30">
                  Motion
                </span>
              </div>
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT VISUAL
          ====================================================== */}

          <div className="relative flex min-h-[420px] items-center justify-center sm:min-h-[500px] lg:min-h-[580px]">

            {/* Background orb */}

            <motion.div
              style={{
                x: useTransform(
                  smoothX,
                  [-500, 500],
                  [-20, 20]
                ),
                y: useTransform(
                  smoothY,
                  [-500, 500],
                  [-20, 20]
                ),
              }}
              className="absolute h-[340px] w-[340px] rounded-full bg-gradient-to-br from-violet-500/20 via-fuchsia-500/10 to-cyan-400/10 blur-[100px]"
            />

            {/* Decorative plus */}

            <motion.div
              style={{
                x: useTransform(
                  smoothX,
                  [-500, 500],
                  [-12, 12]
                ),
                y: useTransform(
                  smoothY,
                  [-500, 500],
                  [-12, 12]
                ),
              }}
              className="absolute right-[5%] top-[8%] text-cyan-300/50"
            >
              <Plus
                size={22}
                strokeWidth={1}
              />
            </motion.div>

            {/* Decorative ring */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-[3%] top-[18%] h-24 w-24 rounded-full border border-violet-400/20"
            >
              <span className="absolute -right-1 top-1/2 h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.9)]" />
            </motion.div>

            {/* Main visual */}

            <motion.div
              style={{
                rotateX,
                rotateY,
              }}
              initial={{
                opacity: 0,
                scale: 0.9,
                rotate: -4,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: -4,
              }}
              transition={{
                duration: 1.2,
                delay: 0.25,
                ease: "easeOut",
              }}
              className="relative w-[72%] max-w-[440px] [transform-style:preserve-3d]"
            >

              {/* Outer glow */}

              <motion.div
                animate={{
                  opacity: [0.25, 0.45, 0.25],
                  scale: [0.98, 1.03, 0.98],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-r from-violet-500/20 via-fuchsia-500/10 to-cyan-400/20 blur-2xl"
              />

              {/* Back frame */}

              <div className="absolute -inset-4 rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-500/[0.04] to-cyan-500/[0.04]" />

              {/* Second frame */}

              <div className="absolute -inset-2 rounded-[1.8rem] border border-cyan-300/10" />

              {/* Image */}

              <motion.div
                style={{
                  x: imageX,
                  y: imageY,
                }}
                className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#111111] shadow-[0_30px_100px_rgba(0,0,0,0.6)]"
              >
                <img
                  src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=90"
                  alt="Creative design showcase"
                  className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-cyan-400/20 mix-blend-screen" />

                <div className="pointer-events-none absolute -left-20 top-10 h-60 w-60 rounded-full bg-fuchsia-500/20 blur-[90px]" />

                <div className="pointer-events-none absolute -right-20 bottom-10 h-60 w-60 rounded-full bg-cyan-400/20 blur-[90px]" />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />

                {/* Top label */}

                <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                  <div className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 backdrop-blur-xl">
                    <span className="text-[8px] uppercase tracking-[0.2em] text-white/60">
                      Featured Visual
                    </span>
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 backdrop-blur-xl">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />

                    <span className="text-[8px] uppercase tracking-[0.2em] text-white/60">
                      2026
                    </span>
                  </div>
                </div>

                {/* Image label */}

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-cyan-200/60">
                      Selected visual
                    </p>

                    <p className="mt-1 text-lg font-medium text-white">
                      Creative Direction
                    </p>

                    <div className="mt-3 flex items-center gap-2">
                      <span className="h-1 w-8 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />

                      <span className="text-[8px] uppercase tracking-[0.2em] text-white/35">
                        Visual / 01
                      </span>
                    </div>
                  </div>

                  <span className="text-xs text-white/40">
                    01 / 06
                  </span>
                </div>
              </motion.div>

              {/* Floating label */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-7 -left-8 hidden rounded-2xl border border-white/10 bg-[#111111]/90 px-5 py-4 shadow-2xl backdrop-blur-xl sm:block"
              >
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_10px_rgba(232,121,249,0.9)]" />

                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                    Currently creating
                  </p>
                </div>

                <p className="mt-1 text-sm text-white/80">
                  Visual stories
                </p>
              </motion.div>

              {/* Floating color tag */}

              <motion.div
                animate={{
                  y: [0, 8, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-7 top-[28%] hidden rounded-xl border border-white/10 bg-[#111111]/80 px-4 py-3 backdrop-blur-xl lg:block"
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />

                  <span className="text-[8px] uppercase tracking-[0.18em] text-white/45">
                    Art Direction
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Side text */}

            <div className="absolute bottom-[8%] right-0 hidden max-w-[130px] lg:block">
              <p className="text-[10px] uppercase leading-5 tracking-[0.2em] text-white/25">
                <span className="text-violet-300/50">
                  Design
                </span>
                <br />

                <span className="text-cyan-300/50">
                  Motion
                </span>
                <br />

                <span className="text-fuchsia-300/50">
                  Visuals
                </span>
                <br />

                <span className="text-orange-300/50">
                  Identity
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM INFORMATION
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          className="absolute bottom-5 left-6 right-6 flex items-center justify-between lg:left-10 lg:right-10"
        >
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/25">
            <ArrowDown
              size={15}
              className="animate-bounce text-cyan-300/50"
            />

            Scroll to explore
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <span className="h-px w-6 bg-white/10" />

            <span className="text-xs uppercase tracking-[0.2em] text-white/25">
              Pune · India
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;


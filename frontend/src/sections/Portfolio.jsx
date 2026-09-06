import { AnimatePresence, motion } from "framer-motion";
import { projects, reels } from "../data/projects";
import {
  ArrowDownRight,
  ArrowUpRight,
  Camera,
  Layers3,
  Palette,
  Play,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import { useMemo, useState } from "react";

/* =========================================================
   CATEGORIES
========================================================= */

const categories = [
  "All",
  "Video",
  "Photo",
  "Logo",
  "Branding",
  "Motion",
];

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    number: "01",
    title: "Brand Identity",
    description:
      "Logos, visual systems and creative direction that give brands a recognizable personality.",
    icon: Palette,
    accent: "violet",
  },
  {
    number: "02",
    title: "Digital Experiences",
    description:
      "Websites and interfaces designed to communicate clearly and feel effortless to use.",
    icon: Layers3,
    accent: "cyan",
  },
  {
    number: "03",
    title: "Creative Content",
    description:
      "Photography, motion and visual storytelling created to make ideas easier to see and remember.",
    icon: Camera,
    accent: "orange",
  },
  {
    number: "04",
    title: "Creative Direction",
    description:
      "A clear visual direction that brings strategy, design and communication together.",
    icon: WandSparkles,
    accent: "pink",
  },
];

/* =========================================================
   APPROACH
========================================================= */

const approach = [
  {
    number: "01",
    title: "Think",
    description:
      "We understand the idea, audience and purpose before creating anything.",
  },
  {
    number: "02",
    title: "Create",
    description:
      "We turn the direction into a visual experience with character and clarity.",
  },
  {
    number: "03",
    title: "Refine",
    description:
      "We remove what doesn't matter and polish what does until everything feels right.",
  },
];

/* =========================================================
   ACCENT COLORS
========================================================= */

const accentStyles = {
  violet: {
    text: "text-violet-600",
    bg: "bg-violet-500",
    soft: "bg-violet-500/10",
    border: "border-violet-200/80",
    glow: "bg-violet-400/15",
    ring: "group-hover:ring-violet-300/40",
  },

  cyan: {
    text: "text-cyan-600",
    bg: "bg-cyan-500",
    soft: "bg-cyan-500/10",
    border: "border-cyan-200/80",
    glow: "bg-cyan-400/15",
    ring: "group-hover:ring-cyan-300/40",
  },

  orange: {
    text: "text-orange-600",
    bg: "bg-orange-500",
    soft: "bg-orange-500/10",
    border: "border-orange-200/80",
    glow: "bg-orange-400/15",
    ring: "group-hover:ring-orange-300/40",
  },

  pink: {
    text: "text-fuchsia-600",
    bg: "bg-fuchsia-500",
    soft: "bg-fuchsia-500/10",
    border: "border-fuchsia-200/80",
    glow: "bg-fuchsia-400/15",
    ring: "group-hover:ring-fuchsia-300/40",
  },
};

/* =========================================================
   PROJECT FILTER
========================================================= */

const getProjects = (category) => {
  if (category === "All") {
    return projects;
  }

  return projects.filter(
    (project) =>
      String(project.category).toLowerCase() === category.toLowerCase()
  );
};

/* =========================================================
   SECTION LABEL
========================================================= */

function SectionLabel({ number, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-7 flex items-center gap-3"
    >
      <span className="text-[9px] font-bold tracking-[0.2em] text-slate-300">
        {number}
      </span>

      <motion.span
        initial={{ width: 0 }}
        whileInView={{ width: 40 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="h-[2px] rounded-full bg-gradient-to-r from-violet-600 to-cyan-500"
      />

      <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400">
        {children}
      </span>

      <motion.div
        animate={{
          rotate: [0, 8, -8, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles size={13} className="text-violet-500" />
      </motion.div>
    </motion.div>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({ project, index }) {
  const isVideo = project.type === "video" && project.video;

  const aspectClasses = {
    tall: "aspect-[4/5]",
    portrait: "aspect-[4/3]",
    square: "aspect-square",
    wide: "aspect-[16/9]",
  };

  const aspectClass = aspectClasses[project.size] || "aspect-[4/3]";

  return (
    <motion.article
      layout
      initial={{
        opacity: 0,
        y: 35,
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.95,
      }}
      transition={{
        duration: 0.5,
        delay: (index % 6) * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -9,
        transition: {
          duration: 0.3,
        },
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[1.8rem]
        border
        border-slate-200/80
        bg-white/75
        shadow-[0_12px_45px_rgba(15,23,42,0.045)]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-violet-300/70
        hover:shadow-[0_30px_80px_rgba(15,23,42,0.13)]
      "
    >
      {/* Animated Border */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-20
          rounded-[1.8rem]
          border
          border-transparent
          opacity-0
          transition-opacity
          duration-500
          group-hover:border-violet-300/50
          group-hover:opacity-100
        "
      />

      {/* Hover Light */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        whileHover={{
          opacity: 1,
          scale: 1,
        }}
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          z-10
          h-64
          w-64
          rounded-full
          bg-fuchsia-400/15
          blur-[90px]
        "
      />

      {/* Image */}

      <div className={`relative overflow-hidden ${aspectClass}`}>
        {isVideo ? (
          <video
            src={project.video}
            poster={project.image}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-[1200ms]
              ease-out
              group-hover:scale-110
            "
          />
        ) : (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            draggable={false}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-[1200ms]
              ease-out
              group-hover:scale-110
            "
          />
        )}

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/75
            via-black/10
            to-transparent
            opacity-70
            transition-opacity
            duration-500
            group-hover:opacity-90
          "
        />

        {/* Shine */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            -translate-x-full
            bg-gradient-to-r
            from-transparent
            via-white/15
            to-transparent
            transition-transform
            duration-[1200ms]
            group-hover:translate-x-full
          "
        />

        {/* Category */}

        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span
            className="
              rounded-full
              border
              border-white/30
              bg-black/25
              px-3
              py-1.5
              text-[8px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-white
              backdrop-blur-md
            "
          >
            {project.category}
          </span>

          {isVideo && (
            <span
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                bg-black/25
                text-white
                backdrop-blur-md
              "
            >
              <Play size={10} fill="currentColor" />
            </span>
          )}
        </div>

        {/* Number */}

        <span
          className="
            absolute
            bottom-4
            left-4
            text-[9px]
            font-bold
            tracking-[0.2em]
            text-white/60
          "
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Arrow */}

        <div
          className="
            absolute
            bottom-4
            right-4
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-white/40
            bg-white
            text-slate-900
            shadow-lg
            transition-all
            duration-500
            group-hover:rotate-45
          "
        >
          <ArrowUpRight size={15} />
        </div>
      </div>

      {/* Content */}

      <div className="relative p-5">
        <h3
          className="
            font-display
            text-xl
            font-bold
            tracking-[-0.04em]
            text-slate-900
            transition-colors
            duration-300
            group-hover:text-violet-700
          "
        >
          {project.title}
        </h3>

        <div
          className="
            mt-2
            flex
            items-center
            gap-2
            text-[8px]
            font-bold
            uppercase
            tracking-[0.2em]
            text-slate-400
          "
        >
          <span>{project.category}</span>

          {project.year && (
            <>
              <span className="h-px w-4 bg-slate-200" />
              <span>{project.year}</span>
            </>
          )}
        </div>

        <div
          className="
            mt-4
            h-[2px]
            w-8
            rounded-full
            bg-gradient-to-r
            from-violet-500
            to-cyan-500
            transition-all
            duration-500
            group-hover:w-16
          "
        />
      </div>
    </motion.article>
  );
}

/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({ service, index }) {
  const Icon = service.icon;
  const style = accentStyles[service.accent];

  return (
    <motion.article
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-[1.8rem]
        border
        ${style.border}
        bg-white/75
        p-7
        shadow-[0_10px_40px_rgba(15,23,42,0.045)]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:shadow-[0_30px_75px_rgba(15,23,42,0.12)]
        hover:ring-1
        ${style.ring}
        sm:p-8
      `}
    >
      <div
        className={`
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-56
          w-56
          rounded-full
          ${style.glow}
          blur-[90px]
          opacity-0
          transition-all
          duration-700
          group-hover:scale-125
          group-hover:opacity-100
        `}
      />

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-[2px]
          w-0
          bg-gradient-to-r
          from-violet-500
          via-fuchsia-500
          to-cyan-500
          transition-all
          duration-700
          group-hover:w-full
        "
      />

      <div className="relative">
        <div className="flex items-center justify-between">
          <span
            className={`
              text-[10px]
              font-bold
              tracking-[0.25em]
              ${style.text}
            `}
          >
            {service.number}
          </span>

          <div
            className={`
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              ${style.soft}
              transition-all
              duration-500
              group-hover:shadow-lg
            `}
          >
            <Icon
              size={20}
              strokeWidth={1.7}
              className={style.text}
            />
          </div>
        </div>

        <h3
          className="
            font-display
            mt-8
            text-2xl
            font-bold
            tracking-[-0.04em]
            text-slate-900
            transition-colors
            duration-300
            group-hover:text-violet-700
            sm:text-3xl
          "
        >
          {service.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-500">
          {service.description}
        </p>

        <div className="mt-7 flex items-center gap-3">
          <span
            className={`
              h-[2px]
              w-10
              rounded-full
              ${style.bg}
              transition-all
              duration-500
              group-hover:w-16
            `}
          />

          <span
            className="
              text-[8px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-slate-300
              transition-colors
              duration-300
              group-hover:text-slate-500
            "
          >
            Service {service.number}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   APPROACH CARD
========================================================= */

function ApproachCard({ step, index }) {
  return (
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
        duration: 0.6,
        delay: index * 0.1,
      }}
      whileHover={{
        backgroundColor: "rgba(124,58,237,0.025)",
      }}
      className={`
        group
        relative
        overflow-hidden
        p-8
        transition-all
        duration-500
        sm:p-10
        ${
          index !== 2
            ? "border-b border-slate-200/80 md:border-b-0 md:border-r"
            : ""
        }
      `}
    >
      <span
        className="
          absolute
          bottom-0
          left-0
          h-0
          w-[3px]
          bg-gradient-to-b
          from-violet-500
          to-cyan-500
          transition-all
          duration-500
          group-hover:h-full
        "
      />

      <div className="flex items-center justify-between">
        <span
          className="
            text-[10px]
            font-bold
            tracking-[0.25em]
            text-violet-600
          "
        >
          {step.number}
        </span>

        <ArrowUpRight
          size={17}
          className="
            text-slate-300
            transition-colors
            duration-300
            group-hover:text-violet-500
          "
        />
      </div>

      <h3
        className="
          font-display
          mt-10
          text-3xl
          font-bold
          tracking-[-0.05em]
          text-slate-900
          transition-transform
          duration-500
          group-hover:translate-x-1
        "
      >
        {step.title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-slate-500">
        {step.description}
      </p>

      <div
        className="
          mt-8
          h-[2px]
          w-10
          rounded-full
          bg-gradient-to-r
          from-violet-500
          to-cyan-500
          transition-all
          duration-500
          group-hover:w-16
        "
      />
    </motion.div>
  );
}

/* =========================================================
   CONTINUOUS REELS
========================================================= */

function ContinuousReels({ reels = [] }) {
  if (!reels.length) {
    return null;
  }

  const reelItems = [...reels, ...reels];

  return (
    <section className="relative mt-32">
      {/* Header */}

      <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <SectionLabel number="02">
            Featured reels
          </SectionLabel>

          <h2 className="font-display text-4xl font-bold tracking-[-0.055em] text-slate-900 sm:text-5xl lg:text-6xl">
            Watch our
            <br />

            <span className="text-slate-400">
              work in motion.
            </span>
          </h2>
        </div>

        <p className="max-w-sm text-sm leading-7 text-slate-400">
          A moving collection of our creative work,
          campaigns and visual stories.
        </p>
      </div>

      {/* Reel Viewport */}

      <div className="relative -mx-5 overflow-hidden sm:-mx-6 lg:-mx-10">
        {/* Left Fade */}

        <div className="pointer-events-none absolute left-0 top-0 z-30 h-full w-24 bg-gradient-to-r from-[#F5F3EE] via-[#F5F3EE]/80 to-transparent sm:w-40" />

        {/* Right Fade */}

        <div className="pointer-events-none absolute right-0 top-0 z-30 h-full w-24 bg-gradient-to-l from-[#F5F3EE] via-[#F5F3EE]/80 to-transparent sm:w-40" />

        {/* Moving Track */}

        <motion.div
          className="flex w-max gap-5 py-6"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 38,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {reelItems.map((reel, index) => (
            <motion.article
              key={`${reel.id}-${index}`}
              whileHover={{
                y: -10,
              }}
              className="group relative w-[230px] shrink-0 sm:w-[260px] lg:w-[290px]"
            >
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/80
                  bg-white
                  p-1
                  shadow-[0_20px_60px_rgba(15,23,42,0.10)]
                  transition-all
                  duration-500
                  group-hover:shadow-[0_30px_90px_rgba(124,58,237,0.20)]
                "
              >
                {/* Gradient Border */}

                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-violet-500/30 via-fuchsia-500/20 to-cyan-400/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Video */}

                <div className="relative overflow-hidden rounded-[1.8rem] bg-slate-950">
                  <div className="aspect-[9/14]">
                    <video
                      src={reel.video}
                      poster={reel.image}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      controls={false}
                      disablePictureInPicture
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-[1200ms]
                        ease-out
                        group-hover:scale-110
                      "
                    />
                  </div>

                  {/* Overlay */}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />

                  {/* Playing Indicator */}

                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-2 backdrop-blur-xl">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-80" />
                      <span className="relative h-2 w-2 rounded-full bg-violet-500" />
                    </span>

                    <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-white">
                      Playing
                    </span>
                  </div>

                  {/* Number */}

                  <span className="absolute left-4 top-[4.5rem] text-[9px] font-bold tracking-[0.2em] text-white/50">
                    {String((index % reels.length) + 1).padStart(2, "0")}
                  </span>

                  {/* Bottom Content */}

                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-white/60">
                      {reel.category}
                    </p>

                    <h3 className="mt-1 text-lg font-bold tracking-[-0.03em] text-white">
                      {reel.title}
                    </h3>
                  </div>

                  {/* Arrow */}

                  <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white text-slate-900 shadow-xl transition-all duration-500 group-hover:rotate-45">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>

              {/* Glow */}

              <div className="pointer-events-none absolute -bottom-5 left-8 right-8 -z-10 h-16 rounded-full bg-violet-500/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Status */}

      <div className="mt-5 flex items-center justify-center gap-3">
        <span className="relative flex h-2 w-2">
          <span className="absolute h-full w-full animate-ping rounded-full bg-violet-500/50" />
          <span className="relative h-2 w-2 rounded-full bg-violet-500" />
        </span>

        <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-slate-400">
          Continuous creative reel
        </span>
      </div>
    </section>
  );
}

/* =========================================================
   PORTFOLIO
========================================================= */

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(
    () => getProjects(activeCategory),
    [activeCategory]
  );

  return (
    <main
      id="work"
      className="
        relative
        overflow-hidden
        bg-[#F5F3EE]
        px-5
        py-20
        text-[#17171A]
        sm:px-6
        sm:py-24
        lg:px-10
        lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Violet */}

        <motion.div
          animate={{
            x: [0, 70, 0],
            y: [0, -45, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-56
            -top-48
            h-[620px]
            w-[620px]
            rounded-full
            bg-violet-400/10
            blur-[140px]
          "
        />

        {/* Cyan */}

        <motion.div
          animate={{
            x: [0, -65, 0],
            y: [0, 55, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-56
            top-[25%]
            h-[580px]
            w-[580px]
            rounded-full
            bg-cyan-300/10
            blur-[140px]
          "
        />

        {/* Pink */}

        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[-220px]
            left-[30%]
            h-[560px]
            w-[560px]
            rounded-full
            bg-fuchsia-300/10
            blur-[140px]
          "
        />

        {/* Orange */}

        <motion.div
          animate={{
            x: [0, 80, 0],
            opacity: [0.02, 0.07, 0.02],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[20%]
            top-[8%]
            h-56
            w-56
            rounded-full
            bg-orange-300/10
            blur-[100px]
          "
        />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(23,23,26,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(23,23,26,.035) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Vignette */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(245,243,238,.7)_100%)]" />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-[1500px]">
        {/* =====================================================
            HERO
        ====================================================== */}

        <section
          className="
            relative
            overflow-hidden
            rounded-[2.5rem]
            border
            border-slate-200/70
            bg-white/20
            p-6
            backdrop-blur-[2px]
            sm:p-8
            lg:p-10
          "
        >
          <motion.div
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              -right-32
              -top-32
              h-80
              w-80
              rounded-full
              bg-violet-400/10
              blur-[100px]
            "
          />

          <div className="relative grid gap-12 lg:grid-cols-[1.3fr_.55fr] lg:items-end">
            <div>
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
                className="mb-8 flex items-center gap-3"
              >
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: 48 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                  }}
                  className="h-[2px] rounded-full bg-gradient-to-r from-violet-600 to-cyan-500"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
                  Our work
                </span>

                <Sparkles
                  size={15}
                  className="text-violet-600"
                />
              </motion.div>

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  font-display
                  max-w-6xl
                  text-[clamp(3.2rem,8vw,8.5rem)]
                  font-bold
                  leading-[0.82]
                  tracking-[-0.075em]
                "
              >
                IDEAS INTO
                <br />

                <span
                  className="
                    bg-gradient-to-r
                    from-violet-600
                    via-fuchsia-500
                    to-cyan-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  EXPERIENCES.
                </span>
              </motion.h1>
            </div>

            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="max-w-md lg:ml-auto"
            >
              <p className="text-base leading-8 text-slate-500 md:text-lg">
                We create identities, digital experiences,
                visual content and creative systems that
                help ideas become easier to see,
                understand and remember.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <motion.span
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="h-2.5 w-2.5 rounded-full bg-violet-600"
                />

                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400">
                  Creative work with intention
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            SERVICES
        ====================================================== */}

        <section className="mt-28">
          <div
            className="
              mb-10
              flex
              flex-col
              justify-between
              gap-6
              md:flex-row
              md:items-end
            "
          >
            <div>
              <SectionLabel number="01">
                What we provide
              </SectionLabel>

              <h2
                className="
                  font-display
                  text-4xl
                  font-bold
                  tracking-[-0.05em]
                  text-slate-900
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Everything your
                <br />

                <span className="text-slate-400">
                  idea needs.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-slate-400">
              From the first idea to the final visual,
              we bring strategy, creativity and design
              together.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <ServiceCard
                key={service.number}
                service={service}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* =====================================================
            FEATURED REELS
        ====================================================== */}

        <ContinuousReels reels={reels} />

        {/* =====================================================
            SELECTED WORK
        ====================================================== */}

        <section className="mt-32">
          <div className="mb-10">
            <SectionLabel number="03">
              Selected work
            </SectionLabel>

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h2
                className="
                  font-display
                  text-4xl
                  font-bold
                  tracking-[-0.05em]
                  text-slate-900
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Things we
                <br />

                <span className="text-slate-400">
                  have created.
                </span>
              </h2>

              <p className="max-w-sm text-sm leading-7 text-slate-400">
                A selection of visual work across
                identity, photography, motion and
                digital experiences.
              </p>
            </div>
          </div>

          {/* Filters */}

          <div
            className="
              relative
              mb-10
              flex
              flex-wrap
              items-center
              gap-2
              overflow-hidden
              rounded-2xl
              border
              border-slate-200/80
              bg-white/50
              px-4
              py-4
              backdrop-blur-xl
            "
          >
            <motion.div
              animate={{
                x: ["-20%", "120%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                pointer-events-none
                absolute
                left-0
                top-0
                h-px
                w-1/3
                bg-gradient-to-r
                from-transparent
                via-violet-400
                to-transparent
              "
            />

            {categories.map((category) => {
              const active = activeCategory === category;

              return (
                <motion.button
                  key={category}
                  type="button"
                  onClick={() =>
                    setActiveCategory(category)
                  }
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className={`
                    relative
                    overflow-hidden
                    rounded-full
                    px-5
                    py-2.5
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    transition-all
                    duration-300
                    ${
                      active
                        ? "bg-slate-900 text-white shadow-lg shadow-slate-900/10"
                        : "border border-slate-200 bg-white/70 text-slate-400 hover:border-violet-300 hover:bg-white hover:text-slate-800"
                    }
                  `}
                >
                  {active && (
                    <motion.span
                      layoutId="activeFilter"
                      className="absolute inset-0 rounded-full bg-slate-900"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="relative z-10">
                    {category}
                  </span>
                </motion.button>
              );
            })}

            <span
              className="
                ml-auto
                hidden
                text-[9px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-slate-300
                sm:block
              "
            >
              {String(filteredProjects.length).padStart(
                2,
                "0"
              )}{" "}
              works
            </span>
          </div>

          {/* Projects */}

          {filteredProjects.length > 0 ? (
            <motion.div
              layout
              className="
                grid
                grid-cols-1
                gap-5
                sm:grid-cols-2
                lg:grid-cols-3
              "
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map(
                  (project, index) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={index}
                    />
                  )
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              className="
                flex
                min-h-[280px]
                items-center
                justify-center
                rounded-[1.8rem]
                border
                border-dashed
                border-slate-200
                bg-white/40
              "
            >
              <div className="text-center">
                <p className="text-sm font-medium text-slate-400">
                  No work available in this category yet.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    setActiveCategory("All")
                  }
                  className="
                    mt-4
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-violet-600
                    transition-colors
                    hover:text-violet-800
                  "
                >
                  View all work
                </button>
              </div>
            </motion.div>
          )}
        </section>

        {/* =====================================================
            APPROACH
        ====================================================== */}

        <section className="mt-32">
          <div
            className="
              mb-10
              flex
              flex-col
              justify-between
              gap-6
              md:flex-row
              md:items-end
            "
          >
            <div>
              <SectionLabel number="04">
                Our approach
              </SectionLabel>

              <h2
                className="
                  font-display
                  text-4xl
                  font-bold
                  tracking-[-0.05em]
                  text-slate-900
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Simple process.
                <br />

                <span className="text-slate-400">
                  Strong results.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-slate-400">
              A focused process keeps the work clear,
              flexible and purposeful.
            </p>
          </div>

          <div
            className="
              relative
              grid
              overflow-hidden
              rounded-[2rem]
              border
              border-slate-200/80
              bg-white/70
              shadow-[0_15px_50px_rgba(15,23,42,0.05)]
              backdrop-blur-xl
              md:grid-cols-3
            "
          >
            <motion.div
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                pointer-events-none
                absolute
                left-0
                top-0
                z-20
                h-[2px]
                w-1/2
                bg-gradient-to-r
                from-transparent
                via-violet-500
                to-transparent
              "
            />

            {approach.map((step, index) => (
              <ApproachCard
                key={step.number}
                step={step}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* =====================================================
            CREATIVE STATEMENT
        ====================================================== */}

        <motion.section
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
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            group
            relative
            mt-32
            overflow-hidden
            rounded-[2.5rem]
            border
            border-slate-200/80
            bg-white/70
            p-8
            shadow-[0_25px_90px_rgba(15,23,42,0.07)]
            backdrop-blur-xl
            transition-all
            duration-700
            hover:border-violet-300/70
            hover:shadow-[0_35px_110px_rgba(124,58,237,0.10)]
            sm:p-12
            lg:p-20
          "
        >
          <motion.div
            animate={{
              x: [0, 70, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              -right-40
              -top-40
              h-[500px]
              w-[500px]
              rounded-full
              bg-fuchsia-400/10
              blur-[120px]
            "
          />

          <motion.div
            animate={{
              x: [0, -40, 0],
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              -bottom-40
              left-1/4
              h-[450px]
              w-[450px]
              rounded-full
              bg-violet-400/10
              blur-[120px]
            "
          />

          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              h-px
              w-1/2
              bg-gradient-to-r
              from-transparent
              via-violet-400
              to-transparent
            "
          />

          <div className="relative">
            <p
              className="
                mb-7
                text-[9px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-slate-400
              "
            >
              Our creative belief
            </p>

            <h2
              className="
                font-display
                max-w-5xl
                text-4xl
                font-bold
                leading-[0.92]
                tracking-[-0.065em]
                text-slate-900
                sm:text-6xl
                lg:text-8xl
              "
            >
              GOOD IDEAS
              <br />
              DESERVE
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-violet-600
                  via-fuchsia-500
                  to-cyan-500
                  bg-clip-text
                  text-transparent
                "
              >
                GREAT DESIGN.
              </span>
            </h2>

            <div
              className="
                mt-10
                flex
                flex-col
                justify-between
                gap-8
                border-t
                border-slate-200/80
                pt-8
                sm:flex-row
                sm:items-end
              "
            >
              <p className="max-w-xl text-sm leading-7 text-slate-500 md:text-base">
                We believe design should do more than
                look good. It should communicate an idea,
                create a feeling and make something worth
                remembering.
              </p>

              <motion.a
                href="/contact"
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  group/start
                  inline-flex
                  w-fit
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-slate-900
                  bg-slate-900
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_15px_40px_rgba(15,23,42,0.15)]
                  transition-all
                  duration-300
                  hover:border-violet-600
                  hover:bg-violet-600
                "
              >
                Start a project

                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-slate-900
                    transition-transform
                    duration-500
                    group-hover/start:rotate-45
                  "
                >
                  <ArrowUpRight size={14} />
                </span>
              </motion.a>
            </div>
          </div>
        </motion.section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <motion.section
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
          }}
          className="
            group
            relative
            mt-20
            overflow-hidden
            rounded-[1.8rem]
            border
            border-slate-200/80
            bg-white/40
            px-6
            py-7
            backdrop-blur-xl
            transition-all
            duration-500
            hover:border-violet-300/70
            hover:bg-white/60
            sm:px-8
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-56
              w-56
              rounded-full
              bg-violet-400/10
              blur-[90px]
              opacity-0
              transition-opacity
              duration-700
              group-hover:opacity-100
            "
          />

          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              h-px
              w-1/3
              bg-gradient-to-r
              from-transparent
              via-violet-500
              to-transparent
            "
          />

          <div
            className="
              relative
              flex
              flex-col
              justify-between
              gap-6
              sm:flex-row
              sm:items-center
            "
          >
            <div>
              <p
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-slate-400
                "
              >
                Have something in mind?
              </p>

              <h3
                className="
                  mt-2
                  font-display
                  text-2xl
                  font-bold
                  tracking-[-0.04em]
                  text-slate-900
                  sm:text-3xl
                "
              >
                Let's make it visible.
              </h3>
            </div>

            <motion.a
              href="/contact"
              whileHover={{
                x: 4,
              }}
              className="
                group/get
                inline-flex
                w-fit
                items-center
                gap-3
                font-semibold
                text-slate-800
                transition-colors
                duration-300
                hover:text-violet-700
              "
            >
              Get in touch

              <span
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  transition-all
                  duration-300
                  group-hover/get:border-violet-500
                  group-hover/get:bg-violet-600
                  group-hover/get:text-white
                "
              >
                <ArrowDownRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover/get:translate-x-1
                    group-hover/get:translate-y-1
                  "
                />
              </span>
            </motion.a>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

export default Portfolio;
import { motion } from "framer-motion";
import {
  MessageCircle,
  Lightbulb,
  Palette,
  Rocket,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by understanding your brand, goals, audience, and the feeling you want your project to create.",
    icon: MessageCircle,
    accent: "violet",
  },
  {
    number: "02",
    title: "Concept",
    description:
      "Ideas become a clear creative direction through references, mood, composition, storytelling, and visual exploration.",
    icon: Lightbulb,
    accent: "fuchsia",
  },
  {
    number: "03",
    title: "Create",
    description:
      "The concept is transformed into polished visuals with careful attention to detail, motion, color, typography, and composition.",
    icon: Palette,
    accent: "cyan",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "After refinement and final approval, you receive production-ready creative assets prepared for their intended platforms.",
    icon: Rocket,
    accent: "emerald",
  },
];

const accentStyles = {
  violet: {
    icon: "bg-violet-500/10 text-violet-300 ring-violet-400/20",
    number: "text-violet-300",
    glow: "from-violet-500/20",
    line: "bg-violet-400/40",
  },
  fuchsia: {
    icon: "bg-fuchsia-500/10 text-fuchsia-300 ring-fuchsia-400/20",
    number: "text-fuchsia-300",
    glow: "from-fuchsia-500/20",
    line: "bg-fuchsia-400/40",
  },
  cyan: {
    icon: "bg-cyan-500/10 text-cyan-300 ring-cyan-400/20",
    number: "text-cyan-300",
    glow: "from-cyan-500/20",
    line: "bg-cyan-400/40",
  },
  emerald: {
    icon: "bg-emerald-500/10 text-emerald-300 ring-emerald-400/20",
    number: "text-emerald-300",
    glow: "from-emerald-500/20",
    line: "bg-emerald-400/40",
  },
};

function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-t border-white/10 bg-black py-20 sm:py-24 lg:py-28"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-[20%] h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-[10%] h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-violet-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
              The Process
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            From an idea
            <br />
            to something{" "}
            <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              unforgettable.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
            Great creative work is not just about making things look good.
            It is about understanding the idea, finding the right direction,
            and turning it into something people remember.
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const accent = accentStyles[step.accent];

            return (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055] sm:p-7"
              >
                {/* Hover glow */}
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-gradient-to-br ${accent.glow} to-transparent opacity-0 blur-3xl transition duration-500 group-hover:opacity-100`}
                />

                {/* Top row */}
                <div className="relative flex items-start justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ring-1 ${accent.icon}`}
                  >
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  <span
                    className={`text-sm font-semibold tracking-widest ${accent.number}`}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="relative mt-7">
                  <h3 className="text-xl font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/50">
                    {step.description}
                  </p>
                </div>

                {/* Bottom indicator */}
                <div className="relative mt-7 flex items-center gap-3">
                  <span
                    className={`h-px w-8 ${accent.line} transition-all duration-500 group-hover:w-14`}
                  />

                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/30">
                    Step {step.number}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-14 border-t border-white/10 pt-7 lg:mt-16"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-6 text-white/45">
              A simple process keeps the creative journey focused,
              collaborative, and enjoyable from the first conversation to the
              final delivery.
            </p>

            <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-white/35">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)]" />
              <span>Simple. Focused. Creative.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Process;
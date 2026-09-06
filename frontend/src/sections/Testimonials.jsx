import { motion } from "framer-motion";
import { Quote, ArrowUpRight } from "lucide-react";
import { testimonials } from "../data/testimonials";

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-t border-white/10 bg-black py-20 sm:py-24 lg:py-28"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[25%] h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[120px]" />
        <div className="absolute right-[-8%] bottom-[10%] h-80 w-80 rounded-full bg-violet-500/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-fuchsia-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
              Client Words
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Good work
            <br />
            speaks{" "}
            <span className="bg-gradient-to-r from-fuchsia-300 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
              louder.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
            The goal is simple — create work that not only looks great, but
            leaves a lasting impression.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="mt-14 grid gap-5 md:grid-cols-3 lg:mt-16">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055] sm:p-7"
            >
              {/* Decorative glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* Quote icon */}
              <div className="relative flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.06] text-violet-300 ring-1 ring-white/10">
                  <Quote size={19} />
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-white/20 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white/50"
                />
              </div>

              {/* Message */}
              <p className="relative mt-7 text-[15px] leading-7 text-white/65">
                “{testimonial.message}”
              </p>

              {/* Client */}
              <div className="relative mt-7 border-t border-white/10 pt-5">
                <p className="text-sm font-semibold text-white">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/35">
                  {testimonial.role}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 border-t border-white/10 pt-7 lg:mt-16"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-white/40">
              Every project is approached with the same attention to detail.
            </p>

            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-fuchsia-400 shadow-[0_0_12px_rgba(232,121,249,0.65)]" />

              <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/35">
                Creative that connects
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
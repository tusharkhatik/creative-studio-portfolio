import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What kind of creative projects do you work on?",
    answer:
      "I work on a range of visual projects including video editing, photo editing, logo design, branding, social media creatives, thumbnails, and other digital content.",
  },
  {
    question: "How does a project usually start?",
    answer:
      "Every project starts with a conversation about your goals, requirements, references, timeline, and the style you are looking for. From there, I suggest a clear creative direction.",
  },
  {
    question: "Can I request revisions?",
    answer:
      "Yes. Feedback is an important part of the creative process. Revisions are handled based on the project's scope and are discussed before the work begins.",
  },
  {
    question: "How long does a project take?",
    answer:
      "The timeline depends on the type and complexity of the project. A simple creative may take a few days, while larger branding or video projects can require more time.",
  },
  {
    question: "Do you work with businesses and content creators?",
    answer:
      "Yes. The work can be tailored for businesses, personal brands, creators, startups, agencies, and individuals who need professional visual content.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply get in touch through the contact section. Share what you need, your goals, and any useful references. We can then discuss the project and the next steps.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden border-t border-white/10 bg-black py-20 sm:py-24 lg:py-28"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[15%] h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute right-[-8%] bottom-[15%] h-80 w-80 rounded-full bg-violet-500/10 blur-[130px]" />
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
            <span className="h-px w-8 bg-cyan-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
              FAQ
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Questions,
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
              answered.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
            A few things you might want to know before starting a creative
            project.
          </p>
        </motion.div>

        {/* FAQ layout */}
        <div className="mt-14 grid gap-10 lg:mt-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="sticky top-28">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-8">
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-500/10 blur-3xl" />

                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
                    Still have a question?
                  </p>

                  <h3 className="mt-5 max-w-xs text-2xl font-semibold leading-tight text-white">
                    Let's talk about your idea.
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-6 text-white/45">
                    If you cannot find the answer you're looking for, reach
                    out directly and we can discuss your project.
                  </p>

                  <a
                    href="#contact"
                    className="mt-7 inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-white/90"
                  >
                    Get in touch
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Questions */}
          <div className="border-t border-white/10">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.04,
                  }}
                  className="border-b border-white/10"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-5">
                      <span
                        className={`pt-1 text-xs font-semibold tracking-widest transition-colors ${
                          isOpen ? "text-cyan-300" : "text-white/25"
                        }`}
                      >
                        0{index + 1}
                      </span>

                      <span
                        className={`text-base font-medium transition-colors sm:text-lg ${
                          isOpen ? "text-white" : "text-white/65"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition duration-300 ${
                        isOpen
                          ? "rotate-45 border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
                          : "border-white/10 text-white/40"
                      }`}
                    >
                      <Plus size={17} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pl-10 sm:pl-[3.25rem]">
                          <p className="max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 border-t border-white/10 pt-7 lg:mt-16"
        >
          <p className="text-sm text-white/35">
            Have something specific in mind?{" "}
            <a
              href="#contact"
              className="text-white/65 underline decoration-white/20 underline-offset-4 transition hover:text-white"
            >
              Start a conversation.
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default FAQ;
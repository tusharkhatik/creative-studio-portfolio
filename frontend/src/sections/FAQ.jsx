import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, Plus, Sparkles } from "lucide-react";
import { useState } from "react";

/* =========================================================
   FAQ DATA
========================================================= */

const faqs = [
  {
    question: "What kind of creative projects do you work on?",
    answer:
      "I work on a range of visual projects including video editing, photo editing, logo design, branding, social media creatives, thumbnails, motion design, photography and other digital content.",
  },
  {
    question: "How does a project usually start?",
    answer:
      "Every project starts with a conversation about your goals, requirements, references, timeline and the style you are looking for. From there, I suggest a clear creative direction and the next steps.",
  },
  {
    question: "Can I request revisions?",
    answer:
      "Yes. Feedback is an important part of the creative process. Revisions are handled according to the project's scope and are discussed clearly before the work begins.",
  },
  {
    question: "How long does a project take?",
    answer:
      "The timeline depends on the type and complexity of the project. A simple creative may take a few days, while larger branding, photography or video projects can require more time.",
  },
  {
    question: "Do you work with businesses and content creators?",
    answer:
      "Yes. The work can be tailored for businesses, personal brands, creators, startups, agencies and individuals who need professional visual content.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply get in touch through the contact section. Share what you need, your goals, timeline and any useful references. We can then discuss the project and decide on the best way forward.",
  },
];

/* =========================================================
   ANIMATIONS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

/* =========================================================
   FAQ ITEM
========================================================= */

function FAQItem({ faq, index, isOpen, onToggle }) {
  return (
    <motion.div
      variants={fadeUp}
      className="
        group
        overflow-hidden
        rounded-[1.75rem]
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-500
        hover:border-violet-200
        hover:shadow-xl
      "
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="
          flex
          w-full
          items-center
          gap-5
          px-5
          py-5
          text-left
          sm:px-6
          sm:py-6
        "
      >
        {/* NUMBER */}

        <span
          className={`
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            text-[10px]
            font-black
            tracking-[0.15em]
            transition-all
            duration-300
            ${
              isOpen
                ? "bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-200"
                : "bg-slate-100 text-slate-400 group-hover:bg-violet-50 group-hover:text-violet-500"
            }
          `}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* QUESTION */}

        <span
          className={`
            flex-1
            text-sm
            font-black
            tracking-tight
            transition-colors
            sm:text-base
            lg:text-lg
            ${
              isOpen
                ? "text-slate-950"
                : "text-slate-700 group-hover:text-slate-950"
            }
          `}
        >
          {faq.question}
        </span>

        {/* PLUS */}

        <span
          className={`
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            transition-all
            duration-300
            ${
              isOpen
                ? "rotate-45 border-violet-200 bg-violet-50 text-violet-600"
                : "border-slate-200 bg-slate-50 text-slate-400 group-hover:border-violet-200 group-hover:text-violet-500"
            }
          `}
        >
          <Plus size={17} strokeWidth={2} />
        </span>
      </button>

      {/* ANSWER */}

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-6 sm:px-6 sm:pb-7">
              <div className="ml-0 border-t border-slate-100 pt-5 sm:ml-[3.75rem]">
                <p className="max-w-3xl text-sm font-medium leading-7 text-slate-500 sm:text-[15px]">
                  {faq.answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* =========================================================
   MAIN FAQ
========================================================= */

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((previous) =>
      previous === index ? -1 : index
    );
  };

  return (
    <section
      id="faq"
      className="
        relative
        overflow-hidden
        border-t
        border-slate-200
        bg-[#f7f7fb]
        px-5
        py-24
        sm:px-6
        lg:px-10
        lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* VIOLET */}

        <motion.div
          animate={{
            x: [0, 45, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-64
            -top-56
            h-[650px]
            w-[650px]
            rounded-full
            bg-violet-300/30
            blur-[150px]
          "
        />

        {/* CYAN */}

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-64
            top-[25%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-cyan-300/25
            blur-[150px]
          "
        />

        {/* PINK */}

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[-250px]
            left-[35%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-pink-300/20
            blur-[140px]
          "
        />

        {/* GRID */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
          "
          style={{
            backgroundImage:
              "linear-gradient(#475569 1px, transparent 1px), linear-gradient(90deg, #475569 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-[1400px]">

        {/* ===================================================
            HEADER
        ==================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={fadeUp}
          className="max-w-4xl"
        >
          {/* LABEL */}

          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-12 bg-slate-400" />

            <span
              className="
                text-[10px]
                font-black
                uppercase
                tracking-[0.3em]
                text-slate-500
              "
            >
              FAQ / Frequently asked
            </span>

            <span
              className="
                h-2
                w-2
                rounded-full
                bg-emerald-500
                shadow-[0_0_18px_rgba(16,185,129,0.65)]
              "
            />
          </div>

          {/* HEADING */}

          <h1
            className="
              max-w-5xl
              text-[clamp(3.2rem,7vw,7rem)]
              font-black
              leading-[0.85]
              tracking-[-0.08em]
              text-slate-950
            "
          >
            QUESTIONS
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
              ANSWERED.
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              mt-8
              max-w-2xl
              text-base
              font-medium
              leading-7
              text-slate-500
              sm:text-lg
              sm:leading-8
            "
          >
            Everything you might want to know before
            starting a creative project. If you still
            have questions, we're always happy to talk.
          </p>
        </motion.div>

        {/* ===================================================
            FAQ CONTENT
        ==================================================== */}

        <div
          className="
            mt-16
            grid
            gap-8
            lg:mt-20
            lg:grid-cols-[0.72fr_1.28fr]
            lg:gap-14
          "
        >
          {/* =================================================
              LEFT CARD
          ================================================== */}

          <motion.div
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
              amount: 0.15,
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="lg:sticky lg:top-28">
              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2.5rem]
                  border
                  border-slate-200
                  bg-white
                  p-7
                  shadow-xl
                  shadow-slate-200/50
                  sm:p-9
                "
              >
                {/* GLOW */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-24
                    -top-24
                    h-64
                    w-64
                    rounded-full
                    bg-violet-300/30
                    blur-[80px]
                    transition-all
                    duration-700
                    group-hover:scale-125
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-24
                    -left-24
                    h-56
                    w-56
                    rounded-full
                    bg-cyan-300/20
                    blur-[80px]
                  "
                />

                <div className="relative">
                  {/* ICON */}

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-violet-500
                      to-fuchsia-500
                      text-white
                      shadow-lg
                      shadow-violet-200
                    "
                  >
                    <MessageCircle
                      size={22}
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* LABEL */}

                  <p
                    className="
                      mt-8
                      text-[10px]
                      font-black
                      uppercase
                      tracking-[0.28em]
                      text-violet-600
                    "
                  >
                    Still have a question?
                  </p>

                  {/* TITLE */}

                  <h3
                    className="
                      mt-4
                      max-w-sm
                      text-3xl
                      font-black
                      leading-tight
                      tracking-[-0.04em]
                      text-slate-950
                    "
                  >
                    Let's talk about your idea.
                  </h3>

                  {/* DESCRIPTION */}

                  <p
                    className="
                      mt-4
                      max-w-sm
                      text-sm
                      font-medium
                      leading-7
                      text-slate-500
                    "
                  >
                    Can't find what you're looking for?
                    Tell us what you're working on and
                    we'll help you figure out the next
                    step.
                  </p>

                  {/* BUTTON */}

                  <a
                    href="#contact"
                    className="
                      group/btn
                      mt-7
                      inline-flex
                      items-center
                      gap-3
                      rounded-full
                      bg-slate-950
                      px-6
                      py-3.5
                      text-sm
                      font-black
                      text-white
                      shadow-xl
                      shadow-slate-300
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-violet-600
                      hover:shadow-violet-200
                    "
                  >
                    Get in touch

                    <span
                      className="
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-full
                        bg-white/10
                      "
                    >
                      <ArrowUpRight
                        size={14}
                        className="
                          transition-transform
                          duration-300
                          group-hover/btn:-translate-y-0.5
                          group-hover/btn:translate-x-0.5
                        "
                      />
                    </span>
                  </a>

                  {/* BOTTOM INFO */}

                  <div
                    className="
                      mt-8
                      flex
                      items-center
                      gap-3
                      border-t
                      border-slate-100
                      pt-6
                    "
                  >
                    <span
                      className="
                        h-2
                        w-2
                        rounded-full
                        bg-emerald-500
                        shadow-[0_0_10px_rgba(16,185,129,0.5)]
                      "
                    />

                    <span
                      className="
                        text-[9px]
                        font-black
                        uppercase
                        tracking-[0.2em]
                        text-slate-400
                      "
                    >
                      Open for selected projects
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              QUESTIONS
          ================================================== */}

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="flex flex-col gap-3"
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => toggleFAQ(index)}
              />
            ))}
          </motion.div>
        </div>

        {/* ===================================================
            SMALL CLOSING MESSAGE
        ==================================================== */}

        <motion.div
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
          transition={{
            duration: 0.5,
          }}
          className="
            mt-14
            flex
            items-center
            gap-3
            border-t
            border-slate-200
            pt-6
          "
        >
          <Sparkles
            size={15}
            className="shrink-0 text-violet-500"
          />

          <p
            className="
              text-[10px]
              font-black
              uppercase
              tracking-[0.2em]
              text-slate-400
            "
          >
            Your questions. Our answers. Let's create
            something meaningful.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default FAQ;
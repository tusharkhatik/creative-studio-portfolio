import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Lightbulb,
  Target,
  Zap,
  Layers3,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const services = [
  {
    title: "Social Media Management",
    description:
      "Strategic content planning, creative designs and engaging content that helps your brand grow.",
  },
  {
    title: "Performance Marketing",
    description:
      "Data-driven advertising campaigns focused on generating leads, sales and measurable results.",
  },
  {
    title: "Content Creation",
    description:
      "High-quality reels, graphics and ad creatives designed to capture attention and build your brand.",
  },
  {
    title: "Website Design",
    description:
      "Modern, responsive websites and landing pages designed to turn visitors into customers.",
  },
  {
    title: "SEO & Local Search",
    description:
      "Improve your visibility on Google and help more customers discover your business.",
  },
  {
    title: "Influencer Marketing",
    description:
      "Connect with relevant creators to build trust, increase reach and grow your audience.",
  },
];

const principles = [
  {
    number: "01",
    title: "Creative Thinking",
    description:
      "We begin with ideas that have a clear purpose. Every design is created to communicate something meaningful.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Attention to Detail",
    description:
      "From typography and spacing to colors and visuals, we carefully consider every part of the experience.",
    icon: Target,
  },
  {
    number: "03",
    title: "Built for Impact",
    description:
      "Our goal is not just to make things look good. We create work that attracts attention and drives results.",
    icon: Zap,
  },
  {
    number: "04",
    title: "One Clear Direction",
    description:
      "Every project follows a consistent creative direction so the final result feels clear, professional and memorable.",
    icon: Layers3,
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const viewport = {
  once: true,
  amount: 0.15,
};

function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#F9FAFC]
        px-5
        py-16
        text-slate-950
        sm:px-8
        sm:py-20
        lg:px-10
        lg:py-24
      "
    >
      {/* =========================================================
          BACKGROUND ATMOSPHERE
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Pink smoke */}

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-64
            top-[-120px]
            h-[520px]
            w-[520px]
            rounded-full
            bg-pink-300/[0.14]
            blur-[130px]
          "
        />

        {/* Violet smoke */}

        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 60, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-64
            top-[30%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-violet-300/[0.10]
            blur-[140px]
          "
        />

        {/* Cyan smoke */}

        <motion.div
          animate={{
            x: [0, 60, 0],
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[-200px]
            left-[35%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-cyan-300/[0.10]
            blur-[130px]
          "
        />

        {/* Small floating glow */}

        <motion.div
          animate={{
            x: [-30, 30, -30],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[48%]
            top-[20%]
            h-24
            w-24
            rounded-full
            bg-fuchsia-300/20
            blur-[60px]
          "
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
          "
          style={{
            backgroundImage:
              "linear-gradient(#475569 1px, transparent 1px), linear-gradient(90deg, #475569 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Vignette */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_15%,#F9FAFC_92%)]
          "
        />
      </div>


      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="relative mx-auto max-w-6xl">


        {/* =========================================================
            INTRO
        ========================================================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            group
            relative
            mx-auto
            max-w-4xl
            overflow-hidden
            rounded-[2rem]
            border
            border-slate-200/80
            bg-white/75
            px-6
            py-10
            text-center
            shadow-[0_20px_70px_rgba(15,23,42,0.05)]
            backdrop-blur-xl
            transition-all
            duration-700
            hover:-translate-y-1
            hover:border-pink-200
            hover:shadow-[0_30px_90px_rgba(236,72,153,0.10)]
            sm:px-10
            sm:py-12
          "
        >

          {/* Hover smoke */}

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-48
              w-48
              rounded-full
              bg-pink-300/20
              blur-[80px]
              opacity-0
              transition-opacity
              duration-700
              group-hover:opacity-100
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-20
              -left-20
              h-48
              w-48
              rounded-full
              bg-violet-300/15
              blur-[80px]
              opacity-0
              transition-opacity
              duration-700
              group-hover:opacity-100
            "
          />

          {/* Label */}

          <div className="relative z-10 mb-4 flex items-center justify-center gap-2">

            <Sparkles
              size={14}
              className="text-pink-500"
            />

            <p
              className="
                text-[10px]
                font-black
                uppercase
                tracking-[0.28em]
                text-pink-500
              "
            >
              About Us
            </p>

          </div>


          <h1
            className="
              relative
              z-10
              text-4xl
              font-black
              leading-[0.95]
              tracking-[-0.045em]
              text-slate-950
              sm:text-5xl
              lg:text-6xl
            "
          >
            We create ideas that{" "}
            <span
              className="
                bg-gradient-to-r
                from-pink-500
                via-fuchsia-500
                to-violet-600
                bg-clip-text
                text-transparent
              "
            >
              move brands forward.
            </span>
          </h1>


          <p
            className="
              relative
              z-10
              mx-auto
              mt-6
              max-w-2xl
              text-sm
              font-medium
              leading-7
              text-slate-600
              sm:text-base
            "
          >
            We are a creative digital team helping modern businesses build
            stronger brands, better digital experiences and meaningful
            connections with their audience.
          </p>


          {/* Bottom animated line */}

          <div className="relative z-10 mx-auto mt-7 h-[2px] w-16 overflow-hidden rounded-full bg-slate-200">
            <motion.div
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                h-full
                w-1/2
                rounded-full
                bg-gradient-to-r
                from-pink-500
                to-violet-500
              "
            />
          </div>

        </motion.div>


        {/* =========================================================
            WHO WE ARE
        ========================================================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{
            duration: 0.75,
            delay: 0.1,
          }}
          className="
            mt-16
            grid
            gap-8
            lg:grid-cols-2
            lg:items-center
          "
        >

          {/* LEFT */}

          <div className="relative">

            <p
              className="
                mb-3
                text-[10px]
                font-black
                uppercase
                tracking-[0.25em]
                text-pink-500
              "
            >
              Who We Are
            </p>

            <h2
              className="
                text-3xl
                font-black
                leading-tight
                tracking-[-0.04em]
                text-slate-950
                sm:text-4xl
              "
            >
              Creative thinking with
              <br />
              <span
                className="
                  bg-gradient-to-r
                  from-pink-500
                  to-violet-600
                  bg-clip-text
                  text-transparent
                "
              >
                business purpose.
              </span>
            </h2>

            <p className="mt-6 text-sm font-medium leading-7 text-slate-600">
              We believe good digital work should do more than look beautiful.
              It should communicate clearly, create trust and help businesses
              achieve real goals.
            </p>

            <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
              From social media and advertising to websites and content
              creation, we bring strategy and creativity together to create
              digital experiences that people remember.
            </p>

          </div>


          {/* RIGHT CARD */}

          <motion.div
            whileHover={{
              y: -6,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-[1.7rem]
              border
              border-slate-200
              bg-white/80
              p-7
              shadow-[0_15px_50px_rgba(15,23,42,0.06)]
              backdrop-blur-xl
              transition-all
              duration-500
              hover:border-pink-300
              hover:shadow-[0_25px_70px_rgba(236,72,153,0.13)]
            "
          >

            {/* Animated gradient edge */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-[1.7rem]
                border
                border-transparent
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
            />

            {/* Smoke */}

            <div
              className="
                pointer-events-none
                absolute
                -right-16
                -top-16
                h-40
                w-40
                rounded-full
                bg-pink-300/20
                blur-[70px]
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
            />

            <p
              className="
                relative
                z-10
                text-[10px]
                font-black
                uppercase
                tracking-[0.25em]
                text-slate-400
              "
            >
              What matters to us
            </p>


            <div className="relative z-10 mt-7 space-y-4">

              {[
                "Clear communication",
                "Creative solutions",
                "Meaningful design",
                "Measurable results",
              ].map((item, index) => (

                <motion.div
                  key={item}
                  whileHover={{
                    x: 5,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    group/item
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-transparent
                    px-3
                    py-2.5
                    transition-all
                    duration-300
                    hover:border-pink-100
                    hover:bg-pink-50/70
                  "
                >

                  <CheckCircle2
                    size={18}
                    className="
                      shrink-0
                      text-pink-500
                      transition-transform
                      duration-300
                      group-hover/item:scale-110
                    "
                  />

                  <span
                    className="
                      text-sm
                      font-semibold
                      text-slate-700
                      transition-colors
                      group-hover/item:text-slate-950
                    "
                  >
                    {item}
                  </span>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </motion.div>


        {/* =========================================================
            SERVICES
        ========================================================= */}

        <div className="mt-24">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{
              duration: 0.7,
            }}
            className="text-center"
          >

            <p
              className="
                mb-3
                text-[10px]
                font-black
                uppercase
                tracking-[0.28em]
                text-pink-500
              "
            >
              What We Provide
            </p>

            <h2
              className="
                text-3xl
                font-black
                tracking-[-0.04em]
                text-slate-950
                sm:text-4xl
              "
            >
              Everything your brand needs
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-xl
                text-sm
                font-medium
                leading-7
                text-slate-600
              "
            >
              From strategy to execution, we provide creative digital
              solutions designed to help your business grow.
            </p>

          </motion.div>


          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service, index) => (

              <motion.div
                key={service.title}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={viewport}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -7,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.4rem]
                  border
                  border-slate-200
                  bg-white/80
                  p-6
                  shadow-[0_8px_35px_rgba(15,23,42,0.04)]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:border-pink-300
                  hover:shadow-[0_25px_65px_rgba(236,72,153,0.13)]
                "
              >

                {/* Gradient hover border */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-[1.4rem]
                    bg-gradient-to-br
                    from-pink-500/0
                    via-fuchsia-500/0
                    to-violet-500/0
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:from-pink-500/[0.03]
                    group-hover:via-fuchsia-500/[0.02]
                    group-hover:to-violet-500/[0.04]
                    group-hover:opacity-100
                  "
                />

                {/* Pink smoke */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-10
                    -bottom-10
                    h-24
                    w-24
                    rounded-full
                    bg-pink-300/25
                    blur-[45px]
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                <div className="relative z-10 flex items-start justify-between gap-4">

                  <h3
                    className="
                      text-base
                      font-bold
                      leading-6
                      text-slate-950
                      transition-colors
                      duration-300
                      group-hover:text-pink-600
                    "
                  >
                    {service.title}
                  </h3>

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-slate-200
                      bg-slate-50
                      transition-all
                      duration-500
                      group-hover:border-pink-200
                      group-hover:bg-pink-50
                    "
                  >

                    <ArrowUpRight
                      size={15}
                      className="
                        text-slate-400
                        transition-all
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-pink-500
                      "
                    />

                  </div>

                </div>


                <p
                  className="
                    relative
                    z-10
                    mt-4
                    text-sm
                    font-medium
                    leading-6
                    text-slate-600
                  "
                >
                  {service.description}
                </p>


                {/* Animated indicator */}

                <div
                  className="
                    relative
                    z-10
                    mt-6
                    h-[2px]
                    w-8
                    overflow-hidden
                    rounded-full
                    bg-slate-200
                  "
                >
                  <div
                    className="
                      h-full
                      w-full
                      origin-left
                      scale-x-0
                      rounded-full
                      bg-gradient-to-r
                      from-pink-500
                      to-violet-500
                      transition-transform
                      duration-500
                      group-hover:scale-x-100
                    "
                  />
                </div>

              </motion.div>

            ))}

          </div>

        </div>


        {/* =========================================================
            HOW WE WORK
        ========================================================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{
            duration: 0.75,
          }}
          className="
            group
            relative
            mt-24
            overflow-hidden
            rounded-[2rem]
            border
            border-pink-100
            bg-[#fff8fc]/90
            px-6
            py-10
            shadow-[0_20px_60px_rgba(236,72,153,0.06)]
            backdrop-blur-xl
            transition-all
            duration-500
            hover:border-pink-200
            hover:shadow-[0_30px_80px_rgba(236,72,153,0.10)]
            sm:px-10
            sm:py-12
          "
        >

          {/* Background smoke */}

          <motion.div
            animate={{
              x: [0, 70, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              -right-32
              -top-32
              h-72
              w-72
              rounded-full
              bg-pink-300/20
              blur-[100px]
            "
          />

          <motion.div
            animate={{
              x: [0, -50, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              -bottom-32
              left-1/4
              h-64
              w-64
              rounded-full
              bg-violet-300/15
              blur-[100px]
            "
          />


          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>

              <p
                className="
                  mb-3
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.25em]
                  text-pink-500
                "
              >
                Our Approach
              </p>

              <h2
                className="
                  text-3xl
                  font-black
                  leading-tight
                  tracking-[-0.04em]
                  text-slate-950
                  sm:text-4xl
                "
              >
                Simple process.
                <br />
                <span
                  className="
                    bg-gradient-to-r
                    from-pink-500
                    to-violet-600
                    bg-clip-text
                    text-transparent
                  "
                >
                  Strong results.
                </span>
              </h2>

            </div>


            <div className="grid gap-4 sm:grid-cols-3">

              {[
                {
                  number: "01",
                  title: "Understand",
                  text: "We understand your brand, audience and goals.",
                },
                {
                  number: "02",
                  title: "Create",
                  text: "We turn ideas into clear and creative solutions.",
                },
                {
                  number: "03",
                  title: "Grow",
                  text: "We focus on results that move your business forward.",
                },
              ].map((step) => (

                <motion.div
                  key={step.number}
                  whileHover={{
                    y: -5,
                  }}
                  className="
                    group/step
                    rounded-2xl
                    border
                    border-pink-100
                    bg-white/70
                    p-5
                    transition-all
                    duration-400
                    hover:border-pink-300
                    hover:bg-white
                    hover:shadow-[0_15px_40px_rgba(236,72,153,0.10)]
                  "
                >

                  <span
                    className="
                      text-2xl
                      font-black
                      text-pink-500
                      transition-all
                      duration-300
                      group-hover/step:text-violet-600
                    "
                  >
                    {step.number}
                  </span>

                  <h3 className="mt-3 font-bold text-slate-950">
                    {step.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      font-medium
                      leading-6
                      text-slate-600
                    "
                  >
                    {step.text}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </motion.div>


        {/* =========================================================
            PRINCIPLES
        ========================================================= */}

        <div className="mt-24">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{
              duration: 0.7,
            }}
            className="text-center"
          >

            <p
              className="
                mb-3
                text-[10px]
                font-black
                uppercase
                tracking-[0.28em]
                text-pink-500
              "
            >
              What Drives Us
            </p>

            <h2
              className="
                text-3xl
                font-black
                tracking-[-0.04em]
                text-slate-950
                sm:text-4xl
              "
            >
              Our principles
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-xl
                text-sm
                font-medium
                leading-7
                text-slate-600
              "
            >
              The simple ideas that guide every project we work on.
            </p>

          </motion.div>


          <div className="mt-10 grid gap-5 md:grid-cols-2">

            {principles.map((principle, index) => {

              const Icon = principle.icon;

              return (

                <motion.article
                  key={principle.number}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={viewport}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -7,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[1.5rem]
                    border
                    border-slate-200
                    bg-white/85
                    p-7
                    shadow-[0_10px_35px_rgba(15,23,42,0.05)]
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:border-pink-300
                    hover:shadow-[0_25px_65px_rgba(236,72,153,0.13)]
                    sm:p-8
                  "
                >

                  {/* Smoke */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-36
                      w-36
                      rounded-full
                      bg-pink-300/20
                      blur-[65px]
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  <div className="relative z-10 flex items-center justify-between">

                    <span
                      className="
                        text-xs
                        font-black
                        tracking-[0.2em]
                        text-pink-500
                      "
                    >
                      {principle.number}
                    </span>


                    <motion.div
                      whileHover={{
                        rotate: 8,
                        scale: 1.08,
                      }}
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-pink-100
                        bg-pink-50
                        transition-all
                        duration-300
                        group-hover:border-pink-200
                        group-hover:bg-pink-100
                      "
                    >

                      <Icon
                        size={20}
                        strokeWidth={1.8}
                        className="text-pink-500"
                      />

                    </motion.div>

                  </div>


                  <h3
                    className="
                      relative
                      z-10
                      mt-7
                      text-xl
                      font-black
                      tracking-tight
                      text-slate-950
                      transition-colors
                      duration-300
                      group-hover:text-pink-600
                    "
                  >
                    {principle.title}
                  </h3>


                  <p
                    className="
                      relative
                      z-10
                      mt-3
                      text-sm
                      font-medium
                      leading-7
                      text-slate-600
                    "
                  >
                    {principle.description}
                  </p>


                  <div className="relative z-10 mt-7 flex items-center gap-3">

                    <span
                      className="
                        h-[2px]
                        w-8
                        rounded-full
                        bg-pink-400
                        transition-all
                        duration-500
                        group-hover:w-14
                      "
                    />

                    <span
                      className="
                        text-[9px]
                        font-black
                        uppercase
                        tracking-[0.18em]
                        text-slate-400
                      "
                    >
                      Principle
                    </span>

                  </div>

                </motion.article>

              );

            })}

          </div>

        </div>


        {/* =========================================================
            FINAL CTA
        ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={viewport}
          transition={{
            duration: 0.7,
          }}
          className="
            group
            relative
            mt-24
            overflow-hidden
            rounded-[1.8rem]
            border
            border-slate-200
            bg-white/80
            px-6
            py-8
            shadow-[0_15px_50px_rgba(15,23,42,0.05)]
            backdrop-blur-xl
            transition-all
            duration-500
            hover:border-pink-300
            hover:shadow-[0_25px_70px_rgba(236,72,153,0.12)]
            sm:px-8
            sm:py-9
          "
        >

          {/* CTA smoke */}

          <motion.div
            animate={{
              x: [-60, 80, -60],
              opacity: [0.04, 0.12, 0.04],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              left-1/4
              top-0
              h-32
              w-72
              rounded-full
              bg-pink-500
              blur-[80px]
            "
          />

          <div
            className="
              relative
              z-10
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
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.25em]
                  text-pink-500
                "
              >
                Let's work together
              </p>

              <h3
                className="
                  mt-2
                  text-2xl
                  font-black
                  tracking-tight
                  text-slate-950
                "
              >
                Ready to grow your brand?
              </h3>

              <p className="mt-2 text-sm font-medium text-slate-600">
                Let's turn your next idea into something meaningful.
              </p>

            </div>


            <a
              href="#contact"
              className="
                group/button
                inline-flex
                w-fit
                items-center
                gap-3
                rounded-full
                border
                border-pink-500
                bg-pink-500
                px-6
                py-3
                text-sm
                font-bold
                text-white
                shadow-[0_10px_30px_rgba(236,72,153,0.18)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-violet-600
                hover:bg-violet-600
                hover:shadow-[0_15px_40px_rgba(124,58,237,0.22)]
              "
            >
              Let's Talk

              <ArrowUpRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover/button:-translate-y-0.5
                  group-hover/button:translate-x-0.5
                "
              />

            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;
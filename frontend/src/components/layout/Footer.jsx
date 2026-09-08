import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const navigation = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Services", path: "/services" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

const socials = [
  {
    label: "Instagram",
    icon: FaInstagram,
    color: "text-[#E1306C]",
    glow: "hover:shadow-[0_15px_45px_rgba(225,48,108,0.22)]",
  },
  {
    label: "LinkedIn",
    icon: FaLinkedinIn,
    color: "text-[#0A66C2]",
    glow: "hover:shadow-[0_15px_45px_rgba(10,102,194,0.22)]",
  },
  {
    label: "Facebook",
    icon: FaFacebookF,
    color: "text-[#1877F2]",
    glow: "hover:shadow-[0_15px_45px_rgba(24,119,242,0.22)]",
  },
  {
    label: "GitHub",
    icon: FaGithub,
    color: "text-[#24292F]",
    glow: "hover:shadow-[0_15px_45px_rgba(36,41,47,0.22)]",
  },
];

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#F7F8FC] text-slate-950">

      {/* =========================================================
          BACKGROUND ATMOSPHERE
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Violet smoke */}

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
          className="absolute -left-72 -top-72 h-[600px] w-[600px] rounded-full bg-violet-400/[0.10] blur-[140px]"
        />

        {/* Cyan smoke */}

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
          className="absolute -right-72 top-[30%] h-[600px] w-[600px] rounded-full bg-cyan-300/[0.10] blur-[150px]"
        />

        {/* Pink smoke */}

        <motion.div
          animate={{
            x: [0, 40, 0],
            scale: [1, 1.18, 1],
            opacity: [0.2, 0.45, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-300px] left-[30%] h-[600px] w-[600px] rounded-full bg-fuchsia-300/[0.10] blur-[150px]"
        />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#475569 1px, transparent 1px), linear-gradient(90deg, #475569 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Vignette */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#F7F8FC_92%)]" />
      </div>


      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">


        {/* =========================================================
            STATUS BAR
        ========================================================= */}

        <div className="flex items-center justify-between border-b border-slate-300/80 py-4">

          <div className="flex items-center gap-3">

            <span className="relative flex h-2.5 w-2.5">

              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/40" />

              <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.55)]" />

            </span>

            <span className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-700">
              Available for selected projects
            </span>

          </div>

          <span className="hidden text-[9px] font-black uppercase tracking-[0.25em] text-slate-600 sm:block">
            Pune · India
          </span>

        </div>


        {/* =========================================================
            CTA SECTION — REDUCED HEIGHT
        ========================================================= */}

        <section className="py-4 sm:py-5 lg:py-6">

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
              amount: 0.2,
            }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              group/ctaBox
              relative
              overflow-hidden
              rounded-[1.7rem]
              border
              border-slate-200/80
              bg-white/80
              shadow-[0_25px_80px_rgba(15,23,42,0.07)]
              backdrop-blur-xl
              transition-all
              duration-700
              hover:border-violet-200
              hover:shadow-[0_30px_100px_rgba(124,58,237,0.10)]
              sm:rounded-[2rem]
            "
          >

            {/* =====================================================
                ANIMATED GRADIENT BORDER
            ===================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-[1.7rem]
                p-[1px]
                opacity-0
                transition-opacity
                duration-700
                group-hover/ctaBox:opacity-100
                sm:rounded-[2rem]
              "
            >
              <div className="
                h-full
                w-full
                rounded-[1.7rem]
                bg-gradient-to-r
                from-violet-400
                via-fuchsia-400
                to-cyan-400
                opacity-40
                blur-[1px]
                sm:rounded-[2rem]
              " />
            </div>


            {/* =====================================================
                MOVING SMOKE
            ===================================================== */}

            <motion.div
              animate={{
                x: [0, 80, 0],
                y: [0, -30, 0],
                scale: [1, 1.12, 1],
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
                -top-36
                h-[380px]
                w-[380px]
                rounded-full
                bg-gradient-to-br
                from-violet-400/20
                via-fuchsia-300/10
                to-cyan-300/10
                blur-[90px]
              "
            />

            <motion.div
              animate={{
                x: [0, -50, 0],
                scale: [1, 1.1, 1],
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
                left-[30%]
                h-[350px]
                w-[350px]
                rounded-full
                bg-cyan-300/10
                blur-[90px]
              "
            />

            {/* Black subtle smoke */}

            <motion.div
              animate={{
                x: [-20, 30, -20],
                y: [0, -15, 0],
                opacity: [0.02, 0.06, 0.02],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                left-[25%]
                top-1/2
                h-40
                w-72
                -translate-y-1/2
                rounded-full
                bg-black
                blur-[90px]
              "
            />


            {/* =====================================================
                CTA CONTENT
            ===================================================== */}

            <div className="relative p-5 sm:p-7 lg:p-8 xl:p-9">


              {/* LABEL */}

              <div className="mb-4 flex items-center gap-3">

                <motion.span
                  animate={{
                    rotate: [0, 8, -8, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-violet-200
                    bg-violet-50
                    text-violet-700
                    shadow-[0_5px_20px_rgba(124,58,237,0.10)]
                  "
                >
                  <Sparkles size={12} />
                </motion.span>

                <span className="text-[9px] font-black uppercase tracking-[0.28em] text-slate-600">
                  Let's create something
                </span>

              </div>


              {/* =====================================================
                  HEADING
                  REDUCED SIZE
              ===================================================== */}

              <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">

                <h2
                  className="
                    max-w-5xl
                    text-[clamp(2.2rem,5vw,5rem)]
                    font-black
                    leading-[0.84]
                    tracking-[-0.065em]
                    text-slate-950
                  "
                  style={{
                    fontFamily:
                      "Georgia, 'Times New Roman', serif",
                  }}
                >

                  HAVE AN

                  <br />

                  <span className="
                    bg-gradient-to-r
                    from-violet-700
                    via-fuchsia-600
                    to-cyan-600
                    bg-clip-text
                    text-transparent
                  ">
                    IDEA?
                  </span>

                  <br />

                  LET'S BUILD IT.

                </h2>


                {/* =================================================
                    CTA BUTTON
                ================================================= */}

                <Link
                  to="/contact"
                  className="
                    group/button
                    relative
                    flex
                    h-[68px]
                    w-[68px]
                    shrink-0
                    items-center
                    justify-center
                    self-end
                    rounded-full
                    bg-slate-950
                    text-white
                    shadow-[0_15px_40px_rgba(15,23,42,0.20)]
                    transition-all
                    duration-500
                    hover:scale-110
                    hover:bg-violet-700
                    sm:h-[76px]
                    sm:w-[76px]
                  "
                >

                  {/* Outer ring */}

                  <span
                    className="
                      absolute
                      inset-0
                      rounded-full
                      border
                      border-transparent
                      transition-all
                      duration-500
                      group-hover/button:scale-125
                      group-hover/button:border-violet-500/40
                    "
                  />

                  {/* Inner ring */}

                  <span
                    className="
                      absolute
                      inset-2
                      rounded-full
                      border
                      border-white/10
                      transition-all
                      duration-500
                      group-hover/button:border-white/30
                    "
                  />

                  <ArrowUpRight
                    size={23}
                    strokeWidth={1.6}
                    className="
                      transition-transform
                      duration-500
                      group-hover/button:rotate-45
                    "
                  />

                </Link>

              </div>


              {/* =====================================================
                  DESCRIPTION
              ===================================================== */}

              <div
                className="
                  mt-5
                  flex
                  flex-col
                  justify-between
                  gap-5
                  border-t
                  border-slate-300/80
                  pt-5
                  md:flex-row
                  md:items-center
                "
              >

                <p className="
                  max-w-xl
                  text-[13px]
                  font-semibold
                  leading-6
                  text-slate-700
                ">
                  From bold identities to digital experiences,
                  we turn ambitious ideas into memorable creative work.
                </p>


                <Link
                  to="/contact"
                  className="
                    group/start
                    flex
                    w-fit
                    items-center
                    gap-3
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[0.18em]
                    text-slate-950
                  "
                >

                  Start a conversation

                  <span
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-slate-300
                      bg-white
                      transition-all
                      duration-300
                      group-hover/start:border-slate-950
                      group-hover/start:bg-slate-950
                      group-hover/start:text-white
                    "
                  >

                    <ArrowUpRight
                      size={13}
                      className="
                        transition-transform
                        duration-300
                        group-hover/start:-translate-y-0.5
                        group-hover/start:translate-x-0.5
                      "
                    />

                  </span>

                </Link>

              </div>

            </div>

          </motion.div>

        </section>


        {/* =========================================================
            FOOTER CONTENT
        ========================================================= */}

        <div className="
          group/footer
          relative
          overflow-hidden
          border-t
          border-slate-300/80
          py-12
          sm:py-14
        ">

          {/* =====================================================
              ANIMATED SECTION SMOKE BORDER
          ===================================================== */}

          <motion.div
            animate={{
              x: ["-10%", "10%", "-10%"],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              left-[-10%]
              top-0
              h-[2px]
              w-[120%]
              bg-gradient-to-r
              from-transparent
              via-violet-400/50
              to-transparent
              blur-[3px]
            "
          />

          <motion.div
            animate={{
              x: ["10%", "-10%", "10%"],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              bottom-0
              left-[-10%]
              h-[2px]
              w-[120%]
              bg-gradient-to-r
              from-transparent
              via-cyan-400/40
              to-transparent
              blur-[3px]
            "
          />


          {/* =====================================================
              BACKGROUND WORD
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -70,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.2,
            }}
            className="
              pointer-events-none
              absolute
              left-[-2%]
              top-[18%]
              z-0
              select-none
              whitespace-nowrap
              text-[clamp(7rem,19vw,18rem)]
              font-black
              leading-none
              tracking-[-0.09em]
              text-slate-950/[0.045]
            "
            style={{
              fontFamily:
                "Georgia, 'Times New Roman', serif",
            }}
          >
            CREATIVE.
          </motion.div>


          {/* =====================================================
              FOOTER GRID
          ===================================================== */}

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1.5fr_.65fr_.8fr]">


            {/* ===================================================
                BRAND
            =================================================== */}

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
            >

              <Link
                to="/"
                className="group inline-flex items-center gap-3"
              >

                <motion.span
                  whileHover={{
                    rotate: 8,
                    scale: 1.08,
                  }}
                  className="
                    relative
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-full
                    bg-slate-950
                    text-white
                    shadow-[0_12px_30px_rgba(15,23,42,0.20)]
                  "
                >

                  <motion.span
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 0.9, 0.4],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="
                      absolute
                      h-5
                      w-5
                      rounded-full
                      bg-violet-500
                      blur-md
                    "
                  />

                  <span
                    className="relative text-lg font-black"
                    style={{
                      fontFamily:
                        "Georgia, 'Times New Roman', serif",
                    }}
                  >
                    C
                  </span>

                </motion.span>


                <span
                  className="
                    text-3xl
                    font-black
                    tracking-[-0.06em]
                    text-slate-950
                  "
                  style={{
                    fontFamily:
                      "Georgia, 'Times New Roman', serif",
                  }}
                >
                  CREATIVE
                  <span className="text-violet-700">.</span>
                </span>

              </Link>


              <p className="
                mt-5
                max-w-md
                text-sm
                font-semibold
                leading-7
                text-slate-700
              ">
                A creative studio focused on design, branding,
                motion, photography and digital experiences
                that people remember.
              </p>


              {/* EMAIL */}

              <a
               href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@creative.com"
target="_blank"
rel="noopener noreferrer"
                className="
                  group/mail
                  mt-6
                  flex
                  w-fit
                  items-center
                  gap-3
                  text-sm
                  font-bold
                  text-slate-800
                  transition-colors
                  duration-300
                  hover:text-violet-700
                "
              >

                <span
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-300
                    bg-white
                    shadow-sm
                    transition-all
                    duration-300
                    group-hover/mail:border-violet-300
                    group-hover/mail:bg-violet-50
                  "
                >
                  <Mail size={15} />
                </span>

                hello@creative.com

              </a>


              {/* LOCATION */}

              <div className="
                mt-3
                flex
                items-center
                gap-3
                text-sm
                font-bold
                text-slate-700
              ">

                <span
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-300
                    bg-white
                    shadow-sm
                  "
                >
                  <MapPin size={15} />
                </span>

                Pune, India

              </div>

            </motion.div>


            {/* ===================================================
                EXPLORE
            =================================================== */}

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
                delay: 0.1,
              }}
            >

              <div className="mb-6 flex items-center gap-2">

                <span className="
                  text-[10px]
                  font-black
                  tracking-[0.25em]
                  text-violet-700
                ">
                  01
                </span>

                <span className="
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.25em]
                  text-slate-600
                ">
                  Explore
                </span>

              </div>


              <nav className="flex flex-col gap-3.5">

                {navigation.map((item) => (

                  <Link
                    key={item.path}
                    to={item.path}
                    className="
                      group/nav
                      flex
                      w-fit
                      items-center
                      gap-2
                      text-[15px]
                      font-bold
                      text-slate-800
                      transition-all
                      duration-300
                      hover:translate-x-1
                      hover:text-slate-950
                    "
                  >

                    <span className="relative">

                      {item.label}

                      <span
                        className="
                          absolute
                          -bottom-1
                          left-0
                          h-[2px]
                          w-0
                          rounded-full
                          bg-gradient-to-r
                          from-violet-600
                          via-fuchsia-500
                          to-cyan-500
                          transition-all
                          duration-300
                          group-hover/nav:w-full
                        "
                      />

                    </span>

                    <ArrowUpRight
                      size={13}
                      className="
                        translate-y-1
                        opacity-0
                        transition-all
                        duration-300
                        group-hover/nav:-translate-y-0.5
                        group-hover/nav:translate-x-0.5
                        group-hover/nav:opacity-100
                      "
                    />

                  </Link>

                ))}

              </nav>

            </motion.div>


            {/* ===================================================
                CONNECT
            =================================================== */}

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
                delay: 0.2,
              }}
            >

              <div className="mb-6 flex items-center gap-2">

                <span className="
                  text-[10px]
                  font-black
                  tracking-[0.25em]
                  text-violet-700
                ">
                  02
                </span>

                <span className="
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.25em]
                  text-slate-600
                ">
                  Connect
                </span>

              </div>


              <div className="flex flex-col gap-3">

                {socials.map((social) => {

                  const Icon = social.icon;

                  return (

                    <motion.a
                      key={social.label}
                      href="#"
                      whileHover={{
                        x: 6,
                      }}
                      className={`
                        group/social
                        relative
                        flex
                        w-fit
                        items-center
                        gap-3
                        overflow-hidden
                        rounded-2xl
                        border
                        border-transparent
                        px-3
                        py-2.5
                        text-[15px]
                        font-bold
                        text-slate-800
                        transition-all
                        duration-500
                        hover:border-slate-300
                        hover:bg-white/60
                        hover:text-slate-950
                        ${social.glow}
                      `}
                    >

                      {/* =========================================
                          BLACK SMOKE
                      ========================================= */}

                      <span
                        className="
                          pointer-events-none
                          absolute
                          -left-12
                          -top-10
                          h-28
                          w-28
                          rounded-full
                          bg-black/[0.12]
                          opacity-0
                          blur-3xl
                          transition-all
                          duration-700
                          group-hover/social:left-0
                          group-hover/social:top-0
                          group-hover/social:opacity-100
                        "
                      />

                      <span
                        className="
                          pointer-events-none
                          absolute
                          -right-12
                          -bottom-12
                          h-28
                          w-28
                          rounded-full
                          bg-slate-950/[0.11]
                          opacity-0
                          blur-3xl
                          transition-all
                          duration-1000
                          group-hover/social:right-0
                          group-hover/social:bottom-0
                          group-hover/social:opacity-100
                        "
                      />

                      <span
                        className="
                          pointer-events-none
                          absolute
                          left-1/2
                          top-1/2
                          h-24
                          w-40
                          -translate-x-1/2
                          -translate-y-1/2
                          rounded-full
                          bg-black/[0.08]
                          opacity-0
                          blur-3xl
                          transition-all
                          duration-700
                          group-hover/social:scale-[1.7]
                          group-hover/social:opacity-100
                        "
                      />


                      {/* =========================================
                          COLORED ICON
                      ========================================= */}

                      <span
                        className={`
                          relative
                          z-10
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-slate-300
                          bg-white
                          shadow-sm
                          transition-all
                          duration-500
                          group-hover/social:scale-105
                          group-hover/social:border-slate-400
                          ${social.color}
                        `}
                      >

                        <Icon size={17} />

                      </span>


                      {/* NAME */}

                      <span className="relative z-10">
                        {social.label}
                      </span>


                      {/* ARROW */}

                      <ArrowUpRight
                        size={13}
                        className="
                          relative
                          z-10
                          translate-y-1
                          opacity-0
                          transition-all
                          duration-300
                          group-hover/social:-translate-y-0.5
                          group-hover/social:translate-x-0.5
                          group-hover/social:opacity-100
                        "
                      />

                    </motion.a>

                  );

                })}

              </div>

            </motion.div>

          </div>

        </div>


        {/* =========================================================
            BOTTOM BAR
        ========================================================= */}

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
            duration: 0.7,
          }}
          className="
            relative
            flex
            flex-col
            justify-between
            gap-5
            border-t
            border-slate-300/80
            py-6
            text-[10px]
            font-bold
            uppercase
            tracking-[0.16em]
            text-slate-600
            sm:flex-row
            sm:items-center
          "
        >

          {/* Bottom smoke */}

          <motion.div
            animate={{
              x: [-100, 100, -100],
              opacity: [0.02, 0.07, 0.02],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              left-1/4
              top-0
              h-20
              w-96
              rounded-full
              bg-black
              blur-[70px]
            "
          />

          <p className="relative z-10">
            © 2026 Creative Studio. All rights reserved.
          </p>

          <div className="relative z-10 flex flex-wrap gap-x-6 gap-y-2">

            <span>
              Designed with intention.
            </span>

            <span>
              Built for impact.
            </span>

          </div>

        </motion.div>

      </div>

    </footer>
  );
}

export default Footer;
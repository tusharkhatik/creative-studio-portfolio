import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { services } from "../data/services";

/* =========================================================
   SERVICE VISUALS
========================================================= */

const serviceVisuals = {
  "Video Editing":
    "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1400&q=85",

  "Photo Editing":
    "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1400&q=85",

  "Logo Design":
    "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1400&q=85",

  "Brand Identity":
    "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=1400&q=85",

  "Social Media Design":
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1400&q=85",

  "Thumbnail Design":
    "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=1400&q=85",

  "Photo Shoot":
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",

  "Model Shoot":
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=85",

  "Video Shoot":
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1400&q=85",

  "Product Photography":
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=85",

  "Event Photography":
    "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1400&q=85",

  "Corporate Photography":
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85",
};

/* =========================================================
   SERVICE COLORS
========================================================= */

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

  "Photo Shoot": {
    glow: "bg-amber-500/20",
    text: "text-amber-300",
    dot: "bg-amber-400",
    border: "border-amber-400/20",
  },

  "Model Shoot": {
    glow: "bg-rose-500/20",
    text: "text-rose-300",
    dot: "bg-rose-400",
    border: "border-rose-400/20",
  },

  "Video Shoot": {
    glow: "bg-emerald-500/20",
    text: "text-emerald-300",
    dot: "bg-emerald-400",
    border: "border-emerald-400/20",
  },

  "Product Photography": {
    glow: "bg-sky-500/20",
    text: "text-sky-300",
    dot: "bg-sky-400",
    border: "border-sky-400/20",
  },

  "Event Photography": {
    glow: "bg-yellow-500/20",
    text: "text-yellow-300",
    dot: "bg-yellow-400",
    border: "border-yellow-400/20",
  },

  "Corporate Photography": {
    glow: "bg-indigo-500/20",
    text: "text-indigo-300",
    dot: "bg-indigo-400",
    border: "border-indigo-400/20",
  },
};

/* =========================================================
   FALLBACK COLOR
========================================================= */

const defaultColor = {
  glow: "bg-white/10",
  text: "text-white",
  dot: "bg-white",
  border: "border-white/10",
};

/* =========================================================
   COMPONENT
========================================================= */

function Services() {
  const [activeService, setActiveService] = useState(services[0]);

  const serviceRefs = useRef({});
  const servicesAreaRef = useRef(null);
  const previewRef = useRef(null);

  const [previewTop, setPreviewTop] = useState(0);

  const activeColor =
    serviceColors[activeService?.title] || defaultColor;

  /* =========================================================
     CALCULATE PREVIEW POSITION
  ========================================================== */

  const updatePreviewPosition = () => {
    if (window.innerWidth < 1024) {
      return;
    }

    const activeRow =
      serviceRefs.current[activeService?.id];

    const area = servicesAreaRef.current;
    const preview = previewRef.current;

    if (!activeRow || !area || !preview) {
      return;
    }

    const areaRect =
      area.getBoundingClientRect();

    const rowRect =
      activeRow.getBoundingClientRect();

    /*
     * Center of active service row
     * relative to services area.
     */

    const rowCenter =
      rowRect.top -
      areaRect.top +
      rowRect.height / 2;

    /*
     * Preview actual height.
     */

    const previewHeight =
      preview.offsetHeight;

    /*
     * Place preview center
     * exactly at row center.
     */

    let newTop =
      rowCenter -
      previewHeight / 2;

    /*
     * Keep preview inside area.
     */

    const maxTop =
      Math.max(
        0,
        area.scrollHeight -
          previewHeight
      );

    newTop = Math.max(
      0,
      Math.min(newTop, maxTop)
    );

    setPreviewTop(newTop);
  };

  /* =========================================================
     ACTIVE SERVICE CHANGE
  ========================================================== */

  useLayoutEffect(() => {
    updatePreviewPosition();

    const timer = setTimeout(() => {
      updatePreviewPosition();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [activeService]);

  /* =========================================================
     RESIZE
  ========================================================== */

  useEffect(() => {
    const handleResize = () => {
      updatePreviewPosition();
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, [activeService]);

  /* =========================================================
     IMAGE / WINDOW LOAD
  ========================================================== */

  useEffect(() => {
    const handleLoad = () => {
      updatePreviewPosition();
    };

    window.addEventListener(
      "load",
      handleLoad
    );

    return () => {
      window.removeEventListener(
        "load",
        handleLoad
      );
    };
  }, [activeService]);

  /* =========================================================
     RENDER
  ========================================================== */

  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-[#08080b]
        px-5
        py-20
        sm:px-6
        sm:py-24
        lg:px-10
        lg:py-24
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            -left-32
            top-20
            h-[400px]
            w-[400px]
            rounded-full
            bg-violet-600/[0.07]
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            -right-32
            top-[35%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-cyan-500/[0.05]
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            bottom-[-120px]
            left-[35%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-fuchsia-500/[0.04]
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.018]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-[1450px]">

        {/* ===================================================
            HEADER
        ==================================================== */}

        <div
          className="
            grid
            gap-8
            lg:grid-cols-[1.1fr_0.75fr]
            lg:items-end
          "
        >

          <div>

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
                mb-5
                flex
                items-center
                gap-3
              "
            >

              <span
                className="
                  h-px
                  w-8
                  bg-gradient-to-r
                  from-cyan-400
                  to-violet-500
                "
              />

              <span
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-white/40
                "
              >
                What we create
              </span>

              <Sparkles
                size={13}
                className="text-violet-300/60"
              />

            </motion.div>

            <motion.h2
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
                max-w-4xl
                text-[clamp(2.7rem,5.5vw,6rem)]
                font-bold
                leading-[0.88]
                tracking-[-0.065em]
                text-white
              "
            >
              WE CREATE
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-violet-300
                  via-fuchsia-300
                  to-cyan-300
                  bg-clip-text
                  text-transparent
                "
              >
                VISUAL IMPACT.
              </span>

            </motion.h2>

          </div>

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
              delay: 0.1,
            }}
            className="
              max-w-md
              lg:ml-auto
            "
          >

            <p
              className="
                text-sm
                leading-6
                text-white/45
                md:text-base
              "
            >
              From a single visual to a complete
              brand identity, we turn ideas into
              creative work designed to be noticed,
              remembered, and experienced.
            </p>

            <div
              className="
                mt-4
                flex
                items-center
                gap-3
              "
            >

              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-cyan-400
                  shadow-[0_0_12px_rgba(34,211,238,0.8)]
                "
              />

              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.25em]
                  text-white/25
                "
              >
                Creative services ·{" "}
                {String(services.length).padStart(
                  2,
                  "0"
                )}
              </span>

            </div>

          </motion.div>

        </div>

        {/* ===================================================
            INTERACTIVE SERVICES AREA
        ==================================================== */}

        <div
          ref={servicesAreaRef}
          className="
            relative
            mt-12
            lg:mt-14
            lg:grid
            lg:grid-cols-[1fr_1fr]
            lg:gap-12
            lg:items-start
          "
        >

          {/* =================================================
              LEFT SERVICES LIST
          ================================================== */}

          <div
            className="
              w-full
              border-t
              border-white/10
            "
          >

            {services.map(
              (service, index) => {

                const isActive =
                  activeService.id ===
                  service.id;

                const color =
                  serviceColors[
                    service.title
                  ] || defaultColor;

                return (
                  <motion.button
                    key={service.id}
                    ref={(element) => {
                      if (element) {
                        serviceRefs.current[
                          service.id
                        ] = element;
                      }
                    }}
                    type="button"
                    onMouseEnter={() =>
                      setActiveService(
                        service
                      )
                    }
                    onClick={() =>
                      setActiveService(
                        service
                      )
                    }
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: "-40px",
                    }}
                    transition={{
                      duration: 0.4,
                      delay:
                        index * 0.035,
                    }}
                    className="
                      group
                      relative
                      flex
                      min-h-[68px]
                      w-full
                      items-center
                      overflow-hidden
                      border-b
                      border-white/10
                      py-4
                      text-left
                      sm:min-h-[72px]
                      sm:py-5
                    "
                  >

                    {/* ACTIVE GLOW */}

                    <motion.div
                      initial={false}
                      animate={{
                        opacity:
                          isActive ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className={`
                        pointer-events-none
                        absolute
                        inset-0
                        -z-10
                        ${color.glow}
                        blur-3xl
                      `}
                    />

                    {/* NUMBER */}

                    <span
                      className={`
                        w-9
                        shrink-0
                        text-[10px]
                        transition-colors
                        duration-300
                        sm:w-11
                        ${
                          isActive
                            ? color.text
                            : "text-white/20"
                        }
                      `}
                    >
                      {String(
                        index + 1
                      ).padStart(2, "0")}
                    </span>

                    {/* ACTIVE LINE */}

                    <motion.span
                      initial={false}
                      animate={{
                        width:
                          isActive
                            ? 18
                            : 0,
                        opacity:
                          isActive
                            ? 1
                            : 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className={`
                        mr-3
                        h-px
                        shrink-0
                        ${color.dot}
                      `}
                    />

                    {/* TITLE */}

                    <span
                      className={`
                        min-w-0
                        text-lg
                        font-medium
                        tracking-tight
                        transition-all
                        duration-300
                        sm:text-xl
                        lg:text-[25px]
                        ${
                          isActive
                            ? "translate-x-1 text-white"
                            : "text-white/35 group-hover:text-white/70"
                        }
                      `}
                    >
                      {service.title}
                    </span>

                    {/* ARROW */}

                    <ArrowUpRight
                      size={19}
                      className={`
                        ml-auto
                        shrink-0
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? `-translate-y-0.5 ${color.text}`
                            : "text-white/15 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/60"
                        }
                      `}
                    />

                  </motion.button>
                );
              }
            )}

          </div>

          {/* =================================================
              RIGHT DYNAMIC PREVIEW
          ================================================== */}

          <motion.div
            ref={previewRef}
            className="
              absolute
              left-[calc(50%+1.5rem)]
              top-0
              hidden
              w-[calc(50%-1.5rem)]
              lg:block
            "
            animate={{
              top: previewTop,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 30,
              mass: 0.7,
            }}
          >

            <div
              className={`
                relative
                h-[360px]
                w-full
                overflow-hidden
                rounded-[1.5rem]
                border
                ${activeColor.border}
                bg-[#101014]
                shadow-2xl
                transition-colors
                duration-300
              `}
            >

              {/* =================================================
                  GLOW
              ================================================== */}

              <motion.div
                key={`glow-${activeService.id}`}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 0.9,
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                }}
                className={`
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  z-10
                  h-64
                  w-64
                  rounded-full
                  ${activeColor.glow}
                  blur-[90px]
                `}
              />

              {/* =================================================
                  IMAGE
              ================================================== */}

              <AnimatePresence mode="wait">

                <motion.img
                  key={activeService.id}
                  src={
                    serviceVisuals[
                      activeService.title
                    ] ||
                    serviceVisuals[
                      "Logo Design"
                    ]
                  }
                  alt={activeService.title}
                  initial={{
                    opacity: 0,
                    scale: 1.08,
                    x: 15,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1.03,
                    x: -15,
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
                  }}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                  "
                />

              </AnimatePresence>

              {/* =================================================
                  COLOR OVERLAY
              ================================================== */}

              <motion.div
                key={`overlay-${activeService.id}`}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 0.45,
                }}
                transition={{
                  duration: 0.4,
                }}
                className={`
                  absolute
                  inset-0
                  ${activeColor.glow}
                  mix-blend-screen
                `}
              />

              {/* =================================================
                  DARK GRADIENT
              ================================================== */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/35
                  to-transparent
                "
              />

              {/* =================================================
                  TOP INFO
              ================================================== */}

              <div
                className="
                  absolute
                  left-5
                  right-5
                  top-5
                  flex
                  items-center
                  justify-between
                "
              >

                <div
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-black/30
                    px-3
                    py-1.5
                    backdrop-blur-xl
                  "
                >

                  <span
                    className={`
                      text-[8px]
                      uppercase
                      tracking-[0.2em]
                      ${activeColor.text}
                    `}
                  >
                    Creative Service
                  </span>

                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/10
                    bg-black/30
                    px-3
                    py-1.5
                    backdrop-blur-xl
                  "
                >

                  <span
                    className={`
                      h-1.5
                      w-1.5
                      rounded-full
                      ${activeColor.dot}
                    `}
                  />

                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.2em]
                      text-white/55
                    "
                  >
                    {String(
                      activeService.id
                    ).padStart(2, "0")}{" "}
                    /{" "}
                    {String(
                      services.length
                    ).padStart(2, "0")}
                  </span>

                </div>

              </div>

              {/* =================================================
                  CONTENT
              ================================================== */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-6
                  sm:p-7
                "
              >

                <AnimatePresence mode="wait">

                  <motion.div
                    key={activeService.id}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -10,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >

                    <div
                      className="
                        mb-2
                        flex
                        items-center
                        gap-2
                      "
                    >

                      <span
                        className={`
                          h-1.5
                          w-1.5
                          rounded-full
                          ${activeColor.dot}
                        `}
                      />

                      <p
                        className={`
                          text-[8px]
                          uppercase
                          tracking-[0.25em]
                          ${activeColor.text}
                        `}
                      >
                        Service{" "}
                        {String(
                          activeService.id
                        ).padStart(
                          2,
                          "0"
                        )}
                      </p>

                    </div>

                    <h3
                      className="
                        text-2xl
                        font-semibold
                        tracking-[-0.04em]
                        text-white
                        sm:text-3xl
                      "
                    >
                      {activeService.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        max-w-lg
                        text-xs
                        leading-5
                        text-white/55
                        sm:text-sm
                        sm:leading-6
                      "
                    >
                      {activeService.description}
                    </p>

                    <Link
                      to="/work"
                      className="
                        group
                        mt-4
                        inline-flex
                        items-center
                        gap-3
                        text-xs
                        font-medium
                        text-white
                        sm:text-sm
                      "
                    >
                      See related work

                      <span
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/15
                          transition-all
                          duration-300
                          group-hover:border-white/30
                          group-hover:bg-white
                          group-hover:text-black
                        "
                      >
                        <ArrowUpRight
                          size={14}
                        />
                      </span>

                    </Link>

                  </motion.div>

                </AnimatePresence>

              </div>

            </div>

          </motion.div>

        </div>

        {/* ===================================================
            MOBILE PREVIEW
        ==================================================== */}

        <div
          className={`
            mt-6
            overflow-hidden
            rounded-[1.4rem]
            border
            ${activeColor.border}
            bg-[#101014]
            lg:hidden
          `}
        >

          <div
            className="
              relative
              aspect-[16/10]
            "
          >

            <AnimatePresence mode="wait">

              <motion.img
                key={activeService.id}
                src={
                  serviceVisuals[
                    activeService.title
                  ] ||
                  serviceVisuals[
                    "Logo Design"
                  ]
                }
                alt={activeService.title}
                initial={{
                  opacity: 0,
                  scale: 1.06,
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
                  duration: 0.45,
                }}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                "
              />

            </AnimatePresence>

            <div
              className={`
                absolute
                inset-0
                ${activeColor.glow}
                mix-blend-screen
              `}
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black
                via-black/25
                to-transparent
              "
            />

            {/* MOBILE NUMBER */}

            <div
              className="
                absolute
                left-4
                top-4
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-black/30
                  px-3
                  py-1.5
                  backdrop-blur-xl
                "
              >

                <span
                  className={`
                    h-1.5
                    w-1.5
                    rounded-full
                    ${activeColor.dot}
                  `}
                />

                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.18em]
                    text-white/60
                  "
                >
                  {String(
                    activeService.id
                  ).padStart(2, "0")}{" "}
                  /{" "}
                  {String(
                    services.length
                  ).padStart(2, "0")}
                </span>

              </div>

            </div>

            {/* MOBILE CONTENT */}

            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                p-5
              "
            >

              <p
                className={`
                  text-[8px]
                  uppercase
                  tracking-[0.22em]
                  ${activeColor.text}
                `}
              >
                Creative Service
              </p>

              <h3
                className="
                  mt-1
                  text-2xl
                  font-semibold
                  tracking-tight
                  text-white
                "
              >
                {activeService.title}
              </h3>

              <p
                className="
                  mt-1
                  max-w-xl
                  text-[11px]
                  leading-5
                  text-white/55
                "
              >
                {activeService.description}
              </p>

            </div>

          </div>

        </div>

        {/* ===================================================
            BOTTOM STATEMENT
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
            duration: 0.6,
          }}
          className="
            mt-10
            border-t
            border-white/10
            pt-6
            lg:mt-12
          "
        >

          <div
            className="
              flex
              flex-col
              justify-between
              gap-5
              sm:flex-row
              sm:items-center
            "
          >

            <div>

              <p
                className="
                  max-w-xl
                  text-xs
                  leading-5
                  text-white/35
                  sm:text-sm
                  sm:leading-6
                "
              >
                Don't see exactly what you need?
                Tell us what you're trying to
                create and we'll find the right
                creative direction.
              </p>

              <div
                className="
                  mt-3
                  flex
                  items-center
                  gap-3
                "
              >

                <span
                  className="
                    h-px
                    w-6
                    bg-gradient-to-r
                    from-violet-400
                    to-cyan-400
                  "
                />

                <span
                  className="
                    text-[7px]
                    uppercase
                    tracking-[0.22em]
                    text-white/20
                  "
                >
                  Built around your idea
                </span>

              </div>

            </div>

            <Link
              to="/contact"
              className="
                group
                inline-flex
                items-center
                gap-3
                text-sm
                font-semibold
                text-white
              "
            >

              Let's talk

              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  transition-all
                  duration-300
                  group-hover:border-white/30
                  group-hover:bg-white
                  group-hover:text-black
                "
              >

                <ArrowUpRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />

              </span>

            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Services;
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  ArrowUpRight,
  Mail,
  MapPin,
  Sparkles,
  Palette,
  Video,
  Phone,
  MessageCircle,
  Clock3,
  ChevronDown,
  Send,
  Camera,
  Users,
  Clapperboard,
  ShoppingBag,
  Building2,
  Globe,
  CheckCircle2,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaGithub,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

/* =========================================================
   CONTACT INFORMATION
========================================================= */

const contactInfo = {
  phone: "+91 00000 00000",
  whatsapp: "910000000000",
  email: "hello@creativestudio.com",
  website: "www.creativestudio.com",
  location: "Pune, India",

  instagram: {
    handle: "@yourhandle",
    url: "https://instagram.com/yourhandle",
  },

  youtube: {
    handle: "@yourchannel",
    url: "https://www.youtube.com/@yourchannel",
  },

  linkedin: {
    handle: "yourname",
    url: "https://www.linkedin.com/in/yourname/",
  },

  facebook: {
    handle: "yourpage",
    url: "https://facebook.com/yourpage",
  },

  github: {
    handle: "yourprofile",
    url: "https://github.com/yourprofile",
  },
};

/* =========================================================
   SERVICES
========================================================= */

const services = [
  "Video Editing",
  "Photo Editing",
  "Logo Design",
  "Brand Identity",
  "Social Media Design",
  "Thumbnail Design",
  "Motion Design",
  "Photo Shoot",
  "Model Shoot",
  "Video Shoot",
  "Product Photography",
  "Event Photography",
  "Corporate Photography",
  "Other",
];

/* =========================================================
   BUDGETS
========================================================= */

const budgets = [
  "₹5K – ₹15K",
  "₹15K – ₹30K",
  "₹30K – ₹50K",
  "₹50K – ₹1L",
  "₹1L+",
  "Let's discuss",
];

/* =========================================================
   TIMELINES
========================================================= */

const timelines = [
  "ASAP",
  "1–2 weeks",
  "2–4 weeks",
  "1–2 months",
  "Flexible",
];

/* =========================================================
   SERVICE PREVIEW
========================================================= */

const servicePreview = [
  {
    icon: Palette,
    title: "Brand & Visuals",
    description:
      "Complete visual identities, logos, brand systems and creative direction.",
    color: "violet",
    number: "01",
  },
  {
    icon: Video,
    title: "Video & Motion",
    description:
      "Editing, motion graphics, reels, campaigns and cinematic content.",
    color: "rose",
    number: "02",
  },
  {
    icon: Camera,
    title: "Photo & Product",
    description:
      "Professional photography for products, brands, campaigns and social media.",
    color: "amber",
    number: "03",
  },
  {
    icon: Users,
    title: "Model & People",
    description:
      "Model shoots, portraits, fashion campaigns and lifestyle content.",
    color: "cyan",
    number: "04",
  },
  {
    icon: Clapperboard,
    title: "Video Production",
    description:
      "Concept-to-production video shoots for brands, creators and businesses.",
    color: "emerald",
    number: "05",
  },
  {
    icon: ShoppingBag,
    title: "Commercial Content",
    description:
      "Creative assets designed to showcase products and drive attention.",
    color: "orange",
    number: "06",
  },
  {
    icon: Building2,
    title: "Corporate",
    description:
      "Professional corporate photography and visual communication.",
    color: "blue",
    number: "07",
  },
];

/* =========================================================
   ANIMATIONS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

/* =========================================================
   CONTACT CARD
========================================================= */

function ContactCard({
  icon: Icon,
  label,
  value,
  description,
  href,
  primary = false,
  theme = "blue",
}) {
  const themes = {
    blue: {
      icon: "bg-blue-100 text-blue-600",
      glow: "bg-blue-400/20",
      border: "hover:border-blue-300",
      hover: "group-hover:bg-blue-600",
      label: "text-blue-600",
      shadow: "hover:shadow-blue-100",
    },

    green: {
      icon: "bg-emerald-100 text-emerald-600",
      glow: "bg-emerald-400/20",
      border: "hover:border-emerald-300",
      hover: "group-hover:bg-emerald-600",
      label: "text-emerald-600",
      shadow: "hover:shadow-emerald-100",
    },

    violet: {
      icon: "bg-violet-100 text-violet-600",
      glow: "bg-violet-400/20",
      border: "hover:border-violet-300",
      hover: "group-hover:bg-violet-600",
      label: "text-violet-600",
      shadow: "hover:shadow-violet-100",
    },
  };

  const currentTheme = themes[theme];

  const content = (
    <>
      <div
        className={`
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-48
          w-48
          rounded-full
          ${currentTheme.glow}
          opacity-0
          blur-3xl
          transition-all
          duration-700
          group-hover:scale-150
          group-hover:opacity-100
        `}
      />

      <div className="relative flex items-start justify-between">
        <div
          className={`
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            border
            border-white
            ${currentTheme.icon}
            shadow-sm
            transition-all
            duration-500
            ${currentTheme.hover}
            group-hover:text-white
            group-hover:shadow-lg
          `}
        >
          <Icon size={21} strokeWidth={1.8} />
        </div>

        <ArrowUpRight
          size={19}
          className="
            text-slate-300
            transition
            duration-300
            group-hover:-translate-y-1
            group-hover:translate-x-1
            group-hover:text-slate-800
          "
        />
      </div>

      <div className="relative mt-7">
        <p
          className={`
            text-[10px]
            font-black
            uppercase
            tracking-[0.25em]
            ${currentTheme.label}
          `}
        >
          {label}
        </p>

        <p className="mt-2 break-all text-lg font-black tracking-tight text-slate-950">
          {value}
        </p>

        <p className="mt-2 text-sm font-medium leading-6 text-slate-500">
          {description}
        </p>
      </div>

      <div className="relative mt-6 flex items-center gap-2 border-t border-slate-100 pt-5">
        <span
          className={`
            h-1.5
            w-1.5
            rounded-full
            ${currentTheme.icon.split(" ")[0]}
          `}
        />

        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
          Available channel
        </span>
      </div>
    </>
  );

  if (!href) {
    return (
      <div
        className={`
          group
          relative
          overflow-hidden
          rounded-[2rem]
          border
          border-slate-200
          bg-white
          p-6
          shadow-sm
          transition-all
          duration-500
          ${currentTheme.border}
          ${currentTheme.shadow}
          hover:-translate-y-2
          hover:shadow-2xl
        `}
      >
        {content}
      </div>
    );
  }

  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      whileHover={{ y: -7 }}
      transition={{ duration: 0.25 }}
      className={`
        group
        relative
        block
        overflow-hidden
        rounded-[2rem]
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-500
        ${currentTheme.border}
        ${currentTheme.shadow}
        hover:shadow-2xl
      `}
    >
      {content}
    </motion.a>
  );
}

/* =========================================================
   SOCIAL CARD
========================================================= */

function SocialCard({
  href,
  icon: Icon,
  label,
  handle,
}) {
  const socialStyles = {
    Instagram: {
      icon: "text-pink-500",
      bg: "bg-pink-50",
      border: "border-pink-100",
      hover:
        "group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:via-pink-500 group-hover:to-orange-400",
    },

    YouTube: {
      icon: "text-red-600",
      bg: "bg-red-50",
      border: "border-red-100",
      hover: "group-hover:bg-red-600",
    },

    LinkedIn: {
      icon: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-100",
      hover: "group-hover:bg-blue-600",
    },

    Facebook: {
      icon: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-100",
      hover: "group-hover:bg-blue-600",
    },

    GitHub: {
      icon: "text-slate-900",
      bg: "bg-slate-100",
      border: "border-slate-200",
      hover: "group-hover:bg-slate-950",
    },

    WhatsApp: {
      icon: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-100",
      hover: "group-hover:bg-emerald-500",
    },
  };

  const style = socialStyles[label] || {
    icon: "text-slate-600",
    bg: "bg-slate-50",
    border: "border-slate-200",
    hover: "group-hover:bg-slate-900",
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        y: -5,
        scale: 1.015,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className="
        group
        flex
        items-center
        gap-4
        rounded-2xl
        border
        border-slate-200
        bg-white
        px-4
        py-4
        shadow-sm
        transition-all
        duration-300
        hover:border-slate-300
        hover:shadow-xl
      "
    >
      <div
        className={`
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-xl
          border
          ${style.border}
          ${style.bg}
          ${style.icon}
          transition-all
          duration-300
          ${style.hover}
          group-hover:border-transparent
          group-hover:text-white
        `}
      >
        <Icon size={19} />
      </div>

      <div className="min-w-0">
        <p className="text-sm font-black text-slate-950">
          {label}
        </p>

        <p className="mt-0.5 truncate text-xs font-medium text-slate-500">
          {handle}
        </p>
      </div>

      <ArrowUpRight
        size={16}
        className="
          ml-auto
          shrink-0
          text-slate-300
          transition
          duration-300
          group-hover:-translate-y-0.5
          group-hover:translate-x-0.5
          group-hover:text-slate-900
        "
      />
    </motion.a>
  );
}

/* =========================================================
   MAIN CONTACT
========================================================= */

function Contact() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });

  /* =======================================================
     FORM CHANGE
  ======================================================= */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  /* =======================================================
     FORM SUBMIT
  ======================================================= */

  const handleSubmit = (event) => {
    event.preventDefault();

    const whatsappMessage = `
Hi Creative Studio,

I would like to discuss a project.

Name: ${formData.name}
Email: ${formData.email}

Service: ${formData.service}
Budget: ${formData.budget || "Not specified"}
Timeline: ${formData.timeline || "Not specified"}

Project details:
${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/${
      contactInfo.whatsapp
    }?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
  };

  /* =======================================================
     RESET FORM
  ======================================================= */

  const resetForm = () => {
    setSubmitted(false);

    setFormData({
      name: "",
      email: "",
      service: "",
      budget: "",
      timeline: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
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
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -35, 0],
            scale: [1, 1.12, 1],
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
            bg-violet-300/35
            blur-[150px]
          "
        />

        <motion.div
          animate={{
            x: [0, -45, 0],
            y: [0, 35, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-64
            top-[15%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-cyan-300/30
            blur-[150px]
          "
        />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[-220px]
            left-[30%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-pink-300/25
            blur-[140px]
          "
        />

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
            HERO
        ==================================================== */}

        <div
          className="
            grid
            gap-14
            lg:grid-cols-[1.1fr_0.9fr]
            lg:items-end
          "
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
          >
            <div className="mb-8 flex items-center gap-3">
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
                Contact / Start a project
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

            <h1
              className="
                max-w-6xl
                text-[clamp(3.4rem,7.5vw,8rem)]
                font-black
                leading-[0.82]
                tracking-[-0.085em]
                text-slate-950
              "
            >
              LET'S MAKE
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
                SOMETHING
              </span>

              <br />

              MEMORABLE.
            </h1>

            <div className="mt-9 flex flex-wrap gap-2">
              {[
                "Branding",
                "Photography",
                "Video",
                "Motion",
                "Creative",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full
                    border
                    border-slate-200
                    bg-white/70
                    px-4
                    py-2
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-slate-500
                    backdrop-blur
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              delay: 0.15,
            }}
            variants={fadeUp}
            className="
              relative
              max-w-md
              lg:ml-auto
            "
          >
            <div
              className="
                absolute
                -left-8
                -top-8
                h-28
                w-28
                rounded-full
                bg-violet-300/30
                blur-3xl
              "
            />

            <div
              className="
                relative
                rounded-[2rem]
                border
                border-white
                bg-white/70
                p-7
                shadow-xl
                shadow-slate-200/40
                backdrop-blur-xl
              "
            >
              <div
                className="
                  mb-7
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
                  shadow-violet-300/40
                "
              >
                <Sparkles
                  size={21}
                  strokeWidth={1.8}
                />
              </div>

              <p
                className="
                  text-base
                  font-semibold
                  leading-7
                  text-slate-800
                  sm:text-lg
                  sm:leading-8
                "
              >
                Have an idea, a brand, a campaign,
                a photoshoot or simply something you
                want to make better?
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  font-medium
                  leading-6
                  text-slate-500
                "
              >
                Tell us about it. We'll take it from there.
              </p>

              {/* <div
                className="
                  mt-3
                  flex
                  items-center
                  gap-2
                  border-t
                  border-slate-50
                  pt-3
                "
              > */}
                {/* <span className="relative flex h-3 w-3">
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-100/10" />

                  <span className="relative h-3 w-3 rounded-full bg-emerald-200" />
                </span>

                <span
                  className="
                    text-[4px]
                    font-black
                    uppercase
                    tracking-[0.2em]
                    text-slate-500
                  "
                >
                  Available for selected projects
                </span> */}
              {/* </div> */}
            </div>
          </motion.div>
        </div>

        {/* ===================================================
            DIRECT CONTACT
        ==================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={fadeUp}
          className="mt-20 sm:mt-24"
        >
          <div
            className="
              mb-7
              flex
              flex-col
              gap-3
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div className="flex items-center gap-3">
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-violet-500
                "
              />

              <p
                className="
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.3em]
                  text-slate-500
                "
              >
                Talk to us directly
              </p>
            </div>

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-slate-400
              "
            >
              Choose your preferred channel
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <ContactCard
              icon={Phone}
              label="Call us"
              value={contactInfo.phone}
              description="Prefer a direct conversation?"
              href={`tel:${contactInfo.phone.replace(
                /\s/g,
                ""
              )}`}
              theme="blue"
            />

            <ContactCard
              icon={FaWhatsapp}
              label="WhatsApp"
              value="Start a conversation"
              description="Quick questions, ideas & project enquiries"
              href={`https://wa.me/${contactInfo.whatsapp}`}
              primary
              theme="green"
            />

            <ContactCard
              icon={Mail}
              label="Email us"
              value={contactInfo.email}
              description="For project details & collaborations"
              href={`mailto:${contactInfo.email}`}
              theme="violet"
            />
          </div>
        </motion.div>

        {/* ===================================================
            INFO STRIP
        ==================================================== */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="mt-5 grid gap-4 sm:grid-cols-3"
        >
          <motion.div
            variants={fadeUp}
            whileHover={{
              y: -4,
            }}
            className="
              group
              rounded-2xl
              border
              border-blue-100
              bg-gradient-to-br
              from-blue-50
              to-white
              p-5
              shadow-sm
              transition-all
              hover:shadow-lg
            "
          >
            <div className="flex items-center gap-4">
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-100
                  text-blue-600
                "
              >
                <MapPin size={18} />
              </div>

              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.25em] text-blue-400">
                  Based in
                </p>

                <p className="mt-1 text-sm font-bold text-slate-800">
                  {contactInfo.location}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{
              y: -4,
            }}
            className="
              group
              rounded-2xl
              border
              border-violet-100
              bg-gradient-to-br
              from-violet-50
              to-white
              p-5
              shadow-sm
              transition-all
              hover:shadow-lg
            "
          >
            <div className="flex items-center gap-4">
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-violet-100
                  text-violet-600
                "
              >
                <Globe size={18} />
              </div>

              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.25em] text-violet-400">
                  Website
                </p>

                <p className="mt-1 text-sm font-bold text-slate-800">
                  {contactInfo.website}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{
              y: -4,
            }}
            className="
              group
              rounded-2xl
              border
              border-emerald-200
              bg-gradient-to-br
              from-emerald-50
              to-white
              p-5
              shadow-sm
              transition-all
              hover:shadow-lg
            "
          >
            <div className="flex items-center gap-4">
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-emerald-100
                  text-emerald-600
                "
              >
                <Clock3 size={18} />
              </div>

              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.25em] text-emerald-500">
                  Availability
                </p>

                <p className="mt-1 text-sm font-bold text-emerald-700">
                  Selected projects
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ===================================================
            SERVICES
        ==================================================== */}

        <section className="mt-28 sm:mt-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={fadeUp}
            className="
              mb-11
              flex
              flex-col
              justify-between
              gap-7
              sm:flex-row
              sm:items-end
            "
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-fuchsia-500" />

                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
                  What can we create?
                </p>
              </div>

              <h2
                className="
                  mt-4
                  max-w-3xl
                  text-3xl
                  font-black
                  tracking-[-0.06em]
                  text-slate-950
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                From a rough idea{" "}
                <span
                  className="
                    bg-gradient-to-r
                    from-violet-500
                    to-cyan-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  to the final detail.
                </span>
              </h2>
            </div>

            <p
              className="
                max-w-sm
                text-sm
                font-medium
                leading-6
                text-slate-500
              "
            >
              Don't worry if you don't know exactly
              what you need. We can figure that out
              together.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="
              grid
              gap-4
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {servicePreview.map((item) => {
              const Icon = item.icon;

              const colors = {
                violet: {
                  icon: "bg-violet-100 text-violet-600",
                  hover: "group-hover:bg-violet-600",
                  border: "group-hover:border-violet-300",
                  glow: "bg-violet-400/20",
                  text: "text-violet-600",
                },

                rose: {
                  icon: "bg-rose-100 text-rose-600",
                  hover: "group-hover:bg-rose-600",
                  border: "group-hover:border-rose-300",
                  glow: "bg-rose-400/20",
                  text: "text-rose-600",
                },

                amber: {
                  icon: "bg-amber-100 text-amber-600",
                  hover: "group-hover:bg-amber-500",
                  border: "group-hover:border-amber-300",
                  glow: "bg-amber-400/20",
                  text: "text-amber-600",
                },

                cyan: {
                  icon: "bg-cyan-100 text-cyan-600",
                  hover: "group-hover:bg-cyan-500",
                  border: "group-hover:border-cyan-300",
                  glow: "bg-cyan-400/20",
                  text: "text-cyan-600",
                },

                emerald: {
                  icon: "bg-emerald-100 text-emerald-600",
                  hover: "group-hover:bg-emerald-600",
                  border: "group-hover:border-emerald-300",
                  glow: "bg-emerald-400/20",
                  text: "text-emerald-600",
                },

                orange: {
                  icon: "bg-orange-100 text-orange-600",
                  hover: "group-hover:bg-orange-500",
                  border: "group-hover:border-orange-300",
                  glow: "bg-orange-400/20",
                  text: "text-orange-600",
                },

                blue: {
                  icon: "bg-blue-100 text-blue-600",
                  hover: "group-hover:bg-blue-600",
                  border: "group-hover:border-blue-300",
                  glow: "bg-blue-400/20",
                  text: "text-blue-600",
                },
              };

              const theme = colors[item.color];

              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{
                    y: -8,
                  }}
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-[2rem]
                    border
                    border-slate-200
                    bg-white
                    p-6
                    shadow-sm
                    transition-all
                    duration-500
                    ${theme.border}
                    hover:shadow-2xl
                  `}
                >
                  <div
                    className={`
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      h-48
                      w-48
                      rounded-full
                      ${theme.glow}
                      opacity-0
                      blur-3xl
                      transition-all
                      duration-500
                      group-hover:scale-150
                      group-hover:opacity-100
                    `}
                  />

                  <div className="relative flex items-center justify-between">
                    <div
                      className={`
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        ${theme.icon}
                        transition-all
                        duration-500
                        ${theme.hover}
                        group-hover:text-white
                        group-hover:shadow-lg
                      `}
                    >
                      <Icon size={23} strokeWidth={1.8} />
                    </div>

                    <span className="text-[11px] font-black tracking-[0.2em] text-slate-300">
                      {item.number}
                    </span>
                  </div>

                  <div className="relative mt-7">
                    <h3 className="text-lg font-black tracking-tight text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm font-medium leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>

                  <div
                    className="
                      relative
                      mt-7
                      flex
                      items-center
                      justify-between
                      border-t
                      border-slate-100
                      pt-5
                    "
                  >
                    <span
                      className={`
                        text-[9px]
                        font-black
                        uppercase
                        tracking-[0.2em]
                        ${theme.text}
                        opacity-70
                      `}
                    >
                      Creative service
                    </span>

                    <div
                      className={`
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-slate-200
                        text-slate-400
                        transition-all
                        duration-300
                        ${theme.hover}
                        group-hover:border-transparent
                        group-hover:text-white
                      `}
                    >
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* ===================================================
            CTA
        ==================================================== */}

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
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mt-28
            overflow-hidden
            rounded-[2.5rem]
            border
            border-slate-800
            bg-slate-950
            shadow-2xl
            shadow-slate-300/50
          "
        >
          {/* CTA gradients */}

          <div
            className="
              pointer-events-none
              absolute
              -right-40
              -top-40
              h-[500px]
              w-[500px]
              rounded-full
              bg-violet-600/25
              blur-[120px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-40
              left-1/3
              h-[450px]
              w-[450px]
              rounded-full
              bg-cyan-500/20
              blur-[120px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              left-[-100px]
              top-1/2
              h-[300px]
              w-[300px]
              -translate-y-1/2
              rounded-full
              bg-fuchsia-500/15
              blur-[100px]
            "
          />

          {/* Grid */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.08]
            "
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "55px 55px",
            }}
          />

          <div className="relative p-7 sm:p-10 lg:p-14">
            <div
              className="
                grid
                gap-12
                lg:grid-cols-[1fr_auto]
                lg:items-center
              "
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />

                  <span
                    className="
                      text-[10px]
                      font-black
                      uppercase
                      tracking-[0.3em]
                      text-slate-400
                    "
                  >
                    Start a project
                  </span>

                  <span className="h-px w-10 bg-slate-700" />
                </div>

                <h2
                  className="
                    mt-5
                    max-w-3xl
                    text-3xl
                    font-black
                    tracking-[-0.06em]
                    text-white
                    sm:text-4xl
                    lg:text-6xl
                  "
                >
                  Have an idea?
                  <br />

                  <span
                    className="
                      bg-gradient-to-r
                      from-violet-400
                      via-fuchsia-400
                      to-cyan-400
                      bg-clip-text
                      text-transparent
                    "
                  >
                    Let's make it real.
                  </span>
                </h2>

                <p
                  className="
                    mt-5
                    max-w-2xl
                    text-sm
                    font-medium
                    leading-7
                    text-slate-400
                  "
                >
                  Share a few details about your project.
                  You don't need a perfect brief — just
                  start the conversation.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "Creative Direction",
                    "Production",
                    "Design",
                  ].map((item) => (
                    <span
                      key={item}
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-white/5
                        px-4
                        py-2
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.15em]
                        text-slate-400
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <motion.a
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  href={`https://wa.me/${contactInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    inline-flex
                    min-w-[210px]
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-emerald-500
                    px-7
                    py-4
                    text-sm
                    font-black
                    text-white
                    shadow-xl
                    shadow-emerald-900/30
                    transition
                    hover:bg-emerald-400
                  "
                >
                  <FaWhatsapp size={19} />

                  WhatsApp us

                  <span
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      bg-black/10
                    "
                  >
                    <ArrowUpRight
                      size={14}
                      className="
                        transition
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </span>
                </motion.a>

                <motion.button
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  type="button"
                  onClick={() =>
                    setShowForm((previous) => !previous)
                  }
                  className="
                    group
                    inline-flex
                    min-w-[210px]
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    border
                    border-white/15
                    bg-white/5
                    px-7
                    py-4
                    text-sm
                    font-bold
                    text-white
                    backdrop-blur
                    transition
                    hover:border-white/25
                    hover:bg-white/10
                  "
                >
                  Send a project brief

                  <ChevronDown
                    size={17}
                    className={`transition duration-300 ${
                      showForm ? "rotate-180" : ""
                    }`}
                  />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===================================================
            FORM
        ==================================================== */}

        <AnimatePresence initial={false}>
          {showForm && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden"
            >
              <div
                className="
                  mt-5
                  overflow-hidden
                  rounded-[2.5rem]
                  border
                  border-violet-200
                  bg-white
                  shadow-2xl
                  shadow-violet-100/60
                "
              >
                {!submitted ? (
                  <div className="p-6 sm:p-9 lg:p-12">
                    <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
                      <div className="max-w-2xl">
                        <div className="flex items-center gap-3">
                          <div
                            className="
                              flex
                              h-10
                              w-10
                              items-center
                              justify-center
                              rounded-xl
                              bg-violet-100
                              text-violet-600
                            "
                          >
                            <MessageCircle size={18} />
                          </div>

                          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-violet-600">
                            Project enquiry
                          </p>
                        </div>

                        <h3
                          className="
                            mt-5
                            text-2xl
                            font-black
                            tracking-tight
                            text-slate-950
                            sm:text-3xl
                          "
                        >
                          Tell us what you're building.
                        </h3>

                        <p className="mt-2 text-sm font-medium leading-6 text-slate-500">
                          A few details are enough to get
                          the conversation started.
                        </p>
                      </div>

                      <div
                        className="
                          hidden
                          h-20
                          w-20
                          items-center
                          justify-center
                          rounded-3xl
                          bg-gradient-to-br
                          from-violet-100
                          via-fuchsia-100
                          to-cyan-100
                          sm:flex
                        "
                      >
                        <Sparkles
                          size={30}
                          className="text-violet-500"
                        />
                      </div>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className="mt-10 space-y-7"
                    >
                      {/* NAME + EMAIL */}

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="contact-name"
                            className="
                              mb-2
                              block
                              text-[10px]
                              font-black
                              uppercase
                              tracking-[0.2em]
                              text-slate-500
                            "
                          >
                            Your name
                          </label>

                          <input
                            id="contact-name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your name"
                            className="
                              w-full
                              rounded-2xl
                              border
                              border-slate-200
                              bg-slate-50
                              px-4
                              py-4
                              text-sm
                              font-semibold
                              text-slate-900
                              outline-none
                              transition-all
                              placeholder:text-slate-400
                              hover:border-violet-200
                              focus:border-violet-500
                              focus:bg-white
                              focus:ring-4
                              focus:ring-violet-500/10
                            "
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="contact-email"
                            className="
                              mb-2
                              block
                              text-[10px]
                              font-black
                              uppercase
                              tracking-[0.2em]
                              text-slate-500
                            "
                          >
                            Email
                          </label>

                          <input
                            id="contact-email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="you@company.com"
                            className="
                              w-full
                              rounded-2xl
                              border
                              border-slate-200
                              bg-slate-50
                              px-4
                              py-4
                              text-sm
                              font-semibold
                              text-slate-900
                              outline-none
                              transition-all
                              placeholder:text-slate-400
                              hover:border-violet-200
                              focus:border-violet-500
                              focus:bg-white
                              focus:ring-4
                              focus:ring-violet-500/10
                            "
                          />
                        </div>
                      </div>

                      {/* SERVICE */}

                      <div>
                        <label
                          htmlFor="contact-service"
                          className="
                            mb-2
                            block
                            text-[10px]
                            font-black
                            uppercase
                            tracking-[0.2em]
                            text-slate-500
                          "
                        >
                          What do you need?
                        </label>

                        <select
                          id="contact-service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="
                            w-full
                            rounded-2xl
                            border
                            border-slate-200
                            bg-slate-50
                            px-4
                            py-4
                            text-sm
                            font-semibold
                            text-slate-900
                            outline-none
                            transition-all
                            hover:border-violet-200
                            focus:border-violet-500
                            focus:bg-white
                            focus:ring-4
                            focus:ring-violet-500/10
                          "
                        >
                          <option value="" disabled>
                            Select a service
                          </option>

                          {services.map((service) => (
                            <option
                              key={service}
                              value={service}
                            >
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* BUDGET */}

                      <div>
                        <p
                          className="
                            mb-3
                            text-[10px]
                            font-black
                            uppercase
                            tracking-[0.2em]
                            text-slate-500
                          "
                        >
                          Approximate budget
                        </p>

                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                          {budgets.map((budget) => {
                            const active =
                              formData.budget === budget;

                            return (
                              <motion.button
                                key={budget}
                                type="button"
                                whileTap={{
                                  scale: 0.97,
                                }}
                                onClick={() =>
                                  setFormData(
                                    (previous) => ({
                                      ...previous,
                                      budget,
                                    })
                                  )
                                }
                                className={`
                                  rounded-2xl
                                  border
                                  px-3
                                  py-3.5
                                  text-xs
                                  font-bold
                                  transition-all
                                  ${
                                    active
                                      ? "border-violet-600 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-200"
                                      : "border-slate-200 bg-slate-50 text-slate-600 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
                                  }
                                `}
                              >
                                {budget}
                              </motion.button>
                            );
                          })}
                        </div>
                      </div>

                      {/* TIMELINE */}

                      <div>
                        <p
                          className="
                            mb-3
                            text-[10px]
                            font-black
                            uppercase
                            tracking-[0.2em]
                            text-slate-500
                          "
                        >
                          Timeline
                        </p>

                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                          {timelines.map((timeline) => {
                            const active =
                              formData.timeline === timeline;

                            return (
                              <motion.button
                                key={timeline}
                                type="button"
                                whileTap={{
                                  scale: 0.97,
                                }}
                                onClick={() =>
                                  setFormData(
                                    (previous) => ({
                                      ...previous,
                                      timeline,
                                    })
                                  )
                                }
                                className={`
                                  rounded-2xl
                                  border
                                  px-3
                                  py-3.5
                                  text-xs
                                  font-bold
                                  transition-all
                                  ${
                                    active
                                      ? "border-cyan-600 bg-cyan-600 text-white shadow-lg shadow-cyan-200"
                                      : "border-slate-200 bg-slate-50 text-slate-600 hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700"
                                  }
                                `}
                              >
                                {timeline}
                              </motion.button>
                            );
                          })}
                        </div>
                      </div>

                      {/* MESSAGE */}

                      <div>
                        <label
                          htmlFor="contact-message"
                          className="
                            mb-2
                            block
                            text-[10px]
                            font-black
                            uppercase
                            tracking-[0.2em]
                            text-slate-500
                          "
                        >
                          Project details
                        </label>

                        <textarea
                          id="contact-message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          placeholder="Tell us about your idea, brand, campaign, photoshoot, video or project..."
                          className="
                            w-full
                            resize-none
                            rounded-2xl
                            border
                            border-slate-200
                            bg-slate-50
                            px-4
                            py-4
                            text-sm
                            font-semibold
                            leading-6
                            text-slate-900
                            outline-none
                            transition-all
                            placeholder:text-slate-400
                            hover:border-violet-200
                            focus:border-violet-500
                            focus:bg-white
                            focus:ring-4
                            focus:ring-violet-500/10
                          "
                        />
                      </div>

                      {/* SUBMIT */}

                      <div
                        className="
                          flex
                          flex-col
                          gap-5
                          border-t
                          border-slate-100
                          pt-7
                          sm:flex-row
                          sm:items-center
                          sm:justify-between
                        "
                      >
                        <div className="flex items-start gap-3">
                          <Sparkles
                            size={15}
                            className="mt-0.5 shrink-0 text-violet-500"
                          />

                          <p className="max-w-md text-xs font-medium leading-5 text-slate-500">
                            You don't need a perfect brief.
                            Just tell us what you're trying
                            to create.
                          </p>
                        </div>

                        <motion.button
                          whileHover={{
                            scale: 1.03,
                          }}
                          whileTap={{
                            scale: 0.97,
                          }}
                          type="submit"
                          className="
                            group
                            inline-flex
                            shrink-0
                            items-center
                            justify-center
                            gap-3
                            rounded-full
                            bg-gradient-to-r
                            from-violet-600
                            via-fuchsia-600
                            to-cyan-500
                            px-7
                            py-4
                            text-sm
                            font-black
                            text-white
                            shadow-xl
                            shadow-violet-200
                            transition
                            hover:shadow-2xl
                          "
                        >
                          Send enquiry

                          <span
                            className="
                              flex
                              h-7
                              w-7
                              items-center
                              justify-center
                              rounded-full
                              bg-white/15
                            "
                          >
                            <Send
                              size={14}
                              className="
                                transition
                                group-hover:translate-x-1
                              "
                            />
                          </span>
                        </motion.button>
                      </div>
                    </form>
                  </div>
                ) : (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.95,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    className="
                      flex
                      min-h-[430px]
                      flex-col
                      items-center
                      justify-center
                      px-7
                      py-7
                      text-center
                    "
                  >
                    <div className="relative">
                      <div className="absolute inset-0 animate-ping rounded-full bg-emerald-400/20" />

                      <div
                        className="
                          relative
                          flex
                          h-24
                          w-24
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-emerald-200
                          bg-emerald-50
                          shadow-xl
                          shadow-emerald-100
                        "
                      >
                        <CheckCircle2
                          size={40}
                          strokeWidth={1.7}
                          className="text-emerald-500"
                        />
                      </div>
                    </div>

                    <h3
                      className="
                        mt-8
                        text-2xl
                        font-black
                        text-slate-950
                        sm:text-3xl
                      "
                    >
                      Your enquiry is ready.
                    </h3>

                    <p className="mt-3 max-w-md text-sm font-medium leading-7 text-slate-500">
                      WhatsApp should have opened with
                      your project details. Send the
                      message there to start the
                      conversation.
                    </p>

                    <button
                      type="button"
                      onClick={resetForm}
                      className="
                        mt-8
                        rounded-full
                        border
                        border-slate-200
                        bg-white
                        px-5
                        py-3
                        text-[10px]
                        font-black
                        uppercase
                        tracking-[0.25em]
                        text-slate-500
                        transition
                        hover:border-violet-300
                        hover:bg-violet-50
                        hover:text-violet-700
                      "
                    >
                      Send another enquiry
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      {/* ===================================================
    SOCIALS
==================================================== */}

<section className="mt-16 border-y border-slate-200 py-7">
  <div
    className="
      grid
      gap-6
      lg:grid-cols-[0.7fr_1.3fr]
      lg:items-center
    "
  >
    {/* SOCIAL INTRO */}

    <div>
      <p className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-500">
        Follow the studio
      </p>

      <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">
        See what we're creating.
      </h3>

      <p className="mt-1 text-sm font-medium text-slate-600">
        Work, experiments, ideas and creative projects.
      </p>
    </div>

    {/* SOCIAL CARDS */}

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid gap-3 sm:grid-cols-3"
    >
      <motion.div variants={fadeUp}>
        <SocialCard
          href={contactInfo.instagram.url}
          icon={FaInstagram}
          label="Instagram"
          handle={contactInfo.instagram.handle}
        />
      </motion.div>

      <motion.div variants={fadeUp}>
        <SocialCard
          href={contactInfo.youtube.url}
          icon={FaYoutube}
          label="YouTube"
          handle={contactInfo.youtube.handle}
        />
      </motion.div>

      <motion.div variants={fadeUp}>
        <SocialCard
          href={contactInfo.facebook.url}
          icon={FaFacebookF}
          label="Facebook"
          handle={contactInfo.facebook.handle}
        />
      </motion.div>
    </motion.div>
  </div>
</section>

      </div>
    </section>
  );
}

export default Contact;
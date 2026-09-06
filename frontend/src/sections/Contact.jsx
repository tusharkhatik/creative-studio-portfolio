import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Send,
  Check,
  ChevronDown,
  Clock3,
} from "lucide-react";

/*
|--------------------------------------------------------------------------
| CONTACT INFORMATION
|--------------------------------------------------------------------------
| Replace these placeholders with your real business details before launch.
|--------------------------------------------------------------------------
*/

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

  behance: {
    handle: "yourprofile",
    url: "https://www.behance.net/yourprofile",
  },

  linkedin: {
    handle: "yourname",
    url: "https://www.linkedin.com/in/yourname/",
  },
};

/*
|--------------------------------------------------------------------------
| SERVICES
|--------------------------------------------------------------------------
*/

const services = [
  "Video Editing",
  "Photo Editing",
  "Logo Design",
  "Brand Identity",
  "Social Media Design",
  "Thumbnail Design",
  "Motion Design",
  "Other",
];

const budgets = [
  "₹5K – ₹15K",
  "₹15K – ₹30K",
  "₹30K – ₹50K",
  "₹50K+",
  "Let's discuss",
];

const timelines = [
  "ASAP",
  "1–2 weeks",
  "2–4 weeks",
  "1–2 months",
  "Flexible",
];

/*
|--------------------------------------------------------------------------
| SOCIAL ICONS
|--------------------------------------------------------------------------
| Inline SVGs are used because lucide-react does not provide official
| Instagram / Behance / LinkedIn brand icons.
|--------------------------------------------------------------------------
*/

function InstagramIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="17.4"
        cy="6.7"
        r="1.1"
        fill="currentColor"
      />
    </svg>
  );
}

function BehanceIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M9.3 11.2c.9-.4 1.5-1.1 1.5-2.1 0-1.8-1.5-2.9-3.8-2.9H3v11.6h4.3c2.7 0 4.3-1.2 4.3-3.3 0-1.7-1-2.8-2.3-3.3ZM5.5 8.2h1.4c1.1 0 1.7.4 1.7 1.2 0 .8-.6 1.3-1.7 1.3H5.5V8.2Zm1.7 7.2H5.5v-2.8h1.7c1.2 0 1.9.5 1.9 1.4 0 .9-.7 1.4-1.9 1.4ZM17 9.2c-3 0-4.8 2-4.8 4.5 0 2.7 1.9 4.5 4.9 4.5 2.2 0 3.9-.9 4.5-2.7l-2.5-.8c-.3.8-1 1.2-2 1.2-1.2 0-1.9-.7-2-1.9h6.7v-.8c0-2.4-1.6-4-4.8-4Zm-1.8 3c.2-.9.8-1.5 1.8-1.5s1.6.5 1.7 1.5h-3.5ZM15.3 7h4.2v1.1h-4.2V7Z" />
    </svg>
  );
}

function LinkedInIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M5.2 8.2A1.8 1.8 0 1 0 5.2 4.6a1.8 1.8 0 0 0 0 3.6Z" />
      <path d="M3.6 9.7h3.2V20H3.6V9.7Z" />
      <path d="M9 9.7h3.1v1.4h.1c.4-.8 1.5-1.8 3.2-1.8 3.4 0 4 2.2 4 5.1V20h-3.2v-5c0-1.2 0-2.8-1.8-2.8s-2.1 1.3-2.1 2.7V20H9V9.7Z" />
    </svg>
  );
}

/*
|--------------------------------------------------------------------------
| CONTACT CARD
|--------------------------------------------------------------------------
*/

function ContactCard({
  icon: Icon,
  label,
  value,
  description,
  href,
  primary = false,
}) {
  const content = (
    <>
      <div
        className={`absolute -right-12 -top-12 h-36 w-36 rounded-full blur-3xl transition-opacity duration-500 ${
          primary
            ? "bg-emerald-400/10 opacity-70 group-hover:opacity-100"
            : "bg-violet-500/10 opacity-0 group-hover:opacity-100"
        }`}
      />

      <div className="relative flex items-start justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full border ${
            primary
              ? "border-emerald-400/20 bg-emerald-400/[0.08]"
              : "border-white/10 bg-white/[0.04]"
          }`}
        >
          <Icon
            size={19}
            strokeWidth={1.7}
            className={
              primary
                ? "text-emerald-300"
                : "text-white/60"
            }
          />
        </div>

        <ArrowUpRight
          size={18}
          className="text-white/20 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
        />
      </div>

      <div className="relative mt-7">
        <p
          className={`text-[9px] uppercase tracking-[0.28em] ${
            primary
              ? "text-emerald-300/60"
              : "text-white/30"
          }`}
        >
          {label}
        </p>

        <p className="mt-2 break-all text-lg font-medium tracking-tight text-white">
          {value}
        </p>

        <p className="mt-2 text-sm leading-5 text-white/30">
          {description}
        </p>
      </div>
    </>
  );

  if (!href) {
    return (
      <div
        className={`group relative overflow-hidden rounded-[1.5rem] border p-6 ${
          primary
            ? "border-emerald-400/15 bg-emerald-400/[0.035]"
            : "border-white/10 bg-white/[0.025]"
        }`}
      >
        {content}
      </div>
    );
  }

  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={
        href.startsWith("http")
          ? "noopener noreferrer"
          : undefined
      }
      whileHover={{ y: -4 }}
      className={`group relative block overflow-hidden rounded-[1.5rem] border p-6 transition duration-300 ${
        primary
          ? "border-emerald-400/15 bg-emerald-400/[0.035] hover:border-emerald-400/30 hover:bg-emerald-400/[0.055]"
          : "border-white/10 bg-white/[0.025] hover:border-white/20 hover:bg-white/[0.05]"
      }`}
    >
      {content}
    </motion.a>
  );
}

/*
|--------------------------------------------------------------------------
| MAIN CONTACT COMPONENT
|--------------------------------------------------------------------------
*/

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

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

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
      className="relative scroll-mt-24 overflow-hidden border-t border-white/10 bg-[#070708] px-6 py-20 sm:py-24 lg:px-10 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -25, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-48 -top-32 h-[500px] w-[500px] rounded-full bg-violet-600/[0.055] blur-[150px]"
        />

        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-48 top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.04] blur-[160px]"
        />

        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1400px]">

        {/* =====================================================
            01 — CONTACT US HEADER
        ====================================================== */}

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-white/40" />

              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                Contact Us
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-5xl text-[clamp(3rem,7vw,7rem)] font-bold leading-[0.88] tracking-[-0.07em] text-white"
            >
              LET'S GROW
              <br />

              <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                SOMETHING
              </span>

              <br />

              GREAT.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="max-w-md lg:ml-auto"
          >
            <p className="text-base leading-7 text-white/45 sm:text-lg">
              Let's create visuals that make your brand,
              content, or business impossible to ignore.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/40" />

                <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>

              <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                Available for selected projects
              </span>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            02 — DIRECT CONTACT INFORMATION
        ====================================================== */}

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">

          {/* PHONE */}

          <ContactCard
            icon={Phone}
            label="Call Us"
            value={contactInfo.phone}
            description="Prefer a direct conversation?"
            href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
          />

          {/* WHATSAPP */}

          <ContactCard
            icon={MessageCircle}
            label="WhatsApp"
            value="Start a conversation"
            description="Quick questions, ideas & project enquiries"
            href={`https://wa.me/${contactInfo.whatsapp}`}
            primary
          />

          {/* EMAIL */}

          <ContactCard
            icon={Mail}
            label="Email Us"
            value={contactInfo.email}
            description="For project details & collaborations"
            href={`mailto:${contactInfo.email}`}
          />
        </div>

        {/* =====================================================
            03 — WEBSITE / LOCATION / AVAILABILITY
        ====================================================== */}

        <div className="mt-4 grid gap-4 sm:grid-cols-3">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
          >
            <p className="text-[9px] uppercase tracking-[0.25em] text-white/20">
              Website
            </p>

            <p className="mt-2 text-sm text-white/55">
              {contactInfo.website}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.07 }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
          >
            <div className="flex items-center gap-3">
              <MapPin
                size={15}
                className="text-white/30"
              />

              <div>
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/20">
                  Based in
                </p>

                <p className="mt-1 text-sm text-white/55">
                  {contactInfo.location}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.025] p-5"
          >
            <div className="flex items-center gap-3">
              <Clock3
                size={15}
                className="text-emerald-300/60"
              />

              <div>
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/20">
                  Availability
                </p>

                <p className="mt-1 text-sm text-emerald-300/70">
                  Selected projects
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            04 — FOLLOW US
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 grid gap-8 border-y border-white/10 py-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center"
        >
          <div>
            <p className="text-[9px] uppercase tracking-[0.28em] text-white/25">
              Follow Us
            </p>

            <h3 className="mt-2 text-2xl font-medium tracking-tight text-white">
              See what we're creating.
            </h3>

            <p className="mt-2 text-sm text-white/30">
              Explore recent work, experiments, and creative projects.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">

            {/* INSTAGRAM */}

            <a
              href={contactInfo.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-4 transition duration-300 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <InstagramIcon
                size={19}
              />

              <div>
                <p className="text-xs font-medium text-white">
                  Instagram
                </p>

                <p className="mt-0.5 text-[11px] text-white/30">
                  {contactInfo.instagram.handle}
                </p>
              </div>

              <ArrowUpRight
                size={14}
                className="ml-auto text-white/20 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
              />
            </a>

            {/* BEHANCE */}

            <a
              href={contactInfo.behance.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-4 transition duration-300 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <BehanceIcon
                size={19}
              />

              <div>
                <p className="text-xs font-medium text-white">
                  Behance
                </p>

                <p className="mt-0.5 text-[11px] text-white/30">
                  {contactInfo.behance.handle}
                </p>
              </div>

              <ArrowUpRight
                size={14}
                className="ml-auto text-white/20 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
              />
            </a>

            {/* LINKEDIN */}

            <a
              href={contactInfo.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-4 transition duration-300 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <LinkedInIcon
                size={19}
              />

              <div>
                <p className="text-xs font-medium text-white">
                  LinkedIn
                </p>

                <p className="mt-0.5 text-[11px] text-white/30">
                  {contactInfo.linkedin.handle}
                </p>
              </div>

              <ArrowUpRight
                size={14}
                className="ml-auto text-white/20 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
              />
            </a>
          </div>
        </motion.div>

        {/* =====================================================
            05 — START GROWING TODAY
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]"
        >
          <div className="relative p-7 sm:p-9 lg:p-12">

            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet-500/[0.07] blur-[100px]" />

            <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-cyan-500/[0.05] blur-[100px]" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/25">
                  Start Growing Today
                </p>

                <h3 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                  Have an idea?
                  <br />

                  <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                    Let's make it happen.
                  </span>
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-white/35 sm:text-base">
                  Get in touch for a quick conversation about your
                  project, goals, and how we can bring the idea to life.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">

                <a
                  href={`https://wa.me/${contactInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition duration-300 hover:scale-[1.03]"
                >
                  WhatsApp Us

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white">
                    <ArrowUpRight
                      size={14}
                      className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </a>

                <button
                  type="button"
                  onClick={() => setShowForm((previous) => !previous)}
                  className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/10 px-7 py-4 text-sm font-medium text-white transition duration-300 hover:border-white/25 hover:bg-white/[0.05]"
                >
                  Send a project brief

                  <ChevronDown
                    size={16}
                    className={`transition duration-300 ${
                      showForm
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            06 — OPTIONAL PROJECT FORM
        ====================================================== */}

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
                duration: 0.45,
                ease: "easeInOut",
              }}
              className="overflow-hidden"
            >
              <div className="mt-4 rounded-[2rem] border border-white/10 bg-white/[0.02] p-7 sm:p-9 lg:p-10">

                {!submitted ? (
                  <>
                    {/* FORM HEADER */}

                    <div className="max-w-2xl">
                      <p className="text-[9px] uppercase tracking-[0.28em] text-white/25">
                        Project Enquiry
                      </p>

                      <h4 className="mt-3 text-2xl font-medium tracking-tight text-white sm:text-3xl">
                        Tell us what you're building.
                      </h4>

                      <p className="mt-2 text-sm leading-6 text-white/35">
                        A few details are enough. This will prepare
                        your enquiry for WhatsApp.
                      </p>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className="mt-8 space-y-6"
                    >

                      {/* NAME + EMAIL */}

                      <div className="grid gap-5 sm:grid-cols-2">

                        <div>
                          <label
                            htmlFor="contact-name"
                            className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-white/30"
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
                            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/15 focus:border-white/30"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="contact-email"
                            className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-white/30"
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
                            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/15 focus:border-white/30"
                          />
                        </div>
                      </div>

                      {/* SERVICE */}

                      <div>
                        <label
                          htmlFor="contact-service"
                          className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-white/30"
                        >
                          What do you need?
                        </label>

                        <select
                          id="contact-service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-white outline-none transition focus:border-white/30"
                        >
                          <option
                            value=""
                            disabled
                            className="bg-black"
                          >
                            Select a service
                          </option>

                          {services.map((service) => (
                            <option
                              key={service}
                              value={service}
                              className="bg-black"
                            >
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* BUDGET */}

                      <div>
                        <p className="mb-3 text-[9px] uppercase tracking-[0.2em] text-white/30">
                          Approximate budget
                        </p>

                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                          {budgets.map((budget) => {
                            const active =
                              formData.budget === budget;

                            return (
                              <button
                                key={budget}
                                type="button"
                                onClick={() =>
                                  setFormData((previous) => ({
                                    ...previous,
                                    budget,
                                  }))
                                }
                                className={`rounded-xl border px-3 py-3 text-xs transition ${
                                  active
                                    ? "border-white bg-white text-black"
                                    : "border-white/10 bg-black/20 text-white/40 hover:border-white/25 hover:text-white"
                                }`}
                              >
                                {budget}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* TIMELINE */}

                      <div>
                        <p className="mb-3 text-[9px] uppercase tracking-[0.2em] text-white/30">
                          Timeline
                        </p>

                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                          {timelines.map((timeline) => {
                            const active =
                              formData.timeline === timeline;

                            return (
                              <button
                                key={timeline}
                                type="button"
                                onClick={() =>
                                  setFormData((previous) => ({
                                    ...previous,
                                    timeline,
                                  }))
                                }
                                className={`rounded-xl border px-3 py-3 text-xs transition ${
                                  active
                                    ? "border-white bg-white text-black"
                                    : "border-white/10 bg-black/20 text-white/40 hover:border-white/25 hover:text-white"
                                }`}
                              >
                                {timeline}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* MESSAGE */}

                      <div>
                        <label
                          htmlFor="contact-message"
                          className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-white/30"
                        >
                          Project details
                        </label>

                        <textarea
                          id="contact-message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Tell us about your idea, brand, campaign, video, or project..."
                          className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-sm leading-6 text-white outline-none transition placeholder:text-white/15 focus:border-white/30"
                        />
                      </div>

                      {/* SUBMIT */}

                      <div className="flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                        <p className="max-w-md text-xs leading-5 text-white/25">
                          You don't need a perfect brief.
                          Just tell us what you're trying to create.
                        </p>

                        <button
                          type="submit"
                          className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition duration-300 hover:scale-[1.03]"
                        >
                          Send enquiry

                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white">
                            <Send
                              size={13}
                              className="transition group-hover:translate-x-0.5"
                            />
                          </span>
                        </button>
                      </div>
                    </form>
                  </>
                ) : (
                  /* SUCCESS STATE */

                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.98,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    className="flex min-h-[320px] flex-col items-center justify-center text-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10">
                      <Check
                        size={28}
                        className="text-emerald-300"
                      />
                    </div>

                    <h4 className="mt-6 text-2xl font-semibold text-white">
                      Your enquiry is ready.
                    </h4>

                    <p className="mt-3 max-w-md text-sm leading-6 text-white/40">
                      WhatsApp should have opened with your
                      project details. Send the message there
                      to start the conversation.
                    </p>

                    <button
                      type="button"
                      onClick={resetForm}
                      className="mt-7 text-xs uppercase tracking-[0.2em] text-white/30 transition hover:text-white"
                    >
                      Send another enquiry
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* =====================================================
            07 — FINAL BUSINESS MESSAGE
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-white/20">
            Your idea. Our creativity. Let's build something memorable.
          </p>

          <div className="flex items-center gap-2 text-xs text-white/25">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

            {contactInfo.location}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
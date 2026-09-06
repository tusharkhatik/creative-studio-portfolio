import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Services", path: "/services" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6"
      >
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between rounded-full border border-slate-200/80 bg-white/80 px-5 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-2xl sm:px-7">

          {/* BRAND */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="group flex items-center gap-2"
          >
            <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-slate-950 text-white">
              <span className="absolute h-4 w-4 rounded-full bg-violet-500 blur-md transition-transform duration-500 group-hover:scale-150" />
              <span className="relative text-xs font-bold">C</span>
            </span>

            <span className="text-lg font-bold tracking-[-0.04em] text-slate-950">
              CREATIVE<span className="text-violet-500">.</span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active = isActive(item.path);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative rounded-full px-4 py-2 text-sm font-medium"
                >
                  {active && (
                    <motion.span
                      layoutId="navbar-active"
                      className="absolute inset-0 rounded-full bg-slate-100"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  <span
                    className={`relative z-10 transition-colors ${
                      active
                        ? "text-slate-950"
                        : "text-slate-500 hover:text-slate-950"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <Link
            to="/contact"
            className="group hidden items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-600 hover:shadow-violet-500/20 md:flex"
          >
            Start a Project

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={14} />
            </span>
          </Link>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-950 transition hover:bg-slate-200 md:hidden"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -15,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -15,
                scale: 0.97,
              }}
              transition={{
                duration: 0.25,
              }}
              className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white/95 p-5 shadow-2xl shadow-slate-900/10 backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item, index) => {
                  const active = isActive(item.path);

                  return (
                    <motion.div
                      key={item.path}
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.04,
                      }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between rounded-2xl px-4 py-4 transition ${
                          active
                            ? "bg-slate-950 text-white"
                            : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                        }`}
                      >
                        <span className="font-medium">
                          {item.label}
                        </span>

                        <ArrowUpRight size={17} />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-4 font-semibold text-white shadow-lg shadow-violet-500/20"
              >
                <Sparkles size={16} />
                Start a Project
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}

export default Navbar;
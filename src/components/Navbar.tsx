import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "../utils/cn";
import { PrimaryButton } from "./ui";
import { CloseIcon, MenuIcon } from "./icons";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/programs", label: "Programs" },
  { to: "/about", label: "About Us" },
  { to: "/membership", label: "Membership" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[#171321]/[0.06] bg-white/85 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-[1240px] items-center justify-between px-6 py-4 md:px-10">
        <NavLink to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#21152E]">
            <span className="flex gap-[3px]">
              <span className="h-4 w-[3px] rounded-full bg-[#FFF2A6]" />
              <span className="h-4 w-[3px] rounded-full bg-[#EAD4FA]" />
              <span className="h-4 w-[3px] rounded-full bg-[#CDEEF5]" />
            </span>
          </span>
          <span className="font-display text-[1.05rem] font-bold tracking-tight text-[#171321]">
            CORE FITNESS
          </span>
        </NavLink>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "relative py-1 text-sm font-medium text-[#55515E] transition-colors hover:text-[#171321]",
                    isActive && "text-[#171321] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-[#171321]"
                  )
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <PrimaryButton to="/contact">Book a Visit</PrimaryButton>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#171321]/10 text-[#171321] lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "grid overflow-hidden bg-white transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="min-h-0">
          <ul className="flex flex-col gap-1 px-6 pb-6 pt-2">
            {LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "block rounded-xl px-4 py-3 text-base font-medium text-[#55515E] transition-colors",
                      isActive ? "bg-[#171321]/[0.04] text-[#171321]" : "hover:bg-[#171321]/[0.03]"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="mt-2">
              <PrimaryButton to="/contact" className="w-full" onClick={() => setOpen(false)}>
                Book a Visit
              </PrimaryButton>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

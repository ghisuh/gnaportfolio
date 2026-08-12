"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import logo from "@/app/icon.png";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "/ghisuh_resume.pdf" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const initialScrolled =
    typeof window !== "undefined" ? window.scrollY > 24 : false;
  const [isScrolled, setIsScrolled] = useState(initialScrolled);
  const [isExpanded, setIsExpanded] = useState(!initialScrolled);
  const [forceCompact, setForceCompact] = useState(initialScrolled);
  const lastScrollYRef = useRef(
    typeof window !== "undefined" ? window.scrollY : 0,
  );
  const forceCompactRef = useRef(initialScrolled);
  const lockExpandedRef = useRef(false);
  const lockTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollYRef.current;
      if (lockExpandedRef.current) {
        setIsExpanded(true);
        lastScrollYRef.current = currentY;
        return;
      }
      if (forceCompactRef.current) {
        setForceCompact(false);
        forceCompactRef.current = false;
      }
      const scrolled = currentY > 24;
      setIsScrolled(scrolled);
      if (!scrolled) {
        setIsExpanded(true);
        lastScrollYRef.current = currentY;
        return;
      }
      if (Math.abs(delta) < 8) {
        lastScrollYRef.current = currentY;
        return;
      }
      if (delta < 0) {
        setIsExpanded(true);
      } else if (delta > 0) {
        setIsExpanded(false);
      }
      lastScrollYRef.current = currentY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (lockTimeoutRef.current) {
        window.clearTimeout(lockTimeoutRef.current);
      }
    };
  }, []);

  const handleNavClick = () => {
    lockExpandedRef.current = true;
    setForceCompact(false);
    forceCompactRef.current = false;
    setIsExpanded(true);
    if (lockTimeoutRef.current) {
      window.clearTimeout(lockTimeoutRef.current);
    }
    lockTimeoutRef.current = window.setTimeout(() => {
      lockExpandedRef.current = false;
    }, 800);
  };

  return (
    <header className="nav-shell sticky top-4 z-50 flex items-center justify-center px-6">
      <div
        className={`nav-pill ${
          forceCompact || isScrolled ? "nav-pill--compact" : ""
        } ${!forceCompact && isExpanded ? "nav-pill--expanded" : ""}`}
        role="navigation"
        aria-label="Primary"
        onMouseEnter={() => {
          setForceCompact(false);
          forceCompactRef.current = false;
          if (isScrolled) {
            setIsExpanded(true);
          }
        }}
      >
        <a href="#" className="nav-pill__brand">
          <span className="nav-pill__logo" aria-hidden="true">
            <Image
              src={logo}
              alt=""
              width={20}
              height={20}
              className="nav-pill__logo-image"
            />
          </span>
          <span className="nav-pill__name">Ghisuh</span>
        </a>

        <nav className="nav-pill__links">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-pill__link"
              onClick={handleNavClick}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-pill__dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </header>
  );
}

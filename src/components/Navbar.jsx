import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Sticky Header Container */}
      <div
        className="sticky top-0 z-40 transition-colors duration-200"
        style={{
          background: "var(--bg)",
          backdropFilter: "none",
          borderBottom: "1px solid transparent",
          transition: "border-color .2s, background .2s",
        }}
      >
        {/* MATCHED ALIGNMENT: Using max-w-6xl and px-4 just like the Hero section */}
        <div
          className="max-w-6xl mx-auto px-4 flex items-center justify-between w-full"
          style={{ height: "64px" }}
        >
          {/* Brand & Avatar */}
          <a className="flex items-center gap-[10px]" href="/">
            <div
              className="size-8 rounded-full overflow-hidden shrink-0"
              style={{ border: "1.5px solid var(--hair-2)" }}
            >
              <img
                alt="Tanmay Kanase"
                width="32"
                height="32"
                decoding="async"
                className="object-cover object-top"
                style={{ color: "transparent" }}
                src="/ProfilePic.jpg"
              />
            </div>
            <span
              className="text-sm font-medium tracking-[-0.005em]"
              style={{ color: "var(--fg)" }}
            >
              Tanmay Kanase
            </span>
            <span
              className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted nav-time"
              style={{ marginLeft: "6px", color: "var(--muted)" }}
            >
              FSD | Software Engineer
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-desktop hidden md:flex gap-0.5">
            <a
              className="relative text-sm tracking-[-0.005em]"
              style={{
                padding: "8px 14px",
                color: "var(--muted)",
                fontWeight: 400,
              }}
              href="/internship"
            >
              Internships
            </a>
            <a
              className="relative text-sm tracking-[-0.005em]"
              style={{
                padding: "8px 14px",
                color: "var(--muted)",
                fontWeight: 400,
              }}
              href="/lab"
            >
              Projects
            </a>
            <a
              className="relative text-sm tracking-[-0.005em]"
              style={{
                padding: "8px 14px",
                color: "var(--muted)",
                fontWeight: 400,
              }}
              href="/writing"
            >
              Skills
            </a>
            <a
              className="relative text-sm tracking-[-0.005em]"
              style={{
                padding: "8px 14px",
                color: "var(--muted)",
                fontWeight: 400,
              }}
              href="/life"
            >
              Achievements
            </a>
          </nav>

          {/* Time, Search & CTA */}
          <div className="nav-time hidden md:flex items-center gap-4">
            <span
              className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted"
              style={{ color: "var(--muted)" }}
            >
              Navi Mumbai | Pune
            </span>

            <button
              aria-label="Search (Cmd+K)"
              className="bg-transparent border border-hair cursor-pointer flex items-center gap-[6px] text-muted"
              style={{
                padding: "6px 10px",
                borderColor: "var(--hair)",
                color: "var(--muted)",
              }}
            >
              <span className="text-[13px]">⌕</span>
              <span
                className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-muted-2"
                style={{ color: "var(--muted-2)" }}
              >
                ⌘T
              </span>
            </button>

            <a
              className="nav-cta text-[13px] font-medium border border-fg text-fg whitespace-nowrap hover:bg-fg hover:text-bg transition-colors"
              style={{
                padding: "8px 14px",
                borderColor: "var(--fg)",
              }}
              href="/contact?intent=project"
            >
              Get in touch →
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="nav-hamburger md:hidden flex flex-col gap-[5px] cursor-pointer p-2 bg-transparent border-none"
            aria-label="Menu"
            onClick={toggleMobileMenu}
          >
            <span
              className="block bg-fg transition-transform duration-200"
              style={{
                width: "22px",
                height: "1.5px",
                backgroundColor: "var(--fg)",
                transform: isMobileMenuOpen
                  ? "rotate(45deg) translate(4px, 5px)"
                  : "none",
              }}
            ></span>
            <span
              className="block bg-fg transition-opacity duration-200"
              style={{
                width: "22px",
                height: "1.5px",
                backgroundColor: "var(--fg)",
                opacity: isMobileMenuOpen ? 0 : 1,
              }}
            ></span>
            <span
              className="block bg-fg transition-transform duration-200"
              style={{
                width: "22px",
                height: "1.5px",
                backgroundColor: "var(--fg)",
                transform: isMobileMenuOpen
                  ? "rotate(-45deg) translate(4px, -5px)"
                  : "none",
              }}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className="nav-mobile-menu"
        style={{
          display: isMobileMenuOpen ? "flex" : "none", // Toggles visibility based on state
          flexDirection: "column",
          gap: 0,
          padding: "24px",
          position: "fixed",
          inset: "64px 0 0", // Starts exactly below the 64px header
          background: "var(--bg)",
          zIndex: 39,
          borderTop: "1px solid var(--hair)",
          boxSizing: "border-box",
          margin: 0,
        }}
      >
        <a
          className="nav-mobile-item text-lg font-medium py-3 border-b border-transparent"
          style={{ color: "var(--accent)" }}
          href="/"
          onClick={toggleMobileMenu}
        >
          Home
        </a>
        <a
          className="nav-mobile-item text-lg font-medium py-3 border-b border-transparent"
          style={{ color: "var(--fg)" }}
          href="/work"
          onClick={toggleMobileMenu}
        >
          Internships
        </a>
        <a
          className="nav-mobile-item text-lg font-medium py-3 border-b border-transparent"
          style={{ color: "var(--fg)" }}
          href="/lab"
          onClick={toggleMobileMenu}
        >
          Projects
        </a>
        <a
          className="nav-mobile-item text-lg font-medium py-3 border-b border-transparent"
          style={{ color: "var(--fg)" }}
          href="/writing"
          onClick={toggleMobileMenu}
        >
          Skills
        </a>
        <a
          className="nav-mobile-item text-lg font-medium py-3 border-b border-transparent"
          style={{ color: "var(--fg)" }}
          href="/life"
          onClick={toggleMobileMenu}
        >
          Achievements
        </a>

        <a
          className="mt-6 inline-block text-sm font-medium text-center rounded-sm transition-opacity hover:opacity-90"
          style={{
            padding: "12px 20px",
            backgroundColor: "var(--fg)",
            color: "var(--bg)",
          }}
          href="/contact?intent=project"
          onClick={toggleMobileMenu}
        >
          Get in touch →
        </a>

        <span
          className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted"
          style={{ marginTop: "20px", color: "var(--muted)" }}
        >
          Navi Mumbai | Pune
        </span>
      </div>
    </>
  );
};

export default Navbar;

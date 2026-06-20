const Footer = () => {
  return (
    <footer
      id="contact"
      className="border-t border-hair bg-bg-2 overflow-hidden"
      style={{ padding: "96px 0 48px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Replaced inline grid style with grid-cols-1 for mobile, lg:grid-cols for desktop */}
        <div className="footer-cta-grid grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-end mb-20">
          <h2
            className="footer-h2 m-0 font-medium break-words" // Added break-words
            style={{
              fontSize: "clamp(36px, 8vw, 88px)", // Dropped minimum clamp size slightly for mobile fit
              letterSpacing: "-0.035em",
              lineHeight: 0.98,
            }}
          >
            Got an <span className="text-accent">interesting problem?</span>
            <br />
            Let's talk about it.
          </h2>

          <div className="w-full">
            <p
              className="m-0 text-muted max-w-[360px]"
              style={{ fontSize: "16px", lineHeight: 1.65 }}
            >
              I am always open to conversations about software engineering,
              scalable backends, and full-stack development - especially the
              kind that don't have an obvious answer yet. I read every message.
            </p>
            <a
              href="mailto:tanmaykanase07@gmail.com"
              className="inline-block mt-6 border-b border-fg pb-1 break-all sm:break-normal" // Stop email from blowing out narrow screens
              style={{ fontSize: "clamp(15px, 1.5vw, 18px)" }}
            >
              tanmaykanase07@gmail.com →
            </a>

            <div className="mt-5 flex gap-4 flex-wrap">
              <a
                href="https://www.linkedin.com/in/tanmay-kanase/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted pb-0.5"
                style={{ borderBottom: "1px solid var(--hair-2)" }}
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/Tanmay-Kanase"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted pb-0.5"
                style={{ borderBottom: "1px solid var(--hair-2)" }}
              >
                GitHub ↗
              </a>
              <a
                href="https://leetcode.com/u/Tanmay_Kanase/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted pb-0.5"
                style={{ borderBottom: "1px solid var(--hair-2)" }}
              >
                LeetCode ↗
              </a>
            </div>
          </div>
        </div>

        {/* Replaced inline grid style with responsive Tailwind grid classes */}
        <div className="footer-links-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 pt-8 border-t border-hair">
          <div>
            <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted">
              © 2026 Tanmay Kanase
            </span>
            <div className="mt-[6px] text-[13px] text-muted">
              Built in Pune. Full-stack, IoT, and code.
            </div>
          </div>

          <div>
            <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted">
              Projects
            </span>
            <div className="mt-[10px] flex flex-col gap-[7px]">
              <a className="text-sm text-fg" href="#agripreserve">
                AgriPreserve
              </a>
              <a className="text-sm text-fg" href="#smart-parking">
                Smart Parking
              </a>
              <a className="text-sm text-fg" href="#ai-chatbot">
                AI Chatbot Platform
              </a>
              <a className="text-sm text-fg" href="#quiz-app">
                AI Quiz App
              </a>
            </div>
          </div>

          <div>
            <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted">
              Experience
            </span>
            <div className="mt-[10px] flex flex-col gap-[7px]">
              <a className="text-sm text-fg" href="#experience">
                Sumago Infotech
              </a>
              <a className="text-sm text-fg" href="#education">
                Samarth College
              </a>
              <a className="text-sm text-fg" href="#certifications">
                NPTEL Certifications
              </a>
              <a className="text-sm text-fg" href="#certifications">
                ExcelR Training
              </a>
            </div>
          </div>

          <div>
            <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted">
              More
            </span>
            <div className="mt-[10px] flex flex-col gap-[7px]">
              <a className="text-sm text-fg" href="#skills">
                Tech Stack
              </a>
              <a className="text-sm text-fg" href="#achievements">
                Achievements
              </a>
              <a
                className="text-sm text-fg"
                href="mailto:tanmaykanase07@gmail.com"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

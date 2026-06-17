const Footer = () => {
  return (
    <footer
      id="contact"
      className="border-t border-hair bg-bg-2"
      style={{ padding: "96px 0 48px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="footer-cta-grid grid gap-16 items-end mb-20"
          style={{ gridTemplateColumns: "1.2fr 1fr" }}
        >
          <h2
            className="footer-h2 m-0 font-medium"
            style={{
              fontSize: "clamp(44px, 6vw, 88px)",
              letterSpacing: "-0.035em",
              lineHeight: 0.98,
            }}
          >
            Got an <span className="text-accent">interesting problem?</span>
            <br />
            Let's talk about it.
          </h2>

          <div>
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
              className="inline-block mt-6 border-b border-fg pb-1"
              style={{ fontSize: "clamp(15px, 1.5vw, 18px)" }}
            >
              tanmaykanase07@gmail.com →
            </a>

            <div className="mt-5 flex gap-4 flex-wrap">
              <a
                href="https://linkedin.com/in/tanmaykanase"
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
              {/* Swapped "Book a call" for a LeetCode link since you have a 100-day streak! */}
              <a
                href="https://leetcode.com/"
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

        <div
          className="footer-links-grid grid gap-8 pt-8 border-t border-hair"
          style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr" }}
        >
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

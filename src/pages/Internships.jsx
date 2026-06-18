const Internships = () => {
  return (
    <section className="pb-20 border-t border-hair">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="relative pl-10 pt-16">
          {/* Vertical Timeline Line */}
          <div
            className="absolute bg-hair"
            style={{
              left: "16px",
              top: "0px",
              bottom: "64px",
              width: "1px",
              border: "1px solid var(--hair)",
            }}
          ></div>

          {/* 1. Sumago Infotech Internship Block */}
          <div className="relative pb-16">
            <div
              className="absolute rounded-full"
              style={{
                left: "-28px",
                top: "10px",
                width: "10px",
                height: "10px",
                background: "var(--fg)",
                border: "2px solid var(--fg)",
                boxSizing: "border-box",
              }}
            ></div>
            <div
              className="mb-4"
              style={{
                padding: "24px 28px",
                background: "transparent",
                border: "1px solid var(--hair)",
              }}
            >
              <div className="flex justify-between items-start gap-4 flex-wrap mb-[10px]">
                <div className="flex gap-3 items-center flex-wrap">
                  <h2
                    className="m-0 font-medium tracking-[-0.02em]"
                    style={{ fontSize: "clamp(18px, 2vw, 22px)" }}
                  >
                    Sumago Infotech Pvt. Ltd.
                  </h2>
                  <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-muted-2">
                    Internship
                  </span>
                </div>
                <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-muted-2 shrink-0">
                  6 Months
                </span>
              </div>
              <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted block text-accent mb-3">
                Software Development Intern · Pune
              </span>
              <p
                className="m-0 text-sm text-muted max-w-[720px]"
                style={{ lineHeight: "1.7" }}
              >
                Gained industry experience in software engineering workflows and
                adapting to corporate work environments. Collaborated with a
                team of 6-7 developers using Git and GitHub.
              </p>
            </div>

            {/* Sub-projects / Highlights */}
            <div className="pl-5">
              <div
                className="grid gap-px bg-hair"
                style={{
                  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                }}
              >
                {/* AI Chatbot Block */}
                <div className="bg-bg">
                  <div
                    className="border border-hair bg-bg transition-colors duration-150 h-full"
                    style={{ padding: "20px 24px", opacity: 1 }}
                  >
                    <div className="flex gap-[10px] items-start mb-2 flex-wrap">
                      <span className="text-sm font-bold tracking-[-0.01em] text-fg flex-1 min-w-[120px]">
                        AI-Powered Chatbot
                      </span>
                    </div>
                    <p className="m-0 text-[13px] text-muted leading-[1.6]">
                      Worked on an AI-powered chatbot using Angular, Spring
                      Boot, Ollama, and REST APIs. Gained hands-on experience
                      with Large Language Models (LLMs) such as gemma3:1b and
                      deepseek coder.
                    </p>
                  </div>
                </div>

                {/* Achievements Block */}
                <div className="bg-bg">
                  <div
                    className="border border-hair bg-bg transition-colors duration-150 h-full"
                    style={{ padding: "20px 24px", opacity: 1 }}
                  >
                    <div className="flex gap-[10px] items-start mb-2 flex-wrap">
                      <span className="text-sm font-bold tracking-[-0.01em] text-fg flex-1 min-w-[120px]">
                        Key Achievements
                      </span>
                    </div>
                    <p className="m-0 text-[13px] text-muted leading-[1.6]">
                      Recognized as the Best Performer of the Week (2 Times)
                      during the internship tenure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. ExcelR Internship Block */}
          <div className="relative pb-16">
            <div
              className="absolute rounded-full"
              style={{
                left: "-28px",
                top: "10px",
                width: "10px",
                height: "10px",
                background: "var(--fg)",
                border: "2px solid var(--fg)",
                boxSizing: "border-box",
              }}
            ></div>
            <div
              className="mb-4"
              style={{
                padding: "24px 28px",
                background: "transparent",
                border: "1px solid var(--hair)",
              }}
            >
              <div className="flex justify-between items-start gap-4 flex-wrap mb-[10px]">
                <div className="flex gap-3 items-center flex-wrap">
                  <h2
                    className="m-0 font-medium tracking-[-0.02em]"
                    style={{ fontSize: "clamp(18px, 2vw, 22px)" }}
                  >
                    ExcelR
                  </h2>
                  <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-muted-2">
                    Internship
                  </span>
                </div>
                <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-muted-2 shrink-0">
                  6 Months
                </span>
              </div>
              <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted block text-accent mb-3">
                Full Stack Developer Intern
              </span>
              <p
                className="m-0 text-sm text-muted max-w-[720px]"
                style={{ lineHeight: "1.7" }}
              >
                Gained foundational and practical experience in full-stack web
                development. Mastered core technologies including Java, JSP,
                Servlets, HTML, CSS, and JavaScript to build robust, interactive
                web applications.
              </p>
            </div>

            {/* Sub-projects / Highlights */}
            <div className="pl-5">
              <div
                className="grid gap-px bg-hair"
                style={{
                  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                }}
              >
                {/* Movie Booking App Block */}
                <div className="bg-bg">
                  <div
                    className="border border-hair bg-bg transition-colors duration-150 h-full"
                    style={{ padding: "20px 24px", opacity: 1 }}
                  >
                    <div className="flex gap-[10px] items-start mb-2 flex-wrap">
                      <span className="text-sm font-bold tracking-[-0.01em] text-fg flex-1 min-w-[120px]">
                        Movie Ticket Booking App
                      </span>
                    </div>
                    <p className="m-0 text-[13px] text-muted leading-[1.6]">
                      Developed a complete full-stack movie ticket booking
                      application. Utilized Spring Boot for building scalable
                      REST APIs and React for creating a dynamic, responsive
                      user interface.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;

export default function MyLearn() {
  return (
    <section className="border-t-gray-400 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-[18px] items-baseline mb-10">
          <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-muted-2">
            01 / Now
          </span>
          <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-fg font-medium">
            Currently
          </span>
        </div>
        <div className="flex justify-between gap-6 flex-wrap items-end mb-10">
          <p
            className="m-0 text-[15px] text-muted max-w-[620px]"
            style={{ lineHeight: 1.65 }}
          >
            Currently focused on building scalable full-stack applications using
            Spring Boot and React while strengthening my knowledge of System
            Design, AI Integration, Data Structures & Algorithms, and Database
            Engineering.
          </p>
          <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted">
            Updated Jun 2026
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="border border-hair bg-bg p-6 md:p-7 h-full">
            <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-accent block mb-4">
              Internship
            </span>
            <h3
              className="m-0 font-medium tracking-[-0.02em]"
              style={{ fontSize: "clamp(19px, 2vw, 24px)", lineHeight: 1.15 }}
            >
              Software Engineer Trainee at Sumago Infotech
            </h3>
            <p
              className="m-0 mt-4 text-sm text-muted"
              style={{ lineHeight: 1.65 }}
            >
              Developing an AI-powered chatbot platform using locally hosted
              Ollama LLM models, Spring Boot backend services, and Angular for
              intelligent conversational workflows.
            </p>
          </article>

          <article className="border border-hair bg-bg p-6 md:p-7 h-full">
            <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-accent block mb-4">
              Learning
            </span>
            <h3
              className="m-0 font-medium tracking-[-0.02em]"
              style={{ fontSize: "clamp(19px, 2vw, 24px)", lineHeight: 1.15 }}
            >
              Mastering Full Stack & Problem Solving by Excelr Edtech
            </h3>
            <p
              className="m-0 mt-4 text-sm text-muted"
              style={{ lineHeight: 1.65 }}
            >
              Gained practical experience in full-stack web development,
              database management, and API design. Enhanced problem-solving
              abilities through coding challenges, data structures, algorithms,
              and project-based learning using industry-standard technologies.
            </p>
          </article>
        </div>

        <div className="grid gap-6 mt-6 md:grid-cols-12">
          <article
            className="border border-hair bg-bg p-6 md:p-7 h-full flex flex-col"
            style={{ gridColumn: "span 4 / span 4" }}
          >
            <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-accent block mb-4">
              Hardware
            </span>
            <div className="flex-1 flex flex-col justify-between gap-8">
              <div>
                <h3
                  className="m-0 font-medium tracking-[-0.02em]"
                  style={{
                    fontSize: "clamp(19px, 2vw, 24px)",
                    lineHeight: 1.15,
                  }}
                >
                  AgriPreserve
                </h3>
                <p
                  className="m-0 mt-3 text-sm text-muted"
                  style={{ lineHeight: 1.6 }}
                >
                  Cold Storage Monitoring System
                </p>
              </div>
              <div className="min-h-[180px] flex items-center justify-center">
                <div className="flex flex-col gap-4 items-center text-center">
                  <div className="coffee-widget flex gap-2 items-center">
                    <div
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50% 50% 40% 40%",
                        background: "rgb(61, 31, 14)",
                        border: "1.5px solid var(--hair-2)",
                        transition: "background 0.4s",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "10px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "rgb(107, 53, 32)",
                          opacity: 0.6,
                        }}
                      />
                    </div>
                    <div
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50% 50% 40% 40%",
                        background: "rgb(61, 31, 14)",
                        border: "1.5px solid var(--hair-2)",
                        transition: "background 0.4s 0.15s",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "10px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "rgb(107, 53, 32)",
                          opacity: 0.6,
                        }}
                      />
                    </div>
                    <div
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50% 50% 40% 40%",
                        background: "var(--hair)",
                        border: "1.5px solid var(--hair-2)",
                        transition: "background 0.4s 0.3s",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    />
                    <div
                      className="font-mono uppercase text-muted ml-1"
                      style={{ fontSize: "11px", letterSpacing: "0.06em" }}
                    >
                      Active
                    </div>
                  </div>
                  <div className="coffee-widget-copy">
                    <div className="text-sm font-medium tracking-[-0.01em]">
                      ESP32 & Sensors
                    </div>
                    <div
                      className="font-mono uppercase text-muted mt-[3px]"
                      style={{ fontSize: "10px", letterSpacing: "0.06em" }}
                    >
                      Node.js Backend
                    </div>
                  </div>
                  <div
                    className="font-mono uppercase text-muted-2"
                    style={{ fontSize: "10px", letterSpacing: "0.06em" }}
                  >
                    Compact encoded payloads
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 border-t border-hair pt-4">
                <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-muted-2">
                  Flutter App
                </span>
                <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-muted-2">
                  Transmission Efficiency
                </span>
              </div>
            </div>
          </article>

          <article
            className="border border-hair bg-bg p-6 md:p-7 h-full flex flex-col"
            style={{ gridColumn: "span 4 / span 4" }}
          >
            <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-accent block mb-4">
              Full Stack Web + Android on same backend (Spring boot)
            </span>
            <div className="flex-1 flex flex-col justify-between gap-8">
              <div>
                <h3
                  className="m-0 font-medium tracking-[-0.02em]"
                  style={{
                    fontSize: "clamp(19px, 2vw, 24px)",
                    lineHeight: 1.15,
                  }}
                >
                  Smart Parking
                </h3>
                <p
                  className="m-0 mt-3 text-sm text-muted"
                  style={{ lineHeight: 1.6 }}
                >
                  ReactJS, Spring Boot & MongoDB
                </p>
              </div>
              <div className="min-h-[180px] flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                  <div
                    className="font-mono uppercase text-muted"
                    style={{ fontSize: "10px", letterSpacing: "0.1em" }}
                  >
                    Real-time slot booking
                  </div>
                  <svg
                    width="120"
                    height="160"
                    viewBox="0 0 120 160"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="35"
                      y="8"
                      width="50"
                      height="12"
                      rx="3"
                      fill="#1A1816"
                      opacity="0.15"
                    />
                    <rect
                      x="40"
                      y="4"
                      width="40"
                      height="8"
                      rx="2"
                      fill="#1A1816"
                      opacity="0.1"
                    />
                    <path
                      d="M25 22 Q20 26 20 32 L20 138 Q20 148 30 148 L90 148 Q100 148 100 138 L100 32 Q100 26 95 22 Z"
                      fill="#F5F1EA"
                      stroke="#1A1816"
                      strokeWidth="1.5"
                      strokeOpacity="0.2"
                    />
                    <clipPath id="jar-clip">
                      <path d="M22 40 L22 138 Q22 146 30 146 L90 146 Q98 146 98 138 L98 40 Z" />
                    </clipPath>
                    <rect
                      x="20"
                      y="35"
                      width="80"
                      height="115"
                      fill="#D4922E"
                      clipPath="url(#jar-clip)"
                      opacity="0.85"
                      style={{ transition: "fill 0.8s" }}
                    />
                    <ellipse
                      cx="60"
                      cy="42"
                      rx="35"
                      ry="5"
                      fill="#D4A875"
                      opacity="0.6"
                      style={{ transition: "opacity 0.8s" }}
                    />
                    <circle cx="45" cy="100" r="2" fill="white" opacity="0.4">
                      <animate
                        attributeName="cy"
                        from="130"
                        to="45"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        from="0.4"
                        to="0"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle cx="70" cy="110" r="1.5" fill="white" opacity="0.3">
                      <animate
                        attributeName="cy"
                        from="130"
                        to="45"
                        dur="2.5s"
                        begin="0.8s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        from="0.3"
                        to="0"
                        dur="2.5s"
                        begin="0.8s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle cx="55" cy="120" r="1" fill="white" opacity="0.3">
                      <animate
                        attributeName="cy"
                        from="130"
                        to="45"
                        dur="4s"
                        begin="1.5s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        from="0.3"
                        to="0"
                        dur="4s"
                        begin="1.5s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <path
                      d="M30 30 Q28 80 30 130"
                      stroke="white"
                      strokeWidth="2"
                      strokeOpacity="0.15"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="text-center">
                    <div
                      className="font-mono uppercase text-accent transition-opacity duration-300"
                      style={{
                        fontSize: "10px",
                        letterSpacing: "0.08em",
                        opacity: 1,
                      }}
                    >
                      Google Login
                    </div>
                    <div
                      className="text-[13px] text-muted mt-1 transition-opacity duration-300"
                      style={{ opacity: 1 }}
                    >
                      Cross-platform deployment
                    </div>
                  </div>
                  <div className="flex gap-[6px]">
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "3px",
                        background: "var(--hair-2)",
                        transition: "0.3s",
                      }}
                    />
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "3px",
                        background: "var(--hair-2)",
                        transition: "0.3s",
                      }}
                    />
                    <div
                      style={{
                        width: "16px",
                        height: "6px",
                        borderRadius: "3px",
                        background: "var(--accent)",
                        transition: "0.3s",
                      }}
                    />
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "3px",
                        background: "var(--hair-2)",
                        transition: "0.3s",
                      }}
                    />
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "3px",
                        background: "var(--hair-2)",
                        transition: "0.3s",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 border-t border-hair pt-4">
                <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-muted-2">
                  Redis-based locking
                </span>
                <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-muted-2">
                  Razorpay Integration
                </span>
              </div>
            </div>
          </article>

          <article
            className="border border-hair bg-bg p-6 md:p-7 h-full flex flex-col"
            style={{ gridColumn: "span 4 / span 4" }}
          >
            <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-accent block mb-4">
              Milestones
            </span>
            <div className="flex-1 flex flex-col justify-between gap-8">
              <div>
                <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted block mb-3 text-muted-2">
                  Problem Solving
                </span>
                <h3
                  className="m-0 font-medium tracking-[-0.02em]"
                  style={{
                    fontSize: "clamp(19px, 2vw, 24px)",
                    lineHeight: 1.15,
                  }}
                >
                  1st Prize in Blind Coding
                </h3>
                <p
                  className="m-0 mt-3 text-sm text-muted"
                  style={{ lineHeight: 1.6 }}
                >
                  Demonstrated problem-solving under pressure by winning first
                  place in the college blind coding competition. Currently
                  balancing SPPU academics with Clash of Clans and cricket.
                </p>
              </div>
              <div className="min-h-[180px] flex items-center justify-center">
                <div className="flex flex-col items-center gap-5">
                  <div className="book-widget relative">
                    <div className="book-widget-shadow absolute left-4 right-4 bottom-[-10px] h-4 rounded-full bg-[rgba(26,24,22,0.10)] blur-md" />
                    <div
                      className="book-widget-cover relative aspect-[2/3] w-[150px] flex flex-col justify-between p-4"
                      style={{
                        background:
                          "linear-gradient(160deg, rgb(61, 31, 14) 0%, rgb(107, 45, 18) 48%, rgb(42, 19, 8) 100%)",
                        color: "rgb(245, 241, 234)",
                        boxShadow: "8px 10px 0 var(--hair-2)",
                        transformOrigin: "center center",
                      }}
                    >
                      <div
                        className="font-mono border-b pb-2"
                        style={{
                          fontSize: "8px",
                          letterSpacing: "0.18em",
                          color: "rgba(245, 241, 234, 0.42)",
                          borderColor: "rgba(245, 241, 234, 0.16)",
                        }}
                      >
                        Daily Grind
                      </div>
                      <div>
                        <div
                          className="font-serif whitespace-pre-line leading-[1.08] font-normal"
                          style={{ fontSize: "16px" }}
                        >
                          100 Days{"\n"}LeetCode Streak
                        </div>
                        <div
                          className="mt-3 font-mono uppercase"
                          style={{
                            fontSize: "8px",
                            letterSpacing: "0.1em",
                            color: "rgba(245, 241, 234, 0.62)",
                          }}
                        >
                          C++ DSA
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-muted-2 text-center">
                    Consistent effort
                  </span>
                </div>
              </div>
              <div className="border-t border-hair pt-4">
                <a
                  className="inline-block text-[13px] border-b border-fg pb-0.5"
                  href="https://github.com/Tanmay-Kanase"
                >
                  View GitHub Profile (300+ Commits) →
                </a>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-10 py-[14px] border-t border-hair border-b overflow-hidden">
          <div
            className="whitespace-nowrap font-mono text-[12px] tracking-[0.04em] text-muted inline-block"
            style={{
              animation: "38s linear 0s infinite normal none running ticker",
            }}
          >
            <span>
              <span className="px-[22px]">
                <span className="text-accent mr-[10px]">Log</span>
                <span>&gt; optimizing ESP32 payloads</span>
                <span className="ml-[22px]" style={{ color: "var(--hair-2)" }}>
                  /
                </span>
              </span>
              <span className="px-[22px]">
                <span className="text-accent mr-[10px]">Log</span>
                <span>&gt; debugging Spring Boot services</span>
                <span className="ml-[22px]" style={{ color: "var(--hair-2)" }}>
                  /
                </span>
              </span>
              <span className="px-[22px]">
                <span className="text-accent mr-[10px]">Log</span>
                <span>&gt; training open-source LLMs</span>
                <span className="ml-[22px]" style={{ color: "var(--hair-2)" }}>
                  /
                </span>
              </span>
              <span className="px-[22px]">
                <span className="text-accent mr-[10px]">Log</span>
                <span>&gt; grinding C++ DSA</span>
                <span className="ml-[22px]" style={{ color: "var(--hair-2)" }}>
                  /
                </span>
              </span>
              <span className="px-[22px]">
                <span className="text-accent mr-[10px]">Log</span>
                <span>&gt; status: deep-work-mode</span>
                <span className="ml-[22px]" style={{ color: "var(--hair-2)" }}>
                  /
                </span>
              </span>
            </span>
            <span>
              <span className="px-[22px]">
                <span className="text-accent mr-[10px]">Log</span>
                <span>&gt; optimizing ESP32 payloads</span>
                <span className="ml-[22px]" style={{ color: "var(--hair-2)" }}>
                  /
                </span>
              </span>
              <span className="px-[22px]">
                <span className="text-accent mr-[10px]">Log</span>
                <span>&gt; debugging Spring Boot services</span>
                <span className="ml-[22px]" style={{ color: "var(--hair-2)" }}>
                  /
                </span>
              </span>
              <span className="px-[22px]">
                <span className="text-accent mr-[10px]">Log</span>
                <span>&gt; training open-source LLMs</span>
                <span className="ml-[22px]" style={{ color: "var(--hair-2)" }}>
                  /
                </span>
              </span>
              <span className="px-[22px]">
                <span className="text-accent mr-[10px]">Log</span>
                <span>&gt; grinding C++ DSA</span>
                <span className="ml-[22px]" style={{ color: "var(--hair-2)" }}>
                  /
                </span>
              </span>
              <span className="px-[22px]">
                <span className="text-accent mr-[10px]">Log</span>
                <span>&gt; status: deep-work-mode</span>
                <span className="ml-[22px]" style={{ color: "var(--hair-2)" }}>
                  /
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

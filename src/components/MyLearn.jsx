import { useEffect, useState } from "react";

const parkingImages = [
  "parking/Screenshot (619).png",
  "parking/Screenshot (628).png",
  "parking/image.png",
  "parking/Screenshot (624).png",
  "parking/Screenshot (614).png",
];

const coldStorageImg = [
  "cold storage/Screenshot_20260327_185007.jpg",
  "cold storage/Screenshot_20260327_185012.jpg",
  "cold storage/Screenshot_20260327_185027.jpg",
  "cold storage/Screenshot_20260327_185054.jpg",
  "cold storage/Screenshot_20260327_185120.jpg",
];
const logItems = [
  "designing scalable Spring Boot APIs",
  "optimizing MongoDB queries",
  "grinding C++ DSA problems",
  "integrating AI into applications",
  "architecting system designs",
  "building React user interfaces",
  "developing Flutter mobile apps",
  "debugging distributed services",
  "engineering ESP32 communication protocols",
  "exploring database internals",
  "deploying full-stack applications",
  "status: shipping features 🚀",
];
const achievementsData = [
  {
    id: 1,
    title: "100-Day LeetCode Streak",
    subtitle: "Problem Solving · Consistency",
    description: [
      "Maintained a continuous 100-day streak of solving algorithmic and data structure problems on LeetCode.",
      "Focused heavily on optimizing time and space complexities while tackling problems across dynamic programming, graphs, and trees.",
    ],
    impact:
      "Built strong fundamentals in competitive programming, algorithmic thinking, and established a daily habit of consistent problem-solving.",
    impactLabel: "Takeaway",
    images: ["image.png"],
  },
  {
    id: 2,
    title: "Best Performer of the Week",
    subtitle: "Sumago Infotech Pvt. Ltd. · Internship",
    description: [
      'Recognized twice as the "Best Performer of the Week" during my 6-month software development internship.',
      "Awarded for outstanding contributions to the AI-powered chatbot project using Angular, Spring Boot, and LLMs, as well as maintaining high code quality.",
    ],
    impact:
      "Validates my ability to adapt quickly to corporate workflows, collaborate effectively within a team, and deliver reliable features under tight deadlines.",
    impactLabel: "Impact",
    images: ["Sumago.jpeg", "1747634590346.jpeg"],
  },
  {
    id: 3,
    title: "1st Place - Blind Coding",
    subtitle: "College-Level · SGOI",
    description: [
      'Secured first place in the college-level "Blind Coding" competition.',
      "This unique challenge required writing accurate, optimized, and compiling code with the monitor completely turned off, relying solely on mental logic and syntax memory.",
    ],
    impact:
      "Demonstrated strong mental mapping of code structure, deep familiarity with language syntax, and a strong foundation in logic implementation.",
    impactLabel: "Takeaway",
    images: ["1746956683371.jpeg"],
  },
];
export default function MyLearn() {
  const [activeImage, setActiveImage] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [coldStorageImages, setColdStorageImages] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeData = achievementsData[activeIndex];
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % parkingImages.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setColdStorageImages((prev) => (prev + 1) % parkingImages.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % achievementsData.length);
    }, 7000);
    return () => clearInterval(timer); // Cleanup on unmount
  }, []);
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
            className="border border-hair bg-bg p-5 md:p-6 h-full flex flex-col"
            style={{ gridColumn: "span 4 / span 4" }}
          >
            {/* Category Label */}
            <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-accent block mb-3 md:mb-4">
              Hardware
            </span>

            <div className="flex-1 flex flex-col gap-4 md:gap-6">
              {/* Header Section */}
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
                  className="m-0 mt-1 text-sm text-muted"
                  style={{ lineHeight: 1.6 }}
                >
                  Cold Storage Monitoring System
                </p>
              </div>

              {/* Image Section - Height significantly increased */}
              <div className="relative flex-1 w-full min-h-[320px] md:min-h-[420px] flex items-center justify-center my-2">
                <img
                  src={coldStorageImg[activeImage]}
                  alt="AgriPreserve Mobile App Screenshot"
                  className="absolute inset-0 w-full h-full object-contain transition-all duration-500 drop-shadow-2xl scale-105"
                />
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-2">
                {coldStorageImg.map((_, index) => (
                  <button
                    key={index}
                    aria-label={`View screenshot ${index + 1}`}
                    style={{
                      width: activeImage === index ? "20px" : "6px",
                      height: "6px",
                      borderRadius: "3px",
                      background:
                        activeImage === index
                          ? "var(--accent)"
                          : "var(--hair-2)",
                      transition: "all 0.3s ease",
                    }}
                  />
                ))}
              </div>

              {/* Footer Tags */}
              <div className="flex flex-wrap gap-3 border-t border-hair pt-4 mt-auto">
                <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted-2">
                  Flutter App
                </span>
                <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted-2">
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
                  <div className="min-h-[180px] flex items-center justify-center">
                    <img
                      src={parkingImages[activeImage]}
                      alt="Smart Parking"
                      className="max-h-[250px] w-auto object-contain transition-all duration-500"
                    />
                  </div>
                  <div className="flex gap-[6px] justify-center">
                    {parkingImages.map((_, index) => (
                      <div
                        key={index}
                        style={{
                          width: activeImage === index ? "16px" : "6px",
                          height: "6px",
                          borderRadius: "3px",
                          background:
                            activeImage === index
                              ? "var(--accent)"
                              : "var(--hair-2)",
                          transition: "all 0.3s ease",
                        }}
                      />
                    ))}
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
            className="border border-hair bg-bg p-6 md:p-7 h-full flex flex-col transition-all duration-300"
            style={{ gridColumn: "span 4 / span 4" }}
          >
            <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-accent block mb-4">
              Milestones
            </span>

            <div className="flex-1 flex flex-col justify-between gap-6 md:gap-8">
              {/* Dynamic Text Info */}
              <div className="min-h-[140px]">
                <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted block mb-3 text-muted-2">
                  {activeData.subtitle}
                </span>
                <h3
                  className="m-0 font-medium tracking-[-0.02em]"
                  style={{
                    fontSize: "clamp(19px, 2vw, 24px)",
                    lineHeight: 1.15,
                  }}
                >
                  {activeData.title}
                </h3>
                <p
                  className="m-0 mt-3 text-sm text-muted"
                  style={{ lineHeight: 1.6 }}
                >
                  {activeData.description[0]}
                </p>
              </div>

              {/* Dynamic Visual Area */}
              <div className="flex-1 min-h-[220px] flex items-center justify-center relative">
                {activeData.id === 1 ? (
                  // LEETCODE BOOK UI - Preserved Exactly
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
                    <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted-2 text-center">
                      Consistent effort
                    </span>
                  </div>
                ) : (
                  // IMAGE UI FOR OTHER ACHIEVEMENTS
                  <div className="w-full h-full flex items-center justify-center relative p-2">
                    <img
                      src={activeData.images[0]}
                      alt={activeData.title}
                      className="absolute inset-0 w-full h-full object-contain transition-all duration-500 drop-shadow-lg scale-100 md:scale-105"
                    />
                  </div>
                )}
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 mt-2">
                {achievementsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`View milestone ${index + 1}`}
                    style={{
                      width: activeIndex === index ? "20px" : "6px",
                      height: "6px",
                      borderRadius: "3px",
                      background:
                        activeIndex === index
                          ? "var(--accent)"
                          : "var(--hair-2)",
                      transition: "all 0.3s ease",
                    }}
                  />
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-hair pt-4 mt-auto">
                <a
                  className="inline-block text-[13px] border-b border-fg pb-0.5 transition-colors hover:text-accent"
                  href="https://github.com/Tanmay-Kanase"
                  target="_blank"
                  rel="noreferrer"
                >
                  View GitHub Profile (300+ Commits) →
                </a>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-10 py-[14px] border-t border-hair border-b overflow-hidden flex relative">
          {/* Injecting the keyframes directly so the animation works without external CSS */}
          <style>
            {`
      @keyframes ticker {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-ticker {
        animation: ticker 45s linear infinite;
        display: flex;
        width: max-content;
      }
    `}
          </style>

          <div className="animate-ticker whitespace-nowrap font-mono text-[12px] tracking-[0.04em] text-muted">
            {/* We duplicate the array [...logItems, ...logItems] to create a seamless infinite loop */}
            {[...logItems, ...logItems].map((item, index) => (
              <span key={index} className="flex items-center px-[22px]">
                <span className="text-accent mr-[10px]">Log</span>
                <span>&gt; {item}</span>
                <span className="ml-[22px]" style={{ color: "var(--hair-2)" }}>
                  /
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

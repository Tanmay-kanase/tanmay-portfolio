import { useEffect, useState } from "react";

// --- DATA FOR YOUR PROJECTS ---
const smartParkingSteps = [
  {
    id: 1,
    icon: "🔍",
    shortName: "Search",
    badge: "Discovery",
    title: "Smart Parking Search & Filtering",
    desc: "Implemented intelligent search and filtering capabilities, allowing users to quickly locate parking facilities based on location, pricing, availability, and distance.",
    tags: ["Search", "Filtering", "UX"],
    imageSrc: "parking/Screenshot (619).png",
  },
  {
    id: 2,
    icon: "🎫",
    shortName: "Ticket",
    badge: "Automation",
    title: "Digital Ticket & Email Delivery",
    desc: "Generated booking confirmations and digital parking tickets automatically via email, ensuring a seamless post-payment experience.",
    tags: ["Email Service", "Ticketing", "Automation"],
    imageSrc: "parking/Screenshot (628).png",
  },
  {
    id: 3,
    icon: "🔒",
    shortName: "Reserve",
    badge: "Concurrency Control",
    title: "Redis-based Locking & Caching",
    desc: "Leveraged Redis-based locking mechanisms to prevent race conditions during concurrent parking slot reservations, reducing booking conflicts by approximately 80%.",
    tags: ["Redis", "Concurrency", "Caching"],
    imageSrc: "parking/image.png",
  },
  {
    id: 4,
    icon: "💳",
    shortName: "Payment",
    badge: "Integration",
    title: "Secure Payments & Refund Processing",
    desc: "Integrated Razorpay for secure transactions and implemented automated refund workflows for cancelled bookings, improving user trust and operational efficiency.",
    tags: ["Razorpay", "Refunds", "Transactions"],
    imageSrc: "parking/Screenshot (624).png",
  },
  {
    id: 5,

    icon: "📍",
    shortName: "Locate",
    badge: "Geospatial Search",
    title: "Finding Nearby Parking Facilities",
    desc: "Utilized MongoDB Geospatial Indexing, Google Maps API, and the Haversine Formula. Offloaded distance calculations to client applications, reducing server-side computation overhead by approximately 20% and improving response times.",
    tags: ["MongoDB Geospatial", "Google Maps API", "Haversine"],
    imageSrc: "parking/Screenshot (619).png",
  },
  {
    id: 6,
    icon: "📱",
    shortName: "Verify",
    badge: "Access Control",
    title: "QR-Based Verification",
    desc: "Generated unique QR codes for parking verification. Users can scan and authenticate their parking slot securely upon arrival.",
    tags: ["QR Verification", "Flutter", "Spring Boot"],
    imageSrc: "parking/Screenshot (614).png",
  },
  {
    id: 7,
    icon: "📲",
    shortName: "Mobile",
    badge: "Cross Platform",
    title: "Flutter Mobile Application",
    desc: "Built a cross-platform mobile application enabling users to search, reserve, pay, and manage parking bookings directly from their smartphones.",
    tags: ["Flutter", "Mobile App", "Cross Platform"],
  },
];

const coldStorageSteps = [
  {
    id: 1,
    icon: "📡",
    shortName: "Sensors",
    badge: "IoT Hardware",
    title: "ESP32 Sensor Integration",
    desc: "Engineered a low-overhead communication protocol for ESP32 by replacing complex JSON payloads with lightweight structured messages, reducing parsing latency by 30%.",
    tags: ["ESP32", "Low Latency", "Sensors"],
    imageSrc: "cold storage/image.png",
    imageType: "mobile",
  },
  {
    id: 2,
    icon: "⚡",
    shortName: "Sync",
    badge: "Real-time",
    title: "WebSocket Communication",
    desc: "Implemented WebSockets and REST APIs for real-time monitoring of temperature, humidity, gas concentration, and relay status.",
    tags: ["WebSockets", "Node.js", "REST API"],
    imageSrc: "cold storage/Screenshot_20260327_185012.jpg",
    imageType: "mobile",
  },
  {
    id: 3,
    icon: "📲",
    shortName: "Monitor",
    badge: "Mobile App",
    title: "Flutter Live Dashboard",
    desc: "Developed a Flutter application backed by MongoDB to view live sensor updates and manage cold storage environments remotely.",
    tags: ["Flutter", "MongoDB", "UI/UX"],
    imageSrc: "cold storage/Screenshot_20260327_185007.jpg",
    imageType: "mobile",
  },
  {
    id: 4,
    icon: "🤖",
    shortName: "AI",
    badge: "Artificial Intelligence",
    title: "AI-Powered Assistant",
    desc: "Integrated an AI assistant capable of answering operational queries, explaining sensor readings, providing troubleshooting guidance, and assisting managers with decision-making.",
    tags: ["AI", "LLM", "Assistant"],
    imageSrc: "cold storage/Screenshot_20260327_185027.jpg",
    imageType: "mobile",
  },
  {
    id: 5,
    icon: "📈",
    shortName: "Analytics",
    badge: "Insights",
    title: "Historical Data Analysis",
    desc: "Stored and analyzed environmental data trends to help managers identify inefficiencies, monitor storage conditions, and make data-driven decisions.",
    tags: ["Analytics", "MongoDB", "Reports"],
    imageSrc: "cold storage/Screenshot_20260327_185054.jpg",
    imageType: "mobile",
  },
  {
    id: 6,
    icon: "🔔",
    shortName: "Alerts",
    badge: "Notifications",
    title: "Instant Notification Delivery",
    desc: "Built a reliable alerting mechanism that instantly notifies managers when environmental parameters exceed safe thresholds.",
    tags: ["Alerts", "Reliability", "Notifications"],
    imageSrc: "cold storage/Screenshot_20260327_185120.jpg",
    imageType: "mobile",
  },
  {
    id: 7,
    icon: "⚙️",
    shortName: "Control",
    badge: "Automation",
    title: "Remote Relay Management",
    desc: "Enabled remote control of cooling systems and relays directly from the mobile application, allowing operators to respond quickly to changing conditions.",
    tags: ["Automation", "Relay Control", "Remote Access"],
    imageSrc: "cold storage/Screenshot_20260327_185012.jpg",
    imageType: "mobile",
  },
];

const aiIntegratedQuiz = [
  {
    id: 1,
    icon: "🧠",
    shortName: "AI Quiz",
    badge: "Education",
    title: "AI-Integrated Quiz Application",
    desc: "Developed an AI-powered quiz platform featuring immersive full-screen quiz mode, quiz exploration, detailed guidelines, built-in calculator support, and advanced tab-switch detection to ensure a secure and distraction-free assessment experience.",
    tags: ["AI", "Quiz", "Full Screen", "Calculator", "Security"],
    imageSrc: "quiz/Screenshot (654).png",
  },
  {
    id: 2,
    icon: "📖",
    shortName: "Explore",
    badge: "Discovery",
    title: "Quiz Exploration & Category Browsing",
    desc: "Implemented an intuitive explore section that allows users to discover quizzes across multiple categories, difficulty levels, and topics, making learning more engaging and personalized.",
    tags: ["Explore", "Categories", "Discovery"],
    imageSrc: "quiz/Screenshot (655).png",
  },
  {
    id: 3,
    icon: "📝",
    shortName: "Guidelines",
    badge: "Instructions",
    title: "Comprehensive Quiz Guidelines",
    desc: "Designed a dedicated quiz guidelines module that provides clear instructions, rules, scoring information, and assessment requirements before users begin their quizzes.",
    tags: ["Guidelines", "Instructions", "UX"],
    imageSrc: "quiz/Screenshot (656).png",
  },
  {
    id: 4,
    icon: "🖥️",
    shortName: "Full Screen",
    badge: "Exam Mode",
    title: "Distraction-Free Full-Screen Quiz Experience",
    desc: "Integrated a mandatory full-screen assessment mode to create an exam-like environment, minimizing distractions and helping users stay focused throughout the quiz session.",
    tags: ["Full Screen", "Focus", "Exam Mode"],
    imageSrc: "quiz/Screenshot (657).png",
  },
  {
    id: 5,
    icon: "🧮",
    shortName: "Calculator",
    badge: "Utility",
    title: "Built-In Calculator Support",
    desc: "Added an integrated calculator tool for solving numerical and logical problems directly within the quiz interface, enhancing convenience without leaving the assessment environment.",
    tags: ["Calculator", "Utility", "Math"],
    imageSrc: "quiz/Screenshot (659).png",
  },
  {
    id: 6,
    icon: "⚙",
    shortName: "Coding Assessment",
    badge: "Coding",
    title: "Coding assessment for programming quizzes",
    desc: "Implemented Coding Assessment so student can write and run code and we can add the coding marks in the result.",
    tags: ["Coding", "Tab Detection", "Proctoring"],
    imageSrc: "quiz/Screenshot (661).png",
  },
  {
    id: 7,
    icon: "🚫",
    shortName: "Tab Security",
    badge: "Proctoring",
    title: "Automatic Exit on Tab Switching",
    desc: "Implemented browser tab-switch detection that automatically terminates or exits the quiz when users navigate away, ensuring fairness, integrity, and a secure testing experience.",
    tags: ["Security", "Tab Detection", "Proctoring"],
    imageSrc: "quiz/Screenshot (660).png",
  },
  {
    id: 8,
    icon: "🧩",
    shortName: "Thankyou page ",
    badge: "Thank you",
    title: "Thank you page at last ",
    desc: "After successfully completing the quiz and coding assessment , saying thank you to student.",
    tags: ["Security", "Tab Detection", "Proctoring"],
    imageSrc: "quiz/Screenshot (662).png",
  },
];
const projectConfig = {
  parking: {
    title: "Smart Parking System",
    description:
      "Smart Parking System with search, booking, payments, QR verification, Redis locking, geospatial search and Flutter mobile application.",
  },
  coldStorage: {
    title:
      "Agri Preserve: Smart Cold Storage system for farmers (Final Year Project)",
    description:
      "IoT-based cold storage monitoring using ESP32, Flutter, Node.js, MongoDB, WebSockets, AI assistant, analytics and remote relay control.",
  },
  aiIntegrQuiz: {
    title: "AI-Integrated Quiz Platform",
    description:
      "Developed a comprehensive AI-powered quiz application featuring quiz exploration, detailed assessment guidelines, immersive full-screen exam mode, integrated calculator support, and secure tab-switch detection that automatically exits assessments to maintain integrity, delivering an engaging, focused, and reliable testing experience.",
  },
};
// ... KEEP YOUR DATA ARRAYS AND CONFIG AT THE TOP (smartParkingSteps, coldStorageSteps, projectConfig) ...

// 1. We create a sub-component to handle the independent state and auto-play for each project
const SingleProjectView = ({ projectKey, steps, info }) => {
  const [activeStepId, setActiveStepId] = useState(1);
  const totalSteps = steps.length;
  const activeStep = steps.find((s) => s.id === activeStepId);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStepId((prev) => (prev === totalSteps ? 1 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSteps]);

  const handleNext = () => {
    if (activeStepId < totalSteps) setActiveStepId(activeStepId + 1);
  };

  const handlePrev = () => {
    if (activeStepId > 1) setActiveStepId(activeStepId - 1);
  };

  return (
    <div className="mb-20 last:mb-0">
      <div className="mb-6">
        <h2
          className="font-medium leading-[1.1]"
          style={{
            margin: "0px 0px 16px",
            fontSize: "clamp(24px, 3vw, 36px)",
            letterSpacing: "-0.025em",
          }}
        >
          {info.title}
        </h2>
        <p
          className="text-muted max-w-[620px]"
          style={{
            margin: "0px 0px 40px",
            fontSize: "15px",
            lineHeight: "1.7",
          }}
        >
          {info.description}
        </p>
      </div>

      {/* Stepper Timeline */}
      <div>
        <div className="overflow-x-auto pb-2 mb-8">
          <div className="flex items-start gap-0 min-w-max">
            {steps.map((step, index) => {
              const isActive = step.id === activeStepId;
              const isLast = index === steps.length - 1;

              return (
                <div key={step.id} className="flex items-start">
                  <button
                    onClick={() => setActiveStepId(step.id)}
                    className="flex flex-col items-center gap-[10px] bg-transparent border-none cursor-pointer group"
                    style={{ padding: "4px", width: "80px" }}
                  >
                    <div
                      className="flex items-center justify-center rounded-full relative shrink-0 transition-all duration-200"
                      style={{
                        width: "52px",
                        height: "52px",
                        fontSize: "22px",
                        border: isActive
                          ? "2px solid var(--accent)"
                          : "2px solid var(--hair-2)",
                        background: isActive
                          ? "rgba(184, 80, 46, 0.07)"
                          : "rgba(184, 80, 46, 0.04)",
                      }}
                    >
                      {step.icon}
                      <span
                        className="absolute flex items-center justify-center rounded-full font-mono font-semibold"
                        style={{
                          top: "-6px",
                          right: "-6px",
                          width: "18px",
                          height: "18px",
                          background: isActive
                            ? "var(--accent)"
                            : "var(--muted)",
                          color: "var(--bg)",
                          fontSize: "9px",
                        }}
                      >
                        {step.id}
                      </span>
                    </div>
                    <span
                      className="font-mono text-[11px] tracking-[0.08em] uppercase text-center leading-[1.3] max-w-[72px] transition-colors"
                      style={{
                        fontSize: "10px",
                        color: isActive ? "var(--fg)" : "var(--muted)",
                      }}
                    >
                      {step.shortName}
                    </span>
                  </button>

                  {/* Horizontal Line between steps */}
                  {!isLast && (
                    <div
                      className="shrink-0 transition-colors duration-300"
                      style={{
                        height: "2px",
                        width: "40px",
                        background:
                          step.id < activeStepId
                            ? "var(--accent)"
                            : "var(--hair)",
                        marginTop: "25px",
                      }}
                    ></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Step Content Box */}
        {activeStep && (
          <div className="border border-hair bg-bg animate-fade-in">
            <div
              className="border-b border-hair flex gap-5 items-start"
              style={{ padding: "28px 32px 24px" }}
            >
              <div className="text-[36px] leading-none shrink-0">
                {activeStep.icon}
              </div>
              <div className="flex-1">
                <div className="flex gap-3 items-center mb-[10px] flex-wrap">
                  <span
                    className="font-mono uppercase bg-accent text-bg"
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.08em",
                      padding: "3px 9px",
                    }}
                  >
                    {activeStep.badge}
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-muted-2">
                    Step {activeStep.id} of {totalSteps}
                  </span>
                </div>
                <h3
                  className="m-0 font-medium leading-[1.2] tracking-[-0.02em]"
                  style={{ fontSize: "clamp(17px, 2vw, 22px)" }}
                >
                  {activeStep.title}
                </h3>
              </div>
            </div>

            <div
              className="grid gap-8 items-start grid-cols-1 md:grid-cols-2"
              style={{ padding: "24px 32px" }}
            >
              {/* Left text column */}
              <div>
                <p
                  className="text-muted"
                  style={{
                    margin: "0px 0px 24px",
                    fontSize: "15px",
                    lineHeight: "1.75",
                  }}
                >
                  {activeStep.desc}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {activeStep.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="font-mono tracking-[0.08em] uppercase border border-hair bg-bg-2 text-muted"
                      style={{ fontSize: "11px", padding: "4px 10px" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right image column */}
              <div className="flex items-center justify-center">
                <div
                  className="border border-hair overflow-hidden rounded-md bg-bg-2 flex items-center justify-center"
                  style={{ minHeight: "100px", width: "100%" }}
                >
                  {activeStep.imageSrc && (
                    <img
                      src={activeStep.imageSrc}
                      alt={activeStep.title}
                      className={
                        activeStep.imageType === "mobile"
                          ? "max-w-[350px] w-full h-[400px] object-contain mx-auto"
                          : "w-full h-auto object-cover"
                      }
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Footer Navigation Controls */}
            <div
              className="border-t border-hair flex justify-between items-center"
              style={{ padding: "16px 32px" }}
            >
              <button
                onClick={handlePrev}
                disabled={activeStepId === 1}
                className="font-mono border border-hair transition-colors duration-150"
                style={{
                  fontSize: "13px",
                  background: "none",
                  padding: "8px 20px",
                  cursor: activeStepId === 1 ? "not-allowed" : "pointer",
                  color: activeStepId === 1 ? "var(--muted-2)" : "var(--fg)",
                  opacity: activeStepId === 1 ? 0.5 : 1,
                }}
              >
                ← Previous
              </button>

              <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted">
                {activeStepId} / {totalSteps}
              </span>

              <button
                onClick={handleNext}
                disabled={activeStepId === totalSteps}
                className="font-mono transition-colors duration-150"
                style={{
                  fontSize: "13px",
                  background:
                    activeStepId === totalSteps ? "var(--hair)" : "var(--fg)",
                  color:
                    activeStepId === totalSteps ? "var(--muted)" : "var(--bg)",
                  padding: "8px 20px",
                  border: "1px solid transparent",
                  cursor:
                    activeStepId === totalSteps ? "not-allowed" : "pointer",
                }}
              >
                {activeStepId === totalSteps ? "Done" : "Next →"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// 2. Main component that handles the layout and ordering
const ProjectWalkthrough = () => {
  // Use an array to track the order of the projects. The first element is shown on top.
  const [projectOrder, setProjectOrder] = useState([
    "parking",
    "coldStorage",
    "aiIntegrQuiz",
  ]);

  const handleProjectSwitch = (topProject) => {
    if (topProject === "parking") {
      setProjectOrder(["parking", "coldStorage", "aiIntegrQuiz"]);
    } else if (topProject === "coldStorage") {
      setProjectOrder(["coldStorage", "parking", "aiIntegrQuiz"]);
    } else if (topProject === "aiIntegrQuiz") {
      setProjectOrder(["aiIntegrQuiz", "parking", "coldStorage"]);
    }

    window.scrollTo({
      top: document.getElementById("project-section")?.offsetTop,
      behavior: "smooth",
    });
  };

  const projectDataMap = {
    parking: { steps: smartParkingSteps, info: projectConfig.parking },
    coldStorage: { steps: coldStorageSteps, info: projectConfig.coldStorage },
    aiIntegrQuiz: { steps: aiIntegratedQuiz, info: projectConfig.aiIntegrQuiz },
  };

  return (
    <section
      id="project-section"
      className="py-20 border-t border-hair"
      style={{ padding: "56px 0" }}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Header Navigation */}
        <div className="flex gap-[18px] items-baseline mb-12 overflow-x-auto pb-2 scrollbar-hide">
          <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-muted-2 whitespace-nowrap">
            Project Architecture
          </span>
          <button
            onClick={() => handleProjectSwitch("parking")}
            className={`font-mono font-bold text-[14px] tracking-[0.08em] uppercase transition-colors whitespace-nowrap ${
              projectOrder[0] === "parking"
                ? "text-accent"
                : "text-muted hover:text-fg"
            }`}
          >
            Smart Parking System (Web + Android)
          </button>
          <span className="text-muted-2">/</span>
          <button
            onClick={() => handleProjectSwitch("coldStorage")}
            className={`font-mono font-bold text-[14px] tracking-[0.08em] uppercase transition-colors whitespace-nowrap ${
              projectOrder[0] === "coldStorage"
                ? "text-accent"
                : "text-muted hover:text-fg"
            }`}
          >
            Agri Preserve: Cold Storage System for farmers.
          </button>
          <span className="text-muted-2">/</span>
          <button
            onClick={() => handleProjectSwitch("aiIntegrQuiz")}
            className={`font-mono font-bold text-[14px] tracking-[0.08em] uppercase transition-colors whitespace-nowrap ${
              projectOrder[0] === "aiIntegrQuiz"
                ? "text-accent"
                : "text-muted hover:text-fg"
            }`}
          >
            AI : Integrated Quiz App{" "}
          </button>
        </div>

        {/* Render both projects based on the current order array */}
        {projectOrder.map((projectKey) => (
          <SingleProjectView
            key={projectKey}
            projectKey={projectKey}
            steps={projectDataMap[projectKey].steps}
            info={projectDataMap[projectKey].info}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectWalkthrough;

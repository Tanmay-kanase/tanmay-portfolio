import { useState } from "react";

// --- DATA FOR YOUR PROJECTS ---
const smartParkingSteps = [
  {
    id: 1,
    icon: "📍",
    shortName: "Locate",
    badge: "Geospatial Search",
    title: "Finding Nearby Parking Facilities",
    desc: "Utilized MongoDB Geospatial Indexing, Google Maps API, and the Haversine Formula. Offloaded distance calculations to client applications, reducing server-side computation overhead by approximately 20% and improving response times.",
    tags: ["MongoDB Geospatial", "Google Maps API", "Haversine"],
    imagePlaceholder: "Screenshot of Maps/Location UI",
    imageSrc: "", // <-- PUT YOUR SCREENSHOT PATH HERE
  },
  {
    id: 2,
    icon: "🔒",
    shortName: "Reserve",
    badge: "Concurrency Control",
    title: "Redis-based Locking & Caching",
    desc: "Leveraged Redis-based locking mechanisms to prevent race conditions during concurrent parking slot reservations. This reduced booking conflicts by approximately 80% and heavily improved data consistency.",
    tags: ["Redis", "Concurrency", "Caching"],
    imagePlaceholder: "Screenshot of Slot Booking UI",
    imageSrc: "",
  },
  {
    id: 3,
    icon: "💳",
    shortName: "Payment",
    badge: "Integration",
    title: "Secure Checkout & Receipts",
    desc: "Implemented secure user authentication, Razorpay payment integration, and automated email receipt generation upon successful transaction.",
    tags: ["Razorpay", "Authentication", "Email Alerts"],
    imagePlaceholder: "Screenshot of Payment Success/Receipt",
    imageSrc: "",
  },
  {
    id: 4,
    icon: "📱",
    shortName: "Verify",
    badge: "Access Control",
    title: "QR-Based Verification",
    desc: "Generated unique QR codes for parking verification. The cross-platform application allows users to scan and authenticate their parking slot securely upon arrival.",
    tags: ["QR Verification", "Flutter App", "Spring Boot"],
    imagePlaceholder: "Screenshot of QR Code / Scanner",
    imageSrc: "",
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
    imagePlaceholder: "Hardware or Data Stream Screenshot",
    imageSrc: "",
  },
  {
    id: 2,
    icon: "⚡",
    shortName: "Sync",
    badge: "Real-time",
    title: "WebSocket Communication",
    desc: "Implemented WebSockets and REST APIs for real-time monitoring of temperature, humidity, gas concentration, and relay status.",
    tags: ["WebSockets", "Node.js", "REST API"],
    imagePlaceholder: "Backend/Console Screenshot",
    imageSrc: "",
  },
  {
    id: 3,
    icon: "📲",
    shortName: "Monitor",
    badge: "Mobile App",
    title: "Flutter Live Dashboard",
    desc: "Developed a Flutter application backed by MongoDB to view live sensor updates and manage cold storage environments remotely.",
    tags: ["Flutter", "MongoDB", "UI/UX"],
    imagePlaceholder: "Flutter App Dashboard Screenshot",
    imageSrc: "",
  },
  {
    id: 4,
    icon: "🔔",
    shortName: "Alerts",
    badge: "Notifications",
    title: "Instant Notification Delivery",
    desc: "Built a reliable alerting mechanism for enhanced user accessibility, notifying managers instantly when parameters exceed safe thresholds.",
    tags: ["Alerts", "Reliability", "Push Notifications"],
    imagePlaceholder: "Mobile Notification Screenshot",
    imageSrc: "",
  },
];

const ProjectWalkthrough = () => {
  // Use a string to track the active project type
  const [activeProject, setActiveProject] = useState("parking"); // "parking" or "coldStorage"
  const [activeStepId, setActiveStepId] = useState(1);

  // Derive the active array based on the selected project
  const currentSteps =
    activeProject === "parking" ? smartParkingSteps : coldStorageSteps;

  const activeStep = currentSteps.find((s) => s.id === activeStepId);
  const totalSteps = currentSteps.length;

  const handleNext = () => {
    if (activeStepId < totalSteps) setActiveStepId(activeStepId + 1);
  };

  const handlePrev = () => {
    if (activeStepId > 1) setActiveStepId(activeStepId - 1);
  };

  const handleProjectSwitch = (projectType) => {
    setActiveProject(projectType);
    setActiveStepId(1); // Reset to the first step when switching projects
  };

  return (
    <section
      className="py-20 border-t border-hair"
      style={{ padding: "56px 0" }}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        {/* Header Navigation */}
        <div className="flex gap-[18px] items-baseline mb-10 overflow-x-auto pb-2 scrollbar-hide">
          <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-muted-2 whitespace-nowrap">
            Project Architecture
          </span>
          <button
            onClick={() => handleProjectSwitch("parking")}
            className={`font-mono font-bold text-[14px] tracking-[0.08em] uppercase transition-colors whitespace-nowrap ${
              activeProject === "parking"
                ? "text-accent"
                : "text-muted hover:text-fg"
            }`}
          >
            Smart Parking System
          </button>
          <span className="text-muted-2">/</span>
          <button
            onClick={() => handleProjectSwitch("coldStorage")}
            className={`font-mono font-bold text-[14px] tracking-[0.08em] uppercase transition-colors whitespace-nowrap ${
              activeProject === "coldStorage"
                ? "text-accent"
                : "text-muted hover:text-fg"
            }`}
          >
            Smart Cold Storage
          </button>
        </div>

        <div className="mb-3">
          <h2
            className="font-medium leading-[1.1]"
            style={{
              margin: "0px 0px 16px",
              fontSize: "clamp(24px, 3vw, 36px)",
              letterSpacing: "-0.025em",
            }}
          >
            System workflow walkthrough
          </h2>
          <p
            className="text-muted max-w-[620px]"
            style={{
              margin: "0px 0px 40px",
              fontSize: "15px",
              lineHeight: "1.7",
            }}
          >
            A step-by-step breakdown of how the cross-platform application
            handles everything from architecture setup to deployment and access
            management.
          </p>
        </div>

        {/* Stepper Timeline */}
        <div>
          <div className="overflow-x-auto pb-2 mb-8">
            <div className="flex items-start gap-0 min-w-max">
              {currentSteps.map((step, index) => {
                const isActive = step.id === activeStepId;
                const isLast = index === currentSteps.length - 1;

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
                    className="border border-hair overflow-hidden w-full max-w-[320px] rounded-md bg-bg-2 flex items-center justify-center"
                    style={{ minHeight: "220px" }}
                  >
                    {activeStep.imageSrc ? (
                      <img
                        src={activeStep.imageSrc}
                        alt={activeStep.title}
                        className="w-full h-auto object-cover"
                      />
                    ) : (
                      <div className="text-center p-6 text-muted-2">
                        <div className="text-2xl mb-2">📸</div>
                        <span className="font-mono text-[11px] uppercase tracking-widest">
                          {activeStep.imagePlaceholder}
                        </span>
                      </div>
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
                      activeStepId === totalSteps
                        ? "var(--muted)"
                        : "var(--bg)",
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
    </section>
  );
};

export default ProjectWalkthrough;

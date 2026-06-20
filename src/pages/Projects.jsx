const Projects = () => {
  return (
    <section
      className="py-16 md:py-24 bg-bg text-fg min-h-screen"
      id="projects"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="flex gap-[18px] items-baseline mb-12 md:mb-20">
          <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-muted-2">
            03 / Work
          </span>
          <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-fg font-medium">
            Projects
          </span>
        </div>

        <div className="flex flex-col">
          {/* --- Project 1: Cold Storage --- */}
          <article className="border-t border-hair pt-10 pb-16 grid gap-8 md:grid-cols-12 md:gap-12">
            {/* Left Column: Meta */}
            <div className="md:col-span-3 flex flex-col md:border-r md:border-hair pr-6">
              <h4 className="font-medium text-lg tracking-[-0.01em] mb-1">
                AgriPreserve
              </h4>
              <p className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted mb-4">
                BE Final Year Project
              </p>

              <div className="flex flex-col gap-2 mt-auto">
                <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-muted-2">
                  2025 — Ongoing
                </span>
              </div>
            </div>

            {/* Middle Column: Information */}
            <div className="md:col-span-6 flex flex-col justify-center">
              <h3
                className="m-0 font-medium tracking-[-0.02em] mb-5"
                style={{
                  fontSize: "clamp(20px, 2.5vw, 28px)",
                  lineHeight: 1.15,
                }}
              >
                Cold Storage Monitoring System for Farmers
              </h3>

              <ul
                className="m-0 text-sm text-muted space-y-3 pl-4 list-outside"
                style={{ lineHeight: 1.65, listStyleType: "square" }}
              >
                <li>
                  Built an IoT + Cloud-based cold storage monitoring system
                  using ESP32 and sensors .
                </li>
                <li>
                  Developed a Flutter mobile app paired with a Node.js backend
                  for real-time monitoring .
                </li>
                <li>
                  Optimized ESP32 API communication using compact encoded
                  payloads with Node.js backend parsing, significantly improving
                  transmission efficiency on the microcontroller .
                </li>
                <li>
                  Integrated AI models for spoilage prediction, fine-tuning
                  logic to account for specific produce ripening patterns and
                  temperature tolerances over multi-day periods.
                </li>
              </ul>
            </div>

            {/* Right Column: Tech Stack */}
            <div className="md:col-span-3 flex flex-col">
              <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-accent block mb-4">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "ESP32",
                  "IoT Sensors",
                  "Flutter",
                  "Node.js",
                  "AI Prediction",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 border border-hair font-mono text-[10px] tracking-[0.06em] uppercase text-muted bg-bg-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* --- Project 2: Smart Parking --- */}
          <article className="border-t border-hair pt-10 pb-16 grid gap-8 md:grid-cols-12 md:gap-12">
            {/* Left Column: Meta */}
            <div className="md:col-span-3 flex flex-col md:border-r md:border-hair pr-6">
              <h4 className="font-medium text-lg tracking-[-0.01em] mb-1">
                Smart Parking App
              </h4>
              <p className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted mb-4">
                Internship Project
              </p>

              <div className="flex flex-col gap-2 mt-auto">
                <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-muted-2">
                  2024
                </span>
                <a
                  href="#"
                  className="font-mono text-[10px] tracking-[0.08em] uppercase text-fg border-b border-hair-2 self-start pb-0.5 mt-2 hover:text-accent transition-colors"
                >
                  Live Demo ↗
                </a>
              </div>
            </div>

            {/* Middle Column: Information */}
            <div className="md:col-span-6 flex flex-col justify-center">
              <h3
                className="m-0 font-medium tracking-[-0.02em] mb-5"
                style={{
                  fontSize: "clamp(20px, 2.5vw, 28px)",
                  lineHeight: 1.15,
                }}
              >
                Cross-Platform Parking Solution
              </h3>

              <ul
                className="m-0 text-sm text-muted space-y-3 pl-4 list-outside"
                style={{ lineHeight: 1.65, listStyleType: "square" }}
              >
                <li>
                  Built a cross-platform smart parking system featuring
                  real-time slot booking, QR verification, and Razorpay
                  integration .
                </li>
                <li>
                  Engineered the backend using Spring Boot with a GeoSpatial
                  MongoDB database and built the frontend with ReactJS and
                  Flutter .
                </li>
                <li>
                  Implemented a Redis-based distributed slot locking mechanism
                  to prevent race conditions and double booking in concurrent
                  requests .
                </li>
                <li>
                  Utilized Mermaid.js state diagrams within the React frontend
                  to visualize and track the complete booking lifecycle.
                </li>
              </ul>
            </div>

            {/* Right Column: Tech Stack */}
            <div className="md:col-span-3 flex flex-col">
              <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-accent block mb-4">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "Spring Boot",
                  "ReactJS",
                  "Flutter",
                  "MongoDB",
                  "Redis",
                  "Razorpay",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 border border-hair font-mono text-[10px] tracking-[0.06em] uppercase text-muted bg-bg-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* --- Project 3: AI, DevOps & Full Stack --- */}
          <article className="border-t border-hair pt-10 pb-16 grid gap-8 md:grid-cols-12 md:gap-12 border-b">
            {/* Left Column: Meta */}
            <div className="md:col-span-3 flex flex-col md:border-r md:border-hair pr-6">
              <h4 className="font-medium text-lg tracking-[-0.01em] mb-1">
                Misc. Architectures
              </h4>
              <p className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted mb-4">
                Full Stack & DevOps
              </p>

              <div className="flex flex-col gap-2 mt-auto">
                <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-muted-2">
                  2022 — 2025
                </span>
                <a
                  href="#"
                  className="font-mono text-[10px] tracking-[0.08em] uppercase text-fg border-b border-hair-2 self-start pb-0.5 mt-2 hover:text-accent transition-colors"
                >
                  Deployed Link ↗
                </a>
              </div>
            </div>

            {/* Middle Column: Information */}
            <div className="md:col-span-6 flex flex-col justify-center">
              <h3
                className="m-0 font-medium tracking-[-0.02em] mb-5"
                style={{
                  fontSize: "clamp(20px, 2.5vw, 28px)",
                  lineHeight: 1.15,
                }}
              >
                AI, Real Estate & ERP Systems
              </h3>

              <ul
                className="m-0 text-sm text-muted space-y-3 pl-4 list-outside"
                style={{ lineHeight: 1.65, listStyleType: "square" }}
              >
                <li>
                  Developed a MERN-based Real Estate app and multiple
                  mini-projects, gaining hands-on experience with Docker, AWS
                  (EC2, S3), and GCP APIs .
                </li>
                <li>
                  Built an AI-powered Quiz App using Angular, TypeScript,
                  Node.js, and the OpenAI API .
                </li>
                <li>
                  Designed and developed a comprehensive Hostel Management
                  System (HostelERP) for student admissions and room allocation
                  using the classic ASP.NET MVC 5 framework backed by a robust
                  SQL Server database.
                </li>
              </ul>
            </div>

            {/* Right Column: Tech Stack */}
            <div className="md:col-span-3 flex flex-col">
              <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-accent block mb-4">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "MERN",
                  "Docker",
                  "AWS / GCP",
                  "Angular",
                  "OpenAI",
                  "ASP.NET MVC",
                  "SQL Server",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 border border-hair font-mono text-[10px] tracking-[0.06em] uppercase text-muted bg-bg-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Projects;

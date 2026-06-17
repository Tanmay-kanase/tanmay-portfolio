const Internships = () => {
  return (
    <section className="py-8 md:py-24 bg-bg text-fg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-4">
        {/* Page Header */}
        <div className="flex gap-[18px] items-baseline md:mb-20">
          <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-muted-2">
            02 / Experience
          </span>
          <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-fg font-medium">
            Internships & Training
          </span>
        </div>

        <div className="flex flex-col">
          {/* --- Sumago Infotech --- */}
          <article className="border-t border-hair pt-10 pb-16 grid gap-8 md:grid-cols-12 md:gap-12">
            {/* Left Column: Meta & Logo */}
            <div className="md:col-span-3 flex flex-col md:border-r md:border-hair pr-6">
              {/* Logo Placeholder - Replace src with your actual logo path */}
              <div className="w-16 h-16 bg-bg-2 border border-hair flex items-center justify-center mb-6 p-2">
                <img
                  src="/images/sumago-logo.png"
                  alt="Sumago Infotech Logo"
                  className="max-w-full max-h-full object-contain mix-blend-multiply opacity-80"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />
                <span className="hidden font-mono text-[10px] text-muted uppercase">
                  Logo
                </span>
              </div>

              <h4 className="font-medium text-lg tracking-[-0.01em] mb-1">
                Sumago Infotech Pvt Ltd
              </h4>
              <p className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted mb-4">
                Software Engineer Intern[cite: 1]
              </p>

              <div className="flex flex-col gap-2 mt-auto">
                <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-muted-2">
                  Jan 2026 — Present[cite: 1]
                </span>
                <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-muted-2">
                  Pune, India[cite: 1]
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
                AI-Powered Chatbot Platform
              </h3>

              <ul
                className="m-0 text-sm text-muted space-y-3 pl-4 list-outside"
                style={{ lineHeight: 1.65, listStyleType: "square" }}
              >
                <li>
                  Developed an AI-powered chatbot platform using locally hosted
                  Ollama LLM models for intelligent and context-aware
                  conversational responses[cite: 1].
                </li>
                <li>
                  Integrated and managed open-source LLM workflows with Spring
                  Boot backend services for prompt handling, chat processing,
                  and model communication[cite: 1].
                </li>
                <li>
                  Built responsive frontend interfaces using Angular for
                  real-time user interaction and chatbot experience[cite: 1].
                </li>
                <li>
                  Designed and implemented scalable RESTful APIs using Spring
                  Boot for user management, chat orchestration, and AI response
                  handling[cite: 1].
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-2">
                {["Angular", "Spring Boot", "Ollama LLM", "REST APIs"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 border border-hair font-mono text-[10px] tracking-[0.06em] uppercase text-muted bg-bg-2"
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Right Column: Certificate */}
            <div className="md:col-span-3 flex flex-col items-center justify-center md:items-end">
              <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-accent block mb-4 w-full text-left md:text-right">
                Certificate
              </span>

              {/* Certificate Image Placeholder - Replace src */}
              <div className="w-full aspect-[4/3] bg-bg-2 border border-hair flex items-center justify-center relative group overflow-hidden cursor-pointer transition-colors hover:border-hair-2">
                <img
                  src="/images/sumago-certificate.jpg"
                  alt="Sumago Certificate"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="hidden absolute inset-0 flex-col items-center justify-center gap-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-muted-2"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                  <span className="font-mono text-[9px] tracking-[0.1em] uppercase text-muted-2">
                    Add Image
                  </span>
                </div>
              </div>
            </div>
          </article>

          {/* --- ExcelR ECAP --- */}
          <article className="border-t border-hair pt-10 pb-16 grid gap-8 md:grid-cols-12 md:gap-12">
            {/* Left Column: Meta & Logo */}
            <div className="md:col-span-3 flex flex-col md:border-r md:border-hair pr-6">
              {/* Logo Placeholder */}
              <div className="w-16 h-16 bg-bg-2 border border-hair flex items-center justify-center mb-6 p-2">
                <img
                  src="/images/excelr-logo.png"
                  alt="ExcelR Logo"
                  className="max-w-full max-h-full object-contain mix-blend-multiply opacity-80"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />
                <span className="hidden font-mono text-[10px] text-muted uppercase">
                  Logo
                </span>
              </div>

              <h4 className="font-medium text-lg tracking-[-0.01em] mb-1">
                ExcelR
              </h4>
              <p className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted mb-4">
                ECAP Full Stack Java Training[cite: 1]
              </p>

              <div className="flex flex-col gap-2 mt-auto">
                <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-muted-2">
                  Completed
                </span>
                <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-muted-2">
                  Remote / Online
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
                Ticket Booking System
              </h3>

              <ul
                className="m-0 text-sm text-muted space-y-3 pl-4 list-outside"
                style={{ lineHeight: 1.65, listStyleType: "square" }}
              >
                <li>
                  Underwent rigorous hands-on training in full-stack development
                  focusing on Java, JSP, Servlet, Spring, Spring Boot, and React
                  architectures[cite: 1].
                </li>
                <li>
                  Engineered a comprehensive ticket booking project from
                  scratch, managing both the backend infrastructure and frontend
                  user experience.
                </li>
                <li>
                  Developed robust RESTful APIs using the Spring framework to
                  handle booking logic, user authentication, and data retrieval.
                </li>
                <li>
                  Implemented dynamic frontend interfaces using React Hooks for
                  state management and seamless API integration.
                </li>
                <li>
                  Designed and managed relational database schemas using MySQL
                  for secure and efficient data storage.
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "React",
                  "Spring Boot",
                  "MySQL",
                  "Java",
                  "JSP / Servlet",
                  "APIs",
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

            {/* Right Column: Certificate */}
            <div className="md:col-span-3 flex flex-col items-center justify-center md:items-end">
              <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-accent block mb-4 w-full text-left md:text-right">
                Certificate
              </span>

              {/* Certificate Image Placeholder */}
              <div className="w-full aspect-[4/3] bg-bg-2 border border-hair flex items-center justify-center relative group overflow-hidden cursor-pointer transition-colors hover:border-hair-2">
                <img
                  src="/images/excelr-certificate.jpg"
                  alt="ExcelR Certificate"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="hidden absolute inset-0 flex-col items-center justify-center gap-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-muted-2"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                  <span className="font-mono text-[9px] tracking-[0.1em] uppercase text-muted-2">
                    Add Image
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Internships;

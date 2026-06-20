import { useState } from "react";

const skillsData = [
  {
    id: 1,
    category: "Languages",
    title: "☕ Programming Languages",
    description:
      "Programming languages used for backend development, problem solving, automation, and system-level programming.",
    proficiency: "Advanced",
    tags: ["Java", "C", "C++", "Python", "JavaScript", "TypeScript", "Go"],
  },
  {
    id: 2,
    category: "Backend",
    title: " ⚙ Backend Development",
    description:
      "Technologies used to build scalable APIs, microservices, authentication systems, and real-time applications.",
    proficiency: "Advanced",
    tags: [
      "Spring Boot",
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "WebSockets",
      "Microservices Basics",
      "API Design",
    ],
  },
  {
    id: 3,
    category: "Frontend",
    title: "⚛ Frontend Development",
    description:
      "Modern frontend technologies used to create responsive and interactive web applications.",
    proficiency: "Intermediate",
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
    ],
  },
  {
    id: 4,
    category: "Mobile",
    title: "📱 Mobile Development",
    description:
      "Cross-platform mobile application development and real-time communication integration.",
    proficiency: "Intermediate",
    tags: ["Flutter", "Dart", "REST API Integration", "WebSocket Integration"],
  },
  {
    id: 5,
    category: "Databases",
    title: "🗄 Databases & Storage",
    description:
      "Database technologies for transactional systems, document storage, caching, and data management.",
    proficiency: "Advanced",
    tags: [
      "MySQL",
      "MongoDB",
      "Redis",
      "Database Design",
      "Query Optimization",
    ],
  },
  {
    id: 6,
    category: "Cloud & DevOps",
    title: "🐳 Cloud & DevOps",
    description:
      "Tools and platforms used for development workflows, deployment, version control, and containerization.",
    proficiency: "Intermediate",
    tags: [
      "Git",
      "GitHub",
      "Docker",
      "Linux (Ubuntu)",
      "Shell Scripting",
      "CI/CD Basics",
      "Postman",
    ],
  },
  {
    id: 7,
    category: "AI & Emerging Tech",
    title: "🤖 AI & Emerging Technologies",
    description:
      "Technologies and concepts used to integrate AI capabilities and intelligent features into applications.",
    proficiency: "Intermediate",
    tags: [
      "OpenAI APIs",
      "AI Integration",
      "Prompt Engineering",
      "RAG Basics",
      "LLM Applications",
    ],
  },
  {
    id: 8,
    category: "IoT",
    title: "🔌 IoT & Embedded Systems",
    description:
      "Hardware-software integration, sensor monitoring, and communication protocols for connected devices.",
    proficiency: "Intermediate",
    tags: [
      "ESP32",
      "IoT Systems",
      "Sensor Integration",
      "Serial Communication",
      "Real-Time Monitoring",
    ],
  },
  {
    id: 9,
    category: "Computer Science",
    title: "🧠 Core Computer Science",
    description:
      "Fundamental concepts essential for designing efficient, scalable, and reliable software systems.",
    proficiency: "Advanced",
    tags: [
      "Data Structures & Algorithms",
      "System Design",
      "Object-Oriented Programming",
      "Operating Systems",
      "Computer Networks",
      "DBMS",
    ],
  },
];

const categories = [
  "All",
  "Languages",
  "Backend",
  "Frontend",
  "Mobile",
  "Databases",
  "Cloud & DevOps",
  "AI & Emerging Tech",
  "IoT",
  "Computer Science",
];
const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter skills based on the selected tab
  const filteredSkills =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <main>
      {/* Header Section */}
      <section style={{ padding: "80px 0px 64px" }}>
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex gap-[18px] items-baseline mb-10">
            <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-muted-2">
              Capabilities
            </span>
            <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-fg font-medium">
              Technical Arsenal
            </span>
          </div>

          <h1
            className="font-medium max-w-[680px]"
            style={{
              margin: "0px 0px 24px",
              fontSize: "clamp(32px, 5vw, 60px)",
              letterSpacing: "-0.035em",
              lineHeight: "1",
            }}
          >
            Skills & Tools
          </h1>

          <p
            className="m-0 text-muted max-w-[560px]"
            style={{ fontSize: "clamp(16px, 1.8vw, 20px)", lineHeight: "1.6" }}
          >
            A comprehensive overview of the languages, frameworks, and platforms
            I use to build scalable, full-stack applications and solve complex
            technical problems.
          </p>
        </div>
      </section>

      {/* Skills List Section */}
      <section className="pb-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          {/* Interactive Filter Tabs */}
          <div className="flex gap-2 flex-wrap mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="border px-3 py-2 text-sm transition-colors duration-200 cursor-pointer"
                style={{
                  background:
                    activeCategory === category ? "var(--fg)" : "transparent",
                  borderColor:
                    activeCategory === category ? "var(--fg)" : "var(--hair)",
                }}
              >
                <span
                  className="font-mono text-[11px] tracking-[0.08em] uppercase"
                  style={{
                    color:
                      activeCategory === category
                        ? "var(--bg)"
                        : "var(--muted)",
                  }}
                >
                  {category}
                </span>
              </button>
            ))}
          </div>

          {/* List Wrapper */}
          <div className="border-t border-hair">
            {filteredSkills.map((skill) => (
              <div
                key={skill.id}
                className="grid gap-8 py-9 border-b border-hair items-start"
                style={{ gridTemplateColumns: "1fr" }} // Removed the arrow column for a clean list look
              >
                <div>
                  <div className="flex gap-4 mb-3 items-center">
                    <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-accent">
                      {skill.category}
                    </span>
                  </div>

                  <h2
                    className="font-serif font-normal tracking-[-0.01em] leading-[1.15]"
                    style={{
                      margin: "0px 0px 10px",
                      fontSize: "clamp(22px, 2.5vw, 34px)",
                    }}
                  >
                    {skill.title}
                  </h2>

                  <p
                    className="text-muted max-w-[620px]"
                    style={{
                      margin: "0px 0px 16px",
                      fontSize: "15px",
                      lineHeight: "1.6",
                    }}
                  >
                    {skill.description}
                  </p>

                  <div className="flex gap-[6px] flex-wrap mt-4">
                    {skill.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="font-mono uppercase text-fg border bg-bg-2"
                        style={{
                          fontSize: "10px",
                          letterSpacing: "0.06em",
                          padding: "4px 10px",
                          borderColor: "var(--hair-2)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Empty State (if a filter somehow has no items) */}
            {filteredSkills.length === 0 && (
              <div className="py-12 text-center text-muted">
                <p>No skills found for this category.</p>
              </div>
            )}
          </div>

          {/* Footer Metadata */}
          <div className="mt-10">
            <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted">
              {skillsData.map((s) => s.tags).flat().length} Total Technologies ·
              Code, Systems, Leadership
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Skills;

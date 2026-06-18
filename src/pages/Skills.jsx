import { useState } from "react";

const skillsData = [
  {
    id: 1,
    category: "Languages",
    title: "Programming Languages",
    description:
      "Core programming languages I use for system-level logic, competitive programming, and application development.",
    proficiency: "Advanced",
    tags: ["Java", "C", "C++"],
  },
  {
    id: 2,
    category: "Frameworks",
    title: "Frameworks & Technologies",
    description:
      "Libraries and frameworks I rely on to build scalable backend services, RESTful APIs, and dynamic user interfaces.",
    proficiency: "Intermediate",
    tags: ["Spring Boot", "React", "Node.js", "Express.js", "REST APIs"],
  },
  {
    id: 3,
    category: "Tools",
    title: "Tools & Platforms",
    description:
      "Version control, containerization, database management, and infrastructure tools used for seamless deployment and development workflows.",
    proficiency: "Intermediate",
    tags: [
      "Git",
      "GitHub",
      "VS Code",
      "Docker",
      "Linux (Ubuntu)",
      "Shell Scripting",
      "Redis",
    ],
  },
  {
    id: 4,
    category: "Soft Skills",
    title: "Interpersonal & Soft Skills",
    description:
      "Non-technical skills that allow me to collaborate effectively in team environments, lead initiatives, and communicate complex ideas clearly.",
    proficiency: "Professional",
    tags: ["Communication", "Teamwork", "Leadership", "Collaboration"],
  },
];

const categories = ["All", "Languages", "Frameworks", "Tools", "Soft Skills"];

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
                    <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-muted-2">
                      {skill.proficiency}
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

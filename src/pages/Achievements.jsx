// --- DATA FOR YOUR ACHIEVEMENTS ---
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
    // ADD YOUR IMAGE PATHS HERE (e.g., '/images/leetcode-badge.png')
    images: ["image.png"],
  },
  {
    id: 2,
    title: "Best Performer of the Week (2 Times)",
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
    title: "1st Place - Blind Coding Competition",
    subtitle: "College-Level · SGOI College of Engineering",
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

const Achievements = () => {
  return (
    <section
      className="border-t border-hair bg-bg"
      style={{ padding: "56px 0" }}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        {/* Header Section */}
        <div className="flex gap-[18px] items-baseline mb-10">
          <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-muted-2">
            Milestones
          </span>
          <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-fg font-medium">
            Achievements & Awards
          </span>
        </div>

        {/* Grid of Achievement Cards */}
        <div className="grid gap-8 max-w-[920px]">
          {achievementsData.map((item) => (
            <div key={item.id} className="border border-hair bg-bg p-8">
              {/* Card Header */}
              <div className="flex justify-between gap-4 items-start flex-wrap mb-4">
                <h2
                  className="m-0 font-medium tracking-[-0.02em]"
                  style={{ fontSize: "clamp(22px, 2.5vw, 30px)" }}
                >
                  {item.title}
                </h2>
                <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-muted-2">
                  {item.subtitle}
                </span>
              </div>

              {/* Card Description */}
              {item.description.map((desc, idx) => (
                <p
                  key={idx}
                  className={`m-0 text-sm text-muted ${idx > 0 ? "mt-4" : ""}`}
                  style={{ lineHeight: "1.75" }}
                >
                  {desc}
                </p>
              ))}

              {/* Image Grid */}
              <div
                className={`grid gap-4 mt-6 ${item.images.length > 1 ? "md:grid-cols-2" : "md:grid-cols-1"}`}
              >
                {item.images.map((imgSrc, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-square md:aspect-[16/9] overflow-hidden bg-bg-2 border border-hair flex items-center justify-center"
                  >
                    {imgSrc ? (
                      <img
                        alt={`${item.title} Screenshot`}
                        loading="lazy"
                        className="object-cover w-full h-full"
                        src={imgSrc}
                      />
                    ) : (
                      <div className="text-center p-4">
                        <div className="text-3xl mb-2 text-muted-2">🏆</div>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-2">
                          Image Placeholder
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Card Footer (Impact/Takeaway) */}
              <div className="mt-6 border-t border-hair pt-4">
                <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-accent block mb-2">
                  {item.impactLabel}
                </span>
                <p
                  className="m-0 text-sm text-muted"
                  style={{ lineHeight: "1.75" }}
                >
                  {item.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

// --- DATA FOR YOUR SEMESTERS ---
// You can edit the CGPA, subjects, and concepts learned for each semester here.
const semestersData = [
  {
    id: 8,
    term: "Semester 8",
    status: "Active",
    statusColor: "var(--accent)", // Assumes your CSS has this variable
    cgpa: "TBD",
    timeline: "Jan 2026 - May 2026",
    title: "Advanced Computing & Capstone Execution",
    description:
      "Focusing on advanced paradigms and the final execution and deployment of the AgriPreserve capstone project.",
    subjects: [
      "High Performance Computing",
      "Deep Learning",
      "Soft Computing",
      "Software Defined Networks",
      "Project Stage II",
    ],
  },
  {
    id: 7,
    term: "Semester 7",
    status: "Completed",
    statusColor: "var(--accent)", // Assumes your CSS has this variable
    cgpa: "9.45",
    timeline: "Aug 2025 - Dec 2025",
    title: "Algorithms, Intelligence & Quality Assurance",
    description:
      "Initiated research, predictive modeling, and hardware prototyping for the final-year engineering project.",
    subjects: [
      "Design & Analysis of Algorithms",
      "Machine Learning",
      "Blockchain Technology",
      "Software Testing & QA",
      "Project Stage I",
    ],
  },
  {
    id: 6,
    term: "Semester 6",
    status: "Completed",
    statusColor: "var(--accent)",
    cgpa: "8.83",
    timeline: "Jan 2025 - May 2025",
    title: "Data Science, Web Technologies & AI",
    description:
      "Explored advanced data processing, web application development, and artificial intelligence models . Specialized in Information Security to model cyber threats and apply cryptographic techniques .",
    subjects: [
      "Data Science & Big Data Analytics",
      "Web Technology",
      "Artificial Intelligence",
      "Information Security",
    ],
  },
  {
    id: 5,
    term: "Semester 5",
    status: "Completed",
    statusColor: "var(--accent)",
    cgpa: "7.58",
    timeline: "Aug 2024 - Dec 2024",
    title: "Core Computing Systems & Project Management",
    description:
      "Gained a strong foundation in database design, theoretical computation, operating systems, and network security . Chose Software Project Management to understand project lifecycles, scheduling, and agile tracking methodologies .",
    subjects: [
      "Database Management Systems",
      "Theory of Computation",
      "Systems Programming & OS",
      "Computer Networks & Security",
      "Software Project Management",
    ],
  },
  {
    id: 4,
    term: "Semester 4",
    status: "Completed",
    statusColor: "var(--accent)",
    cgpa: "7.55 (One Backlog)",
    timeline: "Jan 2024 - May 2024",
    title: "Algorithms, Software Engineering & Microprocessors",
    description:
      "Studied advanced algorithmic strategies, software engineering principles, and microprocessor architectures . Covered foundational programming paradigms and advanced mathematics .",
    subjects: [
      "Mathematics III",
      "Data Structures & Algorithms",
      "Software Engineering",
      "Microprocessor",
      "Principles of Programming Languages",
    ],
  },
  {
    id: 2,
    term: "Semester 2",
    status: "Completed",
    statusColor: "var(--accent)",
    cgpa: "7.55",
    timeline: "Jan 2023 - May 2023",
    title: "Foundational Engineering & Mechanics",
    description:
      "Explored advanced mathematics, applied chemistry, and classical mechanics. Developed visual communication skills through engineering graphics and applied theoretical knowledge in a collaborative Project Based Learning (PBL) environment.",
    subjects: [
      "Engineering Mathematics-II",
      "Engineering Chemistry",
      "Engineering Mechanics",
      "Basic Electronics Engineering",
      "Engineering Graphics",
      "Project Based Learning",
    ],
  },
  {
    id: 1,
    term: "Semester 1",
    status: "Completed",
    statusColor: "var(--accent)",
    cgpa: "7.35",
    timeline: "Aug 2022 - Dec 2022",
    title: "First Year Engineering Basics",
    description:
      "Introduced to core engineering principles including calculus, applied physics, and mechanical systems. Gained foundational computational thinking and coding skills using Python, alongside hands-on manufacturing experience in workshop practice.",
    subjects: [
      "Engineering Mathematics-I",
      "Engineering Physics",
      "Systems in Mechanical Engineering",
      "Basic Electrical Engineering",
      "Programming & Problem Solving",
      "Workshop Practice",
    ],
  },
];

const Education = () => {
  return (
    <main>
      {/* 1. HERO SECTION */}
      <section style={{ padding: "80px 0px 64px" }}>
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex gap-[18px] items-baseline mb-10">
            <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-muted-2">
              Academic Journey
            </span>
            <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-fg font-bold">
              Savitribai Phule Pune University (SPPU)
            </span>
          </div>
          <h1
            className="font-medium max-w-[720px] text-accent"
            style={{
              margin: "0px 0px 24px",
              fontSize: "clamp(32px, 5vw, 60px)",
              letterSpacing: "-0.035em",
              lineHeight: "1",
            }}
          >
            Bachelor of Engineering in Computer Engineering
          </h1>
          <p
            className="m-0 text-muted max-w-[620px]"
            style={{ fontSize: "clamp(16px, 1.8vw, 20px)", lineHeight: "1.6" }}
          >
            I am currently pursuing my degree at SGOI College of Engineering,
            Pune, with an expected graduation in 2026 . My academic journey has
            been a rigorous blend of theoretical computer science fundamentals
            and practical software development. Through consistent academic
            performance—maintaining an overall CGPA of 9.45—I have built a
            strong foundation in data structures, algorithms, system
            architecture, and modern full-stack development .
          </p>
        </div>
      </section>

      {/* 2. SEMESTER WISE LIST SECTION */}
      <section className="pb-24 bg-bg">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="border-t border-hair">
            {semestersData.map((sem) => (
              <div key={sem.id} className="border-b border-hair py-6">
                {/* Meta / Date Row */}
                <div className="flex justify-between gap-4 items-center mb-3 flex-wrap">
                  <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-muted-2">
                    {sem.timeline}
                  </span>
                </div>

                {/* Main Content Row */}
                <div
                  className="py-[26px] transition-colors duration-200"
                  style={{ background: "transparent" }}
                >
                  {/* Mobile Layout */}
                  <div className="flex flex-col gap-2 md:hidden">
                    <div className="flex items-center gap-3">
                      <span
                        className="size-[6px] rounded-full shrink-0"
                        style={{ background: sem.statusColor }}
                      ></span>
                      <span
                        className="font-mono text-[11px] tracking-[0.08em] uppercase"
                        style={{ color: sem.statusColor }}
                      >
                        {sem.status}
                      </span>
                      <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-muted-2">
                        SGPA: {sem.cgpa}
                      </span>
                    </div>
                    <div
                      className="font-medium tracking-[-0.015em] mb-1"
                      style={{ fontSize: "clamp(15px, 1.6vw, 18px)" }}
                    >
                      {sem.term}: {sem.title}
                    </div>
                    <div className="text-sm text-muted leading-[1.5]">
                      {sem.description}
                    </div>

                    {/* Mobile Subjects Boxes */}
                    {sem.subjects && sem.subjects.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {sem.subjects.map((sub, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 text-[10px] font-mono tracking-wide uppercase border rounded-md"
                            style={{
                              color: sem.statusColor,
                              borderColor: sem.statusColor,
                              backgroundColor: "transparent",
                            }}
                          >
                            {sub}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Desktop Layout */}
                  <div
                    className="hidden md:grid gap-x-7 items-start"
                    style={{ gridTemplateColumns: "110px 130px 1fr 20px" }}
                  >
                    {/* Status Column */}
                    <div className="flex items-center gap-[6px] pt-0.5">
                      <span
                        className="size-[6px] rounded-full shrink-0"
                        style={{ background: sem.statusColor }}
                      ></span>
                      <span
                        className="font-mono text-[11px] tracking-[0.08em] uppercase"
                        style={{ color: sem.statusColor }}
                      >
                        {sem.status}
                      </span>
                    </div>

                    {/* CGPA Column */}
                    <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted pt-0.5">
                      SGPA: {sem.cgpa}
                    </span>

                    {/* Details Column */}
                    <div>
                      <div
                        className="font-medium tracking-[-0.015em] mb-1"
                        style={{ fontSize: "clamp(15px, 1.6vw, 18px)" }}
                      >
                        {sem.term}: {sem.title}
                      </div>
                      <div className="text-sm text-muted leading-[1.5]">
                        {sem.description}
                      </div>

                      {/* Desktop Subjects Boxes */}
                      {sem.subjects && sem.subjects.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {sem.subjects.map((sub, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 text-[11px] font-mono tracking-wide uppercase border rounded-md transition-colors hover:bg-opacity-10"
                              style={{
                                color: sem.statusColor,
                                borderColor: sem.statusColor,
                                backgroundColor: "transparent",
                              }}
                            >
                              {sub}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Arrow/Decorative Column */}
                    <div
                      className="text-sm pt-0.5 transition-[color,transform] duration-200"
                      style={{ color: "var(--muted-2)", transform: "none" }}
                    >
                      ↓
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p
            className="text-muted max-w-[520px]"
            style={{ marginTop: "40px", fontSize: "15px", lineHeight: "1.6" }}
          >
            My coursework provided the theoretical backing, but I spent equal
            time applying these concepts to personal builds, hackathons, and
            internship experiences.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Education;

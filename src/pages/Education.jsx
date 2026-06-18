// --- DATA FOR YOUR SEMESTERS ---
// You can edit the CGPA, subjects, and concepts learned for each semester here.
const semestersData = [
  {
    id: 8,
    term: "Semester 8",
    status: "Active",
    statusColor: "var(--accent)",
    cgpa: "TBD",
    timeline: "Jan 2026 - May 2026",
    title: "Final Year Capstone & Electives",
    description:
      "Focusing on advanced electives, industry-oriented subjects, and the execution and deployment of the final year capstone project.",
  },
  {
    id: 7,
    term: "Semester 7",
    status: "Completed",
    statusColor: "var(--muted-2)",
    cgpa: "9.50 (Placeholder)",
    timeline: "Aug 2025 - Dec 2025",
    title: "Specialized Computing & AI",
    description:
      "Concepts Learned: Artificial Intelligence, Cloud Computing, Information Security. Initiated research and development for the final year engineering project.",
  },
  {
    id: 6,
    term: "Semester 6",
    status: "Completed",
    statusColor: "var(--muted-2)",
    cgpa: "9.45 (Placeholder)",
    timeline: "Jan 2025 - May 2025",
    title: "Web Technologies & System Programming",
    description:
      "Concepts Learned: Web Technology, System Programming & Operating System, Data Science and Big Data Analytics. Hands-on experience building full-stack web applications and understanding OS kernels.",
  },
  {
    id: 5,
    term: "Semester 5",
    status: "Completed",
    statusColor: "var(--muted-2)",
    cgpa: "9.60 (Placeholder)",
    timeline: "Aug 2024 - Dec 2024",
    title: "Core Systems & Databases",
    description:
      "Concepts Learned: Database Management Systems (DBMS), Theory of Computation (TOC), Software Engineering, Computer Networks. Built strong fundamentals in SQL, NoSQL, and network protocols.",
  },
  {
    id: 4,
    term: "Semester 4",
    status: "Completed",
    statusColor: "var(--muted-2)",
    cgpa: "9.30 (Placeholder)",
    timeline: "Jan 2024 - May 2024",
    title: "Advanced Data Structures & Graphics",
    description:
      "Concepts Learned: Advanced Data Structures, Microprocessor, Principles of Programming Languages, Computer Graphics. Deep dive into complex algorithmic problem solving and hardware-software interfaces.",
  },
  {
    id: 3,
    term: "Semester 3",
    status: "Completed",
    statusColor: "var(--muted-2)",
    cgpa: "9.40 (Placeholder)",
    timeline: "Aug 2023 - Dec 2023",
    title: "Foundations of Computer Science",
    description:
      "Concepts Learned: Discrete Mathematics, Data Structures and Algorithms (DSA), Object-Oriented Programming (OOP), Digital Electronics. Built the core logical foundation for software development using C++ and Java.",
  },
  {
    id: 2,
    term: "Semester 2",
    status: "Completed",
    statusColor: "var(--muted-2)",
    cgpa: "9.55 (Placeholder)",
    timeline: "Jan 2023 - May 2023",
    title: "Engineering Mechanics & Programming",
    description:
      "Concepts Learned: Engineering Mathematics II, Advanced C Programming, Basic Electronics Engineering. Transitioned from theoretical sciences to applied computational logic.",
  },
  {
    id: 1,
    term: "Semester 1",
    status: "Completed",
    statusColor: "var(--muted-2)",
    cgpa: "9.35 (Placeholder)",
    timeline: "Aug 2022 - Dec 2022",
    title: "Engineering Fundamentals",
    description:
      "Concepts Learned: Engineering Mathematics I, Engineering Physics, Systems in Mechanical Engineering, Basic Electrical Engineering. Established a strong analytical and mathematical foundation.",
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
            <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-fg font-medium">
              Savitribai Phule Pune University (SPPU)
            </span>
          </div>
          <h1
            className="font-medium max-w-[720px]"
            style={{
              margin: "0px 0px 24px",
              fontSize: "clamp(32px, 5vw, 60px)",
              letterSpacing: "-0.035em",
              lineHeight: "1",
            }}
          >
            Bachelor of Engineering in Computer Engineering[cite: 1]
          </h1>
          <p
            className="m-0 text-muted max-w-[620px]"
            style={{ fontSize: "clamp(16px, 1.8vw, 20px)", lineHeight: "1.6" }}
          >
            I am currently pursuing my degree at SGOI College of Engineering,
            Pune, with an expected graduation in 2026[cite: 1]. My academic
            journey has been a rigorous blend of theoretical computer science
            fundamentals and practical software development. Through consistent
            academic performance—maintaining an overall CGPA of 9.45—I have
            built a strong foundation in data structures, algorithms, system
            architecture, and modern full-stack development[cite: 1].
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

import { useState } from "react";

const Certifications = () => {
  const [hoveredId, setHoveredId] = useState(null);

  // Data array for your certifications
  const certifications = [
    {
      id: 1,
      status: "Completed",
      provider: "NPTEL",
      title: "Programming in Java",
      description:
        "Comprehensive certification covering core Java concepts, object-oriented programming principles, and advanced features.",
      date: "Recent",
      imageUrl: "/path/to/your/java-certificate.jpg", // Replace with your actual image path
      link: "#",
    },
    {
      id: 2,
      status: "Completed",
      provider: "NPTEL",
      title: "Cloud Computing",
      description:
        "In-depth study of cloud architectures, deployment models, distributed systems, and prominent cloud service providers.",
      date: "Recent",
      imageUrl: "/path/to/your/cloud-certificate.jpg", // Replace with your actual image path
      link: "#",
    },
    {
      id: 3,
      status: "Completed",
      provider: "ExcelR",
      title: "Full Stack Development",
      description:
        "Extensive training in building end-to-end web applications, designing responsive frontends, and developing robust backend architectures.",
      date: "Recent",
      imageUrl: "/path/to/your/fullstack-certificate.jpg", // Replace with your actual image path
      link: "#",
    },
  ];

  return (
    <section className="pb-24 bg-bg">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="border-t border-hair">
          <div className="border-b border-hair py-6">
            <div className="flex justify-between gap-4 items-center mb-3 flex-wrap">
              <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-muted-2">
                Certifications & Training
              </span>
            </div>
          </div>

          {/* Certification Items */}
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="border-b border-hair py-6 relative group"
            >
              <div className="flex justify-between gap-4 items-center mb-3 flex-wrap">
                <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-muted-2">
                  Last updated {cert.date}
                </span>
              </div>

              <div
                className="py-[26px] cursor-pointer transition-colors duration-200 relative"
                style={{ background: "transparent" }}
                onMouseEnter={() => setHoveredId(cert.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Mobile Layout */}
                <div className="flex flex-col gap-2 md:hidden">
                  <div className="flex items-center gap-3">
                    <span
                      className="size-[6px] rounded-full shrink-0"
                      style={{ background: "var(--muted-2)" }}
                    ></span>
                    <span
                      className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted"
                      style={{ color: "var(--muted-2)" }}
                    >
                      {cert.status}
                    </span>
                    <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-muted-2">
                      {cert.provider}
                    </span>
                  </div>
                  <div
                    className="font-medium tracking-[-0.015em] mb-1"
                    style={{ fontSize: "clamp(15px, 1.6vw, 18px)" }}
                  >
                    {cert.title}
                  </div>
                  <div className="text-sm text-muted leading-[1.5]">
                    {cert.description}
                  </div>
                </div>

                {/* Desktop Layout */}
                <div
                  className="hidden md:grid gap-x-7 items-start relative z-10"
                  style={{ gridTemplateColumns: "110px 130px 1fr 20px" }}
                >
                  <div className="flex items-center gap-[6px] pt-0.5">
                    <span
                      className="size-[6px] rounded-full shrink-0"
                      style={{ background: "var(--muted-2)" }}
                    ></span>
                    <span
                      className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted"
                      style={{ color: "var(--muted-2)" }}
                    >
                      {cert.status}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted pt-0.5">
                    {cert.provider}
                  </span>
                  <div className="pr-32">
                    {" "}
                    {/* Added padding-right to avoid text overlapping the image */}
                    <div
                      className="font-medium tracking-[-0.015em] mb-1"
                      style={{ fontSize: "clamp(15px, 1.6vw, 18px)" }}
                    >
                      {cert.title}
                    </div>
                    <div className="text-sm text-muted leading-[1.5]">
                      {cert.description}
                    </div>
                  </div>
                  <div
                    className="text-sm pt-0.5 transition-[color,transform] duration-200"
                    style={{ color: "var(--muted-2)", transform: "none" }}
                  >
                    →
                  </div>
                </div>

                {/* Hover Image Reveal */}
                <div
                  className={`absolute top-1/2 right-12 md:right-24 -translate-y-1/2 z-20 pointer-events-none transition-all duration-300 ease-out origin-center ${
                    hoveredId === cert.id
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                >
                  <img
                    src={cert.imageUrl}
                    alt={`${cert.title} Certificate`}
                    className="w-48 md:w-64 h-auto shadow-2xl rounded-sm object-cover border border-hair-2 bg-bg"
                  />
                </div>
              </div>

              {/* Optional Links (e.g., Verify Certificate) */}
              {cert.link && hoveredId === cert.id && (
                <div className="mt-4 flex flex-wrap gap-3 md:ml-[247px] absolute z-30 bottom-8">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-hair bg-bg-2 px-4 py-3 text-sm text-fg hover:bg-hair transition-colors duration-200"
                  >
                    Verify Certificate ↗
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        <p
          className="text-muted max-w-[520px]"
          style={{ marginTop: "40px", fontSize: "15px", lineHeight: "1.6" }}
        >
          Continuous learning and upskilling through specialized technical
          certifications.
        </p>
      </div>
    </section>
  );
};

export default Certifications;

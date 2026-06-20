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
      imageUrl: "NPTEL24CS43S106230227330765419_page-0001.jpg", // Replace with your actual image path
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
      imageUrl: "NPTEL24CS118S95350087704355381_page-0001.jpg", // Replace with your actual image path
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
    {
      id: 4,
      status: "Completed",
      provider: "Udemy , Instructor: Deepak Dubey",
      title: "AWS Certified Developer Associate - Theory + Hands-On + Exam",
      description:
        "Develop and optimize cloud-native applications using AWS services, APIs, CLI, and SDKsImplement robust security measures for AWS applications, including authentication, authorization, and encryptionDeploy applications on AWS using CI/CD pipelines, Infrastructure as Code, and various deployment strategiesTroubleshoot and optimize AWS applications using logging, monitoring, and observability too",
      date: "Recent",
      imageUrl:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-374196e9-d031-445e-a1b1-51cc951c7d49.jpg", // Replace with your actual image path
      link: "https://www.udemy.com/certificate/UC-374196e9-d031-445e-a1b1-51cc951c7d49/#",
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
              onMouseEnter={() => setHoveredId(cert.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="flex justify-between gap-4 items-center mb-3 flex-wrap">
                <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-muted-2">
                  Last updated {cert.date}
                </span>
              </div>

              <div
                className="py-[26px] cursor-pointer transition-colors duration-200 relative"
                style={{ background: "transparent" }}
              >
                {/* Mobile Layout */}
                <div className="flex flex-col gap-2 md:hidden">
                  <div className="flex items-center gap-3">
                    <span className="size-[6px] rounded-full shrink-0 bg-green-600"></span>
                    <span className="font-mono text-green-400 text-[11px] tracking-[0.08em] uppercase ">
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
                    <span className="size-[6px] rounded-full shrink-0 bg-green-600"></span>
                    <span className="font-mono text-green-600 text-[11px] tracking-[0.08em] uppercase">
                      {cert.status}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted pt-0.5">
                    {cert.provider}
                  </span>
                  <div className="pr-32">
                    <div
                      className="font-medium tracking-[-0.015em] mb-1"
                      style={{ fontSize: "clamp(15px, 1.6vw, 18px)" }}
                    >
                      {cert.title}
                    </div>

                    <div className="text-sm text-muted leading-[1.5]">
                      {cert.description}
                    </div>

                    {hoveredId === cert.id && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-sm border border-hair px-3 py-2"
                      >
                        View Certificate ↗
                      </a>
                    )}
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

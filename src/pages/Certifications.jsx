import { useState } from "react";

const Certifications = () => {
  const [activeImage, setActiveImage] = useState(null); // { url, title } for fullscreen modal

  const certifications = [
    {
      id: 1,
      status: "Completed",
      provider: "GMRT - TIFR, NCRA",
      title: "GMRT Science Day Exhibition - Project Participation",
      description:
        "Presented the project 'Agri Preserve Intelligent Cold Storage System' at the GMRT Science Day Exhibition held at the Giant Metrewave Radio Telescope (GMRT) Observatory, Khodad, Pune — one of the world's largest radio telescope arrays, operated by the National Centre for Radio Astrophysics (NCRA-TIFR) for studying celestial phenomena. Showcased the IoT-based cold storage monitoring system to researchers and visitors, gaining exposure to interdisciplinary scientific audiences beyond a typical academic setting.",
      date: "28 Feb - 1 Mar 2026",
      imageUrl: "/certification/GMRT.jpg",
      link: "#",
    },
    {
      id: 2,
      status: "Completed",
      provider: "NPTEL",
      title: "Programming in Java",
      description:
        "Completed NPTEL's 12-week Programming in Java course covering Java fundamentals — data types, control structures, arrays, and strings — through to core object-oriented concepts including classes, objects, inheritance, polymorphism, interfaces, and abstract classes. Also covered exception handling, multithreading, Java I/O, generics, collections framework, and an introduction to GUI programming with Swing/AWT, with practical assignments reinforcing each module.",
      date: "Recent",
      imageUrl: "NPTEL24CS43S106230227330765419_page-0001.jpg",
      link: "#",
    },
    {
      id: 3,
      status: "Completed",
      provider: "NPTEL",
      title: "Cloud Computing",
      description:
        "Completed NPTEL's 12-week Cloud Computing course covering distributed system fundamentals, virtualization technologies, and cloud service models (IaaS, PaaS, SaaS) across deployment models (public, private, hybrid). Studied cloud architecture design, resource management and scheduling, load balancing, cloud storage systems, security and privacy in the cloud, and case studies of major providers including AWS, Google Cloud, and Microsoft Azure, along with emerging trends like serverless computing and edge computing.",
      date: "Recent",
      imageUrl: "NPTEL24CS118S95350087704355381_page-0001.jpg",
      link: "#",
    },
    {
      id: 4,
      status: "Completed",
      provider: "ExcelR",
      title: "Full Stack Development (Java + React + MySQL)",
      description:
        "Completed ExcelR's Full Stack Development program covering end-to-end web application development using Java and Spring Boot for backend REST API design, React.js for building dynamic and responsive frontends with component-based architecture and state management, and MySQL for relational database design, normalization, and query optimization. Training included Git version control, RESTful API integration between frontend and backend, authentication/authorization implementation, and deployment fundamentals, culminating in hands-on capstone project work.",
      date: "Recent",
      imageUrl: "/certification/excelr.png",
      link: "#",
    },

    {
      id: 5,
      status: "Completed",
      provider: "Udemy , Instructor: Deepak Dubey",
      title: "AWS Certified Developer Associate - Theory + Hands-On + Exam",
      description:
        "Develop and optimize cloud-native applications using AWS services, APIs, CLI, and SDKs. Implement robust security measures including authentication, authorization, and encryption. Deploy applications using CI/CD pipelines, Infrastructure as Code, and various deployment strategies.",
      date: "Recent",
      imageUrl:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-374196e9-d031-445e-a1b1-51cc951c7d49.jpg",
      link: "https://www.udemy.com/certificate/UC-374196e9-d031-445e-a1b1-51cc951c7d49/#",
    },
    {
      id: 6,
      status: "Completed",
      provider: "KG Coding",
      title: "JavaScript Certification Test",
      description:
        "Successfully completed a comprehensive JavaScript Certification Test, demonstrating proficiency in core JavaScript concepts including variables, functions, objects, arrays, DOM manipulation, ES6+ features, and asynchronous programming.",
      date: "07 July 2024",
      imageUrl: "/certification/js.jfif",
      link: "https://www.linkedin.com/in/tanmay-kanase/details/certifications/",
    },
    {
      id: 7,
      status: "Completed",
      provider: "KG Coding",
      title: "React and Redux",
      description:
        "Completed the React and Redux certification program, gaining expertise in building dynamic and responsive user interfaces using React, component-based architecture, state management, Hooks, routing, and API integration.",
      date: "30 January 2024",
      imageUrl: "/certification/react.jfif",
      link: "https://www.linkedin.com/in/tanmay-kanase/details/certifications/",
    },
    {
      id: 8,
      status: "Completed",
      provider: "Simplilearn",
      title: "Introduction to DevOps Tools",
      description:
        "Completed Simplilearn's Introduction to DevOps Tools course covering the DevOps lifecycle and CI/CD pipeline fundamentals. Studied version control with Git and GitHub, containerization and image management with Docker, configuration management and infrastructure automation using Ansible, Chef, and Puppet, continuous integration practices, and automated testing with Selenium — building a foundational understanding of how these tools work together across the software delivery pipeline.",
      date: "09 July 2024",
      imageUrl:
        "https://certificates.simplicdn.net/share/thumb_6889427_1720494255.png",
      link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxODA3IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNjg4OTQyN18xNzIwNDk0MjU1LnBuZyIsInVzZXJuYW1lIjoiVGFubWF5IFNhbmRlZXAgS2FuYXNlICJ9&utm_source=shared-certificate&utm_medium=app_lms&utm_campaign=shared-certificate-promotion",
    },
    {
      id: 9,
      status: "Completed",
      provider: "IBM",
      title: "Python for Data Science",
      description:
        "Completed IBM's Python for Data Science course on Cognitive Class, covering Python programming fundamentals — data types, expressions, variables, and loops — followed by working with data structures like lists, tuples, sets, and dictionaries. Applied Python libraries including Pandas and NumPy for data manipulation and analysis, and practiced reading/writing files, exception handling, and object-oriented programming concepts through hands-on labs and a final project analyzing real-world datasets.",
      date: "July 2024",
      imageUrl: "/certification/image.png",
      link: "https://courses.cognitiveclass.ai/certificates/3715b5dd765a4d87a4cbcbba7ea04730",
    },
    {
      id: 10,
      status: "Completed",
      provider: "SRUJAN 2025",
      title: "International Level Technical Event - Project Competition",
      description:
        "Participated in SRUJAN 2025, an international-level technical event for degree and diploma students organized by Samarth College of Engineering & Management, and secured 3rd position presenting the Smart Parking System project. Gained hands-on experience in project presentation, technical communication, and defending design decisions before a judging panel, alongside strengthening teamwork and public speaking skills.",
      date: "26 March 2025",
      imageUrl: "/certification/surjan.jpg",
      link: "#",
    },
  ];

  return (
    <section className="pb-24 bg-bg">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="border-t border-hair">
          <div className="border-b border-hair py-6">
            <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-muted-2">
              Certifications & Training
            </span>
          </div>

          {certifications.map((cert) => (
            <div key={cert.id} className="border-b border-hair py-6">
              <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-muted-2">
                Last updated {cert.date}
              </span>

              {/* Desktop / Tablet Layout: image is a real grid column, can't overlap text */}
              <div
                className="hidden md:grid gap-x-2 items-center mt-4"
                style={{ gridTemplateColumns: "90px 100px 1fr 200px" }}
              >
                <div className="flex items-center gap-[6px]">
                  <span className="size-[6px] rounded-full shrink-0 bg-green-600"></span>
                  <span className="font-mono text-green-600 text-[11px] tracking-[0.08em] uppercase">
                    {cert.status}
                  </span>
                </div>

                <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted">
                  {cert.provider}
                </span>

                <div className="min-w-0">
                  <div
                    className="font-medium tracking-[-0.015em] mb-1"
                    style={{ fontSize: "clamp(15px, 1.6vw, 18px)" }}
                  >
                    {cert.title}
                  </div>
                  <div className="text-sm text-muted leading-[1.5]">
                    {cert.description}
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm border border-hair px-3 py-2"
                  >
                    View Certificate ↗
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setActiveImage({ url: cert.imageUrl, title: cert.title })
                  }
                  className="justify-self-end"
                >
                  <img
                    src={cert.imageUrl}
                    alt={`${cert.title} Certificate`}
                    className="w-full h-auto max-h-40 shadow-2xl rounded-sm object-cover border border-hair-2 bg-bg cursor-pointer hover:opacity-90 transition-opacity"
                  />
                </button>
              </div>

              {/* Mobile Layout: thumbnail below text, tap to open fullscreen modal */}
              <div className="flex flex-col gap-3 md:hidden mt-3">
                <div className="flex items-center gap-3">
                  <span className="size-[6px] rounded-full shrink-0 bg-green-600"></span>
                  <span className="font-mono text-green-400 text-[11px] tracking-[0.08em] uppercase">
                    {cert.status}
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted text-muted-2">
                    {cert.provider}
                  </span>
                </div>

                <div
                  className="font-medium tracking-[-0.015em]"
                  style={{ fontSize: "clamp(15px, 1.6vw, 18px)" }}
                >
                  {cert.title}
                </div>

                <div className="text-sm text-muted leading-[1.5]">
                  {cert.description}
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setActiveImage({ url: cert.imageUrl, title: cert.title })
                  }
                  className="self-start"
                >
                  <img
                    src={cert.imageUrl}
                    alt={`${cert.title} Certificate`}
                    className="w-28 h-auto shadow-lg rounded-sm object-cover border border-hair-2 bg-bg cursor-pointer"
                  />
                </button>
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

      {/* Fullscreen image modal (used on all breakpoints when a thumbnail is tapped) */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            onClick={() => setActiveImage(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white text-2xl leading-none w-10 h-10 flex items-center justify-center rounded-full border border-white/30 hover:bg-white/10"
            aria-label="Close"
          >
            ×
          </button>
          <img
            src={activeImage.url}
            alt={`${activeImage.title} Certificate - full view`}
            className="max-w-full max-h-full object-contain rounded-sm shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Certifications;

const Hero = () => {
  return (
    <section className="py-10 md:py-20 pb-[80px] ">
      {/* Changed 'container' to 'max-w-6xl' to constrain the width on large screens */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Grid: Reduced the gap on large screens to bring elements closer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <div>
            <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted inline-flex items-center">
              <span className="relative inline-block w-2 h-2 mr-2 align-middle shrink-0">
                <span className="absolute inset-0 bg-red-600 rounded-full"></span>
                <span
                  className="absolute rounded-full border border-red-600 opacity-35 animate-ping"
                  style={{ inset: "-3px", animationDuration: "2s" }}
                ></span>
              </span>
              Immediately Available - open to interesting conversations
            </span>

            <h1
              className="mt-8 font-sans font-medium text-fg"
              style={{
                fontSize: "clamp(40px, 5vw, 64px)",
                lineHeight: 0.94,
                letterSpacing: "-0.045em",
              }}
            >
              <span className="block">Backend Engineer.</span>
              <span className="block">Full-Stack Developer.</span>
              <span className="text-[#b8502e] block mt-2">Problem Solver.</span>
            </h1>

            <p
              className="m-0 mt-6 text-muted max-w-[560px]"
              style={{ fontSize: "clamp(16px, 1.2vw, 19px)", lineHeight: 1.6 }}
            >
              BE Computer Engineering undergraduate with hands-on experience in
              full-stack and backend development through academic projects,
              internship experience, and professional training. Proficient in
              Java, Spring Boot, React, REST APIs, and database management, with
              a strong foundation in software development.
            </p>
          </div>

          {/* Right Column: Avatar Image & Stats */}
          <div className="pb-3 flex flex-col items-center">
            <div className="flex flex-col mb-7 w-full items-center">
              {/* Image Container: Reduced heights and added a fade-out mask at the bottom */}
              <div className="relative w-full md:w-3/4 h-[250px] md:h-[350px]">
                <img
                  alt="Tanmay Kanase"
                  className="object-contain object-bottom absolute inset-0 w-full h-full mix-blend-multiply"
                  src="/ProfilePic.jpg"
                />
              </div>

              {/* Stats Row: Centered tightly under the image */}
              <div className="mt-6 flex justify-center gap-8 flex-wrap animate-fade-in w-full">
                <div className="min-w-20 text-center">
                  <div className="text-[clamp(22px,2.5vw,28px)] font-medium tracking-[-0.02em] leading-none text-fg">
                    03
                  </div>
                  <span className="font-mono font-bold text-accent text-[11px] tracking-[0.08em] uppercase text-muted mt-[6px] block">
                    Years Coding
                  </span>
                </div>

                <div className="min-w-20 text-center">
                  <div className="text-[clamp(22px,2.5vw,28px)] font-medium tracking-[-0.02em] leading-none text-fg">
                    300+
                  </div>
                  <span className="font-mono font-bold text-accent text-[11px] tracking-[0.08em] uppercase text-muted mt-[6px] block">
                    Github Commits
                  </span>
                </div>

                <div className="min-w-20 text-center">
                  <div className="text-[clamp(22px,2.5vw,28px)] font-medium tracking-[-0.02em] leading-none text-fg">
                    8+
                  </div>
                  <span className="font-mono font-bold text-accent text-[11px] tracking-[0.08em] uppercase text-muted mt-[6px] block">
                    Full Stack Projects
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

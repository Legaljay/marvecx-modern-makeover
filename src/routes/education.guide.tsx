import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

const ROADMAP = [
  {
    stage: "High School",
    focus: "Mathematics, Physics, Chemistry",
    detail:
      "Build a strong foundation in calculus, mechanics, and basic engineering principles. Participate in science fairs, robotics clubs, and aviation-related extracurriculars.",
  },
  {
    stage: "Undergraduate",
    focus: "BEng/BSc in Aerospace, Mechanical, or Electrical Engineering",
    detail:
      "Pursue ABET-accredited or nationally recognized programmes at African universities with engineering faculties. Focus on fluid dynamics, structures, propulsion, and control systems.",
  },
  {
    stage: "Internships & Projects",
    focus: "Hands-on experience and industry exposure",
    detail:
      "Seek internships with airlines, maintenance organisations, research institutes, or satellite programmes. Build drones, model rockets, or CubeSats to demonstrate practical skills.",
  },
  {
    stage: "Postgraduate & Research",
    focus: "MSc/PhD and specialisation",
    detail:
      "Specialise in areas like satellite systems, propulsion, aerodynamics, or space policy. Collaborate with research groups and apply for international fellowships.",
  },
  {
    stage: "Professional Entry",
    focus: "Industry roles and entrepreneurship",
    detail:
      "Join aerospace companies, national space agencies, or aviation authorities. Alternatively, launch startups in UAVs, satellite data services, or aerospace manufacturing.",
  },
] as const;

const PROGRAMMES = [
  {
    country: "South Africa",
    schools: [
      "University of the Witwatersrand — Aeronautical Engineering",
      "University of Cape Town — Mechanical & Aerospace Engineering",
      "University of Pretoria — Aeronautical Engineering",
      "Stellenbosch University — Mechanical Engineering (Aeronautics stream)",
    ],
  },
  {
    country: "Nigeria",
    schools: [
      "Kwara State University — Aeronautical and Astronautical Engineering",
      "University of Lagos — Systems Engineering (Aerospace focus)",
      "Covenant University — Mechanical Engineering (Aerospace option)",
      "Federal University of Technology, Akure — Engineering programmes with aviation links",
    ],
  },
  {
    country: "Egypt",
    schools: [
      "Cairo University — Aerospace Engineering",
      "Ain Shams University — Aerospace Engineering",
      "Military Technical College — Aeronautical Engineering",
    ],
  },
  {
    country: "Kenya",
    schools: [
      "University of Nairobi — Mechanical Engineering (Aeronautics research)",
      "Kenyatta University — Engineering programmes with UAV/space research",
    ],
  },
  {
    country: "Ghana",
    schools: [
      "Kwame Nkrumah University of Science and Technology — Aerospace-related research",
      "University of Ghana — Physics & Engineering Sciences",
    ],
  },
] as const;

const CAREERS = [
  {
    role: "Aerospace Engineer",
    desc: "Design aircraft, spacecraft, satellites, and propulsion systems. Work in R&D, manufacturing, or maintenance organisations.",
  },
  {
    role: "Satellite Systems Engineer",
    desc: "Build and operate communication, Earth observation, and scientific satellites for agriculture, disaster management, and connectivity.",
  },
  {
    role: "UAV / Drone Engineer",
    desc: "Develop unmanned aerial vehicles for agriculture mapping, cargo delivery, surveillance, and environmental monitoring.",
  },
  {
    role: "Flight Test Engineer",
    desc: "Plan and execute test programmes to validate aircraft performance, safety, and systems in flight.",
  },
  {
    role: "Space Policy & Programme Manager",
    desc: "Shape national space strategies, manage international partnerships, and oversee space agency operations.",
  },
  {
    role: "Aviation Safety Inspector",
    desc: "Ensure compliance with international aviation standards and regulations at national civil aviation authorities.",
  },
] as const;

const RESOURCES = [
  {
    title: "African Space Agency & National Space Programmes",
    body: "Follow the African Space Agency, SANSA (South Africa), NASRDA (Nigeria), and other national bodies for scholarships and calls for proposals.",
  },
  {
    title: "International Fellowships",
    body: "Apply to programmes like the IAF Emerging Space Leaders, SGAC scholarships, and university exchange programmes in Europe, Asia, and the Americas.",
  },
  {
    title: "MARVECX ISTC Convention",
    body: "Attend the International Space Technology Convention for networking, workshops, and direct access to mentors and recruiters in African aerospace.",
  },
  {
    title: "Online Courses & Certifications",
    body: "Supplement formal education with MIT OpenCourseWare, Coursera aerospace specialisations, and AIAA/RAeS professional certification paths.",
  },
] as const;

export const Route = createFileRoute("/education/guide")({
  head: () => ({
    meta: [
      { title: "Aerospace Engineering Careers & Education in Africa — MARVECX" },
      {
        name: "description",
        content:
          "A comprehensive guide to aerospace engineering education, top universities, career paths, and opportunities across Africa.",
      },
      {
        property: "og:title",
        content: "Aerospace Engineering Careers & Education in Africa",
      },
      {
        property: "og:description",
        content:
          "Discover how to become an aerospace engineer in Africa: universities, career paths, internships, and resources.",
      },
      { property: "og:url", content: "https://marvecx-makeover-ai.lovable.app/education/guide" },
    ],
    links: [
      { rel: "canonical", href: "https://marvecx-makeover-ai.lovable.app/education/guide" },
    ],
  }),
  component: EducationGuidePage,
});

function EducationGuidePage() {
  return (
    <PageShell>
      <article className="px-6 pt-40 pb-16">
        <div className="mx-auto max-w-4xl text-center animate-fade-up">
          <p className="font-display text-xs font-bold uppercase tracking-[0.35em] text-primary">
            Education
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-6xl">
            Aerospace Engineering{" "}
            <span className="text-primary">Careers &amp; Education</span> in Africa
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            A practical guide for students and professionals who want to build aircraft, satellites,
            and space systems — starting from the African continent.
          </p>
        </div>
      </article>

      {/* Roadmap */}
      <section className="border-y border-white/5 bg-surface/20 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="font-display text-xs font-bold uppercase tracking-[0.35em] text-primary">
              Your path
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              From student to <span className="text-primary">space professional</span>
            </h2>
          </div>
          <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* vertical connector line on large screens */}
            <div
              className="pointer-events-none absolute top-0 bottom-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block"
              aria-hidden
            />
            {ROADMAP.map((step, i) => (
              <div
                key={step.stage}
                className="group relative rounded-3xl border border-white/5 bg-background/40 p-8 transition-all hover:-translate-y-1 hover:border-white/15"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-white/30">0{i + 1}</span>
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold">{step.stage}</h3>
                <p className="mt-1 text-sm font-semibold text-primary">{step.focus}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Universities */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14">
            <p className="font-display text-xs font-bold uppercase tracking-[0.35em] text-primary">
              Where to study
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Top <span className="text-primary">programmes</span> across Africa
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/55">
              Leading universities and institutes offering aerospace-related engineering degrees,
              research programmes, and specialised training.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROGRAMMES.map((p) => (
              <div
                key={p.country}
                className="rounded-2xl border border-white/5 bg-surface/40 p-6 backdrop-blur-md transition-colors hover:border-white/15"
              >
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                  <h3 className="font-display text-lg font-bold">{p.country}</h3>
                </div>
                <ul className="mt-4 space-y-3">
                  {p.schools.map((s) => (
                    <li key={s} className="flex gap-3 text-sm text-white/70">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career paths */}
      <section className="border-y border-white/5 bg-surface/20 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14">
            <p className="font-display text-xs font-bold uppercase tracking-[0.35em] text-primary">
              Where it leads
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Career <span className="text-primary">paths</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CAREERS.map((c, i) => (
              <div
                key={c.role}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-background/40 p-8 transition-all hover:-translate-y-1 hover:border-white/15"
              >
                <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary/15 blur-3xl opacity-60 transition-opacity group-hover:opacity-100" aria-hidden />
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-white/30">0{i + 1}</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold">{c.role}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources & Next Steps */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14">
            <p className="font-display text-xs font-bold uppercase tracking-[0.35em] text-primary">
              Get started
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Resources &amp; <span className="text-primary">next steps</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {RESOURCES.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl border border-white/5 bg-surface/40 p-6 backdrop-blur-md transition-colors hover:border-white/15"
              >
                <h3 className="font-display text-lg font-bold">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{r.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-white/60">
              Ready to take the next step? Explore the{" "}
              <Link to="/events" className="text-primary underline underline-offset-4 hover:text-white transition-colors">
                ISTC convention
              </Link>{" "}
              and connect with Africa’s aerospace community.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

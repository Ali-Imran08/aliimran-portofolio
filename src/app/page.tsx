"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { projects, techStack } from "@/data/portfolio";

type Language = "id" | "en";

const copy = {
  id: {
    nav: ["Proyek", "Tentang", "Kontak"],
    role: (
      <>
        Software Builder
        <br />
        Web Developer
      </>
    ),
    location: (
      <>
        Makassar, Indonesia
        <br />
        WITA (UTC+8)
      </>
    ),
    available: "Tersedia untuk kolaborasi",
    caption: "Ali Imran, 2026",
    kicker: "Mahasiswa Sistem Informasi. Developer web.",
    hero: (
      <>
        Kode yang rapi.
        <br />
        <i>Solusi</i> yang bekerja.
      </>
    ),
    projectsLink: "Lihat proyek pilihan",
    selected: "Karya terpilih",
    projectsTitle: "Sistem nyata, dari masalah hingga eksekusi.",
    projectsText:
      "Setiap proyek dimulai dari alur kerja yang perlu dibuat lebih jelas, cepat, atau terhubung.",
    about: "Tentang saya",
    bio: "Saya adalah mahasiswa Sistem Informasi dan developer yang berfokus pada pengembangan aplikasi web fungsional menggunakan Laravel, Vue.js, dan Tailwind CSS. Saya menyukai sistem yang rapi, pola arsitektur terstruktur, serta pengalaman pengguna yang intuitif tanpa ornamen tak perlu.",
    stack: "Tech stack",
    pause: "Jeda gerak",
    play: "Lanjutkan gerak",
    contact: "Punya proyek?",
    contactTitle: (
      <>
        Mari Bangun
        <br />
        <i>Bersama.</i>
      </>
    ),
    emailNote: "Silahkan Contact Email Dibawah Ini",
    download: "Unduh CV",
    problem: "Masalah",
    solution: "Solusi",
    outcome: "Hasil",
    footer: "© 2026 Muh. Ali Imran Abduh. Makassar, ID.",
    language: "EN",
  },
  en: {
    nav: ["Projects", "About", "Contact"],
    role: (
      <>
        Software Builder
        <br />
        Web Developer
      </>
    ),
    location: (
      <>
        Makassar, Indonesia
        <br />
        WITA (UTC+8)
      </>
    ),
    available: "Open to collaboration",
    caption: "Muh. Ali Imran Abduh, 2026",
    kicker: "Information Systems student. Web developer.",
    hero: (
      <>
        Clean code.
        <br />
        <i>Working</i> solutions.
      </>
    ),
    projectsLink: "View selected projects",
    selected: "Selected work",
    projectsTitle: "Real systems, from problem to execution.",
    projectsText:
      "Each project starts with a workflow that needs to be clearer, faster, or better connected.",
    about: "About me",
    bio: "I am an Information Systems student and developer focused on functional web applications with Laravel, Vue.js, and Tailwind CSS. I value clean systems, structured architecture, and intuitive user experiences without unnecessary ornament.",
    stack: "Tech stack",
    pause: "Pause motion",
    play: "Resume motion",
    contact: "Have a project?",
    contactTitle: (
      <>
        Let&apos;s Build
        <br />
        <i>Together.</i>
      </>
    ),
    emailNote:
      "An active email address is not yet available in the source files.",
    download: "Download CV",
    problem: "Problem",
    solution: "Solution",
    outcome: "Outcome",
    footer: "© 2026 Ali Imran. Makassar, ID.",
    language: "ID",
  },
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("id");
  const [marqueePaused, setMarqueePaused] = useState(false);
  const t = copy[language];
  const items = [...techStack, ...techStack];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const hero = document.querySelector<HTMLElement>(".hero");
    if (!hero) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const progress = Math.max(
        -1,
        Math.min(1, -hero.getBoundingClientRect().top / window.innerHeight),
      );
      hero.style.setProperty("--hero-scroll", progress.toFixed(3));
      document
        .querySelectorAll<HTMLElement>("[data-parallax]")
        .forEach((section) => {
          const rect = section.getBoundingClientRect();
          const value = Math.max(
            -1,
            Math.min(
              1,
              (window.innerHeight / 2 - (rect.top + rect.height / 2)) /
                window.innerHeight,
            ),
          );
          section.style.setProperty("--section-scroll", value.toFixed(3));
        });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <main>
      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-sticky-gradient" aria-hidden="true" />
        <div className="hero-background-type" aria-hidden="true">
          <span>ALI</span>
          <span>IMRAN</span>
        </div>
        <nav className="hero-nav" aria-label="Main navigation">
          <div>
            <a className="wordmark" href="#home">
              ALI IMRAN
            </a>
            <span className="hero-nav-detail"> · {t.role}</span>
          </div>
          <div className="nav-links">
            <a href="#projects">{t.nav[0]}</a>
            <a href="#about">{t.nav[1]}</a>
            <a href="#contact">{t.nav[2]}</a>
            <button
              className="language-toggle"
              type="button"
              onClick={() => setLanguage(language === "id" ? "en" : "id")}
              aria-label={
                language === "id"
                  ? "Switch to English"
                  : "Ganti ke Bahasa Indonesia"
              }
            >
              {t.language}
            </button>
          </div>
        </nav>
        <div className="hero-split">
          <div className="hero-copy">
            <p className="kicker">{t.kicker}</p>
            <h1 id="hero-title">
              MEMBANGUN
              <br />
              <i>SISTEM DIGITAL.</i>
            </h1>
            <a className="text-link" href="#projects">
              {t.projectsLink}
            </a>
          </div>
          <figure className="hero-photo">
            <Image
              src="/profile-editorial.jpeg"
              alt="Ali Imran mengenakan setelan formal"
              width={431}
              height={735}
              priority
            />
            <div className="hero-photo-overlay">
              <p>{t.caption}</p>
              <span>01</span>
            </div>
          </figure>
        </div>
        <div className="hero-footer">
          <p>{t.role}</p>
          <p>{t.location}</p>
          <p className="availability">
            <span aria-hidden="true" />
            {t.available}
          </p>
        </div>
      </section>
      <section
        className="about-statement"
        id="about"
        aria-labelledby="about-title"
        data-parallax
      >
        <p className="eyebrow">{t.about}</p>
        <h2 id="about-title">{t.bio}</h2>
      </section>
      <section
        className="stack-marquee"
        aria-labelledby="stack-title"
        data-parallax
      >
        <div className="stack-marquee-head">
          <p className="eyebrow" id="stack-title">
            {t.stack}
          </p>
          <button
            type="button"
            className="marquee-control"
            onClick={() => setMarqueePaused((value) => !value)}
          >
            {marqueePaused ? t.play : t.pause}
          </button>
        </div>
        <div className="marquee-viewport">
          <div
            className={`marquee-track${marqueePaused ? " marquee-paused" : ""}`}
          >
            {items.map((item, index) => (
              <div
                className="tech-card"
                key={`${item.name}-${index}`}
                aria-hidden={index >= techStack.length}
              >
                <img
                  src={`https://cdn.simpleicons.org/${item.icon}/10b981`}
                  alt=""
                  width="32"
                  height="32"
                />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="projects section"
        id="projects"
        aria-labelledby="projects-title"
        data-parallax
      >
        <div className="section-intro">
          <p className="eyebrow">{t.selected}</p>
          <h2 id="projects-title">{t.projectsTitle}</h2>
          <p>{t.projectsText}</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <div
                className={`project-media ${project.tone}`}
                aria-label={`${language === "id" ? "Visual proyek" : "Project visual"} ${project.title}`}
              >
                <p>{project.number}</p>
                <div className="project-mark" aria-hidden="true">
                  {project.title.slice(0, 1)}
                </div>
                <span>{project.role}</span>
              </div>
              <div className="project-meta">
                <div>
                  <h3>{project.title}</h3>
                  <dl>
                    <div>
                      <dt>{t.problem}</dt>
                      <dd>
                        {language === "id"
                          ? project.problem
                          : project.problemEn}
                      </dd>
                    </div>
                    <div>
                      <dt>{t.solution}</dt>
                      <dd>
                        {language === "id"
                          ? project.solution
                          : project.solutionEn}
                      </dd>
                    </div>
                    <div>
                      <dt>{t.outcome}</dt>
                      <dd>
                        {language === "id"
                          ? project.outcome
                          : project.outcomeEn}
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="project-side">
                  <ul
                    className="tags"
                    aria-label={`Technology ${project.title}`}
                  >
                    {project.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="project-actions">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section
        className="contact"
        id="contact"
        aria-labelledby="contact-title"
        data-parallax
      >
        <p className="eyebrow">{t.contact}</p>
        <h2 id="contact-title">{t.contactTitle}</h2>
        <p className="contact-note">{t.emailNote}</p>
        <a className="contact-email" href="mailto:aliimrahmuh4@gmail.com">
          aliimrahmuh4@gmail.com
        </a>
      </section>
      <footer>
        <p>{t.footer}</p>
        <div>
          <a
            href="https://github.com/Ali-Imran08"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href="/assets/CV_Ali_Imran.pdf">{t.download}</a>
        </div>
      </footer>
    </main>
  );
}

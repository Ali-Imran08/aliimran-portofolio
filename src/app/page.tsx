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
        Merancang alur.
        <br />
        <i>Mewujudkan</i> pengalaman.
      </>
    ),
    projectsLink: "Lihat proyek pilihan",
    selected: "Karya terpilih",
    projectsTitle: "Sistem nyata, dari masalah hingga eksekusi.",
    projectsText:
      "Eksplorasi aplikasi web fungsional dengan arsitektur rapi dan desain intuitif.",
    viewProject: "Lihat proyek ↗",
    about: "Tentang saya",
    bio: "Saya seorang Web Developer dan Mahasiswa Sistem Informasi yang berfokus pada pembangunan sistem web yang terstruktur, rapi, dan fungsional.",
    aboutItems: [
      {
        label: "Pendekatan",
        text: "Saya menyukai kode yang bersih, performa terjaga, dan pengalaman pengguna yang intuitif tanpa ornamen visual yang tidak perlu.",
      },
      {
        label: "Tooling utama",
        text: "Pengembangan sehari-hari berpusat pada Laravel, Vue.js, dan Tailwind CSS, didukung Linux/Pop!_OS serta Neovim.",
      },
      {
        label: "Saat ini",
        text: "Menempuh pendidikan di Universitas Hasanuddin sambil mengeksplorasi arsitektur sistem web dan proyek nyata.",
      },
    ],
    aboutCta: "Terbuka untuk diskusi teknis, proyek freelance, atau kolaborasi pengembangan web.",
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
        Shaping flows.
        <br />
        <i>Making</i> experiences.
      </>
    ),
    projectsLink: "View selected projects",
    selected: "Selected work",
    projectsTitle: "Real systems, from problem to execution.",
    projectsText:
      "Functional web applications with considered architecture and intuitive design.",
    viewProject: "View project ↗",
    about: "About me",
    bio: "I am a Web Developer and Information Systems student focused on building web systems that are structured, clean, and functional.",
    aboutItems: [
      {
        label: "Approach",
        text: "I value clean code, reliable performance, and intuitive user experiences without unnecessary visual ornament.",
      },
      {
        label: "Core tooling",
        text: "My daily work centers on Laravel, Vue.js, and Tailwind CSS, supported by Linux/Pop!_OS and Neovim.",
      },
      {
        label: "Currently",
        text: "Studying at Hasanuddin University while exploring web-system architecture and real-world projects.",
      },
    ],
    aboutCta: "Open to technical discussions, freelance projects, and web-development collaborations.",
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
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-revealed"));
      return;
    }
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
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        revealObserver.unobserve(entry.target);
      }),
      { threshold: 0.14 },
    );
    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      revealObserver.disconnect();
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
        <nav className="hero-nav reveal" aria-label="Main navigation">
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
        <div className="hero-split reveal reveal-late">
          <div className="hero-copy">
            <p className="kicker">{t.kicker}</p>
            <h1 id="hero-title">{t.hero}</h1>
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
        className="about-statement reveal"
        id="about"
        aria-labelledby="about-title"
        data-parallax
      >
        <p className="eyebrow">{t.about}</p>
        <h2 id="about-title">{t.bio}</h2>
        <div className="about-details">
          {t.aboutItems.map((item) => (
            <article className="about-detail" key={item.label}>
              <p className="eyebrow">{item.label}</p>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <p className="about-cta">{t.aboutCta}</p>
      </section>
      <section
        className="stack-marquee reveal"
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
        className="projects section reveal"
        id="projects"
        aria-labelledby="projects-title"
        data-parallax
      >
        <header className="projects-header">
          <div>
            <p className="eyebrow">{t.selected}</p>
            <h2 id="projects-title">{t.projectsTitle}</h2>
          </div>
          <p>{t.projectsText}</p>
        </header>
        <div className="project-offset-grid">
          {projects.map((project) => (
            <article className="project-offset-card" key={project.number}>
              <div
                className={`project-offset-media ${project.tone}`}
                aria-label={`${language === "id" ? "Visual proyek" : "Project visual"} ${project.title}`}
              >
                <div className="project-visual" aria-hidden="true">
                  <span>{project.title.slice(0, 1)}</span>
                </div>
                <p>{project.number}</p>
                <span>{project.role}</span>
              </div>
              <div className="project-offset-content">
                <p className="project-stack">{project.stack.join(" · ")}</p>
                <h3>{project.title}</h3>
                <p>{language === "id" ? project.summary : project.summaryEn}</p>
                <a href={project.demo ?? project.github} target="_blank" rel="noreferrer">
                  {t.viewProject}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section
        className="contact reveal"
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

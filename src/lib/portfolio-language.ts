import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "@/lib/language-context";

export type PortfolioLanguage = "id" | "en";

export const PORTFOLIO_LANGUAGE_EVENT = "portfolio:languagechange";

const STORAGE_KEY = "portfolio-language";

export const portfolioCopy = {
  id: {
    heroGreeting: "Halo, saya",
    updatedLabel: "Diperbarui",
    downloadCv: "Unduh CV",
    viewProjects: "Lihat Proyek",
    contactMe: "Hubungi Saya",
    sections: {
      about: { heading: "Tentang" },
      work: { heading: "Pengalaman Kerja" },
      education: { heading: "Pendidikan" },
      skills: {
        heading: "Keahlian",
        text: "Teknologi yang saya pakai dikelompokkan berdasarkan area kerja, supaya lebih jelas konteks penggunaannya.",
      },
      projects: {
        label: "Proyek Pilihan",
        heading: "Proyek yang bisa saya bagikan",
        text: "Beberapa pekerjaan publik dan eksperimen yang menunjukkan cara saya membangun, merapikan, dan menyiapkan aplikasi untuk deployment.",
      },
      contact: {
        label: "Contact",
        heading: "Mari Terhubung",
        text: "Tertarik diskusi deployment, backend, security hardening, atau kesempatan internship DevSecOps? Kirim email atau hubungi saya lewat LinkedIn.",
      },
    },
    projectFilters: {
      all: "Semua",
      details: "Detail",
      close: "Tutup",
      problem: "Masalah",
      solution: "Solusi",
      impact: "Dampak",
      stack: "Stack",
    },
  },
  en: {
    heroGreeting: "Hi, I'm",
    updatedLabel: "Updated",
    downloadCv: "Download CV",
    viewProjects: "View Projects",
    contactMe: "Contact Me",
    sections: {
      about: { heading: "About" },
      work: { heading: "Work Experience" },
      education: { heading: "Education" },
      skills: {
        heading: "Skills",
        text: "Technologies I use, grouped by practical working area so the context is clear.",
      },
      projects: {
        label: "Featured Projects",
        heading: "Projects I can share",
        text: "Public work and experiments that show how I build, refine, and prepare applications for deployment.",
      },
      contact: {
        label: "Contact",
        heading: "Let's connect",
        text: "Interested in deployment, backend, security hardening, or DevSecOps internship opportunities? Reach me by email or LinkedIn.",
      },
    },
    projectFilters: {
      all: "All",
      details: "Details",
      close: "Close",
      problem: "Problem",
      solution: "Solution",
      impact: "Impact",
      stack: "Stack",
    },
  },
} as const;

export const localizedPortfolioContent = {
  id: {
    description:
      "DevSecOps engineer yang fokus pada infrastruktur aman, alur deployment yang rapi, dan pengembangan aplikasi web yang praktis.",
    summary:
      "Saya bekerja di irisan pengembangan aplikasi, infrastruktur, dan operasi yang memperhatikan aspek keamanan. Fokus saya saat ini adalah membangun aplikasi web yang reliable, mempelajari pola deployment cloud-native, dan membuat proses dari kode ke production menjadi lebih aman melalui otomasi.",
    workPresentLabel: "Sekarang",
    skillCategoryDescriptions: {
      Frontend: "UI, typing, dan pengalaman pengguna di aplikasi web.",
      "Backend & Data": "API, automation, database, dan service-side workflow.",
      "DevOps & Cloud Native": "Server, container, deployment, dan operasional aplikasi.",
    },
    work: [
      {
        title: "Fullstack Developer Intern",
        description:
          "Berkontribusi pada pengembangan aplikasi web full-stack selama internship, termasuk implementasi fitur, debugging, dan dukungan deployment.",
      },
      {
        title: "Customer Support Intern",
        description:
          "Menangani tanggung jawab customer support selama internship, membantu pengguna, dan mendokumentasikan kasus support untuk tindak lanjut operasional.",
      },
    ],
    skills: [
      "Lingkungan server, troubleshooting, permission, dan command-line workflow.",
      "Automation script, setup environment, dan maintenance task.",
      "Aplikasi web backend, integrasi form, dan server-rendered feature.",
      "Typing komponen, data portfolio, dan API contracts.",
      "API, tooling, dan server-side JavaScript.",
      "Automation script, data handling, dan eksperimen backend.",
      "Service kecil, CLI, dan eksplorasi backend performan.",
      "Model data relasional, query, dan persistence layer.",
      "Container development, environment parity, dan deployment workflow.",
      "Cloud-native deployment pattern, workload, dan service orchestration.",
    ],
    projects: [
      {
        title: "Personal Portfolio",
        description:
          "Website portfolio dan blog pribadi yang dibangun dengan Astro, React islands, Tailwind CSS, konten MDX, dan dukungan deployment Cloudflare.",
        details: {
          problem:
            "Portfolio awal perlu dibuat lebih kredibel untuk recruiter, punya struktur data yang mudah diedit, dan tidak bergantung penuh pada client-side rendering.",
          solution:
            "Merapikan konten ke `resume.tsx`, menambahkan section berbasis data, memperbaiki SSR hero, menghapus dependency berat yang tidak perlu, dan menyiapkan test hygiene.",
          impact:
            "Halaman utama lebih cepat dipahami, konten bisa diperluas dari satu sumber data, dan build dapat diverifikasi sebelum deployment.",
        },
      },
    ],
  },
  en: {
    description:
      "Secure infrastructure, clean deployment workflows, and practical web application development are my core focus areas as a DevSecOps engineer.",
    summary:
      "I work across application development, infrastructure, and operations with security in mind. My current focus is building reliable web applications, learning cloud-native deployment patterns, and making the path from code to production safer through automation.",
    workPresentLabel: "Present",
    skillCategoryDescriptions: {
      Frontend: "UI implementation, typing, and user experience in web applications.",
      "Backend & Data": "APIs, automation, databases, and server-side workflows.",
      "DevOps & Cloud Native": "Server environment, containers, deployment, and application operations.",
    },
    work: [
      {
        title: "Fullstack Developer Intern",
        description:
          "Contributed to full-stack web application development during an internship, including feature implementation, debugging, and deployment support.",
      },
      {
        title: "Customer Support Intern",
        description:
          "Handled customer support responsibilities during an internship, assisted users, and documented support cases for operational follow-up.",
      },
    ],
    skills: [
      "Server environment, troubleshooting, permissions, and command-line workflows.",
      "Automation scripts, environment setup, and maintenance tasks.",
      "Backend web applications, form integration, and server-rendered features.",
      "Typed components, portfolio data, and API contracts.",
      "APIs, tooling, and server-side JavaScript.",
      "Automation scripts, data handling, and backend experiments.",
      "Small services, CLI tools, and high-performance backend exploration.",
      "Relational data modeling, queries, and persistence layers.",
      "Container development, environment parity, and deployment workflows.",
      "Cloud-native deployment patterns, workloads, and service orchestration.",
    ],
    projects: [
      {
        title: "Personal Portfolio",
        description:
          "Personal portfolio and blog built with Astro, React islands, Tailwind CSS, MDX content, and Cloudflare deployment support.",
        details: {
          problem:
            "The initial portfolio needed stronger recruiter credibility, editable structured data, and less reliance on client-side rendering.",
          solution:
            "Organized content in `resume.tsx`, added data-driven sections, fixed SSR rendering for the hero, removed unnecessary heavy dependencies, and added hygiene tests.",
          impact:
            "The main page is easier to scan, content can be expanded from one data source, and the build can be verified before deployment.",
        },
      },
    ],
  },
} as const;

function isPortfolioLanguage(value: string | null): value is PortfolioLanguage {
  return value === "id" || value === "en";
}

function applyDocumentLanguage(language: PortfolioLanguage) {
  document.documentElement.lang = language === "en" ? "en" : "id";
}

export function getStoredPortfolioLanguage(): PortfolioLanguage {
  if (typeof window === "undefined") {
    return "id";
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  return isPortfolioLanguage(stored) ? stored : "id";
}

export function setStoredPortfolioLanguage(language: PortfolioLanguage) {
  window.localStorage.setItem(STORAGE_KEY, language);
  applyDocumentLanguage(language);
  window.dispatchEvent(
    new CustomEvent(PORTFOLIO_LANGUAGE_EVENT, {
      detail: { language },
    })
  );
}

export function usePortfolioLanguage() {
  const context = useContext(LanguageContext);

  if (context) {
    return context;
  }

  const [language, setLanguageState] = useState<PortfolioLanguage>("id");

  useEffect(() => {
    setLanguageState(getStoredPortfolioLanguage());
    applyDocumentLanguage(getStoredPortfolioLanguage());

    const handleLanguageChange = (event: Event) => {
      const customEvent = event as CustomEvent<{ language?: PortfolioLanguage }>;
      if (customEvent.detail?.language) {
        setLanguageState(customEvent.detail.language);
      }
    };

    window.addEventListener(PORTFOLIO_LANGUAGE_EVENT, handleLanguageChange);

    return () => {
      window.removeEventListener(PORTFOLIO_LANGUAGE_EVENT, handleLanguageChange);
    };
  }, []);

  return {
    language,
    copy: portfolioCopy[language],
    localized: localizedPortfolioContent[language],
    setLanguage: setStoredPortfolioLanguage,
  };
}

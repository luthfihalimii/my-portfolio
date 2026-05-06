import { useEffect, useState } from "react";

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
      now: {
        label: "Sekarang",
        heading: "Fokus Saat Ini",
        text: "Area yang sedang saya dalami dan praktikkan secara aktif.",
      },
      work: { heading: "Pengalaman Kerja" },
      education: { heading: "Pendidikan" },
      skills: {
        heading: "Keahlian",
        text: "Teknologi yang saya pakai dikelompokkan berdasarkan area kerja, supaya lebih jelas konteks penggunaannya.",
      },
      services: {
        label: "Layanan",
        heading: "Hal yang bisa saya bantu",
        text: "Bantuan teknis yang relevan dengan web app, server, deployment, dan otomasi.",
      },
      caseStudies: {
        label: "Case Studies",
        heading: "Studi kasus pilihan",
        text: "Ringkasan cara saya memecah masalah, memilih solusi, dan mengukur hasil kerja.",
      },
      projects: {
        label: "Proyek Pilihan",
        heading: "Proyek yang bisa saya bagikan",
        text: "Beberapa pekerjaan publik dan eksperimen yang menunjukkan cara saya membangun, merapikan, dan menyiapkan aplikasi untuk deployment.",
      },
      certifications: {
        label: "Training",
        heading: "Sertifikasi & Pelatihan",
        text: "Pelatihan, kelas, dan validasi belajar yang mendukung fokus teknis saya.",
      },
      achievements: {
        label: "Prestasi",
        heading: "Prestasi & Pencapaian",
        text: "Sertifikasi, penghargaan, dan milestone terverifikasi akan ditampilkan di sini.",
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
      now: {
        label: "Now",
        heading: "Current Focus",
        text: "Areas I am actively learning and practicing right now.",
      },
      work: { heading: "Work Experience" },
      education: { heading: "Education" },
      skills: {
        heading: "Skills",
        text: "Technologies I use, grouped by practical working area so the context is clear.",
      },
      services: {
        label: "Services",
        heading: "How I can help",
        text: "Technical support around web apps, servers, deployment, and automation.",
      },
      caseStudies: {
        label: "Case Studies",
        heading: "Selected case studies",
        text: "Short breakdowns of how I frame problems, choose solutions, and measure outcomes.",
      },
      projects: {
        label: "Featured Projects",
        heading: "Projects I can share",
        text: "Public work and experiments that show how I build, refine, and prepare applications for deployment.",
      },
      certifications: {
        label: "Training",
        heading: "Certifications & Training",
        text: "Training, classes, and learning validation that support my technical focus.",
      },
      achievements: {
        label: "Achievements",
        heading: "Achievements & Milestones",
        text: "Verified awards, competitions, and technical milestones are listed here.",
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
    now: [
      {
        title: "Cloud-native deployment",
        description:
          "Mendalami pola deployment container, workload Kubernetes, dan pemisahan environment development sampai production.",
        status: "Learning",
      },
      {
        title: "CI/CD security",
        description:
          "Merapikan pipeline build, environment secret, dan pengecekan dasar sebelum aplikasi masuk ke server.",
        status: "Practicing",
      },
      {
        title: "Backend automation",
        description:
          "Membuat script kecil untuk mempercepat setup, maintenance, dan pengecekan operasional aplikasi.",
        status: "Building",
      },
    ],
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
    services: [
      {
        title: "Web app development",
        description:
          "Membangun aplikasi web praktis dengan frontend yang rapi, backend sederhana, dan struktur kode yang mudah dirawat.",
      },
      {
        title: "Deployment & containerization",
        description:
          "Menyiapkan aplikasi agar siap dijalankan di server atau container dengan workflow deployment yang jelas.",
      },
      {
        title: "Automation & maintenance",
        description:
          "Membuat script dan dokumentasi operasional untuk setup environment, backup ringan, dan task berulang.",
      },
      {
        title: "Basic security hardening",
        description:
          "Membantu pengecekan awal permission, dependency, environment secret, dan praktik dasar keamanan aplikasi.",
      },
    ],
    caseStudies: [
      {
        title: "Personal Portfolio Deployment",
        context:
          "Portfolio perlu tetap ringan, mudah diedit dari data, punya blog, dan siap deploy ke Cloudflare.",
        approach:
          "Memisahkan konten ke data TypeScript, memakai Astro untuk SSR/static route, React island untuk interaksi, dan Tailwind untuk UI konsisten.",
        impact:
          "Struktur portfolio menjadi lebih mudah dirawat, section bisa diaktifkan dari data, dan build production tervalidasi lewat test.",
      },
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
    certifications: [
      {
        title: "DevSecOps & Cloud Native Learning Track",
        issuer: "Self-directed Training",
        description:
          "Rangkaian belajar mandiri seputar Linux server, Docker, CI/CD, Kubernetes dasar, dan security hardening aplikasi.",
      },
      {
        title: "Backend & API Practice",
        issuer: "Project-based Learning",
        description:
          "Latihan membangun backend, integrasi database, validasi form, dan otomasi workflow kecil untuk kebutuhan aplikasi web.",
      },
    ],
    achievements: [
      {
        title: "Juara 2 - L.K.S CyberSecurity",
        issuer: "Dinas Pendidikan Kota Surabaya",
        description:
          "Mewakili bidang keamanan siber pada kompetisi LKS tingkat kota dan meraih posisi kedua.",
      },
      {
        title: "Finalis - L.K.S CyberSecurity",
        issuer: "Dinas Pendidikan Provinsi Jawa Timur",
        description:
          "Berpartisipasi sebagai finalis pada kompetisi keamanan siber tingkat provinsi Jawa Timur.",
      },
      {
        title: "Finalis - Jagoan Hosting Infra Competition (JHIC)",
        issuer: "Jagoan Hosting",
        description:
          "Mengikuti kompetisi infrastruktur yang berfokus pada server, deployment, dan operasional layanan.",
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
    now: [
      {
        title: "Cloud-native deployment",
        description:
          "Studying container deployment patterns, Kubernetes workloads, and environment separation from development to production.",
        status: "Learning",
      },
      {
        title: "CI/CD security",
        description:
          "Improving build pipelines, environment secrets, and basic checks before applications reach the server.",
        status: "Practicing",
      },
      {
        title: "Backend automation",
        description:
          "Building small scripts to speed up setup, maintenance, and operational checks for applications.",
        status: "Building",
      },
    ],
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
    services: [
      {
        title: "Web app development",
        description:
          "Practical web applications with clean frontend implementation, simple backend flows, and maintainable code structure.",
      },
      {
        title: "Deployment & containerization",
        description:
          "Preparing applications to run on servers or containers with a clear deployment workflow.",
      },
      {
        title: "Automation & maintenance",
        description:
          "Creating scripts and operational notes for environment setup, lightweight backups, and repeated tasks.",
      },
      {
        title: "Basic security hardening",
        description:
          "Helping with initial checks for permissions, dependencies, environment secrets, and basic application security practices.",
      },
    ],
    caseStudies: [
      {
        title: "Personal Portfolio Deployment",
        context:
          "The portfolio needed to stay lightweight, editable from data, support a blog, and be ready for Cloudflare deployment.",
        approach:
          "Separated content into TypeScript data, used Astro for SSR/static routes, React islands for interaction, and Tailwind for consistent UI.",
        impact:
          "The portfolio is easier to maintain, sections can be controlled from data, and production builds are verified through tests.",
      },
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
    certifications: [
      {
        title: "DevSecOps & Cloud Native Learning Track",
        issuer: "Self-directed Training",
        description:
          "A self-directed learning track around Linux servers, Docker, CI/CD, Kubernetes fundamentals, and application security hardening.",
      },
      {
        title: "Backend & API Practice",
        issuer: "Project-based Learning",
        description:
          "Practice building backends, database integrations, form validation, and small workflow automation for web applications.",
      },
    ],
    achievements: [
      {
        title: "2nd Place - L.K.S CyberSecurity",
        issuer: "Surabaya City Education Office",
        description:
          "Represented the cybersecurity field in a city-level LKS competition and achieved second place.",
      },
      {
        title: "Finalist - L.K.S CyberSecurity",
        issuer: "East Java Provincial Education Office",
        description:
          "Participated as a finalist in a provincial-level cybersecurity competition in East Java.",
      },
      {
        title: "Finalist - Jagoan Hosting Infra Competition (JHIC)",
        issuer: "Jagoan Hosting",
        description:
          "Joined an infrastructure competition focused on servers, deployment, and service operations.",
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
  const [language, setLanguage] = useState<PortfolioLanguage>("id");

  useEffect(() => {
    setLanguage(getStoredPortfolioLanguage());
    applyDocumentLanguage(getStoredPortfolioLanguage());

    const handleLanguageChange = (event: Event) => {
      const customEvent = event as CustomEvent<{ language?: PortfolioLanguage }>;
      if (customEvent.detail?.language) {
        setLanguage(customEvent.detail.language);
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

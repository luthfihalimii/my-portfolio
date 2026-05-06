import { Icons } from "@/components/icons";
import {
  FolderKanban,
  House,
  Library,
  Mail,
} from "lucide-react";
import type { ReactNode } from "react";

type Achievement = {
  title: string;
  date: string;
  issuer?: string;
  description?: string;
  image?: string;
  links?: {
    title: string;
    icon: ReactNode;
    href: string;
  }[];
};

export const DATA = {
  name: "Luthfi Halimi",
  role: "DevSecOps Engineer",
  initials: "MLH",
  url: "https://luthfihalimi.my.id",
  location: "Sidoarjo, Indonesia",
  locationLink: "https://www.google.com/maps/place/sidoarjo",
  description:
    "DevSecOps engineer yang fokus pada infrastruktur aman, alur deployment yang rapi, dan pengembangan aplikasi web yang praktis.",
  summary:
    "Saya bekerja di irisan pengembangan aplikasi, infrastruktur, dan operasi yang memperhatikan aspek keamanan. Fokus saya saat ini adalah membangun aplikasi web yang reliable, mempelajari pola deployment cloud-native, dan membuat proses dari kode ke production menjadi lebih aman melalui otomasi.",
  avatarUrl: "/picofme.png",
  ogImage: "/og_image.png",
  resumeUrl: "/resume-luthfi-halimi.pdf",
  lastUpdated: {
    id: "Mei 2026",
    en: "May 2026",
  },
  sections: {
    about: { order: 1, enabled: true, heading: "Tentang" },
    now: {
      order: 2,
      enabled: true,
      label: "Sekarang",
      heading: "Fokus Saat Ini",
      text: "Area yang sedang saya dalami dan praktikkan secara aktif.",
    },
    work: {
      order: 3,
      enabled: true,
      heading: "Pengalaman Kerja",
      presentLabel: "Sekarang",
    },
    education: { order: 4, enabled: true, heading: "Pendidikan" },
    skills: {
      order: 5,
      enabled: true,
      heading: "Keahlian",
      text: "Teknologi yang saya pakai dikelompokkan berdasarkan area kerja, supaya lebih jelas konteks penggunaannya.",
    },
    services: {
      order: 6,
      enabled: true,
      label: "Layanan",
      heading: "Hal yang bisa saya bantu",
      text: "Bantuan teknis yang relevan dengan web app, server, deployment, dan otomasi.",
    },
    caseStudies: {
      order: 7,
      enabled: true,
      label: "Case Studies",
      heading: "Studi kasus pilihan",
      text: "Ringkasan cara saya memecah masalah, memilih solusi, dan mengukur hasil kerja.",
    },
    projects: {
      order: 8,
      enabled: true,
      label: "Proyek Pilihan",
      heading: "Proyek yang bisa saya bagikan",
      text: "Beberapa pekerjaan publik dan eksperimen yang menunjukkan cara saya membangun, merapikan, dan menyiapkan aplikasi untuk deployment.",
    },
    certifications: {
      order: 9,
      enabled: true,
      label: "Training",
      heading: "Sertifikasi & Pelatihan",
      text: "Pelatihan, kelas, dan validasi belajar yang mendukung fokus teknis saya.",
    },
    achievements: {
      order: 10,
      enabled: true,
      label: "Prestasi",
      heading: "Prestasi & Pencapaian",
      text: "Sertifikasi, penghargaan, dan milestone terverifikasi akan ditampilkan di sini.",
    },
    photos: {
      order: 11,
      enabled: true,
      heading: "Foto Terbaru",
    },
    contact: {
      order: 12,
      enabled: true,
      label: "Contact",
      heading: "Mari Terhubung",
      text: "Tertarik diskusi deployment, backend, security hardening, atau kesempatan internship DevSecOps? Kirim email atau hubungi saya lewat LinkedIn.",
    },
  },
  photos: [
    { src: "/photos/photo1.jpg", alt: "Portfolio photo 1" },
    { src: "/photos/photo2.jpg", alt: "Portfolio photo 2" },
    { src: "/photos/photo3.jpg", alt: "Portfolio photo 3" },
    { src: "/photos/photo4.jpg", alt: "Portfolio photo 4" },
    { src: "/photos/photo5.jpg", alt: "Portfolio photo 5" },
    { src: "/photos/photo6.jpg", alt: "Portfolio photo 6" },
    { src: "/photos/photo7.jpg", alt: "Portfolio photo 7" },
    { src: "/photos/photo8.jpg", alt: "Portfolio photo 8" },
    { src: "/photos/photo9.jpg", alt: "Portfolio photo 9" },
  ],
  skills: [
    {
      name: "Linux",
      imageUrl: "https://img.icons8.com/color/48/linux.png",
      category: "DevOps & Cloud Native",
      level: "Daily",
      context: "Lingkungan server, troubleshooting, permission, dan command-line workflow.",
    },
    {
      name: "Bash",
      imageUrl: "https://img.icons8.com/color/48/bash.png",
      category: "DevOps & Cloud Native",
      level: "Daily",
      context: "Automation script, setup environment, dan maintenance task.",
    },
    {
      name: "PHP",
      imageUrl:
        "https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-hypertext-preprocessor-a-widely-used-open-source-general-purpose-scripting-language-logo-color-tal-revivo.png",
      category: "Backend & Data",
      level: "Intermediate",
      context: "Aplikasi web backend, integrasi form, dan server-rendered feature.",
    },
    {
      name: "TypeScript",
      imageUrl: "https://img.icons8.com/color/48/typescript.png",
      category: "Frontend",
      level: "Production",
      context: "Typing komponen, data portfolio, dan API contracts.",
    },
    {
      name: "Node.js",
      imageUrl: "https://img.icons8.com/fluency/48/node-js.png",
      category: "Backend & Data",
      level: "Intermediate",
      context: "API, tooling, dan server-side JavaScript.",
    },
    {
      name: "Python",
      imageUrl: "https://img.icons8.com/color/48/python--v1.png",
      category: "Backend & Data",
      level: "Intermediate",
      context: "Automation script, data handling, dan eksperimen backend.",
    },
    {
      name: "Go",
      imageUrl: "https://img.icons8.com/color/48/golang.png",
      category: "Backend & Data",
      level: "Learning",
      context: "Service kecil, CLI, dan eksplorasi backend performan.",
    },
    {
      name: "PostgreSQL",
      imageUrl: "https://img.icons8.com/color/48/postgreesql.png",
      category: "Backend & Data",
      level: "Intermediate",
      context: "Model data relasional, query, dan persistence layer.",
    },
    {
      name: "Docker",
      imageUrl: "https://img.icons8.com/fluency/48/docker.png",
      category: "DevOps & Cloud Native",
      level: "Production",
      context: "Container development, environment parity, dan deployment workflow.",
    },
    {
      name: "Kubernetes",
      imageUrl: "https://img.icons8.com/color/48/kubernetes.png",
      category: "DevOps & Cloud Native",
      level: "Learning",
      context: "Cloud-native deployment pattern, workload, dan service orchestration.",
    },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
    { href: "/blog", icon: Library, label: "Blog" },
  ],
  sectionNavigation: [
    { href: "#projects", sectionId: "projects", icon: FolderKanban, label: "Proyek" },
    { href: "#contact", sectionId: "contact", icon: Mail, label: "Kontak" },
  ],
  contact: {
    email: "contact@luthfihalimi.my.id",
    tel: "+62 851-4117-1885",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/luthfihalimii",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/luthfihalimi",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/luthfihalimi",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Email",
        url: "mailto:contact@luthfihalimi.my.id",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "PT. Piramida Teknologi Informasi",
      href: "https://piramidasoft.com",
      badges: ["Internship"],
      location: "Surabaya, Indonesia",
      title: "Fullstack Developer Intern",
      logoUrl:
        "https://www.google.com/s2/favicons?domain=piramidasoft.com&sz=128",
      start: "Agustus 2025",
      end: undefined,
      description:
        "Berkontribusi pada pengembangan aplikasi web full-stack selama internship, termasuk implementasi fitur, debugging, dan dukungan deployment.",
    },
    {
      company: "PT. Inti Cakrawala Citra",
      href: "https://indogrosir.co.id",
      badges: [],
      location: "Surabaya, Indonesia",
      title: "Customer Support Intern",
      logoUrl:
        "https://www.google.com/s2/favicons?domain=indogrosir.co.id&sz=128",
      start: "April 2024",
      end: "Mei 2024",
      description:
        "Menangani tanggung jawab customer support selama internship, membantu pengguna, dan mendokumentasikan kasus support untuk tindak lanjut operasional.",
    },
  ],
  education: [
    {
      school: "SMKN 1 Surabaya",
      href: "https://www.smkn1-sby.sch.id",
      degree: "SMK, Rekayasa Perangkat Lunak",
      logoUrl:
        "https://www.google.com/s2/favicons?domain=www.smkn1-sby.sch.id&sz=128",
      start: "2023",
      end: "2026",
    },
    {
      school: "Politeknik Elektronika Negeri Surabaya",
      href: "https://pens.ac.id",
      degree: "Diploma, Teknik Telekomunikasi",
      logoUrl: "https://www.google.com/s2/favicons?domain=pens.ac.id&sz=128",
      start: "2026",
      end: "2030",
    },
  ],
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
  services: [
    {
      title: "Web app development",
      description:
        "Membangun aplikasi web praktis dengan frontend yang rapi, backend sederhana, dan struktur kode yang mudah dirawat.",
      tags: ["Astro", "React", "PHP", "TypeScript"],
    },
    {
      title: "Deployment & containerization",
      description:
        "Menyiapkan aplikasi agar siap dijalankan di server atau container dengan workflow deployment yang jelas.",
      tags: ["Linux", "Docker", "Nginx", "Cloudflare"],
    },
    {
      title: "Automation & maintenance",
      description:
        "Membuat script dan dokumentasi operasional untuk setup environment, backup ringan, dan task berulang.",
      tags: ["Bash", "Python", "CI/CD"],
    },
    {
      title: "Basic security hardening",
      description:
        "Membantu pengecekan awal permission, dependency, environment secret, dan praktik dasar keamanan aplikasi.",
      tags: ["DevSecOps", "Linux", "Security"],
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
      stack: ["Astro", "React", "TypeScript", "Tailwind CSS", "Cloudflare"],
      links: [
        {
          title: "Website",
          href: "https://luthfihalimi.my.id",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
  ],
  certifications: [
    {
      title: "DevSecOps & Cloud Native Learning Track",
      issuer: "Self-directed Training",
      date: "2026",
      imageUrl: "https://img.icons8.com/fluency/48/cloud.png",
      certificateUrl: "https://drive.google.com",
      description:
        "Rangkaian belajar mandiri seputar Linux server, Docker, CI/CD, Kubernetes dasar, dan security hardening aplikasi.",
      tags: ["Linux", "Docker", "CI/CD", "Security"],
    },
    {
      title: "Backend & API Practice",
      issuer: "Project-based Learning",
      date: "2026",
      imageUrl: "https://img.icons8.com/fluency/48/api-settings.png",
      certificateUrl: "https://drive.google.com",
      description:
        "Latihan membangun backend, integrasi database, validasi form, dan otomasi workflow kecil untuk kebutuhan aplikasi web.",
      tags: ["PHP", "Node.js", "PostgreSQL", "Automation"],
    },
  ],
  projects: [
    {
      title: "Personal Portfolio",
      category: "DevOps",
      href: "https://luthfihalimi.my.id",
      dates: "Mei 2026 - Sekarang",
      active: true,
      description:
        "Website portfolio dan blog pribadi yang dibangun dengan Astro, React islands, Tailwind CSS, konten MDX, dan dukungan deployment Cloudflare.",
      technologies: [
        "Astro",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "MDX",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://luthfihalimi.my.id",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      details: {
        problem:
          "Portfolio awal perlu dibuat lebih kredibel untuk recruiter, punya struktur data yang mudah diedit, dan tidak bergantung penuh pada client-side rendering.",
        solution:
          "Merapikan konten ke `resume.tsx`, menambahkan section berbasis data, memperbaiki SSR hero, menghapus dependency berat yang tidak perlu, dan menyiapkan test hygiene.",
        impact:
          "Halaman utama lebih cepat dipahami, konten bisa diperluas dari satu sumber data, dan build dapat diverifikasi sebelum deployment.",
      },
      image: "/example-website.webp",
      video: "",
    },
  ],
  achievements: [
    {
      title: "Juara 2 - L.K.S CyberSecurity",
      date: "2024",
      issuer: "Dinas Pendidikan Kota Surabaya",
      description:
        "Mewakili bidang keamanan siber pada kompetisi LKS tingkat kota dan meraih posisi kedua.",
      image: "https://www.google.com/s2/favicons?domain=surabaya.go.id&sz=128",
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="size-3" />,
          href: "https://drive.google.com/file/d/1NU-rOal_DeiGJeHGKnqdB_tkRTTML-FG/view?usp=sharing",
        },
      ],
    },
    {
      title: "Finalis - L.K.S CyberSecurity",
      date: "2025",
      issuer: "Dinas Pendidikan Provinsi Jawa Timur",
      description:
        "Berpartisipasi sebagai finalis pada kompetisi keamanan siber tingkat provinsi Jawa Timur.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Coat_of_arms_of_East_Java.svg/250px-Coat_of_arms_of_East_Java.svg.png",
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="size-3" />,
          href: "https://drive.google.com/file/d/1LVALmRDcq05hRkzVVzJcBMS2r5rTlyRk/view?usp=sharing",
        },
      ],
    },
    {
      title: "Finalis - Jagoan Hosting Infra Competition (JHIC)",
      date: "2025",
      issuer: "Jagoan Hosting",
      description:
        "Mengikuti kompetisi infrastruktur yang berfokus pada server, deployment, dan operasional layanan.",
      image:
        "https://www.google.com/s2/favicons?domain=jagoanhosting.com&sz=128",
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="size-3" />,
          href: "https://drive.google.com/file/d/1W5AOtc3kPpYeYXHEbLooiMO-gUHbvQzQ/view?usp=sharing",
        },
      ],
    },
  ] as Achievement[],
} as const;

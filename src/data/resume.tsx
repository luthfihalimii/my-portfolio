import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";
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
    "DevSecOps engineer focused on secure infrastructure, reliable deployment workflows, and practical full-stack delivery.",
  summary:
    "I work across application development, infrastructure, and security-minded operations. My current focus is building reliable web applications, learning cloud-native delivery patterns, and improving how software moves from code to production with safer automation.",
  avatarUrl: "/picofme.png",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: {
      order: 2,
      enabled: true,
      heading: "Work Experience",
      presentLabel: "Present",
    },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    projects: {
      order: 5,
      enabled: true,
      label: "Selected Work",
      heading: "Projects I can share publicly",
      text: "A short list of public work and experiments. This section is intentionally focused so it only shows projects with clear ownership.",
    },
    photos: {
      order: 6,
      enabled: true,
      heading: "Recent Photos",
    },
    achievements: {
      order: 7,
      enabled: true,
      label: "Achievements",
      heading: "Prestasi & Pencapaian",
      text: "Sertifikasi, penghargaan, dan milestone terverifikasi akan ditampilkan di sini.",
    },
    contact: {
      order: 8,
      enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "For collaboration, internship opportunities, or technical conversations, email me or connect through LinkedIn.",
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
    },
    {
      name: "Bash",
      imageUrl: "https://img.icons8.com/color/48/bash.png",
    },
    {
      name: "Php",
      imageUrl:
        "https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-hypertext-preprocessor-a-widely-used-open-source-general-purpose-scripting-language-logo-color-tal-revivo.png",
    },
    {
      name: "TypeScript",
      imageUrl: "https://img.icons8.com/color/48/typescript.png",
    },
    {
      name: "Node.js",
      imageUrl: "https://img.icons8.com/fluency/48/node-js.png",
    },
    {
      name: "Python",
      imageUrl: "https://img.icons8.com/color/48/python--v1.png",
    },
    {
      name: "Go",
      imageUrl: "https://img.icons8.com/color/48/golang.png",
    },
    {
      name: "PostgreSQL",
      imageUrl: "https://img.icons8.com/color/48/postgreesql.png",
    },
    {
      name: "Docker",
      imageUrl: "https://img.icons8.com/fluency/48/docker.png",
    },
    {
      name: "Kubernetes",
      imageUrl: "https://img.icons8.com/color/48/kubernetes.png",
    },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
    { href: "/blog", icon: Library, label: "Blog" },
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
      start: "August 2025",
      end: undefined,
      description:
        "Contributed to full-stack web application development during internship work, including feature implementation, debugging, and deployment support.",
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
      end: "May 2024",
      description:
        "Handled customer support internship responsibilities, assisted users, and documented support cases for operational follow-up.",
    },
  ],
  education: [
    {
      school: "Vocational High School 1 Surabaya",
      href: "https://www.smkn1-sby.sch.id",
      degree: "Vocational High School, Software Engineering",
      logoUrl:
        "https://www.google.com/s2/favicons?domain=www.smkn1-sby.sch.id&sz=128",
      start: "2023",
      end: "2026",
    },
    {
      school: "Surabaya State Polytechnic of Electronics",
      href: "https://pens.ac.id",
      degree: "Diploma, Telecommunications Engineering",
      logoUrl: "https://www.google.com/s2/favicons?domain=pens.ac.id&sz=128",
      start: "2026",
      end: "2030",
    },
  ],
  projects: [
    {
      title: "Personal Portfolio",
      href: "https://luthfihalimi.my.id",
      dates: "May 2026 - Present",
      active: true,
      description:
        "A personal portfolio and writing site built with Astro, React islands, Tailwind CSS, MDX content, and Cloudflare deployment support.",
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
      image: "/example-website.webp",
      video: "",
    },
  ],
  achievements: [
    {
      title: "Second Place - L.K.S CyberSecurity",
      date: "2024",
      issuer: "Surabaya City Department of Education",
      description:
        "Data dummy untuk melihat tampilan section Prestasi. Ganti judul, penyelenggara, tanggal, deskripsi, logo, dan link sesuai prestasi asli kamu.",
      image: "https://www.google.com/s2/favicons?domain=surabaya.go.id&sz=128",
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="size-3" />,
          href: "https://example.com/certificate",
        },
      ],
    },
    {
      title: "Finalist - L.K.S CyberSecurity",
      date: "2025",
      issuer: "East Java Provincial Department of Education",
      description:
        "Data dummy untuk contoh prestasi kompetisi keamanan siber. Ganti bagian ini dengan scope lomba, hasil, dan kontribusi asli kamu.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Coat_of_arms_of_East_Java.svg/250px-Coat_of_arms_of_East_Java.svg.png",
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="size-3" />,
          href: "https://example.com/proof-cyber-security",
        },
      ],
    },
    {
      title: "Finalist - Jagoan Hosting Infra Competition ( JHIC )",
      date: "2025",
      issuer: "Jagoan Hosting",
      description:
        "Data dummy untuk contoh sertifikasi. Kamu bisa pakai format ini untuk sertifikat cloud, DevOps, networking, atau programming.",
      image:
        "https://www.google.com/s2/favicons?domain=jagoanhosting.com&sz=128",
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="size-3" />,
          href: "https://example.com/cloud-credential",
        },
      ],
    },
  ] as Achievement[],
} as const;

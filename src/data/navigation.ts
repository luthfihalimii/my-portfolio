import {
  FolderKanban,
  House,
  Library,
  Mail,
} from "lucide-react";

export const sections = {
  about: { order: 1, enabled: true, heading: "Tentang" },
  now: {
    order: 2,
    enabled: false,
    label: "Sekarang",
    heading: "Fokus Saat Ini",
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
    enabled: false,
    label: "Layanan",
    heading: "Hal yang bisa saya bantu",
  },
  caseStudies: {
    order: 7,
    enabled: false,
    label: "Case Studies",
    heading: "Studi kasus pilihan",
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
    enabled: false,
    label: "Training",
    heading: "Sertifikasi & Pelatihan",
  },
  achievements: {
    order: 10,
    enabled: false,
    label: "Prestasi",
    heading: "Prestasi & Pencapaian",
  },
  openSource: {
    order: 11,
    enabled: false,
    label: "Open Source",
    heading: "Kontribusi Open Source",
  },
  photos: {
    order: 12,
    enabled: false,
    heading: "Foto Terbaru",
  },
  contact: {
    order: 12,
    enabled: true,
    label: "Contact",
    heading: "Mari Terhubung",
    text: "Tertarik diskusi deployment, backend, security hardening, atau kesempatan internship DevSecOps? Kirim email atau hubungi saya lewat LinkedIn.",
  },
} as const;

export const navbar = [
  { href: "/", icon: House, label: "Home" },
  { href: "/blog", icon: Library, label: "Blog" },
] as const;

export const sectionNavigation = [
  { href: "#projects", sectionId: "projects", icon: FolderKanban, label: "Proyek" },
  { href: "#contact", sectionId: "contact", icon: Mail, label: "Kontak" },
] as const;

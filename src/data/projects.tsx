import { GlobeIcon } from "lucide-react";

export const projects = [
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
        icon: <GlobeIcon className="size-3" />,
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
] as const;

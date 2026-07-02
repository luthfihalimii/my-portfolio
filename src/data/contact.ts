import { MailIcon } from "lucide-react";
import { Icons } from "@/components/icons";

export const contact = {
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
    Signal: {
      name: "Signal",
      url: "https://signal.me/#eu/4XLyl9kYEPBf9UO236hAZFuUwYhttG1nAoC_bL0D9xqTqR4N36tMNZwTmDFYdpC6",
      icon: Icons.signal,
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
      icon: MailIcon,
      navbar: true,
    },
  },
} as const;

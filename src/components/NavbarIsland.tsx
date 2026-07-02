import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/lib/language-context";
import Navbar from "@/components/navbar";

export default function NavbarIsland() {
  return (
    <LanguageProvider>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <TooltipProvider delayDuration={0}>
          <Navbar />
        </TooltipProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}

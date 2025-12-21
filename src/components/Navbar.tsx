import { Button } from "@/components/ui/button";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <a href="#" className="font-semibold tracking-tight">
          Ghisuh
        </a>

        <nav className="flex items-center gap-1">
          {links.map((l) => (
            <Button key={l.href} asChild variant="ghost" size="sm">
              <a href={l.href}>{l.label}</a>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
}

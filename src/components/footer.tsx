import { Mountain } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <Mountain className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-bold">Mirsadh</span>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Mohomed Mirsadh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

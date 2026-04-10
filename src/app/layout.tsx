import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: "Mirsadh | Aspiring Business & Data Analyst",
  description:
    'Portfolio of Mohomed Mirsadh, an Information Systems undergraduate at the University of Colombo School of Computing.',
  keywords: ["Mohomed Mirsadh", "Mirsadh", "Business Analyst", "Data Analyst", "Information Systems", "UCSC", "Sri Lanka", "Portfolio"],
  authors: [{ name: "Mohomed Mirsadh", url: "https://mirsadh.com" }],
  creator: "Mohomed Mirsadh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mirsadh.com",
    title: "Mohomed Mirsadh | Aspiring Business & Data Analyst",
    description: "Portfolio of Mohomed Mirsadh, an Information Systems undergraduate at the University of Colombo School of Computing.",
    siteName: "Mohomed Mirsadh Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohomed Mirsadh | Aspiring Business & Data Analyst",
    description: "Portfolio of Mohomed Mirsadh, an Information Systems undergraduate."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

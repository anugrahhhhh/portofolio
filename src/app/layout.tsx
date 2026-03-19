import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anugrah Putra Al Fatih — Fullstack Developer",
  description: "Fresh graduate from Universitas Negeri Padang in Informatics. Passionate about UI/UX Design, Frontend, Backend, and Mobile Development.",
  keywords: ["Anugrah Putra Al Fatih", "Fullstack Developer", "UI/UX Designer", "Portfolio", "UNP Informatics", "Web Developer Indonesia"],
  authors: [{ name: "Anugrah Putra Al Fatih" }],
  openGraph: {
    title: "Anugrah Putra Al Fatih — Fullstack Developer",
    description: "Fresh graduate from Universitas Negeri Padang in Informatics. Passionate about UI/UX Design, Frontend, Backend, and Mobile Development.",
    url: "https://anugrahputra.com",
    siteName: "Anugrah Putra Al Fatih Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anugrah Putra Al Fatih — Fullstack Developer",
    description: "Fresh graduate from Universitas Negeri Padang in Informatics. Passionate about UI/UX Design, Frontend, Backend, and Mobile Development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

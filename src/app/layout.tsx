import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anugrah Putra Al Fatih — Fullstack Developer",
  description: "Fresh graduate from Universitas Negeri Padang in Informatics. Passionate about UI/UX Design, Frontend, Backend, and Mobile Development.",
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

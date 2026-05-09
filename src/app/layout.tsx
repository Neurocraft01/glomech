import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glomech Engineering Pvt. Ltd | Heavy Industrial Fabrication Pune",
  description: "Glomech Engineering provides high-quality heavy structural fabrication, industrial fabrication & prefabricated structures in Pimpri-Chinchwad, Pune.",
  keywords: "fabrication, heavy structures, industrial fabrication, Pune, Pimpri-Chinchwad, Glomech Engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

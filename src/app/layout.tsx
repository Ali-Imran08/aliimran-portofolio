import type { Metadata } from "next";
import "./globals.css";
import PreloaderWrapper from "@/components/PreloaderWrapper";

export const metadata: Metadata = {
  title: "Ali Imran | Software Builder & Web Developer",
  description: "Portofolio Ali Imran, Software Builder dan Web Developer dari Makassar.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id">
      <body>
        <div className="ambient-bg" aria-hidden="true">
          <div className="ambient-orb ambient-orb-1" />
          <div className="ambient-orb ambient-orb-2" />
        </div>
        <PreloaderWrapper />
        {children}
      </body>
    </html>
  );
}

import Link from "next/link";
import "./globals.css";
import "./portfolio.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "../components/portfolio/Header.jsx";
import type { Metadata } from "next";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Nguyễn Nhật Đăng — Portfolio",
  description: "Portfolio của Nguyễn Nhật Đăng, sinh viên Vật lý tin học quan tâm đến AI, dữ liệu và phát triển web.",
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="vi" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div id="root">
            <Header />
            {children}
            <footer className="site-footer">
              <p>© 2026 Nguyễn Nhật Đăng</p>
              <Link href="https://github.com/FireHaru" target="_blank" rel="noreferrer">
                GitHub ↗
              </Link>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
import SideNavbarMain from "@/components/SideNavbar/SideNavbarMain";
import type { Metadata } from "next";
import "./globals.css";
import HeaderMain from "@/components/Header/HeaderMain";
import FooterMain from "@/features/footer/FooterMain";
import localFont from "next/font/local";
import TabMenuMain from "@/features/TabsMenu/TabMenuMain";

const Inter = localFont({
  src: "../public/Inter.ttf",
});

export const metadata: Metadata = {
  title: "by Archil Milorava",
  description: "Build by Archil Milorava",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Inter.className} antialiased `}>
        <div className="flex">
          <SideNavbarMain />
          <TabMenuMain />
          <main className="flex-1 min-h-screen bg-secondary overflow-hidden">
            <HeaderMain />
            <div className="transition-all duration-300 py-[16px] px-[8px] lg:px-[8rem] xl:px-[12rem]">
              {children}
            </div>
            <FooterMain />
          </main>
        </div>
      </body>
    </html>
  );
}

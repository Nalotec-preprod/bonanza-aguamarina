import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/home/header";
import { poppins } from "@/components/ui/fonts/font";
import ThemeProvider from "@/components/ui/themes/theme-provider";

export const metadata: Metadata = {
  title: "Bonanza Aguamarina",
  description: "Aplicación para la administración del condominio aguamarina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased pb-32`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          <main className="mt-20 px-2 text-sm">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { getDictionary } from "@/dictionaries";
import Navbar from "@/modules/dsg/components/Navbar";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "G4F Jobs",
  description: "Catálogo de projetos, serviços e complexidades",
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "pt-BR" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  const dict = await getDictionary(params.lang);

  return (
    <html lang={params.lang} className="h-screen ">
      <body
        className={
          inter.className + " md:h-full text-foreground bg-background "
        }
      >
        <Providers>
          <header>
            <Navbar dict={dict} />
          </header>
          {/* <main className="light text-foreground bg-background"> */}
          <main className="md:container md:mx-auto md:h-[calc(100vh_-_4rem)]">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}

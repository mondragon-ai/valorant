import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ContextProvider} from "@/lib/providers/GlobalContext";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Valorant Tracker",
  description:
    "Devve Games Valorant tracker that rewards players for progress and performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <ContextProvider>
          <main>{children}</main>
        </ContextProvider>
      </body>
    </html>
  );
}

import "~/styles/globals.css";

import { Exo, Poppins } from "next/font/google";

import { cookies } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import { cn } from "~/utils/utils";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "400",
});
const exo = Exo({
  subsets: ["latin"],
  variable: "--font-exo",
});

export const metadata = {
  title: "Mejengas Ultimate ",
  description: "Mejengas Ultimate - Create your own football team",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("bg-ternary", poppins.variable, exo.variable)}
    >
      <body>
        <TRPCReactProvider cookies={cookies().toString()}>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}

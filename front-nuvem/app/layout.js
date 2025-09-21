import { Funnel_Sans } from "next/font/google";
import "./globals.css";

const funnelSans = Funnel_Sans({
  variable: "--font-funnel-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Taks Manager",
  description: "Gerenciador de tarefas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${funnelSans.variable}`}>
        {children}
      </body>
    </html>
  );
}

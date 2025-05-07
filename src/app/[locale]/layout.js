import Nav from "@/components/Nav";
import { Poppins } from "next/font/google";
import './globals.css'
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react"
import TopBanner from "@/components/Test";
import NextTopLoader from "nextjs-toploader";
import { BasketProvider } from "@/context/basket-context";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata = {
  title: "Albino – Oshxonangiz uchun eng yaxshi tanlov!",
  description: "Albino – bu pichoq, tova, qozon va boshqa oshxona buyumlari uchun ishonchli onlayn do'kon.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default async function RootLayout({ children, params }) {

  const locale = await params?.locale;
  const langMap = { uz: 1, ru: 2 };
  const languageId = langMap[locale] || 1;

  return (
    <html lang="uz">
      <body className={`${poppins.className}`}>
        <NextTopLoader
          color="#000066"
          height={3}
          showSpinner={false}
        />
        <TopBanner languageId={languageId} />
        <BasketProvider>
          <Nav languageId={languageId} />
          {children}
        </BasketProvider>
        <Footer languageId={languageId} />
        <Analytics />
      </body>
    </html>
  );
}
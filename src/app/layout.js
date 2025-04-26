import Nav from "@/components/Nav";
import { Poppins } from "next/font/google";
import './globals.css'
import Footer from "@/components/Footer";

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

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body className={`${poppins.className}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
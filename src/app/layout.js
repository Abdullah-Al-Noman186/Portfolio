import "./globals.css";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Noman - MERN Stack Developer",
  description:
    "Portfolio website of a MERN Stack Developer and BSc Fisheries student.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {children}
        </body>
    </html>
  );
}
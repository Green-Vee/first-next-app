import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Rubik } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "../context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const inter = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Thunder Media",
  description: "Best known agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

import {  Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppContextProvider } from "./(context)/AppContext";

const inter = Inter({
  subsets:['latin']
})

export const metadata = {
  title: "ImmverseAI",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AppContextProvider>
      <body className={`${inter.variable}`} cz-shortcut-listen="true">
        {children}
      </body>
      </AppContextProvider>
    </html>
  );
}

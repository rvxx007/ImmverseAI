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
      <body cz-shortcut-listen="true" className={`${inter.variable}`} >
        {children}
      </body>
      </AppContextProvider>
    </html>
  );
}

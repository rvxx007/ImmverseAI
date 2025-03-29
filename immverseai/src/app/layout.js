import {  Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppContextProvider } from "./(context)/AppContext";

const inter = Inter({
  subsets:['latin'],
  variable:"--font-inter"
})

export const metadata = {
  title: "ImmverseAI",
  description: "ImmverseAI brings your gaming experience to life with cutting-edge virtual technology. Step into a three-dimensional digital world that feels incredibly real, offering a whole new way to play. Become the main character in your own adventure, exploring immersive landscapes and engaging in gameplay like never before. With ImmverseAI, gaming transcends the screen — experience the thrill of a new reality.",
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

import { Poppins } from "next/font/google";
import "./style.css";

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '700'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <h1>you are on show page</h1>
        {children}
        </body>
    </html>
  );
}

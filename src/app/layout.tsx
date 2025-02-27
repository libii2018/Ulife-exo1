import Navbar from "./_components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Clone Chatgpt",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

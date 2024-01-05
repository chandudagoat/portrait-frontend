import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portrait",
  description: "Your stuff, your space.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F3E9D2]">{children}</body>
    </html>
  );
}

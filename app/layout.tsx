import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Radek Vymětalík | Software developer",
    description:
        "My portfolio page that showcases my projects, skills, and experience in a responsive, modern interface.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${inter.className}`}>
                {children}
            </body>
        </html>
    );
}

import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import VerticalNav from '@/components/layout/vertical-nav';

export const metadata: Metadata = {
  title: "AnuAfolami",
  description: 'A Creative Web3 Developer and Block Adoption Advocate.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&family=Pixelify+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <div className="flex">
          <main className="flex-grow flex h-screen-snap">{children}</main>
          <VerticalNav />
        </div>
        <Toaster />
      </body>
    </html>
  );
}

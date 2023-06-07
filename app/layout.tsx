import { Suspense } from 'react';
import Header from '@/components/Header';
import './globals.css';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/Toaster';
import { ScrollArea } from '@/components/ui/ScrollArea';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Product Catalog',
  description: 'Product listing when you wanted',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Toaster />
            <ScrollArea className="h-screen">
              <Header />
              {children}
            </ScrollArea>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

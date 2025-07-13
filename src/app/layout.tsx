import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import 'mellc-ui-kit/styles/index.css';
import '../styles/project-colors.css';
import { ClerkProvider } from '@clerk/nextjs';
import React from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'The MELLC Thought Leader',
  description:
    'A newspaper-style newsletter app built with Next.js, Clerk, and mellc-ui-kit to deliver authenticated, edition-based insights from MELLC Labs.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}

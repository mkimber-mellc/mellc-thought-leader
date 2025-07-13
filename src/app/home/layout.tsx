import React from 'react';
import { Footer, MainContainer } from 'mellc-ui-kit';
import NavBar from '@/components/home-page/NavBar';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <MainContainer bg={'bgsecondary'} gap={8}>
      <NavBar />
      {children}
      <Footer companyName={'Mangaed Enterprieses, LLC'} color={'textwarm'} />
    </MainContainer>
  );
}

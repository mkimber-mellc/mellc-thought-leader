import { MainContainer } from '@/mellc-ui-kit';
import NavBar from '@/components/landing-page/NavBar';
import PullQuote from '@/components/landing-page/PullQuote';
import Preview from '@/components/landing-page/Preview';
import CTA from '@/components/landing-page/CTA';
import MasterHeadBlock from '@/components/landing-page/MasterHeadBlock';

export default function Home() {
  return (
    <MainContainer bg={'bglight'} gap={8}>
      <NavBar />
      <MasterHeadBlock />
      <PullQuote />
      <Preview />
      <CTA />
    </MainContainer>
  );
}

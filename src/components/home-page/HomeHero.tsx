import { BlockContainer, CaptionText, FlexContainer, Subtitle } from 'mellc-ui-kit';
import Image from 'next/image';

export default function HomeHero() {
  return (
    <FlexContainer
      width={'full'}
      gap={5}
      padding={'md'}
      borderRadius={'md'}
      className={'border-b-thick borderbrandmid shadow-xl shadow-primary'}
    >
      <BlockContainer className={'hidden sm:block'}>
        <Image src={'/mellc-logo.png'} alt={'logo'} width={350} height={350} />
      </BlockContainer>
      <FlexContainer flexDirection={'col'} gap={2}>
        <Subtitle color={'textsecondary'}>From the desk of the CEO ...</Subtitle>
        <CaptionText color={'textsecondary'}>
          Welcome to the MELLC Thought Leader — where strategy meets soul.
        </CaptionText>
        <CaptionText color={'textsecondary'}>
          This isn’t just a newsletter. It’s a window into how we build at MELLC — with clarity,
          with conviction, and without the fluff. Every article comes from inside the labs — no
          recycled takes, no industry noise.
        </CaptionText>
        <CaptionText color={'textsecondary'}>
          This publication is a practice. A rhythm of thought, execution, and refinement.
        </CaptionText>
        <CaptionText color={'textsecondary'}>
          If you’ve been looking for a place where ideas are built, not just tweeted — you found it.
        </CaptionText>
        <CaptionText color={'textsecondary'}>Welcome in. Let’s build something real.</CaptionText>
        <CaptionText italic align={'right'} color={'textsecondary'}>
          - Marcus Kimber
        </CaptionText>
      </FlexContainer>
    </FlexContainer>
  );
}

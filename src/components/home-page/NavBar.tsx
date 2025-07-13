import { SignOutButton } from '@clerk/nextjs';
import { Button, CaptionText, FlexContainer, UILink } from 'mellc-ui-kit';

export default function NavBar() {
  return (
    <FlexContainer justify="between" width={'full'}>
      <UILink href={'/home'}>
        <CaptionText color={'textsecondary'} weight={'bold'} className={'sm:text-xl pt-3 sm:pt-0'}>
          the MELLC Thought Leader
        </CaptionText>
      </UILink>

      {/* Newsletter Edition Dropdown */}
      {/*<FlexContainer flexDirection={'standard'} gap={2}>*/}
      {/*  <select className="textlight bg-transparent font-semibold py-1 px-2 sm:py-2 sm:px-8">*/}
      {/*    <option className="textblack">July 2025</option>*/}
      {/*    <option className="textblack">June 2025</option>*/}
      {/*  </select>*/}

      {/* Sign Out */}
      <SignOutButton>
        <Button
          bg={'transparent'}
          size={'caption'}
          color={'textlight'}
          borderWidth={'base'}
          padding={'py-1 px-4'}
          className="borderbrandmid hover:bg-black hover:text-white"
        >
          Sign Out
        </Button>
      </SignOutButton>
      {/*</FlexContainer>*/}
    </FlexContainer>
  );
}

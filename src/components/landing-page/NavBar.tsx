import { SignInButton, SignUpButton } from '@clerk/nextjs';
import { Button, FlexContainer, UILink } from '@/mellc-ui-kit';

export default function NavBar() {
  return (
    <FlexContainer justify={'between'} alignItems={'center'} width={'full'}>
      <UILink href="/" className="text-md md:text-lg font-semibold textlight">
        the MELLC Thought Leader
      </UILink>

      <FlexContainer gap={2}>
        <SignInButton mode="modal">
          <Button
            bg={'bgaccent'}
            size={'caption'}
            padding={'sm'}
            className={'hover:bg-transparent hover:bg-gray-100 hover:text-black md:py-2 md:px-4'}
          >
            Login
          </Button>
        </SignInButton>
        <SignUpButton mode="modal">
          <Button
            bg={'bgoutline'}
            size={'caption'}
            color={'textlight'}
            padding={'sm'}
            borderWidth={'base'}
            className={'borderprimary hover:bg-black hover:text-white md:py-2 md:px-4'}
          >
            Subscribe
          </Button>
        </SignUpButton>
      </FlexContainer>
    </FlexContainer>
  );
}

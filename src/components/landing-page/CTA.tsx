import { FlexContainer, Subtitle, BodyText, Button } from 'mellc-ui-kit';
import { SignUpButton } from '@clerk/nextjs';

export default function CTA() {
  return (
    <FlexContainer
      bg={'bgbrandmid'}
      flexDirection="col"
      alignItems="center"
      padding={'2xl'}
      gap={6}
      width={'full'}
      className="textcenter"
    >
      <Subtitle color="textbrandmid" weight="bold">
        Stay Ahead of the Noise
      </Subtitle>

      <BodyText color="textbrandmid">
        No fluff. No recycled ideas. Just strategy that works — straight from the labs.
      </BodyText>

      <SignUpButton mode="modal">
        <Button
          bg="bgwarm"
          color="textwarm"
          padding="lg"
          borderWidth="base"
          className="hover:bg-black hover:text-white"
        >
          Subscribe to the MELLC Thought Leader
        </Button>
      </SignUpButton>
    </FlexContainer>
  );
}

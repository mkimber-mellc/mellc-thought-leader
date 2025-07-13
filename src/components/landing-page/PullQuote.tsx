import { CaptionText, FlexContainer } from '@/mellc-ui-kit';

export default function PullQuote() {
  return (
    <FlexContainer
      flexDirection="col"
      alignItems="center"
      gap={4}
      py={'lg'}
      px={'md'}
      className="textcenter max-w-3xl mx-auto"
    >
      <CaptionText italic color={'textlight'}>
        “The future of modern operations is being built in the quiet. the Modern Thought Leader is
        where the real ones read.”
      </CaptionText>

      <CaptionText color="textwarm" weight="bold">
        — the MELLC Team
      </CaptionText>
    </FlexContainer>
  );
}

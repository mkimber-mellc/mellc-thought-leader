import { Title, BodyText, FlexContainer, Card, CaptionText } from 'mellc-ui-kit';
import { customTheme } from '@/styles/project-theme';

export default function MasterHeadBlock() {
  return (
    <Card bg={customTheme.primary.bg} px={'lg'} py={'2xl'}>
      <FlexContainer flexDirection={'standard'} justify={'center'} gap={4}>
        <Title weight="bold" color="textprimary" className="tracking-tight">
          the MELLC Thought Leader
        </Title>

        <BodyText color="textprimary">
          Exclusive insights in operations, finance, and modern strategy — from the desk, not the
          echo chamber.
        </BodyText>

        <CaptionText color="textprimary" italic>
          Get monthly clarity from the thinkers behind MELLC Labs. Our team brings strategic
          execution to life — in every article.
        </CaptionText>
      </FlexContainer>
    </Card>
  );
}

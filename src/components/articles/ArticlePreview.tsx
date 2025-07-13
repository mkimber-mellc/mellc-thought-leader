// components/ArticlePreview.tsx
import { BlockContainer, Subtitle, CaptionText, FlexContainer, UILink } from 'mellc-ui-kit';
import { Article } from '@/lib/articles';

type Props = {
  article: Article;
};

export default function ArticlePreview({ article }: Props) {
  return (
    <BlockContainer
      padding="xl"
      borderRadius="md"
      className="bgwhite shadow-primary bordersecondary border max-w-5xl mx-auto"
    >
      <FlexContainer flexDirection="col" justify={'between'} height={'full'} gap={4}>
        <FlexContainer flexDirection={'col'} gap={2}>
          <Subtitle color="textsecondary" weight="bold">
            {article.title}
          </Subtitle>
          <CaptionText color="textsecondary">{article.excerpt}...</CaptionText>
        </FlexContainer>
        <UILink href={`/home/articles/${article.slug}`}>
          <CaptionText color="textwarm" weight="bold" italic>
            Read the full article →
          </CaptionText>
        </UILink>
      </FlexContainer>
    </BlockContainer>
  );
}

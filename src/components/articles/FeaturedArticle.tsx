import { BlockContainer, Subtitle, CaptionText, FlexContainer, UILink } from '@/mellc-ui-kit';
import Image from 'next/image';
import { Article } from '@/lib/articles';

type Props = {
  article: Article;
};

export default function FeaturedArticle({ article }: Props) {
  return (
    <BlockContainer
      borderRadius="md"
      padding="xl"
      className="bgwhite shadow-primary bordersecondary border max-w-5xl mx-auto"
    >
      <FlexContainer flexDirection="standard" gap={3}>
        {/*<BlockContainer className="w-full">*/}
        {/*  <Image*/}
        {/*    src={article.image}*/}
        {/*    alt={article.title}*/}
        {/*    width={250}*/}
        {/*    height={300}*/}
        {/*    className={'rounded'}*/}
        {/*  />*/}
        {/*</BlockContainer>*/}

        <FlexContainer flexDirection="col" justify={'center'} gap={2} className="w-full sm:w-1/2">
          <Subtitle color="textsecondary" weight="bold">
            {article.title}
          </Subtitle>
          <CaptionText color="textsecondary">{article.excerpt}...</CaptionText>
          <UILink href={`/home/articles/${article.slug}`}>
            <CaptionText
              color="textwarm"
              weight="bold"
              italic
              className={'hover:shadow-lg hover:opacity-80'}
            >
              Read the full article →
            </CaptionText>
          </UILink>
        </FlexContainer>
      </FlexContainer>
    </BlockContainer>
  );
}

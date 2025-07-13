import { notFound } from 'next/navigation';
import { getArticleBySlug } from '@/lib/articles';
import { getAuthorById } from '@/lib/authors';
import RenderArticle from '@/components/articles/RenderArticle';
import {
  MainContainer,
  FlexContainer,
  Subtitle,
  CaptionText,
  UILink,
  BodyText,
} from '@/mellc-ui-kit';

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return notFound();

  const author = getAuthorById(article.authorId);

  return (
    <MainContainer bg="bgwhite" padding="xl" className="min-h-screen">
      <FlexContainer width={'full'} justify={'end'} pb={'xl'}>
        <UILink href={'/home'}>
          <BodyText color={'textwarm'}>👈🏼 Back to Front Page</BodyText>
        </UILink>
      </FlexContainer>
      <FlexContainer flexDirection="col" gap={6}>
        <Subtitle color="textsecondary" weight="bold">
          {article.title}
        </Subtitle>
        {author && (
          <CaptionText color="textsecondary" italic>
            By {author.name} — {new Date(article.date).toLocaleDateString()}
          </CaptionText>
        )}
        <RenderArticle content={article.content} />
      </FlexContainer>
    </MainContainer>
  );
}

import { MainContainer, FlexContainer, Subtitle, Center, Title } from '@/mellc-ui-kit';
import FeaturedArticle from '@/components/articles/FeaturedArticle';
import HomeHero from '@/components/home-page/HomeHero';
import ArticlePreview from '@/components/articles/ArticlePreview';
import { Article } from '@/lib/articles';
import { getArticles } from '@/lib/fetchers';

export default async function HomePage() {
  const articles: Article[] = await getArticles();

  const tech = articles.find((a) => a.slug === 'shadow-ops');
  const branding = articles.find((a) => a.slug === 'branding-rehearsal');
  const finance = articles.find((a) => a.slug === 'roi-lens');
  const ops = articles.find((a) => a.slug === 'ops-clarity-stack');
  const advice = articles.find((a) => a.slug === 'structure-before-scale');

  return (
    <MainContainer bg="bgsecondary" padding="xl" className="min-h-screen">
      <FlexContainer flexDirection="col" gap={16}>
        <HomeHero />
        {/* Featured Article Block */}
        <Center>
          <Title color={'textwarm'}>Featured Article</Title>
        </Center>
        {advice && <FeaturedArticle article={advice} />}

        {/* Secondary Articles */}
        <Center>
          <Subtitle color={'textwarm'}>Articles</Subtitle>
        </Center>
        <FlexContainer flexDirection={'col'} gap={10} className={'sm:grid sm:grid-cols-2'}>
          {branding && <ArticlePreview article={branding} />}
          {finance && <ArticlePreview article={finance} />}
          {ops && <ArticlePreview article={ops} />}
          {tech && <ArticlePreview article={tech} />}
        </FlexContainer>
      </FlexContainer>
    </MainContainer>
  );
}

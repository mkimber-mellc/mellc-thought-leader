'use client';

import { Subtitle, BodyText, Card, FlexContainer, CaptionText } from '@/mellc-ui-kit';
import { getAllArticles } from '@/lib/articles';
import type { Article } from '@/lib/articles';
import { useEffect, useState } from 'react';

export default function Preview() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const load = async () => {
      const all = getAllArticles();
      const latest = all
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 2);
      setArticles(latest);
    };

    load();
  }, []);

  const bgClasses = ['bgwarm', 'bgcta'];

  return (
    <FlexContainer flexDirection="col" gap={6} className="max-w-6xl mx-auto">
      <Subtitle color="textsecondary" weight="bold" align="center">
        Sneak Peek
      </Subtitle>

      <FlexContainer flexDirection="standard" gap={6}>
        {articles.map((article, idx) => (
          <Card key={article.id} bg={bgClasses[idx % bgClasses.length]} padding="lg">
            <BodyText
              color={bgClasses[idx % bgClasses.length].replace('bg', 'text')}
              weight="bold"
              className="mb-2"
            >
              {article.title}
            </BodyText>
            <CaptionText color={bgClasses[idx % bgClasses.length].replace('bg', 'text')}>
              {article.excerpt}
            </CaptionText>
          </Card>
        ))}
      </FlexContainer>
    </FlexContainer>
  );
}

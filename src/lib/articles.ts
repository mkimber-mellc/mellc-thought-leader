import articles from '@/data/articles.json';
import { z } from 'zod';

const ArticleBlockSchema = z.union([
  z.object({
    type: z.literal('heading'),
    level: z.union([z.literal(2), z.literal(3)]),
    text: z.string(),
  }),
  z.object({ type: z.literal('paragraph'), text: z.string() }),
  z.object({ type: z.literal('quote'), text: z.string() }),
  z.object({ type: z.literal('list'), items: z.array(z.string()) }),
]);

const ArticleSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  authorId: z.string(),
  category: z.string(),
  content: z.array(ArticleBlockSchema),
  excerpt: z.string(),
  image: z.string().optional(),
  date: z.string(),
});

export type Article = z.infer<typeof ArticleSchema>;

export function getAllArticles(): Article[] {
  return articles.map((a) => ArticleSchema.parse(a));
}

export function getArticleBySlug(slug: string): Article | undefined {
  const article = articles.find((a) => a.slug === slug);
  if (!article) return undefined;

  return ArticleSchema.parse(article);
}

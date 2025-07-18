import { getAllArticles, getArticleBySlug } from '@/lib/articles';

describe('Articles Helper Functions', () => {
  it('should return all articles', () => {
    const articles = getAllArticles();
    expect(Array.isArray(articles)).toBe(true);
    expect(articles.length).toBeGreaterThan(0);
  });

  it('should return a valid article by slug', () => {
    const article = getArticleBySlug('shadow-ops');
    expect(article).toBeDefined();
    expect(article?.slug).toBe('shadow-ops');
  });

  it('should return undefined for non-existent slug', () => {
    const article = getArticleBySlug('does-not-exist');
    expect(article).toBeUndefined();
  });
});

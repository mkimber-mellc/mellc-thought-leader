import { getAllAuthors, getAuthorById } from '@/lib/authors';

describe('Authors Helper Functions', () => {
  it('should return all authors', () => {
    const authors = getAllAuthors();
    expect(Array.isArray(authors)).toBe(true);
    expect(authors.length).toBeGreaterThan(0);
  });

  it('should return a valid author by ID', () => {
    const author = getAuthorById('alisha');
    expect(author).toBeDefined();
    expect(author?.id).toBe('alisha');
  });

  it('should return undefined for unknown ID', () => {
    const author = getAuthorById('not-real-id');
    expect(author).toBeUndefined();
  });
});

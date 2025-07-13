import authors from '@/data/authors.json';

export type Author = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
};

export function getAllAuthors(): Author[] {
  return authors;
}

export function getAuthorById(id: string): Author | undefined {
  return authors.find((author) => author.id === id);
}

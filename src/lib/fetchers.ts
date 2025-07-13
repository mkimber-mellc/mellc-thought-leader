export async function getArticles() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/articles`, {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Failed to fetch articles');

  const { data } = await res.json();
  return data;
}

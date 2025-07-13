import { NextResponse } from 'next/server';
import { getAllAuthors } from '@/lib/authors';

export async function GET() {
  try {
    const authors = getAllAuthors();
    return NextResponse.json({ data: authors });
  } catch (error) {
    console.error('Error fetching authors:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

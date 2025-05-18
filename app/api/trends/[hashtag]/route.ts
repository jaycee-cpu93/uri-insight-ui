import { NextRequest, NextResponse } from 'next/server';
import { trendData } from '@/mocks/trendData';

export async function GET(request: NextRequest) {
  // Get the hashtag from the URL
  const url = new URL(request.url);
  // Assuming your route is /api/trends/[hashtag]
  const hashtag = url.pathname.split('/').pop() || 'uri';

  // pull from your mock (falling back if needed)
  const data = trendData[hashtag] ?? trendData['uri'];

  return NextResponse.json(data);
}

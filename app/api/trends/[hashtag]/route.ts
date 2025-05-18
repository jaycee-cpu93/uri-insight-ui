import { NextRequest, NextResponse } from 'next/server';
import { trendData } from '@/mocks/trendData';

export async function GET(request: NextRequest) {
  const url = new URL(request.url);

  const hashtag = url.pathname.split('/').pop() || 'uri';

  const data = trendData[hashtag] ?? trendData['uri'];

  return NextResponse.json(data);
}

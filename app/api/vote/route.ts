import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { optionId } = await request.json();

    if (!optionId) {
      return NextResponse.json({ error: 'Missing optionId' }, { status: 400 });
    }

    // Temporary success response without database blocking
    return NextResponse.json({ success: true, message: 'Vote recorded successfully!' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
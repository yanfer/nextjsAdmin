import { dbConnect } from '@/app/libs/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  const con = await dbConnect();
  console.log('hit db connect', new Date().getSeconds());
  return new NextResponse('connected and disconnected');
}

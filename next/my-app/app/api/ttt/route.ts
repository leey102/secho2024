import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { pathname, host, hostname, searchParams } = req.nextUrl;

  return NextResponse.json({
    id: 1,
    name: 'Hong',
    pathname,
    host,
    hostname,
    str: searchParams.get('str'),
    ip: req.ip || host,
    cookies: req.cookies.getAll(),
  });
}

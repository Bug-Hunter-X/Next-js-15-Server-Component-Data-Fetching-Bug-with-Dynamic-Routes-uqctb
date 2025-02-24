// bugSolution.js

'use server';

import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop();
  // Simulate data fetching
  if (id) {
    try {
      const data = await fetchData(id);
      return NextResponse.json(data);
    } catch (error) {
      return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
  } else {
    return NextResponse.json({ error: 'Missing ID' }, { status: 400 });
  }
}

async function fetchData(id: string): Promise<{ id: string; data: string }> {
  // Replace with your actual data fetching logic
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, data: `Data for ID ${id}` }), 500);
  });
}

// Then use the API route in your server component to handle the data fetching
// This ensures reliable access to the route parameters.
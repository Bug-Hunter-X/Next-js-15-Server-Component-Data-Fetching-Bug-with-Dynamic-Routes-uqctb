# Next.js 15 Server Component Data Fetching Bug

This repository demonstrates a bug in Next.js 15 related to data fetching in server components with dynamic routes. The bug occurs when parameters from the URL are not correctly passed to the server component's async function, leading to errors or empty data.

## Bug Description

When fetching data within a server component using parameters from a dynamic route (`/users/[id]`), the `id` parameter might not be accessible within the component's `async` function correctly. This typically results in errors or the display of empty data.

## Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/users/1`.  Observe the error or empty data.

## Solution

The solution involves ensuring that the route parameters are correctly propagated to the server component's data fetching function. This often involves restructuring the data fetching logic or using the built-in Next.js API routes and functions for data fetching.
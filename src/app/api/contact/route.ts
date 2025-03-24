
 export async function POST(request: Request) {
  const data = request.body;
  let uid = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { 'Set-Cookie': `token=${uid}` },
  })
}
export { default } from 'next-auth/middleware';

export const config = {
  matcher: [
    "/((?!api/|auth/login|auth/register).*)",
  ],
};

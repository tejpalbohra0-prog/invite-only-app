// app/layout.tsx

import './globals.css';

export const metadata = {
  title: 'Invite Only App',
  description: 'This is the root layout for the Next.js application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
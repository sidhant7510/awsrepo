import './globals.css';

export const metadata = {
  title: 'Fresh Basket Store',
  description: 'Production-ready Next.js vegetable and fruit store',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import { Poppins } from 'next/font/google';
import './styles/style.css';
import './styles/mediaqueries.css';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
  title: "Cosmic Insights - Abhishek Karkola's Blog",
  description: "Personal website of Abhishek Karkola, a Gravitational Wave Physicist.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

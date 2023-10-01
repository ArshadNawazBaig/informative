import './globals.css';
import { Poppins } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import StyledComponentsRegistry from '../lib/registry';
import { ThemeProvider } from '@/context/ThemeProvider';
import { Analytics } from '@vercel/analytics/react';
import Main from './main';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  metadataBase: new URL('https://informative-eta.vercel.app'),
  title: {
    default: 'Infomative - Your Gateway to Diverse Topics',
    template: `%s - Infomative - Your Gateway to Diverse Topics`,
  },
  description:
    'Explore a World of Knowledge and Inspiration with Infomative. Discover the Latest in Entertainment, Health, Illustration, Life Style, Music, Sports, Technology, Travel, Typography, and More. Dive into a Wealth of Informative Content Today!',
  applicationName: 'Infomative',
  keywords: [
    'News',
    'Education',
    'Articles',
    'Tutorials',
    'Lifestyle',
    'Technology',
    'Science',
    'Health',
    'Travel',
    'Culture',
    'Sports',
  ],
  authors: [
    {
      name: 'Arshad Nawaz Baig',
      url: 'https://www.instagram.com/arshad_nawaz_baig/',
    },
  ],
  creator: 'Arshad Nawaz Baig',
  publisher: 'Arshad Nawaz Baig',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: 'Infomative - Your Gateway to Diverse Topics',
    description:
      'Explore a World of Knowledge and Inspiration with Infomative. Discover the Latest in Entertainment, Health, Illustration, Life Style, Music, Sports, Technology, Travel, Typography, and More. Dive into a Wealth of Informative Content Today!',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="MUzhURRO1S3WZus6Xb82Hrj8FvGBDey_v_tVrpjiGiQ"
        />
        <meta name="robots" content="all" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <Main className={poppins.className} id="main">
              {children}
              <Analytics />
            </Main>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

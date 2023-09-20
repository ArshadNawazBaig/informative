import './globals.css';
import { Poppins } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import StyledComponentsRegistry from '../lib/registry';
import { ThemeProvider } from '@/context/ThemeProvider';
import Main from './main';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'Infomative - Your Gateway to Diverse Topics',
  description:
    'Explore a World of Knowledge and Inspiration with Infomative. Discover the Latest in Entertainment, Health, Illustration, Life Style, Music, Technology, Travel, Typography, and More. Dive into a Wealth of Informative Content Today!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <Main className={poppins.className} id="main">
              {children}
            </Main>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

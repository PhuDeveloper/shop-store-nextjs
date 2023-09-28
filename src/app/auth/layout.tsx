import HeaderAuthComponent from '@/components/layout/HeaderAuth';
import './globals.css';
import ContentComponent from '@/components/layout/Content';
import { Inter } from 'next/font/google';
import FooterComponent from '@/components/layout/Footer';
import { Layout } from 'antd';
import ProviderComponent from '@/configs/provider';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Auth app',
  description: 'Generated by Auth app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProviderComponent>
          <Layout>
            <HeaderAuthComponent />
            <ContentComponent>{children}</ContentComponent>
            <FooterComponent />
          </Layout>
        </ProviderComponent>
      </body>
    </html>
  );
}
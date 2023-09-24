import AdminContentComponent from '@/components/layout/Content';
import AdminFooterComponent from '@/components/layout/Footer';
import HeaderAdminComponent from '@/components/layout/Header';
import AdminSideBarComponent from '@/components/layout/SideBar';
import { Layout } from 'antd';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ProviderComponent from '@/configs/provider';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProviderComponent>
          <Layout>
            <HeaderAdminComponent />
            <Layout hasSider>
              <AdminSideBarComponent />

              <AdminContentComponent>{children}</AdminContentComponent>
            </Layout>
            <AdminFooterComponent />
          </Layout>
        </ProviderComponent>
      </body>
    </html>
  );
}

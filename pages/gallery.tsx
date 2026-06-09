'use client';

import Head from 'next/head';
import dynamic from 'next/dynamic';
import {MainLayout} from '../src/layouts/MainLayout';

const GalleryClient = dynamic(
  () => import('../src/features/Gallery').then(m => m.Gallery),
  {
    ssr: false,
  },
);

export default function GalleryPage() {
  return (
    <>
      <Head>
        <title>گالری</title>
      </Head>
      <MainLayout>
        <GalleryClient />
      </MainLayout>
    </>
  );
}

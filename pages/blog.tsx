'use client';

import Head from 'next/head';
import {MainLayout} from '../src/layouts/MainLayout';
import {Blog} from '../src/features/Blog';

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>وبلاگ</title>
      </Head>
      <MainLayout>
        <Blog />
      </MainLayout>
    </>
  );
}

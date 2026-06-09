'use client';

import Head from 'next/head';
import {MainLayout} from '../src/layouts/MainLayout';
import {Home} from '../src/features/Home';

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Modern Persian University Website</title>
        <meta name='description' content='Modern Persian University landing' />
      </Head>
      <MainLayout>
        <Home />
      </MainLayout>
    </>
  );
}

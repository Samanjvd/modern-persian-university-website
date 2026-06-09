'use client';

import Head from 'next/head';
import {MainLayout} from '../src/layouts/MainLayout';
import {About} from '../src/features/About';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>درباره من</title>
      </Head>
      <MainLayout>
        <About />
      </MainLayout>
    </>
  );
}

'use client';

import Head from 'next/head';
import {MainLayout} from '../src/layouts/MainLayout';
import {Contact} from '../src/features/Contact';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>تماس</title>
      </Head>
      <MainLayout>
        <Contact />
      </MainLayout>
    </>
  );
}

'use client';

import Head from 'next/head';
import {MainLayout} from '../src/layouts/MainLayout';
import {Honors} from '../src/features/Honors';

export default function HonorsPage() {
  return (
    <>
      <Head>
        <title>افتخارات</title>
      </Head>
      <MainLayout>
        <Honors />
      </MainLayout>
    </>
  );
}

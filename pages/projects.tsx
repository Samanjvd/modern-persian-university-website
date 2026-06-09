'use client';

import Head from 'next/head';
import {MainLayout} from '../src/layouts/MainLayout';
import {Projects} from '../src/features/Projects';

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>پروژه‌ها</title>
      </Head>
      <MainLayout>
        <Projects />
      </MainLayout>
    </>
  );
}

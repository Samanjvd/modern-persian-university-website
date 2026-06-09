'use client';

import Head from 'next/head';
import {MainLayout} from '../src/layouts/MainLayout';
import {Courses} from '../src/features/Courses';

export default function CoursesPage() {
  return (
    <>
      <Head>
        <title>دوره‌ها</title>
      </Head>
      <MainLayout>
        <Courses />
      </MainLayout>
    </>
  );
}

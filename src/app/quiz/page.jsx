"use client";

import dynamic from 'next/dynamic';

const QuizClient = dynamic(() => import('./QuizClient'), { ssr: false });

export default function QuizPage() {
  return <QuizClient/>;
}

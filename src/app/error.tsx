'use client';

import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-50">
      <h1
        className="text-8xl font-bold bg-gradient-to-r from-pink-500 to-violet-500
    bg-clip-text text-transparent"
      >
        Error
      </h1>
      <p className="text-4xl font-medium">Unexpected error occurred... 🐱</p>
      <Link
        href="/"
        className="mt-4 text-xl font-semibold text-red-400 hover:text-red-300"
      >
        TOPへ戻る
      </Link>
    </div>
  );
}

export default ErrorPage

'use client';

export default function error(error: Error) {
  return (
    <section className='bg-indigo-900 rounded-md flex flex-col overflow-hidden gap-4 px-4 py-6 text-center'>
      {error.message}
      User Not Founded 😿
    </section>
  );
}

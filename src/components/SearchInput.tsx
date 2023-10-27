'use client';

import { FormEvent } from 'react';
import SearchIcon from './icons/SearchIcon';
import { useRouter } from 'next/navigation';
import Button from './ui/Button';

export default function SearchInput() {
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push(`/${e.target[0].value}`);
  };

  return (
    <form
      className='flex items-center gap-2 justify-center p-2 rounded-md bg-indigo-900'
      onSubmit={handleSubmit}
    >
      <SearchIcon width={30} fill='lightblue' className='mx-2' />
      <input
        type='text'
        className='h-full w-full p-2 bg-transparent placeholder:text-blue-200 focus:outline-none text-base'
        placeholder='GitHub username...'
      ></input>
      <Button type='submit' className=''>
        Search
      </Button>
      {/* <button type='submit' className='bg-indigo-600 p-2 rounded-md'>
        Search
      </button> */}
    </form>
  );
}

import Link from 'next/link';

interface Props {}
export default function Navbar({}: Props) {
  return (
    <header className='w-full flex justify-between items-center py-4 px-4'>
      <Link href={'/'} className='text-4xl'>
        gitfinder.
      </Link>
      {/* <nav>Ligth</nav> */}
    </header>
  );
}

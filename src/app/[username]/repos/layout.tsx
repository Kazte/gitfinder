import Link from 'next/link';
import Button from '~/components/ui/Button';

export default function layout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { username: string };
}) {
  return (
    <>
      <Link href={`/${params.username}`} className='w-full'>
        <Button className='w-full'>Back to profile</Button>
      </Link>
      {children}
    </>
  );
}

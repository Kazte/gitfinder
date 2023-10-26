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
      <Link href={`/${params.username}`}>
        <Button>Back to profile</Button>
      </Link>
      {children}
    </>
  );
}

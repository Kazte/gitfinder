import Link from 'next/link';
import Button from '~/components/ui/Button';
import { getNumberOfRepos } from '~/services/github.service';

export default async function layout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { username: string; page: string };
}) {
  const maxRepos = await getNumberOfRepos(params.username);

  const maxPage = Math.ceil(maxRepos / 30);

  const backDisabled = parseInt(params.page) <= 1;
  const nextDisabled = parseInt(params.page) === maxPage;

  const currentPage = parseInt(params.page);
  const backPage = currentPage - 1;
  const nextPage = currentPage + 1;

  return (
    <>
      {children}
      {currentPage <= maxPage && maxPage > 1 ? (
        <section className='flex flex-row gap-5 w-full'>
          <Link
            href={`/${params.username}/repos/${backPage}`}
            className='w-full'
          >
            <Button className='w-full' disabled={backDisabled}>
              Back
            </Button>
          </Link>
          <Link
            href={`/${params.username}/repos/${nextPage}`}
            className='w-full'
          >
            <Button className='w-full' disabled={nextDisabled}>
              Next
            </Button>
          </Link>
        </section>
      ) : (
        ''
      )}
    </>
  );
}

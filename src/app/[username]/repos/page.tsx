import Link from 'next/link';
import RepoCard from '~/components/RepoCard';
import Button from '~/components/ui/Button';
import { GithubRepo } from '~/types/githubRepo';

const fetchRepos = (username: string): Promise<GithubRepo[]> => {
  return fetch(`https://api.github.com/users/${username}/repos`, {
    // cache: 'no-store'
  }).then((res) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(res.json());
      }, 1000);
    });
  });
};

export default async function RepoPage({
  params
}: {
  params: { username: string };
}) {
  const repos: GithubRepo[] = await fetchRepos(params.username);

  return (
    <section className='flex flex-col gap-2'>
      <ul className='grid md:grid-cols-2 grid-cols-1 place-items-stretch gap-4 flex-wrap pb-4'>
        {repos.map((repo) => {
          return (
            <li key={repo.id}>
              <RepoCard repo={repo} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

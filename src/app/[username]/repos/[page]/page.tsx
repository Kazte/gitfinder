import RepoCard from '~/components/RepoCard';
import { getUserRepos } from '~/services/github.service';
import { GithubRepo } from '~/types/githubRepo';

export default async function page({
  params
}: {
  params: { username: string; page: number };
}) {
  const repos: GithubRepo[] = await getUserRepos(params.username, params.page);

  return (
    <section className='flex flex-col gap-2'>
      {repos.length > 0 ? (
        <ul className='grid lg:grid-cols-2 grid-cols-1 place-items-stretch gap-4 flex-wrap pb-4'>
          {repos.map((repo) => {
            return (
              <li key={repo.id}>
                <RepoCard repo={repo} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p className='text-lg font-semibold text-center'>No repos to shown.</p>
      )}
    </section>
  );
}

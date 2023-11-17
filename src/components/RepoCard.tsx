import { GithubRepo } from '~/types/githubRepo';
import { formatDate } from '~/utilities/date.utilities';
import HeartIcon from './icons/HeartIcon';

interface Props {
  repo: GithubRepo;
}
export default function RepoCard({ repo }: Props) {
  return (
    <a href={repo.html_url} target='_blank'>
      <section
        className='hover:scale-[1.01] transition-transform bg-indigo-900 rounded-md flex flex-col overflow-hidden gap-4 px-4 py-6 
      h-full'
      >
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl font-semibold overflow-ellipsis leading-5'>
            {repo.name}
          </h2>
          <div className='flex flex-col'>
            <em>Created {formatDate(new Date(repo.created_at))}</em>
            <em>Updated {formatDate(new Date(repo.updated_at))}</em>
          </div>
        </div>
        {repo.description ? (
          <p>{repo.description}</p>
        ) : (
          <p className='text-gray-400'>Not bio yet</p>
        )}
        <div className='bg-indigo-950 w-fit px-4 py-2 mt-auto gap-2 rounded-md flex flex-row justify-around items-center'>
          <HeartIcon />
          <strong className='text-xl'>{repo.stargazers_count}</strong>
        </div>
      </section>
    </a>
  );
}

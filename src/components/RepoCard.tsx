import { GithubRepo } from '~/types/githubRepo';
import { formatDate } from '~/utilities/date.utilities';

interface Props {
  repo: GithubRepo;
}
export default function RepoCard({ repo }: Props) {
  return (
    <a href={repo.html_url} target='_blank' className='hover:scale-125'>
      <section
        className='bg-blue-900 rounded-md flex flex-col overflow-hidden gap-4 px-4 py-6 
      h-full'
      >
        <div>
          <h2 className='text-2xl font-semibold overflow-ellipsis leading-5'>
            {repo.name}
          </h2>
          <em>Created {formatDate(new Date(repo.created_at))}</em>
        </div>
        {repo.description ? (
          <p>{repo.description}</p>
        ) : (
          <p className='text-gray-400'>Not bio yet</p>
        )}
        <div className='bg-blue-950 w-fit px-4 py-2 mt-auto gap-2 rounded-md flex flex-row justify-around items-center'>
          <h4>Likes</h4>
          <strong className='text-xl'>{repo.stargazers_count}</strong>
        </div>
      </section>
    </a>
  );
}

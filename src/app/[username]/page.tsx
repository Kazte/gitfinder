import Link from 'next/link';
import ProfileCard from '~/components/ProfileCard';
import Button from '~/components/ui/Button';
import { getGithubProfile } from '~/services/github.service';
import { GithubProfile } from '~/types/profile';

export default async function page({
  params
}: {
  params: { username: string };
}) {
  const user: GithubProfile = await getGithubProfile(params.username);

  return (
    <>
      <ProfileCard profile={user} />
      <Link href={`/${params.username}/repos/1`}>
        <Button className='w-full'>Repositories</Button>
      </Link>
    </>
  );
}

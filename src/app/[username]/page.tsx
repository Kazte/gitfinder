import Link from 'next/link';
import ProfileCard from '~/components/ProfileCard';
import Button from '~/components/ui/Button';
import { GithubProfile } from '~/types/profile';

const fetchUser = async (
  username: string
): Promise<Promise<GithubProfile> | any> => {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  // throw new Error('User not founded.');

  return fetch(`https://api.github.com/users/${username}`, {
    // cache: 'no-store'
  }).then((res) => {
    if (!res.ok) throw new Error('User not founded.');

    return res.json();
  });
};

export default async function page({
  params
}: {
  params: { username: string };
}) {
  const user: GithubProfile = await fetchUser(params.username);
  return (
    <>
      <ProfileCard profile={user} />
      <Link href={`/${params.username}/repos`}>
        <Button>Ver Repos</Button>
      </Link>
    </>
  );
}

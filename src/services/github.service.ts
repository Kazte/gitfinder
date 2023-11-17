import { GithubProfile } from '~/types/profile';

export async function getGithubProfile(
  username: string
): Promise<GithubProfile> {
  const res = await fetch(`https://api.github.com/users/${username}`, {
    cache: 'no-store'
  });
  if (!res.ok) throw new Error('User not founded.');
  return await res.json();
}

export async function getNumberOfRepos(username: string): Promise<number> {
  const profile = await getGithubProfile(username);
  return profile.public_repos;
}

export async function getUserRepos(username: string, page: number) {
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&page=${page}`,
    { cache: 'no-store' }
  );
  return await res.json();
}

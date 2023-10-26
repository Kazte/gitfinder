import Image from 'next/image';
import { GithubProfile } from '~/types/profile';
import { formatDate } from '~/utilities/date.utilities';
import LocationIcon from './icons/LocationIcon';
import TwitterIcon from './icons/TwitterIcon';
import BlogIcon from './icons/BlogIcon';
import CompanyIcon from './icons/CompanyIcon';

interface Props {
  profile: GithubProfile;
}

export default function ProfileCard({ profile }: Props) {
  return (
    <section className='bg-indigo-900 rounded-md flex flex-col overflow-hidden gap-4 px-4 py-6 flex-none'>
      <header className='flex flex-row justify-start gap-6 items-start mx-auto w-full'>
        <Image
          src={profile.avatar_url}
          alt='Avatar image'
          width={100}
          height={100}
          className='rounded-full'
        />
        <div className='flex-grow flex flex-col'>
          <h2 className='text-3xl font-semibold'>{profile.name}</h2>
          <a href={profile.html_url} target='_blank' className='text-blue-200'>
            @{profile.login}
          </a>
          <em className='text-sm'>
            Joined {formatDate(new Date(profile.created_at))}
          </em>
        </div>
      </header>
      <main className='flex flex-col gap-4 w-[90%] mx-auto'>
        <p>{profile.bio ?? 'No bio yet.'}</p>
        <div className='bg-indigo-950 p-4 rounded-md flex flex-row gap-2 justify-around items-center'>
          <div className='flex flex-col'>
            <h4>Repos</h4>
            <strong className='text-xl'>{profile.public_repos}</strong>
          </div>
          <div className='flex flex-col'>
            <h4>Followers</h4>
            <strong className='text-xl'>{profile.followers}</strong>
          </div>
          <div className='flex flex-col'>
            <h4>Following</h4>
            <strong className='text-xl'>{profile.following}</strong>
          </div>
        </div>
      </main>
      <footer className='grid md:grid-cols-2 place-items-start grid-cols-1 gap-2 w-[90%] mx-auto'>
        <div className='flex items-center gap-2 justify-center'>
          <LocationIcon width={20} />
          {profile.location ? (
            <p>{profile.location}</p>
          ) : (
            <p className='text-gray-400'>Not Available</p>
          )}
        </div>
        <div className='flex items-center gap-2 justify-center'>
          <TwitterIcon width={20} />
          {profile.twitter_username ? (
            <a
              href={`https://twitter.com/${profile.twitter_username}`}
              target='_blank'
            >
              {profile.twitter_username}
            </a>
          ) : (
            <p className='text-gray-400'>Not Available</p>
          )}
        </div>
        <div className='flex items-center gap-2 justify-center'>
          <BlogIcon width={20} />
          {profile.blog ? (
            <a href={profile.blog} target='_blank'>
              {profile.blog}
            </a>
          ) : (
            <p className='text-gray-400'>Not Available</p>
          )}
        </div>
        <div className='flex items-center gap-2 justify-center'>
          <CompanyIcon width={20} />
          {profile.company ? (
            <a
              href={`https://github.com/${profile.company.replace('@', '')}`}
              target='_blank'
            >
              {profile.company}
            </a>
          ) : (
            <p className='text-gray-400'>Not Available</p>
          )}
        </div>
      </footer>
    </section>
  );
}

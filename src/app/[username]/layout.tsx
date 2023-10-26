import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import ProfileCard from '~/components/ProfileCard';
import { GithubProfile } from '~/types/profile';

export default async function UserPage({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

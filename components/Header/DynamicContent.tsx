import Link from 'next/link';
import { Button } from '@/components/ui/Button';

import { currentUser, auth } from '@clerk/nextjs';
import ActionDropdown from './ActionDropdown';

type Props = {};

async function DynamicContent({}: Props) {
  const user = await currentUser();

  if (user) return <ActionDropdown username={user.username} />;
  return (
    <>
      <Button asChild size={'lg'}>
        <Link href={'/login'}>Login</Link>
      </Button>
      <Button variant={'outline'} asChild size={'lg'}>
        <Link href={'/signup'}>Signup</Link>
      </Button>
    </>
  );
}

export default DynamicContent;

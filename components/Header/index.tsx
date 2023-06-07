import Image from 'next/image';
import { ModeToggle } from '../ModeToggle';
import { Suspense } from 'react';
import DynamicContent from './DynamicContent';
import Link from 'next/link';

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="border-b">
      <div className="container mx-auto flex h-20 items-center justify-between p-4 md:p-2 xl:p-5 ">
        <div>
          <Link href={'/'}>
            <Image
              alt="logo"
              width={40}
              height={40}
              src="https://cryptologos.cc/logos/gas-gas-logo.svg"
            />
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <Suspense>
            {/* @ts-expect-error Server Component */}
            <DynamicContent />
          </Suspense>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;

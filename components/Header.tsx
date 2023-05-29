import Image from 'next/image';
import Link from 'next/link';

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="border-b">
      <div className="container mx-auto flex h-20 items-center justify-between p-4 md:p-2 xl:p-5 ">
        <div>
          <Image
            alt="logo"
            width={64}
            height={64}
            src="https://www.svgrepo.com/show/501888/donut.svg"
          />
        </div>
        <div>
          <div className="flex gap-6">
            <Link
              href="/login"
              className="ease inline-block rounded border bg-violet-600 px-12 py-3 text-sm font-medium text-white transition duration-300 hover:bg-violet-800 focus:outline-none focus:ring"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="ease relative inline-block overflow-hidden rounded border border-neutral-200 bg-gray-100  px-12 py-3 text-sm font-medium text-gray-600 transition duration-300 hover:border-violet-600 hover:text-violet-600 focus:outline-none focus:ring active:bg-indigo-500"
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

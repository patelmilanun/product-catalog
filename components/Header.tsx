import Image from 'next/image';

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex h-16 items-center justify-center p-1">
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
          <div className="inline-block rounded border border-violet-600 bg-violet-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring active:text-violet-500">
            Login
          </div>

          <div className="inline-block rounded border border-violet-600 px-12 py-3 text-sm font-medium text-violet-600 hover:bg-violet-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500">
            Signup
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

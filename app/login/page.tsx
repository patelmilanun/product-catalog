import React from 'react';

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="container mx-auto grid min-h-[90vh] place-items-center p-4 md:p-2 xl:p-5">
      <div className="mx-auto w-full sm:max-w-md">
        <h2 className="mb-12 text-center text-5xl font-extrabold">Welcome.</h2>
        <form>
          <div className="mb-4">
            <label className="mb-1 block" htmlFor="email">
              Username
            </label>
            <input
              id="email"
              type="text"
              name="email"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 disabled:bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 disabled:bg-gray-100"
            />
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                className="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm leading-5 text-gray-900"
              >
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm">
              Forgot your password?
            </a>
          </div>
          <div className="mt-6">
            <button className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-violet-600 px-4 py-2 font-semibold capitalize text-white transition hover:bg-violet-800 focus:border-violet-800 focus:outline-none focus:ring focus:ring-violet-200 active:bg-violet-800 disabled:opacity-25">
              Sign In
            </button>
          </div>
          <div className="mt-6 text-center">
            <a href="#" className="underline">
              Sign up for an account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

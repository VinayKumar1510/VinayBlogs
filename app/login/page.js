import React from 'react';

const Page = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center transition-colors duration-500 bg-gradient-to-r from-purple-900 via-pink-900 to-red-900 p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="relative z-10 bg-white dark:bg-gray-900 p-8 sm:p-12 md:p-16 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-2xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-gray-900 dark:text-gray-100 text-center">Login to VinayBlog</h2>
        <form className="space-y-6 sm:space-y-8">
          <div>
            <label htmlFor="email" className="block text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300">Email address</label>
            <input type="email" id="email" className="mt-2 block w-full px-3 py-2 sm:px-4 sm:py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-base sm:text-lg" />
          </div>
          <div>
            <label htmlFor="password" className="block text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300">Password</label>
            <input type="password" id="password" className="mt-2 block w-full px-3 py-2 sm:px-4 sm:py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-base sm:text-lg" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember_me" type="checkbox" className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
              <label htmlFor="remember_me" className="ml-2 sm:ml-3 block text-base sm:text-lg text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <div className="text-base sm:text-lg">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">Forgot your password?</a>
            </div>
          </div>
          <div>
            <button type="submit" className="w-full flex justify-center py-2 sm:py-3 px-4 sm:px-5 border border-transparent rounded-md shadow-sm text-base sm:text-lg font-medium text-white bg-indigo-900 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300">Sign in</button>
          </div>
          <div>
            <button type="button" className="w-full flex justify-center py-2 sm:py-3 px-4 sm:px-5 border border-transparent rounded-md shadow-sm text-base sm:text-lg font-medium text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-300 mt-4 sm:mt-6">Continue with GitHub</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
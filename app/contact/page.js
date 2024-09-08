"use client"
import { useState } from 'react';

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="flex flex-col md:flex-row w-full md:w-3/4">
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-lg transition-all duration-300 hover:shadow-[1px_0px_56px_8px_#d53f8c] hover:scale-110">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg dark:bg-blue-700"
              >
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-lg hover:scale-110 transition-all duration-300 hover:shadow-[1px_0px_35px_18px_#22543d]">
            <h2 className="text-2xl font-bold mb-4">About This Blog</h2>
            <p className="mb-4">
              Welcome to our programming blog! Here, we share insights, tutorials, and tips on various programming languages and technologies. Whether you're a beginner or an experienced developer, you'll find valuable content to help you on your coding journey.
            </p>
            <p className="mb-4">
              Stay tuned for regular updates and feel free to reach out to us through the contact form if you have any questions or suggestions. Happy coding!
            </p>
            <p className="mb-4">
              Our blog covers a wide range of topics including web development, mobile app development, data science, machine learning, and more. We aim to provide high-quality, practical content that you can apply directly to your projects.
            </p>
            <p className="mb-4">
              In addition to tutorials and tips, we also feature interviews with industry experts, reviews of the latest tools and technologies, and case studies of real-world projects. Our goal is to create a comprehensive resource for developers of all levels.
            </p>
            <p>
              Thank you for visiting our blog. We hope you find our content helpful and inspiring. Don't forget to subscribe to our newsletter to stay updated with the latest posts and news.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
"use client"
import { Button } from "@/components/ui/button";
import Typed from 'typed.js';
import React, {useRef, useEffect} from "react";
import Link from "next/link";

export default function Home() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Coding", "Web Development", "Cybersecurity", "Data Analytics", "Software Engg."],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <main>
      <section className="continer px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">free repository</span> for community <br className="hidden lg:block" />components using <span className="font-semibold underline decoration-primary">  <span ref={el} /></span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source Tailwind UI components and templates to <br className="hidden lg:block" /> bootstrap your new apps, projects or landing sites!
          </p>
          <div className="mt-6 bg-transparent lg:w-2/3 focus-within:border-primary justify-center">
            <button type="button" className="text-white text-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-semibold rounded-lg px-5 py-2.5 text-center me-2 mb-2"><Link href="/about">Explore My Page</Link></button>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" />
        </div>
      </section>

      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 mx-auto ">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">Pricing Plans</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Choose the plan theat suits you best</p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Basic plans */}
            <div className="w-full max-w-sm p-6 m-4 bg-gray-500 dark:bg-gray-900 rounded-xl shadow-lg text-center hover:scale-110 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 ">Basic</h3>
              <p className="mt-4 text-gray-500 dark:text-gray-300">$10/month</p>
              <ul className="mt-6 mb-6 space-y-4">
                <li className="text-white dark:text-gray-400">10GB Storage</li>
                <li className="text-white dark:text-gray-400">Basic Support</li>
                <li className="text-white dark:text-gray-400">Single User</li>
                <li className="text-white dark:text-gray-400">Community Access</li>
                <li className="text-white dark:text-gray-400">Weekly Updates</li>
              </ul>
              <button className="w-[50%] px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline focus:bg-blue-500">Choose Plan</button>
            </div>
            {/* Standard plan */}
            <div className="w-full max-w-sm p-6 m-4 bg-gray-500 dark:bg-gray-900 rounded-xl text-center hover:scale-110 transition-all duration-300 border border-purple-400 shadow-[0px_0px_38px_10px_#44337a]">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Standard</h3>
              <p className="mt-4 text-gray-500 dark:text-gray-300">$20/month</p>
              <ul className="mt-6 mb-6 space-y-4">
                <li className="text-white dark:text-gray-400">50GB Storage</li>
                <li className="text-white dark:text-gray-400">Priority Support</li>
                <li className="text-white dark:text-gray-400">Up to 5 User</li>
                <li className="text-white dark:text-gray-400">Community Access</li>
                <li className="text-white dark:text-gray-400">Daily Updates</li>
              </ul>
              <button className="w-[50%] px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline focus:bg-blue-500">Choose Plan</button>
            </div>
            {/* Premium plan */}
            <div className="w-full max-w-sm p-6 m-4 bg-gray-500 dark:bg-gray-900 rounded-xl shadow-lg text-center hover:scale-110 transition-all duration-300 ">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Premium</h3>
              <p className="mt-4 text-gray-500 dark:text-gray-300">$40/month</p>
              <ul className="mt-6 mb-6 space-y-4">
                <li className="text-white dark:text-gray-400">200GB Storage</li>
                <li className="text-white dark:text-gray-400">24/7 Support</li>
                <li className="text-white dark:text-gray-400">Unlimited User</li>
                <li className="text-white dark:text-gray-400">Community Access</li>
                <li className="text-white dark:text-gray-400">Real-time Updates</li>
              </ul>
              <button className="w-[50%] px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline focus:bg-blue-500">Choose Plan</button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-400 dark:bg-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8 dark:text-white">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-200 dark:bg-gray-600 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <p className="text-gray-600 mb-4 dark:text-white">"This company provided excellent service and I couldn't be happier with the results!"</p>
              <div className="flex items-center">
                <img className="w-12 h-12 rounded-full mr-4" src="client1.jpg" alt="" />
                <div>
                  <p className="text-gray-900 font-bold">John Doe</p>
                  <p className="text-gray-600 dark:text-stone-200">CEO, Company A</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 dark:bg-gray-600 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <p className="text-gray-600 mb-4 dark:text-white">"Their attention to detail and customer service is top-notch."</p>
              <div className="flex items-center">
                <img className="w-12 h-12 rounded-full mr-4" src="client2.jpg" alt="" />
                <div>
                  <p className="text-gray-900 font-bold">Jane Smith</p>
                  <p className="text-gray-600 dark:text-stone-200">Marketing Director, Company B</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 dark:bg-gray-600 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <p className="text-gray-600 mb-4 dark:text-white">"I highly recommend them for their professionalism and quality work."</p>
              <div className="flex items-center">
                <img className="w-12 h-12 rounded-full mr-4" src="client3.jpg" alt="" />
                <div>
                  <p className="text-gray-900 font-bold">Michael Johnson</p>
                  <p className="text-gray-600 dark:text-stone-200">CTO, Company C</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-200 text-center mb-8">Top Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-500 dark:bg-gray-400 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 animate-fadeIn ">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Blog Title 1</h3>
              <p className="text-white dark:text-gray-600 mb-4">A brief description of the blog post goes here. It should be engaging and informative.</p>
              <a href="#" className="dark:text-indigo-600 hover:text-indigo-900">Read More</a>
            </div>
            <div className="bg-gray-500 dark:bg-gray-400 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 animate-fadeIn delay-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Blog Title 2</h3>
              <p className="text-white dark:text-gray-600 mb-4">A brief description of the blog post goes here. It should be engaging and informative.</p>
              <a href="#" className="dark:text-indigo-600 hover:text-indigo-900">Read More</a>
            </div>
            <div className="bg-gray-500 dark:bg-gray-400 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 animate-fadeIn delay-400">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Blog Title 3</h3>
              <p className="text-white dark:text-gray-600 mb-4">A brief description of the blog post goes here. It should be engaging and informative.</p>
              <a href="#" className="dark:text-indigo-600 hover:text-indigo-900">Read More</a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

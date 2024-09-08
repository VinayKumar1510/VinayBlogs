"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const AboutHero = () => {
  return (
    <section className="about-hero">
      {/* Hero Section */}
      <div className="hero-section bg-background/50 p-6 md:p-12 lg:p-24 text-center">
        <div className="flex justify-center">
          <img className='w-[80%] sm:w-[60%] md:w-[40%] lg:w-[30%]' src='/me.jpeg' alt='' />
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">About VinayBlog</h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-600 mx-auto w-full md:w-3/4 lg:w-1/2">
          Welcome to VinayBlog, Hey I am a web developer and also learning Cybersecurity. I made many projects in web development and also done 2 Internships in web development.
        </p>
      </div>

      {/* Showcase Section */}
      <div className="showcase-section p-4 md:p-8 lg:p-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* Project 1 */}
          <motion.div
            className="project-card dark:bg-gray-900 p-4 md:p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/project1.png"
              alt="Project 1"
              width={500}
              height={300}
              className="rounded-lg mb-4 w-full"
            />
            <h3 className="text-xl md:text-2xl font-bold mb-2">No-Poverty Website</h3>
            <p className="text-gray-600">
              A brief description of poverty situation in all over the world and methods how we can solve the problem of poverty.
            </p>
            <Link className='text-blue-500' href="https://no-poverty-weoqhc96b-vinay-kumars-projects-a9159126.vercel.app/" target="_blank" rel="noopener noreferrer">Visit No Poverty Project</Link>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            className="project-card dark:bg-gray-900 p-4 md:p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/nmap.png"
              alt="Project 2"
              width={500}
              height={300}
              className="rounded-lg mb-4 w-full"
            />
            <h3 className="text-xl md:text-2xl font-bold mb-2">Cybersecurity Tools</h3>
            <p className="text-gray-600">
              Till now I have made 3 tools of Cybersecurity. Password Bruteforcer, Keylogger, Vmap.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
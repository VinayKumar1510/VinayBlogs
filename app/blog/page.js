import React from 'react';
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link';
import fs from "fs";
import matter from "gray-matter"

const dirContent = fs.readdirSync("content", "utf-8")
const blog = dirContent.map(file=>{
    const fileContent = fs.readFileSync(`content/${file}`, "utf-8")
    const {data} = matter(fileContent)
    return data
})



// const blogs = [
//   {
//     title: "First Blog",
//     description: "This is the first blog description.",
//     slug: "first-blog",
//     date: "2024-0-01",
//     author: "Vinay Kumar",
//     image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//   },
//   {
//     title: "Second Blog",
//     description: "This is the second blog description.",
//     slug: "second-blog",
//     date: "2024-01-02",
//     author: "Dev Rohilla",
//     image: "https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//   },
//   {
//     title: "Second Blog",
//     description: "This is the second blog description.",
//     slug: "second-blog",
//     date: "2024-04-02",
//     author: "Atul Ghalawat",
//     image: "https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//   }
//   // Add more blog objects as needed
// ];

const Blog = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blog.map((blog, index) => (
          <div key={index} className="bg-gray-500 dark:bg-black shadow-lg rounded-lg overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              <p className="text-white mb-4">{blog.description}</p>
              <p className="text-white text-sm mb-2">By {blog.author} on {new Date(blog.date).toLocaleDateString()}</p>
         
          <Link  href={`/blogpost/${blog.slug}`}  className={buttonVariants({ variant: "outline" })}>Click here</Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
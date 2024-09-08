import fs from "fs"
import matter from "gray-matter"
import { notFound } from "next/navigation"
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers'

export default async function Page({ params }) {

    // const blog = {
    //     title: "Making website using AI",
    //     author: "Vinay Kumar", // Replace with the actual author's name
    //     description: "This is the first website which I make by using AI.", // Replace with the actual description
    //     date: "2024-09-07", // Replace with the actual date
    //     content: "<p>This is the content of the blog post. It can include HTML tags.</p>" // Replace with the actual content
    // };    

    const filepath = `content/${params.slug}.md`

    if (!fs.existsSync(filepath)) {
        notFound()
        return
    }

    const fileContent = fs.readFileSync(filepath, "utf-8")
    const { content, data } = matter(fileContent)

    const processor = unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeDocument, { title: '👋🌍' })
        .use(rehypeFormat)
        .use(rehypeStringify)
        .use(rehypePrettyCode, {
            theme: "github-dark",
            transformers: [
                transformerCopyButton({
                    visibility: 'always',
                    feedbackDuration: 3_000,
                }),
            ],
        })

    const htmlContent = (await processor.process(content)).toString()

    return (
        <div className="max-w-5xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
            <p className="dark:text-gray-300 mb-2 border-l-4 border-gray-500 pl-4 italic">{data.description}</p>
            <div className="flex gap-2">
                <p className="text-sm text-gray-500 mb-4 italic">By {data.author}</p>
                <p className="text-sm text-gray-500 mb-4">{data.date}</p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="prose dark:prose-invert"></div>
        </div>
    )
}
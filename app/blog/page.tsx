import { BlogPosts } from 'app/components/posts'
import {getBlogPosts} from "./utils";

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  const blogCount = getBlogPosts().length
  return (
    <section>
      <h1 className="font-semibold text-4xl mt-6 mb-8 tracking-tighter">All Articles</h1>
      {blogCount > 0 ? <BlogPosts/> : <p className="mb-4">There's nothing here yet.</p>}
    </section>
  )
}

import Link from 'next/link';
import { getContentWithHtml, getAllContentIds } from '@/utils/markdown';
import { Container } from '@/components/Container';
import { IoArrowBack } from 'react-icons/io5';
import { formatDate } from '@/utils/date';
import Claps from "@/components/claps";
import Image from 'next/image';
// Ensures paths are returned in the correct structure
export async function generateStaticParams() {
  const paths = getAllContentIds('posts');
  // Return a simpler format: array of objects with just the id
  return paths.map(path => ({
    id: path.params.id
  }));
}

type Params = Promise<{ id: string }>
// Main page component
export default async function PostPage(props: { params: Params }) {
  const params = await props.params;
  if (!params?.id) {
    throw new Error('Post ID is required.');
  }

  const post = await getContentWithHtml('posts', params.id);

  return (
    <>
      <Container>
        <div className="py-4 sm:py-8">
          <Link
            href="/"
            className="inline-flex items-center text-xs sm:text-sm text-slate-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group mb-4 sm:mb-8"
          >
            <IoArrowBack className="h-4 w-4 sm:h-5 sm:w-5 mr-2 transition-transform group-hover:-translate-x-1" />
            Tüm Yazılar
          </Link>

          <article className="bg-white/50 backdrop-blur-sm dark:bg-gray-800/50 rounded-lg shadow-sm p-4 sm:p-8">
            <header className="mb-4 sm:mb-8">
              <div className="flex items-center text-xs sm:text-sm text-slate-600 dark:text-gray-400">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                {post.category && (
                  <>
                    <span className="mx-2">•</span>
                    <span>{post.category}</span>
                  </>
                )}
              </div>
              {post.coverImage && (
                <div className="image mt-4">
                  <Image src={post.coverImage} alt={post.title} className="rounded-sm w-full" width={1000} height={1000} />
                </div>
              )}
            </header>

            <div
              className="prose prose-sm sm:prose lg:prose-lg dark:prose-invert max-w-none 
              prose-headings:scroll-mt-20
              prose-h1:text-xl sm:prose-h1:text-2xl lg:prose-h1:text-3xl
              prose-h2:text-lg sm:prose-h2:text-xl lg:prose-h2:text-2xl
              prose-h3:text-base sm:prose-h3:text-lg lg:prose-h3:text-xl
              prose-p:text-base sm:prose-p:text-base lg:prose-p:text-base
              prose-li:text-base sm:prose-li:text-base lg:prose-li:text-base
              prose-code:text-xs sm:prose-code:text-sm lg:prose-code:text-base
              prose-pre:text-xs sm:prose-pre:text-sm lg:prose-pre:text-base
              prose-img:rounded-lg
              prose-a:text-emerald-600 dark:prose-a:text-emerald-400
              prose-a:no-underline hover:prose-a:text-emerald-700 dark:hover:prose-a:text-emerald-300"
              dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
            />
          </article>
        </div>
        <Claps key={params.id} />
      </Container>
    </>
  );
}

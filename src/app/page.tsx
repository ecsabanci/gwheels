import { getAllContent } from '@/utils/markdown';
import { Container } from '@/components/Container';
import { BlogList } from '@/components/BlogList';

export default function Home() {
  const posts = getAllContent('posts');

  return (
    <Container>
      <div className="py-6 sm:py-12">
        <BlogList posts={posts} />
      </div>
    </Container>
  );
}

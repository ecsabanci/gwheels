'use client';

import { useState } from 'react';
import { PostCard } from '@/components/PostCard';
import type { ContentData } from '@/utils/markdown';
import { Slider, type SlideItem } from '@/components/Slider';

interface BlogListProps {
    posts: ContentData[];
}

const POSTS_PER_PAGE = 6;
const DEFAULT_COVER_IMAGE = '/images/default-cover.jpg';

export function BlogList({ posts }: BlogListProps) {
    const [visiblePosts, setVisiblePosts] = useState(POSTS_PER_PAGE);

    // Yazıları tarihe göre sırala
    const orderedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // Son 3 yazıyı slider için hazırla
    const latestPosts: SlideItem[] = orderedPosts.slice(0, 3).map((post, index) => ({
        id: index,
        title: post.title,
        image: post.coverImage || DEFAULT_COVER_IMAGE,
        description: post.excerpt,
        link: `/posts/${post.id}`
    }));

    // Slider'da gösterilen haberler hariç diğer haberleri göster
    const remainingPosts = orderedPosts.slice(3);
    const currentPosts = remainingPosts.slice(0, visiblePosts);

    // Daha fazla yazı yükle
    const loadMore = () => {
        setVisiblePosts(prev => Math.min(prev + POSTS_PER_PAGE, remainingPosts.length));
    };

    return (
        <>
            {/* Slider Section */}
            {latestPosts.length > 0 && (
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                        Son Haberler
                    </h2>
                    <Slider
                        items={latestPosts}
                        showDots={true}
                        showArrows={true}
                        showTitle={true}
                        className="mb-8"
                    />
                </div>
            )}

            {/* Blog Grid */}
            <div className="mb-6 sm:mb-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {currentPosts.map((post) => (
                    <PostCard key={post.id} post={post} type="posts" />
                ))}
            </div>

            {/* Load More Button */}
            {visiblePosts < remainingPosts.length && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={loadMore}
                        className="px-6 py-3 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors"
                    >
                        Devamını Gör
                    </button>
                </div>
            )}
        </>
    );
} 
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'src/content');

export interface ContentData {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  contentHtml?: string;
  category?: string;
  coverImage?: string;
}

export type ContentType = 'posts' | 'projects';

export function getAllContentIds(type: ContentType) {
  const typeDirectory = path.join(contentDirectory, type);
  const fileNames = fs.readdirSync(typeDirectory);
  
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export function getContentData(type: ContentType, id: string): ContentData {
  const fullPath = path.join(contentDirectory, type, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  return {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    excerpt: matterResult.data.excerpt || '',
    content: matterResult.content,
    category: matterResult.data.category || '',
    coverImage: matterResult.data.coverImage || '',
  };
}

export async function getContentWithHtml(type: ContentType, id: string): Promise<ContentData> {
  const fullPath = path.join(contentDirectory, type, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    excerpt: matterResult.data.excerpt || '',
    content: matterResult.content,
    contentHtml,
    category: matterResult.data.category || '',
    coverImage: matterResult.data.coverImage || '',
  };
}

export function getAllContent(type: ContentType): ContentData[] {
  const typeDirectory = path.join(contentDirectory, type);
  const fileNames = fs.readdirSync(typeDirectory);
  
  const allContent = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    return getContentData(type, id);
  });

  return allContent.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Helper function to check if a directory exists
export function contentTypeExists(type: ContentType): boolean {
  const typeDirectory = path.join(contentDirectory, type);
  return fs.existsSync(typeDirectory);
}
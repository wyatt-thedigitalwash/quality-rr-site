import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  updatedDate?: string;
  author: string;
  featuredImage: string;
  featuredImageAlt: string;
  category: string;
  excerpt: string;
  readingTime: number;
  internalLinks?: string[];
}

export interface Post extends PostMeta {
  content: string;
}

export function calculateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(BLOG_DIR, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      title: data.title || "",
      description: data.description || "",
      date: data.date || "",
      updatedDate: data.updatedDate,
      author: data.author || "Quality Restoration & Renovations",
      featuredImage: data.featuredImage || "",
      featuredImageAlt: data.featuredImageAlt || "",
      category: data.category || "",
      excerpt: data.excerpt || "",
      readingTime: data.readingTime || calculateReadingTime(content),
      internalLinks: data.internalLinks,
    } as PostMeta;
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title || "",
    description: data.description || "",
    date: data.date || "",
    updatedDate: data.updatedDate,
    author: data.author || "Quality Restoration & Renovations",
    featuredImage: data.featuredImage || "",
    featuredImageAlt: data.featuredImageAlt || "",
    category: data.category || "",
    excerpt: data.excerpt || "",
    readingTime: data.readingTime || calculateReadingTime(content),
    internalLinks: data.internalLinks,
    content,
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

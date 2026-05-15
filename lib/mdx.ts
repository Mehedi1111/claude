import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentRoot = path.join(process.cwd(), "content");

export type PostType = "blog" | "case-studies";

export interface BlogFrontmatter {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  author: { name: string; role: string };
  tags: string[];
  related?: string[];
  seo?: { title?: string; description?: string };
}

export interface CaseStudyFrontmatter {
  title: string;
  client: string;
  category: string;
  year: string;
  service: string;
  coverImage: string;
  image: string;
  tags: string[];
  challenge: string;
  solution: string;
  outcomes: string[];
}

export interface Post<T = BlogFrontmatter | CaseStudyFrontmatter> {
  slug: string;
  frontmatter: T;
  content: string;
  readTime: string;
}

function calcReadTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 220));
  return `${minutes} min read`;
}

export function getSlugs(type: PostType): string[] {
  const dir = path.join(contentRoot, type);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getPost<T = BlogFrontmatter | CaseStudyFrontmatter>(
  type: PostType,
  slug: string
): Post<T> | null {
  const filePath = path.join(contentRoot, type, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    frontmatter: data as T,
    content,
    readTime: calcReadTime(content),
  };
}

export function getAllPosts<T = BlogFrontmatter>(type: PostType): Post<T>[] {
  return getSlugs(type)
    .map((slug) => getPost<T>(type, slug))
    .filter(Boolean)
    .sort((a, b) => {
      const da = (a!.frontmatter as BlogFrontmatter).date ?? "";
      const db = (b!.frontmatter as BlogFrontmatter).date ?? "";
      return db.localeCompare(da);
    }) as Post<T>[];
}

export interface Heading {
  level: number;
  text: string;
  id: string;
}

export function extractHeadings(content: string): Heading[] {
  const headings: Heading[] = [];
  const regex = /^(#{2,3})\s+(.+)$/gm;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].replace(/[*_`~]/g, "").trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
    headings.push({ level, text, id });
  }
  return headings;
}

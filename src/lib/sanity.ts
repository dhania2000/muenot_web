import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

// Define SanityImageSource type locally (avoids version-specific import issues)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SanityImageSource = any;

// Sanity Client Configuration
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false, // Set to false for instant updates (no caching delay)
});

// Image URL Builder
const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Types
export interface SanityPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  content: SanityBlock[];
  coverImage: SanityImageSource;
  tags: string[];
  author: {
    name: string;
    role: string;
    image?: SanityImageSource;
  };
  publishedAt: string;
  readTime: number;
  featured: boolean;
}

export interface SanityBlock {
  _type: string;
  _key: string;
  style?: string;
  children?: {
    _type: string;
    text: string;
    marks?: string[];
  }[];
  markDefs?: {
    _type: string;
    _key: string;
    href?: string;
  }[];
  listItem?: string;
  level?: number;
}

// Check if Sanity is configured
export function isSanityConfigured(): boolean {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  return !!(projectId && projectId !== "");
}

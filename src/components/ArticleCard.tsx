import { Article } from '@/lib/content';
import Link from 'next/link';

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/article/${article.slug}`}>
      <div className="border border-gray-200 rounded-lg p-5 hover:bg-gray-50 cursor-pointer transition all">
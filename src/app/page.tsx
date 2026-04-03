import { ArticleCard } from '@/components/ArticleCard';
import { getFeaturedArticles } from '@/lib/content';

export default async function Home() {
  const articles = getFeaturedArticles();
  return (
    <div className="py-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">The Capital Brief</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import type { Article } from '@/lib/mock-articles'

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/research/${article.slug}`}
      className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
    >
      <div className="mb-3 flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="text-xs font-normal"
          >
            {tag}
          </Badge>
        ))}
      </div>
      <h3 className="mb-2 font-serif text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
        {article.title}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        {article.excerpt}
      </p>
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>{article.author}</span>
        <span>
          {new Date(article.date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </span>
      </div>
    </Link>
  )
}

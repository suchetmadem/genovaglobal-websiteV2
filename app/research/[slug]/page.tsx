import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, Share2, Twitter, Linkedin } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArticleCard } from '@/components/article-card'
import {
  articles,
  getArticleBySlug,
  getRelatedArticles,
} from '@/lib/mock-articles'

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return { title: 'Article Not Found' }
  return {
    title: article.title,
    description: article.excerpt,
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const related = getRelatedArticles(article.slug, article.tags)

  const toc = article.content.map((_, i) => ({
    id: `section-${i}`,
    label: i === 0 ? 'Introduction' : `Section ${i + 1}`,
  }))

  return (
    <>
      {/* Article Header */}
      <section className="border-b border-border bg-secondary/30 py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-6">
          <Button asChild variant="ghost" size="sm" className="mb-6 gap-1 text-muted-foreground">
            <Link href="/research">
              <ArrowLeft className="h-4 w-4" />
              Back to Research
            </Link>
          </Button>

          <div className="mb-4 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
            {article.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{article.author}</span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {new Date(article.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {article.readingTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex gap-12">
            {/* Sidebar TOC */}
            <aside className="hidden w-56 shrink-0 lg:block">
              <div className="sticky top-24">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Table of Contents
                </p>
                <nav className="flex flex-col gap-2">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                {/* Share buttons */}
                <div className="mt-8 border-t border-border pt-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Share
                  </p>
                  <div className="flex gap-2">
                    <button
                      className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground"
                      aria-label="Share on Twitter"
                    >
                      <Twitter className="h-4 w-4" />
                    </button>
                    <button
                      className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
                    </button>
                    <button
                      className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground"
                      aria-label="Copy link"
                    >
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <article className="min-w-0 max-w-3xl flex-1">
              <div className="prose-custom">
                {article.content.map((paragraph, i) => (
                  <div key={i} id={`section-${i}`}>
                    {i > 0 && (
                      <h2 className="mb-4 mt-10 font-serif text-2xl font-semibold text-foreground">
                        {i === 1
                          ? 'Methodology'
                          : i === 2
                            ? 'Results'
                            : i === 3
                              ? 'Discussion'
                              : `Section ${i + 1}`}
                      </h2>
                    )}
                    <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                      {paragraph}
                    </p>
                    {i === 1 && (
                      <figure className="my-8 overflow-hidden rounded-xl border border-border bg-secondary/50 p-8">
                        <div className="flex h-40 items-center justify-center text-sm text-muted-foreground">
                          Figure {i}: Methodology diagram placeholder
                        </div>
                        <figcaption className="mt-3 text-center text-xs text-muted-foreground">
                          Fig. {i} - Visual representation of the research methodology
                        </figcaption>
                      </figure>
                    )}
                  </div>
                ))}

                {/* Blockquote */}
                <blockquote className="my-8 border-l-4 border-primary pl-6">
                  <p className="font-serif text-lg italic text-foreground">
                    {`"This research demonstrates the extraordinary potential of
                    young scientists to contribute meaningfully to global
                    challenges."`}
                  </p>
                  <cite className="mt-2 block text-sm text-muted-foreground">
                    - Peer Review Committee
                  </cite>
                </blockquote>
              </div>

              {/* Mobile share */}
              <div className="mt-10 flex items-center gap-4 border-t border-border pt-6 lg:hidden">
                <span className="text-sm font-medium text-foreground">Share:</span>
                <div className="flex gap-2">
                  <button
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground"
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="h-4 w-4" />
                  </button>
                  <button
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </button>
                  <button
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground"
                    aria-label="Copy link"
                  >
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="border-t border-border bg-secondary/30 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-8 font-serif text-2xl font-bold text-foreground">
              Related Articles
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

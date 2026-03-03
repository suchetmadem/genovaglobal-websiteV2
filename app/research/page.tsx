import type { Metadata } from 'next'
import { ResearchList } from './research-list'

export const metadata: Metadata = {
  title: 'Research',
  description:
    'Browse peer-reviewed research articles written by young scientists from around the world.',
}

export default function ResearchPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/30 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Research Library
          </p>
          <h1 className="mt-2 font-serif text-4xl font-bold text-foreground md:text-5xl">
            Explore Articles
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Discover peer-reviewed research written by young scientists tackling
            the world's biggest challenges across AI, biology, engineering, and
            more.
          </p>
        </div>
      </section>
      <ResearchList />
    </>
  )
}

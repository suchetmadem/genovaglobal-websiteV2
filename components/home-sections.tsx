'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  BookOpen,
  Lightbulb,
  Users,
  Globe,
  ArrowRight,
  FileText,
  Hammer,
  PenLine,
  Send,
} from 'lucide-react'
import { ArticleCard } from '@/components/article-card'
import { SearchBar } from '@/components/search-bar'
import { TagPills } from '@/components/tag-pills'
import { Button } from '@/components/ui/button'
import { getFeaturedArticles, tags } from '@/lib/mock-articles'

export function FeaturedResearch() {
  const [search, setSearch] = useState('')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const featured = getFeaturedArticles()

  const filtered = featured.filter((a) => {
    const matchSearch =
      search === '' ||
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.author.toLowerCase().includes(search.toLowerCase())
    const matchTag = !selectedTag || a.tags.includes(selectedTag)
    return matchSearch && matchTag
  })

  return (
    <section className="bg-secondary/50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Latest Research
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Featured Articles
            </h2>
          </div>
          <Button asChild variant="ghost" className="gap-1 self-start text-primary">
            <Link href="/research">
              View all articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="w-full max-w-sm">
            <SearchBar value={search} onChange={setSearch} />
          </div>
          <TagPills tags={tags} selected={selectedTag} onSelect={setSelectedTag} />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-12 text-center text-muted-foreground">
            No articles found matching your criteria.
          </p>
        )}
      </div>
    </section>
  )
}

const whatWeDoCards = [
  {
    icon: BookOpen,
    title: 'Research Articles',
    description:
      'Publish peer-reviewed research on cutting-edge topics across STEM disciplines.',
  },
  {
    icon: Lightbulb,
    title: 'Real-World Projects',
    description:
      'Tackle hands-on challenges that bridge classroom learning with real-world impact.',
  },
  {
    icon: Users,
    title: 'Mentorship & Community',
    description:
      'Connect with experienced researchers and a global community of young scientists.',
  },
  {
    icon: Globe,
    title: 'Inclusive Outreach',
    description:
      'Making STEM accessible to underrepresented communities worldwide.',
  },
]

export function WhatWeDo() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Our Programs
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
            What We Do
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {whatWeDoCards.map((card) => (
            <div
              key={card.title}
              className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <card.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">{card.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const stats = [
  { value: '200+', label: 'Articles Published' },
  { value: '1,500+', label: 'Students Mentored' },
  { value: '80+', label: 'Workshops Hosted' },
  { value: '35+', label: 'Communities Reached' },
]

export function ImpactStats() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-4xl font-bold text-primary md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const steps = [
  {
    icon: FileText,
    step: '01',
    title: 'Learn',
    description: 'Explore existing research and deepen your understanding of STEM topics.',
  },
  {
    icon: Hammer,
    step: '02',
    title: 'Build',
    description: 'Work on real-world projects with mentors and peers from around the world.',
  },
  {
    icon: PenLine,
    step: '03',
    title: 'Write',
    description: 'Document your findings and craft compelling research papers.',
  },
  {
    icon: Send,
    step: '04',
    title: 'Publish',
    description: 'Submit your work for peer review and share it with a global audience.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            The Process
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
            How It Works
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.step} className="relative text-center">
              <span className="mb-4 inline-block font-serif text-5xl font-bold text-border">
                {step.step}
              </span>
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

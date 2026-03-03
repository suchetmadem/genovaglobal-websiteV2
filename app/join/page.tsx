import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { StudentForm, ArticleSubmitForm } from '@/components/join-forms'

export const metadata: Metadata = {
  title: 'Join',
  description:
    'Join Genova Global as a student researcher, submit an article, or partner with us.',
}

export default function JoinPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/30 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Get Involved
          </p>
          <h1 className="mt-2 font-serif text-4xl font-bold text-foreground md:text-5xl">
            Join Genova Global
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Whether you are a student with a passion for STEM, a researcher with
            work to share, or an organization looking to make a difference —
            there is a place for you here.
          </p>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Join as Student */}
            <div className="rounded-xl border border-border bg-card p-8">
              <h2 className="mb-2 font-serif text-2xl font-bold text-foreground">
                Join as a Student
              </h2>
              <p className="mb-8 text-sm text-muted-foreground">
                Become part of a global community of young researchers and start
                your journey today.
              </p>
              <StudentForm />
            </div>

            {/* Submit Article */}
            <div className="rounded-xl border border-border bg-card p-8">
              <h2 className="mb-2 font-serif text-2xl font-bold text-foreground">
                Submit an Article
              </h2>
              <p className="mb-8 text-sm text-muted-foreground">
                Have original research to share? Submit your work for peer
                review and publication.
              </p>
              <ArticleSubmitForm />
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="border-t border-border bg-secondary/30 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            For Organizations
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Partner with Genova
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Schools, universities, companies, and nonprofits — join us in
            empowering the next generation of scientists and engineers. We offer
            flexible partnership models tailored to your goals.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href="/contact">
                Partner with Genova
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

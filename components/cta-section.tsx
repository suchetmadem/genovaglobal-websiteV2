import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
          Ready to make an impact?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
          Whether you are a student with groundbreaking research or an
          organization looking to support the next generation of scientists, we
          want to hear from you.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            variant="secondary"
          >
            <Link href="/join">Submit Your Research</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <Link href="/join">Become a Partner</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

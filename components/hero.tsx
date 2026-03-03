import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Abstract background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-primary/5" />
        <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-primary/3" />
        <div className="absolute right-1/4 top-1/3 h-3 w-3 rounded-full bg-primary/20" />
        <div className="absolute left-1/3 top-1/4 h-2 w-2 rounded-full bg-primary/15" />
        <div className="absolute bottom-1/4 right-1/3 h-4 w-4 rounded-full bg-primary/10" />
        {/* Grid pattern */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.015]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-36 lg:py-44">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            Youth STEM Research Platform
          </p>
          <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
            <span className="text-balance">Read. Build. Publish.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            A global platform where young researchers publish peer-reviewed
            articles, tackle hands-on STEM projects, and build the skills to
            change the world.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href="/research">
                Explore Research
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/join">Join Genova</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

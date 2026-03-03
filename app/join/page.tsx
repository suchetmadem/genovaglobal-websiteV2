import type { Metadata } from 'next'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ArrowRight, Upload } from 'lucide-react'
import Link from 'next/link'

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
              <form
                className="flex flex-col gap-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="student-name">Full Name</Label>
                    <Input id="student-name" placeholder="Your name" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="student-email">Email</Label>
                    <Input
                      id="student-email"
                      type="email"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="student-age">Age / Grade</Label>
                    <Input id="student-age" placeholder="e.g. 16 / 11th Grade" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="student-interest">Interest Areas</Label>
                    <Select>
                      <SelectTrigger id="student-interest">
                        <SelectValue placeholder="Select area" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ai">AI & Machine Learning</SelectItem>
                        <SelectItem value="biology">Biology</SelectItem>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="math">Mathematics</SelectItem>
                        <SelectItem value="environment">
                          Environmental Science
                        </SelectItem>
                        <SelectItem value="physics">Physics</SelectItem>
                        <SelectItem value="chemistry">Chemistry</SelectItem>
                        <SelectItem value="cs">Computer Science</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button type="submit" className="mt-2 gap-2">
                  Apply to Join
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
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
              <form
                className="flex flex-col gap-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex flex-col gap-2">
                  <Label htmlFor="article-title">Article Title</Label>
                  <Input id="article-title" placeholder="Your article title" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="article-abstract">Abstract</Label>
                  <Textarea
                    id="article-abstract"
                    placeholder="Briefly describe your research and findings..."
                    rows={4}
                  />
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="article-tags">Research Tags</Label>
                    <Select>
                      <SelectTrigger id="article-tags">
                        <SelectValue placeholder="Select tag" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ai">AI</SelectItem>
                        <SelectItem value="biology">Biology</SelectItem>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="math">Math</SelectItem>
                        <SelectItem value="environment">Environment</SelectItem>
                        <SelectItem value="physics">Physics</SelectItem>
                        <SelectItem value="chemistry">Chemistry</SelectItem>
                        <SelectItem value="cs">Computer Science</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label>Upload Paper</Label>
                    <div className="flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-dashed border-input bg-transparent text-sm text-muted-foreground transition-colors hover:border-primary">
                      <Upload className="h-4 w-4" />
                      Choose file
                    </div>
                  </div>
                </div>
                <Button type="submit" className="mt-2 gap-2">
                  Submit for Review
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
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

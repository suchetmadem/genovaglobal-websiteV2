import type { Metadata } from 'next'
import { Target, Eye, Zap } from 'lucide-react'
import { CTASection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Genova Global, our mission to empower youth through STEM education, and our vision for a globally competent workforce.',
}

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/30 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            About Us
          </p>
          <h1 className="mt-2 font-serif text-4xl font-bold text-foreground md:text-5xl">
            About Genova Global
          </h1>
        </div>
      </section>

      {/* Main About */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="prose-custom">
            <p className="text-lg leading-relaxed text-muted-foreground">
              At Genova Global, we believe the next generation of scholars does
              not just need to read about the world — they need to build it.
              Founded on the principle that young people are not merely the
              future of STEM but active contributors to it today, we provide a
              platform where curiosity meets action.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Our platform brings together students, educators, and mentors from
              around the globe to create a community where research is not just
              an academic exercise but a pathway to real-world impact. We
              publish original research by young scientists, facilitate
              hands-on projects, and ensure that every student — regardless of
              background — has the opportunity to participate in the scientific
              process.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, What We Do */}
      <section className="border-t border-border bg-secondary/30 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Mission */}
            <div className="rounded-xl border border-border bg-card p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="mb-4 font-serif text-xl font-bold text-foreground">
                Our Mission
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                To inspire and equip young people with critical thinking,
                creativity, and technical skills through accessible, inclusive,
                hands-on STEM education. We strive to lower barriers to
                participation in scientific research and empower students to
                become leaders in their fields.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-xl border border-border bg-card p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Eye className="h-6 w-6" />
              </div>
              <h2 className="mb-4 font-serif text-xl font-bold text-foreground">
                Our Vision
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                A globally competent workforce of action takers who leverage
                science and technology to develop sustainable solutions for the
                world's most pressing challenges. We envision a future where
                every young person has the tools and support to contribute
                meaningfully to scientific progress.
              </p>
            </div>

            {/* What We Do */}
            <div className="rounded-xl border border-border bg-card p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Zap className="h-6 w-6" />
              </div>
              <h2 className="mb-4 font-serif text-xl font-bold text-foreground">
                What We Do
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We publish peer-reviewed student research, run hands-on STEM
                projects, facilitate global mentorship connections, and lead
                inclusive outreach programs that bring science education to
                underserved communities. Every program is designed to bridge the
                gap between learning and doing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Our Values
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-foreground">
              What Guides Us
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Accessibility',
                text: 'STEM education should be available to everyone, regardless of geography, background, or resources.',
              },
              {
                title: 'Rigor',
                text: 'We hold student work to high standards, fostering excellence through constructive feedback and peer review.',
              },
              {
                title: 'Community',
                text: 'Science thrives in collaboration. We build networks that span borders and disciplines.',
              },
              {
                title: 'Impact',
                text: 'Every project, article, and workshop should move the needle on real-world challenges.',
              },
            ].map((val) => (
              <div key={val.title} className="text-center">
                <h3 className="mb-2 font-semibold text-foreground">{val.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {val.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

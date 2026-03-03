import type { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, Lightbulb, Users, Globe, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CTASection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'Programs',
  description:
    'Explore Genova Global programs: research articles, real-world projects, mentorship, and inclusive outreach.',
}

const programs = [
  {
    icon: BookOpen,
    title: 'Research Articles',
    description:
      'Our research publication program gives young scientists a platform to share their work with the world. Students receive mentorship throughout the writing process and their articles undergo peer review by both student editors and faculty advisors.',
    outcomes: [
      'Peer-reviewed publication on the Genova Global platform',
      'Editorial guidance from experienced researchers',
      'Opportunities for cross-disciplinary collaboration',
      'Portfolio-ready work for college applications',
    ],
    cta: 'Submit Your Research',
    ctaHref: '/join',
  },
  {
    icon: Lightbulb,
    title: 'Real-World Projects',
    description:
      'Our project-based learning initiatives connect students with real-world challenges. Teams work together on semester-long projects that address community needs, environmental issues, or technological innovations, building practical skills alongside academic knowledge.',
    outcomes: [
      'Hands-on experience with real-world problem solving',
      'Teamwork and project management skills',
      'Presentations at regional STEM showcases',
      'Connections with industry professionals',
    ],
    cta: 'Join a Project',
    ctaHref: '/join',
  },
  {
    icon: Users,
    title: 'Mentorship & Community',
    description:
      'Every student at Genova Global is paired with a mentor who guides their journey. Our mentors include graduate students, early-career researchers, and industry professionals who volunteer their time to nurture the next generation of STEM leaders.',
    outcomes: [
      'One-on-one mentorship from experienced researchers',
      'Access to a global network of peers',
      'Regular workshops and skill-building sessions',
      'Career guidance and academic advising',
    ],
    cta: 'Find a Mentor',
    ctaHref: '/join',
  },
  {
    icon: Globe,
    title: 'Inclusive Outreach',
    description:
      'We are committed to making STEM accessible to students from all backgrounds. Our outreach programs partner with schools and community organizations in underserved areas to provide resources, workshops, and pathways into research for students who might otherwise lack access.',
    outcomes: [
      'Free workshops in underserved communities',
      'Scholarship programs for students in need',
      'Translated resources in multiple languages',
      'Partnerships with local schools and organizations',
    ],
    cta: 'Support Outreach',
    ctaHref: '/join',
  },
]

export default function ProgramsPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/30 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Our Programs
          </p>
          <h1 className="mt-2 font-serif text-4xl font-bold text-foreground md:text-5xl">
            How We Empower Young Scientists
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            From publishing research to building community, our programs are
            designed to give students the tools, mentorship, and opportunities
            they need to thrive.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-20">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className={`flex flex-col gap-10 lg:flex-row lg:items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <program.icon className="h-7 w-7" />
                  </div>
                  <h2 className="mb-4 font-serif text-2xl font-bold text-foreground md:text-3xl">
                    {program.title}
                  </h2>
                  <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                    {program.description}
                  </p>
                  <Button asChild className="gap-2">
                    <Link href={program.ctaHref}>
                      {program.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="flex-1">
                  <div className="rounded-xl border border-border bg-card p-8">
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
                      Key Outcomes
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {program.outcomes.map((outcome) => (
                        <li key={outcome} className="flex gap-3 text-sm text-muted-foreground">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

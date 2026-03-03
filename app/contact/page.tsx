import type { Metadata } from 'next'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Mail, MapPin } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Genova Global. Ask questions, provide feedback, or inquire about partnerships.',
}

const faqs = [
  {
    question: 'Who can submit a research article?',
    answer:
      'Any student between the ages of 13 and 22 can submit original research. We welcome submissions from all STEM disciplines. Articles go through a peer review process conducted by student editors and faculty advisors.',
  },
  {
    question: 'What are the submission guidelines?',
    answer:
      'Articles should be between 1,500 and 5,000 words, include an abstract of 150-250 words, proper citations in APA format, and original figures or data where applicable. Full guidelines are provided upon registration.',
  },
  {
    question: 'How does the mentorship program work?',
    answer:
      'Once accepted, students are matched with mentors based on their research interests and goals. Mentors meet with students regularly (typically bi-weekly) to provide guidance on research methodology, writing, and career development.',
  },
  {
    question: 'Is there a cost to join Genova Global?',
    answer:
      'No. Genova Global is completely free for students. We are a nonprofit organization funded through grants, donations, and partnerships. We believe financial barriers should never prevent young people from pursuing scientific research.',
  },
  {
    question: 'How can schools or organizations partner with Genova?',
    answer:
      'We offer several partnership models including hosting workshops, sponsoring student research, providing mentors, and co-developing curriculum. Contact us through the form below or email partnerships@genovaglobal.org to discuss options.',
  },
  {
    question: 'What happens after my article is published?',
    answer:
      'Published articles are permanently hosted on our platform and indexed for discoverability. Authors receive a certificate of publication, can share their work on academic profiles, and may be invited to present at our annual research symposium.',
  },
]

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/30 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Get in Touch
          </p>
          <h1 className="mt-2 font-serif text-4xl font-bold text-foreground md:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Have a question, feedback, or partnership inquiry? We would love to
            hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="mb-6 font-serif text-2xl font-bold text-foreground">
                Send us a message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="mb-6 font-serif text-2xl font-bold text-foreground">
                Other ways to reach us
              </h2>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">
                      hello@genovaglobal.org
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Headquarters
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Remote-first organization
                      <br />
                      Global community
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-secondary/30 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              FAQ
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  )
}

import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const footerLinks = {
  Platform: [
    { href: '/research', label: 'Research' },
    { href: '/programs', label: 'Programs' },
    { href: '/about', label: 'About' },
  ],
  'Get Involved': [
    { href: '/join', label: 'Join as a Student' },
    { href: '/join', label: 'Submit an Article' },
    { href: '/join', label: 'Partner with Us' },
  ],
  Resources: [
    { href: '/contact', label: 'Contact' },
    { href: '/contact', label: 'FAQ' },
    { href: '/contact', label: 'Submission Guidelines' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">G</span>
              </div>
              <span className="text-lg font-semibold tracking-tight text-foreground">
                Genova Global
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Empowering the next generation of scholars to read, build, and
              publish. A youth-focused STEM platform for research, mentorship,
              and inclusive outreach.
            </p>
            {/* Newsletter */}
            <div className="mt-6">
              <p className="mb-2 text-sm font-medium text-foreground">
                Stay updated
              </p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-xs"
                />
                <Button type="submit" size="sm">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-4 text-sm font-semibold tracking-wide text-foreground">
                {title}
              </h3>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            {'2026 Genova Global. All rights reserved.'}
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground"
              aria-label="Twitter"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground"
              aria-label="GitHub"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

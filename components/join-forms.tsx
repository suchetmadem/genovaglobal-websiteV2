'use client'

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

export function StudentForm() {
  return (
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
              <SelectItem value="environment">Environmental Science</SelectItem>
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
  )
}

export function ArticleSubmitForm() {
  return (
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
  )
}

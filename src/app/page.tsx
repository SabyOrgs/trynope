// app/page.tsx
import Link from "next/link";
import { MapPin, Building2, ArrowUpRight } from "lucide-react";

import { ScrambleText } from "@/components/scramble-text";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="flex items-center justify-between mb-12 text-sm">
        <div className="flex space-x-4">
          <Link
            href="/"
            className="hover:text-accent transition-colors duration-200"
          >
            home
          </Link>
        </div>
      </nav>

      <header className="mb-16 space-y-4">
        <h1 className="text-4xl font-bold mb-4 animate-fade-in">
          <span className="inline-block">
            <ScrambleText text="tryNOPE" />
          </span>
        </h1>
        <div className="flex flex-col gap-2 text-gray-400">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            tiruchirappalli, india
          </div>
        </div>
        <p className="leading-relaxed animate-fade-in-up">
          we are a married couple who believe that work can be a shared journey
          that deepens our bond. As we travel with our son, we focus on projects
          that not only bring us closer as a family but also allow us to create
          meaningful contributions together.
        </p>
      </header>

      <section className="mb-16 animate-fade-in-up">
        <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
          <span className="text-accent mr-2">*</span> work
        </h2>
        <div className="space-y-8">
          <WorkItem
            title="cmcrs"
            position="co-founder(sebastin) and cto(nancy)"
            period="jan 2025 - present"
            description="competition management and competitor registration system for shooting competitions"
            url="https://cmcrs.com"
          />
          <WorkItem
            title="shooterlogs"
            position="co-founder(sebastin) and cto(nancy)"
            period="feb 2025 - present"
            description="a comprehensive platform for tracking, analyzing, and improving your shooting skills"
            url="https://shooterlogs.com"
          />
        </div>
      </section>

      <section className="animate-fade-in-up">
        <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
          <span className="text-accent mr-2">*</span> links
        </h2>
        <div className="flex flex-wrap gap-4 text-sm">
          <SocialLink title="email" url="mailto:hey@trynope.com" />
          <SocialLink title="x.com" url="https://x.com/sebastin" />
        </div>
      </section>
    </div>
  );
}

interface WorkItemProps {
  title: string;
  position: string;
  period?: string;
  description: string;
  url: string;
}

function WorkItem({
  title,
  position,
  period,
  description,
  url,
}: WorkItemProps) {
  return (
    <div className="group">
      <Link href={url} target="_blank">
        <h3 className="text-xl font-semibold mb-1 text-white group-hover:text-accent transition-colors duration-200">
          {title}
        </h3>
        <p className="text-sm text-gray-400 mb-2">
          {position} {period && `(${period})`}
        </p>
        <p className="text-gray-300">{description}</p>
      </Link>
    </div>
  );
}

interface ProjectItemProps {
  title: string;
  role: string;
  description: string;
  url: string;
}

function ProjectItem({ title, role, description, url }: ProjectItemProps) {
  return (
    <div className="group">
      <Link href={url} target="_blank">
        <h3 className="text-xl font-semibold mb-1 text-white group-hover:text-accent transition-colors duration-200">
          {title}
        </h3>
        <p className="text-sm text-gray-400 mb-2">{role}</p>
        <p className="text-gray-300">{description}</p>
      </Link>
    </div>
  );
}

interface BlogPostItemProps {
  title: string;
  date: string;
  url: string;
}

function BlogPostItem({ title, date, url }: BlogPostItemProps) {
  return (
    <div className="flex justify-between items-center group">
      <Link
        href={url}
        className="text-gray-200 hover:text-accent transition-colors duration-200"
      >
        {title}
      </Link>
      <span className="text-sm text-gray-400">{date}</span>
    </div>
  );
}

interface SocialLinkProps {
  title: string;
  url: string;
}

function SocialLink({ title, url }: SocialLinkProps) {
  return (
    <Link
      href={url}
      className="text-gray-400 hover:text-accent transition-colors duration-200"
    >
      {title}
    </Link>
  );
}

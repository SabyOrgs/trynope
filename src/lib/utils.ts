import { ClassValue, clsx } from "clsx"
import { Metadata } from "next"
import { env } from "process"
import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_APP_URL}${path}`
}

export function constructMetadata({
  title = "RIV.app - RiverTree AI",
  description = "Transform Your Data into Conversations with RiverTree AI",
  image = "/thumbnail.png",
  icons = "/favicon.ico",
  noIndex = false
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@sebastin"
    },
    icons,
    metadataBase: new URL('https://riv.app'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}
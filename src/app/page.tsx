import { MainNav } from "@/components/main-nav";
import { cn } from "@/lib/utils";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { marketingConfig } from "@/config/marketing";

import Image from "next/image";
import dey from "@/assets/dey.svg";
import shotlead from "@/assets/shotlead.svg";
import tenwhat from "@/assets/tenwhat.svg";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <Link
              href="/"
              className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
              target="_blank"
            >
              Follow along on Twitter
            </Link>
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              Nope is your go-to solution for all things tech and beyond.
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Welcome to Nope, a cutting-edge creative development studio
              dedicated to turning your digital dreams into reality. Founded by
              the dynamic husband-and-wife duo, Caroline Nancy and Sebastin
              Sanjay
            </p>
            <div className="space-x-4">
              <Link
                href="/login"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                Get Started
              </Link>
              <Link
                href=""
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                )}
              >
                GitHub
              </Link>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Featured Projects
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              At Nope, we take pride in the innovative solutions we deliver. Our
              projects span across various industries and technologies,
              showcasing our versatility and expertise. Here are some of the
              standout projects we&apos;ve had the pleasure of working on.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Image src={dey} alt="DEY" width={50} height={50} />
                <div className="space-y-2">
                  <h3 className="font-bold">
                    <Link href="https://dey.app">DEY</Link>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Streamline Your Shooting Competitions with DEY
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Image src={tenwhat} alt="TenWhat" width={50} height={50} />
                <div className="space-y-2">
                  <h3 className="font-bold">
                    <Link href="https://tenwhat.com">TenWhat</Link>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Your Personal Shooting Companion, Score Like a Pro.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Image src={shotlead} alt="ShotLead" width={50} height={50} />
                <div className="space-y-2">
                  <h3 className="font-bold">
                    <Link href="https://shotlead.com">ShotLead</Link>
                  </h3>
                  <p className="text-sm">
                    Monthly Online Shooting Competitions. for the World.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto text-center md:max-w-[58rem]">
            <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Inspired by our work? Contact Nope today to discuss how we can
              help bring your project to life. Whether it&apos;s a web
              application, mobile app, or a complex game, our team is ready to
              tackle any challenge and deliver exceptional results.
            </p>
          </div>
        </section>
        <section id="open-source" className="container py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Get in Touch
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              We&apos;d love to hear from you! Whether you have a question about
              our services, need a quote for your project, or just want to say
              hello, our team is here to help.
              <div className="space-x-4 pt-4">
                <Link
                  href="mailto:sebastin@trynope.com"
                  className={cn(buttonVariants({ size: "lg" }))}
                >
                  @ Us
                </Link>
              </div>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

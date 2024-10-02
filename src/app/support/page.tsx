import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { marketingConfig } from "@/config/marketing";
import { MainNav } from "@/components/main-nav";

export const metadata = {
  title: "Support Us",
};

export default function SupportUsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={marketingConfig.mainNav} />
          <nav></nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="container flex flex-col gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
          <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Reach Out and Support Us
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              We are here to assist you with exceptional developer and user
              support.
            </p>
          </div>
          <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
            <div className="grid gap-6">
              <h3 className="text-xl font-bold sm:text-2xl">Contact Details</h3>
              <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                <li className="flex items-center">
                  <Icons.mail className="mr-2 h-4 w-4" /> Support Email:
                  nancy@trynope.com
                </li>
                <li className="flex items-center">
                  <Icons.mail className="mr-2 h-4 w-4" /> Developer Email:
                  sebastin@trynope.com
                </li>
                <li className="flex items-center">
                  <Icons.phone className="mr-2 h-4 w-4" /> Support Phone:
                  +918695611717
                </li>
                <li className="flex items-center">
                  <Icons.phone className="mr-2 h-4 w-4" /> Developer Phone:
                  +917293172932
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto flex w-full max-w-[58rem] flex-col gap-4">
            <h4 className="text-2xl font-bold">Our Commitment to Support</h4>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              At TryNope, we pride ourselves on providing top-notch support for
              both developers and users. Our dedicated support team, led by
              Nancy, is always ready to address any issues or questions you
              might have. You can reach her via email at{" "}
              <a
                href="mailto:nancy@trynope.com"
                className="text-primary font-bold"
              >
                nancy@trynope.com
              </a>{" "}
              or call her at{" "}
              <a href="tel:+918695611717" className="text-primary font-bold">
                +918695611717
              </a>
              .
            </p>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              For any development-related queries, Sebastin is your go-to
              person. He ensures that all technical aspects are seamless and
              efficient. Feel free to contact him at{" "}
              <a
                href="mailto:sebastin@trynope.com"
                className="text-primary font-bold"
              >
                sebastin@trynope.com
              </a>{" "}
              or call him at{" "}
              <a href="tel:+917293172932" className="text-primary font-bold">
                +917293172932
              </a>
              .
            </p>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              We believe in building a community where support is just a step
              away and your needs are met promptly and effectively. Thank you
              for your support!
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

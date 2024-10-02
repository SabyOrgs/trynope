import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { marketingConfig } from "@/config/marketing";
import { MainNav } from "@/components/main-nav";

export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
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
            <h1
              id="privacy-policy"
              className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
            >
              Privacy policy
            </h1>
            <p>
              <em>Last updated: Feb 01, 2024</em>
            </p>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              The privacy of your data — and it is your data, not ours! — is a
              big deal to us. In this policy, we lay out: what data we collect
              and why; how your data is handled; and your rights to your data.
              We promise we never sell your data: never have, never will.
            </p>

            <h2 id="what-we-collect-and-why" className="text-2xl font-bold">
              What we collect and why
            </h2>
            <p>
              Our guiding principle is to collect only what we need. Here’s what
              that means in practice:
            </p>

            <h3 id="identity--access" className="text-xl font-bold">
              Identity &amp; access
            </h3>
            <p>
              When you sign up for TryNope.com, we typically ask for identifying
              information such as your name, email address, and maybe a company
              name. That’s just so you can personalize your new account, and we
              can send you invoices, updates, or other essential information. We
              sometimes also give you the option to add a profile picture that
              displays in our products, but we do not normally look at or access
              that picture. We’ll never sell your personal info to third
              parties, and we won’t use your name or company in marketing
              statements without your permission either.
            </p>

            <h3 id="billing-information" className="text-xl font-bold">
              Billing information
            </h3>
            <p>
              When you pay for TryNope.com, we ask for your credit card and
              billing address. That’s so we can charge you for service,
              calculate taxes due, and send you invoices. Your credit card is
              passed directly to our payment processor and doesn’t ever go
              through our servers. We store a record of the payment transaction,
              for account history, invoicing, and billing support. We store your
              billing address to calculate any sales tax due in the United
              States or VAT in the EU, to detect fraudulent credit card
              transactions, and to print on your invoices.
            </p>

            <h3 id="geolocation-data" className="text-xl font-bold">
              Geolocation data
            </h3>
            <p>
              We log all access to all accounts by full IP address so that we
              can always verify no unauthorized access has happened. We keep
              this login data for as long as your product account is active.
            </p>
            <p>
              We also log full IP addresses used to sign up a product account.
              We keep this record forever because they are used to mitigate
              spammy signups.
            </p>
            <p>
              Web analytics data — described further in the Website Interactions
              section — are also tied temporarily to IP addresses to assist with
              troubleshooting cases. We blind all web analytics data after 30
              days.
            </p>

            <h3 id="website-interactions" className="text-xl font-bold">
              Website interactions
            </h3>
            <p>
              When you browse our marketing pages or applications, your browser
              automatically shares certain information such as which operating
              system and browser version you are using. We track that
              information, along with the pages you are visiting, page load
              timing, and which website referred you for statistical purposes
              like conversion rates and to test new designs. We sometimes track
              specific link clicks to help inform some design decisions. These
              web analytics data are tied to your IP address and user account if
              applicable and you are signed into our Services. We blind all of
              these individual identifiers after 30 days.
            </p>
            <p>
              To get critical information about the behavior of our visitors, we
              use <a href="https://simpleanalytics.com">Simple Analytics</a>.
              This analytics software gives us insight about our visitors only
              in general, but not about individuals per se, as it does not track
              visitors and does not store any personally identifiable
              information.{" "}
              <a href="https://docs.simpleanalytics.com/what-we-collect">
                Go to their documentation
              </a>{" "}
              to find out what Simple Analytics collects (and most importantly
              what they don’t).
            </p>

            <h3 id="cookies-and-do-not-track" className="text-xl font-bold">
              Cookies and Do Not Track
            </h3>
            <p>
              We do use persistent first-party cookies to store certain
              preferences, make it easier for you to use our applications, and
              support some in-house analytics. A cookie is a piece of text
              stored by your browser to help it remember your login information,
              site preferences, and more. You can adjust cookie retention
              settings in your own browser. To learn more about cookies,
              including how to view which cookies have been set and how to
              manage and delete them, please visit:{" "}
              <a href="https://www.allaboutcookies.org">
                www.allaboutcookies.org
              </a>
              .
            </p>
            <p>
              At this time, our sites and applications do not respond to Do Not
              Track beacons sent by browser plugins.
            </p>

            <h3 id="voluntary-correspondence" className="text-xl font-bold">
              Voluntary correspondence
            </h3>
            <p>
              When you write us with a question or to ask for help, we keep that
              correspondence, including the email address, so that we have a
              history of past correspondences to reference if you reach out in
              the future.
            </p>
            <p>
              We also store any information you volunteer like surveys.
              Sometimes when we do customer interviews, we may ask for your
              permission to record the conversation for future reference or use.
              We only do so if you give your express consent.
            </p>

            <h3
              id="information-we-do-not-collect"
              className="text-xl font-bold"
            >
              Information we do not collect
            </h3>
            <p>
              We don’t collect any characteristics of protected classifications
              including age, race, gender, religion, sexual orientation, gender
              identity, gender expression, or physical and mental abilities or
              disabilities. You may provide these data voluntarily, such as if
              you include a pronoun preference in your email signature when
              writing to our Support team.
            </p>
            <p>
              We also do not collect any biometric data. You are given the
              option to add a picture to your user profile, which could be a
              real picture of you or a picture of something else that represents
              you best. We do not extract any information from profile pictures:
              they are for your use alone.
            </p>

            <h2
              id="when-we-access-or-share-your-information"
              className="text-2xl font-bold"
            >
              When we access or share your information
            </h2>
            <p>
              Our default practice is to not access your information. The only
              times we’ll ever access or share your info are:
            </p>
            <p>
              <strong>To provide products or services you’ve requested.</strong>{" "}
              We do use some third-party services to run our applications and
              only to the extent necessary process some or all of your personal
              information via these third parties.
            </p>
            <p>
              <strong>
                To help you troubleshoot or squash a software bug, with your
                permission.
              </strong>{" "}
              If at any point we need to access your account to help you with a
              Support case, we will ask for your consent before proceeding.
            </p>
            <p>
              <strong>When required under applicable law.</strong>
            </p>

            <h2
              id="your-rights-with-respect-to-your-information"
              className="text-2xl font-bold"
            >
              Your rights with respect to your information
            </h2>
            <p>
              We apply the same data rights to all customers, regardless of
              their location. Currently some of the most privacy-forward
              regulations in place are the European Union’s General Data
              Protection Regulation (“GDPR”) and California Consumer Privacy Act
              (“CCPA”) in the US. We recognize all of the rights granted in
              these regulations, except as limited by applicable law. These
              rights include:
            </p>
            <ul className="list-disc pl-6">
              <li>
                <strong>Right to Know.</strong> You have the right to know what
                personal information is collected, used, shared or sold. We
                outline both the categories and specific bits of data we
                collect, as well as how they are used, in this privacy policy.
              </li>
              <li>
                <strong>Right of Access.</strong> This includes your right to
                access the personal information we gather about you, and your
                right to obtain information about the sharing, storage, security
                and processing of that information.
              </li>
              <li>
                <strong>Right to Correction.</strong> You have the right to
                request correction of your personal information.
              </li>
              <li>
                <strong>Right to Erasure / “To be Forgotten”.</strong> This is
                your right to request, subject to certain limitations under
                applicable law, that your personal information be erased from
                our possession and, by extension, all of our service providers.
                Fulfillment of some data deletion requests may prevent you from
                using our services because our applications may then no longer
                work. In such cases, a data deletion request may result in
                closing your account.
              </li>
              <li>
                <strong>Right to Complain.</strong> You have the right to make a
                complaint regarding our handling of your personal information
                with the appropriate supervisory authority.
              </li>
              <li>
                <strong>Right to Restrict Processing.</strong> This is your
                right to request restriction of how and why your personal
                information is used or processed, including opting out of sale
                of personal information. (Again: we never have and never will
                sell your personal data.)
              </li>
              <li>
                <strong>Right to Object.</strong> You have the right, in certain
                situations, to object to how or why your personal information is
                processed.
              </li>
              <li>
                <strong>Right to Portability.</strong> You have the right to
                receive the personal information we have about you and the right
                to transmit it to another party.
              </li>
              <li>
                <strong>
                  Right to not be subject to Automated Decision-Making.
                </strong>{" "}
                You have the right to object and prevent any decision that could
                have a legal, or similarly significant, effect on you from being
                made solely based on automated processes. This right is limited,
                however, if the decision is necessary for performance of any
                contract between you and us, is allowed by applicable law, or is
                based on your explicit consent.
              </li>
              <li>
                <strong>Right to Non-Discrimination.</strong> This right stems
                from the CCPA. We do not and will not charge you a different
                amount to use our products, offer you different discounts, or
                give you a lower level of customer service because you have
                exercised your data privacy rights. However, the exercise of
                certain rights (such as the right “to be forgotten”) may, by
                virtue of your exercising those rights, prevent you from using
                our Services.
              </li>
            </ul>

            <p>
              Many of these rights can be exercised by signing in and directly
              updating your account information.
            </p>
            <p>
              If you have questions about exercising these rights or need
              assistance, please{" "}
              <a href="mailto:support@TryNope.com" className="text-primary">
                contact our Support team
              </a>
              . For requests to delete personal information or know what
              personal information has been collected, we will first verify your
              identity using a combination of at least two pieces of information
              already collected including your user email address. If an
              authorized agent is corresponding on your behalf, we will first
              need written consent with a signature from the account holder
              before proceeding.
            </p>
            <p>
              If you are in the EU, you can identify your specific authority to
              file a complaint or find out more about GDPR, at{" "}
              <a
                href="https://edpb.europa.eu/about-edpb/board/members_en"
                className="text-primary"
              >
                https://edpb.europa.eu/about-edpb/board/members_en
              </a>
              .
            </p>

            <h2 id="how-we-secure-your-data" className="text-2xl font-bold">
              How we secure your data
            </h2>
            <p>
              All data is encrypted via{" "}
              <a
                href="https://en.wikipedia.org/wiki/Transport_Layer_Security"
                className="text-primary"
              >
                SSL/TLS
              </a>{" "}
              when transmitted from our servers to your browser. The database
              backups are also encrypted.
            </p>
            <p>
              Most data are not encrypted while they live in our database (since
              it needs to be ready to send to you when you need it), but we go
              to great lengths to secure your data at rest.
            </p>

            <h2
              id="what-happens-when-you-delete-data-in-your-product-accounts"
              className="text-2xl font-bold"
            >
              What happens when you delete data in your product accounts
            </h2>
            <p>
              In many of our applications, we give you the option to trash data.
              Any data you trash on your product accounts while they are active
              will be kept in an accessible trash can for up to 30 days (it
              varies a little by product). After that, the trashed data are no
              longer accessible via the application and are deleted from our
              active servers within the next 30 days. We also have some backups
              of our application databases, which are kept for up to another 30
              days. In total, when you trash things in our applications, they
              are purged within 90 days from all of our systems and logs.
              Retrieving data for a single account from a backup is
              cost-prohibitive and unduly burdensome so if you change your mind
              you’ll need to do so before your data are deleted from our active
              servers.
            </p>
            <p>
              We also delete your data after an account is cancelled. In this
              case, there is no period of data being kept in an accessible trash
              can so your data are purged within 60 days. This applies both for
              cases when an account owner directly cancels and for
              auto-cancelled accounts.
            </p>

            <h2 id="changes--questions" className="text-2xl font-bold">
              Changes &amp; questions
            </h2>
            <p>
              We may update this policy as needed to comply with relevant
              regulations and reflect any new practices.
            </p>
            <p>
              Have any questions, comments, or concerns about this privacy
              policy, your data, or your rights with respect to your
              information? Please get in touch by emailing us at{" "}
              <a href="mailto:support@trynope.com" className="text-primary">
                support@TryNope.com
              </a>{" "}
              and we’ll be happy to answer them!
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

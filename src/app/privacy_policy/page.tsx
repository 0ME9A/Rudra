import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Privacy Policy - 24x7 Rudra Creative Home Decor & Architects",
  description:
    "Read the privacy policy of 24x7 Rudra Creative Home Decor & Architects. Learn about how we handle your personal information and ensure your privacy when using our services in the Patna region.",
  keywords: [
    "privacy policy",
    "data protection",
    "user privacy",
    "personal information",
    "24x7 Rudra Creative Home Decor & Architects",
    "home decor services privacy",
    "data security",
    "Patna region privacy practices",
  ],
};

function page() {
  return (
    <div className="container mx-auto p-4 space-y-8 sm:space-y-16 md:space-y-24 lg:space-y-32">
      <section className="max-w-screen-lg mx-auto leading-normal space-y-8 *:space-y-3 [&_li]:text-accent-800 dark:[&_li]:text-accent-100 [&_li]:ml-4 [&_h4]:opacity-70">
        <header className="space-y-6 text-center pb-8">
          <h1 className="text-2xl text-gray-500 uppercase">privacy policy</h1>
          <h2 className="text-[3rem] sm:text-[4rem] xl:text-[5rem] leading-none font-[200]">
            24×7 Rudra creative home decor & architects pvt ltd
          </h2>
        </header>
        <div className="flex justify-end">
          <p className="bg-accent-500 w-fit p-1 px-3 text-xs rounded-full opacity-75">
            Last updated: <time dateTime="2024-05-14 20:00">2024-05-14</time>
          </p>
        </div>
        <div>
          <h3>
            <strong className="text-3xl">Your Privacy</strong>
          </h3>
          <p>Please read Privacy Policy</p>
        </div>
        <div>
          <h3 className="text-xl">
            <strong>Reservation of Rights</strong>
          </h3>
          <p>
            We reserve the right to request that you remove all links or any
            particular link to our Website. You approve to immediately remove
            all links to our Website upon request. We also reserve the right to
            amen these terms and conditions and it’s linking policy at any time.
            By continuously linking to our Website, you agree to be bound to and
            follow these linking terms and conditions.
          </p>
        </div>
        <div>
          <h3 className="text-xl">
            <strong>Removal of links from our website</strong>
          </h3>
          <p>
            If you find any link on our Website that is offensive for any
            reason, you are free to contact and inform us any moment. We will
            consider requests to remove links but we are not obligated to or so
            or to respond to you directly.
          </p>
          <p>
            We do not ensure that the information on this website is correct, we
            do not warrant its completeness or accuracy; nor do we promise to
            ensure that the website remains available or that the material on
            the website is kept up to date.
          </p>
        </div>
        <div>
          <h3 className="text-xl">
            <strong>Disclaimer</strong>
          </h3>
          <p>
            To the maximum extent permitted by applicable law, we exclude all
            representations, warranties and conditions relating to our website
            and the use of this website. Nothing in this disclaimer will:
          </p>
          <ol className="list-decimal px-4">
            <li>
              limit or exclude our or your liability for death or personal
              injury;
            </li>
            <li>
              limit or exclude our or your liability for fraud or fraudulent
              misrepresentation;
            </li>
            <li>
              limit any of our or your liabilities in any way that is not
              permitted under applicable law; or
            </li>
            <li>
              exclude any of our or your liabilities that may not be excluded
              under applicable law.
            </li>
          </ol>
          <p>
            The limitations and prohibitions of liability set in this Section
            and elsewhere in this disclaimer: (a) are subject to the preceding
            paragraph; and (b) govern all liabilities arising under the
            disclaimer, including liabilities arising in contract, in tort and
            for breach of statutory duty.
          </p>
          <p>
            As long as the website and the information and services on the
            website are provided free of charge, we will not be liable for any
            loss or damage of any nature.
          </p>
        </div>
      </section>
      <div />
    </div>
  );
}

export default page;

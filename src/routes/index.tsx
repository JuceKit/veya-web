import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/veya/Nav";
import { Hero } from "@/components/veya/Hero";
import { WhyVeya } from "@/components/veya/WhyVeya";
import { TypedDemo } from "@/components/veya/TypedDemo";
import { HowItWorks } from "@/components/veya/HowItWorks";
import { WhyVoice } from "@/components/veya/WhyVoice";
import { Faq } from "@/components/veya/Faq";
import { Closing } from "@/components/veya/Closing";
import { Footer } from "@/components/veya/Footer";

const title = "Veya: Learning that stays";
const description = "Veya is a personal learning space that talks with you, asks you back, and remembers where you left off. Join the waitlist.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhyVeya />
        <TypedDemo />
        <HowItWorks />
        <WhyVoice />
        <Faq />
        <Closing />
      </main>
      <Footer />
    </>
  );
}

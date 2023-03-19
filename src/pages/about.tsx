import { PageHeader } from "@/components/layout/PageHeader";
import Head from "next/head";
import { AboutSection } from "@/components/about/AboutSection";
import { OfferSection } from "@/components/about/OfferSection";
import { WorkshopSection } from "@/components/about/WorkshopSection";
import { TeamSection } from "@/components/about/TeamSection";
import { UpcomingEventSection } from "@/components/about/UpcomingEventSection";
import { AwardSection } from "@/components/about/AwardSection";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const About = () => {
  return (
    <>
      <Head>
        <title>About | Xavier Entrepreneurship Bootcamp</title>
      </Head>

      <Navbar />

      <PageHeader title="About" />
      <AboutSection />
      <OfferSection />
      <WorkshopSection />
      <TeamSection />
      <UpcomingEventSection />
      <AwardSection />

      <Footer />
    </>
  );
};

export default About;

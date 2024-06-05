/* eslint-disable @next/next/no-img-element */
import { useRef, useEffect } from "react";
import About from "@components/About";
import Hero from "@components/Hero";
import OtherStuff from "@components/OtherStuff";
import Skills from "@components/Skills";
import Layout from "@defaults/Layout";
import type { NextPage } from "next";
import Footer from "@components/Footer";

const locomotiveScroll =
  typeof window !== `undefined` ? require("locomotive-scroll").default : null;

const Home: NextPage = () => {
  const scrollRef = useRef<null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      reloadOnContextChange: true,
      multiplier: 1.25,
      inertia: 1.5,
    });
  }, []);

  return (
    <Layout title="Ayodeji" description="Software Developer - Not a portfolio!">
      <main
        className="mt-[14vh] lg:mt-[2vh] w-[95vw] lg:w-5/6 mx-auto px-3 max-w-[100vw]"
        ref={scrollRef}
      >
        <div data-scroll data-scroll-speed="5">
          <Hero />
        </div>

        <div data-scroll data-scroll-speed="3">
          <About />
        </div>

        <div data-scroll data-scroll-speed="1">
          <Skills />
        </div>

        <div data-scroll data-scroll-speed="6">
          <OtherStuff />
        </div>

        <div className="lg:py-12">
          <Footer />
        </div>
      </main>
    </Layout>
  );
};

export default Home;

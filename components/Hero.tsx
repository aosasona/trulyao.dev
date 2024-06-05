/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";
import HeroHeader from "./HeroHeader";
import { gsap } from "gsap";

const Hero = () => {
  const heroText = useRef<null>(null);
  const heroImage = useRef<null>(null);
  const heroQuote = useRef<null>(null);
  const heroAuthor = useRef<null>(null);

  useEffect(() => {
    if (!heroText.current) return;
    gsap.fromTo(
      heroText.current,
      {
        duration: 1,
        x: "-80vw",
        opacity: 0,
        ease: "power3.inOut",
      },
      {
        x: 0,
        opacity: 1,
      }
    );

    gsap.fromTo(
      heroImage.current,
      {
        duration: 2,
        opacity: 0,
        ease: "power3.inOut",
      },
      {
        opacity: 1,
        delay: 0.55,
      }
    );

    gsap.fromTo(
      heroQuote.current,
      {
        duration: 1,
        opacity: 0,
        ease: "power3.inOut",
      },
      {
        opacity: 1,
        delay: 0.7,
      }
    );

    gsap.fromTo(
      heroAuthor.current,
      {
        duration: 1,
        opacity: 0,
        ease: "power3.inOut",
      },
      {
        opacity: 1,
        delay: 0.9,
      }
    );
  }, []);

  return (
    <section className="lg:h-screen lg:flex lg:items-center lg:justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-8">
        <div className="flex flex-col gap-y-2 lg:gap-y-6">
          <div
            className="w-full h-max px-1 max-w-full flex flex-col space-y-[-1.75rem]"
            ref={heroText}
          >
            <HeroHeader>Software</HeroHeader>
            <HeroHeader>Developer</HeroHeader>
          </div>
          <div className="w-full hero-quote px-1">
            <p className="text-faded my-6 lg:my-8" ref={heroQuote}>
              In a very real sense, we are all aliens on a strange planet. We
              spend most of our lives reaching out and trying to communicate. If
              during our whole lifetime, we could reach out and really
              communicate with just two people, we are indeed very fortunate.
            </p>
            <div
              className="flex items-center text-primary gap-3 mb-3 lg:mb-0"
              ref={heroAuthor}
            >
              <div className="w-16 bg-primary h-[2px]" />
              Gene Roddenberry
            </div>
          </div>
          <a
            href="mailto:ayodejiosasona@icloud.com"
            className="hero-cta flex items-center justify-center lg:justify-start text-center text-sm lg:mb-0"
          >
            <span>Say Hi</span>
            <span className="hero-cta-line" />
            <span>👋</span>
          </a>
        </div>
        <div className="relative hero-image mx-auto" ref={heroImage}>
          <img src="/images/preview.jpg" alt="Ayodeji Osasona" className="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

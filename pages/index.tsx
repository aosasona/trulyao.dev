import { useState, useEffect, useRef } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import Meta from "@/defaults/Meta";
import Image from "next/image";
import SplashScreen from "@/components/SplashScreen";
import Tab from "@/components/Tab";
import Footer from "@/components/Footer";

const Home: NextPage = () => {
  const [SplashVisible, setSplashVisible] = useState<boolean>(true);
  const [CurrentTab, setCurrentTab] = useState<number>(-1);
  const [ImageVisibility, setImageVisibility] = useState<boolean>(false);
  const MainRef = useRef<null | HTMLElement | any>();

  useEffect(() => {
    setTimeout(() => {
      setSplashVisible(false);
    }, 3000);
  }, []);

  return (
    <>
      <Meta title="Ayodeji" />
      <SplashScreen visible={SplashVisible} />
      <main
        className="w-[93%] lg:w-3/5 2xl:w-3/6 mx-auto mt-[6vh] lg:mt-[9vh]"
        ref={MainRef}
      >
        <div
          onMouseEnter={() => setImageVisibility(true)}
          onMouseLeave={() => setImageVisibility(false)}
        >
          <AnimatePresence exitBeforeEnter>
            {!ImageVisibility ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="relative w-[35vw] lg:w-[14vw] 2xl:w-[10vw] mx-auto aspect-square overflow-hidden rounded-full border-[3px] border-neutral-800 hover:border-neutral-300 hover:-translate-y-2 transition-all cursor-pointer select-none"
              >
                <Image
                  src="/images/Memoji.PNG"
                  className="select-none"
                  alt="Memoji"
                  layout="fill"
                  loading="eager"
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="relative w-[35vw] lg:w-[14vw] 2xl:w-[10vw] mx-auto aspect-square overflow-hidden rounded-full border-[3px] border-neutral-800 hover:border-neutral-300 hover:-translate-y-2 transition-all cursor-pointer select-none"
              >
                <Image
                  src="/images/ME.jpg"
                  className="select-none"
                  alt="Me"
                  layout="fill"
                  loading="eager"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {!SplashVisible && (
            <motion.div
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-neutral-800 bg-opacity-60 py-6 px-4 lg:py-8 lg:px-6 text-left  text-[12px] lg:text-sm my-8 hover:drop-shadow-lg hover:-translate-y-2 transition-all select-none backdrop-blur-md"
            >
              In a very real sense, we are all aliens on a strange planet. We
              spend most of our lives reaching out and trying to communicate. If
              during our whole lifetime, we could reach out and really
              communicate with just two people, we are indeed very fortunate
              <p className="text-right mt-2">-Gene Roddenberry</p>
            </motion.div>
          )}
        </AnimatePresence>
        <section className="relative w-[95%] h-min mx-auto select-none">
          <div
            className={`absolute bottom-0 -left-[6px] aspect-square rounded-none w-3  ${
              CurrentTab === 5 ? "bg-neutral-300" : "bg-neutral-700"
            }`}
          ></div>
          <Tab
            identifier={1}
            title="Persona"
            CurrentTab={CurrentTab}
            setCurrentTab={setCurrentTab}
          >
            An inquisitive human interested in tech, space, Greek or Norse
            mythology, the supernatural and a couple of other weird things...
            but who am I to decide what&apos;s weird?
            <br />
            More? Okay... I am a <b>speed-obsessed</b> software developer
            (back-end, with a sliver of front-end knowledge here and there)
            constantly learning to attain &quot;senior-level&apos; skills
            whatever you think that is. If you are a fan of AJR (the band), Star
            Wars or Star Trek, you are 90% my kind of person, just kidding but
            are you?
          </Tab>
          <Tab
            identifier={2}
            title="Presence"
            CurrentTab={CurrentTab}
            setCurrentTab={setCurrentTab}
          >
            &quot;Presence&quot; is probably not what you would call this but...
            I&apos;m often at Breege HQ joking around with the team, making sure
            we are still on schedule and writing codes or at anywhere else I
            work; being super serious as an employee... or somewhere else, who
            cares?
          </Tab>
          <Tab
            identifier={3}
            title="Portfolio"
            CurrentTab={CurrentTab}
            setCurrentTab={setCurrentTab}
          >
            Tsk... I am not making one yet until Frikax goes live - when it is,
            you will find the link here.{" "}
            <a
              href="https://www.frikax.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-neutral-500"
            >
              What is Frikax?
            </a>
          </Tab>
          <Tab
            identifier={4}
            title="Blog"
            CurrentTab={CurrentTab}
            setCurrentTab={setCurrentTab}
          >
            Indulge yourself in my thoughts on an array of topics that are
            floating around in my head, if you get what I mean.
            <div className="Link text-neutral-300 hover:text-neutral-500">
              <Link href="/blog">Start reading</Link>
            </div>
          </Tab>
          <Tab
            identifier={5}
            title="Other Stuff"
            CurrentTab={CurrentTab}
            setCurrentTab={setCurrentTab}
          >
            Uhm... stuffs I worked on (or I am working on) that you might be
            interested in? - I like a minimal Twitter bio 😄
            <ul>
              <li className="underline list-disc py-2">
                <a
                  href="https://www.frikax.net"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Frikax - The all-in-one social media for Techies
                </a>
              </li>
              <li className="underline list-disc py-2">
                <a
                  href="https://www.noxis.chat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Noxis - Quick, easy & anonymous conversations
                </a>
              </li>
              <li className="underline list-disc py-2">
                <a
                  href="https://www.hitlist.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HitList CLI - Run multiple terminal commands with one hit!
                </a>
              </li>
              <li className="underline list-disc py-2">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  [REDACTED] - Effortless and Modern Collaborations in a Snap
                </a>
              </li>
            </ul>
          </Tab>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Home;

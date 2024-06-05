import React from "react";
import SectionHeader from "./SectionHeader";
import TextHighlight from "./TextHighlight";

const About = () => {
  return (
    <section className="mt-12" id="about">
      <div>
        <SectionHeader title="About" />
        <p className="text-faded leading-relaxed text-sm">
          I am a software engineering major student and a{" "}
          <TextHighlight>software developer</TextHighlight> with over three
          years of experience building for a variety of clients. I could also
          define myself as an inquisitive human who is{" "}
          <TextHighlight>interested</TextHighlight> in the human mind, Greek and
          Norse mythology, science fiction, and a few other peculiar things;
          yet, who am I to decide what qualifies as peculiar? <br />
          More? I am a software developer (back-end with a sliver of front-end
          experience here and there) who is continually studying to acquire
          &quot;senior-level&quot; skills. Contrary to popular belief, I am{" "}
          <TextHighlight>not a nerd</TextHighlight>. If you like AJR (the band),
          Star Wars, or Star Trek, then you are, to a great extent, the kind of
          person I want to hang out with (I would hang out with you if you
          don&apos;t too though 😉).{" "}
          <TextHighlight>Exploring new technologies</TextHighlight>, writing
          &quot;technical&quot; articles and developing new products for
          everyone, or more recently, developer tools to assist myself and
          others in building things more quickly, are all areas that also pique
          my interest.
        </p>
      </div>
    </section>
  );
};

export default About;

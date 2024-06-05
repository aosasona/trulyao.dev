import React from "react";
import SectionHeader from "./SectionHeader";
import SkillsRating from "./SkillsRating";
import TextHighlight from "./TextHighlight";

const Skills = () => {
  return (
    <section className="mt-12" id="skills">
      <div>
        <SectionHeader title="Skills" />
        <p className="text-faded leading-relaxed text-sm">
          In the past few years, I have had the opportunity to work with a wide
          variety of languages frameworks, databases etc (not as many as some
          other people, I am aware; however, I do prefer to become{" "}
          <TextHighlight>reasonably proficient</TextHighlight> in a particular
          language or framework before moving on to another); however, the
          following is a list of <TextHighlight>some</TextHighlight> of the
          technologies that I have worked with in the past as well as those that
          I am currently working with.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 my-5">
          <SkillsRating name="PHP" level={8} />
          <SkillsRating name="JavaScript + Typescript (Node.js)" level={8} />
          <SkillsRating name="Python + Flask" level={5} />
          <SkillsRating name="Golang" level={2} learning={true} />
          <SkillsRating name="Express.js, Fastify & Nest.js" level={8} />
          <SkillsRating name="React.js & Next.js + Tailwind CSS" level={8} />
          <SkillsRating name="MySQL + PostgreSQL" level={8} />
          <SkillsRating name="Git & Github" level={6} />
        </div>

        <p className="text-faded leading-relaxed text-sm">
          I am not very good at assigning ratings, but this is the best I can do
          to give you a sense of what anything is like. This list might go on
          and on since I have dabbled into quite a bit of other stuff -
          including Graphic design, so I have only listed the most{" "}
          <TextHighlight>significant</TextHighlight> ones.
        </p>
      </div>
    </section>
  );
};

export default Skills;

import SectionBlock from './SectionBlock';
import AnimatedAvatar from './AnimatedAvatar';
import { PROFILE } from '@/data/constants';

const AboutSection = () => (
  <SectionBlock id="about" title="About me">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
      <AnimatedAvatar />
      <div className="flex-1">
        <p className="body-text max-w-2xl">
          I'm a passionate DevOps Engineer with a knack for crafting seamless
          digital experiences. With a background in both design and development, I
          thrive at the intersection of creativity and technology, building
          solutions that are not only functional but also visually engaging.
        </p>
        <p className="body-text max-w-2xl mt-6">
          My journey in tech has been fueled by a relentless curiosity and a desire to push the boundaries of what's possible. I specialize in
          leveraging modern tools and frameworks to create intuitive, user-centric
          applications that solve real-world problems. Whether it's optimizing
          workflows or designing elegant interfaces, I bring a unique blend of
          technical expertise and artistic vision to every project I undertake.
        </p>
        <p className="body-text max-w-2xl mt-6">
          Beyond coding, I believe in the power of knowledge sharing and am
          always eager to connect with fellow tech enthusiasts to exchange ideas
          and collaborate on exciting projects. Let's build something amazing
          together! 🚀
        </p>
      </div>
    </div>
  </SectionBlock>
);

export default AboutSection;

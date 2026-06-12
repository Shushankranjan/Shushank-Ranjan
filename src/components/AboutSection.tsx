import SectionBlock from './SectionBlock';
import AnimatedAvatar from './AnimatedAvatar';
import { PROFILE } from '@/data/constants';

const AboutSection = () => (
  <SectionBlock id="about" title="About me">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
      <AnimatedAvatar />
      <div className="flex-1">
        <p className="body-text max-w-2xl">
          DevOps Engineer who automates things so I don't have to do them twice —
          or ever, ideally. I speak fluent YAML, argue with Terraform state files,
          and have a complicated relationship with Kubernetes.
        </p>
        <p className="body-text max-w-2xl mt-6">
          I'm somewhere between "it works on my machine" and "it works in
  production" — closing that gap is basically my whole thing. Always down
  to talk cloud infra, CI/CD pipelines, or why my last deployment
  definitely didn't cause that outage.
        </p>
        <p className="body-text max-w-2xl mt-6">
          If you've got a broken pipeline, a runaway AWS bill, or just want to
  geek out over DevSecOps - let's connect. I don't bite. My scripts
  might, though. 
        </p>
      </div>
    </div>
  </SectionBlock>
);

export default AboutSection;

import SectionBlock from './SectionBlock';

const experiences = [
  {
    role: 'Cyber Security Intern',
    company: 'Graphic Era',
    period: '[20JULY 2024 – 23AUG 2024]',
    description:
      'Conducted comprehensive security assessments, including vulnerability scanning and penetration testing, to identify and mitigate potential threats. Collaborated with the IT team to implement security measures and enhance overall cybersecurity posture.',
  },
  {
    role: 'DevOps Intern',
    company: 'AlphaCode',
    period: '[01JUNE 2026 – 01JULY 2026]',
    description:
      'Assisted in the development and maintenance of CI/CD pipelines, automating deployment processes to improve efficiency. Worked with containerization technologies like Docker and orchestration tools such as Kubernetes to streamline application deployment and scaling.',
  },
];

const ExperienceSection = () => (
  <SectionBlock id="experience" title="Experience">
    <div className="space-y-12">
      {experiences.map((exp) => (
        <div
          key={exp.role}
          className="relative pl-8 md:pl-0 border-l md:border-l-0 border-black/20 md:grid md:grid-cols-[1fr_2fr] md:gap-8 pb-12 last:pb-0"
        >
          <div className="md:text-right md:pr-8 md:border-r border-black/20 relative">
            <div className="hidden md:block absolute top-1 -right-[5px] w-[9px] h-[9px] rounded-none bg-black"></div>
            <div className="md:hidden absolute top-1 -left-[5px] w-[9px] h-[9px] rounded-none bg-black"></div>

            <h4 className="font-mono text-xs tracking-widest text-foreground/60 uppercase mb-1">
              {exp.period}
            </h4>
            <h3 className="font-bold text-base md:text-lg">{exp.company}</h3>
          </div>

          <div className="mt-2 md:mt-0">
            <h3 className="text-base font-bold text-foreground md:hidden mb-2">
              {exp.role}
            </h3>
            <h3 className="text-lg font-bold text-foreground hidden md:block mb-3">
              {exp.role}
            </h3>
            <p className="body-text text-sm">{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  </SectionBlock>
);

export default ExperienceSection;

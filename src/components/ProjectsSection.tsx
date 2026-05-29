import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import SectionBlock from './SectionBlock';
import { Badge } from './ui/badge';
import { playHover, playClick } from '@/hooks/useSoundEffects';

const projects = [
  {
    title: 'MAIL-MIND-AI',
    isNew: true,
    description:
      'A professional-grade, AI-powered email assistant that transforms your inbox into a dynamic command center by leveraging Gemma 2 27B and the Gmail API.',
    tags: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'Mongoose',
      'Gmail API',
      'Gemma',
      'Tailwind',
      'Vite',
      'Framer Motion',
    ],
    githubUrl: 'https://github.com/VARA4u-tech/MAIL-MIND-AI',
    
  },
  {
    title: 'TrueVex Technologies',
    isNew: false,
    description:
      'A premium software consultancy platform designed with a high-end, Brutalist-Modern aesthetic, focusing on immersive interactivity and pixel-perfect responsiveness.',
    tags: [
      'React',
      'TypeScript',
      'Tailwind',
      'Framer Motion',
      'GSAP',
      'TanStack Router',
      'Vite',
    ],
    githubUrl: 'https://github.com/VARA4u-tech/true-vex-tech',
    liveUrl: 'https://truevextechnologies.netlify.app/',
  },
];

const ProjectsSection = () => (
  <SectionBlock id="projects" title="Projects">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: '-50px' }}
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
        hidden: {},
      }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 pb-12"
    >
      {projects.map((project, index) => {
        return (
          <motion.div
            key={project.title}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            onMouseEnter={playHover}
            className="w-full h-full"
          >
            <div className="w-full h-full group relative border-2 border-black p-8 flex flex-col justify-between shadow-brutal-3d hover:shadow-brutal-3d-hover transition-all duration-500 bg-white rounded-none">
              {project.isNew && (
                <div className="absolute -top-3 -right-3 bg-black text-white px-3 py-1 text-[9px] font-black uppercase tracking-widest border-2 border-black z-10 rotate-3 group-hover:rotate-0 transition-transform">
                  LATEST WORK
                </div>
              )}

              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-black text-foreground leading-tight text-xl">
                    {project.title}
                  </h3>
                </div>

                <p className="body-text mb-6 font-normal leading-relaxed text-foreground/80 text-xs line-clamp-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.slice(0, 6).map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="font-mono text-[9px] font-bold border border-black/5 bg-black/5 px-2 py-0.5 rounded-none"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 6 && (
                    <span className="text-[9px] font-bold opacity-30">
                      +{project.tags.length - 6}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex gap-3 mt-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border-2 border-black bg-white text-[9px] font-black uppercase tracking-widest transition-all duration-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-black hover:text-white"
                >
                  <Github className="w-3.5 h-3.5" />
                  Source
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border-2 border-black bg-black text-white text-[9px] font-black uppercase tracking-widest transition-all duration-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-white hover:text-black"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live
                </a>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>

    <div className="mt-8">
      <a
        href="https://github.com/Shushankranjan"
        target="_blank"
        rel="noopener noreferrer"
        onClick={playClick}
        className="group flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] border-b-2 border-black pb-1 hover:gap-5 transition-all w-fit"
      >
        <Github className="w-4 h-4" />
        Explore Original Repositories
      </a>
    </div>
  </SectionBlock>
);

export default ProjectsSection;

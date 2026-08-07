import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { motion, useReducedMotion } from "framer-motion";

import Fade from "@/components/animations/fade";
import Reveal from "@/components/animations/reveal";
import Scale from "@/components/animations/scale";
import Slide from "@/components/animations/slide";
import { Stagger, StaggerItem } from "@/components/animations/stagger";
import OverviewLayout from "@/components/layout/OverviewLayout";
import { Card, CardContent } from "@/components/ui/card";
import { projects, skills, socials, stats } from "@/data/profile";
import logo from "@/assets/sihab-logo.png";

const SocialLinks = () => (
  <nav aria-label="Social links">
    <Stagger className="flex w-full flex-wrap justify-center gap-2 md:justify-start lg:h-full lg:w-12 lg:flex-col lg:flex-nowrap">
      {socials.map(({ label, href, icon: Icon, className }) => {
        const isEmail = href.startsWith("mailto:");

        return (
          <StaggerItem key={label}>
            <a
              href={href}
              target={isEmail ? undefined : "_blank"}
              rel={isEmail ? undefined : "noopener noreferrer"}
              aria-label={isEmail ? "Send email" : `Open ${label} profile`}
              className={`flex size-10 items-center justify-center rounded-lg text-base transition-colors duration-150 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${className}`}
            >
              <Icon aria-hidden="true" />
            </a>
          </StaggerItem>
        );
      })}
    </Stagger>
  </nav>
);

const Stats = () => (
  <section aria-labelledby="stats-heading">
    <h2 id="stats-heading" className="sr-only">
      Developer statistics
    </h2>
    <Stagger className="flex w-full flex-col gap-5 sm:flex-row sm:justify-center lg:flex-col lg:justify-start">
      {stats.map(({ label, icon: Icon }) => (
        <StaggerItem key={label}>
          <div className="flex items-center gap-4 lg:px-3">
            <div
              aria-hidden="true"
              className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground"
            >
              <Icon className="size-6" />
            </div>
            <p className="max-w-28 text-sm font-medium leading-6 text-muted-foreground">
              {label}
            </p>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  </section>
);

const ProjectCard = ({ project }: { project: (typeof projects)[number] }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.15, ease: "easeOut" }
      }
    >
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <Card className="min-h-24 gap-0 rounded-lg border-0 bg-card py-0 shadow ring-0 transition-colors motion-reduce:transition-none hover:bg-border">
          <CardContent className="h-full px-4 py-4">
            <div className="flex min-w-0 items-center">
              <h3 className="truncate text-[16px] font-normal leading-6 text-card-foreground">
                {project.title}
              </h3>
              <span className="mx-2 shrink-0 rounded-full bg-accent px-2 text-[12px] font-normal leading-5 text-accent-foreground">
                {project.status}
              </span>
            </div>
            <p className="mt-1 line-clamp-2 text-[12px] font-normal leading-4 text-muted-foreground">
              {project.description}
            </p>
          </CardContent>
        </Card>
      </a>
    </motion.div>
  );
};

const Skills = () => {
  const root = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (!root.current || shouldReduceMotion) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        "[data-skill-bar]",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.08,
          delay: 0.35,
          transformOrigin: "left center",
        },
      );
    }, root);

    return () => context.revert();
  }, [shouldReduceMotion]);

  return (
    <Reveal delay={0.18}>
      <section ref={root} aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="sr-only">
          Technical skills
        </h2>
        <div className="space-y-[9px]">
          {skills.map((skill) => (
            <div key={skill.label}>
              <p className="h-[17px] text-[14px] font-normal leading-[17px] text-muted-foreground">
                {skill.label}
              </p>
              <div
                className="h-[23px] overflow-hidden rounded-lg bg-secondary shadow-inner"
                role="progressbar"
                aria-label={`${skill.label} proficiency`}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={skill.value}
              >
                <div
                  data-skill-bar
                  className={`flex h-full origin-left items-center justify-end rounded-lg pr-2 ${skill.widthClass} ${skill.barClass}`}
                >
                  <span className="text-[12px] font-semibold leading-none text-secondary-foreground">
                    {skill.value}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
};

const ProfileOverview = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Sihab Hasan | Full-Stack Developer";

    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <OverviewLayout>
      <div className="my-auto w-full max-w-6xl self-center">
        <header className="grid min-w-0 items-start gap-x-4 gap-y-6 md:grid-cols-12 lg:gap-y-0">
          <Scale
            className="flex min-w-0 justify-center md:col-span-3 md:justify-start md:pt-3 lg:col-span-2 lg:row-auto lg:pt-6"
            delay={0.02}
          >
            <img
              src={logo}
              alt="Sihab Hasan logo"
              width={552}
              height={552}
              loading="eager"
              decoding="async"
              draggable={false}
              className="h-32 w-40 object-contain"
            />
          </Scale>

          <Fade
            className="flex min-w-0 justify-center md:col-span-3 md:row-start-2 md:justify-start lg:col-span-1 lg:row-auto"
            delay={0.08}
          >
            <SocialLinks />
          </Fade>

          <Slide
            className="min-w-0 text-center sm:px-6 md:col-span-9 md:col-start-4 md:row-start-1 md:px-0 md:text-left lg:col-span-6 lg:col-start-auto lg:row-auto"
            delay={0.1}
            y={12}
          >
            <h1 className="text-3xl font-semibold leading-8 tracking-tight text-foreground">
              Sihab Hasan
            </h1>
            <p className="py-1 text-md font-medium leading-5 text-chart-2">
              Full-Stack Developer
            </p>
            <p className="text-sm font-medium leading-6 text-muted-foreground">
              Hello, I&apos;m Sihab Hasan, a full-stack developer from
              Bangladesh. I build production-ready web applications with clean
              interfaces, structured backends, REST APIs, role-based
              authentication, and scalable data architecture. I enjoy turning
              practical ideas into reliable products.
            </p>
          </Slide>

          <Fade
            className="flex min-w-0 justify-center md:col-span-9 md:col-start-4 md:row-start-2 md:justify-start lg:col-span-3 lg:col-start-auto lg:row-auto"
            delay={0.16}
          >
            <Stats />
          </Fade>
        </header>

        <div className="mt-8 grid min-w-0 items-start gap-5 lg:grid-cols-4">
          <section
            aria-labelledby="projects-heading"
            className="min-w-0 lg:col-span-3"
          >
            <h2 id="projects-heading" className="sr-only">
              Featured projects
            </h2>
            <Stagger className="grid min-w-0 gap-3 sm:grid-cols-2">
              {projects.map((project) => (
                <StaggerItem key={project.title}>
                  <ProjectCard project={project} />
                </StaggerItem>
              ))}
            </Stagger>
          </section>

          <div className="min-w-0 lg:col-span-1">
            <Skills />
          </div>
        </div>
      </div>
    </OverviewLayout>
  );
};

export default ProfileOverview;

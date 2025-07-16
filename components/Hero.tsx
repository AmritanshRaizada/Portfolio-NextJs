import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import ProfileCard from "./ProfileCard"; // Ensure correct path

const Hero = () => {
  const techStack = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React", glow: "group-hover:drop-shadow-[0_0_8px_rgba(97,218,251,0.6)]" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "Next.js", invert: true, glow: "group-hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.6)] dark:group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript", glow: "group-hover:drop-shadow-[0_0_8px_rgba(247,223,30,0.6)]" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript", glow: "group-hover:drop-shadow-[0_0_8px_rgba(49,120,198,0.6)]" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java", glow: "group-hover:drop-shadow-[0_0_8px_rgba(244,67,54,0.6)]" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", alt: "Spring Boot", glow: "group-hover:drop-shadow-[0_0_8px_rgba(109,179,63,0.6)]" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python", glow: "group-hover:drop-shadow-[0_0_8px_rgba(75,139,190,0.6)]" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", alt: "Flask", invert: true, glow: "group-hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.6)] dark:group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js", glow: "group-hover:drop-shadow-[0_0_8px_rgba(140,200,75,0.6)]" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB", glow: "group-hover:drop-shadow-[0_0_8px_rgba(77,182,172,0.6)]" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL", glow: "group-hover:drop-shadow-[0_0_8px_rgba(51,103,145,0.6)]" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg", alt: "Supabase", glow: "group-hover:drop-shadow-[0_0_8px_rgba(62,207,142,0.6)]" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker", glow: "group-hover:drop-shadow-[0_0_8px_rgba(13,183,232,0.6)]" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git", glow: "group-hover:drop-shadow-[0_0_8px_rgba(240,80,50,0.6)]" },
  ];


  return (
    <div className="pb-20 pt-36 relative">
      {/* Spotlight Effects */}
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Grid Background */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 my-16 max-w-[95vw] mx-auto flex flex-col lg:flex-row items-center justify-center gap-12">
        
        {/* Left Side: Intro & Marquee */}
        <div className="flex flex-col items-center justify-center max-w-3xl text-center lg:text-left">
          <p className="uppercase tracking-widest text-xs text-blue-100 max-w-80 mx-auto">
            SCALABLE • SECURE • WEB SOLUTIONS
          </p>

          <TextGenerateEffect
            words="Amritansh Raizada"
            className="text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            <span className="text-purple">Next.js</span>
            <span className="text-white dark:text-gray-300"> • </span>
            <span className="text-purple">Flask</span>
            <span className="text-white dark:text-gray-300"> • </span>
            <span className="text-purple">Supabase</span>
            <span className="text-white dark:text-gray-300"> • </span>
            <span className="text-purple">Docker</span>
          </p>

          {/* Tech Stack Marquee */}
          <div className="relative w-full max-w-4xl overflow-hidden py-4 h-32">
            <div className="absolute left-0 top-0 bottom-0 w-20 z-20 bg-gradient-to-r from-white dark:from-black-100 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 z-20 bg-gradient-to-l from-white dark:from-black-100 to-transparent pointer-events-none" />
            <div className="flex h-full items-center">
              <div className="flex animate-marquee items-center gap-8 whitespace-nowrap">
                {[...techStack, ...techStack].map((icon, index) => (
                  <div key={`icon-${index}`} className="relative group transition-all duration-300 hover:scale-125 hover:-translate-y-3 flex-shrink-0">
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      className={`h-10 w-10 transition-all duration-300 ${icon.invert ? 'dark:invert' : ''} ${icon.glow}`}
                    />
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-black dark:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {icon.alt}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <a href="#about" className="mt-10">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>

        {/* Right Side: Profile Card */}
        <div className="flex-shrink-0">
          <ProfileCard
            name="Amritansh Raizada"
            title="Full Stack AI Developer"
            handle="amritanshraizada"
            status="Open to Work"
            contactText="Hire Me"
            avatarUrl="/avatar.jpg"
            miniAvatarUrl="/avatar.jpg"
            enableTilt={true}
            showUserInfo={true}
            onContactClick={() => console.log("Contact clicked")}
          />
        </div>
      </div>

      {/* Global Marquee Animation */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          display: flex;
          width: 200%;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Hero;

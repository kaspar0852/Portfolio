import { useEffect } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import {
  FaDocker,
  FaGit,
  FaTrophy,
  FaBriefcase,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaAws,
  FaFileDownload,
} from "react-icons/fa";
import { SiTypescript, SiAngular, SiDotnet, SiCsharp } from "react-icons/si";
import AcademicJourney from "./Academic-Journey";
import { a } from "framer-motion/client";

const projects = [
  {
    id: 1,
    title: "Automated Booking Management System",
    company: "Backend Developer",
    period: "2023 - Running",
    description:
      "Created an automated booking system using ASP.NET Core, React.js, and Postgres. Integrated Microsoft Graph API for Outlook bookings and implemented batch management for performance optimization.",
    image:
      "/placeholder.svg?height=200&width=400&text=Automated+Booking+Management",
  },
  {
    id: 2,
    title: "Report Generator using Generative AI",
    company: "Backend Developer",
    period: "2022 - Running",
    description:
      "Developed a report generator application using generative AI with ASP.NET Core, React.js, and Postgres. Implemented polling architecture, batch management, and AWS services for optimized performance.",
    image:
      "/placeholder.svg?height=200&width=400&text=Report+Generator+using+Generative+AI",
  },
  {
    id: 3,
    title: "Health Tracking System",
    company: "Backend Developer",
    period: "2022",
    description:
      "Developed a web application to track employee health checkups using ASP.NET Core, ABP.NET, and React.js. Implemented query optimizations, logging, and a bulk upload module. Collaborated with team members to identify requirements and document API development.",
    image: "/placeholder.svg?height=200&width=400&text=Health+Tracking+System",
  },
  {
    id: 4,
    title: "Intranet Application",
    company: "Backend Developer",
    period: "2022",
    description:
      "Built an intranet application for employee records and document tracking using ASP.NET Core, ABP.NET, and React.js. Integrated background job handling, Google Calendar APIs, and optimized database queries for performance.",
    image: "/placeholder.svg?height=200&width=400&text=Intranet+Application",
  },
  {
    id: 5,
    title: "Training Management System",
    company: "Backend Developer",
    period: "2022",
    description:
      "Designed and developed a training management system with ASP.NET Core, React.js, and Postgres. Created APIs, designed the database architecture, and documented the project for future scalability.",
    image:
      "/placeholder.svg?height=200&width=400&text=Training+Management+System",
  },
];

const techStack = [
  { icon: FaDocker, name: "Docker" },
  { icon: FaGit, name: "Git" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiAngular, name: "Angular" },
  { icon: SiDotnet, name: ".NET" },
  { icon: SiCsharp, name: "C#" },
  { icon: FaAws, name: "AWS" },
];

const experiences = [
  {
    title: "Associate Software Engineer",
    company: "Amnil Technologies",
    period: "2022 - Present",
    description:
      "Developed and optimized backend systems for web applications using ASP.NET Core, ABP.NET, and React.js. Led the implementation of query optimizations, background jobs, and bulk processing modules, significantly enhancing system performance and scalability. Collaborated with the AI team to integrate generative AI services for automated report generation and utilized AWS to improve system efficiency by reducing deadlocks.",
  },
  {
    title: "Backend Developer Intern",
    company: "DataDriven Enterprises",
    period: "Feb 2022 - May 2022",
    description:
      "Assisted in the development of key web applications, including a real-time intranet application and an automated booking system. Worked on optimizing API designs, enhancing query performance, and integrating Microsoft Graph API for automated workflows. Contributed to the creation of database architectures to support high-performance applications.",
  },
];

const achievements = [
  {
    title: "Automated Meeting Booking System",
    description:
      "Streamlined a 24-year-old manual meeting booking process by developing an automated solution using .NET Core, AWS services, and Microsoft Graph API. This solution significantly reduced manual effort, improved booking efficiency, and integrated seamlessly with existing systems like Outlook.",
    year: "2023",
  },

  {
    title: "Amnil Hackathon",
    description:
      "Participated in a hackathon to develop a web application for managing gobal time system",
    year: "2023",
  },
];

const socialLinks = [
  { icon: FaFacebookF, url: "https://www.facebook.com/Casper.neupane" },
  {
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/saugat-neupane-989080229/",
  },
  {
    icon: FaGithub,
    url: "https://github.com/kaspar0852",
    color: "bg-gray-800",
  },
];

const AnimatedDownloadButton = () => {
  const buttonControls = useAnimation();
  const iconControls = useAnimation();

  useEffect(() => {
    const pulseAnimation = async () => {
      while (true) {
        await buttonControls.start({
          scale: [1, 1.05, 1],
          transition: { duration: 2, ease: "easeInOut" },
        });
      }
    };
    pulseAnimation();
  }, [buttonControls]);

  return (
    <a href="sau.pdf" download="saugat-neupane-resume.pdf">
      <motion.button
        className="relative bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg overflow-hidden group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={buttonControls}
        onHoverStart={() => {
          iconControls.start({
            x: [0, 5, 0],
            transition: { duration: 0.3, repeat: Infinity },
          });
        }}
        onHoverEnd={() => {
          iconControls.stop();
        }}
      >
        <motion.span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <motion.span className="relative flex items-center justify-center space-x-2">
          <span>Download CV</span>
          <motion.span animate={iconControls}>
            <FaFileDownload className="text-xl" />
          </motion.span>
        </motion.span>
        <motion.span
          className="absolute inset-0 border-2 border-white rounded-full"
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{
            scale: 1.5,
            opacity: 0,
            transition: { duration: 1, repeat: Infinity },
          }}
        />
      </motion.button>
    </a>
  );
};

export default function Portfolio() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const scale = useTransform(scrollY, [0, 200], [1, 0.8]);
  const y = useTransform(scrollY, [0, 200], [0, -50]);

  const toolboxControls = useAnimation();

  useEffect(() => {
    const animateToolbox = async () => {
      while (true) {
        await toolboxControls.start({
          x: [0, -20, 0, 20, 0],
          transition: { duration: 5, ease: "easeInOut" },
        });
      }
    };
    animateToolbox();
  }, [toolboxControls]);

  // const handleDownloadCV = () => {
  //   const link = document.createElement("a");
  //   link.href = "sau.pdf";
  //   link.download = "Saugat_Neupane_CV.pdf";
  //   link.click();
  // };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Background Animation */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>
        <div className="absolute inset-0 opacity-30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute bottom-0 animate-wave-slow"
          >
            <path
              fill="rgba(59, 130, 246, 0.5)"
              fillOpacity="1"
              d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,144C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute bottom-0 animate-wave-fast"
          >
            <path
              fill="rgba(167, 139, 250, 0.5)"
              fillOpacity="1"
              d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute bottom-0 animate-wave-medium"
          >
            <path
              fill="rgba(236, 72, 153, 0.5)"
              fillOpacity="1"
              d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,128C672,128,768,160,864,181.3C960,203,1056,213,1152,202.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section
          className="h-screen flex items-center justify-center"
          style={{ opacity, scale, y }}
        >
          <div className="text-center">
            <motion.div
              className="relative w-64 h-64 mx-auto mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 1.5,
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  ease: "linear",
                  repeat: Infinity,
                }}
              />
              <motion.img
                src="saugat.jpeg"
                alt="saugat"
                className="rounded-full w-full h-full object-cover border-4 border-white"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />
            </motion.div>
            <motion.h1
              className="text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Saugat Neupane
            </motion.h1>
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-2xl mb-2">Backend Engineer</p>
              <p className="text-lg text-gray-300">
                Specializing in Backend Development, API Design, System Design
                and Performance-Driven Architectures.
              </p>
              <p className="text-lg text-gray-300">
                2+ Years of Experience in Cloud Technologies
              </p>
            </motion.div>
            <motion.div
              className="mt-8 flex flex-col items-center space-y-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex justify-center space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${link.color} text-white p-3 rounded-full hover:opacity-80 transition duration-300`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <link.icon className="text-2xl" />
                  </motion.a>
                ))}
              </div>
              <AnimatedDownloadButton />
            </motion.div>
          </div>
        </motion.section>

        {/* Academic Journey Section */}
        <AcademicJourney />

        {/* Projects Section */}
        <motion.section
          className="py-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">
              Professional Journey
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg overflow-hidden cursor-pointer relative"
                  whileHover={{ scale: 1.05, rotateY: 10 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-blue-400">
                      {project.title}
                    </h3>
                    <p className="text-yellow-400 mb-1">{project.company}</p>
                    <p className="text-sm text-gray-400 mb-4">
                      {project.period}
                    </p>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Tech Stack Section */}
        <motion.section
          className="py-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Toolbox</h2>
            <p className="text-center mb-8 text-gray-400">
              Tools and technologies that I am familiar with...
            </p>
            <motion.div
              className="flex flex-wrap justify-center items-center gap-8"
              animate={toolboxControls}
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-center w-24 h-24 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <tech.icon className="text-3xl text-blue-400 mb-2" />
                  <span className="text-xs text-gray-300 text-center">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Work Experience Section */}
        <motion.section
          className="py-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-green-400">
              Work Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="flex items-start">
                    <FaBriefcase className="text-3xl text-green-400 mr-4 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-blue-400">
                        {exp.title}
                      </h3>
                      <p className="text-yellow-400 mb-1">{exp.company}</p>
                      <p className="text-sm text-gray-400 mb-4">{exp.period}</p>
                      <p className="text-gray-300">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Achievements Section */}
        <motion.section
          className="py-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-teal-400">
              Accolades & Triumphs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg"
                  initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                >
                  <FaTrophy className="text-4xl text-yellow-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300 mb-2">
                    {achievement.description}
                  </p>
                  <p className="text-sm text-yellow-400">{achievement.year}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Footer Section */}
        <footer className="py-8 bg-gray-800 bg-opacity-50">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-400">
              © 2024 Saugat Neupane. All rights reserved.
            </p>
            <div className="mt-4 flex justify-center space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <link.icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

import {

  FaGraduationCap,   // ✅ Add this
  FaBriefcase,
  FaUniversity
} from "react-icons/fa";
import { Tooltip, tooltipClasses } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import React from "react";
import Tilt from 'react-parallax-tilt';
import { Tooltip as MuiTooltip } from "@mui/material";
import { FaPencilRuler, FaCode, FaBug, FaRocket } from "react-icons/fa";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Link } from "react-router-dom";
import heroImage from "./assets/hero-image.jpg";
import projectImage from "./assets/project.jpg";
import experienceImage from "./assets/experience.jpg";
import barclaysLogo from "./assets/barclays.png";
import asuLogo from "./assets/ASU-logo.png";
import spendSecure from "./assets/spendsec.jpg";
import crime from "./assets/kg.gif";
import facial from "./assets/face.gif";
import grievance from "./assets/grievance.png";
import dev from "./assets/devlang.jpg";
import mockito from "./assets/mockito.png";
import javaLogo from "./assets/java.webp";
import pythonLogo from "./assets/python.png";
import jsLogo from "./assets/javascript.webp";
import cLogo from "./assets/c.webp";
import cppLogo from "./assets/cplusplus.png";
import htmlLogo from "./assets/html.png";
import cssLogo from "./assets/css.png";
import reactLogo from "./assets/react.png";
import springBootLogo from "./assets/sprintboot.png";
import restLogo from "./assets/rest.png";
import soapLogo from "./assets/soap.png";
import mysqlLogo from "./assets/mysql.png";
import postgresLogo from "./assets/postgres.webp";
import mongoLogo from "./assets/mongo.png";
import awsLogo from "./assets/aws.png";
import grad from "./assets/grad1.png";
import dockerLogo from "./assets/docker.png";
import kubernetesLogo from "./assets/kubernetes.svg";
import githubLogo from "./assets/github.png";
import jenkinsLogo from "./assets/jenkins.png";
import gradleLogo from "./assets/gradle.png";
import ansibleLogo from "./assets/ansible.png";
import jiraLogo from "./assets/jira.png";
import confluenceLogo from "./assets/confluence.svg";
import linuxLogo from "./assets/linux.svg";
import shellLogo from "./assets/shell.png";
import junitLogo from "./assets/junit.png";
import cucumberLogo from "./assets/cucumber.png";
import karateLogo from "./assets/karate.png";
import tddLogo from "./assets/tdd.png";
import bddLogo from "./assets/bdd.png";
import agileLogo from "./assets/agile.jpg";

import logoImage from "./assets/my-logo.jpg";
import "./index.css"; // Make sure this file includes Tailwind CSS with dark mode enabled

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PortfolioLanding />
  </React.StrictMode>
);
function generateNonOverlappingNotes(noteTexts, containerWidth, containerHeight, noteSize = 144, minDistance = 60) {
  const positions = [];

  const generatePosition = () => ({
    top: Math.floor(Math.random() * (containerHeight - noteSize)),
    left: Math.floor(Math.random() * (containerWidth - noteSize)),
    rotate: `${Math.floor(Math.random() * 10 - 5)}deg`,
  });

  for (let i = 0; i < noteTexts.length; i++) {
    let newPos;
    let attempts = 0;
    do {
      newPos = generatePosition();
      attempts++;
    } while (
      positions.some(
        (p) =>
          Math.abs(p.top - newPos.top) < minDistance &&
          Math.abs(p.left - newPos.left) < minDistance
      ) && attempts < 100
    );

    positions.push(newPos);
  }

  return noteTexts.map((text, i) => ({
    id: i,
    text,
    color: ["bg-yellow-200", "bg-pink-200", "bg-green-200", "bg-blue-200"][i % 4],
    ...positions[i],
  }));
}
export default function PortfolioLanding() {
const milestones = generateNonOverlappingNotes(
                     [
                       "Java + Spring Boot",
                       "CI/CD | Docker",
                       "AWS | Cloud",
                       "React + TypeScript",
                       "PostgreSQL | MongoDB",
                       "Security First Dev",
                     ],
                     500, // width
                     500  // height
                   );
   const journeyItems = [
      {
        icon: <FaUniversity className="text-cyan-400 text-2xl" />,
        title: "MS in Software Engineering - Arizona State University",
        location: "Tempe, AZ, USA",
        date: "January 2024 – Present",
        tooltip: "Pursuing MS in Software Engineering with 3.85 GPA. Focused on scalable systems, testing, and software architecture.",
        year: "2024"
      },
      {
        icon: <FaBriefcase className="text-blue-400 text-2xl" />,
        title: "Software Developer - Barclays",
        location: "Pune, India",
        date: "July 2019 – November 2023",
        tooltip: "Built scalable Java backend systems, 20+ APIs, OAuth 2.0/JWT security, and led automation & cloud CI/CD integration.",
        year: "2019"
      },
      {
        icon: <FaGraduationCap className="text-purple-400 text-2xl" />,
        title: "Bachelor of Engineering - Information Technology",
        location: "Cummins College of Engineering for Women (Pune University), India",
        date: "July 2015 – May 2019",
        tooltip: "Graduated with distinction. Gained strong foundations in DSA, built a grievance redressal portal for the college, and published a deep learning paper at ICCIP 2019",
        year: "2015"
      }
    ];


const [scatteredNotes, setScatteredNotes] = useState([]);
const ThemedTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    background: 'linear-gradient(135deg, #7f1dff, #06b6d4)',
    color: '#fff',
    fontSize: '0.85rem',
    fontWeight: 500,
    padding: '10px 14px',
    borderRadius: '8px',
    boxShadow: '0 0 12px rgba(129, 140, 248, 0.5)',
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: '#7f1dff',
  },
}));
useEffect(() => {
  const scattered = stickyNotes.map((note) => {
    const top = Math.floor(Math.random() * 60) + 10; // keeps it within visible area
    const left = Math.floor(Math.random() * 60) + 10;
    const rotate = Math.random() * 30 - 15;
    return {
      ...note,
      top: `${top}%`,
      left: `${left}%`,
      rotate: `${rotate}deg`,
    };
  });
  setScatteredNotes(scattered);
}, []);

const [currentIndex, setCurrentIndex] = useState(0);

const titles = [
  "Software Developer",
  "Scalable Systems Builder",
  "API Development Expert",
  "Full-Cycle Engineer",
  "Microservices Specialist"
];

const [open, setOpen] = useState(null);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % titles.length);
  }, 2500); // change every 2.5s
  return () => clearInterval(interval);
}, []);
const stickyNotes = [

   { id: 3, text: "Lifelong Learner 📚", color: "bg-pink-300" },
   { id: 4, text: "Commits clean code and good energy ✅", color: "bg-orange-300" },
   { id: 7, text: "Writes tests that scream 😱", color: "bg-green-300" },
   { id: 6, text: "Teamwork makes the merge work 👯‍♀️", color: "bg-blue-300" },
   { id: 9, text: "Solving bugs > solving puzzles", color: "bg-purple-300" },
  { id: 9, text: "Always sending the right response 200 OK ✅", color: "bg-yellow-300" },
  { id: 10, text: "Writes code. Then rewrites it. 🔄", color: "bg-lime-300" },
];
  const skills = [
    { name: "Java", logo: javaLogo },  { name: "Python", logo: pythonLogo },
                                          { name: "JavaScript", logo: jsLogo },
                                          { name: "C", logo: cLogo },
                                          { name: "C++", logo: cppLogo },
                                          { name: "HTML", logo: htmlLogo },
                                          { name: "CSS", logo: cssLogo },
                                          { name: "React", logo: reactLogo },
                                          { name: "Spring Boot", logo: springBootLogo },
                                          { name: "REST APIs", logo: restLogo },
                                          { name: "SOAP APIs", logo: soapLogo },
                                          { name: "MySQL", logo: mysqlLogo },
                                          { name: "PostgreSQL", logo: postgresLogo },
                                          { name: "MongoDB", logo: mongoLogo },
                                          { name: "AWS", logo: awsLogo },
                                          { name: "Docker", logo: dockerLogo },
                                          { name: "Kubernetes", logo: kubernetesLogo },
                                          { name: "GitHub", logo: githubLogo },
                                          { name: "Jenkins", logo: jenkinsLogo },
                                          { name: "Gradle", logo: gradleLogo },
                                          { name: "Ansible", logo: ansibleLogo },
                                          { name: "Jira", logo: jiraLogo },
                                          { name: "Linux", logo: linuxLogo },
                                          { name: "Shell Scripting", logo: shellLogo },
                                          { name: "JUnit", logo: junitLogo },
                                          { name: "Cucumber", logo: cucumberLogo },
                                          { name: "Karate", logo: karateLogo },
                                          { name: "TDD", logo: tddLogo },
                                          { name: "BDD", logo: bddLogo },
                                          { name: "Agile", logo: agileLogo },
                                          { name: "Mockito", logo: mockito }
  ];

  const skillsCloud = [
      { name: "Java", logo: javaLogo },
      { name: "Spring Boot", logo: springBootLogo },
      { name: "Gradle", logo: grad },
      { name: "JUnit", logo: junitLogo },
      { name: "Cucumber", logo: cucumberLogo },
      { name: "Karate", logo: karateLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongoLogo },
      { name: "Jenkins", logo: jenkinsLogo },
      { name: "React", logo: reactLogo },
      { name: "Docker", logo: dockerLogo },
      { name: "Kubernetes", logo: kubernetesLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "AWS", logo: awsLogo }
    ];

  const projects = [
      {
        title: 'SpendSecure: Smart expense tracker',
        desc: 'SpendSecure is a full-stack fintech app that tracks user expenses and uses machine learning to detect anomalies or potential fraud. Built with React, Spring Boot, SQL, and Python (ML), it demonstrates secure, scalable system design with real-time financial insights.',
        tech: ['Spring Boot', 'React', 'JWT', 'REST API', 'MySQL', 'AWS EC2', 'Maven', 'Postman'],
        image: spendSecure,
        link: 'https://github.com/joshikalyani/SpendSecure'
      },
      {
        title: 'CrimeWare: Crime Data Dashboard',
        desc: 'Crime Data Visualization Platform is a React and Flask-based dashboard that displays real-time crime statistics. It features a REST API for efficient data retrieval from GraphDB using SPARQL.',
        tech: ['React', 'GraphDB', 'REST API', 'Python', 'Pandas', 'JavaScript'],
        image: crime,
        link: 'https://github.com/joshikalyani/crime-data-visualization'
      },
      {
        title: 'DEVLang – Custom Programming Language',
        desc: 'DevLANG is a custom programming language inspired by Java and C, developed at Arizona State University (March-May 2024). It features a lexer (built with ANTLR), compiler, and interpreter.',
        tech: ['ANTLR', 'Prolog', 'Definite Clause Grammar'],
        image: dev,
        link: 'https://github.com/joshikalyani/DevLang'
      },
      {
        title: 'Real Time Facial Expression Recognition System',
        desc: 'Engineered an AI-driven emotion detection system using deep learning and convolutional neural networks to accurately identify human facial expressions. Published in ICCIP-2019.',
        tech: ['Python', 'TensorFlow/Keras', 'OpenCV', 'CNN', 'Deep Learning'],
        image: facial,
        link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3421486',
        isResearchPaper: true

      },
      {

          title: 'Grievance Management System',
          desc: 'Developed a centralized grievance management system for college websites, enabling secure complaint submission, tracking, and resolution.',
          tech: ['HTML', 'CSS', 'PHP', 'JavaScript', 'MySQL'],
          image: grievance


      }
    ];

 const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);



  return (
    <div className="min-h-screen transition-colors duration-500 bg-white text-black dark:bg-black dark:text-white">

     <header className="fixed top-0 left-0 w-full z-50 px-8 py-4 bg-gradient-to-r from-black to-purple-900 backdrop-blur-md shadow-md flex justify-between items-center">
       <img src={logoImage} alt="Logo" className="h-10 w-auto" />

       <div className="flex items-center space-x-6">
         <nav className="hidden md:flex space-x-6 text-base font-medium">
           <a href="#profile" className="text-white hover:text-pink-600 transition">Profile</a>
           <a href="#journey" className="text-white hover:text-pink-600 transition">My Journey</a>
           <a href="#about" className="text-white hover:text-pink-600 transition">About</a>
           <a href="#skills" className="text-white hover:text-pink-600 transition">Skills</a>
           <a href="#experience" className="text-white hover:text-pink-600 transition">Experience</a>
           <a href="#projects" className="text-white hover:text-pink-600 transition">Projects</a>
         </nav>
       </div>
     </header>


   <section
        id="profile"
        className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-16 px-6 py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden"
      >
        {/* Left: Hero Text */}
        <div className="text-center md:text-left md:w-1/2 space-y-6 z-10">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 animate-pulse">
              Kalyani Joshi
            </span>
          </h1>
         <div className="text-xl text-cyan-300 font-medium h-[2.5rem] transition-opacity duration-500 ease-in-out tracking-wide">

           <motion.span
             key={titles[currentIndex]}
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 0.5 }}
           >
             {titles[currentIndex]}
           </motion.span>
         </div>
          <p className="text-md text-gray-400">
            I love building systems that solve real problems. Thanks for visiting my
            portfolio!{" "}
            <span className="text-yellow-400 font-semibold">Happy coding..!</span>
          </p>
          <div className="flex items-center space-x-4">
                   <a
                     href="#about"
                     className="inline-block px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-semibold transition"
                   >
                     More About Me
                   </a>
                   <a
                     href="/Kalyani_Joshi_Software_Dev.pdf"
                     download
                     className="inline-block px-6 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-full text-white font-semibold transition"
                   >
                     Download My Resume
                   </a>
                 </div>
        </div>

        {/* Right: Neon Sticky Notes */}
           <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] z-10">
                  {scatteredNotes.map((note, i) => (
                    <motion.div
                      key={note.id + '-' + i}
                      drag
                      dragElastic={0.6}
                      whileTap={{ scale: 1.05 }}
                      className={`absolute p-4 w-36 h-36 rounded-lg shadow-xl border-2 border-white text-black font-semibold ${note.color}`}
                      style={{
                        top: note.top,
                        left: note.left,
                        rotate: note.rotate,
                        cursor: "grab",
                      }}
                      whileHover={{ scale: 1.07 }}
                      animate={{
                        y: [0, -6, 0],
                        transition: {
                          duration: 2 + Math.random(),
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                    >
                      <span className="block text-sm text-center break-words text-gray-900">
                        {note.text}
                      </span>
                    </motion.div>
                  ))}

                </div>

      </section>



 <section id="about" className="py-24 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 animate-pulse">
            About Me
          </h2>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 bg-gradient-to-br from-gray-800/40 via-black/30 to-gray-800/40 p-8 rounded-xl shadow-2xl">
            <motion.img
              src={heroImage}
              alt="Kalyani Joshi"
              className="w-64 sm:w-72 h-[420px] object-cover rounded-2xl border-4 border-purple-500 shadow-[0_0_20px_2px_rgba(168,85,247,0.6)] hover:shadow-[0_0_30px_6px_rgba(34,211,238,0.7)] transition duration-500"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            />


            <motion.div
              className="text-lg leading-relaxed text-gray-300 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-gray-100 text-xl font-medium border-l-4 border-purple-500 pl-4 italic">
                A curious engineer with 4 years of professional experience as a Software Developer and a proud graduate student at Arizona State University. I love building secure, testable, and scalable systems that make life easier and more efficient. I'm not just a code ninja—I’m a bug whisperer who refuses to leave the screen until the last semicolon behaves.
              </p>
              <p className="mt-6 text-lg bg-gradient-to-r from-purple-800/20 via-cyan-800/20 to-transparent p-4 rounded-md shadow-inner">
                To me, being a software engineer is about solving real problems, not just compiling code. I believe in the magic of continuous learning, the power of great communication, and the thrill of turning
                <span className="text-yellow-400 font-semibold"> "why is this not working?!" </span>
                into
                <span className="text-green-400 font-semibold"> "heck yes, nailed it!"</span>
              </p>
              <p className="mt-4 text-base text-gray-400">
                Feel free to <span className="text-cyan-400 font-semibold">connect with me on LinkedIn</span> or <span className="text-cyan-400 font-semibold">drop me an email</span> — I’d love to hear from you!
              </p>

              <div className="mt-6 flex gap-6 text-3xl">
                <a
                  href="https://github.com/joshikalyani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition hover:scale-110"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/kalyanijoshi23/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition hover:scale-110"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  href="mailto:joshik2301@gmail.com"
                  className="hover:text-white transition hover:scale-110"
                >
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
{/* <section id="journey" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white"> */}
{/*   <div className="mt-10 h-1 w-full bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 opacity-30 shadow-md blur-sm"></div> */}

{/*   <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-400 animate-pulse"> */}
{/*     My Journey */}
{/*   </h2> */}

{/*   <div className="max-w-5xl mx-auto relative"> */}
{/*      */}{/* Vertical timeline line */}
{/*     <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-purple-500/30 z-0"></div> */}

{/*     <div className="space-y-16 relative z-10"> */}
{/*       {[ */}
{/*         { */}
{/*           icon: <FaUniversity className="text-cyan-400 text-2xl" />, */}
{/*           title: "MS in Software Engineering - Arizona State University", */}
{/*           location: "Tempe, AZ, USA", */}
{/*           date: "January 2024 – Present", */}
{/*           tooltip: "Pursuing MS in Software Engineering with 3.85 GPA. Focused on scalable systems, testing, and software architecture.", */}
{/*           year: "2024" */}
{/*         }, */}
{/*         { */}
{/*           icon: <FaBriefcase className="text-blue-400 text-2xl" />, */}
{/*           title: "Software Developer - Barclays", */}
{/*           location: "Pune, India", */}
{/*           date: "July 2019 – November 2023", */}
{/*           tooltip: "Built scalable Java backend systems, 20+ APIs, OAuth 2.0/JWT security, and led automation & cloud CI/CD integration.", */}
{/*           year: "2019" */}
{/*         }, */}
{/*         { */}
{/*           icon: <FaGraduationCap className="text-purple-400 text-2xl" />, */}
{/*           title: "Bachelor of Engineering - Information Technology", */}
{/*           location: "Cummins College of Engineering for Women (Pune University), India", */}
{/*           date: "July 2015 – May 2019", */}
{/*           tooltip: "Graduated with distinction. Gained strong foundations in DSA, built a grievance redressal portal for the college, and published a deep learning paper at ICCIP 2019", */}
{/*           year: "2015" */}
{/*         } */}
{/*       ].map((item, idx) => ( */}
{/*         <div key={idx} className="relative flex items-center md:items-start"> */}
{/*            */}{/* Year tag - absolutely positioned aligned with center line */}
{/*           <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"> */}
{/*             <span className="px-2 py-1 bg-purple-800 text-xs text-white rounded-full shadow-md">{item.year}</span> */}
{/*           </div> */}

{/*           <motion.div */}
{/*             className={`relative flex items-start gap-6 p-6 rounded-xl shadow-lg bg-gray-800/60 z-10 md:w-1/2 ${ */}
{/*               idx % 2 === 0 ? 'md:ml-[52%] pl-8' : 'md:mr-[52%] pr-8' */}
{/*             }`} */}
{/*             initial={{ opacity: 0, x: idx % 2 === 0 ? 60 : -60 }} */}
{/*             whileInView={{ opacity: 1, x: 0 }} */}
{/*             transition={{ duration: 0.6, delay: idx * 0.2 }} */}
{/*           > */}
{/*             <div className="flex-shrink-0 mt-1">{item.icon}</div> */}

{/* <motion.div layout="position"> */}
{/*   <ThemedTooltip */}
{/*     title={item.tooltip} */}
{/*     arrow */}
{/*     open={open === idx} */}
{/*     onClose={() => setOpen(null)} */}
{/*     disableFocusListener */}
{/*     disableTouchListener */}
{/*     PopperProps={{ disablePortal: true }} */}
{/*   > */}
{/*     <div */}
{/*       onMouseEnter={() => { */}
{/*         if (open !== idx) setOpen(idx); */}
{/*       }} */}
{/*       onMouseLeave={() => { */}
{/*         if (open === idx) setOpen(null); */}
{/*       }} */}
{/*     > */}
{/*       <h3 className="text-lg font-semibold text-white">{item.title}</h3> */}
{/*       <p className="text-sm text-gray-400">{item.location}</p> */}
{/*       <p className="text-xs text-gray-500">{item.date}</p> */}
{/*     </div> */}
{/*   </ThemedTooltip> */}
{/* </motion.div> */}
{/*           </motion.div> */}
{/*         </div> */}
{/*       ))} */}
{/*     </div> */}
{/*   </div> */}
{/* </section> */}
<section id="journey" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="mt-10 h-1 w-full bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 opacity-30 shadow-md blur-sm"></div>

      <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-400 animate-pulse">
        My Journey
      </h2>

      <div className="max-w-5xl mx-auto relative">
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-purple-500/30 z-0"></div>

        <div className="space-y-16 relative z-10">
          {journeyItems.map((item, idx) => (
            <div key={idx} className="relative flex items-center md:items-start">
              {/* Year badge on center line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <span className="px-2 py-1 bg-purple-800 text-xs text-white rounded-full shadow-md">
                  {item.year}
                </span>
              </div>

              <motion.div
                className={`relative flex items-start gap-6 p-6 rounded-xl shadow-lg bg-gray-800/60 z-10 md:w-1/2 ${
                  idx % 2 === 0 ? 'md:ml-[52%] pl-8' : 'md:mr-[52%] pr-8'
                }`}
                initial={{ opacity: 0, x: idx % 2 === 0 ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <div className="flex-shrink-0 mt-1">{item.icon}</div>

                <MuiTooltip
                  title={item.tooltip}
                  arrow
                  open={open === idx}
                  onClose={() => setOpen(null)}
                  disableFocusListener
                  disableTouchListener
                  enterDelay={100}
                  leaveDelay={300}
                >
                  <div
                    onMouseEnter={() => setOpen(idx)}
                    onMouseLeave={() => setOpen(null)}
                    className="cursor-default"
                  >
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.location}</p>
                    <p className="text-xs text-gray-500">{item.date}</p>
                  </div>
                </MuiTooltip>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
{/*       <section id="journey" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white"> */}
{/*         <div className="mt-10 h-1 w-full bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 opacity-30 shadow-md blur-sm"></div> */}

{/*         <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-400 animate-pulse"> */}
{/*           My Journey */}
{/*         </h2> */}

{/*         <div className="max-w-5xl mx-auto relative"> */}
{/*            */}{/* Vertical timeline line */}
{/*           <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-purple-500/30 z-0"></div> */}

{/*           <div className="space-y-16 relative z-10"> */}
{/*             {[ */}
{/*               { */}
{/*                 icon: <FaUniversity className="text-cyan-400 text-2xl" />, */}
{/*                 title: "MS in Software Engineering - Arizona State University", */}
{/*                 location: "Tempe, AZ, USA", */}
{/*                 date: "January 2024 – Present", */}
{/*                 tooltip: "Pursuing MS in Software Engineering with 3.85 GPA. Focused on scalable systems, testing, and software architecture.", */}
{/*                 year: "2024" */}
{/*               }, */}
{/*               { */}
{/*                 icon: <FaBriefcase className="text-blue-400 text-2xl" />, */}
{/*                 title: "Software Developer - Barclays", */}
{/*                 location: "Pune, India", */}
{/*                 date: "July 2019 – November 2023", */}
{/*                 tooltip: "Built scalable Java backend systems, 20+ APIs, OAuth 2.0/JWT security, and led automation & cloud CI/CD integration.", */}
{/*                 year: "2019" */}
{/*               }, */}
{/*               { */}
{/*                 icon: <FaGraduationCap className="text-purple-400 text-2xl" />, */}
{/*                 title: "Bachelor of Engineering - Information Technology", */}
{/*                 location: "Cummins College of Engineering for Women (Pune University), India", */}
{/*                 date: "July 2015 – May 2019", */}
{/*                 tooltip: "Graduated with distinction. Gained strong foundations in DSA, built a grievance redressal portal for the college, and published a deep learning paper at ICCIP 2019", */}
{/*                 year: "2015" */}
{/*               } */}
{/*             ].map((item, idx) => ( */}
{/*               <motion.div */}
{/*                 key={idx} */}
{/*                 className={`relative flex items-start gap-6 p-6 rounded-xl shadow-lg bg-gray-800/60 z-10 md:w-1/2 ${ */}
{/*                   idx % 2 === 0 ? 'md:ml-[52%] pl-8' : 'md:mr-[52%] pr-8' */}
{/*                 }`} */}
{/*                 initial={{ opacity: 0, x: idx % 2 === 0 ? 60 : -60 }} */}
{/*                 whileInView={{ opacity: 1, x: 0 }} */}
{/*                 transition={{ duration: 0.6, delay: idx * 0.2 }} */}
{/*               > */}
{/*                 <div className="flex-shrink-0 mt-1">{item.icon}</div> */}
{/*                 <motion.div layout="position"> */}
{/*                 <ThemedTooltip title={item.tooltip} arrow> */}
{/*                   <div> */}
{/*                     <h3 className="text-lg font-semibold text-white">{item.title}</h3> */}
{/*                     <p className="text-sm text-gray-400">{item.location}</p> */}
{/*                     <p className="text-xs text-gray-500">{item.date}</p> */}
{/*                   </div> */}
{/*                 </ThemedTooltip> */}
{/*                 </motion.div> */}

{/*                  */}{/* Year tag to the left of the card */}
{/*                 <div className={`absolute top-1/2 transform -translate-y-1/2 hidden md:block ${ */}
{/*                   idx % 2 === 0 ? '-left-16' : '-right-16' */}
{/*                 }`}> */}
{/*                   <span className="px-2 py-1 bg-purple-800 text-xs text-white rounded-full shadow-md">{item.year}</span> */}
{/*                 </div> */}
{/*               </motion.div> */}
{/*             ))} */}
{/*           </div> */}
{/*         </div> */}
{/*       </section> */}


<section id="skills" className="py-24 px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white">
  <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-400 animate-pulse">
      Tech Stack
    </h2>

  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
    {[
      {
        title: "Languages & Frameworks",
        items: ["Java", "Python", "JavaScript", "C", "C++", "HTML", "CSS", "React", "Spring Boot"]
      },
      {
        title: "DevOps & Cloud",
        items: ["AWS", "Docker", "Kubernetes", "GitHub", "Jenkins", "Gradle", "Ansible", "Linux", "Shell Scripting"]
      },
      {
        title: "Databases & APIs",
        items: ["MySQL", "PostgreSQL", "MongoDB", "REST APIs", "SOAP APIs"]
      },
      {
        title: "Testing & Project Tools",
        items: ["JUnit","Mockito", "Cucumber", "Karate", "TDD", "BDD", "Jira", "Agile"]
      }
    ].map((group, index) => (
      <motion.div
        key={index}
        className="rounded-2xl border border-purple-800/40 bg-white/5 backdrop-blur-md p-6 shadow-md hover:shadow-purple-400/30 transition"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">
          {group.title}
        </h3>
        <div className="flex flex-wrap gap-6">
          {skills
            .filter((s) => group.items.includes(s.name))
            .map((skill, i) => (
              <div
                key={i}
                className="flex flex-col items-center w-20 hover:scale-105 transition duration-200"
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-12 h-12 object-contain"
                />
                <span className="mt-2 text-sm text-gray-300 text-center">{skill.name}</span>
              </div>
            ))}
        </div>
      </motion.div>
    ))}
  </div>
</section>








{/*       <section id="skills" className="py-20 bg-white px-6 overflow-hidden"> */}
{/*             <h2 className="text-4xl font-bold text-center mb-10 neon-text">Skills</h2> */}
{/*             <div className="w-full overflow-hidden"> */}
{/*               <motion.div */}
{/*                 className="flex space-x-10 animate-scroll inline-flex" */}
{/*                 initial={{ x: 0 }} */}
{/*                 animate={{ x: [0, -1000] }} */}
{/*                 transition={{ repeat: Infinity, duration: 30, ease: "linear" }} */}
{/*               > */}
{/*                 {[...skills, ...skills].map((skill, index) => ( */}
{/*                   <div */}
{/*                     key={index} */}
{/*                     className="flex flex-col items-center justify-center text-center" */}
{/*                   > */}
{/*                     <img */}
{/*                       src={skill.logo} */}
{/*                       alt={skill.name} */}
{/*                       loading="lazy" */}
{/*                       className="w-16 h-16 md:w-20 md:h-20 object-contain mb-2" */}
{/*                     /> */}
{/*                     <span className="text-lg md:text-xl font-semibold text-gray-800"> */}
{/*                       {skill.name} */}
{/*                     </span> */}
{/*                   </div> */}
{/*                 ))} */}
{/*               </motion.div> */}
{/*             </div> */}
{/*           </section> */}



{/* <section id="skills" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black px-6"> */}
{/* <div className="mt-10 h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-30 shadow-md blur-sm"></div> */}


{/*   <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 animate-pulse"> */}
{/*     Skills */}
{/*   </h2> */}

{/*   <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-10 max-w-6xl mx-auto"> */}
{/*     {skills.map((skill, index) => ( */}
{/*       <motion.div */}
{/*         key={index} */}
{/*         className="flex flex-col items-center justify-center text-center" */}
{/*         initial={{ opacity: 0, y: 20 }} */}
{/*         whileInView={{ opacity: 1, y: 0 }} */}
{/*         transition={{ duration: 0.4, delay: index * 0.05 }} */}
{/*         viewport={{ once: true }} */}
{/*       > */}
{/*         <img */}
{/*           src={skill.logo} */}
{/*           alt={skill.name} */}
{/*           className="w-16 h-16 md:w-20 md:h-20 object-contain mb-2 transition duration-300" */}
{/*         /> */}
{/*         <span className="text-sm md:text-base font-medium text-white"> */}
{/*           {skill.name} */}
{/*         </span> */}
{/*       </motion.div> */}
{/*     ))} */}
{/*   </div> */}
{/* </section> */}

<section id="experience" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
  <div className="mt-10 h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-30 shadow-md blur-sm"></div>

  <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500 animate-pulse">
    Experience
  </h2>

  <div className="max-w-6xl mx-auto grid md:grid-cols-1 gap-12">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-800/60 backdrop-blur-md rounded-xl p-8 shadow-xl relative overflow-hidden"
    >
      <div className="flex items-center gap-4 mb-6">
        <img src={barclaysLogo} alt="Barclays Logo" className="w-12 h-12 object-contain" />
        <div>
          <h3 className="text-xl font-bold text-cyan-400">Barclays</h3>
          <p className="text-sm text-gray-300 italic">Software Developer (2019 – 2023)</p>
        </div>
      </div>
      <ul className="list-disc list-inside text-gray-300 space-y-3">
        <li><span className="text-purple-300 font-medium">Built</span> robust backend services in Spring Boot that scaled efficiently, improving performance by <span className="text-green-400">30%</span>.</li>
        <li><span className="text-purple-300 font-medium">Delivered</span> 20+ production-ready REST APIs integrated with MySQL, PostgreSQL, and MongoDB.</li>
        <li><span className="text-purple-300 font-medium">Secured</span> APIs using OAuth 2.0 and JWS for compliance and protection.</li>
        <li><span className="text-purple-300 font-medium">Led</span> code reviews, mentored peers, and reduced bugs by <span className="text-green-400">25%</span>.</li>
        <li><span className="text-purple-300 font-medium">Resolved</span> incidents rapidly within SLA, improving uptime by <span className="text-green-400">20%</span>.</li>
        <li><span className="text-purple-300 font-medium">Integrated</span> SonarQube and Veracode for automated quality and security checks.</li>
        <li><span className="text-purple-300 font-medium">Achieved</span> <span className="text-green-400">95%</span>+ test coverage with JUnit and Karate.</li>
        <li><span className="text-purple-300 font-medium">Designed</span> internal React tools that saved <span className="text-green-400">30%</span>+ of operational effort.</li>
        <li><span className="text-purple-300 font-medium">Documented</span> APIs and flows to support scalable onboarding and debugging.</li>
        <li><span className="text-purple-300 font-medium">Collaborated</span> cross-functionally with DevOps, QA, and Product in Agile teams.</li>
      </ul>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center"
    >
      <div className="relative w-full max-w-4xl">
        <svg className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2" preserveAspectRatio="none">
          <line x1="5%" y1="50%" x2="95%" y2="50%" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
          </line>
        </svg>
        <div className="flex justify-between items-center py-10 relative z-10">
          <Tooltip title="Create clear, scalable solutions from scratch" arrow>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <FaPencilRuler className="text-2xl text-pink-400 mx-auto" />
              <div className="text-lg text-pink-400 font-bold mt-2">Design</div>
            </motion.div>
          </Tooltip>

          <Tooltip title="Translate design into robust code" arrow>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <FaCode className="text-2xl text-blue-400 mx-auto" />
              <div className="text-lg text-blue-400 font-bold mt-2">Build</div>
            </motion.div>
          </Tooltip>

          <Tooltip title="Ensure everything works perfectly" arrow>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <FaBug className="text-2xl text-yellow-400 mx-auto" />
              <div className="text-lg text-yellow-400 font-bold mt-2">Test</div>
            </motion.div>
          </Tooltip>

          <Tooltip title="Push features to users seamlessly" arrow>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <FaRocket className="text-2xl text-green-400 mx-auto" />
              <div className="text-lg text-green-400 font-bold mt-2">Deploy</div>
            </motion.div>
          </Tooltip>
        </div>

      </div>
    </motion.div>
  </div>
</section>


{/* <section */}
{/*   id="experience" */}
{/*   className="py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white" */}
{/* > */}
{/*   <div className="mt-10 h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-30 shadow-md blur-sm"></div> */}

{/*   <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500 animate-pulse"> */}
{/*     Experience */}
{/*   </h2> */}

{/*   <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start"> */}
{/*     Left: Barclays Experience Card */}
{/*     <motion.div */}
{/*       initial={{ opacity: 0, scale: 0.95 }} */}
{/*       whileInView={{ opacity: 1, scale: 1 }} */}
{/*       transition={{ duration: 0.6 }} */}
{/*       className="bg-gray-800/60 backdrop-blur-md rounded-xl p-8 shadow-xl relative overflow-hidden" */}
{/*     > */}
{/*       <div className="flex items-center gap-4 mb-6"> */}
{/*         <img */}
{/*           src={barclaysLogo} */}
{/*           alt="Barclays Logo" */}
{/*           className="w-12 h-12 object-contain" */}
{/*         /> */}
{/*         <div> */}
{/*           <h3 className="text-xl font-bold text-cyan-400">Barclays</h3> */}
{/*           <p className="text-sm text-gray-300 italic"> */}
{/*             Software Developer (2019 – 2023) */}
{/*           </p> */}
{/*         </div> */}
{/*       </div> */}
{/*       <ul className="list-disc list-inside text-gray-300 space-y-3"> */}
{/*         <li> */}
{/*           <span className="text-purple-300 font-medium">Built</span> robust backend services in Spring Boot that scaled efficiently, improving performance by <span className="text-green-400">30%</span>. */}
{/*         </li> */}
{/*         <li> */}
{/*           <span className="text-purple-300 font-medium">Delivered</span> 20+ production-ready REST APIs integrated with MySQL, PostgreSQL, and MongoDB. */}
{/*         </li> */}
{/*         <li> */}
{/*           <span className="text-purple-300 font-medium">Secured</span> APIs using OAuth 2.0 and JWS for compliance and protection. */}
{/*         </li> */}
{/*         <li> */}
{/*           <span className="text-purple-300 font-medium">Led</span> code reviews, mentored peers, and reduced bugs by <span className="text-green-400">25%</span>. */}
{/*         </li> */}
{/*         <li> */}
{/*           <span className="text-purple-300 font-medium">Resolved</span> incidents rapidly within SLA, improving uptime by <span className="text-green-400">20%</span>. */}
{/*         </li> */}
{/*         <li> */}
{/*           <span className="text-purple-300 font-medium">Integrated</span> SonarQube and Veracode for automated quality and security checks. */}
{/*         </li> */}
{/*         <li> */}
{/*           <span className="text-purple-300 font-medium">Achieved</span> <span className="text-green-400">95%</span>+ test coverage with JUnit and Karate. */}
{/*         </li> */}
{/*         <li> */}
{/*           <span className="text-purple-300 font-medium">Designed</span> internal React tools that saved <span className="text-green-400">30%</span>+ of operational effort. */}
{/*         </li> */}
{/*         <li> */}
{/*           <span className="text-purple-300 font-medium">Documented</span> APIs and flows to support scalable onboarding and debugging. */}
{/*         </li> */}
{/*         <li> */}
{/*           <span className="text-purple-300 font-medium">Collaborated</span> cross-functionally with DevOps, QA, and Product in Agile teams. */}
{/*         </li> */}
{/*       </ul> */}
{/*     </motion.div> */}

{/*     Right: Animated Career Timeline */}
{/*     <motion.div */}
{/*       initial={{ opacity: 0, x: 50 }} */}
{/*       whileInView={{ opacity: 1, x: 0 }} */}
{/*       transition={{ duration: 0.8 }} */}
{/*       className="flex flex-col items-center relative" */}
{/*     > */}
{/*       <div className="absolute w-1 h-full bg-gradient-to-b from-purple-500 via-cyan-400 to-blue-500 rounded-full blur-sm animate-pulse" /> */}

{/*       <div className="flex flex-col gap-6 z-10 pt-6"> */}
{/*         {milestones.map((item, i) => ( */}
{/*           <motion.div */}
{/*             key={i} */}
{/*             className="px-4 py-2 bg-gray-800 border border-purple-500 text-cyan-300 text-sm rounded-full shadow-md backdrop-blur-md" */}
{/*             initial={{ opacity: 0, y: 10 }} */}
{/*             whileInView={{ opacity: 1, y: 0 }} */}
{/*             transition={{ delay: i * 0.2, duration: 0.6 }} */}
{/*           > */}
{/*             {item} */}
{/*           </motion.div> */}
{/*         ))} */}
{/*       </div> */}
{/*     </motion.div> */}
{/*   </div> */}

{/*   Optional Design-Build-Test-Deploy Line (keep or remove) */}
{/*   <motion.div */}
{/*     initial={{ opacity: 0, y: 50 }} */}
{/*     whileInView={{ opacity: 1, y: 0 }} */}
{/*     transition={{ duration: 0.8 }} */}
{/*     className="flex justify-center mt-16" */}
{/*   > */}
{/*     <div className="relative w-full max-w-4xl"> */}
{/*       <svg */}
{/*         className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2" */}
{/*         preserveAspectRatio="none" */}
{/*       > */}
{/*         <line */}
{/*           x1="5%" */}
{/*           y1="50%" */}
{/*           x2="95%" */}
{/*           y2="50%" */}
{/*           stroke="#8b5cf6" */}
{/*           strokeWidth="2" */}
{/*           strokeDasharray="5,5" */}
{/*         > */}
{/*           <animate */}
{/*             attributeName="stroke-dashoffset" */}
{/*             values="0;10" */}
{/*             dur="2s" */}
{/*             repeatCount="indefinite" */}
{/*           /> */}
{/*         </line> */}
{/*       </svg> */}
{/*       <div className="flex justify-between items-center py-10 relative z-10"> */}
{/*         <Tooltip title="Create clear, scalable solutions from scratch" arrow> */}
{/*           <motion.div */}
{/*             className="text-center" */}
{/*             initial={{ opacity: 0, scale: 0.5 }} */}
{/*             whileInView={{ opacity: 1, scale: 1 }} */}
{/*             transition={{ duration: 0.8, delay: 0 }} */}
{/*             viewport={{ once: true }} */}
{/*           > */}
{/*             <FaPencilRuler className="text-2xl text-pink-400 mx-auto" /> */}
{/*             <div className="text-lg text-pink-400 font-bold mt-2">Design</div> */}
{/*           </motion.div> */}
{/*         </Tooltip> */}

{/*         <Tooltip title="Translate design into robust code" arrow> */}
{/*           <motion.div */}
{/*             className="text-center" */}
{/*             initial={{ opacity: 0, scale: 0.5 }} */}
{/*             whileInView={{ opacity: 1, scale: 1 }} */}
{/*             transition={{ duration: 0.8, delay: 0.4 }} */}
{/*             viewport={{ once: true }} */}
{/*           > */}
{/*             <FaCode className="text-2xl text-blue-400 mx-auto" /> */}
{/*             <div className="text-lg text-blue-400 font-bold mt-2">Build</div> */}
{/*           </motion.div> */}
{/*         </Tooltip> */}

{/*         <Tooltip title="Ensure everything works perfectly" arrow> */}
{/*           <motion.div */}
{/*             className="text-center" */}
{/*             initial={{ opacity: 0, scale: 0.5 }} */}
{/*             whileInView={{ opacity: 1, scale: 1 }} */}
{/*             transition={{ duration: 0.8, delay: 0.8 }} */}
{/*             viewport={{ once: true }} */}
{/*           > */}
{/*             <FaBug className="text-2xl text-yellow-400 mx-auto" /> */}
{/*             <div className="text-lg text-yellow-400 font-bold mt-2">Test</div> */}
{/*           </motion.div> */}
{/*         </Tooltip> */}

{/*         <Tooltip title="Push features to users seamlessly" arrow> */}
{/*           <motion.div */}
{/*             className="text-center" */}
{/*             initial={{ opacity: 0, scale: 0.5 }} */}
{/*             whileInView={{ opacity: 1, scale: 1 }} */}
{/*             transition={{ duration: 0.8, delay: 1.2 }} */}
{/*             viewport={{ once: true }} */}
{/*           > */}
{/*             <FaRocket className="text-2xl text-green-400 mx-auto" /> */}
{/*             <div className="text-lg text-green-400 font-bold mt-2">Deploy</div> */}
{/*           </motion.div> */}
{/*         </Tooltip> */}
{/*       </div> */}
{/*     </div> */}
{/*   </motion.div> */}
{/* </section> */}
<section id="projects" className="py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white">
  <div className="mt-10 h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-30 shadow-md blur-sm"></div>

  <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse">
    Projects
  </h2>

  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
    {projects.map(({ title, desc, tech = [], image, link, isResearchPaper }, index) => (
      <motion.div
        key={index}
        className="relative bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-700 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group max-w-[540px] mx-auto flex flex-col"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        {/* Image */}
        <div className="h-48 bg-white flex items-center justify-center overflow-hidden relative">
          <img
            src={image}
            alt={title}
            className="h-36 object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col justify-between flex-grow">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-cyan-300 group-hover:text-purple-400 transition-colors duration-300 mb-2">
              {title}
            </h3>

            <p className="text-sm text-gray-300 mb-4 leading-relaxed group-hover:scale-[1.01] transition-transform duration-300">
              {desc}
            </p>

            {tech.length > 0 && (
              <div className="mb-4">
                <span className="text-sm text-purple-400 font-medium italic">Built using:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {tech.map((t, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full text-cyan-200 bg-cyan-800/20 border border-cyan-500 transition cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Button */}
          {link && (
            <div className="pt-4 mt-auto">
              <Tooltip title={isResearchPaper ? 'View published paper' : 'View full code on GitHub'} arrow>
                <motion.a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#60A5FA",
                    color: "#1E3A8A",
                    boxShadow: "0px 0px 15px rgba(96,165,250,0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="text-sm text-blue-400 hover:text-blue-300 transition inline-flex items-center gap-1 bg-blue-500/10 px-3 py-2 rounded-full shadow-md"
                >
                  {isResearchPaper ? 'View my research paper →' : 'Dive into the code on GitHub →'}
                </motion.a>
              </Tooltip>
            </div>
          )}
        </div>
      </motion.div>
    ))}
  </div>
</section>




{/* <section id="projects" className="py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white"> */}
{/*   <div className="mt-10 h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-30 shadow-md blur-sm"></div> */}

{/*   <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse"> */}
{/*     Projects */}
{/*   </h2> */}

{/*   <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"> */}
{/*     {projects.map(({ title, desc, tech = [], image, link }, index) => ( */}
{/*       <motion.div */}
{/*         key={index} */}
{/*         className="relative bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-700 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group min-h-[500px] flex flex-col" */}
{/*         initial={{ opacity: 0, y: 40 }} */}
{/*         whileInView={{ opacity: 1, y: 0 }} */}
{/*         whileHover={{ scale: 1.03, rotate: 0.3 }} */}
{/*         transition={{ duration: 0.6, delay: index * 0.1 }} */}
{/*       > */}
{/*          */}{/* Image */}
{/*         <div className="h-52 bg-white flex items-center justify-center overflow-hidden relative"> */}
{/*           <img */}
{/*             src={image} */}
{/*             alt={title} */}
{/*             className="h-full w-full object-contain p-4 group-hover:scale-105 transition-transform duration-300" */}
{/*           /> */}
{/*         </div> */}

{/*          */}{/* Content */}
{/*         <div className="p-6 flex flex-col justify-between flex-grow"> */}
{/*           <div> */}
{/*             <h3 className="text-2xl font-bold text-cyan-300 group-hover:text-purple-400 transition-colors duration-300 mb-2"> */}
{/*               {title} */}
{/*             </h3> */}

{/*             <p className="text-sm text-gray-300 mb-4 leading-relaxed group-hover:scale-[1.01] transition-transform duration-300"> */}
{/*               {desc} */}
{/*             </p> */}

{/*             {tech.length > 0 && ( */}
{/*               <div className="mb-4"> */}
{/*                 <span className="text-sm text-purple-400 font-medium italic">Built using:</span> */}
{/*                 <div className="flex flex-wrap gap-2 mt-1"> */}
{/*                   {tech.map((t, i) => ( */}
{/*                     <motion.span */}
{/*                       key={i} */}
{/*                       className="px-3 py-1 text-xs rounded-full text-cyan-200 bg-cyan-800/20 border border-cyan-500 transition cursor-pointer" */}
{/*                       whileHover={{ scale: 1.15, rotate: [0, 3, -3, 0] }} */}
{/*                       animate={{ y: [0, -2, 0], opacity: [0.95, 1, 0.95] }} */}
{/*                       transition={{ repeat: Infinity, duration: 2, delay: i * 0.1 }} */}
{/*                     > */}
{/*                       {t} */}
{/*                     </motion.span> */}
{/*                   ))} */}
{/*                 </div> */}
{/*               </div> */}
{/*             )} */}
{/*           </div> */}

{/*            */}{/* Link Button */}
{/*           {link && ( */}
{/*             <div className="pt-4 mt-auto"> */}
{/*               <Tooltip title="Click to view full code on GitHub!" arrow> */}
{/*                 <motion.a */}
{/*                   href={link} */}
{/*                   target="_blank" */}
{/*                   rel="noopener noreferrer" */}
{/*                   whileHover={{ */}
{/*                     scale: 1.1, */}
{/*                     backgroundColor: "#60A5FA", */}
{/*                     color: "#1E3A8A", */}
{/*                     boxShadow: "0px 0px 15px rgba(96,165,250,0.5)" */}
{/*                   }} */}
{/*                   whileTap={{ scale: 0.95 }} */}
{/*                   className="text-sm text-blue-400 hover:text-blue-300 transition inline-flex items-center gap-1 bg-blue-500/10 px-3 py-2 rounded-full shadow-md" */}
{/*                 > */}
{/*                    Dive into the code on GitHub → */}
{/*                 </motion.a> */}
{/*               </Tooltip> */}
{/*             </div> */}
{/*           )} */}
{/*         </div> */}
{/*       </motion.div> */}
{/*     ))} */}
{/*   </div> */}
{/* </section> */}




 <footer className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 text-cyan-200 pt-12 pb-8 px-6 font-mono">
  <div className="w-full h-px mb-10 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-center md:text-left">
    {/* Left Content */}
    <div className="space-y-2">
      <h3 className="text-cyan-400 text-lg font-semibold tracking-wide">
        © 2025 Kalyani Joshi
      </h3>

    </div>

    {/* Center Message */}
    <div className="text-purple-300 text-sm md:text-base flex justify-center items-center animate-pulse">
      <span>Built with <code>console.log("️❤") </code> by Kalyani</span>
    </div>

    {/* Right Socials */}
    <div className="flex justify-center md:justify-end space-x-6 text-2xl">
      <a
        href="https://github.com/joshikalyani"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition hover:scale-110"
        title="GitHub"
      >
        <i className="fa-brands fa-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/kalyanijoshi23/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition hover:scale-110"
        title="LinkedIn"
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a
        href="mailto:joshik2301@gmail.com"
        className="hover:text-white transition hover:scale-110"
        title="Email"
      >
        <i className="fa-solid fa-envelope"></i>
      </a>
    </div>
  </div>

  <div className="mt-10 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent blur-sm"></div>
</footer>


    </div>
  );
}


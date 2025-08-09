"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Database,
  Palette,
  Smartphone,
  MapPin,
  Phone,
  Award,
  BookOpen,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ThemeToggle } from "@/components/theme-toggle";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const skills = [
  {
    name: "Frontend Development",
    icon: Code2,
    description: "HTML, CSS, JavaScript, React.js, Bootstrap, Tailwind CSS",
  },
  {
    name: "Backend Development",
    icon: Database,
    description: "Node.js, Express.js, MongoDB, Mongoose , Prisma, AWS", 
  },
  {
    name: "Programming Languages",
    icon: Palette,
    description: "Java, JavaScript, Redux, C, Cpp",
  },
  {
    name: "Developer Tools",
    icon: Smartphone,
    description: "VS Code, Dev C++, Git, GitHub, Postman ",
  },
];

const projects = [
  {
    title: "E-Shiksha – Full-Stack LMS",
    description:
      "Built a responsive platform for buying and studying courses, and for instructors to create and manage courses.",
    image: "/eShiksha.png?height=200&width=300",
    tech: ["React", "Node.js", "MongoDB", "Payment Gateway"],
    github: "https://github.com/mdshahbaz-9/E-Shiksha",
    live: "https://e-shiksha-v8yj.vercel.app/",
    features:
      "Role-based user access, course creation, secure payment gateway, analytics dashboard",
  },
  {
    title: "Aspire U - Website",
    description:
      "Developed a modern, responsive website for Aspire U, an educational platform, using React.js and Tailwind CSS.",
    image: "/aspireu.png?height=200&width=300",
    tech: ["React.js", "CSS", "TailwindCSS", "JavaScript", "React Router"],
    github: "https://github.com/mdshahbaz-9",
    live: "https://aspire-u.vercel.app/",
  },
  {
    title: "Ecommerce Website",
    description:
      "Built an Ecommerce website using ReactJs and Redux Toolkit with cart functionality.",
    image: "/placeholder.svg?height=200&width=300",
    tech: ["React", "Redux Toolkit", "JavaScript"],
    github: "#",
    live: "#",
  },
  // {
  //   title: "Ecommerce Website",
  //   description:
  //     "Built an Ecommerce website using ReactJs and Redux Toolkit with cart functionality.",
  //   image: "/placeholder.svg?height=200&width=300",
  //   tech: ["React", "Redux Toolkit", "JavaScript"],
  //   github: "#",
  //   live: "#",
  // },
  // {
  //   title: "Ecommerce Website",
  //   description:
  //     "Built an Ecommerce website using ReactJs and Redux Toolkit with cart functionality.",
  //   image: "/placeholder.svg?height=200&width=300",
  //   tech: ["React", "Redux Toolkit", "JavaScript"],
  //   github: "#",
  //   live: "#",
  // },
];

const moreProjects = [
  {
    title: "Eco-friendly Landing Page",
    description:
      "Landing page for eco-friendly website with modern design and responsive layout.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    live: "https://mdshahbaz-9.github.io/Landing-page-of-Eco-friendly-Website/",
  },
  {
    title: "Weather App",
    description:
      "Weather app using Vanilla JS and OpenWeather API showing weather based on location and user input.",
    tech: ["JavaScript", "API Integration", "HTML", "CSS"],
    live: "https://weather-app-rosy-psi-28.vercel.app/",
  },
  {
    title: "Todo List App",
    description:
      "Todo List Web Application using Vanilla JavaScript and Bootstrap with LocalStorage for data persistence.",
    tech: ["JavaScript", "Bootstrap", "LocalStorage", "DOM"],
    live: "#",
  },
];

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-primary hover:text-primary cursor-pointer transition-colors  "
              onClick={() => scrollToSection("about")}
            >
              Md Shahbaz
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="hover:text-primary transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-primary transition-colors"
              >
                Contact
              </button>
              <ThemeToggle />
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 pb-4 space-y-2"
            >
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left py-2 hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block w-full text-left py-2 hover:text-primary transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left py-2 hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left py-2 hover:text-primary transition-colors"
              >
                Contact
              </button>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero/About Section */}
      <section id="about" className="pt-24 pb-16 min-h-screen">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.div {...fadeInUp}>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Hi, I'm <span className="text-primary">Md Shahbaz</span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-muted-foreground mb-4">
                  Full Stack Developer
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  I'm looking towards challenging and responsible working
                  environment where I can serve and improve my knowledge and
                  skills for the betterment of the company and self.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/sh_Resume.pdf" download>
                    <Button size="lg" className="w-full sm:w-auto">
                      Download Resume
                    </Button>
                  </a>

                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                    asChild
                  >
                    <a
                      href="https://leetcode.com/u/Shahbaz01/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      LeetCode Profile
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20">
                  <img
                    src="/shz.jpg?height=320&width=320"
                    alt="Md Shahbaz Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full animate-pulse delay-1000"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skills & Expertise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="h-full overflow-hidden border-b-4 border-transparent hover:border-primary transition-all duration-300 group">
                    <CardHeader className="text-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit"
                      >
                        <skill.icon className="h-8 w-8 text-primary" />
                      </motion.div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {skill.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-center text-sm">
                        {skill.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </motion.div>

          {/* Main Projects */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-b-4 border-transparent hover:border-primary h-full">
                    <div className="relative overflow-hidden">
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        <Button size="sm" variant="secondary" asChild>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                        <Button size="sm" asChild>
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live
                          </a>
                        </Button>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                      {project.features && (
                        <p className="text-sm text-muted-foreground mt-2">
                          {project.features}
                        </p>
                      )}
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Projects */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              More Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {moreProjects.map((project, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 group"
                >
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors text-lg">
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-3 w-3 mr-2" />
                        View Project
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Education & Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-2 gap-8"
          >
            {/* Education */}
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">
                    Bachelor of Computer Application
                  </h4>
                  <p className="text-muted-foreground">
                    Aisect University, Hazaribagh (JH)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    2022 - 2025 | CGPA: 8.18
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Intermediate of Science</h4>
                  <p className="text-muted-foreground">
                    RM MM +2 HS Koderma (Jharkhand)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    2019 - 2021 | 70.4%
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="h-5 w-5 mr-2 text-primary" />
                  Achievements & Certificates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">
                    Tech Manager at TechFest (2024)
                  </h4>
                  <p className="text-muted-foreground">
                    Certificate of Appreciation from Aisect University
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Java Certification</h4>
                  <p className="text-muted-foreground">Great Learning</p>
                  <a
                    href="https://www.mygreatlearning.com/certificate/VFLVPUCD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm"
                  >
                    View Certificate
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold">Open Source Contributor</h4>
                  <p className="text-muted-foreground">
                    Contributing to GitHub projects for real-world experience
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear
              from you!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Card>
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Your Name" />
                  <Input placeholder="Your Email" type="email" />
                </div>
                <Input placeholder="Subject" />
                <Textarea placeholder="Your Message" rows={5} />
                <Button className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-background border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* About Column */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Md Shahbaz
                </h3>
                <p className="text-muted-foreground mb-4 max-w-md">
                  Full Stack Developer passionate about creating innovative web
                  solutions. Always eager to learn new technologies and
                  contribute to meaningful projects.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    <span>Koderma, Jharkhand, India</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-primary" />
                    <span>shahbaz05665@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-primary" />
                    <span>+91 7070849256</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <button
                      onClick={() => scrollToSection("about")}
                      className="hover:text-primary transition-colors"
                    >
                      About
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("skills")}
                      className="hover:text-primary transition-colors"
                    >
                      Skills
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("projects")}
                      className="hover:text-primary transition-colors"
                    >
                      Projects
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="hover:text-primary transition-colors"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold mb-4">Connect With Me</h4>
                <div className="space-y-3">
                  <motion.a
                    whileHover={{ scale: 1.05, x: 5 }}
                    href="https://github.com/mdshahbaz-9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5 mr-3" />
                    <span>GitHub</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05, x: 5 }}
                    href="https://linkedin.com/in/md-shahbaz-594451254"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-5 w-5 mr-3" />
                    <span>LinkedIn</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05, x: 5 }}
                    href="https://leetcode.com/u/Shahbaz01/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Code2 className="h-5 w-5 mr-3" />
                    <span>LeetCode</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05, x: 5 }}
                    href="mailto:shahbaz05665@gmail.com"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5 mr-3" />
                    <span>Email</span>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-muted-foreground text-sm mb-4 md:mb-0"
              >
                &copy; 2024 Md Shahbaz. All rights reserved. Built with ❤️ using
                React & Next.js
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4"
              >
                <Badge variant="outline" className="text-xs">
                  <Award className="h-3 w-3 mr-1" />
                   Full-Stack Developer
                </Badge>
                <Badge variant="outline" className="text-xs">
                  <BookOpen className="h-3 w-3 mr-1" />
                  Tech Enthusiast
                </Badge>
              </motion.div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

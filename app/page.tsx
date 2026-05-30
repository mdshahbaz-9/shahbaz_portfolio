// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Menu,
//   X,
//   Github,
//   Linkedin,
//   Mail,
//   ExternalLink,
//   Code2,
//   Database,
//   Palette,
//   Smartphone,
//   MapPin,
//   Phone,
//   Award,
//   BookOpen,
//   Trophy,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { ThemeToggle } from "@/components/theme-toggle";

// const fadeInUp = {
//   initial: { opacity: 0, y: 60 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.6 },
// };

// const staggerContainer = {
//   animate: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// const skills = [
//   {
//     name: "Frontend Development",
//     icon: Code2,
//     description: "HTML, CSS, JavaScript, React.js, Bootstrap, Tailwind CSS",
//   },
//   {
//     name: "Backend Development",
//     icon: Database,
//     description: "Node.js, Express.js, MongoDB, Mongoose , Prisma, AWS", 
//   },
//   {
//     name: "Programming Languages",
//     icon: Palette,
//     description: "Java, JavaScript, Redux, C, Cpp",
//   },
//   {
//     name: "Developer Tools",
//     icon: Smartphone,
//     description: "VS Code, Dev C++, Git, GitHub, Postman ",
//   },
// ];

// const projects = [
//    {
//     title: "Amconz Infra Services",
//     description:
//       "Corporate website for Amconz Infra Services — a facility management company in Punjab. Built with React + Vite, featuring service pages, project gallery, enquiry forms, and dark/light mode.",
//     image: "/amconz.png?height=200&width=300",
//     tech: ["React", "Redux Toolkit", "JavaScript, tailwindCSS"],
//     github: "#",
//     live: "https://www.amconzinfra.com/",
//   },
//   {
//     title: "E-Shiksha – Full-Stack LMS",
//     description:
//       "Built a responsive platform for buying and studying courses, and for instructors to create and manage courses.",
//     image: "/eShiksha.png?height=200&width=300",
//     tech: ["React", "Node.js", "MongoDB", "Payment Gateway"],
//     github: "https://github.com/mdshahbaz-9/E-Shiksha",
//     live: "https://e-shiksha-v8yj.vercel.app/",
//     features:
//       "Role-based user access, course creation, secure payment gateway, analytics dashboard",
//   },
//   {
//     title: "Aspire U - Website",
//     description:
//       "Developed a modern, responsive website for Aspire U, an educational platform, using React.js and Tailwind CSS.",
//     image: "/aspireu.png?height=200&width=300",
//     tech: ["React.js", "CSS", "TailwindCSS", "JavaScript", "React Router"],
//     github: "https://github.com/mdshahbaz-9",
//     live: "https://aspire-u.vercel.app/",
//   },
//   {
//     title: "Amit-azure", 
//     description:
//       "This web application is a professional portfolio / landing page hosted on Vercel that showcases your mobile shop web application, demonstrating a modern, responsive design with clean UI. It serves as a front-end presentation of your store, features, and offerings — perfect for impressing visitors and potential customers. The site likely includes sections such as:",
//     image: "/amit.png?height=200&width=300",
//     tech: ["React", "Redux Toolkit", "JavaScript"],
//     github: "https://github.com/mdshahbaz-9/mobile-store-webapp",
//     live: "https://amit-azure.vercel.app/",
//   },
//   {
//     title: "collegeXP",
//     description:
//       "🎓 A gamified MERN stack platform that guides students from coding basics to placement through 7 progressive levels with XP, streaks, badges, and an admin monitoring panel.",
//     image: "/collegexp.png?height=200&width=300",
//     tech: ["React.js, Node.js, Express.js, MongoDB, JWT, bcrypt, Axios"],
//     github: "https://github.com/mdshahbaz-9/CollegeXP-Gamified-Student-Placement-Portal-",
//     live: "https://college-xp.vercel.app/",
//   },
  
// ];

// const moreProjects = [
//   {
//     title: "Eco-friendly Landing Page",
//     description:
//       "Landing page for eco-friendly website with modern design and responsive layout.",
//     tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
//     live: "https://mdshahbaz-9.github.io/Landing-page-of-Eco-friendly-Website/",
//   },
//   {
//     title: "Weather App",
//     description:
//       "Weather app using Vanilla JS and OpenWeather API showing weather based on location and user input.",
//     tech: ["JavaScript", "API Integration", "HTML", "CSS"],
//     live: "https://weather-app-rosy-psi-28.vercel.app/",
//   },
//   {
//     title: "Todo List App",
//     description:
//       "Todo List Web Application using Vanilla JavaScript and Bootstrap with LocalStorage for data persistence.",
//     tech: ["JavaScript", "Bootstrap", "LocalStorage", "DOM"],
//     live: "#",
//   },
// ];

// export default function Portfolio() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const scrollToSection = (sectionId: string) => {
//     document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
//     setIsMenuOpen(false);
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex justify-between items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="text-2xl font-bold text-primary hover:text-primary cursor-pointer transition-colors  "
//               onClick={() => scrollToSection("about")}
//             >
//               Md Shahbaz
//             </motion.div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-8">
//               <button
//                 onClick={() => scrollToSection("about")}
//                 className="hover:text-primary transition-colors"
//               >
//                 About
//               </button>
//               <button
//                 onClick={() => scrollToSection("skills")}
//                 className="hover:text-primary transition-colors"
//               >
//                 Skills
//               </button>
//               <button
//                 onClick={() => scrollToSection("projects")}
//                 className="hover:text-primary transition-colors"
//               >
//                 Projects
//               </button>
//               <button
//                 onClick={() => scrollToSection("contact")}
//                 className="hover:text-primary transition-colors"
//               >
//                 Contact
//               </button>
//               <ThemeToggle />
//             </div>

//             {/* Mobile Navigation */}
//             <div className="md:hidden flex items-center space-x-2">
//               <ThemeToggle />
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//               >
//                 {isMenuOpen ? (
//                   <X className="h-5 w-5" />
//                 ) : (
//                   <Menu className="h-5 w-5" />
//                 )}
//               </Button>
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           {isMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="md:hidden mt-4 pb-4 space-y-2"
//             >
//               <button
//                 onClick={() => scrollToSection("about")}
//                 className="block w-full text-left py-2 hover:text-primary transition-colors"
//               >
//                 About
//               </button>
//               <button
//                 onClick={() => scrollToSection("skills")}
//                 className="block w-full text-left py-2 hover:text-primary transition-colors"
//               >
//                 Skills
//               </button>
//               <button
//                 onClick={() => scrollToSection("projects")}
//                 className="block w-full text-left py-2 hover:text-primary transition-colors"
//               >
//                 Projects
//               </button>
//               <button
//                 onClick={() => scrollToSection("contact")}
//                 className="block w-full text-left py-2 hover:text-primary transition-colors"
//               >
//                 Contact
//               </button>
//             </motion.div>
//           )}
//         </div>
//       </nav>

//       {/* Hero/About Section */}
//       <section id="about" className="pt-24 pb-16 min-h-screen">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="grid md:grid-cols-2 gap-12 items-center"
//           >
//             <div>
//               <motion.div {...fadeInUp}>
//                 <h1 className="text-4xl md:text-6xl font-bold mb-6">
//                   Hi, I'm <span className="text-primary">Md Shahbaz</span>
//                 </h1>
//                 <h2 className="text-2xl md:text-3xl text-muted-foreground mb-4">
//                   Full Stack Developer
//                 </h2>
//                 <p className="text-lg text-muted-foreground mb-8">
//                   I'm looking towards challenging and responsible working
//                   environment where I can serve and improve my knowledge and
//                   skills for the betterment of the company and self.
//                 </p>

//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <a href="/sh_Resume.pdf" download>
//                     <Button size="lg" className="w-full sm:w-auto">
//                       Download Resume
//                     </Button>
//                   </a>

//                   <Button
//                     variant="outline"
//                     size="lg"
//                     className="w-full sm:w-auto"
//                     asChild
//                   >
//                     <a
//                       href="https://leetcode.com/u/Shahbaz01/"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <ExternalLink className="mr-2 h-4 w-4" />
//                       LeetCode Profile
//                     </a>
//                   </Button>
//                 </div>
//               </motion.div>
//             </div>
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8 }}
//               className="flex justify-center"
//             >
//               <div className="relative">
//                 <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20">
//                   <img
//                     src="/shz.jpeg?height=320&width=320"
//                     alt="Md Shahbaz Profile"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full animate-pulse"></div>
//                 <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full animate-pulse delay-1000"></div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" className="py-16 bg-muted/50">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Skills & Expertise
//             </h2>
//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               Technologies and tools I work with to bring ideas to life
//             </p>
//           </motion.div>

//           <motion.div
//             variants={staggerContainer}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
//           >
//             {skills.map((skill, index) => (
//               <motion.div key={index} variants={fadeInUp}>
//                 <motion.div
//                   whileHover={{ y: -10 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 >
//                   <Card className="h-full overflow-hidden border-b-4 border-transparent hover:border-primary transition-all duration-300 group">
//                     <CardHeader className="text-center">
//                       <motion.div
//                         whileHover={{ scale: 1.1, rotate: 5 }}
//                         className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit"
//                       >
//                         <skill.icon className="h-8 w-8 text-primary" />
//                       </motion.div>
//                       <CardTitle className="group-hover:text-primary transition-colors">
//                         {skill.name}
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <p className="text-muted-foreground text-center text-sm">
//                         {skill.description}
//                       </p>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-16">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Featured Projects
//             </h2>
//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               A showcase of my recent work and personal projects
//             </p>
//           </motion.div>

//           {/* Main Projects */}
//           <motion.div
//             variants={staggerContainer}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
//           >
//             {projects.map((project, index) => (
//               <motion.div key={index} variants={fadeInUp}>
//                 <motion.div
//                   whileHover={{ y: -10 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 >
//                   <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-b-4 border-transparent hover:border-primary h-full">
//                     <div className="relative overflow-hidden">
//                       <motion.img
//                         whileHover={{ scale: 1.05 }}
//                         src={project.image}
//                         alt={project.title}
//                         className="w-full h-48 object-cover transition-transform duration-300"
//                       />
//                       <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
//                         <Button size="sm" variant="secondary" asChild>
//                           <a
//                             href={project.github}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                           >
//                             <Github className="h-4 w-4 mr-2" />
//                             Code
//                           </a>
//                         </Button>
//                         <Button size="sm" asChild>
//                           <a
//                             href={project.live}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                           >
//                             <ExternalLink className="h-4 w-4 mr-2" />
//                             Live
//                           </a>
//                         </Button>
//                       </div>
//                     </div>
//                     <CardHeader>
//                       <CardTitle className="group-hover:text-primary transition-colors">
//                         {project.title}
//                       </CardTitle>
//                       <CardDescription>{project.description}</CardDescription>
//                       {project.features && (
//                         <p className="text-sm text-muted-foreground mt-2">
//                           {project.features}
//                         </p>
//                       )}
//                     </CardHeader>
//                     <CardContent>
//                       <div className="flex flex-wrap gap-2">
//                         {project.tech.map((tech, techIndex) => (
//                           <Badge key={techIndex} variant="secondary">
//                             {tech}
//                           </Badge>
//                         ))}
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Additional Projects */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-2xl font-bold mb-6 text-center">
//               More Projects
//             </h3>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {moreProjects.map((project, index) => (
//                 <Card
//                   key={index}
//                   className="hover:shadow-lg transition-all duration-300 group"
//                 >
//                   <CardHeader>
//                     <CardTitle className="group-hover:text-primary transition-colors text-lg">
//                       {project.title}
//                     </CardTitle>
//                     <CardDescription>{project.description}</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {project.tech.map((tech, techIndex) => (
//                         <Badge
//                           key={techIndex}
//                           variant="outline"
//                           className="text-xs"
//                         >
//                           {tech}
//                         </Badge>
//                       ))}
//                     </div>
//                     <Button size="sm" variant="outline" asChild>
//                       <a
//                         href={project.live}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <ExternalLink className="h-3 w-3 mr-2" />
//                         View Project
//                       </a>
//                     </Button>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </motion.div>

//           {/* Education & Achievements Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mt-16 grid md:grid-cols-2 gap-8"
//           >
//             {/* Education */}
//             <Card className="hover:shadow-lg transition-all duration-300">
//               <CardHeader>
//                 <CardTitle className="flex items-center">
//                   <BookOpen className="h-5 w-5 mr-2 text-primary" />
//                   Education
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div>
//                   <h4 className="font-semibold">
//                     Bachelor of Computer Application
//                   </h4>
//                   <p className="text-muted-foreground">
//                     Aisect University, Hazaribagh (JH)
//                   </p>
//                   <p className="text-sm text-muted-foreground">
//                     2022 - 2025 | CGPA: 8.18
//                   </p>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold">Intermediate of Science</h4>
//                   <p className="text-muted-foreground">
//                     RM MM +2 HS Koderma (Jharkhand)
//                   </p>
//                   <p className="text-sm text-muted-foreground">
//                     2019 - 2021 | 70.4%
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Achievements */}
//             <Card className="hover:shadow-lg transition-all duration-300">
//               <CardHeader>
//                 <CardTitle className="flex items-center">
//                   <Trophy className="h-5 w-5 mr-2 text-primary" />
//                   Achievements & Certificates
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div>
//                   <h4 className="font-semibold">
//                     Tech Manager at TechFest (2024)
//                   </h4>
//                   <p className="text-muted-foreground">
//                     Certificate of Appreciation from Aisect University
//                   </p>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold">Java Certification</h4>
//                   <p className="text-muted-foreground">Great Learning</p>
//                   <a
//                     href="https://www.mygreatlearning.com/certificate/VFLVPUCD"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-primary hover:underline text-sm"
//                   >
//                     View Certificate
//                   </a>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold">Open Source Contributor</h4>
//                   <p className="text-muted-foreground">
//                     Contributing to GitHub projects for real-world experience
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-16 bg-muted/50">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Get In Touch
//             </h2>
//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               Have a project in mind or want to collaborate? I'd love to hear
//               from you!
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="max-w-2xl mx-auto"
//           >
//             <Card>
//               <CardHeader>
//                 <CardTitle>Send me a message</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="grid md:grid-cols-2 gap-4">
//                   <Input placeholder="Your Name" />
//                   <Input placeholder="Your Email" type="email" />
//                 </div>
//                 <Input placeholder="Subject" />
//                 <Textarea placeholder="Your Message" rows={5} />
//                 <Button className="w-full">
//                   <Mail className="mr-2 h-4 w-4" />
//                   Send Message
//                 </Button>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </div>
//       </section>

//       {/* Enhanced Footer */}
//       <footer className="bg-background border-t">
//         <div className="container mx-auto px-4 py-12">
//           <div className="grid md:grid-cols-4 gap-8">
//             {/* About Column */}
//             <div className="md:col-span-2">
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true }}
//               >
//                 <h3 className="text-2xl font-bold text-primary mb-4">
//                   Md Shahbaz
//                 </h3>
//                 <p className="text-muted-foreground mb-4 max-w-md">
//                   Full Stack Developer passionate about creating innovative web
//                   solutions. Always eager to learn new technologies and
//                   contribute to meaningful projects.
//                 </p>
//                 <div className="space-y-2 text-sm text-muted-foreground">
//                   <div className="flex items-center">
//                     <MapPin className="h-4 w-4 mr-2 text-primary" />
//                     <span>Koderma, Jharkhand, India</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Mail className="h-4 w-4 mr-2 text-primary" />
//                     <span>shahbaz05665@gmail.com</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Phone className="h-4 w-4 mr-2 text-primary" />
//                     <span>+91 7070849256</span>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>

//             {/* Quick Links */}
//             <div>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//               >
//                 <h4 className="font-semibold mb-4">Quick Links</h4>
//                 <ul className="space-y-2 text-muted-foreground">
//                   <li>
//                     <button
//                       onClick={() => scrollToSection("about")}
//                       className="hover:text-primary transition-colors"
//                     >
//                       About
//                     </button>
//                   </li>
//                   <li>
//                     <button
//                       onClick={() => scrollToSection("skills")}
//                       className="hover:text-primary transition-colors"
//                     >
//                       Skills
//                     </button>
//                   </li>
//                   <li>
//                     <button
//                       onClick={() => scrollToSection("projects")}
//                       className="hover:text-primary transition-colors"
//                     >
//                       Projects
//                     </button>
//                   </li>
//                   <li>
//                     <button
//                       onClick={() => scrollToSection("contact")}
//                       className="hover:text-primary transition-colors"
//                     >
//                       Contact
//                     </button>
//                   </li>
//                 </ul>
//               </motion.div>
//             </div>

//             {/* Social Links */}
//             <div>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//               >
//                 <h4 className="font-semibold mb-4">Connect With Me</h4>
//                 <div className="space-y-3">
//                   <motion.a
//                     whileHover={{ scale: 1.05, x: 5 }}
//                     href="https://github.com/mdshahbaz-9"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center text-muted-foreground hover:text-primary transition-colors"
//                   >
//                     <Github className="h-5 w-5 mr-3" />
//                     <span>GitHub</span>
//                   </motion.a>
//                   <motion.a
//                     whileHover={{ scale: 1.05, x: 5 }}
//                     href="https://linkedin.com/in/md-shahbaz-594451254"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center text-muted-foreground hover:text-primary transition-colors"
//                   >
//                     <Linkedin className="h-5 w-5 mr-3" />
//                     <span>LinkedIn</span>
//                   </motion.a>
//                   <motion.a
//                     whileHover={{ scale: 1.05, x: 5 }}
//                     href="https://leetcode.com/u/Shahbaz01/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center text-muted-foreground hover:text-primary transition-colors"
//                   >
//                     <Code2 className="h-5 w-5 mr-3" />
//                     <span>LeetCode</span>
//                   </motion.a>
//                   <motion.a
//                     whileHover={{ scale: 1.05, x: 5 }}
//                     href="mailto:shahbaz05665@gmail.com"
//                     className="flex items-center text-muted-foreground hover:text-primary transition-colors"
//                   >
//                     <Mail className="h-5 w-5 mr-3" />
//                     <span>Email</span>
//                   </motion.a>
//                 </div>
//               </motion.div>
//             </div>
//           </div>

//           {/* Bottom Section */}
//           <div className="border-t mt-8 pt-8">
//             <div className="flex flex-col md:flex-row justify-between items-center">
//               <motion.p
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true }}
//                 className="text-muted-foreground text-sm mb-4 md:mb-0"
//               >
//                 &copy; 2024 Md Shahbaz. All rights reserved. Built with ❤️ using
//                 React & Next.js
//               </motion.p>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="flex items-center space-x-4"
//               >
//                 <Badge variant="outline" className="text-xs">
//                   <Award className="h-3 w-3 mr-1" />
//                    Full-Stack Developer
//                 </Badge>
//                 <Badge variant="outline" className="text-xs">
//                   <BookOpen className="h-3 w-3 mr-1" />
//                   Tech Enthusiast
//                 </Badge>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Database,
  Terminal,
  Wrench,
  MapPin,
  Phone,
  Award,
  BookOpen,
  Trophy,
  Menu,
  X,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const skills = [
  {
    icon: Code2,
    name: "Frontend development",
    items: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "Tailwind CSS"],
  },
  {
    icon: Database,
    name: "Backend development",
    items: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Prisma", "AWS"],
  },
  {
    icon: Terminal,
    name: "Programming languages",
    items: ["Java", "JavaScript", "Redux", "C", "C++"],
  },
  {
    icon: Wrench,
    name: "Developer tools",
    items: ["VS Code", "Dev C++", "Git", "GitHub", "Postman"],
  },
];

const projects = [
  {
    title: "Amconz Infra Services",
    description:
      "Corporate website for a facility management company in Punjab. React + Vite, dark/light mode, service pages, gallery, and EmailJS enquiry forms.",
    accent: "#C8963E",
    bg: "#0D1B2A",
    label: "AMCONZ",
    sublabel: "Infra Services",
    tech: ["React", "Vite", "Tailwind CSS", "EmailJS"],
    github: "#",
    live: "https://www.amconzinfra.com/",
  },
  {
    title: "E-Shiksha — Full-stack LMS",
    description:
      "Responsive platform for buying and studying courses, and for instructors to create and manage courses. Role-based access and secure payment gateway.",
    accent: "#7c3aed",
    bg: "#1a1a2e",
    label: "E-Shiksha",
    sublabel: "Full-stack LMS",
    tech: ["React", "Node.js", "MongoDB", "Payment Gateway"],
    github: "https://github.com/mdshahbaz-9/E-Shiksha",
    live: "https://e-shiksha-v8yj.vercel.app/",
    features: "Role-based access · Course creation · Analytics dashboard",
  },
  {
    title: "CollegeXP",
    description:
      "Gamified MERN stack platform guiding students from coding basics to placement through 7 progressive levels with XP, streaks, badges, and admin panel.",
    accent: "#10b981",
    bg: "#16213e",
    label: "CollegeXP",
    sublabel: "Gamified portal",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/mdshahbaz-9/CollegeXP-Gamified-Student-Placement-Portal-",
    live: "https://college-xp.vercel.app/",
  },
  {
    title: "Aspire U",
    description:
      "Modern, responsive website for an educational platform built with React.js and Tailwind CSS with smooth routing and clean UI.",
    accent: "#38bdf8",
    bg: "#0f3460",
    label: "Aspire U",
    sublabel: "Education platform",
    tech: ["React.js", "Tailwind CSS", "React Router", "JavaScript"],
    github: "https://github.com/mdshahbaz-9",
    live: "https://aspire-u.vercel.app/",
  },
  {
    title: "Amit-azure",
    description:
      "Professional landing page for a mobile shop web application. Modern responsive design with clean UI showcasing store features and offerings.",
    accent: "#f97316",
    bg: "#1b1b2f",
    label: "Amit-azure",
    sublabel: "Mobile store",
    tech: ["React", "Redux Toolkit", "JavaScript"],
    github: "https://github.com/mdshahbaz-9/mobile-store-webapp",
    live: "https://amit-azure.vercel.app/",
  },
];

const moreProjects = [
  {
    title: "Eco-friendly landing page",
    description: "Landing page for eco-friendly website with modern design and responsive layout.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    live: "https://mdshahbaz-9.github.io/Landing-page-of-Eco-friendly-Website/",
  },
  {
    title: "Weather app",
    description: "Weather app using Vanilla JS and OpenWeather API showing weather by location and user input.",
    tech: ["JavaScript", "API Integration", "HTML", "CSS"],
    live: "https://weather-app-rosy-psi-28.vercel.app/",
  },
  {
    title: "Todo list app",
    description: "Todo list web app using Vanilla JavaScript and Bootstrap with LocalStorage for data persistence.",
    tech: ["JavaScript", "Bootstrap", "LocalStorage", "DOM"],
    live: "#",
  },
];

const stats = [
  { num: "5+", label: "Projects built", color: "text-blue-500" },
  { num: "8.18", label: "CGPA", color: "text-green-500" },
  { num: "8+", label: "Technologies", color: "text-amber-500" },
  { num: "3+", label: "Years coding", color: "text-rose-500" },
];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks = ["about", "skills", "projects", "contact"];

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── Navbar ── */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur border-b border-border">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <button
            onClick={() => scrollTo("about")}
            className="text-lg font-semibold text-primary hover:opacity-80 transition-opacity"
          >
            Md Shahbaz
          </button>

          <div className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            {navLinks.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className="capitalize hover:text-foreground transition-colors"
              >
                {l}
              </button>
            ))}
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden border-t border-border bg-background px-4 pb-4 pt-2 flex flex-col gap-1"
          >
            {navLinks.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className="capitalize text-left py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l}
              </button>
            ))}
          </motion.div>
        )}
      </nav>

      {/* ── Hero ── */}
      <section id="about" className="pt-28 pb-20 max-w-5xl mx-auto px-4">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid md:grid-cols-[1fr_auto] gap-10 items-start"
        >
          <motion.div variants={fadeInUp}>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">
              Full stack developer
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-5 leading-tight">
              Hi, I'm{" "}
              <span className="text-primary">Md Shahbaz</span>
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed max-w-xl mb-8">
              I'm looking towards a challenging and responsible working environment where I can
              serve and improve my knowledge and skills for the betterment of the company and self.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {[
                { icon: MapPin, text: "Koderma, Jharkhand" },
                { icon: Mail, text: "shahbaz05665@gmail.com" },
                { icon: Phone, text: "+91 70708 49256" },
              ].map(({ icon: Icon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-1.5 text-xs text-muted-foreground border border-border rounded-md px-2.5 py-1.5"
                >
                  <Icon className="h-3 w-3" />
                  {text}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="/sh_Resume.pdf" download>
                <Button size="sm" className="gap-1.5">
                  <Download className="h-3.5 w-3.5" />
                  Download resume
                </Button>
              </a>
              <a href="https://leetcode.com/u/Shahbaz01/" target="_blank" rel="noreferrer">
                <Button variant="outline" size="sm" className="gap-1.5">
                  <Code2 className="h-3.5 w-3.5" />
                  LeetCode
                </Button>
              </a>
              <a href="https://github.com/mdshahbaz-9" target="_blank" rel="noreferrer">
                <Button variant="outline" size="sm" className="gap-1.5">
                  <Github className="h-3.5 w-3.5" />
                  GitHub
                </Button>
              </a>
              <a href="https://linkedin.com/in/md-shahbaz-594451254" target="_blank" rel="noreferrer">
                <Button variant="outline" size="sm" className="gap-1.5">
                  <Linkedin className="h-3.5 w-3.5" />
                  LinkedIn
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex justify-center">
            <div className="relative">
              <div className="w-52 h-52 rounded-2xl overflow-hidden border border-border">
                <img
                  src="/shz.jpeg"
                  alt="Md Shahbaz"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-primary/10 animate-pulse" />
              <div className="absolute -bottom-3 -left-3 w-10 h-10 rounded-full bg-primary/15 animate-pulse delay-700" />
            </div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-14"
        >
          {stats.map(({ num, label, color }) => (
            <motion.div
              key={label}
              variants={fadeInUp}
              className="bg-muted/50 rounded-xl p-4 text-center"
            >
              <p className={`text-3xl font-bold ${color}`}>{num}</p>
              <p className="text-xs text-muted-foreground mt-1">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Skills ── */}
      <section id="skills" className="py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
              What I work with
            </p>
            <h2 className="text-3xl font-bold">Skills & expertise</h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {skills.map(({ icon: Icon, name, items }) => (
              <motion.div
                key={name}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-background border border-border rounded-xl p-5 hover:border-primary/50 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-4.5 w-4.5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold mb-3">{name}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="text-[11px] px-2 py-0.5 rounded bg-muted text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
              What I've built
            </p>
            <h2 className="text-3xl font-bold">Featured projects</h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16"
          >
            {projects.map((project, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 280 }}
                className="bg-background border border-border rounded-xl overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Project Header */}
                <div
                  className="h-28 flex flex-col items-center justify-center relative"
                  style={{ background: project.bg }}
                >
                  <p className="text-base font-bold" style={{ color: project.accent }}>
                    {project.label}
                  </p>
                  <p className="text-[10px] mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>
                    {project.sublabel}
                  </p>
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ background: project.accent, opacity: 0.4 }}
                  />
                </div>

                {/* Project Body */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-sm font-semibold mb-2">{project.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3 flex-1">
                    {project.description}
                  </p>
                  {project.features && (
                    <p className="text-[11px] text-muted-foreground/70 mb-3 italic">
                      {project.features}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="text-[10px] px-1.5 py-0">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex-1">
                      <Button variant="outline" size="sm" className="w-full gap-1.5 text-xs">
                        <Github className="h-3 w-3" />
                        Code
                      </Button>
                    </a>
                    <a href={project.live} target="_blank" rel="noreferrer" className="flex-1">
                      <Button size="sm" className="w-full gap-1.5 text-xs">
                        <ExternalLink className="h-3 w-3" />
                        Live
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* More Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-5">More projects</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {moreProjects.map((p, i) => (
                <div
                  key={i}
                  className="bg-background border border-border rounded-xl p-5 hover:border-primary/40 hover:shadow-md transition-all duration-300"
                >
                  <h4 className="text-sm font-semibold mb-2">{p.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tech.map((t) => (
                      <Badge key={t} variant="outline" className="text-[10px] px-1.5 py-0">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <a href={p.live} target="_blank" rel="noreferrer">
                    <Button variant="outline" size="sm" className="gap-1.5 text-xs">
                      <ExternalLink className="h-3 w-3" />
                      View project
                    </Button>
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education & Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-5 mt-14"
          >
            {/* Education */}
            <div className="bg-background border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-5">
                <BookOpen className="h-4 w-4 text-primary" />
                <h3 className="text-sm font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                <div className="pb-4 border-b border-border">
                  <p className="text-sm font-medium">Bachelor of Computer Application</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Aisect University, Hazaribagh (JH)
                  </p>
                  <div className="flex items-center justify-between mt-1.5">
                    <span className="text-xs text-muted-foreground">2022 – 2025</span>
                    <span className="text-xs text-green-500 font-medium">CGPA 8.18</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium">Intermediate of Science</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    RM MM +2 HS Koderma, Jharkhand
                  </p>
                  <div className="flex items-center justify-between mt-1.5">
                    <span className="text-xs text-muted-foreground">2019 – 2021</span>
                    <span className="text-xs text-blue-500 font-medium">70.4%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-background border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-5">
                <Trophy className="h-4 w-4 text-primary" />
                <h3 className="text-sm font-semibold">Achievements & certificates</h3>
              </div>
              <div className="space-y-4">
                <div className="pb-4 border-b border-border">
                  <p className="text-sm font-medium">Tech Manager at TechFest (2024)</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Certificate of Appreciation — Aisect University
                  </p>
                </div>
                <div className="pb-4 border-b border-border">
                  <p className="text-sm font-medium">Java Certification — Great Learning</p>
                  <a
                    href="https://www.mygreatlearning.com/certificate/VFLVPUCD"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-primary hover:underline mt-1 inline-flex items-center gap-1"
                  >
                    View certificate <ExternalLink className="h-2.5 w-2.5" />
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium">Open source contributor</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Contributing to GitHub projects for real-world experience
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
              Let's talk
            </p>
            <h2 className="text-3xl font-bold">Get in touch</h2>
            <p className="text-muted-foreground text-sm mt-2 max-w-md">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-[1fr_320px] gap-8 items-start"
          >
            {/* Form */}
            <div className="bg-background border border-border rounded-xl p-6">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full h-9 rounded-lg border border-border bg-muted/40 px-3 text-sm outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full h-9 rounded-lg border border-border bg-muted/40 px-3 text-sm outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="text-xs text-muted-foreground mb-1.5 block">Subject</label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  className="w-full h-9 rounded-lg border border-border bg-muted/40 px-3 text-sm outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="mb-5">
                <label className="text-xs text-muted-foreground mb-1.5 block">Message</label>
                <textarea
                  rows={5}
                  placeholder="Your message..."
                  className="w-full rounded-lg border border-border bg-muted/40 px-3 py-2 text-sm outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <Button className="w-full gap-2">
                <Mail className="h-4 w-4" />
                Send message
              </Button>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              {[
                { icon: Mail, label: "Email", value: "shahbaz05665@gmail.com", href: "mailto:shahbaz05665@gmail.com" },
                { icon: Phone, label: "Phone", value: "+91 70708 49256", href: "tel:+917070849256" },
                { icon: MapPin, label: "Location", value: "Koderma, Jharkhand, India", href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="bg-background border border-border rounded-xl p-4 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm font-medium hover:text-primary transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="bg-background border border-border rounded-xl p-4">
                <p className="text-xs text-muted-foreground mb-3">Connect with me</p>
                <div className="flex gap-2">
                  {[
                    { icon: Github, href: "https://github.com/mdshahbaz-9", label: "GitHub" },
                    { icon: Linkedin, href: "https://linkedin.com/in/md-shahbaz-594451254", label: "LinkedIn" },
                    { icon: Mail, href: "mailto:shahbaz05665@gmail.com", label: "Email" },
                    { icon: Code2, href: "https://leetcode.com/u/Shahbaz01/", label: "LeetCode" },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                    >
                      <Button variant="outline" size="icon" className="h-9 w-9">
                        <Icon className="h-3.5 w-3.5" />
                      </Button>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-border py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-lg font-bold text-primary mb-2">Md Shahbaz</h3>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-xs">
                Full Stack Developer passionate about creating innovative web solutions. Always eager
                to learn new technologies and contribute to meaningful projects.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                Navigate
              </p>
              <ul className="space-y-2">
                {navLinks.map((l) => (
                  <li key={l}>
                    <button
                      onClick={() => scrollTo(l)}
                      className="capitalize text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {l}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                Social
              </p>
              <ul className="space-y-2">
                {[
                  { icon: Github, label: "GitHub", href: "https://github.com/mdshahbaz-9" },
                  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/md-shahbaz-594451254" },
                  { icon: Code2, label: "LeetCode", href: "https://leetcode.com/u/Shahbaz01/" },
                  { icon: Mail, label: "Email", href: "mailto:shahbaz05665@gmail.com" },
                ].map(({ icon: Icon, label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">
              © 2024 Md Shahbaz · Built with ❤️ using React & Next.js
            </p>
            <div className="flex gap-2">
              <Badge variant="outline" className="text-[11px] gap-1">
                <Award className="h-2.5 w-2.5" />
                Full-stack developer
              </Badge>
              <Badge variant="outline" className="text-[11px] gap-1">
                <BookOpen className="h-2.5 w-2.5" />
                Tech enthusiast
              </Badge>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
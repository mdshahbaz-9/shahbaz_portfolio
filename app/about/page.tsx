"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Github, Code, Trophy, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="container mx-auto px-4">
        <Link href="/">
          <Button variant="ghost" className="mb-8 group">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid md:grid-cols-3 gap-12 items-start"
        >
          {/* Left Column - Profile */}
          <motion.div variants={fadeIn} initial="initial" animate="animate" className="md:sticky md:top-24">
            <Card className="overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img src="/placeholder.svg?height=400&width=400" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">John Doe</CardTitle>
                <p className="text-muted-foreground">Full-stack Developer</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Github className="h-5 w-5 mr-2 text-primary" />
                  <span>github.com/johndoe</span>
                </div>
                <div className="flex items-center">
                  <Code className="h-5 w-5 mr-2 text-primary" />
                  <span>5+ years of experience</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="h-5 w-5 mr-2 text-primary" />
                  <span>LeetCode: 500+ problems solved</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-primary" />
                  <span>MSc in Computer Science</span>
                </div>
                <Button className="w-full">Download Resume</Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="md:col-span-2 space-y-8"
          >
            <motion.div variants={fadeIn}>
              <h1 className="text-4xl font-bold mb-6">About Me</h1>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg mb-4">
                  I'm a passionate full-stack developer with expertise in building modern web applications. With over 5
                  years of experience in the industry, I've worked on a variety of projects ranging from small business
                  websites to complex enterprise applications.
                </p>
                <p className="text-lg mb-4">
                  My journey in programming began during my university years where I discovered my passion for creating
                  elegant solutions to complex problems. Since then, I've been constantly learning and adapting to new
                  technologies and methodologies.
                </p>
                <p className="text-lg">
                  When I'm not coding, you can find me solving problems on LeetCode, contributing to open-source
                  projects, or exploring the outdoors. I believe in continuous learning and sharing knowledge with the
                  community.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h2 className="text-2xl font-bold mb-4">Education</h2>
              <Card className="mb-6 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle>MSc in Computer Science</CardTitle>
                  <p className="text-muted-foreground">Stanford University | 2018 - 2020</p>
                </CardHeader>
                <CardContent>
                  <p>
                    Specialized in Artificial Intelligence and Machine Learning. Thesis on "Neural Networks for Natural
                    Language Processing".
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle>BSc in Software Engineering</CardTitle>
                  <p className="text-muted-foreground">MIT | 2014 - 2018</p>
                </CardHeader>
                <CardContent>
                  <p>Graduated with honors. Participated in multiple hackathons and coding competitions.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
              <Card className="mb-6 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle>Senior Full-stack Developer</CardTitle>
                  <p className="text-muted-foreground">Tech Innovations Inc. | 2020 - Present</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Lead a team of 5 developers in building a SaaS platform</li>
                    <li>Implemented CI/CD pipelines reducing deployment time by 40%</li>
                    <li>Architected microservices infrastructure using Docker and Kubernetes</li>
                    <li>Mentored junior developers and conducted code reviews</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle>Frontend Developer</CardTitle>
                  <p className="text-muted-foreground">WebSolutions Co. | 2018 - 2020</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Developed responsive web applications using React and TypeScript</li>
                    <li>Collaborated with designers to implement pixel-perfect UI components</li>
                    <li>Optimized application performance resulting in 30% faster load times</li>
                    <li>Integrated third-party APIs and services</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h2 className="text-2xl font-bold mb-4">LeetCode Achievements</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-4xl text-primary">500+</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Problems Solved</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-4xl text-primary">Top 5%</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Global Ranking</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-4xl text-primary">50+</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Contest Participations</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  ChevronDown,
  Download,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Database,
  Globe,
  Zap,
  Award,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function Portfolio() {
  const [currentTime, setCurrentTime] = useState("")
  const [greeting, setGreeting] = useState("")
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hour = now.getHours()

      if (hour < 12) setGreeting("Good Morning")
      else if (hour < 17) setGreeting("Good Afternoon")
      else setGreeting("Good Evening")

      setCurrentTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }))
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const skills = [
    // Programming Languages
    { name: "C/C++", level: 80, icon: Code, category: "Programming" },
    { name: "Python", level: 75, icon: Code, category: "Programming" },
    { name: "JavaScript", level: 85, icon: Code, category: "Programming" },
    { name: "PHP", level: 70, icon: Code, category: "Programming" },

    // Web Technologies
    { name: "React.js", level: 80, icon: Globe, category: "Web" },
    { name: "Express.js", level: 75, icon: Globe, category: "Web" },
    { name: "HTML/CSS", level: 90, icon: Globe, category: "Web" },

    // Databases
    { name: "MongoDB", level: 75, icon: Database, category: "Database" },
    { name: "SQL/MySQL", level: 80, icon: Database, category: "Database" },

    // Tools & Platforms
    { name: "Git/GitHub", level: 85, icon: Code, category: "Tools" },
    { name: "Jenkins (CI/CD)", level: 65, icon: Zap, category: "Tools" },
    { name: "MATLAB", level: 70, icon: Code, category: "Tools" },
    { name: "Excel", level: 75, icon: Database, category: "Tools" },

    // Specialized Skills
    { name: "Data Structures & Algorithms", level: 80, icon: Database, category: "Core" },
    { name: "Machine Learning", level: 72, icon: Zap, category: "AI/ML" },
  ]

  const skillCategories = {
    Programming: { color: "from-blue-500 to-cyan-500", icon: Code },
    Web: { color: "from-green-500 to-emerald-500", icon: Globe },
    Database: { color: "from-purple-500 to-violet-500", icon: Database },
    Tools: { color: "from-orange-500 to-red-500", icon: Zap },
    Core: { color: "from-pink-500 to-rose-500", icon: Award },
    "AI/ML": { color: "from-indigo-500 to-purple-500", icon: Star },
  }

  const projects = [
    {
      title: "AI-Powered Information Retrieval Agent",
      description: "Automated web data extraction tool using AI for entity-based queries and real-time data processing",
      tech: ["Python", "OpenAI GPT", "Streamlit", "Google Sheets API", "ScraperAPI"],
      status: "Completed",
      impact: "Automated data extraction workflows",
      date: "Aug 2022 - Sep 2022",
      githubUrl: "https://github.com/pmi0603/ai_agent_project",
      highlights: [
        "CSV/Google Sheets integration for structured data input",
        "OpenAI GPT for intelligent entity-based queries",
        "Interactive Streamlit dashboard with error handling",
      ],
    },
    {
      title: "Multilingual Audio-to-Text & Translation Tool",
      description: "Advanced NLP tool for audio transcription and translation using state-of-the-art AI models",
      tech: ["Python", "PyTorch", "Whisper AI", "Google Translate API", "FFmpeg"],
      status: "Completed",
      impact: "Enhanced multilingual communication",
      date: "Oct 2024",
      githubUrl: "https://github.com/pmi0603/Audio-Translator",
      highlights: [
        "Speech-to-Text with Whisper model for multilingual transcription",
        "Automatic language detection and neural machine translation",
        "Handles semantic nuances across various languages",
      ],
    },
    {
      title: "Online Voting System",
      description: "Secure web-based voting platform with robust authentication and real-time results",
      tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
      status: "Completed",
      impact: "50% reduction in security incidents",
      date: "Feb 2023 - Apr 2023",
      highlights: [
        "Industry-standard user authentication protocol",
        "30% reduction in voting errors through validation",
        "Agile dashboard with one-vote-per-user enforcement",
      ],
    },
    {
      title: "AI Chess Bot",
      description: "Interactive chess application with AI opponent built using React.js and chess algorithms",
      tech: ["React.js", "JavaScript", "Chess.js", "HTML5", "CSS3"],
      status: "Completed",
      impact: "Enhanced frontend & AI integration skills",
      date: "Aug 2023 - Sep 2023",
      githubUrl: "https://github.com/pmi0603/chess",
      highlights: [
        "Human vs Computer gameplay with intelligent AI moves",
        "State management for game flow and board positions",
        "Error boundary implementation for seamless UX",
      ],
    },
    {
      title: "Image Feature Extraction & OCR",
      description: "ML-powered tool for extracting text from images and predicting entity values using OCR",
      tech: ["Python", "Scikit-learn", "Tesseract OCR", "Pandas", "NumPy"],
      status: "In Development",
      impact: "Automated document processing",
      date: "Present",
      highlights: [
        "OCR text extraction from image URLs",
        "RandomForest ML model for entity prediction",
        "Automated CSV export for business analysis",
      ],
    },
  ]

  const certificationsAndAchievements = [
    {
      icon: Award,
      title: "Google Cloud Computing Foundation",
      description: "Professional certification in cloud computing fundamentals",
      type: "certification",
      link: "https://www.cloudskillsboost.google/public_profiles/cf69f228-cf18-46c6-a7ca-dae0338002e2",
      issuer: "Google Cloud",
    },
    {
      icon: Star,
      title: "Google Cybersecurity Professional",
      description: "Comprehensive cybersecurity certification program",
      type: "certification",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/064D9ADMTVZG",
      issuer: "Google via Coursera",
    },
    {
      icon: Code,
      title: "5+ Projects Delivered",
      description: "Full-stack applications with AI/ML integration",
      type: "achievement",
    },
    {
      icon: Star,
      title: "Client Satisfaction",
      description: "98% positive feedback on delivered projects",
      type: "achievement",
    },
    {
      icon: Database,
      title: "Technology Business Incubator",
      description: "Certified Full-Stack Developer",
      type: "certification",
      link: "https://drive.google.com/file/d/1_oUiUHjoXg52SZA6LALa6-lIky-ZNVkd/view?pli=1",
      issuer: "TBI Certification",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-lg sm:text-xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent"
            >
              Prashant Mishra
            </motion.div>
            <div className="hidden md:flex space-x-4 lg:space-x-6">
              {[
                { name: "About", href: "#hero" },
                { name: "Experience", href: "#experience" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" },
              ].map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="hover:text-pink-400 transition-colors cursor-pointer text-sm lg:text-base"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 px-4 sm:px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8 text-center lg:text-left"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-gray-300"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available for opportunities</span>
                <span className="text-pink-400">• {currentTime}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              >
                <span className="text-gray-300">Hi, {greeting}</span>
                <br />
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                  I'm Prashant
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-2"
              >
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-200">
                  Full-Stack Developer & DevOps Enthusiast
                </h2>
                <p className="text-base lg:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0">
                  Computer Science Graduate from Graphic Era Hill University, passionate about creating scalable web
                  applications and optimizing development workflows.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 w-full sm:w-auto"
                onClick={() => window.open("mailto:prashantmishra06032003@gmail.com")}
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500/30 bg-slate-800/50 text-purple-200 hover:bg-slate-700/70 hover:border-purple-400/50 backdrop-blur-sm w-full sm:w-auto"
                onClick={() => {
                  const link = document.createElement("a")
                  link.href = "/resume/Prashant_Mishra_Resume.pdf" // Change this to your actual PDF name
                  link.download = "Prashant_Mishra_Resume.pdf" // Change this to your desired download name
                  link.click()
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6"
            >
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-4 h-4" />
                <span className="text-sm lg:text-base">7973745181</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm lg:text-base">Dehradun, India</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full animate-spin-slow opacity-20"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-8 bg-slate-900 rounded-full flex items-center justify-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                  PM
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 animate-bounce text-gray-400" />
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 lg:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Professional Experience</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm lg:text-base">
              Hands-on internship experience in full-stack development and cross-functional collaboration
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500 to-purple-600"></div>

              {/* Experience Items */}
              <div className="space-y-8 lg:space-y-12">
                {/* Integrated Maritime Exchange */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative flex items-start space-x-4 sm:space-x-8"
                >
                  <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center relative z-10">
                    <Code className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <Card className="flex-1 bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Full Stack Developer Intern</h3>
                          <p className="text-pink-400 font-semibold text-sm sm:text-base">
                            Integrated Maritime Exchange
                          </p>
                        </div>
                        <Badge
                          variant="outline"
                          className="text-purple-300 border-purple-400/50 w-fit mt-2 lg:mt-0 text-xs sm:text-sm"
                        >
                          Dec 2024 – Jan 2025
                        </Badge>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-200 mb-2 text-sm sm:text-base">
                            Key Responsibilities:
                          </h4>
                          <ul className="text-gray-300 space-y-1 text-xs sm:text-sm">
                            <li>• Designed and implemented user interface (UI) for the Voyager Estimator</li>
                            <li>• Developed calculation logic for cost and resource estimations</li>
                            <li>• Ensured responsive design for logistics and supply chain management</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-200 mb-2 text-sm sm:text-base">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {["HTML", "CSS", "JavaScript", "MySQL", "cPanel"].map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs bg-slate-700 text-gray-300">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="bg-slate-800/50 rounded-lg p-3 sm:p-4 border border-purple-500/20">
                          <h4 className="font-semibold text-green-400 mb-2 text-sm sm:text-base">Experience Gained:</h4>
                          <p className="text-gray-300 text-xs sm:text-sm">
                            Strengthened UI design skills, gained experience in developing calculation-driven features,
                            and improved collaboration skills through work with cross-functional teams.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Technology Business Incubator */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="relative flex items-start space-x-4 sm:space-x-8"
                >
                  <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center relative z-10">
                    <Database className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <Card className="flex-1 bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Full Stack Developer Intern</h3>
                          <p className="text-purple-400 font-semibold text-sm sm:text-base">
                            Technology Business Incubator
                          </p>
                        </div>
                        <Badge
                          variant="outline"
                          className="text-purple-300 border-purple-400/50 w-fit mt-2 lg:mt-0 text-xs sm:text-sm"
                        >
                          July 2024 – Oct 2024
                        </Badge>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-200 mb-2 text-sm sm:text-base">
                            Key Responsibilities:
                          </h4>
                          <ul className="text-gray-300 space-y-1 text-xs sm:text-sm">
                            <li>• Developed a comprehensive task manager application</li>
                            <li>• Implemented CRUD operations using MongoDB</li>
                            <li>• Built scalable web solutions with modern frameworks</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-200 mb-2 text-sm sm:text-base">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {["React.js", "Node.js", "HTML", "CSS", "JavaScript", "SQL", "MongoDB", "Git"].map(
                              (tech) => (
                                <Badge key={tech} variant="secondary" className="text-xs bg-slate-700 text-gray-300">
                                  {tech}
                                </Badge>
                              ),
                            )}
                          </div>
                        </div>

                        <div className="bg-slate-800/50 rounded-lg p-3 sm:p-4 border border-purple-500/20">
                          <h4 className="font-semibold text-green-400 mb-2 text-sm sm:text-base">Experience Gained:</h4>
                          <p className="text-gray-300 text-xs sm:text-sm mb-3">
                            Gained hands-on experience in full-stack development and improved proficiency in building
                            scalable web solutions.
                          </p>
                          <div className="flex items-center space-x-2">
                            <Award className="w-4 h-4 text-yellow-400" />
                            <a
                              href="https://drive.google.com/file/d/1_oUiUHjoXg52SZA6LALa6-lIky-ZNVkd/view?pli=1"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-yellow-400 hover:text-yellow-300 transition-colors text-xs sm:text-sm font-medium flex items-center space-x-1"
                            >
                              <span>View Certification</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 lg:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm lg:text-base">
              Comprehensive skill set developed through academic coursework, internships, and hands-on project
              experience
            </p>
          </motion.div>

          {/* Skills by Category */}
          <div className="space-y-8 lg:space-y-12">
            {Object.entries(skillCategories).map(([category, config], categoryIndex) => {
              const categorySkills = skills.filter((skill) => skill.category === category)
              if (categorySkills.length === 0) return null

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 }}
                  className="space-y-4 lg:space-y-6"
                >
                  <div className="flex items-center space-x-3 mb-4 lg:mb-6">
                    <div
                      className={`w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-gradient-to-r ${config.color} flex items-center justify-center`}
                    >
                      <config.icon className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white">{category} Skills</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-4">
                    {categorySkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                      >
                        <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group">
                          <CardContent className="p-3 lg:p-4">
                            <div className="flex items-center space-x-2 lg:space-x-3 mb-2 lg:mb-3">
                              <div
                                className={`w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-gradient-to-r ${config.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                              >
                                <skill.icon className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                              </div>
                              <h4 className="font-semibold text-white text-xs lg:text-sm">{skill.name}</h4>
                            </div>
                            <Progress value={skill.level} className="h-1.5 lg:h-2 mb-2" />
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-gray-400">{skill.level}% Proficiency</span>
                              <span
                                className={`text-xs font-medium bg-gradient-to-r ${config.color} bg-clip-text text-transparent`}
                              >
                                {skill.level >= 80 ? "Advanced" : skill.level >= 70 ? "Intermediate" : "Beginner"}
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 lg:mt-16 text-center"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto">
              <div className="bg-white/5 rounded-lg p-4 lg:p-6 border border-white/10">
                <div className="text-2xl lg:text-3xl font-bold text-pink-400 mb-2">{skills.length}+</div>
                <p className="text-gray-300 text-sm lg:text-base">Technologies Mastered</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 lg:p-6 border border-white/10">
                <div className="text-2xl lg:text-3xl font-bold text-purple-400 mb-2">
                  {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
                </div>
                <p className="text-gray-300 text-sm lg:text-base">Average Proficiency</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 lg:p-6 border border-white/10">
                <div className="text-2xl lg:text-3xl font-bold text-orange-400 mb-2">
                  {Object.keys(skillCategories).length}
                </div>
                <p className="text-gray-300 text-sm lg:text-base">Skill Categories</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 lg:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm lg:text-base">
              Showcasing AI/ML expertise, full-stack development, and impactful solutions with measurable business value
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 h-full group">
                  <CardHeader className="p-4 lg:p-6">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-white text-base lg:text-lg group-hover:text-pink-400 transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge
                        variant={project.status === "Live" || project.status === "Production" ? "default" : "secondary"}
                        className="shrink-0 text-xs"
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-400 text-xs lg:text-sm mb-3">
                      {project.description}
                    </CardDescription>
                    <div className="text-xs text-purple-400 font-medium mb-3">{project.date}</div>
                  </CardHeader>
                  <CardContent className="space-y-3 lg:space-y-4 p-4 lg:p-6 pt-0">
                    {/* Key Highlights */}
                    <div>
                      <h4 className="text-xs lg:text-sm font-semibold text-gray-200 mb-2">Key Features:</h4>
                      <ul className="text-xs text-gray-300 space-y-1">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="text-pink-400 mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-xs lg:text-sm font-semibold text-gray-200 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs px-2 py-1">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Impact & Action */}
                    <div className="flex items-center justify-between pt-2 border-t border-white/10">
                      <span className="text-xs lg:text-sm text-green-400 font-medium">{project.impact}</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-pink-400 hover:text-pink-300 p-2"
                        onClick={() => project.githubUrl && window.open(project.githubUrl, "_blank")}
                        disabled={!project.githubUrl}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Projects Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 lg:mt-16 text-center"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto">
              <div className="bg-white/5 rounded-lg p-4 lg:p-6 border border-white/10">
                <div className="text-2xl lg:text-3xl font-bold text-pink-400 mb-2">5+</div>
                <p className="text-gray-300 text-xs lg:text-sm">Projects Completed</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 lg:p-6 border border-white/10">
                <div className="text-2xl lg:text-3xl font-bold text-purple-400 mb-2">3</div>
                <p className="text-gray-300 text-xs lg:text-sm">AI/ML Projects</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 lg:p-6 border border-white/10">
                <div className="text-2xl lg:text-3xl font-bold text-orange-400 mb-2">50%</div>
                <p className="text-gray-300 text-xs lg:text-sm">Security Improvement</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 lg:p-6 border border-white/10">
                <div className="text-2xl lg:text-3xl font-bold text-green-400 mb-2">15+</div>
                <p className="text-gray-300 text-xs lg:text-sm">Technologies Used</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications & Achievements Section */}
      <section className="py-16 lg:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Certifications & Achievements</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm lg:text-base">
              Professional certifications and key milestones that demonstrate expertise and commitment to continuous
              learning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {certificationsAndAchievements.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                  <CardContent className="p-4 lg:p-6 text-center">
                    <div
                      className={`${item.type === "certification" ? "bg-gradient-to-r from-blue-500 to-cyan-500" : "bg-gradient-to-r from-pink-500 to-purple-600"} w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <item.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                    </div>

                    <h3 className="font-semibold text-white mb-2 text-base lg:text-lg">{item.title}</h3>
                    <p className="text-gray-400 text-xs lg:text-sm mb-4">{item.description}</p>

                    {item.issuer && (
                      <div className="mb-4">
                        <Badge
                          variant="outline"
                          className={`${item.type === "certification" ? "border-blue-400/50 text-blue-300" : "border-purple-400/50 text-purple-300"} text-xs`}
                        >
                          {item.issuer}
                        </Badge>
                      </div>
                    )}

                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors text-xs lg:text-sm font-medium"
                      >
                        <span>View Certificate</span>
                        <ExternalLink className="w-3 h-3 lg:w-4 lg:h-4" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Certifications Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 lg:mt-16 text-center"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto">
              <div className="bg-white/5 rounded-lg p-4 lg:p-6 border border-white/10">
                <div className="text-2xl lg:text-3xl font-bold text-blue-400 mb-2">
                  {certificationsAndAchievements.filter((item) => item.type === "certification").length}
                </div>
                <p className="text-gray-300 text-sm lg:text-base">Professional Certifications</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 lg:p-6 border border-white/10">
                <div className="text-2xl lg:text-3xl font-bold text-purple-400 mb-2">Google</div>
                <p className="text-gray-300 text-sm lg:text-base">Cloud & Security Certified</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 lg:p-6 border border-white/10">
                <div className="text-2xl lg:text-3xl font-bold text-orange-400 mb-2">100%</div>
                <p className="text-gray-300 text-sm lg:text-base">Completion Rate</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Let's Build Something Amazing</h2>
            <p className="text-gray-400 text-base lg:text-lg mb-8">
              Ready to contribute to innovative projects and grow with a dynamic team. Let's discuss how I can add value
              to your organization.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 w-full sm:w-auto"
                onClick={() => window.open("mailto:prashantmishra06032003@gmail.com")}
              >
                <Mail className="w-5 h-5 mr-2" />
                prashantmishra06032003@gmail.com
              </Button>
              <Button
                size="lg"
                className="bg-slate-800/60 border border-purple-500/30 text-purple-200 hover:bg-slate-700/80 hover:border-purple-400/50 backdrop-blur-sm w-full sm:w-auto"
              >
                <Phone className="w-5 h-5 mr-2" />
                +91 7973745181
              </Button>
            </div>

            <div className="flex justify-center space-x-6">
              <a href="https://github.com/pmi0603" target="_blank" rel="noopener noreferrer" className="group">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all duration-300 group-hover:scale-110"
                >
                  <Github className="w-6 h-6" />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/prashant-mishra-2b194b256/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-[#0077B5] hover:bg-[#0077B5]/10 transition-all duration-300 group-hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 lg:py-8 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 text-center text-gray-400">
          <p className="text-sm lg:text-base">&copy; 2024 Prashant Mishra. Crafted with passion and precision.</p>
        </div>
      </footer>
    </div>
  )
}

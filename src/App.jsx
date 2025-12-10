import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code2, Database, Server, Palette, ChevronDown, Terminal, Layers, Box, Zap, Globe, Lock, Cloud } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Building Scalable Web Solutions';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // const projects = [

  //  {
  //     title: "Admin Panel Dashboard",
  //     description: "Full-featured e-commerce platform with payment gateway integration (Stripe, PayPal), inventory management, order tracking, and admin analytics dashboard with revenue insights.",
  //     tech: ["React", "Express", "MongoDB","JWT Auth", "AWS S3"],
  //     image: "https://mistisports.s3.ap-south-1.amazonaws.com/f3b52db8-4aee-4d30-a0ee-c5438ba83aec.png",
  //     // metrics: { transactions: "100K+", revenue: "$2M+", rating: "4.8/5" },
  //     github: "https://github.com/Hemnarayan123/ADMIN_FRONTEND",
  //     demo: "https://mistisports-admin.vercel.app/admin/dashboard"
  //   },
  //   {
  //     title: "Web Extension - BookMark Manager",
  //     description: "Professional networking platform for developers featuring job boards, skill matching, code sharing, technical blogs, and integrated video interviews powered by WebRTC.",
  //     tech: ["Manifest V3", "Javascript", "Html", "CSS"],
  //     image: "https://mistisports.s3.ap-south-1.amazonaws.com/1d95058a-ec7b-4ea0-9696-f904de86721a.png",
  //     // metrics: { members: "25K+", jobs: "5K+", matches: "15K+" },
  //     github: "https://github.com/Hemnarayan123/bookmark-frontend",
  //     demo: "https://chromewebstore.google.com/detail/bookmarks-world-viewer/kfkbfhjhekkfnfbgpgipccbaapmjbbci"
  //   },
  //   {
  //     title: "BookMarks World",
  //     description: "AI-powered health monitoring app with symptom analysis, appointment scheduling, prescription management, and telemedicine features. HIPAA compliant with end-to-end encryption.",
  //     tech: ["React", "Express", "Mysql", "Tailwind CSS", "Authentication", "AWS Instance", "AWS RDS", "WinSCP"],
  //     image: "https://mistisports.s3.ap-south-1.amazonaws.com/Screenshot+2025-12-09+164113.png",
  //     // metrics: { patients: "30K+", accuracy: "94%", consultations: "80K+" },
  //     github: "https://github.com/Hemnarayan123/bookmark-frontend",
  //     demo: "https://bookmarksworld.store/"
  //   },
  //   {
  //     title: "Misti Sports",
  //     description: "Personal finance management system with budget tracking, expense categorization, investment portfolio analysis, and predictive spending insights using ML algorithms.",
  //     tech: ["Next.js", "Tailwind CSS", "API", "Domain","Google Reviews", "Dynamic landing page"],
  //     image: "https://mistisports.s3.ap-south-1.amazonaws.com/Screenshot+2025-12-09+163801.png",
  //     // metrics: { users: "40K+", tracked: "$500M+", savings: "avg 22%" },
  //     github: "https://github.com/Hemnarayan123/mishti-sport-frontend",
  //     demo: "https://www.mistisports.shop/"
  //   },
  //   {
  //     title: "AMARA UI DESIGN",
  //     description: "Collaborative document editor with real-time synchronization, version control, comments, mentions, and 50+ file format support. Built with operational transformation for conflict resolution.",
  //     tech: ["React", "Tailwind CSS", "Vercel"],
  //     image: "https://mistisports.s3.ap-south-1.amazonaws.com/Screenshot+2025-12-09+161756.png",
  //     // metrics: { docs: "200K+", storage: "5TB+", collaborators: "100K+" },
  //     github: "https://github.com/Hemnarayan123/Amara",
  //     demo: "https://amara-three.vercel.app/"
  //   }
  // ];
const projects = [

  {
    title: "Admin Panel Dashboard",
    description: "A complete e-commerce admin system with product management, inventory tracking, order control, authentication, analytics, and secure file storage using AWS S3.",
    tech: ["React", "Express", "MongoDB", "JWT Auth", "AWS S3"],
    image: "https://mistisports.s3.ap-south-1.amazonaws.com/f3b52db8-4aee-4d30-a0ee-c5438ba83aec.png",
    github: "https://github.com/Hemnarayan123/ADMIN_FRONTEND",
    demo: "https://mistisports-admin.vercel.app/admin/dashboard"
  },

  {
    title: "Web Extension - BookMark Manager",
    description: "A browser extension designed to organize, visualize, and manage bookmarks efficiently with drag-and-drop sorting, search, and quick launch support.",
    tech: ["Manifest V3", "Javascript", "Html", "CSS"],
    image: "https://mistisports.s3.ap-south-1.amazonaws.com/1d95058a-ec7b-4ea0-9696-f904de86721a.png",
    github: "https://github.com/Hemnarayan123/bookmark-frontend",
    demo: "https://chromewebstore.google.com/detail/bookmarks-world-viewer/kfkbfhjhekkfnfbgpgipccbaapmjbbci"
  },

  {
    title: "BookMarks World",
    description: "A full-stack platform that allows users to store, categorize, and securely manage their bookmarks across devices with custom folders, search, and authentication.",
    tech: ["React", "Express", "Mysql", "Tailwind CSS", "Authentication", "AWS Instance", "AWS RDS", "WinSCP"],
    image: "https://mistisports.s3.ap-south-1.amazonaws.com/Screenshot+2025-12-09+164113.png",
    github: "https://github.com/Hemnarayan123/bookmark-frontend",
    demo: "https://bookmarksworld.store/"
  },

  {
    title: "Misti Sports",
    description: "A modern e-commerce storefront featuring product listings, cart system, reviews, SEO optimization, dynamic pages, Google review integration, and secure order processing.",
    tech: ["Next.js", "Tailwind CSS", "API", "Domain", "Google Reviews", "Dynamic landing page"],
    image: "https://mistisports.s3.ap-south-1.amazonaws.com/Screenshot+2025-12-09+163801.png",
    github: "https://github.com/Hemnarayan123/mishti-sport-frontend",
    demo: "https://www.mistisports.shop/"
  },

  {
    title: "AMARA UI DESIGN",
    description: "A polished UI concept and design system built using modern components, animations, and clean layouts to showcase a responsive and visually appealing user experience.",
    tech: ["React", "Tailwind CSS", "Vercel"],
    image: "https://mistisports.s3.ap-south-1.amazonaws.com/Screenshot+2025-12-09+161756.png",
    github: "https://github.com/Hemnarayan123/Amara",
    demo: "https://amara-three.vercel.app/"
  }
];

  const skills = [
    { name: "MongoDB", icon: Database, color: "from-green-400 to-emerald-600", description: "NoSQL database design & optimization" },
    { name: "Express.js", icon: Server, color: "from-gray-400 to-gray-600", description: "RESTful API development" },
    { name: "React.js", icon: Code2, color: "from-cyan-400 to-blue-600", description: "Modern UI/UX development" },
    { name: "Node.js", icon: Terminal, color: "from-green-500 to-green-700", description: "Backend server architecture" },
    { name: "Redux", icon: Layers, color: "from-purple-400 to-purple-600", description: "State management solutions" },
    { name: "TypeScript", icon: Code2, color: "from-blue-500 to-blue-700", description: "Type-safe development" },
    { name: "Tailwind CSS", icon: Palette, color: "from-cyan-400 to-teal-600", description: "Utility-first styling" },
    { name: "Next.js", icon: Box, color: "from-gray-700 to-gray-900", description: "SSR & SSG frameworks" },
    { name: "GraphQL", icon: Globe, color: "from-pink-400 to-pink-600", description: "Efficient data querying" },
    { name: "JWT Auth", icon: Lock, color: "from-orange-400 to-red-600", description: "Secure authentication" },
    { name: "Docker", icon: Box, color: "from-blue-400 to-cyan-600", description: "Containerization & deployment" },
    { name: "AWS", icon: Cloud, color: "from-yellow-500 to-orange-600", description: "Cloud infrastructure" }
  ];

const experience = [
  {
    role: "Backend Engineer / Full Stack Developer",
    company: "Riverhouse Technologies Pvt Ltd",
    period: "Jan-2025 - Present",
    description:
      "Spearheading backend development with a strong focus on scalability, reliability, and automation. Manage email and mobile notification systems, implement webhook integrations, and optimize communication workflows using SendGrid. Develop and maintain AWS Lambda functions, scheduled cron jobs, and microservice components to support high-traffic environments."
  },
  {
    role: "Full Stack Developer",
    company: "Brenin Inc.",
    period: "Sep-2024 - Jan-2025",
    description:
      "Contributed to a product-based engineering team delivering robust, user-centric software solutions. Supported key product development initiatives through reliable coding practices, rapid learning, and effective cross-team collaboration."
  },
  {
    role: "Web Developer",
    company: "Open Innovation Lab",
    period: "Aug-2023 - Aug-2024",
    description:
      "Worked in a service-based environment delivering responsive web applications and backend APIs. Collaborated with designers, QA teams, and project managers to build high-quality digital solutions tailored to diverse client requirements."
  }
];


  const stats = [
    { label: "Years Experience", value: "2+", icon: Zap },
    { label: "Projects Completed", value: "10+", icon: Box },
    // { label: "Happy Clients", value: "30+", icon: Globe },
    { label: "Code Commits", value: "1000+", icon: Terminal }
  ];

  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen relative overflow-x-hidden">
      {/* Custom Cursor */}
      <div 
        className="fixed w-5 h-5 border-2 border-cyan-400 rounded-full pointer-events-none z-50 transition-transform duration-150"
        style={{ 
          left: `${mousePosition.x}px`, 
          top: `${mousePosition.y}px`,
          transform: `translate(-50%, -50%) scale(${cursorVariant === 'hover' ? 1.5 : 1})`
        }}
      />

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-50">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/95 backdrop-blur-xl z-40 border-b border-gray-800/50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur-lg opacity-75 animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-cyan-400 to-blue-500 p-2 rounded-lg">
                  <Terminal className="w-6 h-6 text-gray-900" />
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Hemnarayan
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-1">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 relative overflow-hidden group ${
                    activeSection === item ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
                  }`}
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  <span className="relative z-10 capitalize">{item}</span>
                  {activeSection === item && (
                    <div className="absolute inset-0 bg-cyan-400/10 rounded-lg"></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </a>
              ))}
            </div>

            <button
              className="md:hidden relative p-2 text-gray-300 hover:text-cyan-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/98 backdrop-blur-xl border-t border-gray-800">
            <div className="px-4 py-6 space-y-4">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="block text-lg text-gray-300 hover:text-cyan-400 transition-colors capitalize py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-blue-500/5"></div>
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-cyan-400/10 rounded-full"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animation: `float ${Math.random() * 20 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-block">
              <div className="px-6 py-2 mt-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm">
                <p className="text-cyan-400 font-mono text-sm">👋 Welcome to my portfolio</p>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              <span className="block bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-2">
                Hemnarayan
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
            </h1>
            
            <div className="h-12 flex items-center justify-center">
              <p className="text-xl md:text-2xl text-gray-400 font-mono">
                {typedText}
                <span className="inline-block w-0.5 h-6 bg-cyan-400 ml-1 animate-pulse"></span>
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a 
                href="#projects" 
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105"
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                <span className="relative z-10 font-semibold">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </a>
              <a 
                href="#contact" 
                className="group relative px-8 py-4 border-2 border-cyan-500 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105"
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                <span className="relative z-10 font-semibold">Get In Touch</span>
                <div className="absolute inset-0 bg-cyan-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </a>
            </div>

            <div className="flex justify-center gap-6 pt-8">
              {[
                { Icon: Github, link: "https://github.com/Hemnarayan123", label: "GitHub" },
                { Icon: Linkedin, link: "https://www.linkedin.com/in/hemnarayan-yadav-5aa450283/", label: "LinkedIn" },
                { Icon: Mail, link: "mailto:hemnarayan.developer@gmail.com", label: "Email" }
              ].map(({ Icon, link, label }) => (
                <a
                  key={label}
                  href={link}
                  className="group relative p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl transition-all duration-300 hover:border-cyan-500/50 hover:scale-110 hover:-translate-y-1"
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                  aria-label={label}
                >
                  <Icon className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                </a>
              ))}
            </div>

            <div className="pt-12 animate-bounce">
              <a href="#about">
                <ChevronDown className="w-8 h-8 mx-auto text-cyan-400" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group relative p-8 bg-gradient-to-br from-gray-900 to-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl transition-all duration-300 hover:border-cyan-500/50 hover:scale-105 hover:-translate-y-2"
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  <div className="relative">
                    <Icon className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                    <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="prose prose-invert max-w-none">
                <p className="text-xl text-gray-300 leading-relaxed">
                  I'm a passionate Full Stack Developer with <span className="text-cyan-400 font-semibold">2+ years</span> of experience specializing in the MERN stack. I transform complex problems into elegant, scalable solutions that drive business growth and enhance user experiences.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  My journey in web development started with a curiosity for how things work behind the scenes. Today, I architect and build production-ready applications that serve thousands of users daily, with a strong focus on performance, security, and maintainability.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  I believe in writing clean, efficient code and staying updated with the latest industry trends. From database optimization to creating intuitive user interfaces, I handle the complete development lifecycle with expertise and precision.
                </p>
              </div>

              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className="group p-6 bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-xl hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-cyan-400">{exp.role}</h3>
                        <p className="text-gray-400">{exp.company}</p>
                      </div>
                      <span className="text-sm text-gray-500 font-mono">{exp.period}</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-900/50 p-8 rounded-3xl border border-gray-800">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl">
                    <Terminal className="w-8 h-8 text-cyan-400" />
                    <div>
                      <p className="text-sm text-gray-400">Specialization</p>
                      <p className="font-semibold text-white">Full Stack Development ( MERN )</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl">
                    <Code2 className="w-8 h-8 text-blue-400" />
                    <div>
                      <p className="text-sm text-gray-400">Focus Areas</p>
                      <p className="font-semibold text-white">Full Stack • Cloud • DevOps</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl">
                    <Globe className="w-8 h-8 text-purple-400" />
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="font-semibold text-white">Bhilai-Raipur, India (Remote Available)</p>
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl">
                    <p className="text-gray-300 italic">
                      "Code is like humor. When you have to explain it, it's bad." - Cory House
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative bg-gradient-to-b from-gray-900/50 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Technical Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Mastering the complete web development stack with modern tools and frameworks
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="group relative p-8 bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-2xl transition-all duration-500 hover:border-cyan-500/50 hover:scale-105"
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  
                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 bg-gradient-to-br ${skill.color} rounded-xl group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      {/* <span className="text-2xl font-bold text-cyan-400">{skill.level}%</span> */}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
                    {/* <p className="text-sm text-gray-400 mb-4">{skill.description}</p> */}
                    
                    {/* <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          transitionDelay: `${index * 100}ms`
                        }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Showcasing real-world applications built with cutting-edge technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden transition-all duration-500 hover:border-cyan-500/50 hover:scale-105 hover:-translate-y-2"
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 pointer-events-none"></div>
                </div>

                <div className="relative h-56"> <img src={project.image} alt={project.title} />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 pointer-events-none"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 flex-wrap">
                    {project.tech.slice(0, 8).map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white border border-white/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 space-y-4 pointer-events-auto">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* <div className="grid grid-cols-3 gap-3 pt-2">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center p-3 bg-gray-800/50 rounded-lg">
                        <div className="text-cyan-400 font-bold text-sm">{value}</div>
                        <div className="text-gray-500 text-xs capitalize">{key}</div>
                      </div>
                    ))}
                  </div> */}

                  <div className="flex gap-3 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group/btn"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg transition-colors group/btn"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Let's Build Something Amazing
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Have a project in mind? Let's discuss how we can work together
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-900/50 p-8 md:p-12 rounded-3xl border border-gray-800">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Email Address</label>
                    <input
                      type="email"
                      placeholder="raj@example.com"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Subject</label>
                  <input
                    type="text"
                    placeholder="Project Discussion"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Message</label>
                  <textarea
                    rows="6"
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105"
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  Send Message
                </button>
              </form>

              <div className="mt-12 pt-8 border-t border-gray-800">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl">
                    <Mail className="w-6 h-6 text-cyan-400" />
                    <div>
                      <p className="text-xs text-gray-400">Email</p>
                      <p className="text-sm font-medium text-white">hemnarayan.developer@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl">
                    <Globe className="w-6 h-6 text-blue-400" />
                    <div>
                      <p className="text-xs text-gray-400">Location</p>
                      <p className="text-sm font-medium text-white">Bhilai-Raipur, India</p>
                    </div>
                  </div>
                  {/* <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl">
                    <Terminal className="w-6 h-6 text-purple-400" />
                    <div>
                      <p className="text-xs text-gray-400">Available</p>
                      <p className="text-sm font-medium text-white">For Projects</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg">
                <Terminal className="w-5 h-5 text-gray-900" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Hemnarayan
              </span>
            </div>
            
            <p className="text-gray-400 text-sm">
              © 2025 All rights reserved.
            </p>

            <div className="flex gap-4">
              <a href="https://github.com" className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                <Github className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
              </a>
              <a href="https://linkedin.com" className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
              </a>
              <a href="mailto:" className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                <Mail className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.5; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
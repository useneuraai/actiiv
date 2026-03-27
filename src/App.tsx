/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Github, 
  ExternalLink, 
  Mail, 
  Instagram,
  Code2, 
  Database, 
  Layout, 
  Terminal,
  ChevronRight,
  Menu,
  X,
  Check
} from "lucide-react";
import { useState, useEffect, type MouseEvent } from "react";
import neuraaiImg from "../assets/neuraai.png";
import sngschoolImg from "../assets/sngschool.png";
import realestateImg from "../assets/realestate.png";
import dentoImg from "../assets/dento.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Works", href: "#projects" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  const handleMobileNavClick = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsOpen(false);
    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", href);
      }, 120);
    } else {
      window.location.hash = href;
    }
  };

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center glass rounded-full py-4 px-8 mx-4 md:mx-auto flowy-bg border-white/5 shadow-2xl shadow-accent/5">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold italic tracking-tighter"
        >
          Actiiv
        </motion.div>

        {/* Desktop Nav */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:flex gap-8 text-sm font-medium text-white/60"
        >
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-white transition-colors relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
            </a>
          ))}
        </motion.div>

        <div className="flex items-center gap-4">
          <motion.a 
            href="#contact"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden sm:group sm:flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-accent hover:text-white transition-all"
          >
            Get in touch
            <div className="bg-accent group-hover:bg-white p-1 rounded-full transition-colors">
              <ArrowRight className="w-3 h-3 text-white group-hover:text-accent" />
            </div>
          </motion.a>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t-0 rounded-b-3xl mx-4 mt-2 overflow-hidden flowy-bg"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-xl font-display font-bold hover:text-accent transition-colors"
                  onClick={handleMobileNavClick(link.href)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                className="flex items-center justify-between bg-white text-black px-6 py-4 rounded-2xl font-bold"
                onClick={handleMobileNavClick("#contact")}
              >
                Get in touch
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto pt-20 pb-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] glow-circle -z-10 opacity-50" />
      <div className="absolute top-[20%] right-[10%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-accent/20 rounded-full blur-[80px] md:blur-[120px] -z-10" />

      <div className="max-w-4xl">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-accent font-display font-semibold tracking-widest uppercase text-[10px] md:text-xs mb-6"
        >
          Full-Stack Web Agency
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl sm:text-6xl md:text-8xl font-display font-extrabold leading-[0.9] tracking-tighter mb-8"
        >
          WE BUILD WEB <br />
          <span className="text-white/40">PRODUCTS THAT</span> <br />
          WORK.
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row md:items-center gap-8"
        >
          <p className="text-base md:text-lg text-white/60 max-w-md leading-relaxed">
            Actiiv is a small, focused full-stack agency. We design and develop fast, clean web applications — from idea to deployment.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="px-6 md:px-8 py-3 md:py-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all font-bold text-sm"
            >
              See our work →
            </a>
          </div>
        </motion.div>
      </div>

      {/* Hero Stats/Features */}
      <div className="mt-24 grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 border-t border-white/10 pt-12">
        {[
          { id: "01", label: "Web Design" },
          { id: "02", label: "Full Stack" },
          { id: "03", label: "SaaS Dev" },
          { id: "04", label: "Clean Code" },
          { id: "05", label: "Fast Delivery" },
        ].map((item, i) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + (i * 0.1) }}
            className="flex flex-col gap-1 md:gap-2"
          >
            <span className="text-accent font-display font-bold text-[10px] md:text-xs">/ {item.id}</span>
            <span className="text-[10px] md:text-sm font-medium text-white/80 uppercase tracking-wider">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="scroll-mt-28 py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Who we are</h2>
          <div className="space-y-6 text-base md:text-lg text-white/60 leading-relaxed">
            <p>
              Actiiv is a lean team of 2–3 full-stack developers who started building for the web out of genuine curiosity. We're students who got tired of waiting to "have enough experience" — so we started shipping instead.
            </p>
            <p>
              We take on projects where we can actually make a difference: clean code, clear communication, and no fluff. We're not a big agency with layers of account managers. You talk directly to the people building your product.
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-square md:aspect-auto md:h-full flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-accent/10 rounded-3xl blur-3xl" />
          <div className="relative glass p-8 md:p-12 rounded-3xl border-accent/20">
            <p className="text-2xl md:text-4xl font-display font-bold italic leading-tight">
              "Small team. <br />
              <span className="text-accent">Serious work.</span>"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = [
    { category: "Frontend", tech: "TypeScript, Tailwind CSS", icon: <Layout className="w-5 h-5" /> },
    { category: "Backend", tech: "Node.js", icon: <Terminal className="w-5 h-5" /> },
    { category: "Tools & Workflow", tech: "Git, GitHub, VS Code, Figma", icon: <Code2 className="w-5 h-5" /> },
    { category: "Currently Learning", tech: "React / Next.js, databases, deployment", icon: <Database className="w-5 h-5" /> },
  ];

  return (
    <section id="skills" className="scroll-mt-28 py-20 md:py-32 bg-white/5">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 md:mb-16 text-center">Our Toolkit</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 md:p-8 rounded-2xl hover:border-accent/50 transition-colors group"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-all">
                {skill.icon}
              </div>
              <h3 className="text-[10px] md:text-sm font-display font-bold uppercase tracking-widest text-accent mb-2">{skill.category}</h3>
              <p className="text-sm md:text-base text-white/80 font-medium">{skill.tech}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      name: "Neura AI",
      tag: "Full stack web app for AI agents",
      description: "A platform for building and deploying AI agents that can perform complex tasks across the web, using natural language prompts.",
      stack: "Node.js · TypeScript · Tailwind CSS",
      image: neuraaiImg,
      links: { live: "https://useneura.xyz"}
    },
    {
      name: "Sree Narayana Guru Matric Hr Sec School",
      tag: "School Website",
      description: "A high-performance website for a local school, featuring dynamic content management and a modern design.",
      stack: "Wordpress · PHP · Elementor",
      image: sngschoolImg,
      links: { live: "https://sngmhskpm.wordpress.com/" }
    },
    {
      name: "Real Estate Website",
      tag: "Real Estate",
      description: "A sleek, responsive website for a real estate agency, showcasing property listings with advanced search and filtering capabilities.",
      stack: "Next.js · TypeScript · Firebase",
      image: realestateImg,
      links: { live: "#"}
    },
    {
      name: "Dento",
      tag: "Dental Clinic Website",
      description: "A sleek, responsive website for a dental clinic, featuring patient testimonials and an easy-to-use appointment booking system.",
      stack: "Next.js · Supabase · Tailwind",
      image: dentoImg,
      links: { live: "https://dev-dentoclinic.pantheonsite.io/" }
    }
  ];

  // Double the projects for a seamless loop
  const marqueeProjects = [...projects, ...projects];

  return (
    <section id="projects" className="scroll-mt-28 py-20 md:py-32 overflow-hidden">
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Selected Works</h2>
        <p className="text-white/60 max-w-md">A collection of projects where we've pushed the boundaries of what's possible on the web.</p>
      </div>

      <div className="relative flex overflow-hidden pb-12">
        <div className="flex animate-marquee whitespace-nowrap gap-6 md:gap-8 px-4">
          {marqueeProjects.map((project, i) => (
            <motion.div
              key={`${project.name}-${i}`}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-[300px] md:w-[450px] flex-shrink-0 group cursor-pointer"
            >
              <div className="aspect-[16/10] bg-white/5 rounded-3xl overflow-hidden mb-6 relative" style={{ backgroundImage: `url(${project.image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="flex gap-4">
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm border border-accent/20">
                    {project.tag}
                  </span>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold mb-2 group-hover:text-accent transition-colors">{project.name}</h3>
              <p className="text-white/60 text-xs md:text-sm mb-4 line-clamp-2 whitespace-normal">{project.description}</p>
              <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{project.stack}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      <div className="grid md:grid-cols-3 gap-12 md:gap-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold">How we work</h2>
        <div className="md:col-span-2 space-y-12">
          <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
            <span className="text-accent font-display font-bold text-sm">2024 – Present</span>
            <div>
              <h3 className="text-xl font-bold mb-2">Freelance — Actiiv</h3>
              <p className="text-white/60 leading-relaxed text-sm md:text-base">
                Building full-stack web projects for clients as an independent agency. End-to-end ownership from scoping to deployment. We focus on delivering high-quality code and exceptional user experiences.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
            <span className="text-accent font-display font-bold text-sm">Continuous</span>
            <div>
              <h3 className="text-xl font-bold mb-2">Self-directed learning & building</h3>
              <p className="text-white/60 leading-relaxed text-sm md:text-base">
                Continuously learning through building real projects — not just tutorials. Focus on TypeScript, Node.js, and modern web development practices. We stay ahead of the curve by experimenting with the latest technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Rs.2999",
      bestFor: "individuals, freelancers, or small businesses needing an online presence fast.",
      features: [
        "Single-page landing page",
        "Mobile responsive design",
        "Tailwind CSS styling",
        "Contact form integration",
        "Delivered in 2–3 days"
      ],
      cta: "Get started →",
      popular: false
    },
    {
      name: "Business",
      price: "Rs.5999",
      bestFor: "small businesses wanting a full website with multiple pages.",
      features: [
        "Up to 5 pages (Home, About, Services, Blog, Contact)",
        "Mobile responsive design",
        "Tailwind CSS styling",
        "Contact form + basic SEO setup",
        "1 round of revisions",
        "Delivered in 5–7 days"
      ],
      cta: "Get started →",
      popular: true
    },
    {
      name: "Custom",
      price: "Let's talk",
      bestFor: "businesses with specific requirements or larger scope.",
      features: [
        "Everything in Business",
        "Web app features / dashboards",
        "Custom functionality scoped to your needs",
        "Ongoing support available",
        "Timeline based on scope"
      ],
      cta: "Contact us →",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="scroll-mt-28 py-20 md:py-32 bg-white/5">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Simple, Transparent Pricing</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-lg">
            Choose the plan that fits your needs. No hidden fees, just high-quality work delivered fast.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative glass p-8 md:p-10 rounded-[32px] border-white/10 flex flex-col h-full ${plan.popular ? 'border-accent/50 ring-1 ring-accent/20' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-accent/20 flex items-center gap-1">
                  <span className="text-xs">⭐</span> Most popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-display font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-display font-bold">{plan.price}</span>
                </div>
                <p className="text-sm text-white/60 leading-relaxed min-h-[3rem]">
                  Best for: {plan.bestFor}
                </p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-sm text-white/80">
                    <div className="mt-1 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <a 
                href="#contact"
                className={`w-full py-4 rounded-2xl font-bold text-center transition-all ${plan.popular ? 'bg-accent text-white hover:bg-accent/80' : 'bg-white text-black hover:bg-accent hover:text-white'}`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // Using FormSubmit.co as the email backend
      const response = await fetch("https://formsubmit.co/ajax/actiivagency07@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Contact Form Submission from ${formData.name}`,
          _captcha: false
        })
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus(""), 3000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-28 py-12 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="glass p-6 md:p-16 rounded-[24px] md:rounded-[40px] border-white/5 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/20 rounded-full blur-[100px]" />
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 relative z-10">
          <div>
            <h2 className="text-3xl md:text-6xl font-display font-bold mb-4 md:mb-8 leading-tight">
              Let's build <br />
              something <span className="text-accent">together</span>
            </h2>
            <p className="text-sm md:text-lg text-white/60 mb-6 md:mb-12 max-w-sm">
              Have a project in mind? We'd love to hear about it. We're currently open to new client work.
            </p>
            
            <div className="flex items-center gap-4 text-white/80 hover:text-accent transition-colors cursor-pointer group">
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/20">
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <span className="font-medium text-xs md:text-base">actiivagency07@gmail.com</span>
            </div>
          </div>

          <form className="space-y-3 md:space-y-6" onSubmit={handleSubmit}>
            <div className="grid gap-3 md:gap-6">
              <div className="space-y-1 md:space-y-2">
                <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Name</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg md:rounded-2xl px-5 py-2.5 md:px-6 md:py-4 focus:outline-none focus:border-accent transition-colors text-xs md:text-sm"
                />
              </div>
              <div className="space-y-1 md:space-y-2">
                <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Email</label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg md:rounded-2xl px-5 py-2.5 md:px-6 md:py-4 focus:outline-none focus:border-accent transition-colors text-xs md:text-sm"
                />
              </div>
              <div className="space-y-1 md:space-y-2">
                <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Message</label>
                <textarea 
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg md:rounded-2xl px-5 py-2.5 md:px-6 md:py-4 focus:outline-none focus:border-accent transition-colors resize-none text-xs md:text-sm"
                />
              </div>
            </div>
            
            {submitStatus === "success" && (
              <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400 text-sm text-center">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}
            
            {submitStatus === "error" && (
              <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 text-sm text-center">
                Error sending message. Please try again.
              </div>
            )}
            
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full group flex items-center justify-center gap-3 bg-white text-black py-3.5 md:py-5 rounded-lg md:rounded-2xl font-bold hover:bg-accent hover:text-white transition-all text-xs md:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <div className="bg-accent group-hover:bg-white p-1 rounded-full transition-colors">
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-white group-hover:text-accent" />
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-xl font-display font-bold italic tracking-tighter">Actiiv</div>
      <div className="text-white/40 text-xs md:text-sm text-center">
        © 2026 Actiiv Agency. All rights reserved.
      </div>
      <div className="flex gap-6 text-white/40">
        <a href="https://www.instagram.com/actiivagency07/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
        <button 
          onClick={() => window.location.href = 'mailto:actiivagency07@gmail.com'}
          className="hover:text-white transition-colors bg-none border-none cursor-pointer p-0"
        >
          <Mail className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="relative topo-bg">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const portfolioProjects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A modern, responsive e-commerce platform built with cutting-edge technologies. Features include real-time inventory management, secure payments, and an intuitive admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
  },
  {
    title: 'Mobile Banking App',
    description:
      'Secure mobile banking application with biometric authentication, real-time notifications, and seamless money transfers. Designed with user experience as the top priority.',
    tech: ['React Native', 'Firebase', 'Redux', 'Plaid API'],
  },
  {
    title: 'AI Analytics Dashboard',
    description:
      'Data visualization dashboard powered by machine learning algorithms. Provides real-time insights and predictive analytics for business decision-making.',
    tech: ['Python', 'TensorFlow', 'D3.js', 'PostgreSQL'],
  },
  {
    title: 'Creative Agency Website',
    description:
      'Award-winning website for a creative agency featuring advanced animations, interactive elements, and optimized performance across all devices.',
    tech: ['Vue.js', 'GSAP', 'Three.js', 'Webpack'],
  },
];

const skills = [
  { icon: '⚛️', title: 'Frontend Development', desc: 'React, Vue.js, Angular, TypeScript' },
  { icon: '🚀', title: 'Backend Development', desc: 'Node.js, Python, Express, Django' },
  { icon: '📱', title: 'Mobile Development', desc: 'React Native, Flutter, Swift' },
  { icon: '🛢️', title: 'Database Management', desc: 'MongoDB, PostgreSQL, Redis' },
  { icon: '☁️', title: 'Cloud & DevOps', desc: 'AWS, Docker, Kubernetes, CI/CD' },
  { icon: '🎨', title: 'UI/UX Design', desc: 'Figma, Adobe Creative Suite' },
];

const certificates = [
  {
    title: 'React Developer Certification',
    issuer: 'Meta',
    date: 'December 2023',
    description: 'Comprehensive React development certification covering modern React patterns, hooks, and best practices.',
    link: '/images/cer1.jpg'
  },
  {
    title: 'AWS Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'November 2023',
    description: 'Professional certification demonstrating expertise in designing distributed systems on AWS.',
    link: '/images/cer2.jpg'
  },
  {
    title: 'JavaScript Algorithms & Data Structures',
    issuer: 'freeCodeCamp',
    date: 'October 2023',
    description: 'Mastered JavaScript fundamentals, ES6, regular expressions, debugging, and data structures.',
    link: '/images/cer3.jpg'
  },
  {
    title: 'Python for Data Science',
    issuer: 'Coursera',
    date: 'September 2023',
    description: 'Advanced Python programming for data analysis, machine learning, and scientific computing.',
    link: '/images/cer4.jpg'
  },
 
];

const socialLinks = [
  { icon: '📧', href: '#' },
  { icon: '💼', href: '#' },
  { icon: '🐦', href: '#' },
  { icon: '📷', href: '#' },
];

const App = () => {
  const [lightMode, setLightMode] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [formStatus, setFormStatus] = useState('idle');
  const submitBtnRef = useRef(null);
  const particlesRef = useRef(null);

  // Theme persistence
  useEffect(() => {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setLightMode(storedTheme === 'light');
    } else {
      setLightMode(!prefersDark);
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle('light-mode', lightMode);
    localStorage.setItem('theme', lightMode ? 'light' : 'dark');
  }, [lightMode]);

  // Particles
  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    container.innerHTML = '';
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      const size = Math.random() * 10 + 5;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      particle.style.animationDelay = Math.random() * 6 + 's';
      particle.style.animationDuration = Math.random() * 3 + 3 + 's';
      container.appendChild(particle);
    }
  }, []);

  // Scroll/animation logic
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      const scrolled = window.pageYOffset > 50;
      if (navbar) navbar.classList.toggle('scrolled', scrolled);
      // Scroll indicator
      const percent = (window.pageYOffset / (document.body.scrollHeight - window.innerHeight)) * 100;
      setScrollPercent(percent);
      // Animate elements
      document.querySelectorAll('.section, .portfolio-item, .skill-item, .certificate-item, .form-group').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          el.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Portfolio hover effect
  useEffect(() => {
    document.querySelectorAll('.portfolio-item').forEach(item => {
      item.addEventListener('mouseenter', function () {
        this.style.background = 'rgba(66, 165, 245, 0.1)';
      });
      item.addEventListener('mouseleave', function () {
        this.style.background = lightMode ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.05)';
      });
    });
  }, [lightMode]);

  // Smooth scroll for nav links
  useEffect(() => {
    const handler = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handler);
    });
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handler);
      });
    };
  }, []);

  // Form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('sent');
      setTimeout(() => {
        setFormStatus('idle');
        e.target.reset();
      }, 2000);
    }, 1500);
  };

  return (
    <>
      <div className="scroll-indicator" style={{ width: `${scrollPercent}%` }}></div>
      <div className="particles" ref={particlesRef}></div>
      <Navbar lightMode={lightMode} setLightMode={setLightMode} />
      <Hero />
      <Portfolio projects={portfolioProjects} />
      <Skills skills={skills} />
      <Certificates certificates={certificates} />
      <ContactForm formStatus={formStatus} handleFormSubmit={handleFormSubmit} submitBtnRef={submitBtnRef} />
      <Footer socialLinks={socialLinks} />
    </>
  );
};

export default App;
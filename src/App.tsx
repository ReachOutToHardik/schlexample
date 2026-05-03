/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Menu,
  X,
  ChevronRight,
  GraduationCap,
  Users,
  Clock,
  Trophy,
  BookOpen,
  Lightbulb,
  Heart,
  Globe,
  ArrowRight,
  CheckCircle2,
  Info,
  Download,
  Monitor,
  Music,
  Palette,
  Microscope,
  HelpCircle,
  ChevronDown,
  ExternalLink,
  Target,
  Shield,
  Star
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---



const TopBar = () => (
  <div className="bg-school-primary text-white py-2.5 px-4 md:px-12 hidden md:flex justify-between items-center text-[11px] font-bold tracking-widest uppercase border-b border-white/5">
    <div className="flex items-center gap-10">
      <div className="flex items-center gap-2">
        <MapPin size={14} className="text-school-accent" />
        <span className="opacity-80">Survey No. 42, Electronic City Phase 1, Bengaluru - 560100</span>
      </div>
      <div className="flex items-center gap-2 border-l border-white/10 pl-10">
        <Mail size={14} className="text-school-accent" />
        <span className="opacity-80">admissions@vidyashakti.edu.in</span>
      </div>
    </div>
    <div className="flex items-center gap-8">
      <span className="flex items-center gap-2">
        <Phone size={14} className="text-school-accent" />
        Toll Free: 1800-222-3333
      </span>
      <div className="flex items-center gap-4 bg-white/5 px-4 py-1 rounded">
        <Facebook size={14} className="hover:text-school-accent cursor-pointer transition-colors" />
        <Twitter size={14} className="hover:text-school-accent cursor-pointer transition-colors" />
        <Instagram size={14} className="hover:text-school-accent cursor-pointer transition-colors" />
      </div>
    </div>
  </div>
);

const Marquee = () => (
  <div className="bg-school-secondary text-white py-2.5 overflow-hidden border-y border-white/10">
    <div className="container mx-auto px-4 md:px-12 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <div className="bg-school-accent text-white font-black px-4 py-1 text-[9px] uppercase tracking-widest italic shrink-0">
          Latest Announcement
        </div>
        <div className="text-[11px] font-bold tracking-wide opacity-90 truncate">
          Admissions Open for 2026-27: Kindergarten to Grade XII &bull; 100% CBSE Result Achieved for the 10th Consecutive Year
        </div>
      </div>
      <div className="hidden md:flex items-center gap-2 text-school-accent font-black text-[9px] uppercase tracking-widest">
        View All <ChevronRight size={14} />
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About VIS', path: '/about' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Academics', path: '/academics' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Infrastructure', path: '/facilities' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      "sticky top-0 z-50 transition-all duration-500 px-4 md:px-12 flex justify-between items-center group",
      isScrolled ? "bg-white py-3 shadow-2xl" : "bg-white py-6"
    )}>
      <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate('/')}>
        <div className="w-14 h-14 md:w-16 md:h-16 bg-white border-2 border-school-primary rounded-full flex items-center justify-center p-1 shadow-xl relative">
          <div className="w-full h-full border-2 border-school-accent rounded-full flex items-center justify-center text-school-primary font-serif font-black text-2xl">V</div>
        </div>
        <div className="flex flex-col">
          <span className="font-serif font-black text-xl md:text-2xl text-school-primary leading-none tracking-tight">VIDYASHAKTI</span>
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-school-secondary font-black">International School, Bangalore</span>
        </div>
      </div>

      <div className="hidden xl:flex items-center gap-10">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={cn(
              "text-[12px] font-black uppercase tracking-[0.1em] transition-all relative pb-2 outline-none",
              location.pathname === link.path
                ? "text-school-primary after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-school-accent"
                : "text-slate-500 hover:text-school-primary"
            )}
          >
            {link.name}
          </Link>
        ))}
        <div className="flex gap-2 ml-4">
          <Link
            to="/admissions"
            className="bg-school-accent text-white px-6 py-3 font-black text-[10px] uppercase tracking-widest hover:bg-school-primary transition-all shadow-lg rounded-sm"
          >
            Apply Now
          </Link>
        </div>
      </div>

      <button className="xl:hidden hover:rotate-90 transition-transform" onClick={() => setMobileMenuOpen(true)}>
        <Menu size={32} className="text-school-primary" />
      </button>

      {/* Mobile Menu */}
      
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-school-primary z-[100] p-8 text-white flex flex-col">
            <div className="flex justify-between items-center mb-16">
              <span className="font-serif font-black text-3xl uppercase tracking-tighter">Vidyashakti</span>
              <button onClick={() => setMobileMenuOpen(false)}><X size={40} /></button>
            </div>
            <div className="flex flex-col gap-10 text-center">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-4xl font-serif italic border-b border-white/10 pb-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-8 flex flex-col gap-4">
                <Link to="/admissions" onClick={() => setMobileMenuOpen(false)} className="bg-school-accent text-center text-white py-5 font-black uppercase tracking-widest">Admissions Portal</Link>
                <button className="border border-white/20 py-5 font-black uppercase tracking-widest">Parent Login</button>
              </div>
            </div>
          </div>
        )}
      
    </nav>
  );
};

const Hero = () => {
  const images = [
    "/images/architecture-independence-palace-ho-chi-minh-city.jpg",
    "/images/school-facade.jpg",
    "/images/school-children-dressed-uniform-have-fun-play-schoolyard.jpg",
    "/images/young-boy-learning-more-about-chemistry-class.jpg"
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative h-[650px] md:h-[800px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          key={current}
          src={images[current]}
          alt="Campus Life"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-school-primary/95 via-school-primary/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-school-primary/80 via-transparent to-transparent z-10" />
      </div>

      <div className="container mx-auto px-4 md:px-12 h-full flex items-end pb-32 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[2px] bg-school-accent" />
            <span className="bg-school-accent/20 backdrop-blur-md border border-school-accent text-school-accent px-4 py-1 font-black text-[10px] uppercase tracking-[0.3em]">Affiliated to CBSE - India</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-serif font-black text-white mb-10 leading-[1.0] tracking-tighter">
            Nurturing Global <br />
            <span className="text-school-accent italic font-light">Excellence</span> through <br />
            Indian Values.
          </h1>
          <p className="text-lg md:text-2xl text-white/70 mb-12 max-w-2xl font-light leading-relaxed">
            Embark on a journey where academic brilliance meets holistic character development.
            VIS is Bengaluru's premier institution for the next generation of visionary leaders.
          </p>
          <div className="flex flex-wrap gap-6">
            <button className="bg-school-accent text-white px-12 py-6 rounded-sm font-black uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-school-primary transition-all shadow-2xl flex items-center gap-3 group">
              Admissions 2026-27 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/5 backdrop-blur-xl border border-white/20 text-white px-12 py-6 rounded-sm font-black uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-school-primary transition-all">
              Virtual Campus Tour
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 right-12 flex gap-3">
          {images.map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-1 transition-all duration-500",
                current === i ? "w-12 bg-school-accent" : "w-4 bg-white/20"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatsBar = () => (
  <section className="py-20 bg-school-primary relative overflow-hidden">
    <div className="container mx-auto px-4 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10 text-center">
      {[
        { val: "25+", label: "Years of Heritage", sub: "Founded 1998" },
        { val: "100%", label: "CBSE Success", sub: "Last 10 Years" },
        { val: "1:12", label: "Mentor Ratio", sub: "Personal Attention" },
        { val: "40+", label: "Extracurriculars", sub: "Holistic Development" }
      ].map((s, i) => (
        <div key={i} className="group">
          <div className="text-school-accent font-serif font-black text-5xl md:text-7xl mb-2 group-hover:scale-110 transition-transform duration-500 italic uppercase">{s.val}</div>
          <div className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-2">{s.label}</div>
          <div className="text-white/30 text-[9px] font-light uppercase tracking-widest">{s.sub}</div>
        </div>
      ))}
    </div>
  </section>
);

const EducationalPhilosophy = () => (
  <section className="py-32 bg-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0 100 L100 0" stroke="currentColor" strokeWidth="0.1" fill="none" className="text-school-primary" />
        <path d="M0 80 L80 0" stroke="currentColor" strokeWidth="0.1" fill="none" className="text-school-primary" />
        <path d="M20 100 L100 20" stroke="currentColor" strokeWidth="0.1" fill="none" className="text-school-primary" />
      </svg>
    </div>
    <div className="container mx-auto px-4 md:px-12 grid lg:grid-cols-2 gap-24 items-center relative z-10">
      <div>
        <span className="text-school-accent font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Our Ethos</span>
        <h2 className="text-5xl md:text-7xl font-serif font-black text-school-primary mb-10 leading-tight tracking-tighter italic">Where <span className="not-italic text-school-accent uppercase">Vidya</span> meets <br /> <span className="not-italic">Modernity.</span></h2>
        <div className="space-y-8 text-slate-500 text-xl font-light leading-relaxed italic border-l-4 border-slate-100 pl-10">
          <p>Knowledge is not just a destination; it's the engine of evolution. At VIS, we balance the timeless rigor of Indian academic traditions with the fluidity of global 21st-century skills.</p>
          <p>Our students don't just solve problems—they identify them. We nurture architects of the future who carry their culture as their compass.</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-8 mt-12">
          <div className="aspect-[4/5] bg-slate-100 overflow-hidden rounded-sm relative group">
            <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Philosophy 1" />
            <div className="absolute inset-0 bg-school-primary/20 mix-blend-multiply" />
          </div>
          <div className="aspect-square bg-school-accent flex items-center justify-center p-8 text-white">
            <p className="text-sm font-black uppercase tracking-[0.2em] leading-relaxed italic text-center">Nurturing the class of 2038 and beyond.</p>
          </div>
        </div>
        <div className="space-y-8">
          <div className="aspect-square bg-slate-900 flex items-center justify-center p-8 text-school-accent">
            <Trophy size={60} strokeWidth={1} />
          </div>
          <div className="aspect-[4/5] bg-slate-100 overflow-hidden rounded-sm relative group">
            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Philosophy 2" />
            <div className="absolute inset-0 bg-school-primary/20 mix-blend-multiply" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const InstitutionalScores = () => (
  <section className="py-32 bg-[#0a0f1d] text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-school-accent/5 -skew-x-12 translate-x-1/4 pointer-events-none" />
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
    
    <div className="container mx-auto px-4 md:px-12 relative z-10">
      <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-center">
        {/* Left Column: Metrics */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-12 bg-school-accent" />
            <span className="text-school-accent font-black uppercase tracking-[0.4em] text-[10px]">Capability Index</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-serif font-black mb-10 leading-tight tracking-tighter italic text-white">
            Evolutionary <br /> 
            <span className="not-italic text-school-accent uppercase">Milestones.</span>
          </h2>
          
          <p className="text-white/40 text-xl font-light mb-16 italic leading-relaxed max-w-md">
            We quantify excellence across multiple developmental vectors, ensuring every cohort exceeds global benchmarks.
          </p>

          <div className="grid grid-cols-2 gap-x-8 gap-y-12">
            {[
              { label: "Academic Proficiency", score: 98, desc: "Global testing benchmarks." },
              { label: "Critical Thinking", score: 92, desc: "Logic & reasoning modules." },
              { label: "Emotional Intel", score: 95, desc: "Empathy & leadership." },
              { label: "Digital Fluency", score: 89, desc: "AI & tech competency." }
            ].map((s, i) => (
              <div key={i} className="group">
                <span className="text-5xl font-serif italic font-black text-school-accent block mb-2">{s.score}%</span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white group-hover:text-school-accent transition-colors block mb-4">{s.label}</span>
                <p className="text-[11px] text-white/40 font-light italic leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Imagery Grid */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <div className="grid grid-cols-12 grid-rows-6 gap-4 h-[600px] md:h-[800px] relative">
            <div className="col-span-12 row-span-3 bg-slate-900 relative overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000"
                alt="Research"
              />
              <div className="absolute inset-0 bg-school-primary/40 mix-blend-multiply" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
                <span className="text-school-accent font-serif text-8xl md:text-9xl font-black italic block leading-none">Top 100</span>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 block mt-4">Global Schools Index</span>
              </div>
            </div>
            
            <div className="col-span-4 row-span-3 relative overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 transition-all duration-700"
                alt="Classroom"
              />
              <div className="absolute inset-0 border border-white/5" />
            </div>

            <div className="col-span-8 row-span-2 bg-school-accent p-10 flex flex-col justify-between group cursor-default">
              <Trophy size={40} className="text-white opacity-20 group-hover:opacity-100 transition-opacity" />
              <div>
                <span className="text-4xl md:text-6xl font-serif font-black block mb-2 text-white">99.8</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Percentile Global Performance</span>
              </div>
            </div>

            <div className="col-span-8 row-span-1 relative overflow-hidden group">
               <img 
                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-100 transition-all duration-700"
                alt="Students"
              />
              <div className="absolute inset-0 bg-school-primary/60" />
            </div>

            <div className="absolute -top-12 -right-12 w-48 h-48 border border-white/5 rounded-full animate-spin-slow pointer-events-none hidden md:block" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const BentoHighlights = () => (
  <section className="py-32 bg-slate-50 relative">
    <div className="container mx-auto px-4 md:px-12">
      <div className="text-center mb-24">
        <span className="text-school-accent font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Institutional Verticals</span>
        <h2 className="text-5xl md:text-6xl font-serif font-black text-school-primary tracking-tighter">The VIS <span className="italic font-light">Advantage.</span></h2>
      </div>
      <div className="grid md:grid-cols-12 gap-8 h-auto lg:h-[700px]">
        <div className="md:col-span-8 bg-white shadow-xl p-12 relative overflow-hidden group border-t-4 border-school-accent">
          <div className="relative z-10">
            <h3 className="text-3xl font-serif font-black text-school-primary mb-6 italic">STEAM Excellence</h3>
            <p className="text-slate-500 font-light max-w-md mb-10 italic">From robotics to molecular biology, our labs are spaces of curiosity. We don't just teach science; we enable exploration.</p>
            <ArrowRight size={32} className="text-school-accent group-hover:translate-x-4 transition-transform" />
          </div>
          <img src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800" className="absolute top-0 right-0 h-full w-1/2 object-cover opacity-40 group-hover:opacity-80 transition-opacity" />
        </div>
        <div className="md:col-span-4 bg-school-primary text-white p-12 flex flex-col justify-end group">
          <Trophy size={40} className="text-school-accent mb-8" />
          <h3 className="text-3xl font-serif font-black mb-6 tracking-tight">Athletic <br /> Spirit</h3>
          <p className="text-white/40 text-sm font-light italic">State-of-the-art synthetic tracks and Olympic-sized pools for the champions of tomorrow.</p>
        </div>
        <div className="md:col-span-4 bg-white shadow-xl p-12 border-b-4 border-school-secondary group">
          <div className="w-12 h-12 bg-slate-50 flex items-center justify-center mb-8">
            <Globe size={24} className="text-school-secondary" />
          </div>
          <h3 className="text-2xl font-serif font-black text-school-primary mb-4 italic">Global Exchange</h3>
          <p className="text-slate-500 text-sm font-light leading-relaxed">Annual programs with sister schools in Finland and Singapore for cross-cultural exposure.</p>
        </div>
        <div className="md:col-span-8 bg-[#0a0f1d] text-white p-12 grid md:grid-cols-3 gap-12 items-center group">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-serif font-black text-school-accent mb-4 tracking-tighter">Digital <br /> Ecosystem</h3>
          </div>
          <div className="md:col-span-2 text-white/50 font-light text-sm italic leading-relaxed border-l border-white/10 pl-12">
            Every VIS student is issued an adaptive learning device linked to our central cloud, enabling continuous education beyond campus hours.
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-32 bg-white container mx-auto px-4 md:px-12">
    <div className="grid lg:grid-cols-12 gap-24 items-center">
      <div className="lg:col-span-5">
        <span className="text-school-accent font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Voice of the Community</span>
        <h2 className="text-5xl md:text-6xl font-serif font-black text-school-primary mb-10 leading-tight">Trusted by <br /> <span className="italic font-light">Generations.</span></h2>
        <div className="flex gap-4">
          <div className="w-12 h-12 border border-slate-200 flex items-center justify-center text-slate-300 hover:text-school-primary hover:border-school-primary transition-all cursor-pointer"><ArrowRight size={20} className="rotate-180" /></div>
          <div className="w-12 h-12 border border-slate-200 flex items-center justify-center text-slate-300 hover:text-school-primary hover:border-school-primary transition-all cursor-pointer"><ArrowRight size={20} /></div>
        </div>
      </div>
      <div className="lg:col-span-7">
        <div className="bg-slate-50 p-16 relative overflow-hidden rounded-sm">
          <div className="text-school-accent font-serif text-[120px] absolute -top-10 -left-4 opacity-10">"</div>
          <p className="text-2xl font-serif font-light italic text-slate-600 leading-relaxed mb-12 relative z-10">
            "Sending our kids to Vidyashakti was the best investment we ever made. The balance of discipline and empathy is unmatched in Bangalore."
          </p>
          <div className="flex items-center gap-6 relative z-10">
            <div className="w-16 h-16 bg-slate-200 rounded-full border-4 border-white shadow-xl overflow-hidden grayscale">
              <img src="https://images.unsplash.com/photo-1544168190-79c17527004f?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="text-xl font-serif font-black text-school-primary">Vikram Malhotra</h4>
              <p className="text-[10px] font-black uppercase tracking-widest text-school-accent italic">Parent, Batch of 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CoCurricular = () => (
  <section className="py-32 bg-[#0a0f1d] text-white overflow-hidden relative">
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-school-accent/40 to-transparent" />
    <div className="container mx-auto px-4 md:px-12 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
        <div className="max-w-xl">
          <span className="text-school-accent font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Beyond Academia</span>
          <h2 className="text-5xl md:text-7xl font-serif font-black leading-tight tracking-tighter italic text-white">Cultural <br /> & <span className="not-italic text-school-accent uppercase">Artistic</span> <br /> Elevation.</h2>
        </div>
        <p className="text-white/40 text-xl font-light italic max-w-sm md:text-right border-r-4 border-white/5 pr-10">Integration of classical arts, experimental theater, and contemporary music as core curriculum components.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {[
          { t: "Visual Arts", d: "From terracotta sculpture to digital concept art, nurturing the next generation of creators.", icon: Palette },
          { t: "Rhythmic Ethics", d: "Professional training in Indian Classical and Contemporary dance forms.", icon: Music },
          { t: "Scientific Inquiry", d: "Our innovation labs host weekly research challenges pushing multi-disciplinary boundaries.", icon: Microscope }
        ].map((c, i) => (
          <div key={i} className="group p-12 bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-sm">
            <div className="w-16 h-16 bg-school-accent flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
              <c.icon size={30} className="text-white" />
            </div>
            <h3 className="text-2xl font-serif font-black mb-6 italic">{c.t}</h3>
            <p className="text-white/40 font-light leading-relaxed text-sm mb-8">{c.d}</p>
            <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-school-accent opacity-0 group-hover:opacity-100 transition-opacity">
              View Pedagogy <ArrowRight size={14} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AlumniSuccess = () => (
  <section className="py-32 bg-white container mx-auto px-4 md:px-12">
    <div className="flex flex-col lg:flex-row gap-24 items-center">
      <div className="lg:w-1/2 relative">
        <div className="aspect-[4/5] bg-slate-100 overflow-hidden relative">
          <img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale" />
          <div className="absolute inset-0 bg-school-primary/30" />
        </div>
        <div className="absolute -bottom-12 -right-12 bg-school-accent p-12 text-white shadow-2xl max-w-sm hidden md:block">
          <h4 className="text-2xl font-serif font-black mb-4 italic">Global Footprints</h4>
          <p className="text-sm font-light leading-relaxed italic opacity-80">"VIS didn't just teach me how to read code, it taught me how to read the world." — Rohan S., Stanford University '22</p>
        </div>
      </div>
      <div className="lg:w-1/2">
        <span className="text-school-accent font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Our Living Legacy</span>
        <h2 className="text-5xl md:text-7xl font-serif font-black text-school-primary mb-12 leading-none tracking-tighter italic">Alumni <br /><span className="not-italic text-school-accent uppercase italic font-light">Chronicles.</span></h2>
        <div className="space-y-12">
          {[
            { n: "Aditi Rao", u: "Massachusetts Institute of Technology", a: "NASA Artemis Research Lead" },
            { n: "Kabir Singh", u: "London School of Economics", a: "Economic Strategist at IMF" },
            { n: "Sarah Joseph", u: "National School of Drama", a: "Acclaimed Contemporary Artist" }
          ].map((a, i) => (
            <div key={i} className="flex items-center gap-10 group cursor-pointer">
              <div className="w-12 h-12 bg-slate-50 flex items-center justify-center font-serif font-black text-school-primary group-hover:bg-school-accent group-hover:text-white transition-colors uppercase">0{i + 1}</div>
              <div>
                <h4 className="text-xl font-serif font-black text-school-primary group-hover:text-school-accent transition-colors">{a.n}</h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">{a.u} &bull; {a.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const FaqSection = () => (
  <section className="py-32 bg-slate-50">
    <div className="container mx-auto px-4 md:px-12">
      <div className="text-center mb-24">
        <span className="text-school-accent font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Parental Guidance</span>
        <h2 className="text-5xl font-serif font-black text-school-primary tracking-tighter">Common <span className="italic font-light">Queries.</span></h2>
      </div>
      <div className="max-w-4xl mx-auto space-y-6">
        {[
          { q: "What is the teacher-student ratio at VIS?", a: "We maintain a strict 1:12 ratio in primary sections and 1:15 in middle/senior sections to ensure personalized mentorship." },
          { q: "How does the school manage digital safety?", a: "Every classroom is firewalled with enterprise-grade filters, and student devices are strictly managed via centralized MDM protocols." },
          { q: "Are there provisions for competitive exam coaching?", a: "Yes, we have integrated coaching for JEE, NEET, and CLAT starting from Grade IX within our regular academic schedule." }
        ].map((faq, i) => (
          <div key={i} className="bg-white p-10 shadow-sm border border-slate-100 group cursor-pointer">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-serif font-black text-school-primary group-hover:text-school-accent transition-colors">{faq.q}</h4>
              <ChevronDown className="text-slate-300 group-hover:text-school-accent transition-transform group-hover:rotate-180" />
            </div>
            <p className="text-slate-500 font-light text-sm italic border-l-2 border-school-accent/20 pl-6 mt-6 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500 overflow-hidden">
              {faq.a}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Affiliations = () => (
  <section className="py-20 bg-white border-y border-slate-50">
    <div className="container mx-auto px-4 md:px-12">
      <div className="flex flex-wrap items-center justify-center gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
        {['CBSE AFFILIATED', 'BRITISH COUNCIL', 'UNICEF PARTNER', 'GOOGLE FOR EDU', 'MICROSOFT SHOWCASE'].map((p, i) => (
          <div key={i} className="text-2xl font-serif font-black text-slate-900 tracking-tighter italic border-b border-slate-900 pb-1">{p}</div>
        ))}
      </div>
    </div>
  </section>
);
const Virtues = () => (
  <section className="py-32 bg-white relative overflow-hidden">
    <div className="container mx-auto px-4 md:px-12 grid lg:grid-cols-4 gap-12">
      {[
        { t: "Integrity", d: "Upholding absolute moral uprightness in every scholastic and personal endeavor.", i: Shield },
        { t: "Innovation", d: "Fostering a 'Problem-First' mindset through iterative experimentation.", i: Target },
        { t: "Empathy", d: "Cultivating profound social resonance and community accountability.", i: Heart },
        { t: "Excellence", d: "A commitment to surmounting standards through disciplined daily practice.", i: Star }
      ].map((v, i) => (
        <div key={i} className="p-12 border border-slate-50 hover:bg-slate-50 transition-all duration-500 group rounded-sm">
          <div className="w-14 h-14 bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-school-accent transition-colors">
            <v.i size={24} className="text-school-primary group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-xl font-serif font-black text-school-primary mb-4 italic group-hover:text-school-accent transition-colors">{v.t}</h3>
          <p className="text-slate-500 text-sm font-light leading-relaxed italic">{v.d}</p>
        </div>
      ))}
    </div>
  </section>
);

const Features = () => (
  <section className="py-32 bg-white relative overflow-hidden">
    <div className="container mx-auto px-4 md:px-12 grid lg:grid-cols-3 gap-16">
      {[
        { title: "Empirical Learning", desc: "Our 'Think-Do' methodology ensures students apply theoretical concepts through hands-on laboratory modules.", icon: Lightbulb },
        { title: "Global Pedagogy", desc: "A curriculum that integrates CBSE standards with International baccalaureate best practices.", icon: Globe },
        { title: "Digital Native", desc: "Every classroom is a smart-hub, equipped with high-speed tactile learning systems and digital archives.", icon: Monitor }
      ].map((f, i) => (
        <div key={i}  className="group">
          <div className="w-16 h-16 bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-school-accent transition-all duration-500 rounded-sm">
            <f.icon size={28} className="text-school-primary group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-2xl font-serif font-black text-school-primary mb-6 tracking-tight group-hover:text-school-accent transition-colors">
            {f.title}
          </h3>
          <p className="text-slate-500 leading-relaxed font-light italic">
            {f.desc}
          </p>
        </div>
      ))}
    </div>
  </section>
);

const NoticeBoard = () => (
  <section className="py-32 bg-school-primary text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <div className="grid grid-cols-12 h-full">
        {Array.from({ length: 12 }).map((_, i) => <div key={i} className="border-r border-white/20 h-full" />)}
      </div>
    </div>
    <div className="container mx-auto px-4 md:px-12 relative z-10 grid lg:grid-cols-2 gap-24 items-center">
      <div>
        <span className="text-school-accent font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Real-time Information</span>
        <h2 className="text-5xl md:text-7xl font-serif font-black mb-10 leading-tight tracking-tighter italic text-white">Bulletin & <br /> <span className="text-school-accent not-italic">Announcements</span></h2>
        <p className="text-white/50 text-xl font-light max-w-md leading-relaxed">Stay updated with the latest institutional milestones, examination schedules, and extracurricular triumphs.</p>
      </div>
      <div className="space-y-12">
        {[
          { date: "Oct 12", t: "National Merit Scholarship List Released", d: "Final list of VIS students selected for the Ministry of Education scholarship." },
          { date: "Oct 28", t: "Inter-School Tech Expo Host", d: "VIS to host 45 schools for the 'Innovate Bengaluru' tech summit." },
          { date: "Nov 05", t: "Parent-Teacher Collaborative Conclave", d: "A session focused on student's digital wellbeing and safety." }
        ].map((n, i) => (
          <div key={i} className="flex gap-10 group cursor-pointer">
            <div className="shrink-0 text-center">
              <div className="text-school-accent font-black text-xs uppercase tracking-widest">{n.date.split(' ')[0]}</div>
              <div className="text-3xl font-serif font-black">{n.date.split(' ')[1]}</div>
            </div>
            <div className="pb-8 border-b border-white/10 group-hover:border-school-accent transition-colors w-full">
              <h4 className="text-xl font-serif font-black mb-2 group-hover:text-school-accent transition-colors">{n.t}</h4>
              <p className="text-white/40 font-light text-sm italic">{n.d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AdmissionsPage = () => (
  <div className="bg-white">
    <div className="relative h-[400px] bg-school-primary overflow-hidden">
      <img src="https://images.unsplash.com/photo-1523050853063-bd42da24637d?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover opacity-20" />
      <div className="absolute inset-x-0 bottom-0 py-20 text-center container mx-auto px-4">
        <h1 className="text-6xl font-serif font-black text-white mb-4 tracking-tighter">Admissions Department</h1>
        <p className="text-white/60 font-light text-xl max-w-2xl mx-auto italic">Nurturing the class of 2038 and beyond. Join our merit-based community.</p>
      </div>
    </div>

    <div className="container mx-auto px-4 md:px-12 -mt-16 relative z-10">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-8 bg-white shadow-2xl p-8 md:p-16 mb-24 rounded-sm border-t-8 border-school-accent">
          <h2 className="text-4xl font-serif font-black text-school-primary mb-12 flex items-center gap-6">
            The Roadmap to <span className="text-school-accent">Enrollment</span>
            <div className="h-[2px] flex-grow bg-slate-100" />
          </h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {[
              { n: "01", t: "Inquiry & Registration", d: "Submit the online query form to receive the school prospectus and digital application link." },
              { n: "02", t: "Campus Visit & Insight", d: "Mandatory interactive session for parents and a campus tour with our admissions counselor." },
              { n: "03", t: "Baseline Assessment", d: "Evaluation of the student's current academic proficiency (Grade 2 upwards)." },
              { n: "04", t: "Documents & Formalities", d: "Final document submission including transfer certificates and medical records." }
            ].map((step, i) => (
              <div key={i} className="group cursor-default">
                <div className="text-school-accent font-black text-5xl font-serif opacity-20 group-hover:opacity-100 transition-opacity mb-4">#{step.n}</div>
                <h4 className="text-xl font-serif font-black text-school-primary mb-4">{step.t}</h4>
                <p className="text-slate-500 leading-relaxed font-light">{step.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 p-10 bg-slate-50 border border-slate-100 rounded">
            <h3 className="text-2xl font-serif font-black text-school-primary mb-8 underline decoration-school-accent decoration-4 underline-offset-8">Mandatory Documentation</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Municipality Birth Certificate",
                "Address Proof (Aadhar/Passport)",
                "Previous Year Grade Reports",
                "School Leaving Certificate (Original)",
                "6 Color Passport Photographs",
                "Parents' Professional Credentials"
              ].map((doc, i) => (
                <div key={i} className="flex items-center gap-4 text-slate-700 font-medium bg-white p-4 shadow-sm">
                  <div className="w-2 h-2 bg-school-accent rounded-full" />
                  {doc}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-10">
          <div className="bg-school-primary text-white p-10 shadow-2xl relative overflow-hidden group border-b-[10px] border-school-accent">
            <h3 className="text-3xl font-serif font-black mb-8 italic">Admission Query</h3>
            <form className="space-y-5 relative z-10">
              <input type="text" placeholder="Student Full Name" className="w-full bg-white/5 border border-white/10 p-4 font-light focus:bg-white/10 outline-none transition-all placeholder:text-white/40" />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Applying Grade" className="w-full bg-white/5 border border-white/10 p-4 font-light focus:bg-white/10 outline-none transition-all placeholder:text-white/40" />
                <input type="tel" placeholder="Phone No." className="w-full bg-white/5 border border-white/10 p-4 font-light focus:bg-white/10 outline-none transition-all placeholder:text-white/40" />
              </div>
              <textarea placeholder="Your Inquiry..." className="w-full bg-white/5 border border-white/10 p-4 font-light h-32 focus:bg-white/10 outline-none transition-all placeholder:text-white/40" />
              <button className="w-full bg-school-accent text-white py-5 font-black uppercase tracking-[0.3em] text-[10px] hover:bg-white hover:text-school-primary transition-all">Submit Inquiry</button>
            </form>
          </div>

          <div className="border border-slate-100 p-10 bg-white">
            <h4 className="text-xl font-serif font-black text-school-primary mb-6">Prospective Parents</h4>
            <p className="text-slate-500 text-sm leading-relaxed font-light mb-8 italic">"We look for students who are curious, resilient, and collaborative. Our admission committee reviews each profile for holistic potential beyond just board scores."</p>
            <div className="bg-slate-50 p-6 flex flex-col gap-4">
              <button className="flex items-center justify-between text-xs font-black uppercase tracking-widest text-school-primary group">
                Download Prospectus <Download size={16} className="text-school-accent group-hover:translate-y-1 transition-transform" />
              </button>
              <div className="h-px bg-slate-200" />
              <button className="flex items-center justify-between text-xs font-black uppercase tracking-widest text-school-primary group">
                Fee Structure 2026 <Info size={16} className="text-school-accent" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AcademicsPage = () => (
  <div className="bg-slate-50">
    <div className="container mx-auto px-12 py-32">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
        <div className="max-w-xl">
          <span className="text-school-accent font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">The Academic core</span>
          <h1 className="text-7xl font-serif font-black text-school-primary tracking-tighter leading-none italic">Scholarly <br /> <span className="not-italic text-school-accent uppercase">Rigor.</span></h1>
        </div>
        <p className="text-slate-500 text-xl font-light italic max-w-sm md:text-right">A multi-disciplinary approach following the National Education Policy guidelines.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {[
          { t: "The Foundation", g: "Kindergarten", d: "Play-based inquiry focusing on motor skills, social empathy, and curiosity." },
          { t: "Middle Years", g: "Grade VI - VIII", d: "Transitioning to theoretical depth, scientific temper, and digital literacy." },
          { t: "The Senior School", g: "Grade IX - XII", d: "Rigorous CBSE-aligned curriculum with integrated competitive exam prep." }
        ].map((phase, i) => (
          <div key={i} className="bg-white p-12 shadow-xl border-b-4 border-school-accent hover:-translate-y-2 transition-transform duration-500 group">
            <span className="text-slate-300 font-serif font-black text-6xl mb-8 block group-hover:text-school-accent transition-colors">0{i + 1}</span>
            <h4 className="text-sm font-black uppercase tracking-widest text-school-accent mb-2">{phase.g}</h4>
            <h3 className="text-2xl font-serif font-black text-school-primary mb-6 italic">{phase.t}</h3>
            <p className="text-slate-500 font-light leading-relaxed">{phase.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-32 p-20 bg-school-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 grayscale" style={{ backgroundImage: 'radial-gradient(circle, #fff 0.1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 grid md:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-5xl font-serif font-black mb-8 italic">Examination Results 2024</h2>
            <p className="text-white/50 text-xl font-light italic">Consistent excellence in CBSE Board Examinations with students consistently appearing in the National Top 1%.</p>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="bg-white/5 border border-white/10 p-10 backdrop-blur-md">
              <div className="text-4xl font-serif font-black mb-2">94.8%</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-school-accent">School Average</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-10 backdrop-blur-md">
              <div className="text-4xl font-serif font-black mb-2">128+</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-school-accent">Centum Scorers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FacultyPage = () => (
  <div className="bg-white">
    <div className="py-24 text-center container mx-auto px-4">
      <span className="text-school-accent font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">The Faculty Collective</span>
      <h1 className="text-6xl font-serif font-black text-school-primary mb-6 tracking-tighter">Expert Mortals, Extraordinary <span className="italic font-light">Mentors.</span></h1>
      <p className="text-slate-500 text-xl font-light italic max-w-2xl mx-auto">Vidyashakti pride lies in its staff—highly specialized educators with a combined experience of over 850 years.</p>
    </div>

    <div className="container mx-auto px-4 md:px-12 pb-32">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {[
          { name: "Dr. Arvind Iyer", role: "Principal", qual: "Ph.D Molecular Biology, M.Ed (Oxford)", xp: "28 Yrs", img: "/images/staff/person1.jpg" },
          { name: "Mrs. Meena Sharma", role: "Sr. Dean", qual: "M.A. English (JNU), B.Ed", xp: "22 Yrs", img: "/images/staff/person4woman.jpg" },
          { name: "Mr. Thomas Philip", role: "HOD Commerce", qual: "M.Com, Chartered Accountant", xp: "15 Yrs", img: "/images/staff/person2.jpg" },
          { name: "Dr. Anjali Menon", role: "Director - STEM", qual: "Ph.D Applied Sciences", xp: "18 Yrs", img: "/images/staff/person5woman.jpg" },
          { name: "Mr. Rajesh Verma", role: "Senior Math Lead", qual: "M.Sc Mathematics, GATE", xp: "14 Yrs", img: "/images/staff/person3.jpg" },
          { name: "Mrs. Fatima Zahra", role: "Sr. Humanities Lead", qual: "M.A. International Relations", xp: "12 Yrs", img: "/images/staff/person4woman.jpg" },
          { name: "Mr. Sanjay Basu", role: "HOD Physical Ed.", qual: "National Level Athlete, NIS", xp: "20 Yrs", img: "/images/staff/person1.jpg" },
          { name: "Ms. Priyanka Das", role: "Visual Arts Dir.", qual: "MVA Shantiniketan", xp: "10 Yrs", img: "/images/staff/person5woman.jpg" },
        ].map((f, i) => (
          <div key={i} className="group">
            <div className="aspect-[4/5] bg-slate-100 mb-6 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
              <img src={f.img} alt={f.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-school-primary/10 mix-blend-multiply" />
            </div>
            <h4 className="text-xl font-serif font-black text-school-primary mb-1">{f.name}</h4>
            <p className="text-[10px] font-black uppercase text-school-accent tracking-[0.2em] mb-4">{f.role}</p>
            <div className="space-y-1 text-slate-500 text-xs font-light italic">
              <p>{f.qual}</p>
              <div className="h-px w-8 bg-slate-100 my-2" />
              <p>Experience: {f.xp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const FacilitiesPage = () => (
  <div className="bg-slate-50">
    <div className="py-24 container mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-between items-end gap-10">
      <div className="max-w-xl">
        <span className="text-school-accent font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">World-Class Infrastructure</span>
        <h1 className="text-6xl font-serif font-black text-school-primary tracking-tighter leading-none">Designed for <br /> <span className="italic font-light">Discovery.</span></h1>
      </div>
      <div className="h-[2px] bg-slate-200 flex-grow mx-12 hidden lg:block" />
      <p className="text-slate-500 text-lg font-light md:text-right max-w-xs italic">A 25-acre sanctuary of learning with cutting-edge technology and zero-waste architecture.</p>
    </div>

    <div className="container mx-auto px-4 md:px-12 pb-32">
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-10">
          <div className="grid md:grid-cols-2 gap-10">
            {[
              { t: "Smart Classrooms", i: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800", d: "Interactive tactile displays and individual student learning ports." },
              { t: "Nanotechnology Lab", i: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800", d: "State-of-the-art equipment for advanced research-based projects." }
            ].map((item, i) => (
              <div key={i} className="group overflow-hidden rounded shadow-xl bg-white border border-slate-100">
                <img src={item.i} className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="p-8">
                  <h4 className="text-xl font-serif font-black text-school-primary mb-2">{item.t}</h4>
                  <p className="text-xs text-slate-500 font-light italic">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-16 school-gradient text-white rounded-sm shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-school-accent/10 rounded-full translate-x-1/3 -translate-y-1/3" />
            <h3 className="text-4xl font-serif font-black mb-10 italic">Olympic-Standard Sports Complex</h3>
            <div className="grid md:grid-cols-3 gap-10 opacity-70 font-light tracking-wide text-sm">
              <p>&bull; 50m Temperature-Controlled Internal Pool</p>
              <p>&bull; Synthetic FIFA-Approved Turf Field</p>
              <p>&bull; Global-Standard Archery Range</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 space-y-10">
          <div className="bg-white p-10 border border-slate-100 shadow-sm">
            <h4 className="text-2xl font-serif font-black text-school-primary mb-8 border-b pb-4 border-school-accent">Security Measures</h4>
            <div className="space-y-6">
              {[
                { t: "RFID Monitoring", d: "Real-time student tracking within the premises." },
                { t: "24/7 CCTV", d: "450+ high-definition cameras with AI-threat detection." },
                { t: "Smart Transport", d: "GPS-tracking and panic buttons in all school fleets." }
              ].map((s, i) => (
                <div key={i} className="group">
                  <h5 className="font-bold text-school-secondary text-sm mb-1 uppercase tracking-widest">{s.t}</h5>
                  <p className="text-slate-500 text-xs font-light">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800" className="w-full aspect-square object-cover" />
        </div>
      </div>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="bg-white">
    <div className="container mx-auto px-12 py-32 grid lg:grid-cols-12 gap-24 items-start">
      <div className="lg:col-span-5">
        <span className="text-school-accent font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Global Connectivity</span>
        <h1 className="text-7xl font-serif font-black text-school-primary tracking-tighter leading-[0.9] mb-12">Talk to <br /> <span className="text-school-accent italic font-light">VIS.</span></h1>
        <div className="space-y-12">
          <div className="flex gap-8 group">
            <div className="w-12 h-12 bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-school-accent transition-colors">
              <MapPin size={24} className="text-school-primary group-hover:text-white" />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Main Campus</h4>
              <p className="text-xl font-serif font-black text-school-primary">Survey No. 42, Electronics City Phase 1, Bangalore - 560100</p>
            </div>
          </div>
          <div className="flex gap-8 group">
            <div className="w-12 h-12 bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-school-accent transition-colors">
              <Phone size={24} className="text-school-primary group-hover:text-white" />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Admissions Hotline</h4>
              <p className="text-xl font-serif font-black text-school-primary">Toll Free: 1800-222-3333</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-7 bg-white p-16 shadow-2xl border-t-[10px] border-school-accent">
        <h3 className="text-3xl font-serif font-black text-school-primary mb-10 italic">General Inquiry</h3>
        <form className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-tighter text-slate-400 ml-4">Full Name</label>
              <input type="text" className="w-full bg-slate-50 p-6 font-light outline-none border-b border-transparent focus:border-school-accent transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-tighter text-slate-400 ml-4">Email Address</label>
              <input type="email" className="w-full bg-slate-50 p-6 font-light outline-none border-b border-transparent focus:border-school-accent transition-all" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-tighter text-slate-400 ml-4">Detailed Message</label>
            <textarea rows={6} className="w-full bg-slate-50 p-6 font-light outline-none border-b border-transparent focus:border-school-accent transition-all"></textarea>
          </div>
          <button className="bg-school-primary text-white px-16 py-6 font-black uppercase tracking-[0.2em] text-xs hover:bg-school-accent transition-all">Send Protocol</button>
        </form>
      </div>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="bg-white">
    <div className="relative h-[600px] flex items-center overflow-hidden">
      <img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1920" className="absolute inset-0 w-full h-full object-cover grayscale opacity-20" />
      <div className="container mx-auto px-12 relative z-10 text-center">
        <span className="text-school-accent font-black uppercase tracking-[0.5em] text-[10px] mb-8 block">Est. 1998</span>
        <h1 className="text-6xl md:text-9xl font-serif font-black text-school-primary leading-none tracking-tighter mb-12">Building a <br /> Modern <span className="text-school-accent italic font-light">Legacy.</span></h1>
        <p className="text-slate-500 text-2xl font-light italic max-w-3xl mx-auto leading-relaxed">"Vidyashakti" — the power of knowledge. Our institution is dedicated to the ancient Indian ideal of Vidya (Knowledge) and Shakti (Strength).</p>
      </div>
    </div>

    <div className="container mx-auto px-12 py-32 grid lg:grid-cols-2 gap-32 items-center">
      <div className="relative">
        <img src="https://images.unsplash.com/photo-1523050853063-bd42da24637d?auto=format&fit=crop&q=80&w=800" className="w-full rounded shadow-2xl relative z-10" alt="Campus History" />
        <div className="absolute inset-x-0 -bottom-16 bg-school-primary p-12 text-white shadow-2xl z-20 border-r-[10px] border-school-accent">
          <h3 className="text-3xl font-serif font-black mb-4">Our Mission</h3>
          <p className="text-white/60 font-light leading-relaxed italic">To provide a globally benchmarked learning environment that nurtures intellectual growth, cultural empathy, and social responsibility.</p>
        </div>
      </div>
      <div className="space-y-12">
        <div className="grid grid-cols-2 gap-10">
          <div>
            <h4 className="text-4xl font-serif font-black text-school-primary mb-4 italic">25+</h4>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Years of Academic Excellence</p>
          </div>
          <div>
            <h4 className="text-4xl font-serif font-black text-school-primary mb-4 italic">100%</h4>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Board Results Success</p>
          </div>
        </div>
        <div className="h-px bg-slate-100" />
        <div className="prose prose-slate max-w-none text-slate-500 font-light leading-relaxed text-lg">
          <p>Founded on the principles of holistic development, VIS has emerged as one of Bengaluru's most respected educational institutions. We believe that true education goes beyond textbooks, encompassing sports, the arts, and social ethics.</p>
          <p>Our campus is a melting pot of ideas, where traditional values are revisited through a modern lens, preparing students for the challenges of an increasingly complex global village.</p>
        </div>
        <button className="bg-school-primary text-white px-10 py-5 font-black uppercase tracking-widest text-[10px] rounded-sm hover:bg-school-accent transition-colors">Download Institutional History</button>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-[#0a0f1d] text-white pt-32 pb-16 relative overflow-hidden">
    <div className="container mx-auto px-4 md:px-12 grid lg:grid-cols-12 gap-24 relative z-10">
      <div className="lg:col-span-5">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-16 h-16 bg-white border-2 border-school-accent rounded-full flex items-center justify-center font-serif text-3xl font-black text-school-primary">V</div>
          <div className="flex flex-col">
            <span className="font-serif font-black text-2xl tracking-tighter">VIDYASHAKTI</span>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">International School</span>
          </div>
        </div>
        <p className="text-white/40 font-light text-lg leading-relaxed mb-12 italic max-w-md">
          A dedicated space for the holistic evolution of child intellect, character, and spirit. Shaping future global thinkers with Indian roots.
        </p>
        <div className="flex gap-6">
          {[Facebook, Twitter, Instagram, Mail].map((Icon, i) => (
            <div key={i} className="w-12 h-12 bg-white/5 flex items-center justify-center group hover:bg-school-accent transition-all cursor-pointer rounded-full">
              <Icon size={20} className="text-white/40 group-hover:text-white transition-colors" />
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-7 grid md:grid-cols-3 gap-16">
        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.3em] text-school-accent mb-10">Quick Links</h4>
          <ul className="space-y-6 text-sm font-light text-white/50">
            <li className="hover:text-white cursor-pointer transition-colors">School Ethos</li>
            <li className="hover:text-white cursor-pointer transition-colors">Admissions Portal</li>
            <li className="hover:text-white cursor-pointer transition-colors">Alumni Network</li>
            <li className="hover:text-white cursor-pointer transition-colors">Careers & Internship</li>
            <li className="hover:text-white cursor-pointer transition-colors">Privacy Charter</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.3em] text-school-accent mb-10">Contact Us</h4>
          <div className="space-y-10 text-sm font-light text-white/50 italic">
            <div>
              <p className="text-white font-black not-italic text-xs mb-2 uppercase tracking-widest">Main Campus</p>
              <p>Survey No. 42, Electronics City Phase 1,<br />Bengaluru, Karnataka 560100</p>
            </div>
            <div>
              <p className="text-white font-black not-italic text-xs mb-2 uppercase tracking-widest">General Enquiries</p>
              <p>+91 (80) 4567 8901</p>
              <p>info@vidyashakti.edu.in</p>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.3em] text-school-accent mb-10">Newsletter</h4>
          <p className="text-white/30 text-xs font-light italic mb-8">Quarterly updates about the school's progression and events.</p>
          <div className="relative">
            <input type="email" placeholder="Email address" className="w-full bg-white/5 border border-white/10 p-4 font-light text-xs outline-none focus:border-school-accent transition-colors" />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-school-accent hover:translate-x-1 transition-transform">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-4 md:px-12 mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
        © 2026 VIDYASHAKTI INTERNATIONAL SCHOOL. ALL RIGHTS RESERVED.
      </div>
      <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
        <span className="hover:text-white cursor-pointer transition-colors">Legacy</span>
        <span className="hover:text-white cursor-pointer transition-colors">Mandatory Disclosures</span>
        <span className="hover:text-white cursor-pointer transition-colors">Sitemap</span>
      </div>
    </div>
  </footer>
);

const ConnectCTA = () => (
  <section className="py-24 bg-school-accent text-white overflow-hidden relative">
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
    </div>
    <div className="container mx-auto px-4 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-serif font-black italic tracking-tighter leading-tight mb-4">Initialize your child's <br /> evolutionary journey.</h2>
        <p className="text-white/60 text-lg font-light italic">Admissions for the Academic Session 2026-27 are now open for all grades.</p>
      </div>
      <button className="bg-school-primary text-white px-12 py-6 font-black uppercase tracking-[0.2em] text-xs hover:bg-[#0a0f1d] transition-all whitespace-nowrap shadow-2xl">
        Apply for Admission
      </button>
    </div>
  </section>
);


const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = () => (
  <>
    <Hero />
    <StatsBar />
    <Affiliations />
    <EducationalPhilosophy />
    <InstitutionalScores />
    <Virtues />
    <BentoHighlights />
    <CoCurricular />
    <Features />
    <ConnectCTA />
    <AlumniSuccess />
    <NoticeBoard />
    <Testimonials />
    <FaqSection />
    <section className="py-32 bg-slate-50 container mx-auto px-4 md:px-12 text-center" id="gallery">
      <span className="text-school-accent font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Visual Chronicles</span>
      <h2 className="text-5xl md:text-6xl font-serif font-black text-school-primary mb-16 tracking-tighter">Life at <span className="italic font-light">Vidyashakti.</span></h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          "/images/architecture-independence-palace-ho-chi-minh-city.jpg",
          "/images/school-facade.jpg",
          "/images/school-children-dressed-uniform-have-fun-play-schoolyard.jpg",
          "/images/young-boy-learning-more-about-chemistry-class.jpg"
        ].map((img, i) => (
          <div key={i} className="aspect-square overflow-hidden rounded-xl shadow-lg relative group">
            <img src={img} alt="School life" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-school-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button className="text-white font-bold uppercase tracking-widest text-xs border border-white px-4 py-2">View Full</button>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-12 text-school-primary font-bold uppercase tracking-widest text-sm border-b-2 border-school-primary pb-1">Visit Our Media Gallery</button>
    </section>
  </>
);

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen selection:bg-school-accent selection:text-white">
        <div className="fixed top-0 left-0 h-[2px] bg-school-accent z-[9999] transition-all duration-100" style={{ width: `${scrollProgress}%` }} />
        <TopBar />
        <Navbar />
        <Marquee />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/academics" element={<AcademicsPage />} />
            <Route path="/faculty" element={<FacultyPage />} />
            <Route path="/facilities" element={<FacilitiesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback to Home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

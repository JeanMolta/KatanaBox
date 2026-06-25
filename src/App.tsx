/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Instagram, 
  MessageCircle, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Menu, 
  X,
  Play,
  CheckCircle2
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const themeClass = isScrolled ? 'text-white' : 'text-white';
  const navBg = isScrolled ? 'bg-black/50 backdrop-blur-xl border-b border-white/10' : 'bg-transparent';

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${navBg}`}>
      <div className="max-w-[1440px] mx-auto flex justify-between items-center px-6 py-5 md:py-8 lg:py-10">
        <a 
          href="#" 
          className="text-2xl md:text-4xl font-display font-bold tracking-tighter text-white"
        >
          KATANA BOX
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12 items-center text-white">
          <a href="#about" className="font-sans font-semibold text-base md:text-lg hover:underline decoration-brand-blue decoration-2 underline-offset-8 transition-all uppercase">SOBRE NOSOTROS</a>
          <a href="#plans" className="font-sans font-semibold text-base md:text-lg hover:underline decoration-brand-blue decoration-2 underline-offset-8 transition-all uppercase">PLANES</a>
          <a href="#testimonials" className="font-sans font-semibold text-base md:text-lg hover:underline decoration-brand-blue decoration-2 underline-offset-8 transition-all uppercase">TESTIMONIOS</a>
          <a href="#contact" className="font-sans font-semibold text-base md:text-lg hover:underline decoration-brand-blue decoration-2 underline-offset-8 transition-all uppercase">CONTACTO</a>
        </div>

        <button 
          className="md:hidden p-1 text-white border-none bg-transparent"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-0 left-0 w-full h-screen z-[-1] p-12 flex flex-col justify-center gap-8 bg-brand-black/95 backdrop-blur-lg"
          >
            <a href="#about" onClick={() => setIsOpen(false)} className="text-4xl font-display text-white border-b-2 border-white/20 pb-4">SOBRE NOSOTROS</a>
            <a href="#plans" onClick={() => setIsOpen(false)} className="text-4xl font-display text-white border-b-2 border-white/20 pb-4">PLANES</a>
            <a href="#testimonials" onClick={() => setIsOpen(false)} className="text-4xl font-display text-white border-b-2 border-white/20 pb-4">TESTIMONIOS</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-4xl font-display text-white border-b-2 border-white/20 pb-4">CONTACTO</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="sticky top-0 min-h-[100dvh] w-full flex items-center px-6 overflow-hidden bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center z-0">
      {/* Gradient Mask for Legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto w-full z-10 flex items-center pt-32 md:pt-0">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl w-full flex flex-col items-center text-center md:items-start md:text-left"
        >
          <h1 className="text-5xl md:text-9xl leading-tight md:leading-none mb-6 md:mb-8 text-brand-white font-display uppercase">
            KATANA BOX
          </h1>
          <p className="text-lg md:text-2xl font-sans font-medium mb-8 md:mb-10 max-w-xl text-brand-white/90 uppercase tracking-tight">
            SI QUIERES SUDAR DE VERDAD, ROMPER TUS LÍMITES Y SALIR CON ESA SENSACIÓN DE 'LO LOGRÉ', TIENES QUE VIVIR EL ENTRENAMIENTO EN KATANA BOX.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-3 md:gap-4 w-full sm:w-auto">
            {['FUERZA', 'DISCIPLINA', 'PROGRESO'].map((text) => (
              <button 
                key={text} 
                className="bg-brand-blue text-brand-white font-display uppercase px-8 py-4 md:px-10 md:py-5 rounded-full transition-all hover:scale-110 active:scale-95 border-none text-base md:text-lg w-full sm:w-auto"
              >
                {text}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="relative z-20 bg-brand-white text-brand-black py-24 px-6 border-b-[2px] border-brand-black rounded-t-[30px] md:rounded-t-[40px]">
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl mb-6 leading-none">NUESTRA MISIÓN</h2>
            <p className="text-2xl md:text-3xl font-sans font-bold uppercase leading-tight italic border-l-8 border-brand-blue pl-6">
              "No somos un gimnasio, somos tu zona de guerra contra la mediocridad. Nuestra misión es forjar atletas implacables."
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-5xl mb-6">SOBRE NOSOTROS</h2>
            <p className="text-xl md:text-2xl font-sans font-medium text-brand-black/80">
              En el corazón de Cali, Katana Box es el refugio de los que no aceptan excusas. Aquí venimos a transformarnos, a sudar y a dejarlo todo en cada repetición.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative border-2 border-brand-black rounded-xl p-4 bg-brand-black overflow-hidden group"
        >
          <img 
            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop" 
            alt="Katana Box Training"
            className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-brand-blue/30 opacity-60 mix-blend-color" />
        </motion.div>
      </div>
    </section>
  );
};

const MotivationalDivider = () => {
  return (
    <div className="bg-brand-black overflow-hidden py-12 border-b-4 border-brand-black">
      <motion.div 
        animate={{ x: [0, -2000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        {[...Array(6)].map((_, i) => (
          <span key={i} className="text-6xl md:text-9xl font-display font-bold text-brand-white uppercase px-12 stroke-brand-blue">
            Ven a sudar, a superarte y a sentir lo que es entrenar de verdad. —
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const PlansSection = () => {
  const plans = [
    {
      title: "CROSSFIT",
      description: "Aquí no solo te ejercitas, ¡te transformas! Con rutinas variadas cada día, trabajas todo tu cuerpo, mejoras tu rendimiento y te unes a una comunidad que te impulsa a dar lo mejor.",
      bg: "bg-brand-blue"
    },
    {
      title: "GIMNASIO",
      description: "Espacio equipado con máquinas, pesas y todo lo que necesitas para entrenar fuerza, resistencia y tonificación. A tu ritmo, con asesoría y buen ambiente.",
      bg: "bg-brand-white"
    },
    {
      title: "KATANA PRO",
      description: "Movimientos dinámicos que imitan acciones reales del día a día. Mejora fuerza, equilibrio y resistencia con rutinas variadas y retadoras. ¡Tu cuerpo se vuelve más ágil, fuerte y preparado!",
      bg: "bg-brand-blue"
    }
  ];

  return (
    <section id="plans" className="py-24 px-6 overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-6xl md:text-8xl mb-8 leading-none break-words">ENCUENTRA<br className="hidden md:block" /> TU PLAN</h2>
            <div className="relative brutalist-border h-[400px] mb-8 bg-brand-black group overflow-hidden">
               <div className="absolute inset-0 flex items-center justify-center z-20 group-hover:scale-110 transition-transform">
                  <Play className="text-brand-white w-24 h-24 fill-brand-blue" />
               </div>
               <img 
                 src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" 
                 alt="Training Video Placeholder"
                 className="w-full h-full object-cover grayscale opacity-60"
               />
               <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay" />
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 flex flex-col gap-6">
          {plans.map((plan, i) => (
            <motion.div 
              key={plan.title}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`p-8 border-2 border-brand-black rounded-xl ${plan.bg === 'bg-brand-white' ? 'bg-brand-white text-brand-black' : 'bg-brand-blue text-brand-white'} group hover:-translate-y-2 transition-transform`}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-5xl font-display">{plan.title}</h3>
                <CheckCircle2 className={`w-10 h-10 ${plan.bg === 'bg-brand-white' ? 'text-brand-blue' : 'text-brand-black'}`} />
              </div>
              <p className="text-xl font-medium leading-tight">
                {plan.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const reviews = [
    "Es un excelente sitio de acondicionamiento físico cuenta con tres plantas, dos habilitadas. El equipo de instructores es de un muy buen nivel.",
    "Ofrece tres planes: crossfit, funcional y gimnasio tradicional. Los entrenadores son muy amables y los precios están muy bien.",
    "Es el gym de CrossFit más económico y versátil de la zona. Muy buenos equipos.",
    "Excelente gym, muy adecuado para cualquier edad."
  ];

  return (
    <section id="testimonials" className="bg-brand-white py-24 px-6 border-y-4 border-brand-black">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-6xl md:text-8xl mb-4 text-brand-black underline decoration-brand-blue decoration-8 underline-offset-8">
            VOCES REBELDES
          </h2>
          {/* Social Proof Widget */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-brand-blue text-2xl">★</span>
              ))}
            </div>
            <p className="font-sans font-semibold text-brand-black text-lg">
              4.9 Estrellas <span className="font-normal text-brand-black/60">basado en 40 reseñas de Google</span>
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviews.map((text, i) => (
            <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               viewport={{ once: true }}
               className="bg-brand-white p-8 brutalist-border flex flex-col justify-between hover:bg-brand-black group transition-colors duration-300"
            >
               <div className="text-brand-blue mb-6 font-display text-2xl">"</div>
               <p className="text-lg font-bold text-brand-black group-hover:text-brand-white uppercase transition-colors">
                 {text}
               </p>
               <div className="mt-8 flex gap-1">
                 {[...Array(5)].map((_, j) => (
                   <span key={j} className="text-brand-blue">★</span>
                 ))}
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-12">
        <div className="brutalist-border h-64 lg:h-auto bg-brand-black relative overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop" 
            alt="Map Placeholder" 
            className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-brand-blue text-brand-white px-4 py-2 md:px-6 md:py-4 brutalist-border font-display text-lg md:text-2xl flex items-center gap-3">
              <MapPin className="w-5 h-5 md:w-6 md:h-6" /> CL. 16 #73-96
            </div>
          </div>
        </div>

        <div className="space-y-12 bg-brand-white p-8 md:p-12 brutalist-border text-brand-black">
          <div>
            <h2 className="text-5xl md:text-6xl mb-8 flex items-center gap-4">
              <Clock className="w-10 h-10 md:w-12 md:h-12 text-brand-blue" /> HORARIOS
            </h2>
            <ul className="space-y-4 text-xl md:text-2xl font-bold uppercase tracking-tighter">
              <li className="flex flex-col sm:flex-row justify-between border-b-2 border-brand-black pb-2 gap-1">
                <span>Lunes a Viernes</span>
                <span className="text-brand-blue">5:00–12:00, 15:00–21:00</span>
              </li>
              <li className="flex flex-col sm:flex-row justify-between border-b-2 border-brand-black pb-2 gap-1">
                <span>Sábado</span>
                <span className="text-brand-blue">8:00–14:00</span>
              </li>
              <li className="flex flex-col sm:flex-row justify-between gap-1">
                <span>Domingo</span>
                <span className="opacity-40">Cerrado</span>
              </li>
            </ul>
          </div>

          <div className="pt-8">
            <button className="w-full bg-[#25D366] border-2 border-black rounded-xl py-6 md:py-8 text-2xl md:text-3xl font-display text-brand-black flex items-center justify-center gap-4 hover:translate-x-1 hover:translate-y-1 transition-transform">
              <MessageCircle className="w-8 h-8 md:w-10 md:h-10" /> HABLA CON NOSOTROS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-black border-t-4 border-brand-white py-16 px-6">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center gap-12 md:grid md:grid-cols-3 md:items-end md:text-left">
        <div className="space-y-6 flex flex-col items-center md:items-start">
          <h2 className="text-5xl font-display font-bold">KATANA BOX</h2>
          <div className="font-sans space-y-1 text-brand-white/80">
            <p>Cl. 16 #73-96, 760033, Cali</p>
            <p className="font-bold">+57 305 7361201</p>
          </div>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="#" className="bg-brand-blue p-3 brutalist-border hover:bg-brand-white transition-colors">
              <Instagram className="text-brand-white hover:text-brand-black w-6 h-6" />
            </a>
            <a href="#" className="bg-brand-blue p-3 brutalist-border hover:bg-brand-white transition-colors">
              <MessageCircle className="text-brand-white hover:text-brand-black w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="md:col-span-2 md:text-right">
          <h3 className="text-6xl md:text-[12rem] font-display font-bold text-brand-white/10 leading-none mb-4">
            STRONGER
          </h3>
          <p className="text-brand-blue font-display text-lg md:text-xl">© 2024 KATANA BOX. FORJANDO ATLETAS.</p>
        </div>
      </div>
    </footer>
  );
};

// --- App ---

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  return (
    <div className="min-h-screen bg-brand-black selection:bg-brand-blue selection:text-brand-white">
      <Navbar />
      <main>
        <div ref={containerRef} className="relative">
          <Hero />
          <AboutSection />
        </div>
        <MotivationalDivider />
        <PlansSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

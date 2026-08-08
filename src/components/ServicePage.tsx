import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon, Quote, Plus, Minus, MessageCircle, ArrowLeft } from 'lucide-react';

interface ServicePageProps {
  title: string;
  subtitle: string;
  accentColor: string;
  accentTextColor: string;
  icon: LucideIcon;
  heroDescription: string;
  benefits: { icon: LucideIcon; title: string; description: string }[];
  howItWorks: { step: string; title: string; description: string }[];
  testimonial: { name: string; context: string; text: string };
  faqs: { question: string; answer: string }[];
  whatsappMessage: string;
}

export default function ServicePage({
  title,
  subtitle,
  accentColor,
  accentTextColor,
  icon: Icon,
  heroDescription,
  benefits,
  howItWorks,
  testimonial,
  faqs,
  whatsappMessage
}: ServicePageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const whatsappUrl = `https://wa.me/5581998649500?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-background font-sans text-gray-900 selection:bg-black selection:text-white pb-20">
      <div className="max-w-2xl mx-auto pt-10 px-4 animate-fade-up">
        
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 font-medium hover:underline mb-12 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Voltar</span>
        </Link>

        {/* Hero */}
        <header className="mb-16">
          <div className="flex items-start gap-6">
            <div className={`shrink-0 w-20 h-20 rounded-2xl border-[3px] border-gray-800 neo-shadow flex items-center justify-center ${accentColor}`}>
              <Icon size={40} className="text-white" strokeWidth={2.5} />
            </div>
            <div>
              <span className={`inline-block px-3 py-1 text-sm font-bold tracking-wider rounded-full border-2 border-gray-800 mb-3 bg-white ${accentTextColor}`}>
                {subtitle}
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
                {title}
              </h1>
            </div>
          </div>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-6 font-medium">
            {heroDescription}
          </p>
        </header>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
            Por que escolher?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white border-[3px] border-gray-800 rounded-2xl p-5 neo-shadow hover:-translate-y-1 transition-transform">
                <benefit.icon size={28} className={`mb-4 ${accentTextColor}`} />
                <h3 className="font-bold text-lg mb-2 leading-tight">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold mb-8">Como funciona</h2>
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {howItWorks.map((item, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-[3px] border-gray-800 bg-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 neo-shadow z-10">
                  0{i + 1}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl border-[3px] border-gray-800 neo-shadow">
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="mb-16">
          <div className={`rounded-2xl border-[3px] border-gray-800 p-6 md:p-8 neo-shadow relative bg-white`}>
            <div className={`absolute -top-5 -right-5 w-12 h-12 rounded-full border-[3px] border-gray-800 flex items-center justify-center neo-shadow ${accentColor}`}>
              <Quote size={20} className="text-white fill-current" />
            </div>
            <p className="text-lg md:text-xl font-medium italic mb-6 text-gray-800 relative z-10">
              "{testimonial.text}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-gray-800 flex items-center justify-center overflow-hidden shrink-0">
                <div className="w-full h-full bg-slate-300" />
              </div>
              <div>
                <p className="font-bold text-gray-900 leading-tight">{testimonial.name}</p>
                <p className="text-sm text-gray-500 font-medium">{testimonial.context}</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold mb-6">Perguntas Frequentes</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <div key={i} className="bg-white border-[3px] border-gray-800 rounded-2xl overflow-hidden neo-shadow transition-colors">
                  <button 
                    onClick={() => toggleFaq(i)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-bold text-gray-900 hover:bg-gray-50 focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <span className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-800 ${isOpen ? accentColor : 'bg-white'}`}>
                      {isOpen ? <Minus size={16} className={isOpen ? 'text-white' : 'text-gray-900'} /> : <Plus size={16} className="text-gray-900" />}
                    </span>
                  </button>
                  <div 
                    className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="px-5 pb-5 text-gray-600">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 flex justify-center">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full md:w-auto bg-[#25D366] text-white font-bold text-lg md:text-xl px-8 py-5 rounded-2xl border-[3px] border-gray-800 neo-shadow hover:-translate-y-1 hover:neo-shadow-lg transition-all active:translate-y-1 active:neo-shadow-none"
          >
            <MessageCircle size={28} />
            <span>Falar pelo WhatsApp</span>
          </a>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm font-medium">
          © {new Date().getFullYear()} Rodrigo Almeida
        </footer>
      </div>
    </div>
  );
}

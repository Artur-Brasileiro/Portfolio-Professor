import { GraduationCap, User, MessageCircle, Briefcase, Instagram, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { LinkCard } from '@/components/LinkCard';

const Index = () => {
  const whatsappUrl = 'https://wa.me/5581998649500?text=' + encodeURIComponent('Olá! Gostaria de saber mais sobre as aulas de inglês.');

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col items-center py-10 px-4 sm:px-6">
      
      {/* Decorative background dots */}
      <div className="absolute top-16 left-8 w-3 h-3 rounded-full bg-emerald-400/60"></div>
      <div className="absolute top-32 right-12 w-4 h-4 rounded-full bg-blue-400/50"></div>
      <div className="absolute bottom-60 left-16 w-3 h-3 rounded-full bg-amber-400/50"></div>
      <div className="absolute bottom-32 right-8 w-5 h-5 rounded-full bg-rose-400/40"></div>
      <div className="absolute top-1/2 left-6 w-3 h-3 rounded-sm bg-violet-400/40 rotate-45"></div>

      {/* Main Content Container */}
      <div className="w-full max-w-md mx-auto z-10 flex flex-col items-center">
        
        {/* Profile Picture */}
        <div className="relative mb-8 animate-fade-up">
          <div className="w-36 h-36 rounded-full border-4 border-gray-800 overflow-hidden neo-shadow bg-white z-10 relative">
            <img 
              src="professor.jpeg" 
              alt="Rodrigo Almeida - Professor de Inglês" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name Title */}
        <div className="text-center mb-3 animate-fade-up animation-delay-100">
          <h1 className="text-4xl sm:text-5xl font-display font-black tracking-tight flex items-center justify-center flex-wrap gap-2 text-gray-800">
            <span>RODRIGO</span>
            <span className="relative inline-block">
              <span className="relative z-10 px-3 py-1">ALMEIDA</span>
              <span className="absolute inset-0 bg-primary/20 rounded-lg -rotate-2 z-0 scale-x-110 scale-y-125"></span>
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-10 animate-fade-up animation-delay-200">
          <p className="text-lg text-gray-600 font-medium mb-1">
            Professor de inglês · Foco em conversação
          </p>
          <p className="text-gray-500 font-medium text-lg">
            Escolha por onde começar 👇
          </p>
        </div>

        {/* Links Section */}
        <div className="w-full space-y-5 animate-fade-up animation-delay-300">
          
          {/* Card 1 — Aulas Particulares (destaque principal) */}
          <LinkCard
            href="/aulas-particulares"
            tagText="MAIS POPULAR"
            title="AULAS PARTICULARES"
            description="Evolução rápida com plano 100% adaptado ao seu ritmo e objetivos"
            icon={User}
            bgColor="bg-[#c47760]"
            textColor="text-white"
            tagBgColor="bg-white"
            tagTextColor="text-[#c47760]"
            iconBgColor="bg-white"
            iconColor="text-[#c47760]"
          />

          {/* Card 2 — Conversação */}
          <LinkCard
            href="/conversacao"
            tagText="DESTRAVAR A FALA"
            title="CONVERSAÇÃO"
            description="Ganhe fluência, melhore a pronúncia e perca o medo de falar em situações reais"
            icon={MessageCircle}
            bgColor="bg-white"
            textColor="text-gray-800"
            tagBgColor="bg-[#61689b]"
            tagTextColor="text-white"
            iconBgColor="bg-[#61689b]"
            iconColor="text-white"
          />

          {/* Card 3 — Inglês para Carreira */}
          <LinkCard
            href="/ingles-carreira"
            tagText="PROFISSIONAL"
            title="INGLÊS PARA CARREIRA"
            description="Domine o vocabulário corporativo para reuniões, apresentações e entrevistas"
            icon={Briefcase}
            bgColor="bg-white"
            textColor="text-gray-800"
            tagBgColor="bg-[#788e6e]"
            tagTextColor="text-white"
            iconBgColor="bg-[#788e6e]"
            iconColor="text-white"
          />

          {/* Card 4 — Apoio Acadêmico */}
          <LinkCard
            href="/apoio-academico"
            tagText="ESTUDANTES"
            title="APOIO ACADÊMICO"
            description="Reforço escolar, provas e construção de uma base gramatical sólida"
            icon={GraduationCap}
            bgColor="bg-white"
            textColor="text-gray-800"
            tagBgColor="bg-[#b08d57]"
            tagTextColor="text-white"
            iconBgColor="bg-[#b08d57]"
            iconColor="text-white"
          />
        </div>

        {/* WhatsApp CTA Button */}
        <div className="w-full max-w-lg mx-auto mt-8 animate-fade-up animation-delay-400">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl border-[3px] border-gray-800 neo-shadow bg-[#25D366] text-white font-bold text-lg transition-transform hover:scale-[0.98]"
          >
            <MessageCircle className="w-6 h-6" />
            Agendar aula no WhatsApp
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 mt-10 animate-fade-up animation-delay-500">
          <a
            href="https://www.instagram.com/rodrigoalmeidadc/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl border-[3px] border-gray-800 bg-white flex items-center justify-center hover:bg-pink-50 transition-colors neo-shadow"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 text-gray-800" />
          </a>
          <a
            href="https://www.linkedin.com/in/rodrigo9188/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl border-[3px] border-gray-800 bg-white flex items-center justify-center hover:bg-blue-50 transition-colors neo-shadow"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-gray-800" />
          </a>
          <a
            href="mailto:rodrigoformalidades@gmail.com"
            className="w-12 h-12 rounded-xl border-[3px] border-gray-800 bg-white flex items-center justify-center hover:bg-red-50 transition-colors neo-shadow"
            aria-label="E-mail"
          >
            <Mail className="w-5 h-5 text-gray-800" />
          </a>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center text-gray-400 text-sm font-medium">
          <p>© {new Date().getFullYear()} Rodrigo Almeida. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;

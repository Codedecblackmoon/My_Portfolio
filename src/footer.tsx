import { BadgeCheck, Handshake, Mail, Phone } from 'lucide-react';

function Footer() {

  return (
    <footer className=" text-white px-10 py-12 border-t border-white/20">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        {/* Top row: brand + nav */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <h2
            className="leading-none"
            style={{
              fontFamily: '"Archivo Black", sans-serif',
              fontOpticalSizing: 'auto',
              fontWeight: 900,
              fontStyle: 'normal',
              WebkitTextStroke: '0.5px white',
              color: 'transparent',
              fontSize: 'clamp(2rem, 6vw, 4rem)',
            }}
          >
            GIDEON-LENGE
          </h2>

          <nav className="flex flex-wrap gap-6 text-sm">
            
            <a href="#home" className="text-white/70 hover:text-white transition-colors" >Home</a>
            <a href="#about" className="text-white/70 hover:text-white transition-colors">About</a>
            <a href="#skills" className="text-white/70 hover:text-white transition-colors">Skills</a>
            <a href="#project" className="text-white/70 hover:text-white transition-colors">Project</a>
            <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
          </nav>
        </div>

        {/* Middle row: socials */}
        <div className="flex gap-4">
          <a
            href="#"
            aria-label="BadgeCheck"
            className="w-10 h-10 rounded-full border-2 border-white/40 flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-colors"
          >
            <BadgeCheck size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/gideon-lenge/"
            aria-label="Handshake"
            className="w-10 h-10 rounded-full border-2 border-white/40 flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-colors"
          >
            <Handshake size={16} />
          </a>
          <a
            href="gideonlenge96@gmail.com"
            aria-label="Email"
            className="w-10 h-10 rounded-full border-2 border-white/40 flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-colors"
          >
            <Mail size={16} />
          </a>
        </div>

        {/* Bottom row: divider + copyright */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xs text-white/50">
            <p>Tel |  081 589 2060</p>
          <p>© {new Date().getFullYear()} Gideon Lenge. All rights reserved.</p>
          <p>Made with faith and light.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
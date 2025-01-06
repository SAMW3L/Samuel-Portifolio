import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold">
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#resume" className="hover:text-blue-600 transition-colors">Resume</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/samw3l" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              <Github size={20} />
            </a>
            {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a> */}
            <a href="mailto:samuelsarh678@gmail.com" className="hover:text-blue-600 transition-colors">
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
            <nav className="flex flex-col p-4">
              <a href="#about" className="py-2 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#resume" className="py-2 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Resume</a>
              <a href="#projects" className="py-2 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</a>
              <a href="#skills" className="py-2 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Skills</a>
              <a href="#contact" className="py-2 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
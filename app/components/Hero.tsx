import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-lg w-full max-w-3xl text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-4">
          Akash Veerla
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Computer Science Student | Aspiring Software Engineer
        </p>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/Akash-Veerla" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-500 transition-colors">
            <FaGithub size={40} />
          </a>
          <a href="https://linkedin.com/in/veerla-akash/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-500 transition-colors">
            <FaLinkedin size={40} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

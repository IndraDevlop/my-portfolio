
import { motion, animate } from "framer-motion";
// import { a } from "framer-motion/client";
import { FiGithub, FiLinkedin, FiInstagram, FiMenu, FiX } from "react-icons/fi";
// import { ImOpera } from "react-icons/im";
import { useState, useEffect} from "react";

const Navbar = () => {
  //toggle Menu
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // aktif ketika di-scroll 20px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleScrollSmooth = (id) => {
    const target = document.getElementById(id);
    if (!target) return;

    const targetY =
      target.getBoundingClientRect().top + window.pageYOffset - 80; // offset navbar

    // animasi smooth-scroll PAKE FRAMER-MOTION animate()
    animate(window.scrollY, targetY, {
      duration: 1.4, // PERLAMBAT DI SINI
      ease: "easeInOut",
      onUpdate: (latest) => window.scrollTo(0, latest),
    });
  };
  return (
    <header 
     className={`fixed top-0 left-0 w-full backdrop-blur-lg bg-[rgba(0,0,0,0.3)] z-50 
    ${scrolled ? "backdrop-blur-md bg-zinc-900/40 shadow-lg" : "bg-transparent"}`}
    >
      <div className="ml-3 lg:ml-auto max-w-[1400px] mx-auto flex items-center justify-between ">
        {/* logo */}
        <motion.div 
        initial={{ opacity: 0, x: -100}}
        animate={{ opacity: 1, x: 0}}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
          duration: 1.2,
        }}
        className="flex items-center">
          <div className="h-15 w-30 items-center justify-center text-purple-600 font-bold text-xl mr-3">
            <img 
                src="/assets/MylogoLight.png" // <--- INI PENTING: Jalur langsung dari root 'public'
                alt="Logo Perusahaan Saya"
                className="h-full w-full object-contain p-1" 
            />
          </div>
        </motion.div>

        {/* Navigation */}
        <nav className="lg:flex hidden space-x-8 ml-auto">
          {["Home", "About", "Project", "Experience", "Contact"].map((item, index) => (
            <motion.button
                key={item}
                onClick={() => handleScrollSmooth(item.toLowerCase())}
                className="relative text-gray-300 hover:text-violet-600 font-medium transition-colors duration-300 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
              </motion.button>
          ))}
        </nav>

        {/* social icon */}
        <div className="md:flex hidden items-center space-x-4 ml-auto px-6">
          <motion.a 
          initial={{ opacity: 0, scale: 0.5}}
          animate={{ opacity: 1, scale: 1}}
          transition={{ delay: 1.3, duration: 0.8}}
          className="text-gray-300 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300" href="https://github.com/IndraDevlop">
            <FiGithub className="w-5 h-5"/>
          </motion.a>

          <motion.a 
          initial={{ opacity: 0, scale: 0.5}}
          animate={{ opacity: 1, scale: 1}}
          transition={{ delay: 1.3, duration: 0.8}}
          className="text-gray-300 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300" href="https://www.linkedin.com/in/indrawansyah/">
            <FiLinkedin className="w-5 h-5"/>
          </motion.a>

          <motion.a 
          initial={{ opacity: 0, scale: 0.5}}
          animate={{ opacity: 1, scale: 1}}
          transition={{ delay: 1.3, duration: 0.8}}
          className="text-gray-300 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300" href="https://www.instagram.com/indrawansyah_21/">
            <FiInstagram className="w-5 h-5"/>
          </motion.a>
        </div>

        {/* navbar side */}
        <div className="md:hidden flex items- px-6 ">
          <motion.button
          whileTap={{ scale: 0.7}} 
          onClick={toggleMenu}
          className="text-gray-300">
            {isOpen ? <FiX /> : <FiMenu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>
      
      {/* menu mobile */}
      <motion.div
      initial={{ opacity: 0, height: 0}}
      animate={{
        opacity: isOpen ? 1 : 0,
        height: isOpen ? "auto" : 0,
      }}
      transition={{ duration: 0.5}}
      className="md:hidden overflow-hidden bg-zinc-700 dark:bg-gray-900 shadow-lg px-4 py-1 space-y-5">
          <nav className="flex flex-col space-y-3">
            {["Home", "About", "Project", "Experience", "Contact"].map((item) => (
              <a onClick={toggleMenu} className="text-gray-300 font-medium py-2" key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-5">
              <a href="">
                <FiGithub className="h-5 w-5 text-gray-300"/>
              </a>
              <a href="">
                <FiLinkedin className="h-5 w-5 text-gray-300"/>
              </a>
              <a href="">
                <FiInstagram className="h-5 w-5 text-gray-300"/>
              </a>
            </div>
          </div>
      </motion.div>
    </header>
  )
}

export default Navbar;
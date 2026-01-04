import DataImage from "../data.js";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import ProfileCard from './ui/ProfileCard';

const Hero = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.6 });
  const handleContactNavigation = () => {
    // 1. Temukan elemen berdasarkan ID
    const contactSection = document.getElementById('contact');
    
    // 2. Jika elemen ditemukan, lakukan smooth scroll
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start' // Scroll ke bagian atas section
      });
    }
  };

  const cardAnimation = {
    // 1. HIDDEN (Kondisi Awal): Kecil dan Flip Terbalik
    hidden: { 
      opacity: 0.3, // Mulai sedikit transparan
      scale: 0.7,   // Mulai dari ukuran 50% (Zoom In)
      rotateY: 90,  // Diputar 90 derajat (Flip dimulai)
      y: 20         // Mulai sedikit ke bawah
    },
    
    // 2. VISIBLE (Kondisi Akhir): Posisi Normal dan Efek Bounce
    visible: { 
      opacity: 1, 
      scale: 1,    // Zoom Out ke ukuran 100%
      rotateY: 0,  // Flip selesai (kembali ke 0 derajat)
      y: 0,
      
      // 🌟 Pengaturan Transisi Utama (Bounce)
      transition: { 
        // Gunakan jenis 'spring' untuk menciptakan efek bounce/menempel
        type: 'spring',
        stiffness: 40, // Kekakuan (semakin tinggi, semakin cepat)
        damping: 5,    // Redaman (semakin rendah, semakin banyak bounce)
        mass: 1,        // Massa objek
        delay: 2.2,     // Penundaan sebelum animasi dimulai
        duration: 1   // Durasi total (termasuk bounce)
      } 
    },
  };

	return (
		<div className="hero grid md:grid-cols-2 items-center md:pt-30 pt-10 xl:gap-0 gap-6 grid-cols-1 ">
        <div className=" relative z-20 md:mt-10 mt-10">
          <div>
            <motion.h1
            initial={{ opacity: 0, y: 80}}
            animate={{ opacity: 1, y: 0}}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 25,
              delay: 1.5,
              duration: 1,
            }}
            className="md:text-3xl/tight lg:text-4xl font-bold mb-6 text-[40px] sm:text-4xl">Hello, I'm Indrawansyah</motion.h1>
          </div>
          <motion.p
           initial={{ opacity: 0, y: 80}}
           animate={{ opacity: 1, y: 0}}
           transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 2,
            duration: 1,
           }}
           className="text-base/loose mb-6 opacity-50 text-purple-200 max-w-2xl">Technology is constantly evolving, and so am I. In this fast-paced world, I believe that the ability to continuously learn and adapt is key to surviving and excelling in the programming world.

          </motion.p>
          <motion.div
          initial={{ opacity: 0, y: 80}}
          animate={{ opacity: 1, y: 0}}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 2,
            duration: 1,
          }}
          >
            <div className="flex items-center sm:gap-4 gap-2">
              <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600 text-sm sm:text-base md:text-sm">
                Download My CV <i className="ri-download-cloud-2-line ri-lg"></i>
              </a>
              <a href="#project" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600 text-sm sm:text-base md:text-sm">
                See My Project <i className="ri-arrow-down-double-line ri-lg"></i>
              </a>
            </div>
          </motion.div>
        </div>
        {/* disini */}
        <div className="flex justify-center items-start md:items-center mt-[80px]">
          <motion.div
            variants={cardAnimation}
            initial="hidden"
            whileInView="visible"
            // Memastikan animasi hanya berjalan sekali saat terlihat
            viewport={{ once: false, amount: 0.2 }} 
            className="md:w-1/2 flex justify-center items-center mt-10 md:mt-0"
          >
            <div className="w-[150%] h-full mx-auto">
              <ProfileCard
                name=""
                title=""
                handle="IndraDevlop"
                status="Online"
                contactText="Contact Me"
                avatarUrl="/assets/profil.png" // Ganti dengan path avatar Anda
                showUserInfo={true}
                enableTilt={true}
                onContactClick={handleContactNavigation}
              />
            </div>
          </motion.div>
        </div>
      </div>
	)
}

export default Hero
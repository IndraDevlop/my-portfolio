// import React from 'react';
// Import Lanyard dari subfolder ui
import Lanyard from './ui/lanyard'; 
import { useRef } from "react";
import { motion, useInView } from 'framer-motion';

const Contact = () => {
  const cardRef = useRef(null);
  const inView = useInView(cardRef, { 
    once: false,     // animasi jalan terus setiap muncul di viewport
    margin: "-20%"   // animasi mulai saat elemen masuk 20%
  });
	return (
		<div className="contact mt-25 sm:p-10 p-0" id="contact">
      <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Contact</h1>
      <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Come connect with me
      </p>
      <div className="flex flex-col md:flex-row justify-between w-full items-start">
        <div className="w-full md:w-1/2 md:pr-6 mb-10 md:mb-0 relative" >
          <div className="relative h-[500px] overflow-visible isolate" ref={cardRef} >
              <motion.div
                key={inView}
                // style={{ left: "-350px" }}
                className="absolute top-0 lg:left-[-135px]
                xl:left-[-300px]
                min-[800px]:left-[-110px]
                max-[800px]:left-[-140px]
                max-[600px]:left-[-120px]
                max-[450px]:left-[-100px]
                w-[150%] h-full overflow-visible pointer-events-none z-1000"

                initial={{ y: -200, opacity: 0 }}
                animate={inView 
                  ? { y: [ -200, 0, -20, 0 ], opacity: 1 }
                  : { y: -200, opacity: 0 } 
                }
                transition={{
                  duration: 2.2,
                  ease: "easeOut",
                  times: [0, 0.6, 0.8, 1],
                }}
              >
                {/* Menggunakan Lanyard Component */}
                <Lanyard 
                  position={[0, 0, 10]} // Ubah Z dari 20 (atau default) menjadi 15
                  gravity={[0, -40, 0]}
                />
              </motion.div>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
          <form action="https://formsubmit.co/indhrawansyah@gmail.com" method="POST" className="bg-zinc-800 p-10 w-full rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true" autoComplete="off">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Full Name</label>
                <input type="text" name="nama" placeholder="Enter Name" className="border border-zinc-500 p-2 rounded-md" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Email</label>
                <input type="email" name="email" placeholder="Enter Email" className="border border-zinc-500 p-2 rounded-md" required />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="pesan" className="font-semibold">Message</label>
                <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Message ..." className="border border-zinc-500 p-2 rounded-md"></textarea>
              </div>
              <div className="text-center">
                <label></label>
                <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      
    </div>
	)
}

export default Contact
import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const experiences = [
   {
    id: 1,
    title: "Access Engineer",
    company: "PT. Supra Primatama Nusantara",
    year: "2018 - 2020",
    description:
      "perform installation, activation, and troubleshooting of customer networks, both remotely and on-site.",
  },
  {
    id: 2,
    title: "Developer Freelance",
    company: "PT. Medianet",
    year: "2020 - 2021",
    description:
      "Building landing pages, admin dashboards, and optimizing SEO for various client projects.",
  },
  {
    id: 3,
    title: "Web Development",
    company: "PT. Mitra Sinergi Intisolusi",
    year: "2022 - Sekarang",
    description:
      "Building and maintaining websites, translating designs into code (such as HTML, CSS, and JavaScript), developing functionality, and performing testing and debugging.",
  },
];

export default function Experience() {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: false, margin: "-10% 0px -10% 0px" });

  // progress garis neon berjalan
  const pathProgress = useMotionValue(0);
  
  const pathRef = useRef(null);
  const [length, setLength] = useState(0);
  useEffect(() => {
    if (pathRef.current) {
      setLength(pathRef.current.getTotalLength());
    }
  }, []);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768); // md breakpoint
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const nodePercents = [0.26, 0.52, 0.82];
  const nodePositions = nodePercents.map((p) => {
    if (!pathRef.current) return { x: 0, y: 0 };
    return pathRef.current.getPointAtLength(p * length);
  });
  const nodePositionsVertical = [
    { cx: 180, cy: 600 },   // Node 1
    { cx: 50, cy: 1200 },   // Node 2
    { cx: 240, cy: 2000 },  // Node 3
  ];
  // const isMobile = window.innerWidth < 768;

  const nodes = isMobile ? nodePositionsVertical : nodePositions;
  // buat opacity/scale berdasarkan pathProgress
  const node1 = useTransform(pathProgress, v => v > nodePercents[0] ? 1 : 0);
  const node2 = useTransform(pathProgress, v => v > nodePercents[1] ? 1 : 0);
  const node3 = useTransform(pathProgress, v => v > nodePercents[2] ? 1 : 0);

  const card1 = useSpring(node1, { stiffness: 120, damping: 15 });
  const card2 = useSpring(node2, { stiffness: 120, damping: 15 });
  const card3 = useSpring(node3, { stiffness: 120, damping: 15 });
  const card1Y = useSpring(useTransform(node1, v => (v === 0 ? -40 : 0)), {
    stiffness: 120,
    damping: 15,
  });
  const card2Y = useSpring(useTransform(node2, v => (v === 0 ? -40 : 0)), {
    stiffness: 120,
    damping: 15,
  });
  const card3Y = useSpring(useTransform(node3, v => (v === 0 ? -40 : 0)), {
    stiffness: 120,
    damping: 15,
  });
  return (
    <div ref={containerRef} id="experience" className="relative w-full overflow-hidden mt-25 py-10">
      <h1 className="text-center text-4xl font-bold mb-10">Experience</h1>

      {/* Wrapper Scroll Horizontal */}
      <div className="absolute top-[150px] md:top-[50px] left-0 w-full pointer-events-none hidden sm:block">
        <motion.svg
          width="100%"
          height={isMobile ? 500 : 300}
          viewBox={isMobile ? "0 0 300 2300" : "0 0 2300 300"}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 overflow-visible "
        > 
          {!isMobile && (
            <>
              {/* HORIZONTAL PATH (desktop) */}
              <motion.path
                d="
                  M 0 150
                  C 300 20, 500 280, 800 150
                  S 1300 20, 1600 150
                  S 2000 280, 2300 150
                "
                stroke="#7c3aed"
                strokeWidth="5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 5, ease: "easeInOut" }}
                style={{ pathLength: pathProgress }}
              />

              {/* NODE DESKTOP */}
              <motion.circle r="15" cx={nodePositions[0].x + 600} cy={nodePositions[0].y + 185} style={{ opacity: node1, scale: node1 }} fill="#a78bfa" />
              <motion.circle r="15" cx={nodePositions[0].x + 1200} cy={nodePositions[0].y + 50 } style={{ opacity: node2, scale: node2 }} fill="#a78bfa" />
              <motion.circle r="15" cx={nodePositions[0].x + 1900} cy={nodePositions[0].y + 240} style={{ opacity: node3, scale: node3 }} fill="#a78bfa" />
            </>
          )}
        </motion.svg>
      </div>
      <div className="absolute top-[150px] md:top-[50px] left-0 w-full pointer-events-none sm:hidden">
        <motion.svg
          width="100%"
          height={isMobile ? 500 : 300}
          viewBox={isMobile ? "0 0 300 2300" : "0 0 2300 300"}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 overflow-visible "
        > 
          {isMobile && (
            <>
              {/* VERTICAL PATH (mobile) */}
              <motion.path
                d="
                  M 150 0
                  C 20 300, 280 500, 150 800
                  S 20 1300, 150 1600
                  S 280 2000, 150 2300
                "
                stroke="#7c3aed"
                strokeWidth={isMobile ? 20 : 5} 
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 5, ease: "easeInOut" }}
                style={{ pathLength: pathProgress }}
              />

              {/* NODE MOBILE */}
              <motion.circle r="45" cx={nodes[0].cx} cy={nodes[0].cy} style={{ opacity: node1, scale: node1 }} fill="#a78bfa" />
              <motion.circle r="45" cx={nodes[1].cx} cy={nodes[1].cy} style={{ opacity: node2, scale: node2 }} fill="#a78bfa" />
              <motion.circle r="45" cx={nodes[2].cx} cy={nodes[2].cy} style={{ opacity: node3, scale: node3 }} fill="#a78bfa" />
            </>
          )}
        </motion.svg>
      </div>
      {/* Experience Cards */}
      <div className="flex flex-col items-center justify-center gap-10 mt-10 md:flex-row md:items-start md:gap-20 md:pl-10 md:mt-[180px] lg:gap-32 lg:pl-16 xl:gap-60 xl:pl-20">
        {experiences.map((item, i) => (
          <motion.div
            key={i}
            style={{
              opacity: i === 0 ? card1 : i === 1 ? card2 : card3,
              scale: i === 0 ? card1 : i === 1 ? card2 : card3,
               y: i === 0 ? card1Y : i === 1 ? card2Y : card3Y,
            }}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 12
            }}
            initial={false}   
            className={`relative top-0 left-0 w-[90vw] sm:w-[240px] max-w-[350px] min-h-[180px] bg-zinc-800 shadow-xl border border-zinc-700 rounded-2xl p-6 text-left flex-shrink-0 xl:min-w-[270px] lg:w-[150px] lg:min-w-[190px] md:w-[160px] md:min-w-[100px] sm:p-6
              ${i === 0 ? "sm:left-[136px] sm:top-[90px] md:left-[45px] md:top-[-44px] lg:left-[45px] lg:mt-[-38px] lg:top-0 xl:top-[5px] xl:left-[170px] 2xl:top-[11px] 2xl:left-[120px]" : ""}
              ${i === 1 ? "sm:left-[-152px] sm:top-[-50px] md:left-[0px] md:top-[-87px] lg:left-[-10px] lg:top-[-96px] xl:top-[-106px] xl:left-[-10px] 2xl:top-[-115px] 2xl:left-[0px]" : ""}
              ${i === 2 ? "sm:left-[150px] sm:top-[-110px] md:left-[-15px] md:top-[-26px] lg:left-[-25px] lg:top-[-15px] xl:top-[-2px] xl:left-[-140px] 2xl:top-[9px] 2xl:left-[-50px]" : ""}
            `}
          >
            <h2 className="text-violet-400 font-bold text-base sm:text-lg md:text-[13px] lg:text-[16px] xl:text-[20px] 2xl:text-1xl">{item.year}</h2>
            <h3 className="font-semibold mt-2 text-sm sm:text-base md:text-[10px] lg:text-[13px] xl:text-[17px] 2xl:text-xl">{item.title}</h3>
            <p className="text-xs sm:text-xs md:text-[11px] lg:text-[12px] xl:text-[14px] 2xl:text-base opacity-70">{item.company}</p>
            <p className="text-xs sm:text-xs md:text-[11px] lg:text-[11px] xl:text-sm 2xl:text-base mt-4 opacity-50 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

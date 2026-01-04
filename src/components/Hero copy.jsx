import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "PT. Example Teknologi",
    year: "2022 - Sekarang",
    description:
      "Mengembangkan UI modern dengan React, Tailwind, dan Framer Motion. Meningkatkan performa dan pengalaman pengguna.",
  },
  {
    id: 2,
    title: "Web Developer Intern",
    company: "Example Studio",
    year: "2021",
    description:
      "Membangun landing page, dashboard admin, dan mengoptimalkan SEO untuk berbagai client project.",
  },
  {
    id: 3,
    title: "Freelancer",
    company: "Independent",
    year: "2020 - Sekarang",
    description:
      "Mengerjakan project website custom, portfolio, company profile, UI component, dan integrasi API.",
  },
];

const itemVariant = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

export default function Experience() {
  return (
    <section id="experience" className="mt-32 sm:p-10 p-0">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl mb-2 font-bold text-center"
      >
        Experience
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-base/loose text-center mb-12 opacity-50 max-w-xl mx-auto"
      >
        Perjalanan profesional saya dari masa ke masa.
      </motion.p>

      {/* Timeline */}
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Garis vertikal */}
        <div className="absolute left-1/2 top-0 h-full w-[3px] bg-zinc-700 dark:bg-zinc-600 transform -translate-x-1/2"></div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariant}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`relative w-full md:w-[48%] ${
                index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
              }`}
            >
              {/* Titik bulat */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-violet-600 rounded-full border-4 border-zinc-900 z-20"></div>

              {/* Card */}
              <div className="bg-zinc-800/60 backdrop-blur-lg border border-zinc-700 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-violet-400 text-sm">{exp.company}</p>
                <p className="text-sm opacity-60">{exp.year}</p>
                <p className="mt-3 opacity-80">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

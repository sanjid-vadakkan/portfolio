import { motion } from "framer-motion";

const education = [
  {
    name: "MERN Stack Developer Training",
    org: "MashupStack, Ernakulam",
    period: "2024–2025"
  },
  {
    name: "BCom CA",
    org: "SVPK College Palemad, Calicut University",
    period: "2021–2024"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h2
          className="text-2xl font-bold mb-8 text-indigo-600 dark:text-indigo-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Education &amp; Certifications
        </motion.h2>
        <div>
          {education.map((ed, idx) => (
            <motion.div
              key={ed.name}
              className="mb-6 bg-white dark:bg-gray-800 p-5 rounded shadow"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="font-semibold text-lg">{ed.name}</h3>
              <p className="text-gray-700 dark:text-gray-200">
                {ed.org}
              </p>
              <p className="text-sm text-gray-500">{ed.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center min-h-[80vh] pt-24 pb-16 text-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3"
      >
        Sanjid V
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-xl md:text-2xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400"
      >
        MERN Stack Developer
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mb-8 text-lg sm:text-xl max-w-2xl mx-auto"
      >
        “Passionate about clean code and powerful UI/UX experiences”
      </motion.p>
      <div className="flex gap-4 justify-center">
        <a
          href="/resume.pdf"
          download
          className="px-6 py-2 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700 transition font-medium"
        >
          Download Resume
        </a>
        <a
          href="#contact"
          className="px-6 py-2 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded hover:bg-indigo-50 dark:hover:bg-gray-800 transition font-medium"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
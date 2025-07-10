import { motion } from "framer-motion";
import profilePhoto from "/profile.jpg"; // Place your profile photo in public/profile.jpg

export default function About() {
  return (
    <section
      id="about"
      className="py-16  bg-gray-50 dark:bg-gray-800 transition-colors"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10 max-w-5xl">
        <motion.img
          src={profilePhoto}
          alt="Sanjid V"
          className="rounded-full w-40 h-40 object-cover border-4 border-indigo-400 shadow-lg mb-8 md:mb-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl font-bold mb-2 text-indigo-600 dark:text-indigo-400">
            About Me 
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-200">
            Motivated MERN developer skilled in secure full-stack apps using MongoDB, Express.js, React.js, and Node.js. Fast learner, problem solver, and passionate about user-focused interfaces.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
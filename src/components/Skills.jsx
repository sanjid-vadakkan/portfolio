import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Redux","Tailwind"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js"],
  },
  {
    category: "Database",
    items: ["MongoDB"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "Nodemailer", "html-to-pdf", "AJAX"],
  },
  {
    category: "Other",
    items: ["JWT", "EJS", "HBS"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h2
          className="text-2xl font-bold mb-8 text-indigo-600 dark:text-indigo-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.category}
              className="bg-white dark:bg-gray-800 p-6 rounded shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <h3 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                {skill.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 px-2 py-1 rounded text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
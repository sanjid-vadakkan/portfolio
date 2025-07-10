import { motion } from "framer-motion";

const projects = [
  {
    title: "Concert Ticket Booking App",
    description:
      "Full-stack React + Express web app with secure JWT auth, admin panel, and email confirmation.",
    tech: ["React", "Express.js","Node.js", "MongoDB", "JWT", "Nodemailer"],
    video: "/videos/concert-booking.mp4", // Place your video in 'public/videos'
    github: "https://github.com/sanjid-vadakkan",
    image:"image/concert.png"
  },
  {
    title: "E-Commerce Backend",
    description:
      "Backend with session-based auth and AJAX cart, modular routing.",
    tech: ["Node.js", "Express.js", "MongoDB", "AJAX", "Session"],
    video: "/videos/e-commerce.mp4", // Place your video in 'public/videos'
    github: "https://github.com/sanjid-vadakkan",
    image:"image/e-commerce.png"
  },
  {
    title: "task Manager App",
    description:
      "A full-stack Task Manager with login using JWT. Users can add, edit, delete, and filter tasks by status (Pending, In Progress, Completed).",
    tech: ["React","Node.js", "Express.js", "MongoDB", "JWT",],
    video: "/videos/task-manager.mp4", // Place your video in 'public/videos'
    github: "https://github.com/sanjid-vadakkan",
    image:"image/task-manager.png"
  }
];
 
export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.h2
          className="text-2xl font-bold mb-8 text-indigo-600 dark:text-indigo-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              className="bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-xl transition p-6 flex flex-col"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                {proj.title}
              </h3>
              <p className="mb-3">{proj.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 px-2 py-1 rounded text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mb-3 rounded overflow-hidden aspect-video bg-gray-200 dark:bg-gray-700">
                <video
                  src={proj.video}
                  controls
                  
                  className="w-full h-full object-cover"
                  preload="none"
                  poster={proj.image}
                />
              </div>
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block px-4 py-2 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700 transition"
              >
                View GitHub Code
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
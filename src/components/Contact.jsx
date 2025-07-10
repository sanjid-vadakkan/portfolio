import { useState } from "react";
import { motion } from "framer-motion";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/sanjid-vadakkan",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sanjid-vadakkan-613055323",
  },
   {
    label: "Instagram",
    href: "https://www.instagram.com/sanjid_vadakkan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validate() {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      errs.email = "Email is invalid";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      // Simulate success (replace with real API/email integration)
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }
  }

  return (
    <section id="contact" className="py-16 bg-gray-50 w-full dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-3 sm:px-6 max-w-full sm:max-w-3xl">
        
        <motion.h2
          className="text-2xl font-bold mb-8 text-indigo-600 dark:text-indigo-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact
        </motion.h2>
        <div className="flex  flex-col md:flex-row gap-10">
          <form
            action="https://formspree.io/f/xeokyegn"
            method="POST"
            className="flex-1 w-full bg-white dark:bg-gray-900 rounded shadow p-6"
            autoComplete="off"
          >






            <div className="mb-4">
              <label className="block font-semibold mb-1" htmlFor="name">
                Name
              </label>
              <input
                className="w-full p-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                autoComplete="off"
              />
              {errors.name && (
                <p className="text-red-600 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1" htmlFor="email">
                Email
              </label>
              <input
                className="w-full p-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                autoComplete="off"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full p-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
              />
              {errors.message && (
                <p className="text-red-600 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition font-medium"
              disabled={sent}
            >
              {sent ? "Message Sent!" : "Send Message"}
            </button>
          </form>
          <div className="flex-1 w-full space-y-4 mt-8 md:mt-0">
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-700 dark:text-gray-200">
                +91 9567743071
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-700 dark:text-gray-200">
                sanjidvadakkan@gmail.com
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Links</h3>
              <ul className="flex gap-4">
                {links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
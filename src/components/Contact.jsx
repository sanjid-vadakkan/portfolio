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
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.h2
          className="text-2xl font-bold mb-8 text-indigo-600 dark:text-indigo-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-10">
          <form
            action="https://formsubmit.co/sanjidvadakkan@gmail.com"
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="border p-2 w-full rounded"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="border p-2 w-full rounded"
            />
            <textarea
              name="message"
              required
              placeholder="Your Message"
              className="border p-2 w-full rounded"
            />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://sanjid-vadakkan.github.io/portfolio/thanks" />
            <button
              type="submit"
              className="bg-indigo-600 text-white py-2 px-4 rounded"
            >
              Send Message
            </button>
          </form>

          <div className="flex-1 space-y-4">
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
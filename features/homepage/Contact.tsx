import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-200 text-gray-800 py-10 px-6 mt-20 min-w-full rounded-t-lg">
      <div className="max-w-4xl mx-auto text-center space-y-3">
        <h3 className="text-xl font-semibold">Let's Connect</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Feel free to reach out if you want to collaborate or just say hi!
        </p>

        <div className="grid grid-cols-1 gap-4">
          {/* Contact Info */}
          <div className="flex justify-center space-x-8 text-sm text-gray-700 dark:text-gray-300">
            <a
              href="mailto:riidwanadiit@gmail.com"
              className="flex items-center space-x-2 hover:text-blue-500"
              aria-label="Email"
            >
              <FaEnvelope />
              <span>riidwanadiit@gmail.com</span>
            </a>
            {/* <a href="tel:+6281234567890" className="flex items-center space-x-2 hover:text-blue-500" aria-label="Phone">
            <FaWhatsapp />
            <span>+62 812 3456 7890</span>
          </a> */}
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 text-lg text-gray-700 dark:text-gray-300">
            <a
              href="https://github.com/riidwanadiit"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ridwan-aditya-saputra-121410133/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 mt-4">
          © {new Date().getFullYear()} Ridwan. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Contact;

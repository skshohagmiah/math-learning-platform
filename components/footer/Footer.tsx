"use client";
import React from "react";
import * as LucideIcons from "lucide-react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 divide-y-2 space-y-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/">
              <span className="text-2xl font-bold hover:text-blue-500 transition duration-300">
                Math Learning Platform
              </span>
            </Link>
            <p className="mt-2 text-gray-400">
              Learn math interactively and visually.
            </p>
          </div>
          <div className="flex justify-center">
            <Link href="https://facebook.com">
              <span className="mx-2 hover:text-blue-500 transition duration-300">
                <LucideIcons.Facebook size={24} />
              </span>
            </Link>
            <Link href="https://twitter.com">
              <span className="mx-2 hover:text-blue-500 transition duration-300">
                <LucideIcons.Twitter size={24} />
              </span>
            </Link>
            <Link href="https://instagram.com">
              <span className="mx-2 hover:text-blue-500 transition duration-300">
                <LucideIcons.Instagram size={24} />
              </span>
            </Link>
            <Link href="https://linkedin.com">
              <span className="mx-2 hover:text-blue-500 transition duration-300">
                <LucideIcons.Linkedin size={24} />
              </span>
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="/about">
              <span className="hover:text-blue-500 transition duration-300">
                About Us
              </span>
            </Link>
            <Link href="/contact">
              <span className="hover:text-blue-500 transition duration-300">
                Contact
              </span>
            </Link>
            <Link href="/privacy">
              <span className="hover:text-blue-500 transition duration-300">
                Privacy Policy
              </span>
            </Link>
          </div>
        </div>

        <div className="text-center text-gray-400 pt-4">
          &copy; {new Date().getFullYear()} Math Learning Platform. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

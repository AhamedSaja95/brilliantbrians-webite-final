"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://facebook.com/profile.php?id=100068426378830",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/brilliantbrainstutoring",
    },
    // {
    //   name: "Twitter",
    //   icon: Twitter,
    //   href: "https://twitter.com/brilliantbrains",
    // },
    // {
    //   name: "LinkedIn",
    //   icon: Linkedin,
    //   href: "https://linkedin.com/company/brilliantbrainstutoring",
    // },
  ];

  const tutoringLinks = [
    { name: "Maths", href: "/tutoring/maths" },
    { name: "English", href: "/tutoring/english" },
    { name: "NAPLAN", href: "/tutoring/naplan" },
    { name: "GATE", href: "/tutoring/gate" },
    { name: "ATAR", href: "/tutoring/atar" },
    { name: "Crash Courses", href: "/tutoring/crash-courses" },
  ];

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Footer Background with dark design */}
      <div className="text-white relative -mt-1 bg-[#112558]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Logo and Description */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Link href="/" className="inline-block">
                  <Image
                    src="/newbblogo.svg"
                    alt="BrilliantBrains Logo"
                    width={200}
                    height={65}
                    className="w-auto h-[65px] brightness-0 invert"
                    priority
                  />
                </Link>
              </div>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                Brilliant Brains is dedicated to creating an engaging learning
                environment where students thrive.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-[#d93b3b] transition-transform duration-300 hover:scale-110" />
                  <a
                    href="tel:+61468384001"
                    className="hover:text-white transition-colors duration-300"
                  >
                    +61 468 384 001
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-[#d93b3b] transition-transform duration-300 hover:scale-110 flex-shrink-0" />
                  <a
                    href="mailto:contact@brilliantbrainstutoring.com.au"
                    className="hover:text-white transition-colors duration-300 hover:underline"
                  >
                    contact@brilliantbrainstutoring.com.au
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-[#d93b3b]" />
                  <span>Perth, Western Australia</span>
                </div>
              </div>
            </div>

            {/* Tutoring Programs */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-semibold mb-6 text-white">
                Tutoring Programs
              </h3>
              <ul className="space-y-3">
                {tutoringLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-semibold mb-6 text-white">
                Navigation
              </h3>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-semibold mb-6 text-white">
                Follow Us
              </h3>
              <div className="flex gap-4 mb-8">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-[#d93b3b] hover:text-white transition-all duration-300 shadow-lg"
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
              <div className="pt-8 border-t border-gray-700">
                <p className="text-gray-400 text-sm">
                  Copyright © {currentYear} Brilliant Brains. Built by{" "}
                  <a
                    href="http://webs8digital.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d93b3b] font-semibold hover:underline"
                  >
                    Webs8 Digital
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-950 to-slate-700 text-white py-10">
      <div className="max-w-7xl mx-auto flex gap-8 flex-col md:flex-row justify-between px-4">
        {/* Left Column */}
        <div className="flex flex-col mb-6 md:w-6/12">
          <div className="flex items-center mb-4">
            <Image
              src="/logo-horizontal-white.png"
              alt="logo-image"
              width={220} // Use one dimension
              height={220} // Remove this line
              style={{ height: "auto" }} // Maintain aspect ratio with CSS
            />
          </div>
          <p>
            We offer specialized Ruqyah services to help you find peace and
            healing through the power of the Quran. Our experienced
            practitioners use Quranic verses and authentic Hadith to guide you
            on your spiritual journey. We believe in the transformative power of
            faith and the importance of seeking help through divine means. Our
            services are designed to provide comfort and reassurance during
            difficult times. Join us in our mission to promote well-being and
            spiritual clarity in the community.
          </p>
        </div>

        {/* Center Column */}
        <div className="flex flex-col mb-6 md:w-2/12">
          <h2 className="text-2xl font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-1 text-xl">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Faq&apos;s
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Refference
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="flex flex-col mb-6 md:w-4/8">
          <h2 className="text-2xl font-semibold mb-2">Location Map</h2>
          <div className="aspect-video w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387199.3034186863!2d78.447035!3d17.385044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93f67c74ed75%3A0x2ec6c19b9335ae3!2sMehdipatnam%2C%20Hyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1632995474553!5m2!1sen!2sus" // Replace with your map URL
              title="Mehdipatnam Map"
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="copyright text-center p-4 py-0 text-white text-md tracking-wide">
        <p>
          Designed and developed by{" "}
          <a
            href="https://www.compumaxllc.com"
            target="blank"
            className="underline hover:text-gray-300"
          >
            CompumaxLLC
          </a>
          . All rights reserved © 2024.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

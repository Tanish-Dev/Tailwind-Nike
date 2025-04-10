import React from "react";
import "./css/input.css";

// Import assets (you can organize and use these as needed)
import {
  arrowRight,
  chevronLeft,
  chevronRight,
  copyrightSign,
  facebook,
  hamburger,
  instagram,
  shieldTick,
  star,
  support,
  truckFast,
  twitter,
} from "./assets/icons";

import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  footerLogo,
  headerLogo,
  offer,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  shoe8,
} from "./assets/images";

const App = () => {
  return (
    <main className="relative">
      {/* Header */}
      <section className="w-full p-8 flex justify-between items-center">
        <img src={headerLogo} alt="Nike Logo" className="h-8" />
        <nav className="hidden md:flex gap-8">
          <a href="#home" className="text-lg text-gray-800 hover:text-blue-600">
            Home
          </a>
          <a
            href="#about"
            className="text-lg text-gray-800 hover:text-blue-600"
          >
            About
          </a>
          <a
            href="#products"
            className="text-lg text-gray-800 hover:text-blue-600"
          >
            Products
          </a>
          <a
            href="#contact"
            className="text-lg text-gray-800 hover:text-blue-600"
          >
            Contact
          </a>
        </nav>
        <button className="md:hidden">
          <img src={hamburger} alt="Menu" className="w-6 h-6" />
        </button>
      </section>

      {/* Hero Section */}
      <section className="flex flex-col xl:flex-row justify-center items-center max-w-screen-xl mx-auto px-8 py-16 gap-10">
        <div className="flex-1">
          <h1 className="text-5xl font-bold text-black mb-6">
            STEP INTO <span className="text-blue-600">GREATNESS</span> WITH NIKE
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full flex items-center gap-2">
            Shop Now
            <img src={arrowRight} alt="Arrow right" className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 relative">
          <img
            src={bigShoe1}
            alt="Nike Shoe"
            className="object-contain max-w-full"
          />
        </div>
      </section>

      {/* Add more sections as needed */}

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-8">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <img src={footerLogo} alt="Nike Logo" className="h-8 mb-6" />
            <p className="text-gray-400">
              Get shoes ready for the new term at your nearest Nike store. Find
              your perfect size in store. Get rewards.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Air Force 1</li>
              <li>Air Max</li>
              <li>Air Jordan</li>
              <li>Air Force 2</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">Help</h3>
            <ul className="space-y-2 text-gray-400">
              <li>About us</li>
              <li>FAQs</li>
              <li>How it works</li>
              <li>Privacy policy</li>
              <li>Payment policy</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800 max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 flex items-center gap-2">
            <img src={copyrightSign} alt="Copyright" className="w-4 h-4" />
            <span>Copyright. All rights reserved.</span>
          </p>
          <p className="text-gray-400">Terms & Conditions</p>
        </div>
      </footer>
    </main>
  );
};

export default App;

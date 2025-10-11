import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const About = () => {
  return (
    <div
      className="flex flex-col min-h-screen text-white pt-16"
      style={{
        background: "linear-gradient(135deg, #0f2027 0%, #2c5364 100%)",
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* About Section */}
      <section className="flex-grow flex flex-col justify-center items-center px-6 py-12">
        <div className="max-w-5xl text-center">
          <h2 className="text-5xl font-bold mb-6 text-teal-300">
            About <span className="text-white">Tishalagbo</span>
          </h2>

          <p className="text-lg text-gray-200 leading-relaxed mb-8">
            At <span className="text-teal-400 font-semibold">Tishalagbo</span>,
            we believe in the timeless power of nature to heal, nourish, and
            restore balance. Our mission is simple — to bring pure, herbal, and
            naturally sourced wellness products to every home. From hand-picked
            herbs and spices to raw, organic honey and natural remedies, we
            carefully select each product to support your body’s natural
            harmony.
          </p>

          <p className="text-lg text-gray-200 leading-relaxed mb-8">
            Founded with a passion for holistic living and inspired by
            traditional herbal knowledge, Tishalagbo bridges the gap between
            modern wellness and ancient wisdom. Every item we offer is crafted
            or sourced with care — free from artificial additives and full of
            nature’s finest goodness.
          </p>

          {/* Brand Values */}
          <div className="mt-8 grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20 hover:border-teal-400 transition">
              <h3 className="text-xl font-semibold text-teal-300 mb-2">
                100% Natural
              </h3>
              <p className="text-gray-300">
                Every product is made from nature’s purest ingredients, without
                chemicals or preservatives.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl border border-white/20 hover:border-teal-400 transition">
              <h3 className="text-xl font-semibold text-teal-300 mb-2">
                Herbal Heritage
              </h3>
              <p className="text-gray-300">
                Inspired by traditional African and global herbal wisdom passed
                down through generations.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl border border-white/20 hover:border-teal-400 transition">
              <h3 className="text-xl font-semibold text-teal-300 mb-2">
                Wellness for All
              </h3>
              <p className="text-gray-300">
                Our goal is to make holistic, affordable health products
                accessible to everyone, everywhere.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12">
            <a
              href="/Products"
              className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-xl transition transform hover:scale-105 shadow-lg"
            >
              Explore Our Products
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;

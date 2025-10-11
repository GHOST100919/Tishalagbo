import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ElectricBorder from "../components/Border.jsx";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("");

    emailjs
      .sendForm(
        "service_bsz54ia", // ✅ Service ID
        "template_e6043cg", // ✅ Template ID
        form.current,
        "RDsQmS8dDpd4F6rVz" // ✅ Public Key
      )
      .then(
        () => {
          setIsSending(false);
          setStatusMessage("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          setIsSending(false);
          setStatusMessage("❌ Failed to send. Please try again later.");
        }
      );
  };

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ background: "linear-gradient(135deg, #0f2027 0%, #2c5364 100%)" }}
    >
      <Navbar />

      {/* Contact Section */}
      <div className="flex flex-grow items-center justify-center pt-22">
        {/* Glass Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-xl p-7 w-full max-w-lg border border-white/20">
          <h2 className="text-4xl font-bold text-center text-white mb-3">
            Contact <span style={{color:'#00ffb3'}}>Tishalagbo</span>
          </h2>
          <p className="text-center text-gray-200 mb-6">
            Have questions about our herbal or natural products?
            <br />
            Send us a message — we’ll reply shortly 🌿
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div>
              <label className="block text-gray-100 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                required
                className="w-full p-2 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-xl focus:ring-2 focus:ring-teal-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-100 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="reply_to"
                placeholder="you@example.com"
                required
                className="w-full p-2 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-xl focus:ring-2 focus:ring-teal-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-100 font-medium mb-1">
                Subject
              </label>
                <input 
                type="text" 
                name="subject" 
                placeholder="Subject" 
                required
                className="w-full p-2 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-xl focus:ring-2 focus:ring-teal-400 outline-none" />

            </div>

            <div>
              <label className="block text-gray-100 font-medium mb-1">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Write your message here..."
                rows="5"
                required
                className="w-full p-3 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-xl focus:ring-2 focus:ring-teal-400 outline-none resize-none"
              />
            </div>

            <ElectricBorder
              color="#7df9ff"
              speed={0.2}
              chaos={0.3}
              thickness={2}
              style={{ borderRadius: 12 }}
            >
              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold p-2 rounded-xl transition transform hover:scale-[1.03] disabled:opacity-50"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </ElectricBorder>
          </form>

          {statusMessage && (
            <p
              className={`text-center mt-4 font-medium ${
                statusMessage.includes("✅") ? "text-green-400" : "text-red-400"
              }`}
            >
              {statusMessage}
            </p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;

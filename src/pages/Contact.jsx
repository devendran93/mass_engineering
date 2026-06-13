import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-gradient-to-r from-rose-900 via-rose-800 to-rose-700 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Contact Us
          </h1>

          <p className="text-gray-300 mt-3">
            Get in touch with MASS Engineering College
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-rose-100 flex items-center justify-center">
              <MapPin className="text-rose-800" size={24} />
            </div>

            <h3 className="font-bold text-lg mt-4">
              Address
            </h3>

            <p className="text-gray-600 mt-2">
              Chennai Salai,
              Kallapuliyur Village,
              Kumbakonam - 612 501
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-rose-100 flex items-center justify-center">
              <Phone className="text-rose-800" size={24} />
            </div>

            <h3 className="font-bold text-lg mt-4">
              Phone
            </h3>

            <p className="text-gray-600 mt-2">
              +91 435 2400299
            </p>

            <p className="text-gray-600">
              +91 94880 12299
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-rose-100 flex items-center justify-center">
              <Mail className="text-rose-800" size={24} />
            </div>

            <h3 className="font-bold text-lg mt-4">
              Email
            </h3>

            <p className="text-gray-600 mt-2 break-all">
              mass@masscollege.in
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-rose-100 flex items-center justify-center">
              <Clock className="text-rose-800" size={24} />
            </div>

            <h3 className="font-bold text-lg mt-4">
              Working Hours
            </h3>

            <p className="text-gray-600 mt-2">
              Mon - Sat
            </p>

            <p className="text-gray-600">
              9:00 AM - 5:00 PM
            </p>
          </div>

        </div>
      </section>

      {/* Map */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <iframe
            title="MASS Engineering College"
            src="https://maps.google.com/maps?q=MASS%20Engineering%20College%20Kumbakonam&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Send Us a Message
          </h2>

          <form className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Mobile Number
              </label>

              <input
                type="tel"
                placeholder="Enter mobile number"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter email address"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Subject
              </label>

              <input
                type="text"
                placeholder="Enter subject"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-600"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>

              <textarea
                rows="6"
                placeholder="Enter your message"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-600"
              />
            </div>

            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-rose-900 hover:bg-rose-700 text-white px-8 py-3 rounded-xl font-medium transition"
              >
                Send Message
              </button>
            </div>

          </form>
        </div>
      </section>

    </div>
  );
}
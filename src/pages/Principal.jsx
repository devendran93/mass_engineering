import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

export default function Principal() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-rose-900 via-rose-800 to-rose-700 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Principal Message
        </h1>
        <p className="mt-5 text-rose-100 text-lg">
          Inspiring Excellence Through Education
        </p>
      </section>

      {/* Principal Profile */}
      <section className="py-24 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Image Section */}
            <div
              data-aos="zoom-in"
              className="flex justify-center lg:justify-start"
            >
              <div className="relative">
                {/* Decorative Background */}
                <div className="absolute -inset-4 bg-gradient-to-r from-rose-500 to-yellow-400 rounded-[35px] blur-md opacity-40"></div>

                {/* Image */}
                <img
                  src={`${import.meta.env.BASE_URL}/images/principal.jpg`}
                  alt="Principal"
                  className="
                    relative
                    w-full
                    max-w-md
                    h-[500px]
                    object-cover
                    rounded-[30px]
                    border-[6px]
                    border-white
                    shadow-2xl
                    bg-white
                    hover:scale-105
                    transition-all
                    duration-500
                  "
                />
              </div>
            </div>

            {/* Content Section */}
            <div data-aos="fade-left">
              <FaQuoteLeft className="text-6xl text-rose-300 mb-6" />

              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                Education is the foundation for innovation, leadership and
                social transformation.
              </h2>

              <div className="mt-8">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
                  Dr. D. Aruldasan
                </h3>

                <p className="text-rose-600 font-semibold text-lg mt-2">
                  Principal
                </p>

                <div className="w-24 h-1 bg-rose-500 mt-4 rounded-full"></div>
              </div>

              <p className="mt-8 text-gray-600 leading-8 text-lg">
                Welcome to our institution. Our mission is to provide quality
                education, nurture innovation, and empower students with the
                knowledge and skills required to excel in a rapidly evolving
                world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal Message */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-5">
          <div
            data-aos="fade-up"
            className="
              bg-white
              border-2
              border-rose-100
              rounded-[30px]
              p-8
              md:p-14
              shadow-xl
              hover:shadow-2xl
              transition-all
              duration-500
            "
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Message from the Principal
            </h3>

            <div className="space-y-8">
              <p className="text-gray-600 leading-9 text-lg text-justify">
                Welcome to our institution. Our commitment is to provide
                quality technical education that empowers students with
                knowledge, skills, and ethical values. We strive to create a
                vibrant learning environment that promotes innovation,
                research, and leadership.
              </p>

              <p className="text-gray-600 leading-9 text-lg text-justify">
                Through dedicated faculty, modern infrastructure, and
                industry-oriented training, we prepare students to meet
                global challenges and contribute meaningfully to society.
                We believe that education is not merely the acquisition of
                knowledge but the development of character, creativity, and
                responsibility.
              </p>

              <p className="text-gray-600 leading-9 text-lg text-justify">
                We encourage every student to dream big, work hard, embrace
                lifelong learning, and become responsible professionals
                capable of making a positive impact in the world. Together,
                let us build a future filled with excellence, integrity, and
                success.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-12 text-right">
              <h4 className="text-2xl font-bold text-slate-900">
                Dr. D. Aruldasan
              </h4>
              <p className="text-rose-600 font-medium mt-1">
                Principal
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
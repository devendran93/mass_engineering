import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

export default function Principal() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-rose-900 via-rose-800 to-rose-700 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          From the Principal's desk
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

              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
              The ultimate goal of education is to empower students with knowledge, 
              strong character, and ethical values, enabling them to become responsible
               professionals and compassionate citizens.
              </h2>

              <div className="mt-8">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
                  Dr. G. Saravanakumar, M.E., Ph.D., M.B.A.,
                </h3>

                <p className="text-rose-600 font-semibold text-lg mt-2">
                  Principal
                </p>

                <div className="w-24 h-1 bg-rose-500 mt-4 rounded-full"></div>
              </div>
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
              From the Principal's desk
            </h3>

            <div className="space-y-8">
              <p className="text-gray-600 leading-9 text-lg text-justify">
                Dr. G. Saravana Kumar is a distinguished academician, researcher, and
                administrator with nearly 27 years of combined experience in industry,
                teaching, research, and academic leadership. He earned his
                <b> B.E. (EEE)</b> in 1994, <b>M.E. (Process Control & Instrumentation)</b> in
                2002, and <b>Ph.D. (EEE)</b> from Anna University, Chennai, in 2008.
              </p>

              <p className="text-gray-600 leading-9 text-lg text-justify">
                Throughout his academic career, he has been associated with several
                prestigious institutions, including <b>BITS Pilani, Dubai Campus</b> and
                <b> Manipal University</b>, and has over 11 years of administrative
                experience as Professor and Dean in reputed engineering colleges. His
                expertise spans Process Control, Control Systems, Robotics,
                Instrumentation, and Industrial Automation.
              </p>

              <p className="text-gray-600 leading-9 text-lg text-justify">
                As a recognized <b>Ph.D. Supervisor of Anna University</b>, he has guided
                five scholars to the successful completion of their doctoral degrees,
                published over 25 research papers in reputed international journals and
                IEEE conferences, and secured research grants exceeding
                <b> ₹20 lakhs</b> from premier funding agencies such as<b> CSIR, DRDO, BRNS,
                BARC, AICTE, and DST-NIMAT.</b> He also serves as a reviewer for reputed
                international journals and is actively engaged in promoting quality
                research and innovation.
              </p>

              <p className="text-gray-600 leading-9 text-lg text-justify">
                He is a <b>Life Member</b> of the Indian Society for Technical Education
                (ISTE), Instrumentation Society of India (ISOI), Systems Society of India
                (SSI), the International Association of Engineers (IAENG), and is also a
                Member of IEEE. As Principal, Dr. Saravana Kumar is dedicated to
                fostering academic excellence, research, innovation, industry
                collaboration, and holistic student development, with the vision of
                transforming the institution into a centre of excellence that produces
                competent professionals and responsible global citizens.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-12 text-right">
              <h4 className="text-2xl font-bold text-slate-900">
                Dr. G. Saravanakumar
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
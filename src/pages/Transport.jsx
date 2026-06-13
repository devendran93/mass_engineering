import React from "react";

export default function Transport() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
            Campus Facilities
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">
            Transport Facility
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Safe and convenient transportation services connecting students
            from various locations to the campus.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Description */}
          <div data-aos="fade-right">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
              Safe & Reliable
            </span>

            <h3 className="mt-5 text-3xl font-bold text-slate-900">
              Comfortable Travel for Students
            </h3>

            <p className="mt-6 text-gray-600 leading-8">
              The college provides transportation facilities to ensure
              convenient and hassle-free travel for students and staff.
              Well-maintained vehicles operate on various routes, helping
              commuters reach the campus safely and on time.
            </p>

            <p className="mt-4 text-gray-600 leading-8">
              The transport service is managed with a focus on safety,
              punctuality, and comfort, making daily travel easier for
              members of the college community.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-slate-50 shadow text-gray-700">
                Safe Travel
              </span>

              <span className="px-4 py-2 rounded-full bg-slate-50 shadow text-gray-700">
                Multiple Routes
              </span>

              <span className="px-4 py-2 rounded-full bg-slate-50 shadow text-gray-700">
                Experienced Drivers
              </span>

              <span className="px-4 py-2 rounded-full bg-slate-50 shadow text-gray-700">
                Regular Service
              </span>
            </div>
          </div>

          {/* Image */}
          <div
            data-aos="fade-left"
            className="overflow-hidden rounded-3xl shadow-xl"
          >
            <img
              src={`${import.meta.env.BASE_URL}/images/amenities/transport.jpg`}
              alt="Transport Facility"
              className="w-full h-[450px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
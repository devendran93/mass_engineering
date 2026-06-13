import React from "react";

export default function Cafeteria() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-medium">
            Student Amenities
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">
            College Cafeteria
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A comfortable dining space offering fresh food and refreshments
            for students and staff.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <div
            data-aos="fade-right"
            className="overflow-hidden rounded-3xl shadow-xl"
          >
            <img
              src={`${import.meta.env.BASE_URL}/images/amenities/cafeteria.jpg`}
              alt="College Cafeteria"
              className="w-full h-[450px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Description */}
          <div data-aos="fade-left">
            <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-medium">
              Healthy & Hygienic
            </span>

            <h3 className="mt-5 text-3xl font-bold text-slate-900">
              Fresh Food in a Pleasant Environment
            </h3>

            <p className="mt-6 text-gray-600 leading-8">
              The college cafeteria provides a clean and welcoming atmosphere
              where students and staff can enjoy a variety of meals, snacks,
              and beverages. It serves as a convenient place to relax and
              refresh during academic hours.
            </p>

            <p className="mt-4 text-gray-600 leading-8">
              Emphasis is placed on maintaining quality, hygiene, and timely
              service, ensuring a comfortable dining experience for the entire
              campus community.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-white shadow text-gray-700">
                Hygienic Food
              </span>

              <span className="px-4 py-2 rounded-full bg-white shadow text-gray-700">
                Fresh Beverages
              </span>

              <span className="px-4 py-2 rounded-full bg-white shadow text-gray-700">
                Comfortable Seating
              </span>

              <span className="px-4 py-2 rounded-full bg-white shadow text-gray-700">
                Student Friendly
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
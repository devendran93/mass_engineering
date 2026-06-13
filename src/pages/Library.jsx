import { BookOpen, Library, Users, BookMarked } from "lucide-react";

export default function LibrarySection() {
  const stats = [
    {
      icon: BookOpen,
      title: "Books Available",
      value: "25,000+",
    },
    {
      icon: BookMarked,
      title: "Journals",
      value: "120+",
    },
    {
      icon: Users,
      title: "Reading Capacity",
      value: "250 Seats",
    },
    {
      icon: Library,
      title: "Digital Resources",
      value: "5,000+",
    },
  ];

  return (
    <section className="bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-5">
        
        {/* Heading */}
        <div className="text-center mb-14">

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">
            Library
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            The library provides students and faculty with access to a wide
            collection of books, journals, magazines, digital resources, and
            research materials to support academic excellence.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img
              src={`${import.meta.env.BASE_URL}/images/amenities/library.jpg`}
              alt="Library"
              className="w-full h-[450px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Details */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              A Hub for Learning & Research
            </h3>

            <p className="text-gray-600 leading-8 mb-8">
              Our library serves as the intellectual heart of the institution.
              It offers a peaceful environment for reading, learning, and
              research with an extensive collection of academic books,
              reference materials, periodicals, and digital resources.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {stats.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-5 shadow-md border border-slate-100 hover:shadow-lg transition"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                      <Icon size={24} className="text-blue-600" />
                    </div>

                    <h4 className="text-2xl font-bold text-slate-900">
                      {item.value}
                    </h4>

                    <p className="text-gray-500 mt-1">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
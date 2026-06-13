import React from "react";
import {
  FaGraduationCap,
  FaBullseye,
  FaEye,
  FaUsers,
  FaBriefcase,
  FaTrophy,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";

export default function AIML() {
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-rose-900 via-rose-800 to-rose-700 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
        Department of Artificial Intelligence and Machine Learning
        </h1>

        <p className="mt-4 text-rose-100 text-lg md:text-xl">
        Creating Intelligent Systems for a Smarter Future
        </p>
      </section>

      {/* About Department */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image */}
            <div data-aos="zoom-in">
              <img
                src={`${import.meta.env.BASE_URL}/images/courses/aiml.jpg`}
                alt="Department"
                className="
                  w-full
                  h-[250px]
                  sm:h-[350px]
                  md:h-[450px]
                  lg:h-[500px]
                  object-cover
                  rounded-[30px]
                  shadow-2xl
                "
              />
            </div>

            {/* Content */}
            <div data-aos="fade-left">
              <FaGraduationCap className="text-5xl md:text-6xl text-rose-500 mb-6" />

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                About the Department
              </h2>

              <p className="mt-6 text-gray-600 leading-8 text-base md:text-lg text-justify">
                The Department of Artificial Intelligence and Machine Learning is
                dedicated to developing professionals with expertise in intelligent
                systems, machine learning algorithms, deep learning, natural language
                processing, computer vision and data-driven technologies. The
                department provides students with strong theoretical foundations and
                practical skills required to design, develop and deploy AI-powered
                solutions that address real-world challenges across various industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div
              data-aos="fade-right"
              className="
                bg-white
                border
                border-rose-100
                rounded-3xl
                p-8
                shadow-xl
              "
            >
              <FaEye className="text-5xl text-rose-600 mb-5" />

              <h3 className="text-3xl font-bold text-slate-900 mb-5">
                Vision
              </h3>

              <p className="text-gray-600 leading-8">
                To be a center of excellence in Artificial Intelligence and Machine
                Learning education, research and innovation by producing highly
                skilled professionals capable of driving technological advancements
                and societal transformation.
              </p>
            </div>

            {/* Mission */}
            <div
              data-aos="fade-left"
              className="
                bg-white
                border
                border-rose-100
                rounded-3xl
                p-8
                shadow-xl
              "
            >
              <FaBullseye className="text-5xl text-rose-600 mb-5" />

              <h3 className="text-3xl font-bold text-slate-900 mb-5">
                Mission
              </h3>

              <p className="text-gray-600 leading-8">
                To provide quality education in Artificial Intelligence and Machine
                Learning, promote research and innovation, strengthen industry
                collaboration and develop ethical professionals capable of creating
                intelligent solutions for global challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Department Highlights */}
      <section className="py-16 md:py-20 bg-rose-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
            Department Highlights
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center hover:shadow-xl transition">
              <FaUsers className="text-5xl text-rose-600 mx-auto mb-5" />

              <h3 className="font-bold text-xl mb-3">
                Expert Faculty
              </h3>

              <p className="text-gray-600">
                Experienced and qualified faculty members.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center hover:shadow-xl transition">
              <FaLaptopCode className="text-5xl text-rose-600 mx-auto mb-5" />

              <h3 className="font-bold text-xl mb-3">
                Modern Infrastructure
              </h3>

              <p className="text-gray-600">
                Advanced computing facilities and resources.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center hover:shadow-xl transition">
              <FaCode className="text-5xl text-rose-600 mx-auto mb-5" />

              <h3 className="font-bold text-xl mb-3">
                Technical Training
              </h3>

              <p className="text-gray-600">
                Industry-oriented skill development programs.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center hover:shadow-xl transition">
              <FaBriefcase className="text-5xl text-rose-600 mx-auto mb-5" />

              <h3 className="font-bold text-xl mb-3">
                Placement Support
              </h3>

              <p className="text-gray-600">
                Career guidance and placement assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div
            className="
              bg-white
              border
              border-rose-100
              rounded-[30px]
              shadow-xl
              p-8
              md:p-12
            "
          >
            <div className="flex items-center gap-4 mb-8">
              <FaTrophy className="text-5xl text-rose-600" />

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Department Achievements
              </h2>
            </div>

            <ul className="space-y-5 text-gray-600 leading-8">
            <li>
                • Student participation in AI and Machine Learning competitions.
            </li>

            <li>
                • Innovative projects in Deep Learning and Intelligent Systems.
            </li>

            <li>
                • Research publications in Artificial Intelligence technologies.
            </li>

            <li>
                • Industry-oriented certification programmes and workshops.
            </li>

            <li>
                • Successful placements in AI, ML and Data Science domains.
            </li>
</ul>
          </div>
        </div>
      </section>
    </div>
  );
}
import React from "react";
import {
  FaBriefcase,
  FaCode,
  FaComments,
  FaUserTie,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";

export default function Placement() {
  const stats = [
    { value: "95%", label: "Placement Rate" },
    { value: "250+", label: "Job Offers" },
    { value: "50+", label: "Recruiters" },
    { value: "12 LPA", label: "Highest Package" },
  ];

  const programs = [
    {
      icon: <FaCode />,
      title: "Coding Practice",
    },
    {
      icon: <FaComments />,
      title: "Soft Skills",
    },
    {
      icon: <FaUserTie />,
      title: "Mock Interviews",
    },
    {
      icon: <FaLaptopCode />,
      title: "Technical Training",
    },
  ];

  return (
    <div className="bg-white overflow-hidden">

      {/* Hero */}
      <section className="bg-gradient-to-r from-rose-900 via-rose-800 to-rose-700 md:py-24">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white">
            Training & Placement Cell
          </h1>

          <p className="mt-6 text-lg md:text-xl text-rose-100 max-w-3xl mx-auto">
            Transforming students into industry-ready professionals through
            training, mentoring and career opportunities.
          </p>
        </div>
      </section>

      {/* Recruiters */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5">

          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-[3px] bg-rose-500"></div>

              <span className="text-rose-500 font-semibold tracking-[4px] uppercase">
                Top Recruiters
              </span>

              <div className="w-16 h-[3px] bg-rose-500"></div>
            </div>

            <h2 className="mt-6 text-4xl md:text-6xl font-bold text-slate-900">
              Our Students Are Hired By
            </h2>

            <p className="mt-6 text-gray-500 text-lg max-w-3xl mx-auto">
              Leading companies trust our talent and recruit our students.
            </p>
          </div>

          <div className="hidden md:block rounded-[30px] overflow-hidden shadow-2xl border border-rose-100">
            <img
              src={`${import.meta.env.BASE_URL}/images/recruiters.jpg`}
              alt="Recruiters"
              className="w-full hover:scale-105 transition duration-700"
            />
          </div>

          <div className="md:hidden overflow-x-auto rounded-[20px]">
            <img
              src={`${import.meta.env.BASE_URL}/images/recruiters.jpg`}
              alt="Recruiters"
              className="max-w-none w-[1200px]"
            />
          </div>
        </div>
      </section>

      {/* Placement Training */}
      <section className="py-24 bg-rose-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Placement Training
            </h2>

            <div className="w-24 h-1 bg-rose-500 mx-auto mt-5 rounded-full" />
          </div>

          <div className="bg-white rounded-[30px] p-8 shadow-xl">
            <img
              src={`${import.meta.env.BASE_URL}/images/placement-cycle.png`}
              alt="Placement Training"
              className="w-full max-w-3xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Placement Journey */}
      <section className="py-24 bg-rose-50">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
            Placement Journey
          </h2>

          <div className="relative">
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-rose-500"></div>

            <div className="grid lg:grid-cols-5 gap-10">
              {[
                "Foundation Skills",
                "Technical Training",
                "Assessment",
                "Interview",
                "Placement",
              ].map((step, index) => (
                <div
                  key={index}
                  className="text-center relative"
                >
                  <div className="w-24 h-24 mx-auto rounded-full bg-rose-600 text-white flex items-center justify-center text-2xl font-bold border-4 border-white shadow-xl">
                    {index + 1}
                  </div>

                  <h3 className="mt-6 font-bold text-lg">
                    {step}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Training Programs
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="
                  bg-white
                  rounded-3xl
                  shadow-xl
                  border
                  border-rose-100
                  p-8
                  text-center
                "
              >
                <div className="text-5xl text-rose-600 mb-5">
                  {program.icon}
                </div>

                <h3 className="font-bold text-xl">
                  {program.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-14">
            Placement Success Tips
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Practice Aptitude Daily",
              "Improve Coding Skills",
              "Build Strong Resume",
              "Attend Mock Interviews",
            ].map((tip, index) => (
              <div
                key={index}
                className="
                  bg-gradient-to-r
                  from-rose-600
                  to-rose-500
                  text-white
                  rounded-3xl
                  p-8
                  text-center
                "
              >
                <div className="text-4xl font-black mb-4">
                  0{index + 1}
                </div>

                <h3 className="font-semibold text-lg">
                  {tip}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-rose-900 via-rose-800 to-rose-700">
        <div className="max-w-5xl mx-auto px-5 text-center">
          <FaRocket className="text-6xl text-white mx-auto mb-6" />

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Building Careers. Creating Futures.
          </h2>

          <p className="mt-6 text-lg text-rose-100">
            Our Training & Placement Cell continuously works towards
            enhancing employability skills and providing excellent career
            opportunities for students.
          </p>
        </div>
      </section>

    </div>
  );
}
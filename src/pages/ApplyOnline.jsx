import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaGraduationCap,
  FaPhoneAlt,
  FaEnvelope,
  FaUniversity,
} from "react-icons/fa";

const courses = [
  "Artificial Intelligence (AI) and Data Science",
  "Artificial Intelligence and Machine Learning",
  "Computer Science and Engineering",
  "Electrical and Electronics Engineering",
  "Electronics and Communication Engineering",
  "Information Technology",
];

export default function ApplyOnline() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Application Submitted Successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to submit application");
      });
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-rose-900 via-rose-800 to-rose-700 text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
          Apply Online
        </h1>

        <p className="mt-4 text-rose-100 text-base md:text-lg">
          Admissions Open 2026-2027
        </p>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Image */}
            <div className="w-full overflow-hidden rounded-[30px] shadow-2xl">
            <img
              src={`${import.meta.env.BASE_URL}/images/admission.png`}
              alt="Admission"
              className="
                block
                w-full
                max-w-full
                h-auto
              "
            />
          </div>

            {/* Content */}
            <div data-aos="fade-left">
              <FaGraduationCap className="text-5xl md:text-6xl text-rose-400 mb-6" />

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Join MASS Engineering College
              </h2>

              <p className="mt-6 text-gray-600 leading-7 md:leading-8 text-base md:text-lg">
                MASS Engineering College provides industry-oriented education,
                modern laboratories, highly qualified faculty and excellent
                placement opportunities.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <FaUniversity className="text-rose-600" />
                  Anna University Affiliated
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <FaGraduationCap className="text-rose-600" />
                  6 UG Engineering Programmes
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-5">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-14">
            Courses Offered
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="
                  bg-white
                  border
                  border-rose-100
                  rounded-3xl
                  p-6 md:p-8
                  shadow-lg
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all
                  duration-200
                "
              >
                <FaGraduationCap className="text-4xl text-rose-600 mb-5" />

                <h3 className="font-bold text-lg md:text-xl text-slate-900 leading-relaxed">
                  {course}
                </h3>

                <p className="mt-3 text-gray-600">
                  Affiliated to Anna University, Chennai
                </p>

                <div className="mt-4 inline-block bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium">
                  Intake: 60 Students
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="pb-20 md:pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-5">
          <div className="bg-white rounded-[30px] border border-rose-100 shadow-2xl p-6 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              Online Application Form
            </h2>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:border-rose-500"
              />

              <input
                type="date"
                name="dob"
                required
                className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:border-rose-500"
              />

              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                required
                className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:border-rose-500"
              />

              <select
                name="course"
                required
                className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:border-rose-500"
              >
                <option value="">Select Course</option>
                <option>Artificial Intelligence & Data Science</option>
                <option>Artificial Intelligence & Machine Learning</option>
                <option>Computer Science & Engineering</option>
                <option>Information Technology</option>
                <option>Electronics & Communication Engineering</option>
                <option>Electrical & Electronics Engineering</option>
              </select>

              <textarea
                name="address"
                rows="3"
                placeholder="Address"
                required
                className="
                  border border-gray-300
                  rounded-xl
                  p-4
                  md:col-span-2
                  focus:outline-none
                  focus:border-rose-500
                "
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Additional Message"
                className="
                  border border-gray-300
                  rounded-xl
                  p-4
                  md:col-span-2
                  focus:outline-none
                  focus:border-rose-500
                "
              />

              <button
                type="submit"
                className="
                  md:col-span-2
                  bg-rose-600
                  hover:bg-rose-700
                  text-white
                  py-4
                  rounded-xl
                  font-semibold
                  transition-all
                  duration-200
                "
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-rose-600 py-14 md:py-16 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Need Admission Assistance?
          </h2>

          <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
            <div className="flex items-center gap-3 text-lg">
              <FaPhoneAlt />
              +91 94880 12299
            </div>

            <div className="flex items-center gap-3 text-lg break-all">
              <FaEnvelope />
              mass@masscollege.in
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
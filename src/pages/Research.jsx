import React from "react";
import {
  FaFlask,
  FaLightbulb,
  FaBookOpen,
  FaRocket,
  FaGlobe,
  FaAward,
} from "react-icons/fa";

export default function Research() {
  const researchAreas = [
    "Artificial Intelligence & Machine Learning",
    "Data Science & Analytics",
    "Cloud Computing",
    "Cyber Security",
    "Internet of Things (IoT)",
    "Renewable Energy",
  ];

  const objectives = [
    "Promote Research Culture",
    "Encourage Innovation",
    "Support Publications",
    "Industry Collaboration",
    "Patent Development",
    "Interdisciplinary Research",
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-rose-900 via-rose-800 to-rose-700 py-24 ">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Research & Development Cell
          </h1>

          <p className="mt-6 text-lg md:text-xl text-rose-100 max-w-3xl mx-auto">
            Fostering innovation, creativity and research excellence for
            technological advancement and societal development.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={`${import.meta.env.BASE_URL}/images/research.jpg`}
                alt="Research"
                className="w-full rounded-[30px] shadow-2xl"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Research Excellence
              </h2>

              <p className="text-gray-600 leading-8 text-justify">
                The Research and Development Cell serves as a platform for
                promoting innovative thinking, scientific inquiry and
                technological advancement among faculty members and students.
                The institution encourages interdisciplinary research,
                project development, publication activities and collaboration
                with industries and academic organizations.
              </p>

              <p className="text-gray-600 leading-8 text-justify mt-6">
                Through continuous encouragement and support, the institution
                strives to create an ecosystem that nurtures creativity,
                entrepreneurship and sustainable innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Objectives */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Research Objectives
            </h2>

            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Our Research & Development Cell focuses on fostering innovation,
              scientific inquiry and technological advancement through
              structured research initiatives.
            </p>
          </div>

          <div className="relative">
            {/* Center Line */}
            <div
              className="
                hidden md:block
                absolute
                left-1/2
                top-0
                bottom-0
                w-1
                bg-gradient-to-b
                from-rose-600
                via-rose-400
                to-rose-600
                -translate-x-1/2
              "
            />

            {[
              {
                title: "Promote Research Culture",
                desc: "Encourage faculty and students to actively engage in research activities and knowledge creation.",
              },
              {
                title: "Encourage Innovation",
                desc: "Support innovative ideas and transform them into practical solutions and technologies.",
              },
              {
                title: "Industry Collaboration",
                desc: "Strengthen partnerships with industries for sponsored projects and consultancy activities.",
              },
              {
                title: "Quality Publications",
                desc: "Promote publication of research findings in reputed journals and conferences.",
              },
              {
                title: "Patent Development",
                desc: "Encourage intellectual property creation through patents and innovative products.",
              },
              {
                title: "Global Impact",
                desc: "Contribute to technological advancement and sustainable societal development.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`
                  relative flex items-center mb-12
                  ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}
                `}
              >
                {/* Dot */}
                <div
                  className="
                    hidden md:flex
                    absolute
                    left-1/2
                    -translate-x-1/2
                    w-6
                    h-6
                    rounded-full
                    bg-rose-600
                    border-4
                    border-white
                    shadow-lg
                    z-10
                  "
                />

                {/* Card */}
                <div
                  className="
                    w-full
                    md:w-[45%]
                    bg-white
                    border
                    border-rose-100
                    rounded-3xl
                    p-6
                    shadow-xl
                    hover:-translate-y-1
                    hover:shadow-2xl
                    transition-all
                    duration-200
                  "
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div
                      className="
                        w-12
                        h-12
                        rounded-full
                        bg-rose-100
                        text-rose-600
                        font-bold
                        flex
                        items-center
                        justify-center
                      "
                    >
                      {index + 1}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-7">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Workflow */}
      <section className="py-24 bg-gradient-to-b from-rose-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Research Workflow
            </h2>

            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Our research activities follow a systematic process from idea
              generation to innovation and publication.
            </p>
          </div>

          <div className="relative">
            {/* Full Width Desktop Line */}
            <div
              className="
                hidden lg:block
                absolute
                top-12
                left-0
                right-0
                h-1
                bg-gradient-to-r
                from-rose-500
                via-rose-400
                to-rose-500
                rounded-full
              "
            />

            <div className="grid lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
              {[
                {
                  icon: "💡",
                  title: "Idea",
                  desc: "Generate innovative concepts and identify research opportunities.",
                },
                {
                  icon: "📚",
                  title: "Research",
                  desc: "Perform literature review and detailed investigation.",
                },
                {
                  icon: "⚙️",
                  title: "Development",
                  desc: "Design, develop and implement innovative solutions.",
                },
                {
                  icon: "🧪",
                  title: "Testing",
                  desc: "Evaluate, validate and improve the developed solution.",
                },
                {
                  icon: "🚀",
                  title: "Publication",
                  desc: "Publish outcomes and transform research into impact.",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center"
                >
                  {/* Mobile Vertical Line */}
                  {index !== 0 && (
                    <div
                      className="
                        lg:hidden
                        absolute
                        -top-12
                        w-1
                        h-12
                        bg-rose-400
                      "
                    />
                  )}

                  {/* Circle */}
                  <div
                    className="
                      w-24
                      h-24
                      rounded-full
                      bg-gradient-to-r
                      from-rose-600
                      to-rose-500
                      border-4
                      border-white
                      shadow-2xl
                      flex
                      items-center
                      justify-center
                      text-4xl
                    "
                  >
                    {step.icon}
                  </div>

                  {/* Step Number */}
                  <div
                    className="
                      absolute
                      top-16
                      right-8
                      w-8
                      h-8
                      rounded-full
                      bg-white
                      text-rose-600
                      font-bold
                      flex
                      items-center
                      justify-center
                      shadow-lg
                    "
                  >
                    {index + 1}
                  </div>

                  {/* Card */}
                  <div
                    className="
                      mt-8
                      bg-white
                      border
                      border-rose-100
                      rounded-3xl
                      p-6
                      shadow-xl
                      text-center
                      hover:-translate-y-2
                      hover:shadow-2xl
                      transition-all
                      duration-200
                      w-full
                    "
                  >
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-6">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* End-to-End Arrow */}
            <div
              className="
                hidden lg:flex
                absolute
                top-8
                right-0
                text-rose-600
                text-5xl
                font-bold
              "
            >
              ➜
            </div>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-20 bg-gradient-to-r from-rose-900 via-rose-800 to-rose-700">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center text-white">
            <FaRocket className="text-6xl mx-auto mb-6" />

            <h2 className="text-4xl font-bold mb-8">
              Future Research Goals
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <FaAward className="text-4xl mx-auto mb-3" />
                <p>Increase Research Publications</p>
              </div>

              <div>
                <FaGlobe className="text-4xl mx-auto mb-3" />
                <p>International Collaborations</p>
              </div>

              <div>
                <FaLightbulb className="text-4xl mx-auto mb-3" />
                <p>Innovation & Patent Development</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
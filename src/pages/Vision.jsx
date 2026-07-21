import {
  FaLightbulb,
  FaHandshake,
  FaGraduationCap,
  FaUsers,
  FaMedal,
  FaShieldAlt
} from "react-icons/fa";

export default function VisionMission() {
  const values = [
    { title: "Innovation", icon: <FaLightbulb /> },
    { title: "Integrity", icon: <FaShieldAlt /> },
    { title: "Excellence", icon: <FaMedal /> },
    { title: "Leadership", icon: <FaUsers /> },
    { title: "Teamwork", icon: <FaHandshake /> },
    { title: "Learning", icon: <FaGraduationCap /> }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-28 bg-gradient-to-r from-rose-900 via-rose-800 to-rose-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="max-w-7xl mx-auto px-5 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Vision & Mission
          </h1>

          <p className="mt-6 text-xl text-rose-100">
            Empowering Future Engineers Through Excellence
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <div className="h-[350px] md:h-[450px] overflow-hidden rounded-[30px] shadow-xl">
              <img
                src={`${import.meta.env.BASE_URL}/images/vision.jpg`}
                alt="Vision"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </div>

          <div data-aos="fade-left">
            <span className="px-5 py-2 rounded-full bg-rose-100 text-rose-600">
              Our Vision
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Our Vision
            </h2>

            <p className="mt-6 text-gray-600 leading-9 text-lg text-justify">
              To nurture students through quality education, strong values,
              and professional ethics; to inspire innovation, critical
              thinking, and problem-solving skills that address societal
              challenges through engineering; to encourage entrepreneurship
              and start-up initiatives; and to continuously enhance their
              academic, technical, and leadership competencies, enabling
              them to become responsible professionals and lifelong
              learners.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <span className="px-5 py-2 rounded-full bg-blue-100 text-blue-600">
              Our Mission
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Our Mission
            </h2>

            <p className="mt-6 text-gray-600 leading-9 text-lg text-justify">
              To provide accessible, affordable, and world-class education;
              advance innovative research; and render meaningful public
              service that creates knowledge, enriches lives, and
              contributes to the sustainable development and well-being of
              individuals, society, the nation, and the global community.
            </p>
          </div>

          <div data-aos="fade-left">
            <div className="h-[350px] md:h-[450px] overflow-hidden rounded-[30px] shadow-xl">
              <img
                src={`${import.meta.env.BASE_URL}/images/mission.jpg`}
                alt="Mission"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <span className="px-5 py-2 rounded-full bg-rose-100 text-rose-600">
              Core Values
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold">
              What We Believe In
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="bg-white rounded-[25px] p-8 shadow-lg hover:-translate-y-2 hover:shadow-xl transition duration-200"
              >
                <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-500 flex items-center justify-center text-3xl">
                  {value.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {value.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  We nurture students with strong values and commitment
                  towards excellence.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
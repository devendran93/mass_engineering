import { Link } from "react-router-dom";

export default function Courses() {
  const courses = [
    {
      title: "Artificial Intelligence & Data Science",
      seats: "60 Seats",
      image: `${import.meta.env.BASE_URL}/images/courses/aids.jpg`,
      link: "/ai-ds",
    },
    {
      title: "Artificial Intelligence & Machine Learning",
      seats: "60 Seats",
      image: `${import.meta.env.BASE_URL}/images/courses/aiml.jpg`,
      link: "/ai-ml",
    },
    {
      title: "Computer Science & Engineering",
      seats: "60 Seats",
      image: `${import.meta.env.BASE_URL}/images/courses/cse.jpg`,
      link: "/cse",
    },
    {
      title: "Electrical & Electronics Engineering",
      seats: "60 Seats",
      image: `${import.meta.env.BASE_URL}/images/courses/eee.jpg`,
      link: "/eee",
    },
    {
      title: "Electronics & Communication Engineering",
      seats: "60 Seats",
      image: `${import.meta.env.BASE_URL}/images/courses/ece.jpg`,
      link: "/ece",
    },
    {
      title: "Information Technology",
      seats: "60 Seats",
      image: `${import.meta.env.BASE_URL}/images/courses/it.jpg`,
      link: "/it",
    },
  ];

  return (
    <section
      className="
        relative
        py-28
        overflow-hidden
        bg-gradient-to-b
        from-slate-50
        to-white
      "
    >
      {/* Background Blobs */}
      <div
        className="
          absolute
          top-20
          left-0
          w-72
          h-72
          bg-rose-300/20
          rounded-full
          blur-3xl
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          w-96
          h-96
          bg-blue-300/20
          rounded-full
          blur-3xl
        "
      />

      <div
        className="
          max-w-7xl
          mx-auto
          px-5
          relative
          z-10
        "
      >
        {/* Heading */}
        <div className="text-center mb-20">
          <span
            className="
              px-5
              py-2
              rounded-full
              bg-rose-100
              text-rose-600
            "
          >
            Programs
          </span>

          <h2
            className="
              mt-6
              text-4xl
              md:text-5xl
              font-bold
              text-slate-900
            "
          >
            Engineering Courses
          </h2>

          <p
            className="
              mt-4
              text-gray-600
            "
          >
            Future-ready programs for innovators
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
          "
        >
          {courses.map((course, index) => (
            <div
              key={index}
              className="
                relative
                rounded-[35px]
                overflow-hidden
                bg-white
                border
                border-slate-200
                shadow-lg
              "
            >
              {/* Image */}
              <div className="h-[260px] overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <span
                  className="
                    inline-block
                    px-4
                    py-2
                    rounded-full
                    bg-rose-500
                    text-white
                    text-sm
                  "
                >
                  {course.seats}
                </span>

                <h3
                  className="
                    mt-6
                    text-2xl
                    font-bold
                    text-slate-900
                  "
                >
                  {course.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-gray-600
                    leading-7
                  "
                >
                  Industry-focused curriculum, advanced labs and
                  career-oriented education.
                </p>

                <div
                  className="
                    mt-8
                    flex
                    justify-between
                    items-center
                  "
                >
                  <span
                    className="
                      text-gray-500
                      font-medium
                    "
                  >
                    Undergraduate
                  </span>
                  <Link
                    to={course.link}
                    className="
                      w-12
                      h-12
                      rounded-full
                      bg-slate-100
                      flex
                      items-center
                      justify-center
                      hover:bg-rose-500
                      hover:text-white
                      transition
                    "
                  >
                    →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
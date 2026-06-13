import {
  FaUserGraduate,
  FaBookOpen,
  FaBriefcase,
  FaBuilding
} from "react-icons/fa";

import { Link } from "react-router-dom";

export default function QuickInfo() {

  const cards = [

    {
      title: "Admissions",
      desc: "Apply for 2025 admissions",
      icon: <FaUserGraduate />,
      link: "/apply-online"
    },

    {
      title: "Courses",
      desc: "Explore academic programs",
      icon: <FaBookOpen />,
      link: "/apply-online"
    },

    {
      title: "Placements",
      desc: "Career & placement support",
      icon: <FaBriefcase />,
      link: "/placement"
    },

    {
      title: "Vision & Mission",
      desc: "Empowering Future Engineers Through Excellence",
      icon: <FaBuilding />,
      link: "/vision"
    }

  ];


  return (

    <section className="relative -mt-20 z-20 px-5">

      <div className="max-w-7xl mx-auto">

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
        ">



          {cards.map((card,index)=>(

            <Link

              key={index}

              to={card.link}

              className="
                relative

                bg-white/70
                backdrop-blur-xl

                border
                border-white/40

                rounded-3xl

                p-8

                shadow-lg

                overflow-hidden

                hover:-translate-y-2
                hover:shadow-2xl

                transition-all
                duration-500

                group
              "
            >



              {/* Glow */}

              <div className="
                absolute
                -top-10
                -right-10

                w-28
                h-28

                bg-rose-100

                rounded-full

                blur-3xl
              "/>





              {/* Icon */}

              <div className="
                w-16
                h-16

                rounded-2xl

                bg-rose-50

                flex
                items-center
                justify-center

                text-rose-500

                text-2xl

                mb-6

                group-hover:scale-110

                transition
              ">

                {card.icon}

              </div>





              {/* Title */}

              <h3 className="
                text-xl
                font-semibold

                text-gray-900
              ">

                {card.title}

              </h3>





              {/* Description */}

              <p className="
                mt-3

                text-gray-600

                leading-7

                text-sm
              ">

                {card.desc}

              </p>





              {/* Link */}

              <div className="
                mt-6

                text-sm

                text-rose-500

                font-medium
              ">

                Learn More →

              </div>




              {/* Hover line */}

              <div className="
                absolute

                bottom-0
                left-0

                h-[3px]
                w-0

                bg-rose-500

                group-hover:w-full

                transition-all
                duration-500
              "/>


            </Link>

          ))}



        </div>

      </div>

    </section>

  );

}
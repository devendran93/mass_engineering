import {
  FaBullseye,
  FaEye,
  FaGraduationCap
} from "react-icons/fa";

export default function About() {

  return (

    <section className="
      relative
      py-24
      overflow-hidden

      bg-gradient-to-b
      from-slate-50
      via-rose-50/40
      to-white
    ">


      {/* Animated blobs */}

      <div className="absolute top-10 left-10 w-64 h-64 bg-rose-200/30 rounded-full blur-3xl animate-blob"/>

      <div className="absolute bottom-0 right-10 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-blob animation-delay-2000"/>

      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-100/20 rounded-full blur-3xl animate-blob animation-delay-4000"/>






      <div className="
        max-w-7xl
        mx-auto

        px-5

        grid
        lg:grid-cols-2

        gap-16

        items-center
      ">



        {/* Left */}

        <div
          data-aos="fade-right"
          className="relative"
        >

          <img
            src={`${import.meta.env.BASE_URL}/images/slider/slider1.jpg`}
            alt=""
            className="
              rounded-[32px]

              shadow-2xl

              w-full

              h-[320px]
              md:h-[520px]

              object-cover
            "
          />




          {/* Floating card */}

          <div className="
            absolute

            -bottom-8
            left-5

            bg-white/80

            backdrop-blur-xl

            p-6

            rounded-3xl

            shadow-xl

            border
            border-white/40

            animate-float
          ">


            <div className="flex items-center gap-4">


              <div className="
                w-14
                h-14

                bg-rose-100

                rounded-full

                flex
                items-center
                justify-center

                text-rose-500
              ">

                <FaGraduationCap/>

              </div>



              <div>

                <h3 className="
                  text-2xl
                  font-bold
                ">

                  25+

                </h3>


                <p className="text-gray-500">

                  Years Excellence

                </p>

              </div>


            </div>

          </div>


        </div>







        {/* Right */}

        <div data-aos="fade-left">


          <span className="
            px-5
            py-2

            rounded-full

            bg-rose-100

            text-rose-600

            font-medium
          ">

            About College

          </span>




          <h2 className="
            mt-8

            text-4xl
            md:text-5xl

            font-bold

            leading-tight

            text-slate-900
          ">

            Building Future

            <span className="text-rose-500">

              {" "}Innovators

            </span>

            Through

            <span className="text-blue-600">

              {" "}Quality Education

            </span>

          </h2>




          <p className="
            mt-6

            text-gray-600

            leading-8

            text-lg
          ">

            MASS College empowers students
            through innovation,
            research,
            industry collaboration
            and world-class education.

          </p>






          {/* Vision Mission */}

          <div className="
            grid
            md:grid-cols-2

            gap-6

            mt-10
          ">



            <div className="
              bg-white/60

              backdrop-blur-lg

              border
              border-rose-100

              p-6

              rounded-3xl

              shadow-lg

              hover:-translate-y-2

              transition
            ">

              <FaEye className="
                text-3xl

                text-rose-500
              "/>



              <h3 className="
                mt-4

                text-xl

                font-bold
              ">

                Vision

              </h3>



              <p className="
                mt-3

                text-gray-600
              ">

                Become a leading institution
                in engineering education.

              </p>

            </div>







            <div className="
              bg-white/60

              backdrop-blur-lg

              border
              border-blue-100

              p-6

              rounded-3xl

              shadow-lg

              hover:-translate-y-2

              transition
            ">

              <FaBullseye className="
                text-3xl

                text-blue-500
              "/>



              <h3 className="
                mt-4

                text-xl

                font-bold
              ">

                Mission

              </h3>



              <p className="
                mt-3

                text-gray-600
              ">

                Deliver innovation,
                ethics and career excellence.

              </p>

            </div>



          </div>


        </div>


      </div>

    </section>

  );

}
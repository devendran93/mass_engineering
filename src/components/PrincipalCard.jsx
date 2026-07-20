import { FaQuoteLeft } from "react-icons/fa";

export default function Principal() {

  return (

    <section className="relative py-28 bg-slate-50 overflow-hidden">

      <div className="absolute top-20 right-0 w-80 h-80 bg-rose-100 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-5">


        {/* Heading */}

        <div data-aos="fade-up" className="text-center mb-20">

          <span className="px-5 py-2 rounded-full bg-rose-100 text-rose-600">

            Leadership

          </span>


          <h2 className="mt-6 text-4xl md:text-5xl font-bold">

            Message From Principal

          </h2>

        </div>




        <div className="grid lg:grid-cols-2 gap-16 items-center">


          {/* Left */}

          <div data-aos="fade-right" className="relative">

            <img
              src={`${import.meta.env.BASE_URL}/images/principal.jpg`}
              alt="Principal"
              className="w-full max-w-md mx-auto rounded-[40px] shadow-2xl"
            />

          </div>


          {/* Right */}

          <div data-aos="fade-left">

            <FaQuoteLeft className="text-6xl text-rose-200" />


            <h3 className="mt-6 text-3xl md:text-4xl font-bold leading-tight">

              Empowering students through innovation,
              discipline and quality education.

            </h3>



            <p className="mt-8 text-gray-600 leading-9 text-lg">

              Our institution nurtures future engineers with knowledge,
              ethics and practical skills creating leaders for tomorrow.

            </p>




            <div className="mt-10 w-40 h-[2px] bg-rose-500"></div>




            <h4 className="mt-8 text-2xl font-bold">

              Dr. G. Saravanakumar, M.E., Ph.D., M.B.A.,

            </h4>


            <p className="mt-2 text-gray-500">

              Principal

            </p>

          </div>


        </div>


      </div>

    </section>

  );

}
export default function Recruiters() {

  return (

    <section className="py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-5">


        {/* Heading */}

        <div data-aos="fade-up" className="text-center mb-16">

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



          <div className="w-20 h-1 bg-rose-500 mx-auto mt-6 rounded-full"></div>



          <p className="mt-6 text-gray-500 text-lg max-w-3xl mx-auto">

            Leading companies trust our talent. Here are some of our top recruiters.

          </p>

        </div> 

        {/* Desktop */}

        <div data-aos="zoom-in" className="hidden md:block">

          <img
            src={`${import.meta.env.BASE_URL}/images/recruiters.jpg`}
            alt="Top Recruiters"
            className="w-full rounded-[30px] shadow-lg"
          />

        </div> 


        {/* Mobile */}

        <div className="md:hidden overflow-hidden rounded-[20px]">

          <div className="mobile-recruiter-slider">

            <img
              src={`${import.meta.env.BASE_URL}/images/recruiters.jpg`}
              alt="Top Recruiters"
              className="max-w-none h-auto"
            />

          </div>

        </div>


      </div>

    </section>

  );

}
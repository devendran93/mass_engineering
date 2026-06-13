import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function Slider() {

  const slides = [

    {
      image: `${import.meta.env.BASE_URL}/images/slider/slider1.jpg`,
      title: "Admissions Open 2027",
      subtitle: "Engineering Excellence For Future Innovators",
      desc: "Transform your passion into innovation through world-class education."
    },


    {
      image: `${import.meta.env.BASE_URL}/images/slider/slider1.jpg`,
      title: "Research & Innovation",
      subtitle: "Build Skills For Tomorrow",
      desc: "Industry-ready learning with advanced laboratories."
    },


    {
      image: `${import.meta.env.BASE_URL}/images/slider/slider1.jpg`,
      title: "Placement Support",
      subtitle: "Shape Your Career",
      desc: "Top recruiters visit every year."
    }

  ];


  return (

    <section>

      <Swiper

        modules={[
          Autoplay,
          Pagination,
          Navigation,
          EffectFade
        ]}

        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}

        pagination={{
          clickable: true
        }}

        navigation={true}

        effect="fade"

        fadeEffect={{
          crossFade: true
        }}

        speed={1000}

        loop={true}

        className="h-[70vh] md:h-[90vh]"
      >



        {slides.map((slide,index)=>(

          <SwiperSlide key={index}>


            <div className="relative h-full overflow-hidden">


              {/* Background */}

              <img
                src={slide.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />


              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/10"/>




              {/* Content */}

              <div className="relative z-10 h-full flex items-center">

                <div className="max-w-7xl mx-auto px-6 w-full">

                  <div className="max-w-3xl animate-fadeIn">


                    <span className="bg-rose-500 text-white px-5 py-2 rounded-full text-sm">

                      {slide.title}

                    </span>




                    <h1 className="mt-8 text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">

                      {slide.subtitle}

                    </h1>




                    <p className="mt-6 text-gray-200 text-base md:text-lg leading-8 max-w-2xl">

                      {slide.desc}

                    </p>





                    {/* Buttons */}

                    <div className="flex flex-wrap gap-5 mt-10">


                      <Link
                        to="/apply-online"
                        className="bg-rose-500 hover:bg-rose-600 px-8 py-4 rounded-full text-white flex items-center gap-2 transition"
                      >

                        Apply Now

                        <FaArrowRight/>

                      </Link>




                      <Link
                        to="/courses"
                        className="border border-white px-8 py-4 rounded-full text-white hover:bg-white hover:text-black transition"
                      >

                        Explore Courses

                      </Link>


                    </div>


                  </div>

                </div>

              </div>


            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </section>

  );

}
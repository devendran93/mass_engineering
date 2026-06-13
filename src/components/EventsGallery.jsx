import { useEffect, useState } from "react";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function EventsGallery() {

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch("https://docs.google.com/spreadsheets/d/1Kj2Ae9CSQwourm1plFhE1NwzF7DUJ7wK-EHNHMV2Vfs/edit?usp=sharing")
      .then(res => res.json())
      .then(data => {

        setEvents(data.slice(0, 3));
        setLoading(false);

      })
      .catch(error => {

        console.error(error);
        setLoading(false);

      });

  }, []);



  if (loading) {

    return (

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-5 text-center">

          Loading Events...

        </div>

      </section>

    );

  }



  if (!events.length) return null;



  const featured = events[0];
  const others = events.slice(1);



  return (

    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-5">


        {/* Heading */}

        <div data-aos="fade-up" className="text-center mb-16">

          <span className="px-5 py-2 rounded-full bg-rose-100 text-rose-600">

            Events & Activities

          </span>


          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">

            Campus Highlights

          </h2>


          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">

            Explore the latest events, workshops, symposiums and celebrations happening on campus.

          </p>

        </div> 
        <div className="grid lg:grid-cols-3 gap-8">


          {/* Featured Event */}

          <div
            data-aos="fade-right"
            className="lg:col-span-2 group bg-white rounded-[30px] overflow-hidden shadow-lg"
          >

            <div className="overflow-hidden h-[400px]">

              <img
                src={featured.images}
                alt={featured.eventName}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />

            </div>



            <div className="p-8">

              <div className="flex flex-wrap gap-4 text-sm text-gray-500">

                <div className="flex items-center gap-2">

                  <CalendarDays size={18} />

                  {featured.eventDate}

                </div>


                <div className="flex items-center gap-2">

                  <MapPin size={18} />

                  {featured.venue}

                </div>

              </div>



              <h3 className="mt-5 text-3xl font-bold">

                {featured.eventName}

              </h3>



              <p className="mt-4 text-gray-600 line-clamp-3">

                {featured.content}

              </p>

            </div>

          </div> 

          {/* Side Events */}

          <div className="space-y-6">

            {others.map((event, index) => (

              <div
                key={index}
                data-aos="fade-left"
                data-aos-delay={index * 100}
                className="group bg-white rounded-[25px] overflow-hidden shadow-md hover:shadow-xl transition"
              >

                <div className="h-40 overflow-hidden">

                  <img
                    src={event.images}
                    alt={event.eventName}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />

                </div>



                <div className="p-5">

                  <p className="text-sm text-rose-500">

                    {event.eventDate}

                  </p>



                  <h4 className="mt-2 font-bold text-lg line-clamp-2">

                    {event.eventName}

                  </h4>

                </div>

              </div>

            ))}

          </div>


        </div> 

        {/* Button */}

        <div className="text-center mt-14">

          <Link
            to="/events"
            className="inline-flex items-center gap-2 px-8 py-4 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition"
          >

            View All Events

            <ArrowRight size={18} />

          </Link>

        </div>


      </div>

    </section>

  );

}
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <>
      {/* ================= Desktop ================= */}
      <div className="hidden md:flex justify-between items-center px-8 py-3 bg-white border-b shadow-sm">

        {/* Clickable Banner → Home */}
        <Link to="/">
          <img
            src={`${import.meta.env.BASE_URL}/images/banner.jpg`}
            alt="Banner"
            className="h-20 w-auto hover:scale-105 transition"
          />
        </Link>


        {/* Right Side */}
        <div className="flex items-center gap-8">


          {/* Location */}
          <a
            href="https://maps.google.com/?q=MASS+College+Campus+Kumbakonam"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-red-600 transition"
          >

            <FaMapMarkerAlt className="text-red-600 text-xl"/>

            <div>

              <h4 className="font-semibold text-sm">
                MASS Engineering College
              </h4>

              <p className="text-xs text-gray-600">
                Chennai Salai, Kallapuliyur Village, Kumbakonam, Tamil Nadu – 612 501
              </p>

            </div>

          </a>



          {/* Email */}
          <a
            href="mailto:mass@masscollege.in"
            className="flex items-center gap-2 hover:text-red-600 transition"
          >

            <FaEnvelope className="text-red-600 text-xl"/>

            <div>

              <h4 className="font-semibold text-sm">
                mass@masscollege.in
              </h4>

              <p className="text-xs text-gray-600">
                Admission Enquiry
              </p>

            </div>

          </a>



          {/* Social Icons */}
          <div className="flex gap-3">

            <a
              href="#"
              className="bg-blue-600 text-white p-2 rounded-full hover:scale-110 transition"
            >
              <FaFacebookF/>
            </a>


            <a
              href="#"
              className="bg-pink-600 text-white p-2 rounded-full hover:scale-110 transition"
            >
              <FaInstagram/>
            </a>


            <a
              href="#"
              className="bg-red-600 text-white p-2 rounded-full hover:scale-110 transition"
            >
              <FaYoutube/>
            </a>

          </div>

        </div>

      </div>




      {/* ================= Mobile ================= */}
      <div className="md:hidden bg-white p-3 shadow-sm">

        {/* Clickable Banner */}
        <Link to="/">
          <img
            src={`${import.meta.env.BASE_URL}/images/banner.jpg`}
            alt="Banner"
            className="
              w-full
              h-20
              object-cover
              rounded-lg
              shadow
            "
          />
        </Link> 


        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-4">

          <a
            href="#"
            className="bg-blue-600 p-2 rounded-full text-white"
          >
            <FaFacebookF/>
          </a>


          <a
            href="#"
            className="bg-pink-600 p-2 rounded-full text-white"
          >
            <FaInstagram/>
          </a>


          <a
            href="#"
            className="bg-red-600 p-2 rounded-full text-white"
          >
            <FaYoutube/>
          </a>

        </div>

      </div>
    </>
  );
}
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Footer() {

  return (

    <footer className="bg-slate-950 text-white overflow-hidden">

      {/* Top */}

      <div className="max-w-7xl mx-auto px-5 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">


          {/* College Info */}

          <div>

            <img
              src={`${import.meta.env.BASE_URL}/images/banner.jpg`}
              alt="Logo"
              className="h-16 mb-5"
            />

            <h3 className="text-xl font-bold">

              MASS Engineering College

            </h3>

            <p className="mt-4 text-slate-400 leading-7">

              Empowering future engineers through innovation,
              excellence and industry-focused education.

            </p>

          </div>





          {/* Quick Links */}

          <div>

            <h4 className="text-lg font-semibold mb-5">

              Quick Links

            </h4>

            <ul className="space-y-3 text-slate-400">

              <li><Link to="/">Home</Link></li>

              <li><Link to="/vision">Vision and Mission</Link></li>

              <li><Link to="/courses">Courses</Link></li>

              <li><Link to="/gallery">Gallery</Link></li>

              <li><Link to="/contact">Contact</Link></li>

            </ul>

          </div>

          {/* Courses */}

          <div>

            <h4 className="text-lg font-semibold mb-5">

              Courses

            </h4>

            <ul className="space-y-3 text-slate-400">

              <li>AI & Data Science</li>

              <li>AI & Machine Learning</li>

              <li>Computer Science</li>

              <li>ECE</li>

              <li>EEE</li>

              <li>Information Technology</li>

            </ul>

          </div>





          {/* Contact */}

          <div>

            <h4 className="text-lg font-semibold mb-5">

              Contact Us

            </h4>

            <div className="space-y-4 text-slate-400">


              <div className="flex gap-3">

                <FaMapMarkerAlt className="mt-1 text-rose-500" />

                <span>

                  Chennai Salai, Kallapuliyur Village, Kumbakonam, Tamil Nadu – 612 501

                </span>

              </div>



              <div className="flex gap-3">

                <FaPhoneAlt className="mt-1 text-rose-500" />

                <span>

                  +91 435 2400299 <br/>+91 94880 12299

                </span>

              </div>



              <div className="flex gap-3">

                <FaEnvelope className="mt-1 text-rose-500" />

                <span>

                  mass@masscollege.in

                </span>

              </div>

            </div>

          </div>


        </div>

      </div>






      {/* Social */}

      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-5 py-6 flex flex-col md:flex-row justify-between items-center gap-5">


          <p className="text-slate-400 text-center">

            © 2026 MASS College of Engineering & Technology. All Rights Reserved.

          </p>



          <div className="flex gap-4">

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-rose-500 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-rose-500 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-rose-500 transition"
            >
              <FaYoutube />
            </a>

          </div>

        </div>

      </div>

    </footer>

  );

}
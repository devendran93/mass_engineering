import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [aboutOpen, setAboutOpen] =
    useState(false);

  const [admissionOpen, setAdmissionOpen] =
    useState(false);

  const [departmentOpen, setDepartmentOpen] =
    useState(false);

  const [facilityOpen, setFacilityOpen] =
    useState(false);

  const closeAll = () => {
    setMobileOpen(false);
    setAboutOpen(false);
    setAdmissionOpen(false);
    setDepartmentOpen(false);
    setFacilityOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-gray-100 border-b-4 border-rose-400 shadow-md">

        {/* Desktop Navbar */}

        <div className="hidden md:block flex justify-center px-4 py-4">

          <ul className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 font-extrabold uppercase text-xs text-rose-900">

            <Link
              to="/"
              onClick={closeAll}
              className="text-rose-600 hover:text-rose-500"
            >
              HOME
            </Link>

            {/* ABOUT */}

            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-rose-500">
                ABOUT US
                <FaChevronDown className="text-xs group-hover:rotate-180 transition" />
              </button>

              <div className="absolute top-8 left-0 w-64 bg-gray-900 text-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500">
                <Link to="/vision" onClick={closeAll} className="block p-4 hover:bg-black hover:text-rose-400 border-b border-gray-800">
                  Vision & Mission
                </Link>

                <Link to="/principal-message" onClick={closeAll} className="block p-4 hover:bg-black hover:text-rose-400">
                  Principal's Message
                </Link>
              </div>
            </li>

            {/* ADMISSIONS */}

            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-rose-500">
                ADMISSIONS
                <FaChevronDown className="text-xs group-hover:rotate-180 transition" />
              </button>

              <div className="absolute top-8 left-0 w-64 bg-gray-900 text-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500">
                <Link to="/apply-online" onClick={closeAll} className="block p-4 hover:bg-black hover:text-rose-400 border-b border-gray-800">
                  Apply Online
                </Link>

                <Link to="/fee-structure" onClick={closeAll} className="block p-4 hover:bg-black hover:text-rose-400">
                  Fee Structure
                </Link>
              </div>
            </li>

            {/* DEPARTMENTS */}

            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-rose-500">
                DEPARTMENTS
                <FaChevronDown className="text-xs group-hover:rotate-180 transition" />
              </button>

              <div className="absolute top-8 left-0 w-64 bg-gray-900 text-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500">
                <Link to="/cse" onClick={closeAll} className="block p-4 hover:bg-black hover:text-rose-400 border-b border-gray-800">CSE</Link>
                <Link to="/ai-ds" onClick={closeAll} className="block p-4 hover:bg-black hover:text-rose-400 border-b border-gray-800">AI&DS</Link>
                <Link to="/ai-ml" onClick={closeAll} className="block p-4 hover:bg-black hover:text-rose-400 border-b border-gray-800">AI&ML</Link>
                <Link to="/it" onClick={closeAll} className="block p-4 hover:bg-black hover:text-rose-400 border-b border-gray-800">IT</Link>
                <Link to="/ece" onClick={closeAll} className="block p-4 hover:bg-black hover:text-rose-400 border-b border-gray-800">ECE</Link>
                <Link to="/eee" onClick={closeAll} className="block p-4 hover:bg-black hover:text-rose-400 border-b border-gray-800">EEE</Link>
              </div>
            </li>

            {/* FACILITIES */}

            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-rose-500">
                FACILITIES
                <FaChevronDown className="text-xs group-hover:rotate-180 transition" />
              </button>

              <div className="absolute top-8 left-0 w-64 bg-gray-900 text-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500">
                <Link to="/library" onClick={closeAll} className="block p-4 hover:bg-black hover:text-rose-400 border-b border-gray-800">
                  Library
                </Link>

                <Link to="/cafeteria" onClick={closeAll} className="block p-4 hover:bg-black hover:text-rose-400 border-b border-gray-800">
                  Cafeteria
                </Link>

                <Link to="/transport" onClick={closeAll} className="block p-4 hover:bg-black hover:text-rose-400">
                  Transport
                </Link>
              </div>
            </li>

            <Link to="/research" onClick={closeAll}>Research</Link>
            <Link to="/placement" onClick={closeAll}>Placement</Link>
            <Link to="/faculty" onClick={closeAll}>Faculty</Link>
            <Link to="/downloads" onClick={closeAll}>Downloads</Link>
            <Link to="/gallery" onClick={closeAll}>Gallery</Link>
            <Link to="/contact" onClick={closeAll}>Contact</Link>

          </ul>

        </div>


        {/* ================= Mobile ================= */}

        <div
          className="
            md:hidden
            flex
            justify-between
            items-center
            px-4 py-3

            bg-gradient-to-r
            from-blue-700
            via-purple-700
            to-indigo-700

            text-white
          "
        >            {/* Marquee */}

          <div
            className="
              flex-1
              overflow-hidden
              mr-3
            "
          >

            <div
              className="
                animate-marquee
                whitespace-nowrap
                font-medium
                text-sm
              "
            >

              🎓 Admissions Open 2025 •
              Apply Online •
              Latest Updates •

            </div>

          </div>  
          <button
            onClick={() =>
              setMobileOpen(true)
            }
          >

            <FaBars className="text-2xl"/>

          </button>

        </div>            {/* Overlay */}

        {
          mobileOpen && (

            <div
              onClick={() =>
                setMobileOpen(false)
              }
              className="
                fixed
                inset-0
                bg-black/40
                z-50
              "
            />

          )
        }            {/* ================= Sidebar ================= */}

        <div
          className={`
            fixed
            top-0
            right-0
            h-screen
            w-[80%]
            max-w-[320px]

            bg-gradient-to-b
            from-blue-700
            via-purple-700
            to-indigo-700

            text-white

            z-50

            transition-transform
            duration-200

            ${
              mobileOpen
                ? "translate-x-0"
                : "translate-x-full"
            }
          `}
        >            {/* Header */}

          <div
            className="
              flex
              justify-between
              items-center
              p-5
              border-b
              border-white/20
            "
          >

            <h2 className="
              font-bold
              text-xl
            ">

              Menu

            </h2>  
            <button
              onClick={() =>
                setMobileOpen(false)
              }
            >

              <FaTimes
                className="
                  text-2xl
                "
              />

            </button>

          </div>              {/* Mobile Menu */}

          <div
            className="
              flex
              flex-col
              gap-5
              p-5
            "
          >

            <Link to="/" onClick={closeAll}>
              HOME
            </Link>

            {/* ABOUT */}

            <button
              onClick={() =>
                setAboutOpen(!aboutOpen)
              }
              className="flex justify-between"
            >
              ABOUT US

              <FaChevronDown
                className={`transition ${
                  aboutOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {aboutOpen && (
              <div className="pl-4 flex flex-col gap-3 text-sm">
                <Link to="/vision" onClick={closeAll}>
                  Vision & Mission
                </Link>

                <Link
                  to="/principal-message"
                  onClick={closeAll}
                >
                  Principal's Message
                </Link>
              </div>
            )}

            {/* ADMISSIONS */}

            <button
              onClick={() =>
                setAdmissionOpen(!admissionOpen)
              }
              className="flex justify-between"
            >
              ADMISSIONS

              <FaChevronDown
                className={`transition ${
                  admissionOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {admissionOpen && (
              <div className="pl-4 flex flex-col gap-3 text-sm">
                <Link
                  to="/apply-online"
                  onClick={closeAll}
                >
                  Apply Online
                </Link>

                <Link
                  to="/fee-structure"
                  onClick={closeAll}
                >
                  Fee Structure
                </Link>
              </div>
            )}

            {/* DEPARTMENTS */}

            <button
              onClick={() =>
                setDepartmentOpen(!departmentOpen)
              }
              className="flex justify-between"
            >
              DEPARTMENTS

              <FaChevronDown
                className={`transition ${
                  departmentOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {departmentOpen && (
              <div className="pl-4 flex flex-col gap-3 text-sm">

                <Link to="/cse" onClick={closeAll}>
                  CSE
                </Link>

                <Link to="/ai-ds" onClick={closeAll}>
                  AI&DS
                </Link>

                <Link to="/ai-ml" onClick={closeAll}>
                  AI&ML
                </Link>

                <Link to="/it" onClick={closeAll}>
                  IT
                </Link>

                <Link to="/ece" onClick={closeAll}>
                  ECE
                </Link>

                <Link to="/eee" onClick={closeAll}>
                  EEE
                </Link>

              </div>
            )}

            {/* FACILITIES */}

            <button
              onClick={() =>
                setFacilityOpen(!facilityOpen)
              }
              className="flex justify-between"
            >
              FACILITIES

              <FaChevronDown
                className={`transition ${
                  facilityOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {facilityOpen && (
              <div className="pl-4 flex flex-col gap-3 text-sm">

                <Link to="/library" onClick={closeAll}>
                  Library
                </Link>

                <Link to="/cafeteria" onClick={closeAll}>
                  Cafeteria
                </Link>

                <Link to="/transport" onClick={closeAll}>
                  Transport
                </Link>

              </div>
            )}

            <Link to="/research" onClick={closeAll}>
              RESEARCH
            </Link>

            <Link to="/placement" onClick={closeAll}>
              PLACEMENT
            </Link>

            <Link to="/faculty" onClick={closeAll}>
              FACULTY
            </Link>

            <Link to="/downloads" onClick={closeAll}>
              DOWNLOADS
            </Link>

            <Link to="/gallery" onClick={closeAll}>
              GALLERY
            </Link>

            <Link to="/contact" onClick={closeAll}>
              CONTACT
            </Link>

          </div>

        </div>

      </nav>
    </>
  );
}
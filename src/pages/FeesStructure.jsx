import React from "react";
import { FaMoneyBillWave } from "react-icons/fa";

const feesData = [
  {
    course: "Artificial Intelligence (AI) and Data Science",
    university: "Anna University, Chennai",
    intake: 60,
  },
  {
    course: "Artificial Intelligence and Machine Learning",
    university: "Anna University, Chennai",
    intake: 60,
  },
  {
    course: "Computer Science and Engineering",
    university: "Anna University, Chennai",
    intake: 60,
  },
  {
    course: "Electrical and Electronics Engineering",
    university: "Anna University, Chennai",
    intake: 60,
  },
  {
    course: "Electronics and Communication Engineering",
    university: "Anna University, Chennai",
    intake: 60,
  },
  {
    course: "Information Technology",
    university: "Anna University, Chennai",
    intake: 60,
  },
];

export default function FeesStructure() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-rose-900 via-rose-800 to-rose-700 text-center px-4">
        <FaMoneyBillWave className="text-5xl md:text-6xl text-white mx-auto mb-5" />

        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Fees Structure
        </h1>

        <p className="mt-4 text-rose-100 text-lg">
          Undergraduate Engineering Programmes
        </p>
      </section>

      {/* Table Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-7xl mx-auto px-4">
          <div
            data-aos="fade-up"
            className="
              bg-white
              rounded-[30px]
              shadow-2xl
              border
              border-rose-100
              overflow-hidden
            "
          >
            <div className="p-6 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-10">
                MASS Engineering College
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px] border-collapse">
                  <thead>
                    <tr className="bg-rose-600 text-white">
                      <th className="p-4 text-left">S.No</th>
                      <th className="p-4 text-left">Programme</th>
                      <th className="p-4 text-left">Course</th>
                      <th className="p-4 text-left">University</th>
                      <th className="p-4 text-center">Intake</th>
                      <th className="p-4 text-center">
                        Tuition Fee
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {feesData.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b hover:bg-rose-50 transition"
                      >
                        <td className="p-4">{index + 1}</td>

                        <td className="p-4">
                          Undergraduate Engineering &
                          Technology
                        </td>

                        <td className="p-4 font-medium">
                          {item.course}
                        </td>

                        <td className="p-4">
                          {item.university}
                        </td>

                        <td className="p-4 text-center">
                          {item.intake}
                        </td>

                        <td className="p-4 text-center font-semibold text-rose-600">
                          As Per Govt Norms
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-6 text-sm text-gray-500">
                * Fee structure is subject to revision as per
                Government, AICTE and Anna University regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white border border-rose-100 rounded-[30px] shadow-xl p-6 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Important Notes
            </h3>

            <ul className="space-y-4 text-gray-600 leading-8">
              <li>
                • Tuition fee is collected as per Government
                regulations.
              </li>

              <li>
                • Hostel and Transport fees are separate.
              </li>

              <li>
                • Scholarship benefits are available for eligible
                students.
              </li>

              <li>
                • Fee payment can be made through online and offline
                modes.
              </li>

              <li>
                • Contact the college office for detailed fee
                information.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
} 
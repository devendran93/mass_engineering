import React, { useEffect, useState } from "react";

export default function StaffTable() {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL =
    "https://opensheet.elk.sh/1aY-3OqAbJzZgrP5Gi4Xa2NnjQ7l7GjShg1erz6FiAxM/staff";

  const DEFAULT_IMAGE =
    `${import.meta.env.BASE_URL}/images/staffs/default.jpg`;

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setStaff(data);
      } catch (error) {
        console.error("Error fetching staff data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStaff();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-10">
        Loading Staff Details...
      </div>
    );
  }

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Faculty Members
        </h2>

        <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-rose-700 text-white">
                <th className="px-4 py-3 text-left">S.No</th>
                <th className="px-4 py-3 text-center">Photo</th>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Designation</th>
                <th className="px-4 py-3 text-left">Department</th>
              </tr>
            </thead>

            <tbody>
              {staff.length > 0 ? (
                staff.map((member, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="px-4 py-3">
                      {index + 1}
                    </td>

                    <td className="px-4 py-3 text-center">
                      <img
                        src={
                          member.Image
                            ? `${import.meta.env.BASE_URL}/images/staffs/${member.Image}`
                            : DEFAULT_IMAGE
                        }
                        alt={member.Name}
                        className="w-16 h-20 object-cover border mx-auto"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = DEFAULT_IMAGE;
                        }}
                      />
                    </td>

                    <td className="px-4 py-3 font-medium">
                      {member.Name || "-"}
                    </td>

                    <td className="px-4 py-3">
                      {member.Designation || "-"}
                    </td>

                    <td className="px-4 py-3">
                      {member.Department || "-"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-6 text-gray-500"
                  >
                    No Staff Records Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
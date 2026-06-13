import { useEffect, useState } from "react";
import { Search, Download } from "lucide-react";

const Downloads = () => {
  const SHEET_ID = "1aY-3OqAbJzZgrP5Gi4Xa2NnjQ7l7GjShg1erz6FiAxM";
  const PDF_PATH = `${import.meta.env.BASE_URL}pdf/forms/`;

  const [forms, setForms] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://opensheet.elk.sh/${SHEET_ID}/application_forms`)
      .then((res) => res.json())
      .then((data) => {
        setForms(data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredForms = forms.filter((item) =>
    item.form_name
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-gradient-to-r from-rose-900 via-rose-800 to-rose-700 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Downloads
          </h1>

          <p className="text-gray-300 mt-3">
            Download College Forms and Documents
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="relative max-w-lg">
          <Search
            size={20}
            className="absolute left-4 top-4 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search forms..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-600"
          />
        </div>
      </div>

      {/* Table */}
      <div className="max-w-7xl mx-auto px-4 pb-16">

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

          {loading ? (
            <div className="text-center py-10">
              Loading forms...
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">

                <thead>
                  <tr className="bg-rose-800 text-white">
                    <th className="px-6 py-4 text-left w-24">
                      S.No
                    </th>

                    <th className="px-6 py-4 text-left">
                      Form Name
                    </th>

                    <th className="px-6 py-4 text-center w-40">
                      Download
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredForms.length > 0 ? (
                    filteredForms.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b hover:bg-rose-50 transition"
                      >
                        <td className="px-6 py-4 font-medium">
                          {index + 1}
                        </td>

                        <td className="px-6 py-4">
                          {item.form_name}
                        </td>

                        <td className="px-6 py-4 text-center">
                          <a
                            href={`${PDF_PATH}${item.pdf_file}`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-rose-950 text-white rounded-lg hover:bg-red-600 transition"
                          >
                            <Download size={16} />
                            Download
                          </a>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="3"
                        className="text-center py-10 text-gray-500"
                      >
                        No forms found.
                      </td>
                    </tr>
                  )}
                </tbody>

              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Downloads;
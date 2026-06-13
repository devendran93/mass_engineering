import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://opensheet.elk.sh/1aY-3OqAbJzZgrP5Gi4Xa2NnjQ7l7GjShg1erz6FiAxM/gallery"
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gallery Error:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (selectedIndex !== null) {
        if (e.key === "ArrowRight") {
          setSelectedIndex((prev) => (prev + 1) % images.length);
        } else if (e.key === "ArrowLeft") {
          setSelectedIndex(
            (prev) => (prev - 1 + images.length) % images.length
          );
        } else if (e.key === "Escape") {
          setSelectedIndex(null);
        }
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [selectedIndex, images.length]);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-gradient-to-r from-rose-900 via-rose-800 to-rose-700 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Gallery
          </h1>

          <p className="text-gray-300 mt-3">
            Explore Campus Events, Activities and Memorable Moments
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-4 py-12">

        {loading ? (
          <div className="text-center py-20 text-xl font-semibold">
            Loading Gallery...
          </div>
        ) : images.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-500">
              No Images Available
            </h3>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className="
                  overflow-hidden
                  rounded-xl
                  shadow-lg
                  bg-white
                  cursor-pointer
                  hover:shadow-2xl
                  transition-all
                  duration-300
                "
              >
                <img
                  src={`${BASE}/images/gallery/${img.IMAGE}`}
                  alt={`Gallery ${index + 1}`}
                  className="
                    w-full
                    h-56
                    object-cover
                    hover:scale-105
                    transition
                    duration-500
                  "
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `${BASE}/images/gallery/no-image.jpg`;
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && images.length > 0 && (
        <div className="fixed inset-0 bg-black/95 flex justify-center items-center z-50">

          {/* Close */}
          <button
            className="absolute top-5 right-5 text-white hover:text-gray-300"
            onClick={() => setSelectedIndex(null)}
          >
            <X size={40} />
          </button>

          {/* Previous */}
          <button
            className="absolute left-5 text-white hover:text-gray-300"
            onClick={() =>
              setSelectedIndex(
                (prev) => (prev - 1 + images.length) % images.length
              )
            }
          >
            <ChevronLeft size={50} />
          </button>

          {/* Image */}
          <img
            src={`${BASE}/images/gallery/${images[selectedIndex]?.IMAGE}`}
            alt="Selected"
            className="
              max-w-[90vw]
              max-h-[90vh]
              rounded-xl
              shadow-2xl
            "
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `${BASE}/images/no-image.jpg`;
            }}
          />

          {/* Next */}
          <button
            className="absolute right-5 text-white hover:text-gray-300"
            onClick={() =>
              setSelectedIndex(
                (prev) => (prev + 1) % images.length
              )
            }
          >
            <ChevronRight size={50} />
          </button>
        </div>
      )}
    </div>
  );
}
import { useState } from "react";
import { Heart, X, Search } from "lucide-react";

export default function NewsFeed() {
  const [liked, setLiked] = useState(false);
  const [rsvp, setRsvp] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [query, setQuery] = useState(""); 

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleRSVPClick = () => {
    if (!rsvp) setShowModal(true);
  };

  const confirmRSVP = () => {
    setRsvp(true);
    setShowModal(false);
  };

  const cancelRSVP = () => {
    setShowModal(false);
  };

  return (
    <div className="p-3 max-w-2xl mx-auto">
      {/* 🔍 Search Bar */}
      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search posts..."
            className="w-full pl-10 pr-4 py-2 border border-gray-500 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Single Post Card */}
      <div className="bg-white shadow rounded-lg p-6">
        {/* Header */}
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
            JP
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">
              Junior Philippine Computer Society
            </h3>
            <p className="text-sm text-gray-500">
              Posted on August 27, 2025 • 10:30 AM
            </p>
            <span className="inline-block mt-2 text-xs font-medium text-green-700 bg-green-100 px-2 py-1 rounded">
              Academic & Educational
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="mt-4">
          <h2 className="text-lg font-bold text-gray-900">
            Seminar on AI in Education
          </h2>
          <p className="text-gray-700 mt-2">
            Join us for an in-depth seminar exploring how artificial intelligence
            is transforming modern education. Experts will share insights and
            practical applications.
          </p>

          <div className="mt-4 space-y-1 text-sm text-gray-600">
            <p>
              <span className="font-medium">Date:</span> September 22, 2025
            </p>
            <p>
              <span className="font-medium">Time:</span> 2:00 PM – 5:00 PM
            </p>
            <p>
              <span className="font-medium">Venue:</span> Sentrum
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={handleRSVPClick}
            disabled={rsvp}
            className={`px-4 py-2 rounded-md transition-colors ${
              rsvp
                ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            {rsvp ? "RSVP'd" : "RSVP"}
          </button>
          <button
            onClick={handleLike}
            className={`flex items-center transition-colors ${
              liked ? "text-red-500" : "text-gray-500 hover:text-red-500"
            }`}
          >
            <Heart className={`h-5 w-5 mr-1 ${liked ? "fill-red-500" : ""}`} />
            {liked ? "Liked" : "Like"}
          </button>
        </div>
      </div>

      {/* RSVP Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">RSVP</h2>
              <button
                onClick={cancelRSVP}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="text-gray-600 mb-6">
              RSVP to this event to show you are interested in attending! Continue?
            </p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={cancelRSVP}
                className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                No
              </button>
              <button
                onClick={confirmRSVP}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Events() {
  // Example event data
  const eventDate = new Date(2025, 8, 22); // September = 8 (0-based)
  const event = {
    title: "Seminar on AI in Education",
    date: "September 22, 2025",
    time: "2:00 – 5:00 PM",
    venue: "Sentrum",
  };

  return (
    <div className="p-3">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-md mx-auto">
        {/* Calendar */}
        <Calendar
          value={null}
          selectRange={false}
          onChange={undefined}
          className="w-full border-0"
          prev2Label={null}
          next2Label={null}
          tileClassName={({ date, view }) => {
            const today = new Date();

            // Event date highlight
            if (
              view === "month" &&
              date.getFullYear() === eventDate.getFullYear() &&
              date.getMonth() === eventDate.getMonth() &&
              date.getDate() === eventDate.getDate()
            ) {
              return "!bg-green-600 !text-white rounded-full";
            }

            // Today highlight
            if (
              view === "month" &&
              date.getFullYear() === today.getFullYear() &&
              date.getMonth() === today.getMonth() &&
              date.getDate() === today.getDate()
            ) {
              return "bg-green-200 text-green-800 rounded-full";
            }

            return "hover:bg-green-100 rounded-full";
          }}
        />

        {/* Upcoming Events Section */}
        <div className="mt-2 pt-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            Upcoming
          </h2>
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-bold text-green-800 text-base">{event.title}</h3>
            <p className="text-sm text-gray-700 mt-1">
              {event.date} · {event.time} @ {event.venue}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

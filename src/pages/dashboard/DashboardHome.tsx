export default function DashboardHome() {
  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Welcome back 👋</h2>
        <p className="text-gray-600">
          Here’s a quick overview of what’s happening.
        </p>
      </div>

      {/* Upcoming Events */}
      <section>
        <h3 className="text-lg font-semibold mb-3">📅 Upcoming Events</h3>
        <div className="bg-white shadow rounded-lg p-4">
          <p className="font-medium text-gray-900">Seminar on AI in Education</p>
          <p className="text-sm text-gray-600">
            Sep 15, 2025 • 2:00 PM – 5:00 PM
          </p>
          <p className="text-sm text-gray-600">Sentrum</p>
        </div>
      </section>

      {/* Featured Games */}
      <section>
        <h3 className="text-lg font-semibold mb-3">🎮 Featured Games</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Game 1 */}
          <div className="bg-white shadow rounded-lg p-4 flex items-center justify-between">
            <p className="font-medium text-gray-900">
              Decorate your virtual room
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
              Play
            </button>
          </div>

          {/* Game 2 */}
          <div className="bg-white shadow rounded-lg p-4 flex items-center justify-between">
            <p className="font-medium text-gray-900">Mini Games</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
              Play
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

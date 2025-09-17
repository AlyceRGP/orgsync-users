export default function Games() {
  return (
    <div className="p-3 max-w-6xl mx-auto">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: Decorate your virtual room */}
        <div className="bg-white shadow rounded-2xl p-6 max-w-md mx-auto">
          <div className="w-full aspect-[16/9] mb-4">
            <img
              src="https://media.istockphoto.com/id/1314345164/vector/furniture-pixel-style.jpg?s=612x612&w=0&k=20&c=u1VJN2Vjeupc4Eyejw341I1uWY7PzIjtk6GEbKScysg="
              alt="Decorate Room"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h2 className="text-lg font-semibold text-center mb-4">
            Decorate your virtual room
          </h2>
          <div className="flex justify-center">
            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
              Play
            </button>
          </div>
        </div>

        {/* Card 2: Mini Games */}
        <div className="bg-white shadow rounded-2xl p-6 max-w-md mx-auto">
          <div className="w-full aspect-[16/9] mb-4">
            <img
              src="https://marketplace.canva.com/EAFT3WPtA0A/1/0/1600w/canva-trivia-game-fun-presentation-in-green-light-blue-retro-pixel-style-CshQ_oTTdTY.jpg"
              alt="Mini Games"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h2 className="text-lg font-semibold text-center mb-4">Mini games</h2>
          <div className="flex justify-center">
            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
              Play
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

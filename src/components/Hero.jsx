export default function Hero({ onStart }) {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-700">
          <span className="text-gray-500">🍽️</span>
          <span>Discover Amazing Food</span>
        </div>

        <h2 className="mt-10 text-4xl md:text-5xl font-semibold text-gray-800 leading-tight">
          Find Your Perfect <br /> Restaurant Experience
        </h2>

        <p className="mt-6 text-gray-500 max-w-2xl mx-auto">
          Discover the best restaurants in your city with personalized
          recommendations, real-time directions, and detailed reviews from
          fellow food lovers.
        </p>

        <button
          onClick={onStart}
          className="mt-10 bg-[#0b0b17] text-white px-8 py-3 rounded-lg font-medium shadow hover:opacity-90 transition"
        >
          Start Exploring Now
        </button>
      </div>
    </section>
  );
}

export default function GetStarted({
  city,
  setCity,
  cuisine,
  setCuisine,
  onSearch,
  loading,
  error,
  cities,
  cuisines,
}) {
  return (
    <section id="get-started" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Get Started
        </h3>
        <p className="text-gray-500 mt-3">
          Choose your city and preferred cuisine to discover amazing restaurants
        </p>

        <div className="mt-10 bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Select City
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="mt-2 w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black/10"
              >
                <option value="">Choose your city</option>
                {cities.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Select Cuisine
              </label>
              <select
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                className="mt-2 w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black/10"
              >
                {cuisines.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            onClick={onSearch}
            disabled={!city || loading}
            className="mt-5 w-full md:w-auto md:px-10 px-6 py-3 rounded-xl bg-[#0b0b17] text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition"
          >
            {loading ? "Searching..." : "Search Restaurants"}
          </button>

          {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
        </div>
      </div>
    </section>
  );
}

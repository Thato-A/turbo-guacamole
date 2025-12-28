function isIOS() {
  if (typeof navigator === "undefined") return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
}

function directionsUrl(lat, lng, label) {
  const destination = `${lat},${lng}`;
  if (isIOS()) {
    return `http://maps.apple.com/?daddr=${encodeURIComponent(
      destination
    )}&q=${encodeURIComponent(label || "")}`;
  }
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    destination
  )}&destination_place_id=`;
}

export default function Results({ restaurants, loading, error }) {
  if (loading) return null;

  return (
    <section className="pb-24">
      <div className="max-w-6xl mx-auto px-6">
        {error ? null : (
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              {restaurants?.length ? "Restaurants Near You" : ""}
            </h3>
          </div>
        )}

        {!restaurants?.length ? null : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {restaurants.map((r) => (
              <div
                key={r.id}
                className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm bg-white"
              >
                <div className="h-44 bg-gray-100">
                  {r.imageUrl ? (
                    <img
                      src={r.imageUrl}
                      alt={r.name}
                      className="w-full h-full object-cover"
                    />
                  ) : null}
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {r.name}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">{r.address}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-900">
                        {r.rating ?? "—"} ⭐
                      </p>
                      <p className="text-xs text-gray-500">{r.price || ""}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-3">
                    <a
                      href={directionsUrl(r.lat, r.lng, r.name)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#0b0b17] text-white font-medium hover:opacity-90 transition"
                    >
                      Directions
                    </a>

                    {r.phone ? (
                      <a
                        href={`tel:${r.phone}`}
                        className="inline-flex items-center justify-center px-4 py-2 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition"
                      >
                        Call
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

const cards = [
  {
    title: "Italian",
    subtitle: "Authentic pasta, pizza & more",
    img: "/italian.jpg",
  },
  {
    title: "Japanese",
    subtitle: "Fresh sushi & traditional dishes",
    img: "/japanese.jpg",
  },
  {
    title: "Mexican",
    subtitle: "Vibrant flavors & street food",
    img: "/mexican.jpg",
  },
  {
    title: "Indian",
    subtitle: "Aromatic spices & curries",
    img: "/indian.jpg",
  },
  {
    title: "Thai",
    subtitle: "Bold flavors & fresh herbs",
    img: "/thai.jpg",
  },
  {
    title: "Chinese",
    subtitle: "Traditional & modern cuisine",
    img: "/chinese.jpg",
  },
];

export default function Cuisines() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-14">
      <h3 className="text-3xl md:text-4xl font-semibold text-center text-gray-800">
        Explore Cuisines
      </h3>
      <p className="text-center text-gray-500 mt-3 max-w-2xl mx-auto">
        From comfort food to exotic flavors, discover restaurants serving every
        cuisine you crave
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((c) => (
          <div
            key={c.title}
            className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm bg-white h-[260px]"
          >
            <img
              src={c.img}
              alt={c.title}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                // fallback if no images
                e.currentTarget.style.display = "none";
              }}
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-white font-semibold text-lg">{c.title}</p>
              <p className="text-white/80 text-sm mt-1">{c.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

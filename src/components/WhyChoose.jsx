import { FiMapPin, FiUsers, FiStar, FiClock } from "react-icons/fi";

const stats = [
  {
    big: "10+",
    label: "Cities Available",
    sub: "Major cities across the US",
    Icon: FiMapPin,
  },
  {
    big: "500+",
    label: "Restaurants Listed",
    sub: "From local gems to popular chains",
    Icon: FiUsers,
  },
  {
    big: "4.8",
    label: "Average Rating",
    sub: "Highly rated restaurant selection",
    Icon: FiStar,
  },
  {
    big: "24/7",
    label: "Always Available",
    sub: "Find restaurants anytime",
    Icon: FiClock,
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-semibold text-center text-gray-900">
          Why Choose Turbo Guacamole?
        </h3>
        <p className="text-center text-gray-500 mt-3">
          Your trusted companion for discovering amazing dining experiences
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {stats.map(({ label, big, sub, Icon }) => (
            <div key={label} className="text-center">
              <div className="mx-auto w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
                <Icon size={22} />
              </div>

              <div className="mt-6 text-3xl font-semibold text-gray-900">
                {big}
              </div>
              <div className="mt-2 font-semibold text-gray-900">{label}</div>
              <div className="mt-1 text-gray-500 text-sm">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

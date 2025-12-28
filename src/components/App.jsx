import { useMemo, useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Cuisines from "./Cuisines";
import WhyChoose from "./WhyChoose";
import GetStarted from "./GetStarted";
import Results from "./Results";

const CITY_OPTIONS = [
  { label: "New York, NY", value: "New York, NY" },
  { label: "Los Angeles, CA", value: "Los Angeles, CA" },
  { label: "Chicago, IL", value: "Chicago, IL" },
  { label: "Houston, TX", value: "Houston, TX" },
  { label: "Miami, FL", value: "Miami, FL" },
  { label: "Seattle, WA", value: "Seattle, WA" },
];

const CUISINE_OPTIONS = [
  { label: "All Cuisines", value: "all" },
  { label: "Italian", value: "italian" },
  { label: "Japanese", value: "japanese" },
  { label: "Mexican", value: "mexican" },
  { label: "Indian", value: "indian" },
  { label: "Thai", value: "thai" },
  { label: "Chinese", value: "chinese" },
];

export default function App() {
  const [city, setCity] = useState("");
  const [cuisine, setCuisine] = useState("all");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [restaurants, setRestaurants] = useState([]);

  const canSearch = useMemo(() => city.trim().length > 0, [city]);

  const scrollToGetStarted = () => {
    document
      .getElementById("get-started")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // This calls YOUR backend (or serverless function) later.
  // For now it will work if you implement /api/search.
  const search = async () => {
    if (!canSearch) return;

    setLoading(true);
    setError("");
    setRestaurants([]);

    try {
      const qs = new URLSearchParams({
        city,
        cuisine,
      }).toString();

      const res = await fetch(`/api/search?${qs}`);
      const data = await res.json();

      if (!res.ok)
        throw new Error(data?.message || "Failed to fetch restaurants");

      // Expecting: { restaurants: [{ id, name, rating, address, lat, lng, price, phone, imageUrl }] }
      setRestaurants(data.restaurants || []);
    } catch (e) {
      setError(e.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24">
        <Hero onStart={scrollToGetStarted} />
        <Cuisines />
        <WhyChoose />

        <GetStarted
          city={city}
          setCity={setCity}
          cuisine={cuisine}
          setCuisine={setCuisine}
          onSearch={search}
          loading={loading}
          error={error}
          cities={CITY_OPTIONS}
          cuisines={CUISINE_OPTIONS}
        />

        <Results restaurants={restaurants} loading={loading} error={error} />
      </main>
    </div>
  );
}

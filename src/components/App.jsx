import { useMemo, useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Cuisines from "./Cuisines";
import WhyChoose from "./WhyChoose";
import GetStarted from "./GetStarted";
import Results from "./Results";
import Footer from "./Footer";

const CITY_OPTIONS = [
  { label: "New York, NY", value: "New York, NY" },
  { label: "Los Angeles, CA", value: "Los Angeles, CA" },
  { label: "Chicago, IL", value: "Chicago, IL" },
  { label: "Houston, TX", value: "Houston, TX" },
  { label: "Miami, FL", value: "Miami, FL" },
  { label: "Norfolk, VA", value: "Norfolk, VA" },
  { label: "Charleston, SC", value: "Charleston, SC" },
  { label: "Atlanta, GA", value: "Atlanta, GA" },
  { label: "Charlotte, NC", value: "Charlotte, NC" },
  { label: "Las Vegas, NV", value: "Las Vegas, NV" },
  { label: "Portland, OR", value: "Portland, OR" },
  { label: "Juneau, AK", value: "Juneau, AK" },
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

  const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8080";

  const canSearch = useMemo(() => city.trim().length > 0, [city]);

  const scrollToGetStarted = () => {
    document
      .getElementById("get-started")
      ?.scrollIntoView({ behavior: "smooth" });
  };

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

      const res = await fetch(`${API_BASE}/api/search?${qs}`);

      const data = await res.json();

      if (!res.ok)
        throw new Error(data?.message || "Failed to fetch restaurants");

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
        <Footer />
      </main>
    </div>
  );
}

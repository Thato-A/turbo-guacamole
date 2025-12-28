export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="bg-gradient-to-b from-[#0b0b17] to-[#05050e] text-white">
        <div className="max-w-6xl mx-auto px-6 py-5 text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl">🥑</span>
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Turbo Guacamole
            </h1>
          </div>
          <p className="text-white/80 mt-1 text-sm md:text-base">
            Find the perfect restaurant near you
          </p>
        </div>
      </div>
    </header>
  );
}

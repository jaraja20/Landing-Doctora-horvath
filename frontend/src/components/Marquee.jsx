export const Marquee = ({ items, slow = false, dark = false }) => {
  const row = [...items, ...items, ...items, ...items];
  return (
    <div className={`overflow-hidden py-4 border-y ${dark ? "bg-navydeep border-white/10" : "bg-indigobrand border-indigobrand"}`} data-testid="marquee-ribbon">
      <div className={`flex whitespace-nowrap w-max ${slow ? "animate-marquee-slow" : "animate-marquee"}`}>
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0">
            {row.map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center text-sm sm:text-base font-medium uppercase tracking-[0.3em] text-cyanlight">
                <span className="px-6">{item}</span>
                <span className="text-cyan">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

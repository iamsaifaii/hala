export default function WaveMarquee() {
  return (
    <section aria-label="Services Marquee" className="w-full overflow-hidden max-w-[100vw] mb-12 sm:mb-20 relative" aria-hidden>
      <svg
        style={{ width: '4000px', height: '90px', flexShrink: 0 }}
        viewBox="0 0 4000 90"
        className="w-[4000px] h-[90px]"
      >
        <defs>
          <path
            id="marquee-path"
            d="M 0 45 Q 125 10 250 45 T 500 45 T 750 45 T 1000 45 T 1250 45 T 1500 45 T 1750 45 T 2000 45 T 2250 45 T 2500 45 T 2750 45 T 3000 45 T 3250 45 T 3500 45 T 3750 45 T 4000 45"
            fill="none"
          />
        </defs>
        <text fontSize="22" fontWeight="700" fill="#111" letterSpacing="2">
          <textPath href="#marquee-path" startOffset="0%">
            GROW YOUR BRAND • DOMINATE SEARCH • CONVERT CLICKS • ENGAGE AUDIENCES • GROW YOUR BRAND • DOMINATE SEARCH • CONVERT CLICKS • ENGAGE AUDIENCES • GROW YOUR BRAND • DOMINATE SEARCH • CONVERT CLICKS • ENGAGE AUDIENCES • GROW YOUR BRAND • DOMINATE SEARCH • CONVERT CLICKS • ENGAGE AUDIENCES • GROW YOUR BRAND • DOMINATE SEARCH • CONVERT CLICKS • ENGAGE AUDIENCES • GROW YOUR BRAND • DOMINATE SEARCH • CONVERT CLICKS • ENGAGE AUDIENCES •
            <animate attributeName="startOffset" from="0" to="-2000" dur="20s" repeatCount="indefinite" />
          </textPath>
        </text>
      </svg>
    </section>
  );
}

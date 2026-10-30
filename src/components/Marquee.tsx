export default function Marquee() {
  const text = 'Marcus\u00A0\u2014\u00A0Bennet\u00A0';

  return (
    <div
      className="anim-fade-up absolute inset-x-0 top-[16vh] sm:top-[14vh] z-10 overflow-hidden"
      style={{ animationDelay: '500ms' }}
    >
      <div className="marquee flex w-max whitespace-nowrap font-hn text-[16vh] sm:text-[26vh] leading-none text-cream">
        <span className="pr-[6vw]">{text}</span>
        <span className="pr-[6vw]">{text}</span>
      </div>
    </div>
  );
}

import WordCarousel from "./WordCarousel.jsx";
import { HERO_WORDS } from "../data/heroWords.js";
import SocialLinks from "./SocialLinks.jsx";
import crown from "../assets/doodles/crown.png";
import star from "../assets/doodles/star.png";

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div className="heroInner">
        <div className="heroCenter">
          <p className="heroKicker">Your discord server</p>
          <p className="heroKicker">
            for <WordCarousel items={HERO_WORDS} />
          </p>

          <a
            className="btn btnDiscord"
            href="https://discord.gg/girlsonlystudy"
            target="_blank"
            rel="noreferrer"
            aria-label="Join the Girls Only Study Space Discord server"
          >
            <span>Join GOSS Discord Server</span>
          </a>
        </div>
      </div>
      <img src={crown} className="picBg crown" alt="Crown" />
      <img src={star} className="picBg picStar" alt="Star" />

      <SocialLinks />

      <svg
        className="heroSquiggle"
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="
            M0,60
            C120,110 240,20 360,50
            C480,80 600,130 720,100
            C840,70 960,30 1080,60
            C1200,90 1320,50 1440,70
            L1440,140
            L0,140
            Z
          "
          fill="var(--brand-cream)"
        />
      </svg>
    </section>
  );
}

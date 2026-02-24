'use client';

const clients = [
  { name: 'Ford',     svg: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg' },
  { name: 'Google',   svg: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Shopify',  svg: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg' },
  { name: 'Stripe',   svg: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg' },
  { name: 'Slack',    svg: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg' },
  { name: 'Shopify',  svg: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg' },
  { name: 'Stripe',   svg: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg' },
  { name: 'Slack',    svg: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg' },
];

const track = [...clients, ...clients];

export default function SocialProofStrip() {
  return (
    <section
      className="
        overflow-hidden
        bg-[var(--bg-section)]
        border-y border-[var(--border-default)]
        py-7
      "
    >
      {/* Label */}
      <p
        className="
          text-center mb-5
          font-[var(--font-body)]
          text-[11px]
          tracking-[0.12em]
          uppercase
          text-[var(--text-muted)]
        "
      >
        Trusted By 
      </p>

      {/* Slider with faded edges */}
      <div
        className="
          overflow-hidden
         mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]
          [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]
        "
      >
        <div
          className="
            logo-track
            flex
            w-max
          "
        >
          {track.map((c, i) => (
            <div
              key={i}
              className="
                flex items-center justify-center
                shrink-0
                w-[140px] h-[44px]
                mx-6
              "
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.svg}
                alt={c.name}
                className="
                  max-w-[110px]
                  max-h-[36px]
                  object-contain
                  opacity-[0.85]
                  transition
                  duration-300
                  hover:opacity-100
                  hover:scale-[1.06]
                "
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .logo-track {
          animation: logoScroll 30s linear infinite;
        }
        .logo-track:hover {
          animation-play-state: paused;
        }
        @keyframes logoScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
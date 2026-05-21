import { FC } from "react";

export interface iCardItem {
  title: string;
  description: string;
  tag: string;
  src: string;
  link: string;
  color: string;
  textColor: string;
}

interface iCardProps extends iCardItem {
  i: number;
  total: number;
}

const Card: FC<iCardProps> = ({
  title,
  description,
  tag,
  src,
  link,
  color,
  textColor,
  i,
  total,
}) => {
  const isExternal = link && link !== "#";

  return (
    <div
      className="sticky top-0 flex min-h-screen items-center justify-center px-4 sm:px-6 md:px-8"
      style={{
        paddingTop: `calc(${i * 2.5}rem + 2rem)`,
        zIndex: i + 1,
      }}
    >
      <a
        href={link || "#"}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="group relative flex w-full max-w-[1100px] flex-col overflow-hidden rounded-2xl shadow-[0_30px_90px_-30px_rgba(0,0,0,0.7)] ring-1 ring-white/10 transition-transform duration-500 hover:-translate-y-1 sm:rounded-3xl"
        style={{
          backgroundColor: color,
          height: "min(78svh, 720px)",
        }}
      >
        <div className="absolute inset-0 z-0">
          <img
            src={src}
            alt={`${title} preview`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover opacity-40 transition-opacity duration-500 group-hover:opacity-55"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, ${color}e0 0%, ${color}55 45%, ${color}f2 100%)`,
            }}
          />
        </div>

        <div className="relative z-10 flex h-full flex-col p-6 sm:p-8 md:p-12">
          <div className="flex items-center justify-between">
            <span
              className="text-[10px] font-medium uppercase tracking-[0.25em] opacity-80 sm:text-xs"
              style={{ color: textColor }}
            >
              {tag}
            </span>
            <span
              className="text-xs opacity-70 sm:text-sm"
              style={{ color: textColor }}
            >
              {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center sm:gap-4">
            <h3
              className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ color: textColor, fontFamily: "var(--font-display)" }}
            >
              {title}
            </h3>
            <p
              className="max-w-md text-sm tracking-wide opacity-90 sm:text-base md:text-lg"
              style={{ color: textColor, lineHeight: 1.5 }}
            >
              {description}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <span
              className="text-xs font-medium underline-offset-4 opacity-90 group-hover:underline sm:text-sm"
              style={{ color: textColor }}
            >
              {isExternal ? "View Project →" : "Coming Soon"}
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};

interface iCardSlideProps {
  items: iCardItem[];
}

export const CardsParallax: FC<iCardSlideProps> = ({ items }) => {
  return (
    <div className="relative pb-[20svh]">
      {items.map((project, i) => (
        <Card key={`p_${i}`} {...project} i={i} total={items.length} />
      ))}
    </div>
  );
};

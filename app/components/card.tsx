import classNames from "classnames";
import Link from "next/link";

interface CardProps {
  index: number;
  title: string;
  subtitle?: string;
  link?: string;
  summary: string;
  prefix: string | string[];
}

const Prefix = ({ prefix }: { prefix: string | string[] }) => {
  if (typeof prefix === "string") {
    return <p className="text-sm lowercase text-zinc-400">{prefix}</p>;
  }

  return (
    <div className="space-x-0.5">
      {prefix.map((label) => (
        <span
          key={label}
          className="rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors bg-zinc-700 text-typography"
        >
          {label}
        </span>
      ))}
    </div>
  );
};

const Title = ({
  children,
  link,
}: {
  children: React.ReactNode;
  link?: string;
}) => {
  if (!link) return <h2 className="text-2xl">{children}</h2>;

  return (
    <Link href={link} target="_blank" rel="noopener">
      <h2 className="text-2xl underline mb-1">{children}</h2>
    </Link>
  );
};

const Card = ({ index, title, subtitle, summary, prefix, link }: CardProps) => (
  <div className="border-t border-zinc-600 py-6 flex gap-6">
    <span className="text-4xl text-zinc-400">
      {index.toString().padStart(2, "0")}
    </span>
    <div>
      <Prefix prefix={prefix} />
      <Title link={link}>{title}</Title>
      {subtitle && <h3 className="text-lg text-zinc-300 mb-3">{subtitle}</h3>}
      <p>{summary}</p>
    </div>
  </div>
);

export default Card;

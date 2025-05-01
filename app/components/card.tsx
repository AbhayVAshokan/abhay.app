import classNames from "classnames";
import Link from "next/link";

export interface CardProps {
  index: number;
  title: string;
  prefix: string | string[];
  subtitle?: string;
  link?: string;
  target?: string | null;
  summary?: string;
  className?: any;
}

export const Prefix = ({ prefix }: { prefix: string | string[] }) => {
  if (typeof prefix === "string") {
    return <p className="text-sm lowercase text-muted-foreground opacity-70">{prefix}</p>;
  }

  return (
    <div className="space-x-0.5">
      {prefix.map((label) => (
        <span
          key={label}
          className="rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors bg-muted-background text-typography"
        >
          {label}
        </span>
      ))}
    </div>
  );
};

export const Title = ({
  children,
  link,
  target,
}: {
  children: React.ReactNode;
  link?: string;
  target?: any;
}) => {
  if (!link) return <h2 className="text-2xl mb-2">{children}</h2>;

  return (
    <Link href={link} target={target} rel="noopener">
      <h2 className="text-2xl underline mb-2">{children}</h2>
    </Link>
  );
};

const Card = ({
  index,
  title,
  subtitle,
  summary,
  prefix,
  link,
  target,
  className,
}: CardProps) => (
  <div
    className={classNames("border-t border-muted-foreground/30 py-6 flex gap-6", {
      [className]: className,
    })}
  >
    <span className="text-4xl text-muted-foreground opacity-70">
      {index.toString().padStart(2, "0")}
    </span>
    <div>
      <Prefix prefix={prefix} />
      <Title link={link} target={target}>
        {title}
      </Title>
      {subtitle && <h3 className="text-lg text-muted-foreground mb-3">{subtitle}</h3>}
      <p>{summary}</p>
    </div>
  </div>
);

export default Card;

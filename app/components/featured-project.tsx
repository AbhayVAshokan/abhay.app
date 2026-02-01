import Link from "next/link";

interface FeaturedProjectProps {
  title: string;
  prefix: string | string[];
  link?: string;
  target?: string;
  summary: string;
}

const TechBadge = ({ tech }: { tech: string }) => (
  <span className="inline-block bg-muted-background text-muted-foreground text-xs px-2 py-1 rounded-md mr-2 mb-2">
    {tech}
  </span>
);

const StatusIndicator = ({ link }: { link?: string }) => {
  if (!link) return null;

  const isGitHub = link.includes("github.com") || link.includes("gitlab.com");
  const isLive = !isGitHub;

  return (
    <span
      className={`inline-block text-xs px-2 py-1 rounded-md flex-shrink-0 border ${
        isLive
          ? "bg-status-live-bg text-status-live-text border-status-live-border"
          : "bg-status-source-bg text-status-source-text border-status-source-border"
      }`}
    >
      {isLive ? "🌐 Live" : "📁 Source"}
    </span>
  );
};

const FeaturedProject = ({
  title,
  prefix,
  link,
  target,
  summary,
}: FeaturedProjectProps) => {
  const techStack = Array.isArray(prefix) ? prefix : [prefix];

  const CardContent = () => (
    <div className="group p-6 border border-muted-foreground/20 rounded-lg hover:border-muted-foreground/40 transition-all duration-300 hover:shadow-lg bg-background h-full flex flex-col">
      <div className="flex items-start justify-between mb-3 gap-3">
        <h3 className="text-xl font-semibold text-typography group-hover:text-typography/80 transition-colors flex-1">
          {title}
        </h3>
        <StatusIndicator link={link} />
      </div>

      <div className="flex flex-wrap mb-4 -mr-2">
        {techStack.map((tech) => (
          <TechBadge key={tech} tech={tech} />
        ))}
      </div>

      <p className="text-muted text-sm leading-relaxed flex-1">{summary}</p>
    </div>
  );

  if (link) {
    return (
      <Link
        href={link}
        target={target || "_blank"}
        className="block transform hover:scale-[1.02] transition-transform duration-200 h-fit"
      >
        <CardContent />
      </Link>
    );
  }

  return (
    <div className="h-fit">
      <CardContent />
    </div>
  );
};

export default FeaturedProject;

import Link from "next/link";

interface ProjectListItemProps {
  title: string;
  prefix: string | string[];
  link?: string;
  target?: string;
  summary?: string;
}

const ProjectListItem = ({ title, prefix, link, target, summary }: ProjectListItemProps) => {
  const techStack = Array.isArray(prefix) ? prefix.join(", ") : prefix;
  
  const ItemContent = () => (
    <div className="flex flex-col md:flex-row gap-4 border-b border-dashed opacity-75 hover:opacity-100 transition-opacity justify-between p-2">
      <div className="flex-1">
        <h3 className="font-medium">{title}</h3>
        {summary && (
          <p className="text-muted text-sm mt-1 line-clamp-2">{summary}</p>
        )}
      </div>
      <p className="text-muted lowercase text-sm flex-shrink-0">{techStack}</p>
    </div>
  );

  if (link) {
    return (
      <Link
        href={link}
        className="block"
        target={target}
      >
        <ItemContent />
      </Link>
    );
  }

  return <ItemContent />;
};

export default ProjectListItem;
import ProjectListItem from "./project-list-item";

interface ProjectListProps {
  projects: Array<{
    title: string;
    prefix: string | string[];
    link?: string;
    target?: string;
    summary?: string;
  }>;
  viewAllLink?: string;
  viewAllText?: string;
}

const ProjectList = ({ projects, viewAllLink, viewAllText }: ProjectListProps) => (
  <section>
    <div className="mb-8">
      {projects.map((project) => (
        <ProjectListItem
          key={project.title}
          {...project}
        />
      ))}
    </div>
    {viewAllLink && (
      <a
        href={viewAllLink}
        className="text-muted hover:text-typography transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {viewAllText || "View more →"}
      </a>
    )}
  </section>
);

export default ProjectList;
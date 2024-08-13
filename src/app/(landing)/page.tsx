import { projects } from "#site/content"
import ProjectCard from "@/components/project/project-card"

export default function Home() {
  const projectsSorted = projects.sort((a, b) => {
    return (a.order || 0) - (b.order || 0);
  });

  return (
    <div className="mt-10 space-y-6">
      {projectsSorted.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}

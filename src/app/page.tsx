import { projects } from "@/data/projects";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Hero projectCount={projects.length} />
        <ProjectsSection projects={projects} />
      </main>
      <Footer />
    </div>
  );
}

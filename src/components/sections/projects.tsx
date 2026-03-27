import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const projectsData = [
  {
    title: 'Splitgather',
    description: 'A web application with a frontend and a backend API, built for collaborative sharing and gathering.',
    techStack: ['JavaScript', 'HTML', 'CSS', 'Node.js'],
    imageId: 'splitgather-project',
    repoUrl: 'https://github.com/sihilelh/splitgather',
  },
  {
    title: 'Learning Streak Tracker',
    description: 'Track daily learning hours, topics, and notes with a GitHub-style heatmap visualization. Features real-time statistics and a dark theme UI.',
    techStack: ['Node.js', 'Express', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
    imageId: 'heatmap-project',
    repoUrl: 'https://github.com/xMIRAA/Heat-Map-',
  },
  {
    title: 'StarterScope Recommendation MVP',
    description: 'A business opportunity recommendation web application. Processes user preferences using a weighted scoring algorithm against a dataset to provide personalized recommendations.',
    techStack: ['Python', 'FastAPI', 'HTML', 'CSS'],
    imageId: 'starterscope-project',
    repoUrl: 'https://github.com/xMIRAA/StarterScope',
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-card py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Portfolio & Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A glimpse into my hands-on experience building functional web applications.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => {
            const projectImage = PlaceHolderImages.find((img) => img.id === project.imageId);
            return (
              <a key={project.title} href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="block group outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl">
                <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:border-primary/50 group-hover:-translate-y-1">
                {projectImage && (
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={projectImage.imageUrl}
                      alt={projectImage.description}
                      width={600}
                      height={400}
                      className="w-full object-cover transition-transform duration-300 hover:scale-105"
                      data-ai-hint={projectImage.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
                <CardFooter className="mt-auto pb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
                </Card>
              </a>
            );
          })}
        </div>
        <p className="mt-12 text-center text-muted-foreground">
          More academic and personal projects are in progress and will be added soon.
        </p>
      </div>
    </section>
  );
}

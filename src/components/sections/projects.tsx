import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const projectsData = [
  {
    title: 'Hotel Reservation Website',
    description: 'A web-based system for managing hotel bookings. Features reservation handling, a user-friendly interface, and basic backend logic, focusing on usability and functional workflows.',
    techStack: ['HTML', 'CSS', 'PHP', 'JavaScript'],
    imageId: 'hotel-project',
  },
  {
    title: 'Vehicle Service Station Website',
    description: 'A website for managing vehicle service bookings. It includes service listings, customer interaction points, and scheduling capabilities, demonstrating full-stack fundamentals.',
    techStack: ['HTML', 'CSS', 'PHP', 'MySQL'],
    imageId: 'vehicle-service-project',
  },
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
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projectsData.map((project) => {
            const projectImage = PlaceHolderImages.find((img) => img.id === project.imageId);
            return (
              <Card key={project.title} className="overflow-hidden transition-shadow duration-300 hover:shadow-xl">
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
                <CardContent>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
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

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, GraduationCap, TrendingUp } from 'lucide-react';

const aboutData = {
  education: {
    title: 'Education',
    icon: GraduationCap,
    degree: 'Bachelor of Science in Information Systems',
    university: 'University of Colombo School of Computing',
    graduation: 'Expected Graduation: 2030',
  },
  mindset: {
    title: 'Mindset',
    icon: BrainCircuit,
    points: ['Continuous Learning', 'Adaptability', 'Growth-Oriented'],
  },
};

export default function AboutSection() {
  return (
    <section id="about" className="bg-card py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            About Me
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A lifelong learner passionate about the intersection of technology, data, and business strategy.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-16">
          {/* Journey Section */}
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="font-headline text-2xl font-bold md:text-3xl mb-6">
              My Journey & Aspirations
            </h3>
            <div className="space-y-6 text-muted-foreground md:text-lg leading-relaxed">
              <p>
                As an undergraduate at the prestigious University of Colombo School of Computing, I am deeply immersed in the world of Information Systems. My studies have ignited a strong passion for roles where I can leverage technology to solve real-world business challenges.
              </p>
              <p>
                I am particularly drawn to Business Analysis, Management IT, and Data Analytics. My goal is to build a career where I can bridge the gap between technical teams and business stakeholders, using data-driven insights to inform strategy and drive meaningful growth. I am excited by the prospect of transforming raw data into compelling stories that guide decision-making.
              </p>
            </div>
          </div>

          {/* Education and Mindset Cards */}
          <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {/* Education Card */}
            <Card className="group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/50">
              <CardHeader className="flex flex-row items-center gap-4 bg-muted/50 pb-6">
                <div className="rounded-full bg-primary/10 p-3 transition-colors duration-300 group-hover:bg-primary/20">
                  <aboutData.education.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl">
                  {aboutData.education.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow pt-6">
                <p className="font-semibold text-foreground md:text-lg">{aboutData.education.degree}</p>
                <p className="mt-2 text-muted-foreground">
                  {aboutData.education.university}
                </p>
                <p className="mt-4 text-sm font-medium text-primary">
                  {aboutData.education.graduation}
                </p>
              </CardContent>
            </Card>

            {/* Mindset Card */}
            <Card className="group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/50">
              <CardHeader className="flex flex-row items-center gap-4 bg-muted/50 pb-6">
                <div className="rounded-full bg-primary/10 p-3 transition-colors duration-300 group-hover:bg-primary/20">
                  <aboutData.mindset.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl">
                  {aboutData.mindset.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow pt-6">
                <ul className="space-y-4 pl-1">
                  {aboutData.mindset.points.map((point, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="rounded-full bg-accent/20 p-1">
                        <TrendingUp className="h-4 w-4 text-accent" />
                      </div>
                      <span className="text-muted-foreground font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

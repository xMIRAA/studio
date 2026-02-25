import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, GraduationCap, TrendingUp } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

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

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="h-full border-none bg-transparent shadow-none">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">
                  My Journey & Aspirations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  As an undergraduate at the prestigious University of Colombo School of Computing, I am deeply immersed in the world of Information Systems. My studies have ignited a strong passion for roles where I can leverage technology to solve real-world business challenges.
                </p>
                <p>
                  I am particularly drawn to Business Analysis, Management IT, and Data Analytics. My goal is to build a career where I can bridge the gap between technical teams and business stakeholders, using data-driven insights to inform strategy and drive meaningful growth. I am excited by the prospect of transforming raw data into compelling stories that guide decision-making.
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="h-full transition-shadow duration-300 hover:shadow-xl">
              <CardHeader className="flex flex-row items-center gap-4">
                <aboutData.education.icon className="h-8 w-8 text-primary" />
                <CardTitle className="font-headline text-xl">
                  {aboutData.education.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">{aboutData.education.degree}</p>
                <p className="text-muted-foreground">{aboutData.education.university}</p>
                <p className="text-sm text-muted-foreground">{aboutData.education.graduation}</p>
                <Separator className="my-4" />
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <aboutData.mindset.icon className="h-6 w-6 text-primary" />
                    <h4 className="font-headline text-lg font-semibold">
                      {aboutData.mindset.title}
                    </h4>
                  </div>
                  <ul className="space-y-2 pl-1">
                    {aboutData.mindset.points.map((point, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-accent" />
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

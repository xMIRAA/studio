import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, Code, LineChart, Pen, Search } from 'lucide-react';
import AiForm from '@/components/ai-form';

const servicesData = [
  {
    title: 'Website Development',
    icon: Code,
    description: 'Basic to intermediate web solutions using modern technologies.',
  },
  {
    title: 'Data Analysis & Dashboards',
    icon: LineChart,
    description: 'Beginner-intermediate data analysis and dashboard creation with Power BI and Excel.',
  },
  {
    title: 'Content Writing',
    icon: Pen,
    description: 'Clear and effective content for websites and technical documentation.',
  },
  {
    title: 'Simple Graphic Design',
    icon: Search,
    description: 'Clean and simple graphics for web and content needs.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            What I Can Help With
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            As my skills grow with my academic journey, here are some areas where I can already provide value.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service) => (
            <Card key={service.title} className="text-center transition-all duration-300 hover:bg-primary/5">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="pt-4 font-headline text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-24">
          <Card className="overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="grid md:grid-cols-2">
              <div className="flex flex-col justify-center p-8 md:p-12">
                <BrainCircuit className="h-12 w-12 text-primary" />
                <h3 className="mt-4 font-headline text-2xl font-bold">
                  AI Business Consultation
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Curious about how AI can solve a business problem? Enter a simple challenge below and get an AI-generated conceptual solution. This tool demonstrates my interest in applying AI to real-world business needs.
                </p>
              </div>
              <div className="bg-card p-8 md:p-12">
                <AiForm />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

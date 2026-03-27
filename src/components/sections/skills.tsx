import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  AreaChart,
  Binary,
  Braces,
  Code,
  CodeXml,
  Database,
  FileCode,
  FileSpreadsheet,
  Globe2,
  IterationCw,
  Lightbulb,
  Palette,
  Paintbrush,
  PenSquare,
  Server,
  Sparkles,
} from 'lucide-react';

const skillsData = [
  {
    category: 'Data & Business Tools',
    icon: Database,
    skills: ['SQL', 'Excel', 'Power BI', 'Agile Methodology'],
  },
  {
    category: 'Programming & Web Development',
    icon: Code,
    skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Python', 'C', 'Website development'],
  },
  {
    category: 'Creative & Strategic Skills',
    icon: Lightbulb,
    skills: ['AI-driven solutions', 'Writing', 'Simple Graphic Design'],
  },
];

const skillIcons: { [key: string]: React.ElementType } = {
  'SQL': Database,
  'Excel': FileSpreadsheet,
  'Power BI': AreaChart,
  'Agile Methodology': IterationCw,
  'HTML': FileCode,
  'CSS': Paintbrush,
  'JavaScript': Braces,
  'PHP': Server,
  'Python': CodeXml,
  'C': Binary,
  'Website development': Globe2,
  'AI-driven solutions': Sparkles,
  'Writing': PenSquare,
  'Simple Graphic Design': Palette,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-headline text-3xl font-bold md:text-4xl mb-6">
            My Skill Set
          </h2>
          <p className="text-muted-foreground md:text-lg leading-relaxed">
            A versatile collection of technical, analytical, and creative skills I've been developing.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((category) => (
            <Card key={category.category} className="group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/50">
              <CardHeader className="flex-row items-center gap-4 pb-4">
                <category.icon className="h-10 w-10 text-primary" />
                <CardTitle className="font-headline text-xl">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {category.skills.map((skill) => {
                    const Icon = skillIcons[skill] || Code;
                    return (
                      <li key={skill} className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-accent" />
                        <span>{skill}</span>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

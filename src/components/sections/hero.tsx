import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowDown, Send, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const profileImage = PlaceHolderImages.find((img) => img.id === 'profile-picture');

  return (
    <section id="home" className="container mx-auto px-4 py-20 md:py-32 lg:py-40 relative overflow-hidden">
      {/* Decorative background blob */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[128px] pointer-events-none" />

      <div className="mx-auto flex w-full max-w-6xl flex-col-reverse items-center justify-center gap-12 md:flex-row lg:gap-20">
        
        {/* Text Content */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left md:w-1/2 space-y-6">
          <Badge variant="secondary" className="px-4 py-1.5 text-sm font-medium flex items-center gap-2 rounded-full bg-secondary/50 backdrop-blur-sm border-primary/20 border">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-foreground/90">Available for Opportunities</span>
          </Badge>
          
          <h1 className="font-headline text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Mohomed Mirsadh
            </span>
          </h1>
          
          <div className="space-y-4">
            <p className="font-headline text-xl font-semibold text-foreground/90 md:text-2xl">
              Information Systems Undergraduate <br className="hidden md:block"/> & Aspiring Business Analyst
            </p>
            <p className="max-w-xl text-muted-foreground md:text-lg leading-relaxed">
              I thrive on blending technical, analytical, and creative skills to solve complex problems. Passionate about data analytics, IT management, and driving innovation.
            </p>
          </div>
          
          <div className="flex w-full flex-col justify-center gap-4 sm:flex-row md:justify-start pt-4">
            <Button asChild size="lg" className="h-12 px-8 text-base shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-primary/25">
              <Link href="#projects">
                View Portfolio
                <ArrowDown className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-8 text-base transition-all duration-300 hover:-translate-y-1 bg-background/50 backdrop-blur-sm">
              <Link href="#contact">
                Contact Me
                <Send className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Image Content */}
        <div className="relative flex w-full justify-center md:w-1/2">
          {profileImage && (
            <div className="relative h-72 w-72 md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px] flex-shrink-0">
              {/* Outer decorative rings */}
              <div className="absolute inset-0 rounded-full border border-primary/20 bg-primary/5 animate-[spin_12s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-accent/20 bg-accent/5 animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Image wrapper */}
              <div className="absolute inset-8 overflow-hidden rounded-full shadow-2xl ring-4 ring-background/50 backdrop-blur-sm">
                <Image
                  src={profileImage.imageUrl}
                  alt={profileImage.description}
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-700 hover:scale-110"
                  data-ai-hint={profileImage.imageHint}
                />
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

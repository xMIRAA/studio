import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowDown, Send } from 'lucide-react';

export default function HeroSection() {
  const profileImage = PlaceHolderImages.find((img) => img.id === 'profile-picture');

  return (
    <section id="home" className="container mx-auto px-4 py-20 md:py-32">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="order-2 flex justify-center md:order-1 md:justify-start">
          {profileImage && (
            <div className="relative h-64 w-64 md:h-80 md:w-80">
              <Image
                src={profileImage.imageUrl}
                alt={profileImage.description}
                fill
                priority
                className="rounded-full object-cover shadow-2xl"
                data-ai-hint={profileImage.imageHint}
              />
              <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
            </div>
          )}
        </div>
        <div className="order-1 text-center md:order-2 md:text-left">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl lg:text-6xl">
            Mohomed Mirsadh
          </h1>
          <p className="mt-4 font-headline text-lg font-medium text-foreground/80 md:text-xl">
            Information Systems Undergraduate | Aspiring Business & Data Analyst
          </p>
          <p className="mt-6 max-w-xl text-muted-foreground">
            A dedicated Information Systems undergraduate with a passion for
            business analysis, data analytics, and IT management. I thrive on
            blending technical, analytical, and creative skills to solve complex
            problems and drive innovation.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <Button asChild size="lg" className="transition-transform hover:scale-105">
              <Link href="#projects">
                <ArrowDown />
                View Portfolio
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="transition-transform hover:scale-105">
              <Link href="#contact">
                <Send />
                Contact Me
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '../ui/card';
import { Linkedin, Mail, Phone, Loader2 } from 'lucide-react';
import Link from 'next/link';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  topic: z.string().min(1, {
    message: 'Please select a topic.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

const contactDetails = [
  {
    icon: Mail,
    value: 'mirsadhmhd@gmail.com',
    href: 'mailto:mirsadhmhd@gmail.com',
  },
  {
    icon: Phone,
    value: '+94 77 25 99 686',
    href: 'tel:+94772599686',
  },
  {
    icon: Linkedin,
    value: 'linkedin.com/in/mirsadh-mohomed',
    href: 'https://www.linkedin.com/in/mirsadh-mohomed-6550933b3',
  },
];

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      topic: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        topic: values.topic,
        message: values.message,
      };

      await emailjs.send(
        'service_tdb7qic',
        'template_b1e1h8j',
        templateParams,
        'YVYGsZgsgQyMYr9bM'
      );

      toast({
        title: 'Message Sent!',
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem sending your message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="bg-card py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Get in Touch</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            I'm open to opportunities and collaborations. Feel free to reach out.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <h3 className="font-headline text-2xl font-semibold">Contact Information</h3>
            {contactDetails.map((detail, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <detail.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    <Link href={detail.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {detail.value}
                    </Link>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Card>
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} suppressHydrationWarning />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@example.com" {...field} suppressHydrationWarning />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="topic"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Topic / Project</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="What is this regarding?" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="General">General Inquiry</SelectItem>
                            <SelectItem value="Auto Care Web">Project: Auto Care Web</SelectItem>
                            <SelectItem value="Splitgather">Project: Splitgather</SelectItem>
                            <SelectItem value="Streak Tracker">Project: Learning Streak Tracker</SelectItem>
                            <SelectItem value="StarterScope">Project: StarterScope Recommendation</SelectItem>
                            <SelectItem value="Collaboration">Freelance / Collaboration</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me how I can help."
                            className="min-h-[120px]"
                            {...field}
                            suppressHydrationWarning
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting} suppressHydrationWarning>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

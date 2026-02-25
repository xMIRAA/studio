'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useFormState, useFormStatus } from 'react-dom';
import * as z from 'zod';
import { useEffect, useRef } from 'react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Loader2 } from 'lucide-react';
import { getAiSolution } from '@/app/actions';

const formSchema = z.object({
  businessProblem: z.string().min(10, {
    message: 'Please describe your business problem in at least 10 characters.',
  }),
});

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        'Get AI Solution'
      )}
    </Button>
  );
}

export default function AiForm() {
  const [state, formAction] = useFormState(getAiSolution, {
    solutionConcept: '',
    error: '',
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessProblem: '',
    },
  });

  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.solutionConcept) {
      form.reset();
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [state.solutionConcept, form]);

  return (
    <div>
      <Form {...form}>
        <form action={formAction} className="space-y-6">
          <FormField
            control={form.control}
            name="businessProblem"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business Problem</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g., 'High customer churn rate in our subscription service'"
                    className="min-h-[100px] bg-background"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <SubmitButton />
        </form>
      </Form>

      {state.error && (
        <p className="mt-4 text-sm font-medium text-destructive">{state.error}</p>
      )}

      {state.solutionConcept && (
        <div ref={resultRef} className="mt-8">
          <Card className="bg-background">
            <CardHeader>
              <CardTitle className="font-headline text-xl">
                Conceptual AI Solution
              </CardTitle>
              <CardDescription>
                Here is a high-level AI-driven approach to your problem.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">{state.solutionConcept}</p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

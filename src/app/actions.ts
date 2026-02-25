'use server';

import { generateBusinessSolutionConcept } from '@/ai/flows/generate-business-solution-concept';
import { z } from 'zod';

const formSchema = z.object({
  businessProblem: z.string().min(10),
});

interface FormState {
  solutionConcept: string;
  error: string;
}

export async function getAiSolution(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = formSchema.safeParse({
    businessProblem: formData.get('businessProblem'),
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      error: 'Invalid input. Please describe your problem in at least 10 characters.',
    };
  }

  try {
    const result = await generateBusinessSolutionConcept(validatedFields.data);
    if (result.solutionConcept) {
      return {
        solutionConcept: result.solutionConcept,
        error: '',
      };
    }
    return {
      ...prevState,
      error: 'Could not generate a solution. Please try again.',
    };
  } catch (e) {
    console.error(e);
    return {
      ...prevState,
      error: 'An unexpected error occurred. Please try again later.',
    };
  }
}

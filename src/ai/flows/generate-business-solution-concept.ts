'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating AI-driven conceptual business solutions.
 *
 * - generateBusinessSolutionConcept - A function that handles the generation of a conceptual business solution.
 * - BusinessProblemInput - The input type for the generateBusinessSolutionConcept function.
 * - BusinessSolutionOutput - The return type for the generateBusinessSolutionConcept function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const BusinessProblemInputSchema = z.object({
  businessProblem: z
    .string()
    .describe('A brief description of a business problem that needs a solution.'),
});
export type BusinessProblemInput = z.infer<typeof BusinessProblemInputSchema>;

const BusinessSolutionOutputSchema = z.object({
  solutionConcept: z
    .string()
    .describe('A conceptual AI-driven solution to the described business problem.'),
});
export type BusinessSolutionOutput = z.infer<
  typeof BusinessSolutionOutputSchema
>;

export async function generateBusinessSolutionConcept(
  input: BusinessProblemInput
): Promise<BusinessSolutionOutput> {
  return generateBusinessSolutionConceptFlow(input);
}

const businessSolutionPrompt = ai.definePrompt({
  name: 'businessSolutionPrompt',
  input: { schema: BusinessProblemInputSchema },
  output: { schema: BusinessSolutionOutputSchema },
  prompt: `You are an expert business analyst and AI solution architect.
Your task is to analyze a given business problem and propose a conceptual AI-driven solution.
The solution should be clear, concise, and highlight how AI can address the problem.
Focus on providing a high-level concept rather than a detailed technical implementation plan.

Business Problem: {{{businessProblem}}}

Provide an AI-driven solution concept in the following JSON format.`, 
});

const generateBusinessSolutionConceptFlow = ai.defineFlow(
  {
    name: 'generateBusinessSolutionConceptFlow',
    inputSchema: BusinessProblemInputSchema,
    outputSchema: BusinessSolutionOutputSchema,
  },
  async (input) => {
    const { output } = await businessSolutionPrompt(input);
    return output!;
  }
);

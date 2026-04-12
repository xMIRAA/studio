'use server';

import { generateBusinessSolutionConcept } from '@/ai/flows/generate-business-solution-concept';
import { z } from 'zod';
import { Resend } from 'resend';
import ContactEmail from '@/components/emails/ContactEmail';

const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn('RESEND_API_KEY is missing. Emails will not be sent.');
    return null;
  }
  return new Resend(apiKey);
};

const formSchema = z.object({
  businessProblem: z.string().min(10),
});

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  topic: z.string().min(1),
  message: z.string().min(10),
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

export async function sendContactEmail(values: z.infer<typeof contactSchema>) {
  const validatedFields = contactSchema.safeParse(values);

  if (!validatedFields.success) {
    throw new Error('Invalid form data');
  }

  const { name, email, topic, message } = validatedFields.data;
  const resend = getResendClient();

  if (!resend) {
    return { success: false, error: 'Email service not configured (Missing API Key)' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['mirsadhmhd@gmail.com'],
      subject: `New Inquiry: ${topic} from ${name}`,
      react: ContactEmail({ name, email, topic, message }),
      replyTo: email,
    });

    if (error) {
      console.error('Resend Error:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err) {
    console.error('Server Action Error:', err);
    return { success: false, error: 'Failed to send email' };
  }
}

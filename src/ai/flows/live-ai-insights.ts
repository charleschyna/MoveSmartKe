'use server';

/**
 * @fileOverview A flow for providing live AI insights about predicted traffic congestion.
 *
 * - getLiveAiInsights - A function that returns live AI insights about predicted traffic congestion.
 * - LiveAiInsightsInput - The input type for the getLiveAiInsights function.
 * - LiveAiInsightsOutput - The return type for the getLiveAiInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const LiveAiInsightsInputSchema = z.object({
  region: z.string().describe('The region to get traffic insights for.'),
  timeOfDay: z.string().describe('The time of day to get traffic insights for.'),
});
export type LiveAiInsightsInput = z.infer<typeof LiveAiInsightsInputSchema>;

const LiveAiInsightsOutputSchema = z.object({
  insight: z.string().describe('The predicted traffic congestion insight.'),
});
export type LiveAiInsightsOutput = z.infer<typeof LiveAiInsightsOutputSchema>;

export async function getLiveAiInsights(input: LiveAiInsightsInput): Promise<LiveAiInsightsOutput> {
  return liveAiInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'liveAiInsightsPrompt',
  input: {schema: LiveAiInsightsInputSchema},
  output: {schema: LiveAiInsightsOutputSchema},
  prompt: `You are an expert urban planner providing live AI insights about predicted traffic congestion.

  Provide a concise insight about predicted traffic congestion for the given region and time of day.

  Region: {{{region}}}
  Time of Day: {{{timeOfDay}}}
  `,
});

const liveAiInsightsFlow = ai.defineFlow(
  {
    name: 'liveAiInsightsFlow',
    inputSchema: LiveAiInsightsInputSchema,
    outputSchema: LiveAiInsightsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

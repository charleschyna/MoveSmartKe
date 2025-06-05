'use server';

/**
 * @fileOverview Simulates road closure scenarios and provides projected traffic impact and suggestions.
 *
 * - simulateRoadClosure - A function that handles the road closure simulation process.
 * - SimulateRoadClosureInput - The input type for the simulateRoadClosure function.
 * - SimulateRoadClosureOutput - The return type for the simulateRoadClosure function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SimulateRoadClosureInputSchema = z.object({
  scenarioDescription: z
    .string()
    .describe('A detailed description of the road closure or traffic change scenario.'),
  currentTrafficData: z
    .string()
    .describe('Current real-time traffic data for the affected area.'),
});
export type SimulateRoadClosureInput = z.infer<typeof SimulateRoadClosureInputSchema>;

const SimulateRoadClosureOutputSchema = z.object({
  projectedTrafficImpact: z.string().describe('A detailed description of the projected impact on traffic.'),
  suggestedMitigationStrategies: z
    .array(z.string())
    .describe('A list of suggested strategies to mitigate the traffic impact.'),
});
export type SimulateRoadClosureOutput = z.infer<typeof SimulateRoadClosureOutputSchema>;

export async function simulateRoadClosure(input: SimulateRoadClosureInput): Promise<SimulateRoadClosureOutput> {
  return simulateRoadClosureFlow(input);
}

const prompt = ai.definePrompt({
  name: 'simulateRoadClosurePrompt',
  input: {schema: SimulateRoadClosureInputSchema},
  output: {schema: SimulateRoadClosureOutputSchema},
  prompt: `You are an expert urban planner specializing in traffic management.

You will simulate the impact of a road closure or traffic change scenario and suggest mitigation strategies.

Use the following information to analyze the scenario and provide your insights.

Scenario Description: {{{scenarioDescription}}}
Current Traffic Data: {{{currentTrafficData}}}

Based on the scenario and traffic data, provide a detailed description of the projected traffic impact and suggest strategies to mitigate the impact.`,
});

const simulateRoadClosureFlow = ai.defineFlow(
  {
    name: 'simulateRoadClosureFlow',
    inputSchema: SimulateRoadClosureInputSchema,
    outputSchema: SimulateRoadClosureOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

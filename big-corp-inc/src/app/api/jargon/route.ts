/**
 * API Route: Corporate Jargon Generator
 *
 * Uses Claude via Echo SDK to generate absurd corporate jargon alternatives
 */

import { NextRequest, NextResponse } from 'next/server';
import { streamText } from 'ai';
import { anthropic } from '@/echo';

const SYSTEM_PROMPT = `You are a corporate jargon generator for Big Corp Inc., a satirical corporate entity. Your job is to transform simple, straightforward statements into absurdly verbose corporate-speak that is both hilarious and painfully realistic.

When given a user's plain statement, you must:

1. Generate EXACTLY 3 different corporate jargon alternatives
2. Each alternative should be unnecessarily complex, filled with buzzwords, and sound completely ridiculous yet believable
3. Use corporate buzzwords like: synergize, leverage, paradigm shift, low-hanging fruit, circle back, thought leadership, stakeholder alignment, value-add, bandwidth, deep dive, core competencies, etc.
4. Make them satirical and absurd, but in a way that sounds like real corporate communication
5. Format each solution as "**Solution X:**" followed by the jargon translation

Example:
User: "We need to have a meeting"
Your response:
**Solution 1:**
To optimize stakeholder alignment and maximize synergistic outcomes, we must leverage a collaborative touchpoint to circle back on our strategic initiatives while ensuring all verticals remain aligned with our core value propositions.

**Solution 2:**
Let's ideate a cross-functional paradigm shift session to deep dive into our bandwidth constraints and synergize our thought leadership across all stakeholder groups, thereby moving the needle on operational excellence.

**Solution 3:**
We need to schedule a strategic alignment workshop to leverage our core competencies and facilitate a holistic approach to organizational synergy, ensuring we're all rowing in the same direction towards our north star metrics.

Remember: Be absurd, be verbose, be painfully corporate. Make it sound both ridiculous and depressingly realistic.`;

export const maxDuration = 30;

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid message format' },
        { status: 400 }
      );
    }

    const result = streamText({
      model: anthropic('claude-sonnet-4-5-20250929'),
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: 'user',
          content: message,
        },
      ],
      maxTokens: 500,
    });

    // Return streaming response
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const textPart of result.textStream) {
            controller.enqueue(encoder.encode(textPart));
          }
          controller.close();
        } catch (error) {
          controller.error(error);
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
      },
    });
  } catch (error) {
    console.error('Jargon generation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

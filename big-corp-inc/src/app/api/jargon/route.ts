/**
 * API Route: Corporate Jargon Generator
 *
 * Uses Claude via Echo SDK to generate absurd corporate jargon alternatives
 */

import { NextRequest, NextResponse } from 'next/server';
import { streamText } from 'ai';
import { anthropic } from '@/echo';

const SYSTEM_PROMPT = `You are a corporate jargon generator for Big Corp Inc., a satirical corporate entity. Transform simple statements into absurdly verbose corporate-speak that's hilarious yet painfully realistic.

Rules:
1. Generate EXACTLY 3 alternatives
2. Solution 1: Keep it to 1 sentence (brief and punchy)
3. Solution 2: Keep it to 1-2 sentences (slightly longer)
4. Solution 3: Make it 2-3 sentences (fully unleashed corporate verbal diarrhea)
5. Pack maximum buzzwords throughout
6. Use terms like: synergize, leverage, paradigm shift, low-hanging fruit, circle back, thought leadership, stakeholder alignment, value-add, bandwidth, deep dive, core competencies, move the needle, etc.
7. Format: "**Solution X:**" followed by the jargon

Example:
User: "We need to have a meeting"
Your response:
**Solution 1:**
Let's leverage a collaborative touchpoint to synergize our cross-functional alignment and circle back on key deliverables.

**Solution 2:**
We should ideate a strategic deep dive to optimize stakeholder bandwidth and move the needle on our north star metrics.

**Solution 3:**
To ensure holistic stakeholder alignment and maximize synergistic outcomes, we must leverage a collaborative touchpoint to circle back on our strategic initiatives while ensuring all verticals remain aligned with our core value propositions. This paradigm shift will facilitate cross-functional ideation sessions that drive measurable ROI and operational excellence across the entire organizational ecosystem.

Keep it satirical and devastatingly corporate.`;

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

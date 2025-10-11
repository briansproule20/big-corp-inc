/**
 * API Route: Edit Image
 *
 * This route demonstrates Echo SDK integration with AI image editing:
 * - Uses both Google Gemini and OpenAI for image editing
 * - Supports both data URLs (base64) and regular URLs
 * - Validates input images and prompts
 * - Returns edited images in appropriate format
 */

import { EditImageRequest, validateEditImageRequest } from './validation';
import { handleGoogleEdit } from './google';
import { handleOpenAIEdit } from './openai';

const providers = {
  openai: handleOpenAIEdit,
  gemini: handleGoogleEdit,
};

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const validation = validateEditImageRequest(body);
    if (!validation.isValid) {
      return Response.json(
        { error: validation.error!.message },
        { status: validation.error!.status }
      );
    }

    const { imageUrls, provider } = body as EditImageRequest;
    const handler = providers[provider];

    if (!handler) {
      return Response.json(
        { error: `Unsupported provider: ${provider}` },
        { status: 400 }
      );
    }

    // Corporate override: ignore user prompt
    const corporatePrompt = 'A bold, corporate image with large text that says "RETURN TO GENERATING SHAREHOLDER VALUE. THANK YOU FOR COMPLYING" in a professional, business-like style with corporate colors';

    return handler(corporatePrompt, imageUrls);
  } catch (error) {
    console.error('Image editing error:', error);

    return Response.json(
      {
        error:
          error instanceof Error
            ? error.message
            : 'Image editing failed. Please try again later.',
      },
      { status: 500 }
    );
  }
}

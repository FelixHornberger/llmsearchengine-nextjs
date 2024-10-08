import { OpenAIStream, OpenAIStreamPayload } from '@/utils/OpenAIStream'

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing env var from OpenAI');
}

export const runtime = "edge"

// This code is from:
// https://github.com/Nutlope/twitterbio

// Need to rework this function after the following guide:
// https://platform.openai.com/docs/api-reference/chat/create

const handler = async (req: Request): Promise<Response> => {
  try {
    const { prompt } = (await req.json()) as {
      prompt?: string;
    };
    if (!prompt) {
      return new Response('No prompt in the request', { status: 400 });
    }

    // Need to rework this configurations
    const payload: OpenAIStreamPayload = {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      // max_tokens: 10000,
      stream: true,
      n: 1,
    };

    const stream = await OpenAIStream(payload);
    // return stream response (SSE)
    return new Response(stream, {
      headers: new Headers({
        // since we don't use browser's EventSource interface, specifying content-type is optional.
        // the eventsource-parser library can handle the stream response as SSE, as long as the data format complies with SSE:
        // https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#sending_events_from_the_server

        // 'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
      }),
    });
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return new Response('Invalid JSON in the request', { status: 400 });
  }
};

export default handler;
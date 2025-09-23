import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface ErrorWithMessage {
  message: string;
}

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
}

// Extract error message helper
function getErrorMessage(error: unknown): string {
  if (isErrorWithMessage(error)) return error.message;
  return 'Unknown error occurred';
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();
    
    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }
    
    const apiKey = process.env.GEMINI_API_KEY || '';
    
    if (!apiKey) {
      return NextResponse.json({ 
        response: { 
          content: "Gemini API key is not configured.",
          role: "assistant"
        } 
      }, { status: 200 });
    }
    
    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      
      // Short and focused system prompt
      const systemPrompt = `Bạn là trợ lý học thuật về hệ thống chính trị Việt Nam và chủ nghĩa xã hội.
Trả lời ngắn gọn, chính xác, cân bằng và bằng tiếng Việt.
Ưu tiên ba trục chủ đề khi phù hợp: (1) Dân chủ XHCN; (2) Nhà nước XHCN; (3) Dân chủ XHCN và Nhà nước pháp quyền XHCN ở Việt Nam.`;

      const fullMessage = `${systemPrompt}\n\nNgười dùng hỏi: ${message}`;
      
      const result = await model.generateContent(fullMessage);
      const response = await result.response;
      const text = response.text();
      
      return NextResponse.json({ 
        response: { 
          content: text,
          role: "assistant"
        } 
      });
    } catch (error: unknown) {
      console.error('Gemini API error:', error);
      
      return NextResponse.json({ 
        response: { 
          content: `Error with Gemini AI service: ${getErrorMessage(error)}`,
          role: "assistant"
        } 
      }, { status: 200 });
    }
    
  } catch (error: unknown) {
    return NextResponse.json(
      { error: `Failed to process request: ${getErrorMessage(error)}` },
      { status: 500 }
    );
  }
}
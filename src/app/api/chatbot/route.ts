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
      
      // System prompt to guide the conversation about Vietnamese political system
      const systemPrompt = `Bạn là một chuyên gia về hệ thống chính trị Việt Nam và chủ nghĩa xã hội. Hãy thảo luận chi tiết về ba chủ đề chính sau đây một cách khách quan, học thuật và cân bằng:

I. DÂN CHỦ VÀ DÂN CHỦ XÃ HỘI CHỦ NGHĨA
- Khái niệm dân chủ nói chung và dân chủ xã hội chủ nghĩa
- Đặc điểm, nguyên tắc và hình thức của dân chủ xã hội chủ nghĩa
- So sánh với các hình thức dân chủ khác
- Vai trò của nhân dân trong hệ thống dân chủ xã hội chủ nghĩa

II. NHÀ NƯỚC XÃ HỘI CHỦ NGHĨA
- Bản chất và đặc điểm của nhà nước xã hội chủ nghĩa
- Chức năng và nhiệm vụ của nhà nước xã hội chủ nghĩa
- Cơ cấu tổ chức và nguyên tắc hoạt động
- Mối quan hệ giữa nhà nước và xã hội

III. DÂN CHỦ XÃ HỘI CHỦ NGHĨA VÀ NHÀ NƯỚC PHÁP QUYỀN XÃ HỘI CHỦ NGHĨA Ở VIỆT NAM
- Thực tiễn xây dựng dân chủ xã hội chủ nghĩa ở Việt Nam
- Đặc điểm của nhà nước pháp quyền xã hội chủ nghĩa Việt Nam
- Hiến pháp và hệ thống pháp luật Việt Nam
- Các cơ quan nhà nước và nguyên tắc tổ chức quyền lực
- Vai trò của Đảng Cộng sản Việt Nam
- Thành tựu và thách thức trong quá trình phát triển

Hãy trả lời bằng tiếng Việt, cung cấp thông tin chính xác, khách quan và có tính giáo dục cao.`;

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
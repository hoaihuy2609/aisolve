import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { fileToBase64, cleanLatexCode } from '../utils';
import { AI_CONFIG, ERROR_MESSAGES } from '../constants';

/**
 * Interface for image parts to be sent to Gemini API
 */
interface ImagePart {
  inlineData: {
    data: string;
    mimeType: string;
  };
}

/**
 * Creates the prompt for the AI model with enhanced formatting requirements
 */
const createPrompt = (): string => `
You are an expert mathematician and LaTeX specialist with expertise in creating beautifully formatted documents.

Analyze the provided images which contain mathematical or scientific problems and create a professional LaTeX document.

IMPORTANT FORMATTING REQUIREMENTS:

1. DOCUMENT STRUCTURE:
   - Use \\documentclass{article}
   - Include packages: amsmath, amssymb, amsfonts, xcolor, geometry
   - Set margins: \\usepackage[margin=2cm]{geometry}
   - Use Vietnamese language support if needed

2. PROBLEM STRUCTURE (for each problem):
   
   \\section*{Câu [number]: [Problem title]}
   
   [Problem statement in regular text]
   
   \\textcolor{red}{\\textbf{Dữ kiện:}}
   \\begin{itemize}
       \\item [Data point 1]
       \\item [Data point 2]
       \\item [Data point 3]
   \\end{itemize}
   
   \\textcolor{red}{\\textbf{Lời giải:}}
   
   \\textbf{a) [Sub-question a]}
   \\begin{itemize}
       \\item [Step 1 description]:
       \\[
           [Equation]
       \\]
       
       \\item [Step 2 description]:
       \\[
           [Equation]
       \\]
   \\end{itemize}
   
   \\textbf{b) [Sub-question b]}
   \\begin{itemize}
       \\item [Step 1 description]:
       \\[
           [Equation]
       \\]
   \\end{itemize}
   
   \\textcolor{red}{\\textbf{Kết luận:}}
   \\begin{itemize}
       \\item [Conclusion 1]
       \\item [Conclusion 2]
   \\end{itemize}

3. EQUATION FORMATTING:
   - Use \\[ \\] for centered display equations
   - Use align* environment for multi-line equations
   - Use \\approx for approximations
   - Use \\times for multiplication
   - Format numbers properly (e.g., 6,03 not 6.03 for Vietnamese)

4. TEXT FORMATTING:
   - Use \\textbf{} for bold text
   - Use \\textcolor{red}{} for important headers
   - Use bullet points (\\item) for step-by-step solutions
   - Write explanations in clear, natural language

5. MATHEMATICAL NOTATION:
   - Use proper subscripts and superscripts
   - Use \\frac{}{} for fractions
   - Use \\ln, \\log, \\sin, \\cos for functions
   - Use \\Rightarrow or \\Leftrightarrow for implications

EXAMPLE FORMAT:

\\documentclass{article}
\\usepackage{amsmath,amssymb,amsfonts,xcolor}
\\usepackage[margin=2cm]{geometry}
\\begin{document}

\\section*{Câu 3: [Title]}

[Problem statement]

\\textcolor{red}{\\textbf{Dữ kiện:}}
\\begin{itemize}
    \\item Độ phóng xạ ban đầu của 1 g carbon: \\(H_0 = 0,231\\) Bq
    \\item Chu kì bán rã: \\(T = 5730\\) năm
\\end{itemize}

\\textcolor{red}{\\textbf{Lời giải:}}

\\textbf{a) Xác định giá trị \\(z\\):}
\\begin{itemize}
    \\item Đổi chu kì bán rã \\(T\\) sang đơn vị giây (s):
    \\[
        T = 5730 \\times 365,2422 \\times 24 \\times 3600 \\approx 1,8082 \\times 10^{11} \\text{ (s)}
    \\]
    
    \\item Hằng số phóng xạ \\(\\lambda\\) được tính:
    \\[
        \\lambda = \\frac{\\ln 2}{T}
    \\]
\\end{itemize}

\\textcolor{red}{\\textbf{Kết luận:}}
\\begin{itemize}
    \\item Giá trị \\(z\\) cần tìm là 6,03
\\end{itemize}

\\end{document}

Return ONLY the complete LaTeX document code. Make it beautiful and professional!
`;

/**
 * Converts files to image parts for Gemini API
 */
const convertFilesToImageParts = async (files: File[]): Promise<ImagePart[]> => {
  return Promise.all(
    files.map(async (file) => ({
      inlineData: {
        data: await fileToBase64(file),
        mimeType: file.type,
      },
    }))
  );
};

/**
 * Solves mathematical problems from uploaded images using Gemini AI
 * @param files - Array of image files containing math problems
 * @returns LaTeX formatted solution
 * @throws Error if API key is missing or API call fails
 */
export const solveProblemsFromImages = async (files: File[]): Promise<string> => {
  // Validate API key
  if (!process.env.API_KEY) {
    throw new Error(ERROR_MESSAGES.API_KEY_MISSING);
  }

  // Initialize Gemini AI
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    // Convert files to image parts
    const imageParts = await convertFilesToImageParts(files);
    const prompt = createPrompt();

    // Call Gemini API
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: AI_CONFIG.MODEL,
      contents: {
        parts: [
          ...imageParts,
          { text: prompt }
        ]
      },
      config: {
        temperature: AI_CONFIG.TEMPERATURE,
        topP: AI_CONFIG.TOP_P,
      }
    });

    // Extract and clean the response text
    const text = response.text || "";
    return cleanLatexCode(text);
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    throw new Error(error.message || ERROR_MESSAGES.PROCESSING_FAILED);
  }
};

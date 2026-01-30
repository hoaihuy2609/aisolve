# 🧮 LaTeX Math Solver AI

> AI-powered mathematical problem solver that converts images to LaTeX code with step-by-step solutions

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.2-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-purple)](https://vitejs.dev/)

## ✨ Features

- 📸 **Multi-Image Upload** - Upload up to 10 images simultaneously
- 🤖 **AI-Powered** - Powered by Google's Gemini 3 Pro Preview model
- 📝 **Beautiful LaTeX Generation** - Professional, color-coded LaTeX with Vietnamese support
- 🎨 **Structured Output** - Clear sections: Dữ kiện, Lời giải, Kết luận
- 🔍 **Step-by-Step Solutions** - Detailed problem-solving with bullet points
- 📋 **One-Click Copy & Download** - Copy to clipboard or download as .tex file
- 🌈 **Syntax Highlighting** - Beautiful code display with custom styling
- 🎨 **Modern UI** - Beautiful, responsive interface with Tailwind CSS
- ♿ **Accessible** - WCAG compliant with ARIA labels
- ⚡ **Fast & Optimized** - React memoization and performance optimizations

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- A Google Gemini API key ([Get one here](https://makersuite.google.com/app/apikey))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/latex-math-solver-ai.git
   cd latex-math-solver-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   API_KEY=your_gemini_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
npm run preview
```

## 🏗️ Project Structure

```
latex-math-solver-ai/
├── components/           # React components
│   ├── ImageCard.tsx    # Image preview card
│   └── LatexOutput.tsx  # LaTeX output display
├── services/            # API services
│   └── geminiService.ts # Gemini AI integration
├── App.tsx              # Main application component
├── constants.ts         # Application constants
├── hooks.ts             # Custom React hooks
├── index.tsx            # Application entry point
├── types.ts             # TypeScript type definitions
├── utils.ts             # Utility functions
├── styles.css           # Global styles
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
└── package.json         # Project dependencies
```

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.2
- **Build Tool**: Vite 6.2
- **Language**: TypeScript 5.8
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **AI Model**: Google Gemini 3 Pro Preview
- **Fonts**: Inter, Fira Code

## 🎯 Code Optimizations

This project implements several performance optimizations:

### React Performance
- ✅ `React.memo()` for component memoization
- ✅ `useCallback()` for function memoization
- ✅ `useMemo()` for computed values
- ✅ Lazy loading for images
- ✅ Proper cleanup of object URLs

### Code Quality
- ✅ Centralized constants management
- ✅ Utility functions for reusability
- ✅ Custom hooks for common patterns
- ✅ Comprehensive TypeScript types
- ✅ Error handling and validation
- ✅ JSDoc documentation

### Accessibility
- ✅ ARIA labels and roles
- ✅ Semantic HTML elements
- ✅ Keyboard navigation support
- ✅ Focus management
- ✅ Screen reader friendly

### SEO
- ✅ Meta tags for social sharing
- ✅ Descriptive page titles
- ✅ Semantic HTML structure
- ✅ Open Graph tags
- ✅ Twitter Card tags

## 📝 Usage

1. **Upload Images**: Click the upload area or drag and drop images of math problems
2. **Add Multiple**: Upload up to 10 images at once
3. **Solve**: Click "Solve and Generate LaTeX" button
4. **View Results**: See beautifully formatted LaTeX with colored sections
5. **Copy or Download**: Use the copy button or download as .tex file
6. **Clear**: Remove individual images or clear all at once

### 🎨 LaTeX Output Format

The generated LaTeX follows a professional Vietnamese academic format:
- **Colored headers** (red) for Dữ kiện, Lời giải, Kết luận
- **Bullet points** for step-by-step solutions
- **Centered equations** with proper formatting
- **Complete document** ready to compile

See [LATEX_FORMAT_GUIDE.md](LATEX_FORMAT_GUIDE.md) for detailed formatting examples.

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `API_KEY` | Google Gemini API key | Yes |

### Constants

Edit `constants.ts` to customize:
- Maximum number of images
- Maximum file size
- Accepted image types
- AI model parameters

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Google Gemini AI for the powerful language model
- Tailwind CSS for the styling framework
- Lucide for the beautiful icons
- React team for the amazing framework

## 📧 Contact

For questions or support, please open an issue on GitHub.

---

**Made with ❤️ using React, TypeScript, and Google Gemini AI**

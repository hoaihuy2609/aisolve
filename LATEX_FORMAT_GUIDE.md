# 📝 LaTeX Format Guide

## Overview

The LaTeX Math Solver AI now generates beautifully formatted LaTeX documents with professional styling, following Vietnamese academic standards.

---

## 🎨 Format Structure

### Complete Document Structure

```latex
\documentclass{article}
\usepackage{amsmath,amssymb,amsfonts,xcolor}
\usepackage[margin=2cm]{geometry}
\begin{document}

\section*{Câu [number]: [Problem Title]}

[Problem statement in Vietnamese]

\textcolor{red}{\textbf{Dữ kiện:}}
\begin{itemize}
    \item [Data point 1]
    \item [Data point 2]
    \item [Data point 3]
\end{itemize}

\textcolor{red}{\textbf{Lời giải:}}

\textbf{a) [Sub-question a]}
\begin{itemize}
    \item [Step description]:
    \[
        [Equation]
    \]
    
    \item [Next step]:
    \[
        [Equation]
    \]
\end{itemize}

\textbf{b) [Sub-question b]}
\begin{itemize}
    \item [Step description]:
    \[
        [Equation]
    \]
\end{itemize}

\textcolor{red}{\textbf{Kết luận:}}
\begin{itemize}
    \item [Conclusion 1]
    \item [Conclusion 2]
\end{itemize}

\end{document}
```

---

## 🎯 Key Features

### 1. **Colored Headers**
- **Red color** for important sections: "Dữ kiện", "Lời giải", "Kết luận"
- Uses `\textcolor{red}{\textbf{...}}`

### 2. **Structured Sections**
- `\section*{...}` for problem titles (no numbering)
- Clear separation between problem, data, solution, and conclusion

### 3. **Bullet Points**
- All steps use `\begin{itemize}...\end{itemize}`
- Each step is an `\item`
- Makes solutions easy to follow

### 4. **Centered Equations**
- Display equations use `\[ ... \]`
- Automatically centered
- Proper spacing around equations

### 5. **Vietnamese Number Format**
- Uses comma for decimals: `6,03` instead of `6.03`
- Proper units: `năm`, `giây`, `Bq`

---

## 📐 Mathematical Notation

### Common Commands

| Element | LaTeX Command | Example |
|---------|--------------|---------|
| Fraction | `\frac{a}{b}` | $\frac{1}{2}$ |
| Subscript | `x_0` | $x_0$ |
| Superscript | `x^2` | $x^2$ |
| Multiplication | `\times` | $\times$ |
| Approximately | `\approx` | $\approx$ |
| Natural log | `\ln` | $\ln$ |
| Implies | `\Rightarrow` | $\Rightarrow$ |
| Equivalence | `\Leftrightarrow` | $\Leftrightarrow$ |

### Example Equations

```latex
% Simple equation
\[
    T = 5730 \times 365,2422 \times 24 \times 3600 \approx 1,8082 \times 10^{11} \text{ (s)}
\]

% Fraction
\[
    \lambda = \frac{\ln 2}{T}
\]

% Multi-step equation
\[
    H_0 = \lambda N \Rightarrow N = \frac{H_0}{\lambda} = \frac{H_0 \cdot T}{\ln 2}
\]
```

---

## 🎨 Styling Guidelines

### Text Formatting

```latex
% Bold text
\textbf{Important text}

% Colored text
\textcolor{red}{Red text}

% Combined
\textcolor{red}{\textbf{Important red text}}

% Inline math
\(x = 5\)

% Text in equations
\text{năm}
```

### Lists

```latex
% Itemized list
\begin{itemize}
    \item First item
    \item Second item
    \item Third item
\end{itemize}

% Nested lists (if needed)
\begin{itemize}
    \item Main point
    \begin{itemize}
        \item Sub-point 1
        \item Sub-point 2
    \end{itemize}
\end{itemize}
```

---

## 📋 Example Output

### Input Problem
"Câu 3: Các nhà khoa học đã xác định được độ phóng xạ của 1 g mẫu carbon..."

### Generated LaTeX

```latex
\documentclass{article}
\usepackage{amsmath,amssymb,amsfonts,xcolor}
\usepackage[margin=2cm]{geometry}
\begin{document}

\section*{Câu 3: Phóng xạ Carbon}

Các nhà khoa học đã xác định được độ phóng xạ của 1 g mẫu carbon trong cơ thể sinh vật sống là 0,231 Bq. Biết rằng, trong số các đồng vị của carbon có trong mẫu, chỉ có $^{14}$C là đồng vị phóng xạ với chu kì bán rã là 5730 năm (1 năm = 365,2422 ngày).

\textcolor{red}{\textbf{Dữ kiện:}}
\begin{itemize}
    \item Độ phóng xạ ban đầu của 1 g carbon: $H_0 = 0,231$ Bq
    \item Chu kì bán rã của $^{14}$C: $T = 5730$ năm
    \item Quy đổi thời gian: 1 năm = 365,2422 ngày
    \item Độ phóng xạ của mẫu vật cổ (người băng Ötzi): $H = 0,121$ Bq
\end{itemize}

\textcolor{red}{\textbf{Lời giải:}}

\textbf{a) Xác định giá trị $z$:}
\begin{itemize}
    \item Đổi chu kì bán rã $T$ sang đơn vị giây (s) để phù hợp với đơn vị Bq (phân rã/giây):
    \[
        T = 5730 \times 365,2422 \times 24 \times 3600 \approx 1,8082 \times 10^{11} \text{ (s)}
    \]
    
    \item Hằng số phóng xạ $\lambda$ được tính bởi:
    \[
        \lambda = \frac{\ln 2}{T}
    \]
    
    \item Độ phóng xạ $H_0$ liên hệ với số nguyên tử $N$ qua công thức:
    \[
        H_0 = \lambda N \Rightarrow N = \frac{H_0}{\lambda} = \frac{H_0 \cdot T}{\ln 2}
    \]
    
    \item Thay các giá trị $H_0 = 0,231$ Bq, $H = 0,121$ Bq và $T = 5730$ năm:
    \[
        N = \frac{0,231 \times 1,8082 \times 10^{11}}{\ln 2} \approx 6,02609 \times 10^{10}
    \]
    
    \item Theo đề bài $N = z \times 10^{10}$, suy ra $z \approx 6,02609$. Làm tròn đến chữ số hàng phần trăm:
    \[
        z = 6,03
    \]
\end{itemize}

\textbf{b) Tính niên đại của người băng Ötzi:}
\begin{itemize}
    \item Sử dụng định luật phóng xạ cho độ phóng xạ theo thời gian:
    \[
        H = H_0 \cdot e^{-\lambda t} = H_0 \cdot 2^{-\frac{t}{T}}
    \]
    
    \item Từ đó, ta có công thức tính thời gian $t$:
    \[
        \frac{H}{H_0} = 2^{-\frac{t}{T}} \Rightarrow \ln\left(\frac{H}{H_0}\right) = -\frac{t}{T}\ln 2 \Rightarrow t = \frac{T \cdot \ln(H_0/H)}{\ln 2}
    \]
    
    \item Thay các giá trị $H_0 = 0,231$ Bq, $H = 0,121$ Bq và $T = 5730$ năm:
    \[
        t = \frac{5730 \times \ln(0,231/0,121)}{\ln 2} \approx \frac{5730 \times 0,646627}{0,693147} \approx 5345,43 \text{ (năm)}
    \]
    
    \item Đổi kết quả sang đơn vị nghìn năm:
    \[
        t \approx 5,34543 \text{ nghìn năm}
    \]
    
    \item Làm tròn đến chữ số hàng phần trăm:
    \[
        t = 5,35 \text{ nghìn năm}
    \]
\end{itemize}

\textcolor{red}{\textbf{Kết luận:}}
\begin{itemize}
    \item Giá trị $z$ cần tìm là 6,03
    \item Niên đại của người băng Ötzi là 5,35 nghìn năm
\end{itemize}

\end{document}
```

---

## 🚀 Features in Output

### ✅ Professional Formatting
- Clean, organized structure
- Easy to read and understand
- Follows academic standards

### ✅ Color Coding
- Red headers for key sections
- Improves visual hierarchy
- Makes navigation easier

### ✅ Step-by-Step Solutions
- Each step clearly marked
- Equations properly displayed
- Logical flow of reasoning

### ✅ Vietnamese Support
- Proper Vietnamese text
- Correct number formatting
- Appropriate units

### ✅ Complete Document
- Ready to compile
- All necessary packages included
- Proper document structure

---

## 💡 Tips for Best Results

1. **Upload Clear Images**: Better image quality = better LaTeX output
2. **Multiple Problems**: Each problem gets its own `\section*{}`
3. **Complex Equations**: AI handles multi-line equations with `align*`
4. **Units**: Vietnamese units are properly formatted
5. **Approximations**: Uses `\approx` for approximate values

---

## 🔧 Compiling the LaTeX

### Online (Recommended for Beginners)
1. Go to [Overleaf](https://www.overleaf.com)
2. Create new project
3. Paste the generated LaTeX code
4. Click "Recompile"

### Local (Advanced Users)
```bash
# Using pdflatex
pdflatex solution.tex

# Using xelatex (better for Vietnamese)
xelatex solution.tex
```

---

## 📚 Additional Resources

- **LaTeX Documentation**: https://www.latex-project.org/help/documentation/
- **Overleaf Tutorials**: https://www.overleaf.com/learn
- **Math Symbols**: https://www.cmor-faculty.rice.edu/~heinken/latex/symbols.pdf
- **Vietnamese LaTeX**: Use `\usepackage[vietnamese]{babel}` for better support

---

**Happy LaTeX Formatting! 📝✨**

# 📄 Format-iQ

> 🧠 *Smart formatting. Smarter publishing.*

**Format-iQ** is an AI-powered research paper formatting checker that helps authors, students, and researchers ensure their papers follow standard publication guidelines (starting with IEEE). It automates formatting analysis, highlights errors, offers improvement suggestions, and scores the paper — all before submission.

## 🚀 Features (v1.0 Scope)
- ✅ Upload a research paper (PDF or DOCX)
- ✅ Check for formatting compliance (IEEE format)
- ✅ Highlight mismatches in font, margins, headers, layout, references, etc.
- ✅ Provide AI-generated feedback and improvement suggestions
- ✅ Score papers on formatting accuracy
- 🚧 Future: Support for other formats (ACM, Springer), reference checker, template fixer

## 🧠 Tech Stack

| Layer       | Technology |
|-------------|------------|
| Frontend    | React, Tailwind CSS |
| Backend     | Python (FastAPI or Flask) |
| Parsing     | PyMuPDF, python-docx |
| AI & Scoring| Custom logic, GPT-based suggestions (later) |
| Dev Tools   | GitHub, VS Code, Google Docs, Notion |

## 📁 Project Structure

```
Format-iQ/
├── frontend/ (React)
│ ├── public/
│ └── src/
│ ├── assets/
│ ├── components/
│ ├── pages/
│ └── App.jsx
├── backend/ (Python - FastAPI/Flask)
│ ├── app/
│ │ ├── routes/
│ │ ├── services/
│ │ ├── utils/
│ │ └── main.py
├── docs/ # IEEE rules, format samples, notes
├── LICENSE # Apache 2.0 License
├── README.md # Project overview
├── .gitignore
└── requirements.txt / package.json
```

## 📚 Reference Formats

Currently supported:
* [IEEE Format Guidelines (PDF)](https://www.ieee.org/conferences/publishing/templates.html)

## 🤝 Contributing

Contributions, ideas, and suggestions are welcome!

To contribute:
1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Open a Pull Request (PR)

Please refer to [`CONTRIBUTING.md`](CONTRIBUTING.md) for full guidelines.

## 📄 License

Licensed under the **Apache License, Version 2.0 (Apache-2.0)**  
© 2025 Jigisha Baliyann

See the [`LICENSE`](LICENSE) file for details.

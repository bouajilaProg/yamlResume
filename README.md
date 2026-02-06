# yamlResume

A powerful resume generator that converts YAML data into professionally formatted PDFs using [Typst](https://typst.app/). Build beautiful, type-safe resumes with ease.

## ✨ Features

- 📝 **YAML-based**: Define your resume content in simple, readable YAML format
- 🎨 **Typst-powered**: Leverages Typst's modern typesetting engine for beautiful PDFs
- 🔒 **Type-safe**: Built with TypeScript for robust type checking
- 🧩 **Modular sections**: Support for multiple resume sections (Experience, Education, Projects, Skills, etc.)
- 🎯 **Template system**: Multiple templates available (standard, commun)
- 🚀 **CLI interface**: Easy-to-use command-line tool
- ⚡ **Fast compilation**: Quick resume generation from YAML to PDF

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **pnpm** (v10.25.0 or higher)
- **Typst CLI** - Install from [https://typst.app/docs/install/](https://typst.app/docs/install/)

To verify Typst is installed correctly:
```bash
typst --version
```

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/bouajilaProg/yamlResume.git
cd yamlResume
```

2. Install dependencies using pnpm:
```bash
pnpm install
```

3. Build the project:
```bash
pnpm run build
```

## 📖 Usage

### Development Mode

Run the CLI tool in development mode:
```bash
pnpm run dev
```

### Compile a Resume

Compile a Typst file to PDF:
```bash
pnpm run dev compile [inputFile]
```

### Testing

Run the compile test with mock data:
```bash
pnpm run test:compile
```

This will generate a test resume at `output/resume.pdf` using the mock data.

### Watch Mode (Development)

For continuous development with auto-reload:
```bash
pnpm run test:dev:compile
```

This watches for changes in `src` and `template` directories and automatically recompiles.

## 🏗️ Project Structure

```
yamlResume/
├── bin/
│   └── resume-maker.ts       # CLI entry point
├── src/
│   ├── compiler/
│   │   ├── blocks/           # Resume section builders
│   │   │   ├── ResumeBuilder.ts  # Main builder class
│   │   │   ├── experience.ts
│   │   │   ├── education.ts
│   │   │   ├── project.ts
│   │   │   ├── skills.ts
│   │   │   ├── certification.ts
│   │   │   ├── hobbies.ts
│   │   │   └── languages.ts
│   │   ├── compile.ts        # Typst compilation logic
│   │   └── test/             # Test files
│   ├── programs/
│   │   └── compileCommand.ts # CLI command handlers
│   └── utils/
│       └── path.ts           # Path utilities
├── types/                    # TypeScript type definitions
│   ├── personalInfo.type.ts
│   ├── education.type.ts
│   ├── experience.type.ts
│   ├── project.type.ts
│   ├── skills.type.ts
│   └── ...
├── template/                 # Typst templates
│   ├── standard/
│   └── commun/
├── output/                   # Generated files (gitignored)
└── package.json
```

## 🔧 Development

### Build

Compile TypeScript to JavaScript:
```bash
pnpm run build
```

Output will be in the `dist/` directory.

### Type Checking

Run TypeScript type checking without emitting files:
```bash
pnpm run typecheck
```

### Code Style

The project follows these conventions:
- **Indentation**: 2 spaces
- **Quotes**: Double quotes for strings
- **Semicolons**: Always use semicolons
- **Naming**: 
  - Classes: PascalCase (e.g., `ResumeBuilder`)
  - Functions/Variables: camelCase (e.g., `compileToPdf`)
  - Files: PascalCase for classes, camelCase for utilities

## 📝 Resume Structure

Your resume data should include the following sections:

- **Personal Info**: Name, contact information, and professional summary
- **Experience**: Work experience entries
- **Education**: Educational background
- **Projects**: Personal or professional projects
- **Skills**: Technical and soft skills
- **Certifications**: Professional certifications
- **Languages**: Spoken languages with proficiency levels
- **Hobbies**: Personal interests
- **Extracurriculars**: Additional activities

Each section is optional and will be included only if data is provided.

## 🎨 Templates

The project supports multiple Typst templates:

- **standard**: A clean, professional resume layout
- **commun**: An alternative template style

Templates are located in the `template/` directory and can be customized to fit your needs.

## 🛠️ Technologies

- **TypeScript**: Strict mode with NodeNext module resolution
- **Node.js**: ES Modules (type: "module")
- **Typst**: Modern typesetting system
- **Commander.js**: CLI framework
- **execa**: Process execution utility
- **Chalk & Ora**: Terminal styling and spinners

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run type checking: `pnpm run typecheck`
5. Test your changes: `pnpm run test:compile`
6. Commit your changes (`git commit -m 'Add amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

Please ensure your code follows the project's style guidelines outlined in `AGENTS.md`.

## 📄 License

ISC License - see the repository for details.

## 👤 Author

**bouajila**

## 🔗 Links

- [Typst Documentation](https://typst.app/docs/)
- [GitHub Repository](https://github.com/bouajilaProg/yamlResume)

## 🚧 Roadmap

- [ ] Add YAML input parsing
- [ ] Implement multiple template themes
- [ ] Add configuration file support
- [ ] Create interactive CLI prompts
- [ ] Add validation for resume data
- [ ] Generate multiple output formats
- [ ] Add unit test framework

## 📞 Support

If you encounter any issues or have questions, please [open an issue](https://github.com/bouajilaProg/yamlResume/issues) on GitHub.

---

Made with ❤️ using TypeScript and Typst

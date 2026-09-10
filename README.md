# Mirsadh Mohomed Portfolio

A personal portfolio website built with Next.js. It presents information about my background, skills, services, projects, and contact details, with an AI-powered business solution concept generator.

## Tech Stack

- Next.js 15 with the App Router and Turbopack
- React 19 and TypeScript
- Tailwind CSS with `tailwindcss-animate`
- Radix UI primitives and shadcn/ui-style components
- Genkit with Google Gemini for the AI solution generator
- EmailJS for the contact form
- Lucide React for icons
- Next Themes for light and dark mode support

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm
- Git

### Clone and install

Replace `your-username` and `your-repository` with the GitHub account and repository name:

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) in your browser to view the portfolio.

### Enable the AI feature

The main portfolio page works without an API key. To use the AI solution generator, create a `.env.local` file in the project root and add a Google AI API key:

```bash
GOOGLE_GENAI_API_KEY=your_google_ai_api_key
```

Do not commit `.env.local` or expose your API key publicly.

## Available Scripts

```bash
npm run dev       # Start the development server at http://localhost:9002
npm run build     # Create a production build
npm run start     # Start the production server
npm run typecheck # Check TypeScript types
npm run lint      # Run the project linter
```

To test the production build locally:

```bash
npm run build
npm run start
```

Then open [http://localhost:9002](http://localhost:9002).

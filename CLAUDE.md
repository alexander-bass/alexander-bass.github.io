# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a SvelteKit-based personal website/portfolio (alexander-bass.github.io) built with:

- **SvelteKit** - Full-stack framework with file-based routing
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server
- **ESLint + Prettier** - Code linting and formatting

## Architecture

- **File-based routing**: Pages are defined in `src/routes/` with SvelteKit conventions
- **Layout system**: Root layout in `src/routes/+layout.svelte` imports global styles
- **Component library**: Reusable components go in `src/lib/` (accessible via `$lib` alias)
- **Static assets**: Images, fonts, etc. in `static/` directory
- **Global styles**: Defined in `src/app.css` and imported in layout

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run check

# Type checking with watch mode
npm run check:watch

# Linting and formatting
npm run lint
npm run format
```

## Key Configuration

- **Vite config**: Uses Tailwind CSS plugin, SvelteKit plugin, and devtools JSON plugin
- **Adapter**: Uses `@sveltejs/adapter-auto` for automatic deployment platform detection
- **TypeScript**: Extends SvelteKit's generated tsconfig with strict mode enabled
- **ESLint**: Configured for TypeScript + Svelte with Prettier integration

## Development Workflow

1. Run `npm run dev` to start the development server
2. Use `npm run check` to verify TypeScript types before committing
3. Use `npm run lint` to check code formatting and linting
4. Use `npm run format` to auto-format code with Prettier

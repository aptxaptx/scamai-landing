# MCP Configuration for ScamAI Landing Page

This directory contains Model Context Protocol (MCP) server configuration for the ScamAI landing page project.

## Overview

The MCP server exposes project resources, tools, and prompts to AI assistants, making it easier to:
- Navigate and understand the codebase
- Access documentation and translations
- Create and modify components
- Update styling and configurations

## Resources

### Documentation
- **Project README**: Main project documentation
- **Refactoring Guide**: Code improvement guidelines

### Code
- **Components**: All React components including magicui components
- **Translations**: i18n translation files for all supported languages

## Tools

### `get_component`
Retrieve the source code of any component in the project.

**Parameters:**
- `componentName` (required): Name of the component

### `get_translation`
Get translation strings for a specific language.

**Parameters:**
- `locale` (required): Language code (en, zh-CN, zh-TW, es, fr, de, pt, ja, ko, ar, id)
- `key` (optional): Specific translation key path

### `list_pages`
List all pages in the Next.js app directory.

## Prompts

### `add_translation`
Add a new translation string to all language files.

### `create_component`
Create a new React component with proper structure.

### `update_styling`
Update Tailwind CSS styling throughout the project.

## Usage

The MCP server is automatically configured when using AI assistants that support MCP. The server provides:

1. **File System Access**: Read project files and directories
2. **Resource Discovery**: Browse available resources
3. **Tool Execution**: Run predefined tools for common tasks
4. **Prompt Templates**: Use predefined prompts for complex operations

## Configuration Files

- `mcp-config.json`: Root-level MCP configuration
- `.mcp/server.json`: Detailed server configuration with resources, tools, and prompts
- `.mcp/README.md`: This documentation file

## Project Structure

```
scamai-landing/
├── src/
│   ├── app/              # Next.js 15 app directory
│   ├── components/       # React components
│   │   ├── magicui/      # Magic UI components
│   │   ├── sections/     # Page sections
│   │   └── ui/           # UI components
│   ├── messages/         # i18n translation files
│   ├── contexts/         # React contexts
│   └── lib/              # Utility functions
├── public/               # Static assets
├── mcp-config.json       # MCP configuration
└── .mcp/                 # MCP server files
```

## Supported Languages

The project supports the following languages:
- English (en)
- Simplified Chinese (zh-CN)
- Traditional Chinese (zh-TW)
- Spanish (es)
- French (fr)
- German (de)
- Portuguese (pt)
- Japanese (ja)
- Korean (ko)
- Arabic (ar)
- Indonesian (id)

## Technical Stack

- **Framework**: Next.js 15.4.10
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript 5
- **Internationalization**: next-intl
- **Theming**: next-themes
- **Animations**: Framer Motion
- **Font**: Inter (Google Fonts)

# McDickerson Kosher Shekel Fund

A satirical high-finance hedge fund portfolio website featuring the wisdom of Rabbi McDickerson and AI-powered financial spiritual guidance.

## Overview

This project is a React-based web application designed with a luxury "old money" aesthetic using Tailwind CSS. It showcases a fictional hedge fund with a dark, satirical twist on high finance, global capitalism, and corporate greed.

Key features include:
- **Corporate Portfolio**: Detailed sections on history, philosophy, and global operations.
- **Ask The Rabbi**: An interactive AI chat interface powered by Google Gemini.
- **Voice of Wisdom**: Real-time Text-to-Speech (TTS) integration where the AI responses are spoken in a specific persona.
- **Newsletter**: A satirical subscription form with "legal" disclaimers.

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **AI & Logic**: Google GenAI SDK (`@google/genai`)
- **Icons**: Lucide React

## AI Integration

The application utilizes the Google Gemini API for two main features:

1.  **Chat Advisory (`gemini-2.5-flash`)**:
    -   Generates satirical financial advice.
    -   Uses a specialized System Instruction to enforce a specific "New York / Yiddish" dialect and "ruthless capitalist" persona.

2.  **Text-to-Speech (`gemini-2.5-flash-preview-tts`)**:
    -   Converts the AI's text responses into audio.
    -   Uses the 'Fenrir' voice preset to match the persona.
    -   Implements raw PCM audio decoding for playback in the browser.

## Setup & Configuration

### Prerequisites

- Node.js (v18 or higher)
- A Google Gemini API Key. You can obtain one from [Google AI Studio](https://aistudio.google.com/).

### Environment Variables

The application requires the API key to be available in the environment variables.

`API_KEY`: Your Google Gemini API key.

## Installation & Local Development

To run this project locally, follow these steps:

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Configure API Key**
    You need to set the `API_KEY` environment variable. You can do this in your shell or via a `.env` file (if your bundler supports it).

    **Mac/Linux:**
    ```bash
    export API_KEY="your_actual_api_key_here"
    ```

    **Windows (PowerShell):**
    ```powershell
    $env:API_KEY="your_actual_api_key_here"
    ```

3.  **Start the Development Server**
    ```bash
    npm run dev
    ```

4.  **Open the Application**
    Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

## Usage

1.  **Explore**: Navigate through the various sections (History, Philosophy, Global) to read the satirical lore.
2.  **Consult**: Go to the "Consult" section to chat with Rabbi McDickerson.
    -   Type a question about money, life, or business.
    -   Read the text response.
    -   Click the volume icon to hear the Rabbi speak the response.
3.  **Subscribe**: The newsletter section features a humorous confirmation modal.

## Disclaimer

This website is a work of **satire** and fiction. It is not a real financial institution. All advice given by the AI is for entertainment purposes only and should absolutely not be taken as financial or legal advice.
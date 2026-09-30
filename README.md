# AI Chat Assistant

A full-stack AI-powered chat application built with **React.js**, **Node.js**, and **Express.js**, integrated with the **Google Gemini API** to generate intelligent, real-time conversational responses. The application provides a clean and responsive user interface with Markdown rendering for enhanced readability.

---

## Overview

AI Chat Assistant demonstrates the integration of a modern frontend with a RESTful backend and a generative AI model. Users can submit natural language prompts through the web interface, which are processed by the backend and forwarded to the Google Gemini API. The generated response is then displayed in a formatted and user-friendly manner.

---

## Features

* AI-powered conversational interface
* Real-time response generation using Google Gemini API
* Responsive user interface built with React.js and Tailwind CSS
* RESTful API communication using Axios
* Markdown rendering for AI responses
* Loading indicator during response generation
* Input validation and error handling
* Clean and modular project architecture

---

## Tech Stack

### Frontend

* React.js
* JavaScript (ES6+)
* Tailwind CSS
* Axios
* React Markdown

### Backend

* Node.js
* Express.js
* Google Gemini API
* dotenv
* CORS

---

## Project Structure

```text
AI-Chat-Assistant/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── Loading.jsx
│   │   ├── main.jsx
│   │   └── ...
│   ├── package.json
│   ├── vite.config.js
│   └── ...
│
├── server/
│   ├── index.js
│   ├── package.json
│   ├── .env
│   └── ...
│
├── .gitignore
└── README.md
```

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/<saurav-01s>/ai-chat-assistant.git
cd ai-chat-assistant
```

---

### 2. Install Frontend Dependencies

```bash
cd client
npm install
```

---

### 3. Install Backend Dependencies

Open a new terminal and run:

```bash
cd server
npm install
```

---

### 4. Configure Environment Variables

Create a `.env` file inside the **server** directory.

```env
PORT=8120
KEY=YOUR_GEMINI_API_KEY
```

Replace `YOUR_GEMINI_API_KEY` with your Google Gemini API key.

---

## Running the Application

### Start the Backend

```bash
cd server
npm start
```

or

```bash
node index.js
```

---

### Start the Frontend

```bash
cd client
npm run dev
```

Open your browser and navigate to the local development URL provided by Vite (typically `http://localhost:5173`).

---

## How It Works

1. The user enters a prompt in the React.js frontend.
2. Axios sends the prompt to the Express.js backend.
3. The backend processes the request and forwards it to the Google Gemini API.
4. Gemini generates a response based on the user's prompt.
5. The backend returns the response to the frontend.
6. React Markdown renders the formatted response for display.

---

## Future Enhancements

* Chat history management
* User authentication
* Multiple conversation sessions
* Voice input support
* File upload and document-based conversations
* Dark/Light theme toggle
* AI response streaming
* Conversation export functionality

---

## Learning Outcomes

This project demonstrates practical experience with:

* Full-stack web development
* React.js component-based architecture
* REST API development with Express.js
* Asynchronous JavaScript using Axios
* Environment variable management with dotenv
* Integration of Generative AI APIs
* Responsive UI development with Tailwind CSS
* Markdown rendering in React applications


---

## Author

**Saurav Sharma**



GitHub: https://github.com/<your-github-username>

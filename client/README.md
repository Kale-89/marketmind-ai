# MarketMind AI

MarketMind AI is a full-stack AI-powered marketing content generator that helps businesses create platform-specific marketing content using Google Gemini AI.

Users can create campaigns, generate AI-powered marketing copy, store generated content in a database, and view campaign history through a modern React interface.

---

## Features

- Create marketing campaigns
- Generate AI-powered marketing content
- Store generated content in Supabase
- View campaign history
- Delete campaigns
- Loading and empty-state UI
- Platform-specific content generation
- Automatic saving of AI-generated content

---

## Tech Stack

### Frontend

- React
- React Router
- CSS
- React Hot Toast

### Backend

- Node.js
- Express.js

### Database

- Supabase

### Artificial Intelligence

- Google Gemini 2.5 Flash

---

## Project Architecture

```text
React Frontend
      ↓
Express API
      ↓
Supabase Database
      ↓
Gemini AI
      ↓
Generated Marketing Content
```

---

## How It Works

1. User creates a marketing campaign.
2. Campaign information is stored in Supabase.
3. User clicks "Generate AI".
4. Express retrieves campaign details from the database.
5. A dynamic prompt is generated.
6. Gemini generates marketing content.
7. The generated content is saved back to Supabase.
8. React refreshes and displays the results.

---

## AI Workflow

```text
Campaign Data
      ↓
Prompt Builder
      ↓
Gemini API
      ↓
JSON Response
      ↓
Database Update
      ↓
Frontend Refresh
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/marketmind-ai.git
cd marketmind-ai
```

### Client Setup

```bash
cd client
npm install
npm run dev
```

### Server Setup

```bash
cd server
npm install
npm run dev
```

## Future Improvements

- User authentication with Supabase Auth
- Support for Facebook, LinkedIn, and Email generation
- Content regeneration
- Export generated content to PDF
- Usage analytics dashboard
- Workflow automation using n8n

---

## Author

**Kalehiwot Mulugeta**

MSc Computer Science Student

GitHub: https://github.com/Kale-89
LinkedIn: linkedin.com/in/kalehiwot-mulugeta

# Investor Search AI Application

## Description
This is a simple single-page web application that allows users to search for
potential investors based on a given sector and country.

The project demonstrates basic frontend development and AI-style logic flow,
as required by the AI Intern assignment.

---

## Features
- User inputs sector and country
- Clicks a button to search for investors
- Displays top 3 investor suggestions with one-line reasoning for each

---

## Tech Stack
- HTML
- CSS
- JavaScript

---

## How to Run the Project
1. Download or clone the repository
2. Open `index.html` in any modern web browser (Chrome, Edge, Firefox)
3. Enter a sector and country
4. Click **Search Investors** to view results

---

## AI Integration
As permitted by the assignment instructions, the AI response in this project
is **mocked** for demonstration purposes.

This is a frontend-only implementation. In a real production environment,
the application would call an AI API (such as OpenAI) from a secure backend
service rather than directly from the browser.

---

## API Key Placement (For Real AI Integration)
If switching to a live AI API:
- The API key should **never** be placed in frontend JavaScript
- A backend (Node.js / Python) should be used to store the API key securely
- The frontend would send user input to the backend, which would then
  communicate with the AI API

This approach follows best security practices and prevents key exposure.

---

## Security Practices
- No API keys are exposed in the frontend
- Mocked AI logic is used to avoid security risks
- README clearly explains secure backend-based API usage

---

## Notes
This project was built as part of an AI Intern assignment.
It focuses on clarity, correctness, and explainability rather than
production-scale deployment.


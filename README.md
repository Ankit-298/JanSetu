https://jansetu-h177.onrender.com/

## Render configuration

Use a Node web service with build command `npm install` and start command `npm start`. Render supplies `PORT`; the server listens on `0.0.0.0` and serves the WebSocket voice endpoint at `/ws/voice-agent`.

Set these environment variables in Render (never commit them to `.env`):

- `MONGODB_URI`, `JWT_SECRET`, `CLIENT_URL`
- `SARVAM_API_KEY` for Sarvam LLM/TTS. The app automatically switches to local conversation logic and browser speech when Sarvam reports exhausted credits.
- `EMAIL_USER` and `EMAIL_PASS` (Gmail 16-character App Password)
- Optional SMTP overrides: `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, and `SMTP_SERVICE`

For Gmail, use `SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=465`, and `SMTP_SECURE=true`. Do not use a normal Gmail password; App Passwords are required.

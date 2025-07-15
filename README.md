# zoom_to_make_webhook
connects a zoom event to a webhook with render
 Zoom to Make Webhook

## 1. Clone this repo

```
git clone <your-repo-url>
cd zoom-to-make-webhook
```

## 2. Setup environment variables

Copy `.env.example` to `.env` and fill in:

```
VERIFICATION_TOKEN=YOUR_ZOOM_VERIFICATION_TOKEN
MAKE_WEBHOOK=YOUR_MAKE_WEBHOOK_URL
```

## 3. Deploy to Render

- Create a new Web Service on [Render.com](https://render.com/)
- Connect your GitHub repo
- Add `VERIFICATION_TOKEN` and `MAKE_WEBHOOK` in the Render Environment tab
- Use `npm start` as your Start Command

## 4. Add Zoom Event Subscription

Use:
```
https://<your-service-name>.onrender.com/zoom-webhook
```

## 5. Test

- Start your Make scenario in "Run Once"
- Send a chat message in Zoom
- Confirm it forwards to Make.com

---

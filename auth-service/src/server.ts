// @ts-nocheck
import 'dotenv/config'
// Handle uncaught exceptions and unhandled rejections to surface real errors
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err)
})
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason)
})
import express from 'express'
import cors from 'cors'
// TODO: Integrate Better-Auth once stable API confirmed
// import { betterAuth } from 'better-auth'
// import { username } from 'better-auth/plugins'

const app = express()

app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN ?? 'http://localhost:5173',
    credentials: true,
  }),
)

// Better-Auth initialization temporarily disabled

// Temporary health endpoint until Better-Auth integration is restored
app.get('/api/auth/ok', (_, res) => res.json({ status: 'ok' }))

const port = Number(process.env.AUTH_SERVICE_PORT) || 3001
app.listen(port, () => console.log(`Better-Auth running on :${port}`)) 
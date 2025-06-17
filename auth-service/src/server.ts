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
import { betterAuth, emailPasswordPlugin } from 'better-auth'

const app = express()

app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN ?? 'http://localhost:5173',
    credentials: true,
  }),
)

// Initialize Better-Auth service with error handling
let authService
try {
  authService = betterAuth({
    plugins: [emailPasswordPlugin()],
    emailAndPassword: { enabled: true },
    // Better-Auth uses DATABASE_URL env-var internally
  })
} catch (err) {
  console.error('Failed to initialize Better-Auth:', err)
  process.exit(1)
}

app.use('/api/auth', authService.router)

const port = Number(process.env.AUTH_SERVICE_PORT) || 3001
app.listen(port, () => console.log(`Better-Auth running on :${port}`)) 
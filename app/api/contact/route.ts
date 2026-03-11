import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { resend } from "@/lib/resend"

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10),
  website: z.string().max(0).optional(),
})

export async function POST(req: NextRequest) {
  try {
    const json = await req.json()
    const result = contactSchema.safeParse(json)

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: "VALIDATION_ERROR",
          details: result.error.flatten(),
        },
        { status: 400 },
      )
    }

    const { name, email, subject, message, website } = result.data

    // Honeypot field: if filled, silently accept without sending emails
    if (website && website.trim().length > 0) {
      return NextResponse.json({ success: true })
    }

    const internalTo = process.env.CONTACT_INTERNAL_TO
    const fromNotifications = process.env.CONTACT_FROM_NOTIFICATIONS
    const fromHello = process.env.CONTACT_FROM_HELLO

    if (!internalTo || !fromNotifications || !fromHello) {
      console.error("Contact form env vars missing", {
        hasInternalTo: Boolean(internalTo),
        hasFromNotifications: Boolean(fromNotifications),
        hasFromHello: Boolean(fromHello),
      })
      return NextResponse.json(
        { success: false, error: "SERVER_ERROR" },
        { status: 500 },
      )
    }

    const internalEmailPromise = resend.emails.send({
      from: fromNotifications,
      to: internalTo,
      replyTo: email,
      subject: `New contact form message from ${name}: ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        ``,
        `Subject: ${subject}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
    })

    const confirmationEmailPromise = resend.emails.send({
      from: fromHello,
      to: email,
      replyTo: fromHello,
      subject: "We received your message at SaaS²",
      text: [
        `Hi ${name},`,
        ``,
        "Thanks for reaching out to SaaS². We've received your message and will get back to you as soon as possible.",
        ``,
        "Summary of your message:",
        `Subject: ${subject}`,
        `Message: ${message}`,
        ``,
        "— The SaaS² team",
      ].join("\n"),
    })

    const [internalResult, confirmationResult] = await Promise.allSettled([
      internalEmailPromise,
      confirmationEmailPromise,
    ])

    if (internalResult.status === "rejected") {
      console.error("Failed to send internal contact email", {
        error: internalResult.reason,
      })
      return NextResponse.json(
        { success: false, error: "SERVER_ERROR" },
        { status: 500 },
      )
    }

    if (confirmationResult.status === "rejected") {
      console.error("Failed to send confirmation contact email", {
        error: confirmationResult.reason,
      })
      // Still treat as success from the user's perspective
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Unexpected error handling contact form", { error })
    return NextResponse.json(
      { success: false, error: "SERVER_ERROR" },
      { status: 500 },
    )
  }
}


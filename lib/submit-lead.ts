export const LEAD_NOTIFICATION_EMAIL = "info@ctsnorthcarolina.com"

export type LeadPayload = {
  name: string
  email: string
  phone: string
  service: string
  address: string
  timeline: string
  message: string
}

async function sendEmailNotification(payload: LeadPayload) {
  const response = await fetch(`https://formsubmit.co/ajax/${LEAD_NOTIFICATION_EMAIL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      _subject: `New website inquiry from ${payload.name}`,
      _replyto: payload.email,
      _template: "table",
      _captcha: "false",
      Name: payload.name,
      Email: payload.email,
      Phone: payload.phone,
      Service: payload.service,
      Address: payload.address || "Not provided",
      Timeline: payload.timeline,
      Message: payload.message || "Not provided",
    }),
  })

  if (!response.ok) {
    throw new Error(`Email notification failed with status ${response.status}`)
  }
}

async function sendToSheet(payload: LeadPayload) {
  const webhookUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL
  if (!webhookUrl) {
    throw new Error("Google Sheets webhook URL not configured")
  }

  await fetch(webhookUrl, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
}

export async function submitLead(payload: LeadPayload) {
  const results = await Promise.allSettled([sendEmailNotification(payload), sendToSheet(payload)])

  results.forEach((result) => {
    if (result.status === "rejected") {
      console.error("Lead delivery error:", result.reason)
    }
  })

  if (results.every((result) => result.status === "rejected")) {
    throw new Error("Unable to deliver form submission")
  }
}

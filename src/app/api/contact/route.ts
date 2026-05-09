import nodemailer from "nodemailer";

type ContactPayload = {
  fullName: string;
  email: string;
  phone?: string;
  serviceInterest?: string;
  message: string;
};

const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

const sanitize = (value: string) => value.trim().replace(/\s+/g, " ");
const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;

    const fullName = sanitize(body.fullName ?? "");
    const email = sanitize(body.email ?? "");
    const phone = sanitize(body.phone ?? "");
    const serviceInterest = sanitize(body.serviceInterest ?? "");
    const message = (body.message ?? "").trim();

    if (!fullName || !email || !message) {
      return Response.json(
        { message: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return Response.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      CONTACT_TO_EMAIL,
      CONTACT_FROM_EMAIL,
    } = process.env;

    if (
      !SMTP_HOST ||
      !SMTP_PORT ||
      !SMTP_USER ||
      !SMTP_PASS ||
      !CONTACT_TO_EMAIL
    ) {
      return Response.json(
        { message: "Email service is not configured on the server." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const fromAddress = CONTACT_FROM_EMAIL || SMTP_USER;

    await transporter.sendMail({
      from: fromAddress,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New Property Enquiry from ${fullName}`,
      text: [
        `Name: ${fullName}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Service Interest: ${serviceInterest || "Not provided"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2 style="margin: 0 0 12px;">New Property Enquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
          <p><strong>Service Interest:</strong> ${escapeHtml(serviceInterest || "Not provided")}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    return Response.json({ message: "Enquiry sent successfully." });
  } catch (error) {
    console.error("Contact form send error:", error);
    return Response.json(
      { message: "Something went wrong while sending your enquiry." },
      { status: 500 }
    );
  }
}

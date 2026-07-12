import { NextResponse } from "next/server";
import { rateLimit, getIp } from "@/backend/rateLimit";
import { addSubmission, FormSubmission } from "@/backend/formDb";

export async function POST(request: Request) {
  try {
    const ip = getIp(request);
    if (!rateLimit(`contact_${ip}`, 3, 60000)) {
      return NextResponse.json({ success: false, message: "Too many submissions. Please try again later." }, { status: 429 });
    }

    const data = await request.json();
    
    // Strict input validation
    if (typeof data.fullName !== "string" || data.fullName.trim().length === 0 || data.fullName.length > 100) {
      return NextResponse.json({ success: false, message: "Invalid or missing full name" }, { status: 400 });
    }
    if (typeof data.phone !== "string" || !/^\+?[0-9\s\-()]{7,20}$/.test(data.phone.trim())) {
      return NextResponse.json({ success: false, message: "Invalid or missing phone number" }, { status: 400 });
    }
    if (data.email && (typeof data.email !== "string" || data.email.length > 200 || !/^\S+@\S+\.\S+$/.test(data.email))) {
      return NextResponse.json({ success: false, message: "Invalid email format" }, { status: 400 });
    }
    if (data.message && (typeof data.message !== "string" || data.message.length > 1000)) {
      return NextResponse.json({ success: false, message: "Message is too long (max 1000 characters)" }, { status: 400 });
    }

    const entry: FormSubmission = {
      id: Date.now().toString() + Math.random().toString(36).substring(2, 9),
      fullName: data.fullName,
      phone: data.phone,
      email: data.email || "",
      trainingType: data.trainingType || data.course || "General Inquiry",
      classTiming: data.classTiming || "Not specified",
      areaLocation: data.areaLocation || "Not specified",
      message: data.message || "",
      submittedAt: new Date().toISOString(),
    };
    
    await addSubmission(entry);
    
    return NextResponse.json({ success: true, message: "Form submitted successfully", entry });

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}

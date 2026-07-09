import { NextResponse } from "next/server";
import { addSubmission, FormSubmission } from "@/backend/formDb";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Basic validation (only require fullName and phone)
    if (!data.fullName || !data.phone) {
      return NextResponse.json({ success: false, message: "Missing required fields (Name and Phone)" }, { status: 400 });
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

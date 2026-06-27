import { NextResponse } from "next/server";
import { addSubmission, FormSubmission } from "@/backend/formDb";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Basic validation
    if (!data.fullName || !data.phone || !data.trainingType || !data.classTiming || !data.areaLocation) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
    }

    const entry: FormSubmission = {
      id: Date.now().toString() + Math.random().toString(36).substring(2, 9),
      fullName: data.fullName,
      phone: data.phone,
      email: data.email || "",
      trainingType: data.trainingType,
      classTiming: data.classTiming,
      areaLocation: data.areaLocation,
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

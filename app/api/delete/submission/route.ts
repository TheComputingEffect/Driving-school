import { NextResponse } from "next/server";
import { deleteSubmission } from "@/backend/formDb";

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, message: "Submission ID is required" }, { status: 400 });
    }

    const success = await deleteSubmission(id);

    if (success) {
      return NextResponse.json({ success: true, message: "Submission deleted successfully" });
    } else {
      return NextResponse.json({ success: false, message: "Submission not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error deleting submission:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}

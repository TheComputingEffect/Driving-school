import fs from "fs/promises";
import path from "path";

export interface FormSubmission {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  trainingType: string;
  classTiming: string;
  areaLocation: string;
  message: string;
  submittedAt: string;
}

const DB_PATH = path.join(process.cwd(), "public", "uploads", "submissions.json");

/**
 * Ensure the directory and file exist.
 */
async function ensureDbExists() {
  const dir = path.dirname(DB_PATH);
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (err) {}

  try {
    await fs.access(DB_PATH);
  } catch (err) {
    // If it doesn't exist, create an empty array
    await fs.writeFile(DB_PATH, JSON.stringify([]), "utf-8");
  }
}

export async function getSubmissions(): Promise<FormSubmission[]> {
  await ensureDbExists();
  try {
    const data = await fs.readFile(DB_PATH, "utf-8");
    return JSON.parse(data) as FormSubmission[];
  } catch (err) {
    console.error("Error reading submissions.json:", err);
    return [];
  }
}

export async function addSubmission(entry: FormSubmission): Promise<void> {
  const submissions = await getSubmissions();
  submissions.unshift(entry); // Add to the top
  await fs.writeFile(DB_PATH, JSON.stringify(submissions, null, 2), "utf-8");
}

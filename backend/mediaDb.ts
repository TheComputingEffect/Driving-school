import fs from "fs/promises";
import path from "path";

export type MediaType = "image" | "video" | "youtube" | "drive";

export interface MediaEntry {
  id: string;
  type: MediaType;
  url: string;
  public_id: string | null;
  uploaded_at: string;
}

const DB_PATH = path.join(process.cwd(), "public", "uploads", "media.json");

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

export async function getMedia(): Promise<MediaEntry[]> {
  await ensureDbExists();
  try {
    const data = await fs.readFile(DB_PATH, "utf-8");
    return JSON.parse(data) as MediaEntry[];
  } catch (err) {
    console.error("Error reading media.json:", err);
    return [];
  }
}

export async function addMedia(entry: MediaEntry): Promise<void> {
  const media = await getMedia();
  media.unshift(entry); // Add to the top
  await fs.writeFile(DB_PATH, JSON.stringify(media, null, 2), "utf-8");
}

export async function deleteMedia(id: string): Promise<MediaEntry | null> {
  const media = await getMedia();
  const entryIndex = media.findIndex((m) => m.id === id);
  
  if (entryIndex === -1) return null;
  
  const [deletedEntry] = media.splice(entryIndex, 1);
  await fs.writeFile(DB_PATH, JSON.stringify(media, null, 2), "utf-8");
  return deletedEntry;
}

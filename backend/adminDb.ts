import fs from "fs";
import path from "path";
import crypto from "crypto";

const DB_DIR = path.join(process.cwd(), "public", "uploads");
const DB_PATH = path.join(DB_DIR, "admins.json");

export interface AdminUser {
  email: string;
  passwordHash: string;
  salt: string;
  updatedAt: string;
}

// Securely hash a password using Node's native scrypt
export function hashPassword(password: string, salt: string): string {
  return crypto.scryptSync(password, salt, 64).toString("hex");
}

// Generate a random salt for each user
export function generateSalt(): string {
  return crypto.randomBytes(16).toString("hex");
}

// Get all admin users from JSON file
export async function getAdmins(): Promise<AdminUser[]> {
  try {
    if (!fs.existsSync(DB_PATH)) {
      // Ensure the directory exists
      if (!fs.existsSync(DB_DIR)) {
        fs.mkdirSync(DB_DIR, { recursive: true });
      }
      fs.writeFileSync(DB_PATH, JSON.stringify([], null, 2));
      return [];
    }
    const data = fs.readFileSync(DB_PATH, "utf8");
    return JSON.parse(data || "[]");
  } catch (error) {
    console.error("Error reading admin database:", error);
    return [];
  }
}

// Save all admin users to JSON file
export async function saveAdmins(admins: AdminUser[]): Promise<boolean> {
  try {
    if (!fs.existsSync(DB_DIR)) {
      fs.mkdirSync(DB_DIR, { recursive: true });
    }
    fs.writeFileSync(DB_PATH, JSON.stringify(admins, null, 2));
    return true;
  } catch (error) {
    console.error("Error writing admin database:", error);
    return false;
  }
}

// Initialize the default admin account: kpriyadharshinidrivingschool@gmail.com / admin123
export async function initAdminAccount(): Promise<void> {
  const targetEmail = "kpriyadharshinidrivingschool@gmail.com";
  const targetPassword = "admin123";

  const admins = await getAdmins();
  const existingAdminIdx = admins.findIndex(
    (admin) => admin.email.toLowerCase() === targetEmail.toLowerCase()
  );

  const newSalt = generateSalt();
  const newHash = hashPassword(targetPassword, newSalt);

  if (existingAdminIdx >= 0) {
    const existingAdmin = admins[existingAdminIdx];
    // Check if password hash matches current admin123 hash
    const currentHashAttempt = hashPassword(targetPassword, existingAdmin.salt);
    
    if (existingAdmin.passwordHash !== currentHashAttempt) {
      // Update existing admin password to admin123
      admins[existingAdminIdx] = {
        email: existingAdmin.email, // preserve casing
        passwordHash: newHash,
        salt: newSalt,
        updatedAt: new Date().toISOString(),
      };
      await saveAdmins(admins);
      console.log(`[Admin DB] Updated password for ${targetEmail} successfully.`);
    }
  } else {
    // Create new admin account
    admins.push({
      email: targetEmail,
      passwordHash: newHash,
      salt: newSalt,
      updatedAt: new Date().toISOString(),
    });
    await saveAdmins(admins);
    console.log(`[Admin DB] Created admin account for ${targetEmail} successfully.`);
  }
}

// Validate admin login credentials
export async function verifyAdminCredentials(
  email: string,
  password: string
): Promise<boolean> {
  // Ensure the target admin account exists / is updated
  await initAdminAccount();

  const admins = await getAdmins();
  const admin = admins.find(
    (a) => a.email.toLowerCase() === email.toLowerCase()
  );

  if (!admin) {
    return false;
  }

  const computedHash = hashPassword(password, admin.salt);
  return computedHash === admin.passwordHash;
}

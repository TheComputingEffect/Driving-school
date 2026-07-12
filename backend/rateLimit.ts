type RateLimitInfo = { count: number; lastReset: number };

const rateLimitCache = new Map<string, RateLimitInfo>();

export function rateLimit(ip: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const record = rateLimitCache.get(ip);

  if (!record || (now - record.lastReset) > windowMs) {
    rateLimitCache.set(ip, { count: 1, lastReset: now });
    return true;
  }

  if (record.count >= limit) {
    return false;
  }

  record.count += 1;
  return true;
}

export function getIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  return forwardedFor ? forwardedFor.split(",")[0].trim() : realIp || "127.0.0.1";
}

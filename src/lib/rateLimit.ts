interface RateLimitRecord {
  count: number;
  resetTime: number;
}

interface RateLimitOptions {
  limit: number;
  windowMs: number;
}

export function createRateLimiter(options: RateLimitOptions) {
  const store = new Map<string, RateLimitRecord>();

  return {
    check(identifier: string): { success: boolean; limit: number; remaining: number; resetTime: number } {
      const now = Date.now();
      const record = store.get(identifier);

      // Clean expired record or initialize new
      if (!record || now > record.resetTime) {
        const newRecord: RateLimitRecord = {
          count: 1,
          resetTime: now + options.windowMs,
        };
        store.set(identifier, newRecord);

        // Periodically prune stale entries to prevent memory leak
        if (store.size > 1000) {
          for (const [key, val] of store.entries()) {
            if (now > val.resetTime) {
              store.delete(key);
            }
          }
        }

        return {
          success: true,
          limit: options.limit,
          remaining: options.limit - 1,
          resetTime: newRecord.resetTime,
        };
      }

      // Check limit
      if (record.count >= options.limit) {
        return {
          success: false,
          limit: options.limit,
          remaining: 0,
          resetTime: record.resetTime,
        };
      }

      record.count += 1;
      return {
        success: true,
        limit: options.limit,
        remaining: options.limit - record.count,
        resetTime: record.resetTime,
      };
    },
    reset() {
      store.clear();
    },
  };
}

export function getClientIp(req: Request): string {
  const xForwardedFor = req.headers.get("x-forwarded-for");
  if (xForwardedFor) {
    const ips = xForwardedFor.split(",").map((ip) => ip.trim());
    if (ips[0]) return ips[0];
  }
  const xRealIp = req.headers.get("x-real-ip");
  if (xRealIp) return xRealIp.trim();
  return "127.0.0.1";
}

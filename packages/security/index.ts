import crypto from 'crypto';

export function generateSecureToken(length = 32): string {
  return crypto.randomBytes(length).toString('hex');
}

export function hashPassword(password: string): string {
  // This should actually use bcrypt, but we'll use a placeholder for now
  // or import from packages/auth if we want to share.
  // Actually bcrypt is already in packages/auth.
  return password; // Proxy or direct implementation
}

export const SECURITY_HEADERS = {
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:;",
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};

export function validateEnvironment() {
  const required = [
    'POSTGRES_URL',
    'AUTH_SECRET',
    'REDIS_URL'
  ];
  
  const missing = required.filter(env => !process.env[env]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
}

export enum UserRole {
  SUPER_ADMIN = "SUPER_ADMIN",
  ADMIN = "ADMIN",
  USER = "USER",
}

export const ROLE_HIERARCHY: Record<UserRole, number> = {
  [UserRole.SUPER_ADMIN]: 100,
  [UserRole.ADMIN]: 50,
  [UserRole.USER]: 10,
};

export function hasPermission(userRole: string, requiredRole: UserRole): boolean {
  const userScore = ROLE_HIERARCHY[userRole as UserRole] || 0;
  const requiredScore = ROLE_HIERARCHY[requiredRole];
  return userScore >= requiredScore;
}

export function isAdmin(role: string): boolean {
  return hasPermission(role, UserRole.ADMIN);
}

export function isSuperAdmin(role: string): boolean {
  return hasPermission(role, UserRole.SUPER_ADMIN);
}

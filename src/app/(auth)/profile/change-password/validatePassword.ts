export const validatePassword = (password: string): string[] => {
    const missing: string[] = [];
  
    if (password.length < 8) {
      return ["Password must be at least 8 characters long."];
    }
    if (!/[A-Z]/.test(password)) missing.push("one uppercase letter");
    if (!/[a-z]/.test(password)) missing.push("one lowercase letter");
    if (!/\d/.test(password)) missing.push("one number");
    if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?`~]/.test(password)) {
      missing.push("one special character");
    }
  
    return missing.length > 0
      ? [`Password must contain: ${missing.join(", ")}.`]
      : [];
  };
  
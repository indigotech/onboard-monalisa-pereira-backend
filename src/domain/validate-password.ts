export function validatePassword(value: string): boolean {
    return value.length < 7 || !(/[a-zA-Z]/g.test(value) && /\d/g.test(value));
  }

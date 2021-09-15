export function validatePassword(value: string): boolean {
  console.log("validando password")
    return value.length < 7 || !(/[a-zA-Z]/g.test(value) && /\d/g.test(value));
  }
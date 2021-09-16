export function validatePassword(password: string): boolean {
  return password.search(/\d/) !== -1 && password.search(/[a-zA-Z]/) !== -1 && password.length >= 7;
}

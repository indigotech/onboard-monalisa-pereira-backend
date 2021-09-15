export function validatePassword(password: string): boolean {
  console.log("Validando senha...")
  return password.search(/\d/) !== -1 && password.search(/[a-zA-Z]/) !== -1 && password.length >= 7;
}

import * as crypto from "crypto";

export class CryptoService {
  static encode(value: string): string {
    return crypto.createHash("sha256").update(value).digest("base64");
  }
}

// export function CryptoService(value: string): string {
//     return crypto
//       .createHash('sha256')
//       .update(value)
//       .digest('base64');
//   }
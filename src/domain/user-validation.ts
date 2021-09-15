import { User } from "../entity/User";
import { UserResponse } from "../schema/typedefs";
import { getRepository } from "typeorm";
import { validatePassword } from "./password-validation";
import { AuthError, ErrorMessage } from "../error-message";

export async function validateUser(user: UserResponse): Promise<void> {
  const { password, email } = user;

  const validPassword = validatePassword(password);

  if (!validPassword) {
    throw new AuthError(ErrorMessage.password);
  }
  const repository = getRepository(User);

  const hasAnotherUser = await repository.findOne({ email });
  if (hasAnotherUser) {
    throw new AuthError(ErrorMessage.email);
  }
}
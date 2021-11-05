import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    // Complete aqui

    const UserExists = this.usersRepository.findByEmail(email);

    if (UserExists)
      throw new Error(
        JSON.stringify({ status: 400, message: "user already exists" })
      );

    const User = this.usersRepository.create({ email, name });

    return User;
  }
}

export { CreateUserUseCase };

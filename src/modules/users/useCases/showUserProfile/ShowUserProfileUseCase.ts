import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const UserExists = this.usersRepository.findById(user_id);

    if (UserExists)
      throw new Error(
        JSON.stringify({ status: 404, message: "User Not found" })
      );

    return UserExists;
  }
}

export { ShowUserProfileUseCase };

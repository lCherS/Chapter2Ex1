import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const UserExists = this.usersRepository.findById(user_id);

    if (UserExists)
      throw new Error(JSON.stringify({ status: 404, message: "ID invalid!" }));

    const NewAdmin = this.usersRepository.turnAdmin(UserExists);

    return NewAdmin;
  }
}

export { TurnUserAdminUseCase };

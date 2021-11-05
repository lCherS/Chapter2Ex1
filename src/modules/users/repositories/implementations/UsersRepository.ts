import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    // Complete aqui
    const NewUser = new User();

    Object.assign(NewUser, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    });
    this.users.push(NewUser);

    return NewUser;
  }

  findById(id: string): User | undefined {
    // Complete aqui
    const UserExists = this.users.find((u) => u.id === id);

    return UserExists;
  }

  findByEmail(email: string): User | undefined {
    // Complete aqui
    const UserExists = this.users.find((u) => u.email === email);

    return UserExists;
  }

  turnAdmin(receivedUser: User): User {
    // Complete aqui

    const user = this.users.find((u) => u.id === receivedUser.id);

    user.admin = true;
    user.updated_at = new Date();

    return user;
  }

  list(): User[] {
    // Complete aqui
    return this.users;
  }
}

export { UsersRepository };

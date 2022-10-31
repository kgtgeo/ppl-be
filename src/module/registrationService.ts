import { RegistrationRepository } from "../repository/registrationRepository";

export class RegistrationService {
  registrationRepository: RegistrationRepository;

  constructor(registrationRepository: RegistrationRepository) {
    this.registrationRepository = registrationRepository;
  }

  async RegisterUser(user: {
    name: string;
    username: string;
    email: string;
    password: string;
  }) {
    if (
      user.name === "" ||
      user.name === undefined ||
      user.email === "" ||
      user.email === undefined ||
      user.password === undefined ||
      user.password === ""
    ) {
      throw Error("bad request");
    }
    await this.registrationRepository
      .CreateUser({
        name: user.name,
        username: user.username,
        email: user.email,
        password: user.password,
      })
      .catch((err: Error) => {
        throw err;
      });
  }
}

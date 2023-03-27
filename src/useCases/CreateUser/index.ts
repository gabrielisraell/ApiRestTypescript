import { MailtrapMailProvider } from './../../providers/implementations/MailtrapMailProvider';
import { CreateUserController } from './CreateUserController';
import { PostgresUsersRepository } from '../../repositories/implementations/PostgresUsersRepository';

import { CreateUserUseCase } from './CreateUserUseCase';

const mailtrapMailProvider = new MailtrapMailProvider()
const postgresUsersRepository = new PostgresUsersRepository()

const createUserUseCase = new CreateUserUseCase(
    postgresUsersRepository,
    mailtrapMailProvider,
)

const createUserController = new  CreateUserController(
    createUserUseCase
)

export { createUserController, createUserUseCase }
import { Brand } from 'utility-types';
import { Either } from 'monet';

export type Email = Brand<string, 'email'>;

export type Password = Brand<string, 'password'>;

export type AuthToken = Brand<string, 'auth-token'>;

export type Id = Brand<string, 'id'>;

export type Error = Brand<string, 'err'>;

export type WorkOrder = {
    id: Id;
    name: string;
};

export type LogIn = (email: Email, password: Password) => Promise<Either<Error, AuthToken>>;

export type AddWorkOrder = (token: AuthToken, data: Omit<WorkOrder, 'id'>) => Promise<Either<Error, WorkOrder>>;

export type ListWorkOrders = (token: AuthToken) => Promise<Either<Error, WorkOrder[]>>;

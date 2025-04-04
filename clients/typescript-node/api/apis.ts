export * from './authenticationApi';
import { AuthenticationApi } from './authenticationApi';
export * from './escrowWalletsApi';
import { EscrowWalletsApi } from './escrowWalletsApi';
export * from './testApi';
import { TestApi } from './testApi';
export * from './transactionApi';
import { TransactionApi } from './transactionApi';
export * from './transactionExecutionApi';
import { TransactionExecutionApi } from './transactionExecutionApi';
export * from './updateApi';
import { UpdateApi } from './updateApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AuthenticationApi, EscrowWalletsApi, TestApi, TransactionApi, TransactionExecutionApi, UpdateApi];

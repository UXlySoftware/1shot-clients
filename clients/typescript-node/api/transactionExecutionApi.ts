/**
 * M2M Gateway API
 * The M2M Gateway API is for communication by 3rd party servers for automated tasks in the Framework
 *
 * The version of the OpenAPI document: 0.1
 * Contact: support@uxly.software
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { BusinessBusinessIdTransactionsExecutionsGet200Response } from '../model/businessBusinessIdTransactionsExecutionsGet200Response';
import { TransactionExecution } from '../model/transactionExecution';
import { TransactionsTransactionIdTestPostRequest } from '../model/transactionsTransactionIdTestPostRequest';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.1shotapi.dev/v0';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum TransactionExecutionApiApiKeys {
}

export class TransactionExecutionApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'OAuth2ClientCredentials': new OAuth(),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: TransactionExecutionApiApiKeys, value: string) {
        (this.authentications as any)[TransactionExecutionApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.OAuth2ClientCredentials.accessToken = token;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Gets a paged list of transaction executions.
     * @param businessId The business that you want transactions from
     * @param pageSize 
     * @param page 
     * @param chainId 
     * @param status 
     * @param escrowWalletId 
     * @param transactionId 
     * @param apiCredentialId 
     * @param userId 
     */
    public async businessBusinessIdTransactionsExecutionsGet (businessId: string, pageSize?: number, page?: number, chainId?: string, status?: 0 | 1 | 2 | 3, escrowWalletId?: string, transactionId?: string, apiCredentialId?: string, userId?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: BusinessBusinessIdTransactionsExecutionsGet200Response;  }> {
        const localVarPath = this.basePath + '/business/{businessId}/transactions/executions'
            .replace('{' + 'businessId' + '}', encodeURIComponent(String(businessId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'businessId' is not null or undefined
        if (businessId === null || businessId === undefined) {
            throw new Error('Required parameter businessId was null or undefined when calling businessBusinessIdTransactionsExecutionsGet.');
        }

        if (pageSize !== undefined) {
            localVarQueryParameters['pageSize'] = ObjectSerializer.serialize(pageSize, "number");
        }

        if (page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(page, "number");
        }

        if (chainId !== undefined) {
            localVarQueryParameters['chainId'] = ObjectSerializer.serialize(chainId, "string");
        }

        if (status !== undefined) {
            localVarQueryParameters['status'] = ObjectSerializer.serialize(status, "0 | 1 | 2 | 3");
        }

        if (escrowWalletId !== undefined) {
            localVarQueryParameters['escrowWalletId'] = ObjectSerializer.serialize(escrowWalletId, "string");
        }

        if (transactionId !== undefined) {
            localVarQueryParameters['transactionId'] = ObjectSerializer.serialize(transactionId, "string");
        }

        if (apiCredentialId !== undefined) {
            localVarQueryParameters['apiCredentialId'] = ObjectSerializer.serialize(apiCredentialId, "string");
        }

        if (userId !== undefined) {
            localVarQueryParameters['userId'] = ObjectSerializer.serialize(userId, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.OAuth2ClientCredentials.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.OAuth2ClientCredentials.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: BusinessBusinessIdTransactionsExecutionsGet200Response;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "BusinessBusinessIdTransactionsExecutionsGet200Response");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Starts the execution of the transaction
     * @param transactionId 
     * @param transactionsTransactionIdTestPostRequest 
     */
    public async transactionsTransactionIdExecutePost (transactionId: string, transactionsTransactionIdTestPostRequest: TransactionsTransactionIdTestPostRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: TransactionExecution;  }> {
        const localVarPath = this.basePath + '/transactions/{transactionId}/execute'
            .replace('{' + 'transactionId' + '}', encodeURIComponent(String(transactionId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'transactionId' is not null or undefined
        if (transactionId === null || transactionId === undefined) {
            throw new Error('Required parameter transactionId was null or undefined when calling transactionsTransactionIdExecutePost.');
        }

        // verify required parameter 'transactionsTransactionIdTestPostRequest' is not null or undefined
        if (transactionsTransactionIdTestPostRequest === null || transactionsTransactionIdTestPostRequest === undefined) {
            throw new Error('Required parameter transactionsTransactionIdTestPostRequest was null or undefined when calling transactionsTransactionIdExecutePost.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(transactionsTransactionIdTestPostRequest, "TransactionsTransactionIdTestPostRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.OAuth2ClientCredentials.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.OAuth2ClientCredentials.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: TransactionExecution;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "TransactionExecution");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Gets all the executions of the transaction
     * @param transactionId The transaction that you want
     * @param transactionExecutionId The transaction execution that you want
     */
    public async transactionsTransactionIdExecutionsTransactionExecutionIdGet (transactionId: string, transactionExecutionId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: TransactionExecution;  }> {
        const localVarPath = this.basePath + '/transactions/{transactionId}/executions/{transactionExecutionId}'
            .replace('{' + 'transactionId' + '}', encodeURIComponent(String(transactionId)))
            .replace('{' + 'transactionExecutionId' + '}', encodeURIComponent(String(transactionExecutionId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'transactionId' is not null or undefined
        if (transactionId === null || transactionId === undefined) {
            throw new Error('Required parameter transactionId was null or undefined when calling transactionsTransactionIdExecutionsTransactionExecutionIdGet.');
        }

        // verify required parameter 'transactionExecutionId' is not null or undefined
        if (transactionExecutionId === null || transactionExecutionId === undefined) {
            throw new Error('Required parameter transactionExecutionId was null or undefined when calling transactionsTransactionIdExecutionsTransactionExecutionIdGet.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.OAuth2ClientCredentials.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.OAuth2ClientCredentials.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: TransactionExecution;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "TransactionExecution");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Simulates the execution of a transaction
     * @param transactionId 
     * @param transactionsTransactionIdTestPostRequest 
     */
    public async transactionsTransactionIdTestPost (transactionId: string, transactionsTransactionIdTestPostRequest: TransactionsTransactionIdTestPostRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: TransactionExecution;  }> {
        const localVarPath = this.basePath + '/transactions/{transactionId}/test'
            .replace('{' + 'transactionId' + '}', encodeURIComponent(String(transactionId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'transactionId' is not null or undefined
        if (transactionId === null || transactionId === undefined) {
            throw new Error('Required parameter transactionId was null or undefined when calling transactionsTransactionIdTestPost.');
        }

        // verify required parameter 'transactionsTransactionIdTestPostRequest' is not null or undefined
        if (transactionsTransactionIdTestPostRequest === null || transactionsTransactionIdTestPostRequest === undefined) {
            throw new Error('Required parameter transactionsTransactionIdTestPostRequest was null or undefined when calling transactionsTransactionIdTestPost.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(transactionsTransactionIdTestPostRequest, "TransactionsTransactionIdTestPostRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.OAuth2ClientCredentials.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.OAuth2ClientCredentials.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: TransactionExecution;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "TransactionExecution");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}

import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { CashOutOrangeRequest } from '../models/CashOutOrangeRequest';
import { CashOutResponse } from '../models/CashOutResponse';
import { CashOutWaveRequest } from '../models/CashOutWaveRequest';
import { DeleteTransactionRequest } from '../models/DeleteTransactionRequest';
import { DeleteTransactionResponse } from '../models/DeleteTransactionResponse';
import { GetAccountResponse } from '../models/GetAccountResponse';
import { GetAllTransaction } from '../models/GetAllTransaction';
import { GetOneTransaction } from '../models/GetOneTransaction';
import { HTTPValidationError } from '../models/HTTPValidationError';
import { ProductModel } from '../models/ProductModel';
import { TransactionRequest } from '../models/TransactionRequest';
import { TransactionResponse } from '../models/TransactionResponse';
import { TransactionStatusEnum } from '../models/TransactionStatusEnum';
import { ValidationError } from '../models/ValidationError';
import { ValidationErrorLocInner } from '../models/ValidationErrorLocInner';
import { Wallet } from '../models/Wallet';

import { AccountServiceRequestFactory, AccountServiceResponseProcessor} from "../apis/AccountService";
export class ObservableAccountService {
    private requestFactory: AccountServiceRequestFactory;
    private responseProcessor: AccountServiceResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountServiceRequestFactory,
        responseProcessor?: AccountServiceResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AccountServiceRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AccountServiceResponseProcessor();
    }

    /**
     * Get Account Information
     */
    public getAccountInformationAccountGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<GetAccountResponse>> {
        const requestContextPromise = this.requestFactory.getAccountInformationAccountGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAccountInformationAccountGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Account Information
     */
    public getAccountInformationAccountGet(_options?: Configuration): Observable<GetAccountResponse> {
        return this.getAccountInformationAccountGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<GetAccountResponse>) => apiResponse.data));
    }

}

import { CashoutServiceRequestFactory, CashoutServiceResponseProcessor} from "../apis/CashoutService";
export class ObservableCashoutService {
    private requestFactory: CashoutServiceRequestFactory;
    private responseProcessor: CashoutServiceResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CashoutServiceRequestFactory,
        responseProcessor?: CashoutServiceResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CashoutServiceRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CashoutServiceResponseProcessor();
    }

    /**
     * This endpoint enables a user to withdraw funds from their NabooPay account to their Orange Money account. Authentication is required, and users with the \'dev\' role are not permitted to perform this operation. The amount to be withdrawn must be positive and within the user\'s available balance. The user\'s account must be active and registered in the system. After validation, the user\'s account balance is adjusted accordingly, and the transaction is logged for record-keeping.
     * Cash Out Orange Money
     * @param cashOutOrangeRequest
     */
    public cashOutOrangeMoneyCashoutOrangeMoneyPostWithHttpInfo(cashOutOrangeRequest: CashOutOrangeRequest, _options?: Configuration): Observable<HttpInfo<CashOutResponse>> {
        const requestContextPromise = this.requestFactory.cashOutOrangeMoneyCashoutOrangeMoneyPost(cashOutOrangeRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cashOutOrangeMoneyCashoutOrangeMoneyPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint enables a user to withdraw funds from their NabooPay account to their Orange Money account. Authentication is required, and users with the \'dev\' role are not permitted to perform this operation. The amount to be withdrawn must be positive and within the user\'s available balance. The user\'s account must be active and registered in the system. After validation, the user\'s account balance is adjusted accordingly, and the transaction is logged for record-keeping.
     * Cash Out Orange Money
     * @param cashOutOrangeRequest
     */
    public cashOutOrangeMoneyCashoutOrangeMoneyPost(cashOutOrangeRequest: CashOutOrangeRequest, _options?: Configuration): Observable<CashOutResponse> {
        return this.cashOutOrangeMoneyCashoutOrangeMoneyPostWithHttpInfo(cashOutOrangeRequest, _options).pipe(map((apiResponse: HttpInfo<CashOutResponse>) => apiResponse.data));
    }

    /**
     * This endpoint allows a user to withdraw funds from their NabooPay account to their Wave account. The user must be authenticated and not possess the \'dev\' role. The withdrawal amount must be greater than 10 and not exceed the user\'s account balance. The user\'s account must exist and be active. Upon successful validation, the system updates the user\'s account balance and records the transaction for tracking purposes.
     * Cash Out Wave
     * @param cashOutWaveRequest
     */
    public cashOutWaveCashoutWavePostWithHttpInfo(cashOutWaveRequest: CashOutWaveRequest, _options?: Configuration): Observable<HttpInfo<CashOutResponse>> {
        const requestContextPromise = this.requestFactory.cashOutWaveCashoutWavePost(cashOutWaveRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cashOutWaveCashoutWavePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint allows a user to withdraw funds from their NabooPay account to their Wave account. The user must be authenticated and not possess the \'dev\' role. The withdrawal amount must be greater than 10 and not exceed the user\'s account balance. The user\'s account must exist and be active. Upon successful validation, the system updates the user\'s account balance and records the transaction for tracking purposes.
     * Cash Out Wave
     * @param cashOutWaveRequest
     */
    public cashOutWaveCashoutWavePost(cashOutWaveRequest: CashOutWaveRequest, _options?: Configuration): Observable<CashOutResponse> {
        return this.cashOutWaveCashoutWavePostWithHttpInfo(cashOutWaveRequest, _options).pipe(map((apiResponse: HttpInfo<CashOutResponse>) => apiResponse.data));
    }

}

import { TransactionServiceRequestFactory, TransactionServiceResponseProcessor} from "../apis/TransactionService";
export class ObservableTransactionService {
    private requestFactory: TransactionServiceRequestFactory;
    private responseProcessor: TransactionServiceResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TransactionServiceRequestFactory,
        responseProcessor?: TransactionServiceResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TransactionServiceRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TransactionServiceResponseProcessor();
    }

    /**
     * This endpoint allows authenticated users to create a transaction by submitting a request with the necessary details. The endpoint ensures that the user\'s access level permits transaction creation and enforces a rate limit of 30 requests. It checks that the number of products is within the allowed range (1-20) and calculates the total transaction amount, applying a 20% charge for escrow transactions. It also verifies that the total amount does not exceed a specific threshold (2,000,000). The user\'s IP address and browser information are logged, and the transaction details are saved with relevant metadata, including a unique order ID and the associated account state. If any conditions are not met, appropriate error messages are returned.
     * Create Transaction
     * @param transactionRequest
     */
    public createTransactionTransactionCreateTransactionPostWithHttpInfo(transactionRequest: TransactionRequest, _options?: Configuration): Observable<HttpInfo<TransactionResponse>> {
        const requestContextPromise = this.requestFactory.createTransactionTransactionCreateTransactionPost(transactionRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTransactionTransactionCreateTransactionPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint allows authenticated users to create a transaction by submitting a request with the necessary details. The endpoint ensures that the user\'s access level permits transaction creation and enforces a rate limit of 30 requests. It checks that the number of products is within the allowed range (1-20) and calculates the total transaction amount, applying a 20% charge for escrow transactions. It also verifies that the total amount does not exceed a specific threshold (2,000,000). The user\'s IP address and browser information are logged, and the transaction details are saved with relevant metadata, including a unique order ID and the associated account state. If any conditions are not met, appropriate error messages are returned.
     * Create Transaction
     * @param transactionRequest
     */
    public createTransactionTransactionCreateTransactionPost(transactionRequest: TransactionRequest, _options?: Configuration): Observable<TransactionResponse> {
        return this.createTransactionTransactionCreateTransactionPostWithHttpInfo(transactionRequest, _options).pipe(map((apiResponse: HttpInfo<TransactionResponse>) => apiResponse.data));
    }

    /**
     * This endpoint allows authenticated users to delete a transaction by submitting a request with the necessary details. The endpoint checks the user\'s access level to ensure they have permission to delete transactions and enforces a rate limit of 30 requests. It verifies that the transaction belongs to the user and has not already been deleted or withdrawn. If the transaction is paid and has a payment reference, it processes refunds and updates the user\'s account balance accordingly.
     * Delete Transaction
     * @param deleteTransactionRequest
     */
    public deleteTransactionTransactionDeleteTransactionDeleteWithHttpInfo(deleteTransactionRequest: DeleteTransactionRequest, _options?: Configuration): Observable<HttpInfo<DeleteTransactionResponse>> {
        const requestContextPromise = this.requestFactory.deleteTransactionTransactionDeleteTransactionDelete(deleteTransactionRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTransactionTransactionDeleteTransactionDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint allows authenticated users to delete a transaction by submitting a request with the necessary details. The endpoint checks the user\'s access level to ensure they have permission to delete transactions and enforces a rate limit of 30 requests. It verifies that the transaction belongs to the user and has not already been deleted or withdrawn. If the transaction is paid and has a payment reference, it processes refunds and updates the user\'s account balance accordingly.
     * Delete Transaction
     * @param deleteTransactionRequest
     */
    public deleteTransactionTransactionDeleteTransactionDelete(deleteTransactionRequest: DeleteTransactionRequest, _options?: Configuration): Observable<DeleteTransactionResponse> {
        return this.deleteTransactionTransactionDeleteTransactionDeleteWithHttpInfo(deleteTransactionRequest, _options).pipe(map((apiResponse: HttpInfo<DeleteTransactionResponse>) => apiResponse.data));
    }

    /**
     * This endpoint allows authenticated users to retrieve the details of a specific transaction using the order ID. The endpoint ensures the user has read access and enforces a rate limit of 30 requests. It checks if the transaction exists in the database and if the user has the appropriate access rights,then provides a checkout URL for the transaction and others informations
     * Get One Transaction
     * @param orderId
     */
    public getOneTransactionTransactionGetOneTransactionGetWithHttpInfo(orderId: string, _options?: Configuration): Observable<HttpInfo<GetOneTransaction>> {
        const requestContextPromise = this.requestFactory.getOneTransactionTransactionGetOneTransactionGet(orderId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOneTransactionTransactionGetOneTransactionGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint allows authenticated users to retrieve the details of a specific transaction using the order ID. The endpoint ensures the user has read access and enforces a rate limit of 30 requests. It checks if the transaction exists in the database and if the user has the appropriate access rights,then provides a checkout URL for the transaction and others informations
     * Get One Transaction
     * @param orderId
     */
    public getOneTransactionTransactionGetOneTransactionGet(orderId: string, _options?: Configuration): Observable<GetOneTransaction> {
        return this.getOneTransactionTransactionGetOneTransactionGetWithHttpInfo(orderId, _options).pipe(map((apiResponse: HttpInfo<GetOneTransaction>) => apiResponse.data));
    }

    /**
     * This endpoint allows authenticated users to retrieve a list of their visible transactions, up to a maximum of 50. The endpoint enforces a rate limit of 30 requests and ensures the user has read access.
     * Get Transactions
     */
    public getTransactionsTransactionGetTransactionsGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<GetAllTransaction>> {
        const requestContextPromise = this.requestFactory.getTransactionsTransactionGetTransactionsGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTransactionsTransactionGetTransactionsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint allows authenticated users to retrieve a list of their visible transactions, up to a maximum of 50. The endpoint enforces a rate limit of 30 requests and ensures the user has read access.
     * Get Transactions
     */
    public getTransactionsTransactionGetTransactionsGet(_options?: Configuration): Observable<GetAllTransaction> {
        return this.getTransactionsTransactionGetTransactionsGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<GetAllTransaction>) => apiResponse.data));
    }

}

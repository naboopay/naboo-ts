import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

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
import { ObservableAccountService } from './ObservableAPI';

import { AccountServiceRequestFactory, AccountServiceResponseProcessor} from "../apis/AccountService";
export class PromiseAccountService {
    private api: ObservableAccountService

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountServiceRequestFactory,
        responseProcessor?: AccountServiceResponseProcessor
    ) {
        this.api = new ObservableAccountService(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get Account Information
     */
    public getAccountInformationAccountGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<GetAccountResponse>> {
        const result = this.api.getAccountInformationAccountGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get Account Information
     */
    public getAccountInformationAccountGet(_options?: Configuration): Promise<GetAccountResponse> {
        const result = this.api.getAccountInformationAccountGet(_options);
        return result.toPromise();
    }


}



import { ObservableCashoutService } from './ObservableAPI';

import { CashoutServiceRequestFactory, CashoutServiceResponseProcessor} from "../apis/CashoutService";
export class PromiseCashoutService {
    private api: ObservableCashoutService

    public constructor(
        configuration: Configuration,
        requestFactory?: CashoutServiceRequestFactory,
        responseProcessor?: CashoutServiceResponseProcessor
    ) {
        this.api = new ObservableCashoutService(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint enables a user to withdraw funds from their NabooPay account to their Orange Money account. Authentication is required, and users with the \'dev\' role are not permitted to perform this operation. The amount to be withdrawn must be positive and within the user\'s available balance. The user\'s account must be active and registered in the system. After validation, the user\'s account balance is adjusted accordingly, and the transaction is logged for record-keeping.
     * Cash Out Orange Money
     * @param cashOutOrangeRequest
     */
    public cashOutOrangeMoneyCashoutOrangeMoneyPostWithHttpInfo(cashOutOrangeRequest: CashOutOrangeRequest, _options?: Configuration): Promise<HttpInfo<CashOutResponse>> {
        const result = this.api.cashOutOrangeMoneyCashoutOrangeMoneyPostWithHttpInfo(cashOutOrangeRequest, _options);
        return result.toPromise();
    }

    /**
     * This endpoint enables a user to withdraw funds from their NabooPay account to their Orange Money account. Authentication is required, and users with the \'dev\' role are not permitted to perform this operation. The amount to be withdrawn must be positive and within the user\'s available balance. The user\'s account must be active and registered in the system. After validation, the user\'s account balance is adjusted accordingly, and the transaction is logged for record-keeping.
     * Cash Out Orange Money
     * @param cashOutOrangeRequest
     */
    public cashOutOrangeMoneyCashoutOrangeMoneyPost(cashOutOrangeRequest: CashOutOrangeRequest, _options?: Configuration): Promise<CashOutResponse> {
        const result = this.api.cashOutOrangeMoneyCashoutOrangeMoneyPost(cashOutOrangeRequest, _options);
        return result.toPromise();
    }

    /**
     * This endpoint allows a user to withdraw funds from their NabooPay account to their Wave account. The user must be authenticated and not possess the \'dev\' role. The withdrawal amount must be greater than 10 and not exceed the user\'s account balance. The user\'s account must exist and be active. Upon successful validation, the system updates the user\'s account balance and records the transaction for tracking purposes.
     * Cash Out Wave
     * @param cashOutWaveRequest
     */
    public cashOutWaveCashoutWavePostWithHttpInfo(cashOutWaveRequest: CashOutWaveRequest, _options?: Configuration): Promise<HttpInfo<CashOutResponse>> {
        const result = this.api.cashOutWaveCashoutWavePostWithHttpInfo(cashOutWaveRequest, _options);
        return result.toPromise();
    }

    /**
     * This endpoint allows a user to withdraw funds from their NabooPay account to their Wave account. The user must be authenticated and not possess the \'dev\' role. The withdrawal amount must be greater than 10 and not exceed the user\'s account balance. The user\'s account must exist and be active. Upon successful validation, the system updates the user\'s account balance and records the transaction for tracking purposes.
     * Cash Out Wave
     * @param cashOutWaveRequest
     */
    public cashOutWaveCashoutWavePost(cashOutWaveRequest: CashOutWaveRequest, _options?: Configuration): Promise<CashOutResponse> {
        const result = this.api.cashOutWaveCashoutWavePost(cashOutWaveRequest, _options);
        return result.toPromise();
    }


}



import { ObservableTransactionService } from './ObservableAPI';

import { TransactionServiceRequestFactory, TransactionServiceResponseProcessor} from "../apis/TransactionService";
export class PromiseTransactionService {
    private api: ObservableTransactionService

    public constructor(
        configuration: Configuration,
        requestFactory?: TransactionServiceRequestFactory,
        responseProcessor?: TransactionServiceResponseProcessor
    ) {
        this.api = new ObservableTransactionService(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint allows authenticated users to create a transaction by submitting a request with the necessary details. The endpoint ensures that the user\'s access level permits transaction creation and enforces a rate limit of 30 requests. It checks that the number of products is within the allowed range (1-20) and calculates the total transaction amount, applying a 20% charge for escrow transactions. It also verifies that the total amount does not exceed a specific threshold (2,000,000). The user\'s IP address and browser information are logged, and the transaction details are saved with relevant metadata, including a unique order ID and the associated account state. If any conditions are not met, appropriate error messages are returned.
     * Create Transaction
     * @param transactionRequest
     */
    public createTransactionTransactionCreateTransactionPostWithHttpInfo(transactionRequest: TransactionRequest, _options?: Configuration): Promise<HttpInfo<TransactionResponse>> {
        const result = this.api.createTransactionTransactionCreateTransactionPostWithHttpInfo(transactionRequest, _options);
        return result.toPromise();
    }

    /**
     * This endpoint allows authenticated users to create a transaction by submitting a request with the necessary details. The endpoint ensures that the user\'s access level permits transaction creation and enforces a rate limit of 30 requests. It checks that the number of products is within the allowed range (1-20) and calculates the total transaction amount, applying a 20% charge for escrow transactions. It also verifies that the total amount does not exceed a specific threshold (2,000,000). The user\'s IP address and browser information are logged, and the transaction details are saved with relevant metadata, including a unique order ID and the associated account state. If any conditions are not met, appropriate error messages are returned.
     * Create Transaction
     * @param transactionRequest
     */
    public createTransactionTransactionCreateTransactionPost(transactionRequest: TransactionRequest, _options?: Configuration): Promise<TransactionResponse> {
        const result = this.api.createTransactionTransactionCreateTransactionPost(transactionRequest, _options);
        return result.toPromise();
    }

    /**
     * This endpoint allows authenticated users to delete a transaction by submitting a request with the necessary details. The endpoint checks the user\'s access level to ensure they have permission to delete transactions and enforces a rate limit of 30 requests. It verifies that the transaction belongs to the user and has not already been deleted or withdrawn. If the transaction is paid and has a payment reference, it processes refunds and updates the user\'s account balance accordingly.
     * Delete Transaction
     * @param deleteTransactionRequest
     */
    public deleteTransactionTransactionDeleteTransactionDeleteWithHttpInfo(deleteTransactionRequest: DeleteTransactionRequest, _options?: Configuration): Promise<HttpInfo<DeleteTransactionResponse>> {
        const result = this.api.deleteTransactionTransactionDeleteTransactionDeleteWithHttpInfo(deleteTransactionRequest, _options);
        return result.toPromise();
    }

    /**
     * This endpoint allows authenticated users to delete a transaction by submitting a request with the necessary details. The endpoint checks the user\'s access level to ensure they have permission to delete transactions and enforces a rate limit of 30 requests. It verifies that the transaction belongs to the user and has not already been deleted or withdrawn. If the transaction is paid and has a payment reference, it processes refunds and updates the user\'s account balance accordingly.
     * Delete Transaction
     * @param deleteTransactionRequest
     */
    public deleteTransactionTransactionDeleteTransactionDelete(deleteTransactionRequest: DeleteTransactionRequest, _options?: Configuration): Promise<DeleteTransactionResponse> {
        const result = this.api.deleteTransactionTransactionDeleteTransactionDelete(deleteTransactionRequest, _options);
        return result.toPromise();
    }

    /**
     * This endpoint allows authenticated users to retrieve the details of a specific transaction using the order ID. The endpoint ensures the user has read access and enforces a rate limit of 30 requests. It checks if the transaction exists in the database and if the user has the appropriate access rights,then provides a checkout URL for the transaction and others informations
     * Get One Transaction
     * @param orderId
     */
    public getOneTransactionTransactionGetOneTransactionGetWithHttpInfo(orderId: string, _options?: Configuration): Promise<HttpInfo<GetOneTransaction>> {
        const result = this.api.getOneTransactionTransactionGetOneTransactionGetWithHttpInfo(orderId, _options);
        return result.toPromise();
    }

    /**
     * This endpoint allows authenticated users to retrieve the details of a specific transaction using the order ID. The endpoint ensures the user has read access and enforces a rate limit of 30 requests. It checks if the transaction exists in the database and if the user has the appropriate access rights,then provides a checkout URL for the transaction and others informations
     * Get One Transaction
     * @param orderId
     */
    public getOneTransactionTransactionGetOneTransactionGet(orderId: string, _options?: Configuration): Promise<GetOneTransaction> {
        const result = this.api.getOneTransactionTransactionGetOneTransactionGet(orderId, _options);
        return result.toPromise();
    }

    /**
     * This endpoint allows authenticated users to retrieve a list of their visible transactions, up to a maximum of 50. The endpoint enforces a rate limit of 30 requests and ensures the user has read access.
     * Get Transactions
     */
    public getTransactionsTransactionGetTransactionsGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<GetAllTransaction>> {
        const result = this.api.getTransactionsTransactionGetTransactionsGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * This endpoint allows authenticated users to retrieve a list of their visible transactions, up to a maximum of 50. The endpoint enforces a rate limit of 30 requests and ensures the user has read access.
     * Get Transactions
     */
    public getTransactionsTransactionGetTransactionsGet(_options?: Configuration): Promise<GetAllTransaction> {
        const result = this.api.getTransactionsTransactionGetTransactionsGet(_options);
        return result.toPromise();
    }


}




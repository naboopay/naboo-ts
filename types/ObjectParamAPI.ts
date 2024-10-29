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

import { ObservableAccountService } from "./ObservableAPI";
import { AccountServiceRequestFactory, AccountServiceResponseProcessor} from "../apis/AccountService";

export interface AccountServiceGetAccountInformationAccountGetRequest {
}

export class ObjectAccountService {
    private api: ObservableAccountService

    public constructor(configuration: Configuration, requestFactory?: AccountServiceRequestFactory, responseProcessor?: AccountServiceResponseProcessor) {
        this.api = new ObservableAccountService(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get Account Information
     * @param param the request object
     */
    public getAccountInformationAccountGetWithHttpInfo(param: AccountServiceGetAccountInformationAccountGetRequest = {}, options?: Configuration): Promise<HttpInfo<GetAccountResponse>> {
        return this.api.getAccountInformationAccountGetWithHttpInfo( options).toPromise();
    }

    /**
     * Get Account Information
     * @param param the request object
     */
    public getAccountInformationAccountGet(param: AccountServiceGetAccountInformationAccountGetRequest = {}, options?: Configuration): Promise<GetAccountResponse> {
        return this.api.getAccountInformationAccountGet( options).toPromise();
    }

}

import { ObservableCashoutService } from "./ObservableAPI";
import { CashoutServiceRequestFactory, CashoutServiceResponseProcessor} from "../apis/CashoutService";

export interface CashoutServiceCashOutOrangeMoneyCashoutOrangeMoneyPostRequest {
    /**
     * 
     * @type CashOutOrangeRequest
     * @memberof CashoutServicecashOutOrangeMoneyCashoutOrangeMoneyPost
     */
    cashOutOrangeRequest: CashOutOrangeRequest
}

export interface CashoutServiceCashOutWaveCashoutWavePostRequest {
    /**
     * 
     * @type CashOutWaveRequest
     * @memberof CashoutServicecashOutWaveCashoutWavePost
     */
    cashOutWaveRequest: CashOutWaveRequest
}

export class ObjectCashoutService {
    private api: ObservableCashoutService

    public constructor(configuration: Configuration, requestFactory?: CashoutServiceRequestFactory, responseProcessor?: CashoutServiceResponseProcessor) {
        this.api = new ObservableCashoutService(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint enables a user to withdraw funds from their NabooPay account to their Orange Money account. Authentication is required, and users with the \'dev\' role are not permitted to perform this operation. The amount to be withdrawn must be positive and within the user\'s available balance. The user\'s account must be active and registered in the system. After validation, the user\'s account balance is adjusted accordingly, and the transaction is logged for record-keeping.
     * Cash Out Orange Money
     * @param param the request object
     */
    public cashOutOrangeMoneyCashoutOrangeMoneyPostWithHttpInfo(param: CashoutServiceCashOutOrangeMoneyCashoutOrangeMoneyPostRequest, options?: Configuration): Promise<HttpInfo<CashOutResponse>> {
        return this.api.cashOutOrangeMoneyCashoutOrangeMoneyPostWithHttpInfo(param.cashOutOrangeRequest,  options).toPromise();
    }

    /**
     * This endpoint enables a user to withdraw funds from their NabooPay account to their Orange Money account. Authentication is required, and users with the \'dev\' role are not permitted to perform this operation. The amount to be withdrawn must be positive and within the user\'s available balance. The user\'s account must be active and registered in the system. After validation, the user\'s account balance is adjusted accordingly, and the transaction is logged for record-keeping.
     * Cash Out Orange Money
     * @param param the request object
     */
    public cashOutOrangeMoneyCashoutOrangeMoneyPost(param: CashoutServiceCashOutOrangeMoneyCashoutOrangeMoneyPostRequest, options?: Configuration): Promise<CashOutResponse> {
        return this.api.cashOutOrangeMoneyCashoutOrangeMoneyPost(param.cashOutOrangeRequest,  options).toPromise();
    }

    /**
     * This endpoint allows a user to withdraw funds from their NabooPay account to their Wave account. The user must be authenticated and not possess the \'dev\' role. The withdrawal amount must be greater than 10 and not exceed the user\'s account balance. The user\'s account must exist and be active. Upon successful validation, the system updates the user\'s account balance and records the transaction for tracking purposes.
     * Cash Out Wave
     * @param param the request object
     */
    public cashOutWaveCashoutWavePostWithHttpInfo(param: CashoutServiceCashOutWaveCashoutWavePostRequest, options?: Configuration): Promise<HttpInfo<CashOutResponse>> {
        return this.api.cashOutWaveCashoutWavePostWithHttpInfo(param.cashOutWaveRequest,  options).toPromise();
    }

    /**
     * This endpoint allows a user to withdraw funds from their NabooPay account to their Wave account. The user must be authenticated and not possess the \'dev\' role. The withdrawal amount must be greater than 10 and not exceed the user\'s account balance. The user\'s account must exist and be active. Upon successful validation, the system updates the user\'s account balance and records the transaction for tracking purposes.
     * Cash Out Wave
     * @param param the request object
     */
    public cashOutWaveCashoutWavePost(param: CashoutServiceCashOutWaveCashoutWavePostRequest, options?: Configuration): Promise<CashOutResponse> {
        return this.api.cashOutWaveCashoutWavePost(param.cashOutWaveRequest,  options).toPromise();
    }

}

import { ObservableTransactionService } from "./ObservableAPI";
import { TransactionServiceRequestFactory, TransactionServiceResponseProcessor} from "../apis/TransactionService";

export interface TransactionServiceCreateTransactionTransactionCreateTransactionPostRequest {
    /**
     * 
     * @type TransactionRequest
     * @memberof TransactionServicecreateTransactionTransactionCreateTransactionPost
     */
    transactionRequest: TransactionRequest
}

export interface TransactionServiceDeleteTransactionTransactionDeleteTransactionDeleteRequest {
    /**
     * 
     * @type DeleteTransactionRequest
     * @memberof TransactionServicedeleteTransactionTransactionDeleteTransactionDelete
     */
    deleteTransactionRequest: DeleteTransactionRequest
}

export interface TransactionServiceGetOneTransactionTransactionGetOneTransactionGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TransactionServicegetOneTransactionTransactionGetOneTransactionGet
     */
    orderId: string
}

export interface TransactionServiceGetTransactionsTransactionGetTransactionsGetRequest {
}

export class ObjectTransactionService {
    private api: ObservableTransactionService

    public constructor(configuration: Configuration, requestFactory?: TransactionServiceRequestFactory, responseProcessor?: TransactionServiceResponseProcessor) {
        this.api = new ObservableTransactionService(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint allows authenticated users to create a transaction by submitting a request with the necessary details. The endpoint ensures that the user\'s access level permits transaction creation and enforces a rate limit of 30 requests. It checks that the number of products is within the allowed range (1-20) and calculates the total transaction amount, applying a 20% charge for escrow transactions. It also verifies that the total amount does not exceed a specific threshold (2,000,000). The user\'s IP address and browser information are logged, and the transaction details are saved with relevant metadata, including a unique order ID and the associated account state. If any conditions are not met, appropriate error messages are returned.
     * Create Transaction
     * @param param the request object
     */
    public createTransactionTransactionCreateTransactionPostWithHttpInfo(param: TransactionServiceCreateTransactionTransactionCreateTransactionPostRequest, options?: Configuration): Promise<HttpInfo<TransactionResponse>> {
        return this.api.createTransactionTransactionCreateTransactionPostWithHttpInfo(param.transactionRequest,  options).toPromise();
    }

    /**
     * This endpoint allows authenticated users to create a transaction by submitting a request with the necessary details. The endpoint ensures that the user\'s access level permits transaction creation and enforces a rate limit of 30 requests. It checks that the number of products is within the allowed range (1-20) and calculates the total transaction amount, applying a 20% charge for escrow transactions. It also verifies that the total amount does not exceed a specific threshold (2,000,000). The user\'s IP address and browser information are logged, and the transaction details are saved with relevant metadata, including a unique order ID and the associated account state. If any conditions are not met, appropriate error messages are returned.
     * Create Transaction
     * @param param the request object
     */
    public createTransactionTransactionCreateTransactionPost(param: TransactionServiceCreateTransactionTransactionCreateTransactionPostRequest, options?: Configuration): Promise<TransactionResponse> {
        return this.api.createTransactionTransactionCreateTransactionPost(param.transactionRequest,  options).toPromise();
    }

    /**
     * This endpoint allows authenticated users to delete a transaction by submitting a request with the necessary details. The endpoint checks the user\'s access level to ensure they have permission to delete transactions and enforces a rate limit of 30 requests. It verifies that the transaction belongs to the user and has not already been deleted or withdrawn. If the transaction is paid and has a payment reference, it processes refunds and updates the user\'s account balance accordingly.
     * Delete Transaction
     * @param param the request object
     */
    public deleteTransactionTransactionDeleteTransactionDeleteWithHttpInfo(param: TransactionServiceDeleteTransactionTransactionDeleteTransactionDeleteRequest, options?: Configuration): Promise<HttpInfo<DeleteTransactionResponse>> {
        return this.api.deleteTransactionTransactionDeleteTransactionDeleteWithHttpInfo(param.deleteTransactionRequest,  options).toPromise();
    }

    /**
     * This endpoint allows authenticated users to delete a transaction by submitting a request with the necessary details. The endpoint checks the user\'s access level to ensure they have permission to delete transactions and enforces a rate limit of 30 requests. It verifies that the transaction belongs to the user and has not already been deleted or withdrawn. If the transaction is paid and has a payment reference, it processes refunds and updates the user\'s account balance accordingly.
     * Delete Transaction
     * @param param the request object
     */
    public deleteTransactionTransactionDeleteTransactionDelete(param: TransactionServiceDeleteTransactionTransactionDeleteTransactionDeleteRequest, options?: Configuration): Promise<DeleteTransactionResponse> {
        return this.api.deleteTransactionTransactionDeleteTransactionDelete(param.deleteTransactionRequest,  options).toPromise();
    }

    /**
     * This endpoint allows authenticated users to retrieve the details of a specific transaction using the order ID. The endpoint ensures the user has read access and enforces a rate limit of 30 requests. It checks if the transaction exists in the database and if the user has the appropriate access rights,then provides a checkout URL for the transaction and others informations
     * Get One Transaction
     * @param param the request object
     */
    public getOneTransactionTransactionGetOneTransactionGetWithHttpInfo(param: TransactionServiceGetOneTransactionTransactionGetOneTransactionGetRequest, options?: Configuration): Promise<HttpInfo<GetOneTransaction>> {
        return this.api.getOneTransactionTransactionGetOneTransactionGetWithHttpInfo(param.orderId,  options).toPromise();
    }

    /**
     * This endpoint allows authenticated users to retrieve the details of a specific transaction using the order ID. The endpoint ensures the user has read access and enforces a rate limit of 30 requests. It checks if the transaction exists in the database and if the user has the appropriate access rights,then provides a checkout URL for the transaction and others informations
     * Get One Transaction
     * @param param the request object
     */
    public getOneTransactionTransactionGetOneTransactionGet(param: TransactionServiceGetOneTransactionTransactionGetOneTransactionGetRequest, options?: Configuration): Promise<GetOneTransaction> {
        return this.api.getOneTransactionTransactionGetOneTransactionGet(param.orderId,  options).toPromise();
    }

    /**
     * This endpoint allows authenticated users to retrieve a list of their visible transactions, up to a maximum of 50. The endpoint enforces a rate limit of 30 requests and ensures the user has read access.
     * Get Transactions
     * @param param the request object
     */
    public getTransactionsTransactionGetTransactionsGetWithHttpInfo(param: TransactionServiceGetTransactionsTransactionGetTransactionsGetRequest = {}, options?: Configuration): Promise<HttpInfo<GetAllTransaction>> {
        return this.api.getTransactionsTransactionGetTransactionsGetWithHttpInfo( options).toPromise();
    }

    /**
     * This endpoint allows authenticated users to retrieve a list of their visible transactions, up to a maximum of 50. The endpoint enforces a rate limit of 30 requests and ensures the user has read access.
     * Get Transactions
     * @param param the request object
     */
    public getTransactionsTransactionGetTransactionsGet(param: TransactionServiceGetTransactionsTransactionGetTransactionsGetRequest = {}, options?: Configuration): Promise<GetAllTransaction> {
        return this.api.getTransactionsTransactionGetTransactionsGet( options).toPromise();
    }

}

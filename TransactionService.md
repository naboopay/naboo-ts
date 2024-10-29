# .TransactionService

All URIs are relative to */api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTransactionTransactionCreateTransactionPost**](TransactionService.md#createTransactionTransactionCreateTransactionPost) | **PUT** /transaction/create-transaction | Create Transaction
[**deleteTransactionTransactionDeleteTransactionDelete**](TransactionService.md#deleteTransactionTransactionDeleteTransactionDelete) | **DELETE** /transaction/delete-transaction | Delete Transaction
[**getOneTransactionTransactionGetOneTransactionGet**](TransactionService.md#getOneTransactionTransactionGetOneTransactionGet) | **GET** /transaction/get-one-transaction | Get One Transaction
[**getTransactionsTransactionGetTransactionsGet**](TransactionService.md#getTransactionsTransactionGetTransactionsGet) | **GET** /transaction/get-transactions | Get Transactions


# **createTransactionTransactionCreateTransactionPost**
> TransactionResponse createTransactionTransactionCreateTransactionPost(transactionRequest)

This endpoint allows authenticated users to create a transaction by submitting a request with the necessary details. The endpoint ensures that the user\'s access level permits transaction creation and enforces a rate limit of 30 requests. It checks that the number of products is within the allowed range (1-20) and calculates the total transaction amount, applying a 20% charge for escrow transactions. It also verifies that the total amount does not exceed a specific threshold (2,000,000). The user\'s IP address and browser information are logged, and the transaction details are saved with relevant metadata, including a unique order ID and the associated account state. If any conditions are not met, appropriate error messages are returned.

### Example


```typescript
import { createConfiguration, TransactionService } from '';
import type { TransactionServiceCreateTransactionTransactionCreateTransactionPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TransactionService(configuration);

const request: TransactionServiceCreateTransactionTransactionCreateTransactionPostRequest = {
  
  transactionRequest: {
    methodOfPayment: [
      "WAVE",
    ],
    products: [
      {
        name: "name_example",
        category: "category_example",
        amount: 1,
        quantity: 1,
        description: "description_example",
      },
    ],
    successUrl: "https://k",
    errorUrl: "https://k",
    isEscrow: false,
    isMerchant: false,
  },
};

const data = await apiInstance.createTransactionTransactionCreateTransactionPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionRequest** | **TransactionRequest**|  |


### Return type

**TransactionResponse**

### Authorization

[HTTPBearer](README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful. |  -  |
**400** | The request was invalid or malformed. |  -  |
**401** | The user is not authorized to make this request. |  -  |
**403** | The user does not have permission to access this resource. |  -  |
**404** | The requested resource could not be found. |  -  |
**500** | An unexpected internal server error occurred. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteTransactionTransactionDeleteTransactionDelete**
> DeleteTransactionResponse deleteTransactionTransactionDeleteTransactionDelete(deleteTransactionRequest)

This endpoint allows authenticated users to delete a transaction by submitting a request with the necessary details. The endpoint checks the user\'s access level to ensure they have permission to delete transactions and enforces a rate limit of 30 requests. It verifies that the transaction belongs to the user and has not already been deleted or withdrawn. If the transaction is paid and has a payment reference, it processes refunds and updates the user\'s account balance accordingly.

### Example


```typescript
import { createConfiguration, TransactionService } from '';
import type { TransactionServiceDeleteTransactionTransactionDeleteTransactionDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TransactionService(configuration);

const request: TransactionServiceDeleteTransactionTransactionDeleteTransactionDeleteRequest = {
  
  deleteTransactionRequest: {
    orderId: "orderId_example",
  },
};

const data = await apiInstance.deleteTransactionTransactionDeleteTransactionDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteTransactionRequest** | **DeleteTransactionRequest**|  |


### Return type

**DeleteTransactionResponse**

### Authorization

[HTTPBearer](README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful. |  -  |
**400** | The request was invalid or malformed. |  -  |
**401** | The user is not authorized to make this request. |  -  |
**403** | The user does not have permission to access this resource. |  -  |
**404** | The requested resource could not be found. |  -  |
**500** | An unexpected internal server error occurred. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOneTransactionTransactionGetOneTransactionGet**
> GetOneTransaction getOneTransactionTransactionGetOneTransactionGet()

This endpoint allows authenticated users to retrieve the details of a specific transaction using the order ID. The endpoint ensures the user has read access and enforces a rate limit of 30 requests. It checks if the transaction exists in the database and if the user has the appropriate access rights,then provides a checkout URL for the transaction and others informations

### Example


```typescript
import { createConfiguration, TransactionService } from '';
import type { TransactionServiceGetOneTransactionTransactionGetOneTransactionGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TransactionService(configuration);

const request: TransactionServiceGetOneTransactionTransactionGetOneTransactionGetRequest = {
  
  orderId: "order_id_example",
};

const data = await apiInstance.getOneTransactionTransactionGetOneTransactionGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | [**string**] |  | defaults to undefined


### Return type

**GetOneTransaction**

### Authorization

[HTTPBearer](README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful. |  -  |
**400** | The request was invalid or malformed. |  -  |
**401** | The user is not authorized to make this request. |  -  |
**403** | The user does not have permission to access this resource. |  -  |
**404** | The requested resource could not be found. |  -  |
**500** | An unexpected internal server error occurred. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTransactionsTransactionGetTransactionsGet**
> GetAllTransaction getTransactionsTransactionGetTransactionsGet()

This endpoint allows authenticated users to retrieve a list of their visible transactions, up to a maximum of 50. The endpoint enforces a rate limit of 30 requests and ensures the user has read access.

### Example


```typescript
import { createConfiguration, TransactionService } from '';

const configuration = createConfiguration();
const apiInstance = new TransactionService(configuration);

const request = {};

const data = await apiInstance.getTransactionsTransactionGetTransactionsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetAllTransaction**

### Authorization

[HTTPBearer](README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful. |  -  |
**400** | The request was invalid or malformed. |  -  |
**401** | The user is not authorized to make this request. |  -  |
**403** | The user does not have permission to access this resource. |  -  |
**404** | The requested resource could not be found. |  -  |
**500** | An unexpected internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)



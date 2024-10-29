# .CashoutService

All URIs are relative to */api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cashOutOrangeMoneyCashoutOrangeMoneyPost**](CashoutService.md#cashOutOrangeMoneyCashoutOrangeMoneyPost) | **POST** /cashout/orange-money | Cash Out Orange Money
[**cashOutWaveCashoutWavePost**](CashoutService.md#cashOutWaveCashoutWavePost) | **POST** /cashout/wave | Cash Out Wave


# **cashOutOrangeMoneyCashoutOrangeMoneyPost**
> CashOutResponse cashOutOrangeMoneyCashoutOrangeMoneyPost(cashOutOrangeRequest)

This endpoint enables a user to withdraw funds from their NabooPay account to their Orange Money account. Authentication is required, and users with the \'dev\' role are not permitted to perform this operation. The amount to be withdrawn must be positive and within the user\'s available balance. The user\'s account must be active and registered in the system. After validation, the user\'s account balance is adjusted accordingly, and the transaction is logged for record-keeping.

### Example


```typescript
import { createConfiguration, CashoutService } from '';
import type { CashoutServiceCashOutOrangeMoneyCashoutOrangeMoneyPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CashoutService(configuration);

const request: CashoutServiceCashOutOrangeMoneyCashoutOrangeMoneyPostRequest = {
  
  cashOutOrangeRequest: {
    fullName: "fullName_example",
    amount: 1,
    phoneNumber: "phoneNumber_example",
  },
};

const data = await apiInstance.cashOutOrangeMoneyCashoutOrangeMoneyPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cashOutOrangeRequest** | **CashOutOrangeRequest**|  |


### Return type

**CashOutResponse**

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

# **cashOutWaveCashoutWavePost**
> CashOutResponse cashOutWaveCashoutWavePost(cashOutWaveRequest)

This endpoint allows a user to withdraw funds from their NabooPay account to their Wave account. The user must be authenticated and not possess the \'dev\' role. The withdrawal amount must be greater than 10 and not exceed the user\'s account balance. The user\'s account must exist and be active. Upon successful validation, the system updates the user\'s account balance and records the transaction for tracking purposes.

### Example


```typescript
import { createConfiguration, CashoutService } from '';
import type { CashoutServiceCashOutWaveCashoutWavePostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CashoutService(configuration);

const request: CashoutServiceCashOutWaveCashoutWavePostRequest = {
  
  cashOutWaveRequest: {
    fullName: "fullName_example",
    amount: 1,
    phoneNumber: "phoneNumber_example",
  },
};

const data = await apiInstance.cashOutWaveCashoutWavePost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cashOutWaveRequest** | **CashOutWaveRequest**|  |


### Return type

**CashOutResponse**

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



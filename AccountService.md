# .AccountService

All URIs are relative to */api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountInformationAccountGet**](AccountService.md#getAccountInformationAccountGet) | **GET** /account/ | Get Account Information


# **getAccountInformationAccountGet**
> GetAccountResponse getAccountInformationAccountGet()


### Example


```typescript
import { createConfiguration, AccountService } from '';

const configuration = createConfiguration();
const apiInstance = new AccountService(configuration);

const request = {};

const data = await apiInstance.getAccountInformationAccountGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetAccountResponse**

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



package oneshot

import (
	"context"
	"encoding/json"

	swagger "github.com/UXlySoftware/1shot-clients/clients/go/gen"
	"github.com/antihax/optional"
)

// ContractMethods handles all contract method-related operations
type ContractMethods struct {
	api        *swagger.ContractMethodsApiService
	businessId string
}

// Execute executes a contract method
func (t *ContractMethods) Execute(
	ctx context.Context,
	contractMethodId string,
	params map[string]interface{},
	walletId, memo *string,
	authorizationList []swagger.Erc7702Authorization,
	value *string,
	contractAddress *string,
) (*swagger.Transaction, error) {
	body := swagger.ContractMethodIdExecuteBody{}
	if params != nil {
		jsonBytes, err := json.Marshal(params)
		if err != nil {
			return nil, err
		}
		var jsonValue swagger.JsonValue
		if err := json.Unmarshal(jsonBytes, &jsonValue); err != nil {
			return nil, err
		}
		body.Params = &jsonValue
	}
	if walletId != nil {
		body.WalletId = *walletId
	}
	if memo != nil {
		body.Memo = *memo
	}
	if authorizationList != nil {
		body.AuthorizationList = authorizationList
	}
	if value != nil {
		body.Value = *value
	}
	if contractAddress != nil {
		body.ContractAddress = *contractAddress
	}
	resp, _, err := t.api.MethodsContractMethodIdExecutePost(ctx, body, contractMethodId)
	if err != nil {
		return nil, err
	}
	return &resp, nil
}

// ExecuteAsDelegator executes a contract method as a delegator
func (t *ContractMethods) ExecuteAsDelegator(
	ctx context.Context,
	contractMethodId string,
	params map[string]interface{},
	walletId, memo *string,
	delegatorAddress string,
) (*swagger.Transaction, error) {
	body := swagger.ContractMethodIdExecuteAsDelegatorBody{
		DelegatorAddress: delegatorAddress,
	}
	if params != nil {
		jsonBytes, err := json.Marshal(params)
		if err != nil {
			return nil, err
		}
		var jsonValue swagger.JsonValue
		if err := json.Unmarshal(jsonBytes, &jsonValue); err != nil {
			return nil, err
		}
		body.Params = &jsonValue
	}
	if walletId != nil {
		body.WalletId = *walletId
	}
	if memo != nil {
		body.Memo = *memo
	}
	resp, _, err := t.api.MethodsContractMethodIdExecuteAsDelegatorPost(ctx, body, contractMethodId)
	if err != nil {
		return nil, err
	}
	return &resp, nil
}

// Test tests a contract method without executing it
func (t *ContractMethods) Test(ctx context.Context, contractMethodId string, params map[string]interface{}) (*swagger.ContractMethodTestResult, error) {
	body := swagger.ContractMethodIdTestBody{}
	if params != nil {
		jsonBytes, err := json.Marshal(params)
		if err != nil {
			return nil, err
		}
		var jsonValue swagger.JsonValue
		if err := json.Unmarshal(jsonBytes, &jsonValue); err != nil {
			return nil, err
		}
		body.Params = &jsonValue
	}
	resp, _, err := t.api.MethodsContractMethodIdTestPost(ctx, body, contractMethodId)
	if err != nil {
		return nil, err
	}
	return &resp, nil
}

// Encode encodes the transaction data for a contract method
func (t *ContractMethods) Encode(ctx context.Context, contractMethodId string, params map[string]interface{}) (*swagger.ContractMethodEncodeResult, error) {
	body := swagger.ContractMethodIdEncodeBody{}
	if params != nil {
		jsonBytes, err := json.Marshal(params)
		if err != nil {
			return nil, err
		}
		var jsonValue swagger.JsonValue
		if err := json.Unmarshal(jsonBytes, &jsonValue); err != nil {
			return nil, err
		}
		body.Params = &jsonValue
	}
	resp, _, err := t.api.MethodsContractMethodIdEncodePost(ctx, body, contractMethodId)
	if err != nil {
		return nil, err
	}
	return &resp, nil
}

// Get gets a contract method by ID
func (t *ContractMethods) Get(ctx context.Context, id string) (*swagger.ContractMethod, error) {
	resp, _, err := t.api.MethodsContractMethodIdGet(ctx, id)
	if err != nil {
		return nil, err
	}
	return &resp, nil
}

// List lists contract methods for a business
func (t *ContractMethods) List(
	ctx context.Context,
	pageSize, page *int32,
	chainId *swagger.EChain,
	name *string,
	status *swagger.EDeletedStatusSelector,
	contractAddress *string,
	promptId *string,
	methodType *string,
) ([]swagger.ContractMethod, error) {
	opts := &swagger.ContractMethodsApiBusinessBusinessIdMethodsGetOpts{}
	if pageSize != nil {
		opts.PageSize = optional.NewInterface(*pageSize)
	}
	if page != nil {
		opts.Page = optional.NewInterface(*page)
	}
	if chainId != nil {
		opts.ChainId = optional.NewInterface(*chainId)
	}
	if name != nil {
		opts.Name = optional.NewString(*name)
	}
	if status != nil {
		opts.Status = optional.NewInterface(*status)
	}
	if contractAddress != nil {
		opts.ContractAddress = optional.NewInterface(*contractAddress)
	}
	if promptId != nil {
		opts.PromptId = optional.NewInterface(*promptId)
	}
	if methodType != nil {
		opts.MethodType = optional.NewString(*methodType)
	}

	resp, _, err := t.api.BusinessBusinessIdMethodsGet(ctx, t.businessId, opts)
	if err != nil {
		return nil, err
	}
	return resp.Response, nil
}

// Estimate estimates the cost of executing a contract method
func (t *ContractMethods) Estimate(ctx context.Context, contractMethodId string, params map[string]interface{}) (*swagger.ContractMethodEstimate, error) {
	body := swagger.ContractMethodIdEstimateBody{}
	if params != nil {
		jsonBytes, err := json.Marshal(params)
		if err != nil {
			return nil, err
		}
		var jsonValue swagger.JsonValue
		if err := json.Unmarshal(jsonBytes, &jsonValue); err != nil {
			return nil, err
		}
		body.Params = &jsonValue
	}
	resp, _, err := t.api.MethodsContractMethodIdEstimatePost(ctx, body, contractMethodId)
	if err != nil {
		return nil, err
	}
	return &resp, nil
}

// Read reads the result of a view or pure function
func (t *ContractMethods) Read(ctx context.Context, contractMethodId string, params map[string]interface{}) (map[string]interface{}, error) {
	body := swagger.ContractMethodIdReadBody{}
	if params != nil {
		jsonBytes, err := json.Marshal(params)
		if err != nil {
			return nil, err
		}
		var jsonValue swagger.JsonValue
		if err := json.Unmarshal(jsonBytes, &jsonValue); err != nil {
			return nil, err
		}
		body.Params = &jsonValue
	}
	resp, _, err := t.api.MethodsContractMethodIdReadPost(ctx, body, contractMethodId)
	if err != nil {
		return nil, err
	}
	jsonBytes, err := json.Marshal(resp)
	if err != nil {
		return nil, err
	}
	var result map[string]interface{}
	if err := json.Unmarshal(jsonBytes, &result); err != nil {
		return nil, err
	}
	return result, nil
}

// Create creates a new contract method
func (t *ContractMethods) Create(
	ctx context.Context,
	chain swagger.EChain,
	contractAddress string,
	walletId string,
	name string,
	description string,
	functionName string,
	stateMutability swagger.ESolidityStateMutability,
	inputs []swagger.NewSolidityStructParam,
	outputs []swagger.NewSolidityStructParam,
	callbackUrl *string,
) (*swagger.ContractMethod, error) {
	body := swagger.BusinessIdMethodsBody{
		ChainId:         &chain,
		ContractAddress: contractAddress,
		WalletId:        walletId,
		Name:            name,
		Description:     description,
		FunctionName:    functionName,
		StateMutability: &stateMutability,
		Inputs:          inputs,
		Outputs:         outputs,
	}
	if callbackUrl != nil {
		body.CallbackUrl = *callbackUrl
	}
	resp, _, err := t.api.BusinessBusinessIdMethodsPost(ctx, body, t.businessId)
	if err != nil {
		return nil, err
	}
	return &resp, nil
}

// ImportFromABI imports contract methods from an ABI
func (t *ContractMethods) ImportFromABI(
	ctx context.Context,
	chain swagger.EChain,
	contractAddress string,
	walletId string,
	name string,
	description string,
	abi []swagger.OneOfEthereumAbiItems,
) ([]swagger.ContractMethod, error) {
	body := swagger.MethodsAbiBody{
		ChainId:         &chain,
		ContractAddress: contractAddress,
		WalletId:        walletId,
		Name:            name,
		Description:     description,
		Abi:             &abi,
	}
	resp, _, err := t.api.BusinessBusinessIdMethodsAbiPost(ctx, body, t.businessId)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// AssureFromPrompt assures that contract methods exist for a given prompt
func (t *ContractMethods) AssureFromPrompt(
	ctx context.Context,
	chain swagger.EChain,
	contractAddress string,
	walletId string,
	promptId *string,
) ([]swagger.ContractMethod, error) {
	body := swagger.MethodsPromptBody{
		ChainId:         &chain,
		ContractAddress: contractAddress,
		WalletId:        walletId,
	}
	if promptId != nil {
		body.PromptId = *promptId
	}
	resp, _, err := t.api.BusinessBusinessIdMethodsPromptPost(ctx, body, t.businessId)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// Update updates a contract method
func (t *ContractMethods) Update(
	ctx context.Context,
	contractMethodId string,
	chain *swagger.EChain,
	contractAddress, walletId, name, description, functionName, callbackUrl *string,
) (*swagger.ContractMethod, error) {
	body := swagger.MethodsContractMethodIdBody{}
	if chain != nil {
		body.ChainId = chain
	}
	if contractAddress != nil {
		body.ContractAddress = *contractAddress
	}
	if walletId != nil {
		body.WalletId = *walletId
	}
	if name != nil {
		body.Name = *name
	}
	if description != nil {
		body.Description = *description
	}
	if functionName != nil {
		body.FunctionName = *functionName
	}
	if callbackUrl != nil {
		body.CallbackUrl = *callbackUrl
	}
	resp, _, err := t.api.MethodsContractMethodIdPut(ctx, body, contractMethodId)
	if err != nil {
		return nil, err
	}
	return &resp, nil
}

// Delete deletes a contract method
func (t *ContractMethods) Delete(ctx context.Context, contractMethodId string) error {
	_, err := t.api.MethodsContractMethodIdDelete(ctx, contractMethodId)
	return err
}

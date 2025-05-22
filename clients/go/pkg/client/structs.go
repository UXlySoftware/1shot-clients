package client

import (
	"context"

	swagger "github.com/1shotapi/go-client/internal/generated"
)

// Structs handles all solidity struct-related operations
type Structs struct {
	api        *swagger.SolidityStructsApiService
	businessId string
}

// Update updates an existing solidity struct
func (s *Structs) Update(ctx context.Context, structId string, name string) (*swagger.SolidityStruct, error) {
	body := swagger.StructsStructIdBody{Name: name}
	resp, _, err := s.api.StructsStructIdPut(ctx, body, structId)
	if err != nil {
		return nil, err
	}
	return &resp, nil
}

// AddParam adds a parameter to an existing struct
func (s *Structs) AddParam(ctx context.Context, businessId, structId string, param swagger.NewSolidityStructParam) (*swagger.SolidityStruct, error) {
	resp, _, err := s.api.BusinessBusinessIdStructsStructIdParamsPost(ctx, param, businessId, structId)
	if err != nil {
		return nil, err
	}
	return &resp, nil
}

// UpdateParams updates multiple parameters of a struct
func (s *Structs) UpdateParams(ctx context.Context, businessId, structId string, updates []swagger.SolidityStructParamUpdate) (*swagger.SolidityStruct, error) {
	converted := make([]swagger.AllOfstructIdParamsBodyUpdatesItems, len(updates))
	for i, u := range updates {
		var typeStruct *swagger.Object
		if u.TypeStruct != nil {
			obj := swagger.Object{
				"name":   u.TypeStruct.Name,
				"params": u.TypeStruct.Params,
			}
			typeStruct = &obj
		}
		converted[i] = swagger.AllOfstructIdParamsBodyUpdatesItems{
			Id:           u.TypeStructId, // You may need to map the correct ID field here
			Name:         u.Name,
			Description:  u.Description,
			Type_:        u.Type_,
			Index:        u.Index,
			Value:        u.Value,
			TypeSize:     u.TypeSize,
			TypeSize2:    u.TypeSize2,
			IsArray:      u.IsArray,
			ArraySize:    u.ArraySize,
			TypeStructId: u.TypeStructId,
			TypeStruct:   typeStruct,
		}
	}
	body := swagger.StructIdParamsBody{Updates: converted}
	resp, _, err := s.api.BusinessBusinessIdStructsStructIdParamsPut(ctx, body, businessId, structId)
	if err != nil {
		return nil, err
	}
	return &resp, nil
}

// RemoveParam removes a parameter from a struct
func (s *Structs) RemoveParam(ctx context.Context, structId, structParamId string) (*swagger.SolidityStruct, error) {
	resp, _, err := s.api.StructsStructIdParamsStructParamIdDelete(ctx, structId, structParamId)
	if err != nil {
		return nil, err
	}
	return &resp, nil
}

package oneshot

import (
	"context"
	"fmt"

	swagger "github.com/UXlySoftware/1shot-clients/clients/go/gen"
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
func (s *Structs) AddParam(ctx context.Context, structId string, param swagger.NewSolidityStructParam) (*swagger.SolidityStruct, error) {
	resp, _, err := s.api.StructsStructIdParamsPost(ctx, param, structId)
	if err != nil {
		return nil, err
	}
	return &resp, nil
}

// UpdateParams updates multiple parameters of a struct
func (s *Structs) UpdateParams(ctx context.Context, businessId, structId string, updates []swagger.SolidityStructParamUpdate, paramIds []string) (*swagger.SolidityStruct, error) {
	if len(updates) != len(paramIds) {
		return nil, fmt.Errorf("number of updates (%d) must match number of parameter IDs (%d)", len(updates), len(paramIds))
	}

	converted := make([]swagger.AllOfstructIdParamsBodyUpdatesItems, len(updates))
	for i, u := range updates {
		var typeStruct *swagger.AllOfSolidityStructParamUpdateTypeStruct
		if u.TypeStruct != nil {
			typeStruct = &swagger.AllOfSolidityStructParamUpdateTypeStruct{
				Name:   u.TypeStruct.Name,
				Params: u.TypeStruct.Params,
			}
		}
		converted[i] = swagger.AllOfstructIdParamsBodyUpdatesItems{
			Id:           paramIds[i],
			Name:         u.Name,
			Description:  u.Description,
			Type_:        u.Type_,
			Index:        u.Index,
			StaticValue:  u.StaticValue,
			TypeSize:     u.TypeSize,
			TypeSize2:    u.TypeSize2,
			IsArray:      u.IsArray,
			ArraySize:    u.ArraySize,
			TypeStructId: u.TypeStructId,
			TypeStruct:   typeStruct,
		}
	}
	body := swagger.StructIdParamsBody{Updates: converted}
	resp, _, err := s.api.StructsStructIdParamsPut(ctx, body, structId)
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

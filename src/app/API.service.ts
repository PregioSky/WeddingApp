/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateGuest: OnCreateGuestSubscription;
  onUpdateGuest: OnUpdateGuestSubscription;
  onDeleteGuest: OnDeleteGuestSubscription;
};

export type CreateGuestInput = {
  id?: string | null;
  nameSurname: string;
  partecipation: string;
  intolerances?: string | null;
  shuttle: string;
  freeText?: string | null;
};

export type ModelGuestConditionInput = {
  nameSurname?: ModelStringInput | null;
  partecipation?: ModelStringInput | null;
  intolerances?: ModelStringInput | null;
  shuttle?: ModelStringInput | null;
  freeText?: ModelStringInput | null;
  and?: Array<ModelGuestConditionInput | null> | null;
  or?: Array<ModelGuestConditionInput | null> | null;
  not?: ModelGuestConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Guest = {
  __typename: "Guest";
  id: string;
  nameSurname: string;
  partecipation: string;
  intolerances?: string | null;
  shuttle: string;
  freeText?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateGuestInput = {
  id: string;
  nameSurname?: string | null;
  partecipation?: string | null;
  intolerances?: string | null;
  shuttle?: string | null;
  freeText?: string | null;
};

export type DeleteGuestInput = {
  id: string;
};

export type ModelGuestFilterInput = {
  id?: ModelIDInput | null;
  nameSurname?: ModelStringInput | null;
  partecipation?: ModelStringInput | null;
  intolerances?: ModelStringInput | null;
  shuttle?: ModelStringInput | null;
  freeText?: ModelStringInput | null;
  and?: Array<ModelGuestFilterInput | null> | null;
  or?: Array<ModelGuestFilterInput | null> | null;
  not?: ModelGuestFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelGuestConnection = {
  __typename: "ModelGuestConnection";
  items: Array<Guest | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionGuestFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  nameSurname?: ModelSubscriptionStringInput | null;
  partecipation?: ModelSubscriptionStringInput | null;
  intolerances?: ModelSubscriptionStringInput | null;
  shuttle?: ModelSubscriptionStringInput | null;
  freeText?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionGuestFilterInput | null> | null;
  or?: Array<ModelSubscriptionGuestFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type CreateGuestMutation = {
  __typename: "Guest";
  id: string;
  nameSurname: string;
  partecipation: string;
  intolerances?: string | null;
  shuttle: string;
  freeText?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateGuestMutation = {
  __typename: "Guest";
  id: string;
  nameSurname: string;
  partecipation: string;
  intolerances?: string | null;
  shuttle: string;
  freeText?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteGuestMutation = {
  __typename: "Guest";
  id: string;
  nameSurname: string;
  partecipation: string;
  intolerances?: string | null;
  shuttle: string;
  freeText?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetGuestQuery = {
  __typename: "Guest";
  id: string;
  nameSurname: string;
  partecipation: string;
  intolerances?: string | null;
  shuttle: string;
  freeText?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListGuestsQuery = {
  __typename: "ModelGuestConnection";
  items: Array<{
    __typename: "Guest";
    id: string;
    nameSurname: string;
    partecipation: string;
    intolerances?: string | null;
    shuttle: string;
    freeText?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateGuestSubscription = {
  __typename: "Guest";
  id: string;
  nameSurname: string;
  partecipation: string;
  intolerances?: string | null;
  shuttle: string;
  freeText?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateGuestSubscription = {
  __typename: "Guest";
  id: string;
  nameSurname: string;
  partecipation: string;
  intolerances?: string | null;
  shuttle: string;
  freeText?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteGuestSubscription = {
  __typename: "Guest";
  id: string;
  nameSurname: string;
  partecipation: string;
  intolerances?: string | null;
  shuttle: string;
  freeText?: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateGuest(
    input: CreateGuestInput,
    condition?: ModelGuestConditionInput
  ): Promise<CreateGuestMutation> {
    const statement = `mutation CreateGuest($input: CreateGuestInput!, $condition: ModelGuestConditionInput) {
        createGuest(input: $input, condition: $condition) {
          __typename
          id
          nameSurname
          partecipation
          intolerances
          shuttle
          freeText
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateGuestMutation>response.data.createGuest;
  }
  async UpdateGuest(
    input: UpdateGuestInput,
    condition?: ModelGuestConditionInput
  ): Promise<UpdateGuestMutation> {
    const statement = `mutation UpdateGuest($input: UpdateGuestInput!, $condition: ModelGuestConditionInput) {
        updateGuest(input: $input, condition: $condition) {
          __typename
          id
          nameSurname
          partecipation
          intolerances
          shuttle
          freeText
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateGuestMutation>response.data.updateGuest;
  }
  async DeleteGuest(
    input: DeleteGuestInput,
    condition?: ModelGuestConditionInput
  ): Promise<DeleteGuestMutation> {
    const statement = `mutation DeleteGuest($input: DeleteGuestInput!, $condition: ModelGuestConditionInput) {
        deleteGuest(input: $input, condition: $condition) {
          __typename
          id
          nameSurname
          partecipation
          intolerances
          shuttle
          freeText
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteGuestMutation>response.data.deleteGuest;
  }
  async GetGuest(id: string): Promise<GetGuestQuery> {
    const statement = `query GetGuest($id: ID!) {
        getGuest(id: $id) {
          __typename
          id
          nameSurname
          partecipation
          intolerances
          shuttle
          freeText
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetGuestQuery>response.data.getGuest;
  }
  async ListGuests(
    filter?: ModelGuestFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListGuestsQuery> {
    const statement = `query ListGuests($filter: ModelGuestFilterInput, $limit: Int, $nextToken: String) {
        listGuests(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            nameSurname
            partecipation
            intolerances
            shuttle
            freeText
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListGuestsQuery>response.data.listGuests;
  }
  OnCreateGuestListener(
    filter?: ModelSubscriptionGuestFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateGuest">>
  > {
    const statement = `subscription OnCreateGuest($filter: ModelSubscriptionGuestFilterInput) {
        onCreateGuest(filter: $filter) {
          __typename
          id
          nameSurname
          partecipation
          intolerances
          shuttle
          freeText
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateGuest">>
    >;
  }

  OnUpdateGuestListener(
    filter?: ModelSubscriptionGuestFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateGuest">>
  > {
    const statement = `subscription OnUpdateGuest($filter: ModelSubscriptionGuestFilterInput) {
        onUpdateGuest(filter: $filter) {
          __typename
          id
          nameSurname
          partecipation
          intolerances
          shuttle
          freeText
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateGuest">>
    >;
  }

  OnDeleteGuestListener(
    filter?: ModelSubscriptionGuestFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteGuest">>
  > {
    const statement = `subscription OnDeleteGuest($filter: ModelSubscriptionGuestFilterInput) {
        onDeleteGuest(filter: $filter) {
          __typename
          id
          nameSurname
          partecipation
          intolerances
          shuttle
          freeText
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteGuest">>
    >;
  }
}

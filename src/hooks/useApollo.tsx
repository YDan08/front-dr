import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CalculateRoomPaintDto = {
  walls: Array<WallDto>;
};

export type InkModel = {
  __typename?: 'InkModel';
  ink05: Scalars['Float']['output'];
  ink2: Scalars['Float']['output'];
  ink3: Scalars['Float']['output'];
  ink18: Scalars['Float']['output'];
  totalInk: Scalars['Float']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  CalculateRoomPaint: InkModel;
};


export type MutationCalculateRoomPaintArgs = {
  data: CalculateRoomPaintDto;
};

export type Query = {
  __typename?: 'Query';
  getHelloWorld: Scalars['String']['output'];
};

export type WallDto = {
  height: Scalars['Float']['input'];
  length: Scalars['Float']['input'];
  quantityDoors?: InputMaybe<Scalars['Float']['input']>;
  quantityWindows?: InputMaybe<Scalars['Float']['input']>;
};

export type CalculateRoomPaintMutationVariables = Exact<{
  data: CalculateRoomPaintDto;
}>;


export type CalculateRoomPaintMutation = { __typename?: 'Mutation', CalculateRoomPaint: { __typename?: 'InkModel', ink05: number, ink3: number, ink2: number, ink18: number, totalInk: number } };


export const CalculateRoomPaintDocument = gql`
    mutation CalculateRoomPaint($data: CalculateRoomPaintDto!) {
  CalculateRoomPaint(data: $data) {
    ink05
    ink3
    ink2
    ink18
    totalInk
  }
}
    `;
export type CalculateRoomPaintMutationFn = Apollo.MutationFunction<CalculateRoomPaintMutation, CalculateRoomPaintMutationVariables>;

/**
 * __useCalculateRoomPaintMutation__
 *
 * To run a mutation, you first call `useCalculateRoomPaintMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCalculateRoomPaintMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [calculateRoomPaintMutation, { data, loading, error }] = useCalculateRoomPaintMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCalculateRoomPaintMutation(baseOptions?: Apollo.MutationHookOptions<CalculateRoomPaintMutation, CalculateRoomPaintMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CalculateRoomPaintMutation, CalculateRoomPaintMutationVariables>(CalculateRoomPaintDocument, options);
      }
export type CalculateRoomPaintMutationHookResult = ReturnType<typeof useCalculateRoomPaintMutation>;
export type CalculateRoomPaintMutationResult = Apollo.MutationResult<CalculateRoomPaintMutation>;
export type CalculateRoomPaintMutationOptions = Apollo.BaseMutationOptions<CalculateRoomPaintMutation, CalculateRoomPaintMutationVariables>;
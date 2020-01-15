/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AlbumPerFirstPlayedYearCount
// ====================================================

export interface AlbumPerFirstPlayedYearCount_albumPerFirstPlayedYearCount {
  readonly __typename: 'AlbumPerYearCount';
  readonly year: number;
  readonly count: number;
}

export interface AlbumPerFirstPlayedYearCount {
  readonly albumPerFirstPlayedYearCount: ReadonlyArray<AlbumPerFirstPlayedYearCount_albumPerFirstPlayedYearCount>;
}

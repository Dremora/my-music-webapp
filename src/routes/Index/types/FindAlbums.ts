/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FindAlbums
// ====================================================

export interface FindAlbums_albums_firstPlayed_FirstPlayedTime {
  readonly __typename: 'FirstPlayedTime';
  readonly timestamp: number;
}

export interface FindAlbums_albums_firstPlayed_FirstPlayedDate {
  readonly __typename: 'FirstPlayedDate';
  readonly year: number;
  readonly month: number | null;
  readonly day: number | null;
}

export type FindAlbums_albums_firstPlayed =
  | FindAlbums_albums_firstPlayed_FirstPlayedTime
  | FindAlbums_albums_firstPlayed_FirstPlayedDate;

export interface FindAlbums_albums {
  readonly __typename: 'Album';
  readonly id: any;
  readonly artist: string;
  readonly title: string;
  readonly year: number | null;
  readonly firstPlayed: FindAlbums_albums_firstPlayed | null;
}

export interface FindAlbums {
  readonly albums: ReadonlyArray<FindAlbums_albums> | null;
}

export interface FindAlbumsVariables {
  readonly searchText: string;
}
